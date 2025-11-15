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
  // 🔹 Sayfa yenilendiğinde (F5 veya Ctrl+R) de en üste gitmesi için
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  // 🔹 Light mode'u zorla - Dark mode'u engelle
  useEffect(() => {
    // HTML ve body'ye light mode zorla
    const html = document.documentElement;
    const body = document.body;
    
    html.style.colorScheme = 'light';
    html.style.backgroundColor = '#ffffff';
    body.style.backgroundColor = '#ffffff';
    body.style.color = '#213547';
    
    // Meta tag ekle veya güncelle
    let metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (!metaColorScheme) {
      metaColorScheme = document.createElement('meta');
      metaColorScheme.name = 'color-scheme';
      document.head.appendChild(metaColorScheme);
    }
    metaColorScheme.content = 'light only';
    
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.name = 'theme-color';
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.content = '#ffffff';
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