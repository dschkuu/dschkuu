import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import EventDetail from "./pages/EventDetail";
import BlogEventList from "./pages/BlogEventList";
import SponsorPage from "./pages/SponsorlarPage";
import IletisimPage from "./pages/IletisimPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import HakkimizdaPage from "./pages/HakkimizdaPage";
import ArsivPage from "./pages/ArsivPage";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  // Sayfa yenilendiğinde en üste git
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  // Light mode'u zorla - GÜÇLÜ VERSİYON
  useEffect(() => {
    const forceLightMode = () => {
      const html = document.documentElement;
      const body = document.body;
      const root = document.getElementById('root');
      
      // Style zorla
      html.style.colorScheme = 'light';
      html.style.backgroundColor = '#ffffff';
      html.style.color = '#213547';
      html.style.filter = 'none';
      
      body.style.colorScheme = 'light';
      body.style.backgroundColor = '#ffffff';
      body.style.color = '#213547';
      body.style.filter = 'none';
      
      if (root) {
        root.style.backgroundColor = '#ffffff';
        root.style.color = '#213547';
        root.style.filter = 'none';
      }
      
      // Meta tagları güncelle/ekle
      const updateOrCreateMeta = (name, content) => {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.name = name;
          document.head.appendChild(meta);
        }
        meta.content = content;
      };
      
      updateOrCreateMeta('color-scheme', 'light only');
      updateOrCreateMeta('theme-color', '#ffffff');
      updateOrCreateMeta('supported-color-schemes', 'light');
    };

    // İlk yüklemede
    forceLightMode();
    
    // Periyodik kontrol (bazı tarayıcılar geç yükleme yapar)
    const interval = setInterval(forceLightMode, 1000);
    
    // 10 saniye sonra interval'i temizle
    setTimeout(() => clearInterval(interval), 10000);
    
    // MutationObserver ile değişiklikleri izle
    const observer = new MutationObserver(() => {
      forceLightMode();
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style', 'class']
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bloglar/:id" element={<BlogDetail />} />
        <Route path="/etkinlikler/:id" element={<EventDetail />} />
        <Route path="/blog-etkinlik" element={<BlogEventList />} />
        <Route path="/sponsorlar" element={<SponsorPage />} />
        <Route path="/iletisim" element={<IletisimPage />} />
        <Route path="/kullanim-sartlari" element={<TermsPage />} />
        <Route path="/gizlilik-guvenlik" element={<PrivacyPage />} />
        <Route path="/hakkimizda" element={<HakkimizdaPage />} />
        <Route path="/arsiv" element={<ArsivPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;