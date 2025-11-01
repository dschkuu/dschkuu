import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 🔧 Hakkımızda başlığına fazla boşluk olmaması için offset ayarladık (-10px daha yukarı)
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (!section) return;

    const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 80;
    const extraOffset = 10; // 🔧 Fazla boşluğu azaltmak için eklendi
    const y = section.getBoundingClientRect().top + window.pageYOffset - (navbarHeight - extraOffset);

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

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Logo" className="logo-img" />
          <span className="logo-text">DSC Hasan Kalyoncu Üniversitesi</span>
        </a>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
        <button onClick={() => handleSectionNavigation("#home-top")}>Anasayfa</button>
        <button onClick={() => handleSectionNavigation("#hakkimizda")}>Hakkımızda</button>
        <button onClick={goToBlogEventsPage}>Blog/Etkinliklerimiz</button>
        <button onClick={() => handleSectionNavigation("#sponsorlar")}>Sponsorlarımız</button>
        <button onClick={() => handleSectionNavigation("#iletisim")}>İletişim</button>
      </div>
    </nav>
  );
}

export default Navbar;
