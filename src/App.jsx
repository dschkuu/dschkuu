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

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/blog-events" element={<BlogEventList />} />
        <Route path="/sponsors" element={<SponsorPage />} />
        <Route path="/iletisim" element={<IletisimPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
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
