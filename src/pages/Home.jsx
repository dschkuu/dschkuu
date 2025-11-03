import React, { useEffect, useState } from "react";
import Resim1 from "../assets/resim1.png";
import { fetchSettings } from "../services/api";
import AboutSection from "../components/Hakkimizda";
import BlogEtkinliklerimiz from "../components/BlogEtkinliklerimiz";
import Sponsorlar from "../components/Sponsorlar";
import { useLocation, useNavigate } from "react-router-dom";

import "./Home.css"; // ✅ CSS import

function Home() {
  const [joinLink, setJoinLink] = useState("#");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSettings().then((data) => {
      if (data && data.join_link) setJoinLink(data.join_link);
    });
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        const section = document.querySelector(location.state.scrollTo);
        if (section) {
          const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 80;
          const y = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
        navigate(location.pathname, { replace: true, state: {} });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  const goToBlogEvents = () => {
    navigate("/blog-events");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <main className="home-main" id="home-top">
        {/* Sol görsel */}
        <div className="hero-image">
          <img src={Resim1} alt="Hero Görseli" />
        </div>

        {/* Sağ metin */}
        <div className="hero-text">
          <h1>
            Öğren. Geliştir. <br />
            Teknoloji ile Geleceği Şekillendir.
          </h1>
          <h2>DSC Hasan Kalyoncu Üniversitesi</h2>

          <div className="buttons">
            <a href={joinLink} target="_blank" rel="noopener noreferrer">
              Hemen Üye Ol!
            </a>
            <button onClick={goToBlogEvents}>Etkinlikleri Gör</button>
          </div>
        </div>
      </main>

      <AboutSection />
      <BlogEtkinliklerimiz />
      <div id="sponsorlar">
        <Sponsorlar />
      </div>
    </>
  );
}

export default Home;
