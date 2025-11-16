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

  useEffect(() => {
    // Sayfa yüklendiğinde navbar'ın hemen altına scroll yap
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <p className="arsiv-loading">Yükleniyor...</p>;
  if (!entries.length) return <p className="arsiv-loading">Arşiv verisi bulunamadı.</p>;

  return (
    <div className="arsiv-container">
      <h1 className="arsiv-title">Arşiv</h1>
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