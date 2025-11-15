import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [clickCount, setClickCount] = useState(0);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 80;
      // offsetTop kullanarak sayfanın başından itibaren gerçek pozisyonu al
      const elementPosition = section.offsetTop;
      const offsetPosition = elementPosition - navbarHeight - 10;

      window.scrollTo({ 
        top: offsetPosition, 
        behavior: "smooth" 
      });
    }
  };

  // --- Footer linkleri için: sadece scroll/navigate yap, Easter egg yok ---
  const handleFooterClick = (e, sectionId = null, targetPage = null) => {
    e.preventDefault();
    setClickCount(0); // Her link tıklanınca reset

    if (targetPage && location.pathname !== targetPage) {
      navigate(targetPage, { state: { scrollTo: sectionId } });
    } else {
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

  // --- Easter egg sadece footer-bottom için çalışacak ---
  const handleEasterEgg = () => {
    setClickCount((prev) => {
      const newVal = prev + 1;
      if (newVal >= 3) {
        navigate("/arsiv");
        return 0;
      }
      return newVal;
    });
  };

  // Sayfa değişiminde scroll yapılacaksa uygula
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => scrollToSection(sectionId), 500);
    }
  }, [location]);

  const goToBlogEventsPage = (e) => {
    e.preventDefault();
    setClickCount(0);
    navigate("/blog-etkinlik");
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-columns">

        {/* --- COLUMN 1 --- */}
        <div className="footer-column">
          <h3>DSC</h3>
          <ul>
            <li>
              <a
                href=""
                onClick={(e) => handleFooterClick(e, "#home-top", "/")}
              >
                Ana Sayfa
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={(e) => handleFooterClick(e, "#hakkimizda", "/")}
              >
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="" onClick={goToBlogEventsPage}>
                Blog / Etkinliklerimiz
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={(e) => handleFooterClick(e, "#sponsorlar", "/")}
              >
                Sponsorlarımız
              </a>
            </li>
          </ul>
        </div>

        {/* --- COLUMN 2 --- */}
        <div className="footer-column">
          <h3>Sosyal Medya</h3>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/dschasankalyoncu"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@dschku"
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dschku"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://x.com/dsc_hkuu"
                target="_blank"
                rel="noreferrer"
              >
                X
              </a>
            </li>
          </ul>
        </div>

        {/* --- COLUMN 3 --- */}
        <div className="footer-column">
          <h3>İletişim</h3>
          <ul>
            <li>
              <a
                href=""
                onClick={(e) =>
                  handleFooterClick(e, "#iletisim", "/iletisim")
                }
              >
                İletişim Maili
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={(e) => handleFooterClick(e, "#sss", "/iletisim")}
              >
                SSS
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setClickCount(0);
                  navigate("/kullanim-sartlari");
                  window.scrollTo(0, 0);
                }}
              >
                Kullanım Şartları
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setClickCount(0);
                  navigate("/gizlilik-guvenlik");
                  window.scrollTo(0, 0);
                }}
              >
                Gizlilik Politikası
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* --- FOOTER BOTTOM (Sadece Easter Egg) --- */}
      <div
        className="footer-bottom"
        style={{ cursor: "pointer" }}
        onClick={handleEasterEgg}
      >
        © {new Date().getFullYear()}{" "}
        <a
          href="https://busrayagcioglu.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Büşra Yağcıoğlu
        </a>
        . All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;