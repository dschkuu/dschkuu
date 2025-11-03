import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import funny404 from "../assets/funny404.json";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <div className="notfound-animation">
          <Lottie animationData={funny404} loop={true} />
        </div>

        <h1 className="notfound-title">404: Route bulunamadı</h1>
        <p className="notfound-subtitle">Sanırım Bruce Banner (Hulk), sunucuya sinirlenip bu route'u kırmış. Ben de tam Hulk'a sakinleştirici çay ☕ hazırlıyordum. Ne yazık ki bu bir try-catch hatası değil, bildiğiniz hata.</p>
        <Link to="/" className="notfound-button">
          Ana sayfaya dön 🏠
        </Link>
      </div>
    </div>
  );
}
