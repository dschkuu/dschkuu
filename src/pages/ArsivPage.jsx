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
    // Sayfa yüklendiğinde en üste scroll yap
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (loading) return <p className="arsiv-loading">Yükleniyor...</p>;
  if (!entries.length) return <p className="arsiv-loading">Arşiv verisi bulunamadı.</p>;

  return (
    <div className="arsiv-container">
      <h2 className="arsiv-title">Arşiv</h2>
      <div className="arsiv-list">
        {entries.map((entry, index) => (
          <div 
            key={entry.id} 
            className="arsiv-item"
            style={{ "--i": index }}
          >
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