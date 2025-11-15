import React, { useEffect, useState } from "react";
import Resim1 from "../assets/resim1.png";
import { fetchSettings } from "../services/api";
import AboutSection from "../components/Hakkimizda";
import BlogEtkinliklerimiz from "../components/BlogEtkinliklerimiz";
import Sponsorlar from "../components/Sponsorlar";
import { useLocation, useNavigate } from "react-router-dom";

import "./Home.css";

function Home() {
  const [joinLink, setJoinLink] = useState("#");
  const [contentLoaded, setContentLoaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSettings().then((data) => {
      if (data && data.join_link) setJoinLink(data.join_link);
    });
  }, []);

  // İçerik yüklendiğinde flag'i set et
  useEffect(() => {
    setContentLoaded(true);
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo && contentLoaded) {
      // Birden fazla deneme yap
      let attempts = 0;
      const maxAttempts = 10;
      
      const tryScroll = () => {
        const section = document.querySelector(location.state.scrollTo);
        if (section) {
          const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 80;
          const y = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight + 10;
          window.scrollTo({ top: y, behavior: "smooth" });
          navigate(location.pathname, { replace: true, state: {} });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, 100);
        }
      };

      // İlk denemeyi biraz geciktir
      setTimeout(tryScroll, 100);
    }
  }, [location, navigate, contentLoaded]);

  const goToBlogEvents = () => {
    navigate("/blog-etkinlik");
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