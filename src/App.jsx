import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
function App() {
  return (
    <Router>
      <Navbar /> {/* Route’ların DIŞINDA olacak */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/blog-events" element={<BlogEventList />} />
        <Route path="/sponsors" element={<SponsorPage />} />
        <Route path="/iletisim" element={<IletisimPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
      <Footer /> {/* Route’ların DIŞINDA olacak */}
    </Router>
  );
}

export default App;
