import React, { useEffect, useState } from "react";
import { fetchSponsors } from "../services/api";
import "./Sponsorlar.css";
import defaultLogo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Sponsorlar() {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getSponsors = async () => {
      try {
        const data = await fetchSponsors();
        if (data && Array.isArray(data)) setSponsors(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Sponsorlar yüklenemedi.");
        setLoading(false);
      }
    };
    getSponsors();
  }, []);

  const handleClick = () => {
    navigate("/sponsors");
  };

  if (loading) return <p style={{ padding: "20px" }}>Sponsorlar yükleniyor...</p>;
  if (error) return <p style={{ padding: "20px", color: "red" }}>{error}</p>;

  return (
    <section id="sponsorlar" className="sponsorlar-section">
      <div className="section-wrapper">
        <h2 className="blog-title">Sponsorlarımız</h2>
        {/* DÜZENLEME: Başlık sınıfı 'blog-title' olarak değiştirildi */}
        <div className="sponsorlar-grid-container">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id || Math.random()}
              className="sponsor-logo-wrapper"
              onClick={handleClick}
            >
              <img
                src={sponsor.image || defaultLogo}
                alt={sponsor.name || "Sponsor"}
                className="sponsorlar-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsorlar;
