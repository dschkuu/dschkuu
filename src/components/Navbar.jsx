import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#anasayfa" className="logo">
          <img src="/logo.png" alt="Logo" className="logo-img" />
          <span className="logo-text">DSC Hasan Kalyoncu Üniversitesi</span>
        </a>
      </div>
      <div className="navbar-right">
        <a href="#home-top">Anasayfa</a>
        <a href="#hakkimizda">Hakkımızda</a>
        <a href="#blog">Blog/Etkinliklerimiz</a>
        <a href="#sponsorlar">Sponsorlarımız</a>
        <a href="#iletisim">İletişim</a>
      </div>
    </nav>
  );
}

export default Navbar;
