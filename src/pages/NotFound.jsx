import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import funny404 from "../assets/funny404.json";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 text-center">
      {/* Üstte animasyon */}
      <div className="w-72 h-72 mb-6">
        <Lottie animationData={funny404} loop={true} />
      </div>

      {/* Esprili yazı */}
      <h1 className="text-5xl font-bold text-green-400 mb-2">404</h1>
      <p className="text-lg text-gray-300 mb-3">
        Bu sayfayı yazmayı planladım ama… kahve arası uzadı ☕
      </p>
      <p className="text-sm text-gray-500 mb-8">
        (Belki bir sonraki commit’te eklerim, kim bilir 😅)
      </p>

      {/* Ana sayfaya dön butonu */}
      <Link
        to="/"
        className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-200"
      >
        Ana sayfaya dön 🏠
      </Link>
    </div>
  );
}
