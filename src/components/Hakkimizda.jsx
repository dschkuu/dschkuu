import React from "react";
import "./Hakkimizda.css";
import Hakkimizda1 from "../assets/hakkimizda1.png";
import Hakkimizda2 from "../assets/hakkimizda2.png";
import Hakkimizda3 from "../assets/hakkimizda3.png";

function Hakkimizda() {
  const aboutItems = [
    { id: 1, title: "Vizyonumuz - Misyonumuz", image: Hakkimizda1 },
    { id: 2, title: "Ekibimiz", image: Hakkimizda2 },
    { id: 3, title: "Sosyal Medya", image: Hakkimizda3 },
  ];

  return (
    <section id="hakkimizda" className="hakkimizda-section">
      <h2 className="hakkimizda-title">Hakkımızda</h2>

      <div className="hakkimizda-grid">
        {aboutItems.map((item) => (
          <div key={item.id} className="hakkimizda-card">
            <img src={item.image} alt={item.title} className="hakkimizda-image" />
            <p className="hakkimizda-text">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hakkimizda;
