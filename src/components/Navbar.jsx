import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

import btebelImg from "../assets/btebel.png";
import catImg from "../assets/cat.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showPromoOverlay, setShowPromoOverlay] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (!section) return;
    const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 80;
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight +
      10;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleSectionNavigation = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        scrollToSection(sectionId);
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  const goToBlogEventsPage = () => {
    setMenuOpen(false);
    navigate("/blog-events");
    window.scrollTo(0, 0);
  };

  const goToIletisimPage = () => {
    setMenuOpen(false);
    navigate("/iletisim");
    window.scrollTo(0, 0);
  };

  // 🔹 Gizli tıklama sayacı
  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount === 16) {
      setShowPromoOverlay(true);
      setClickCount(0);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo" onClick={handleLogoClick}>
            <img src="/logo.png" alt="Logo" className="logo-img" />
            <span className="logo-text">DSC Hasan Kalyoncu Üniversitesi</span>
          </div>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
          <button onClick={() => handleSectionNavigation("#home-top")}>
            Anasayfa
          </button>
          <button onClick={() => handleSectionNavigation("#hakkimizda")}>
            Hakkımızda
          </button>
          <button onClick={goToBlogEventsPage}>Blog/Etkinliklerimiz</button>
          <button onClick={() => handleSectionNavigation("#sponsorlar")}>
            Sponsorlarımız
          </button>
          <button onClick={goToIletisimPage}>İletişim</button>
        </div>
      </nav>

      
      {showPromoOverlay && (
        <div className="promo-layer">
          <div className="promo-box">
            <button
              className="close-btn"
              onClick={() => setShowPromoOverlay(false)}
            >
              ×
            </button>
            <img src={btebelImg} alt="Btebel" className="promo-img-top" />
            <h2>Tebrikler!</h2>
            <p>
              Bizden 1 Adet Poşet Çay Kazandınız! <br />
              Ödülünüzü almak için lütfen <br />
              <strong>“JBHVHG”</strong> kodunu ve bu sayfanın ekran görüntüsünü <br />
              <strong style={{ color: "#ffcc00" }}>dschkuu@gmail.com</strong>{" "}
              adresine gönderin.
            </p>
            <p className="small-text">(İstenen bilgileri gönderen ilk 5 kişi için geçerlidir.)</p>
            <img src={catImg} alt="Cat" className="promo-img-bottom" />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
