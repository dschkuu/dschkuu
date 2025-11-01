import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 80;
      const y = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleFooterClick = (e, sectionId, targetPage = null) => {
    e.preventDefault();

    if (targetPage && location.pathname !== targetPage) {
      // başka sayfadaysa yönlendir ve state gönder
      navigate(targetPage, { state: { scrollTo: sectionId } });
    } else {
      scrollToSection(sectionId);
    }
  };

  // Sayfa değişiminde scroll yapılacaksa uygula
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => scrollToSection(sectionId), 300);
    }
  }, [location]);

  const goToBlogEventsPage = (e) => {
    e.preventDefault();
    navigate("/blog-events");
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>DSC</h3>
          <ul>
            <li>
              <a
                href="#home-top"
                onClick={(e) => handleFooterClick(e, "#home-top", "/")}
              >
                Ana Sayfa
              </a>
            </li>
            <li>
              <a
                href="#hakkimizda"
                onClick={(e) => handleFooterClick(e, "#hakkimizda", "/")}
              >
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="/blog-events" onClick={goToBlogEventsPage}>
                Blog / Etkinliklerimiz
              </a>
            </li>
            <li>
              <a
                href="#sponsorlar"
                onClick={(e) => handleFooterClick(e, "#sponsorlar", "/")}
              >
                Sponsorlarımız
              </a>
            </li>
          </ul>
        </div>

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

        <div className="footer-column">
          <h3>İletişim</h3>
          <ul>
            <li>
              <a
                href="#iletisim"
                onClick={(e) => handleFooterClick(e, "#iletisim", "/iletisim")}
              >
                İletişim Maili
              </a>
            </li>
            <li>
              <a
                href="#sss"
                onClick={(e) => handleFooterClick(e, "#sss", "/iletisim")}
              >
                SSS
              </a>
            </li>
            <li>
              <a
                href="#gizlilik"
                onClick={(e) => handleFooterClick(e, "#gizlilik", "/iletisim")}
              >
                Gizlilik & Güvenlik
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        Made by{" "}
        <a
          href="https://busrayagcioglu.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Büşra Yağcıoğlu
        </a>
        . All Rights Reserved 2025
      </div>
    </footer>
  );
}

export default Footer;
