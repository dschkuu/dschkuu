import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>DSC</h3>
          <ul>
            <li><a href="#anasayfa">Ana Sayfa</a></li>
            <li><a href="#hakkimizda">Hakkımızda</a></li>
            <li><a href="#blog">Blog/Etkinliklerimiz</a></li>
            <li><a href="#sponsorlar">Sponsorlarımız</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Sosyal Medya</h3>
          <ul>
            <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
            <li><a href="https://youtube.com" target="_blank">Youtube</a></li>
            <li><a href="https://wa.me" target="_blank">Whatsapp</a></li>
            <li><a href="https://linkedin.com" target="_blank">Linkedin</a></li>
            <li><a href="https://x.com" target="_blank">X</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>İletişim</h3>
          <ul>
            <li><a href="#iletisim">İletişim Formu</a></li>
            <li><a href="#sss">SSS</a></li>
            <li><a href="#gizlilik">Gizlilik & Güvenlik</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        Made by <a href="https://busrayagcioglu.netlify.app/" target="_blank">Büşra Yağcıoğlu</a>. All Rights Reserved 2025
      </div>
    </footer>
  );
}

export default Footer;
