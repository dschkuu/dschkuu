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
    let attempts = 0;
    const maxAttempts = 20;
    
    const tryScroll = () => {
      const section = document.querySelector(sectionId);
      if (section) {
        const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 80;
        const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight - 20;

        window.scrollTo({ 
          top: offsetPosition, 
          behavior: "smooth" 
        });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 150);
      }
    };
    
    tryScroll();
  };

  const handleSectionNavigation = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      setTimeout(() => scrollToSection(sectionId), 100);
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
      }, 1000);
    }
  }, [location]);

  const goToBlogEventsPage = () => {
    setMenuOpen(false);
    navigate("/blog-etkinlik");
    window.scrollTo(0, 0);
  };

  const goToIletisimPage = () => {
    setMenuOpen(false);
    navigate("/iletisim");
    window.scrollTo(0, 0);
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
            <span className="logo-text">Hasan Kalyoncu Üniversitesi</span>
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
              <strong>"JBHVHG"</strong> kodunu ve bu sayfanın ekran görüntüsünü <br />
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