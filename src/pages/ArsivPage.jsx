import React, { useEffect, useState } from "react";
import { fetchArsivEntries } from "../services/api";
import "./ArsivPage.css";

function ArsivPage() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEntries = async () => {
      const data = await fetchArsivEntries();
      setEntries(data.slice().reverse());
      setLoading(false);
    };
    getEntries();
  }, []);

  if (loading) return <p>Yükleniyor...</p>;
  if (!entries.length) return <p>Arşiv verisi bulunamadı.</p>;

  const truncateHTML = (html, maxLength = 250) => {
    if (!html) return "";
    const div = document.createElement("div");
    div.innerHTML = html;
    let text = div.textContent || div.innerText || "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="arsiv-container">
      <h1>Arşiv</h1>
      <div className="arsiv-list">
        {entries.map((entry) => (
          <div key={entry.id} className="arsiv-item">
            {entry.photo && (
              <img src={entry.photo} alt={entry.name} className="arsiv-photo" />
            )}
            <h2>{entry.name}</h2>
            <p className="arsiv-year">{entry.year}</p>
            <div
              className="arsiv-description"
              dangerouslySetInnerHTML={{ __html: entry.description }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArsivPage;
