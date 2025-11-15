import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate'i EKLE
import { fetchEventDetail } from "../services/api";
import "./EventDetail.css"; 
import siteLogo from "../assets/logo.png";
function EventDetail() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const navigate = useNavigate(); // Hook'u tanımla

    useEffect(() => {
        const loadEvent = async () => {
            const data = await fetchEventDetail(id);
            setEvent(data);
        };
        loadEvent();
    }, [id]);

    if (!event) return <p>Yükleniyor...</p>;

    // Geri tuşu fonksiyonu
    const handleGoBack = () => {
        // Eğer geçmiş varsa geri git, yoksa ana sayfaya yönlendir
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate("/#home-top");
        }

        // Dönüşte sayfanın en üstüne kaydır
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
    };

    return (
        <div className="event-detail-container"> {/* Class ismini değiştirdik */}

            {/* Geri Butonu */}
            <button onClick={handleGoBack} className="back-button">
                ← Geri Dön
            </button>

            {/* Resim (Önce görsellik, sonra bilgi) */}
            {event.image ? (
                <div className="event-image-wrapper">
                    <img
                        src={event.image}
                        alt={event.name}
                        className="event-image"
                    />
                </div>
            ) : (
                <div className="event-image-wrapper">
                    <img
                        src={siteLogo}
                        alt="Default"
                        className="event-image"
                    />
                </div>
            )}


            {/* Başlık ve Ana Bilgiler */}
            <div className="event-header">
                <h1 className="event-title">{event.name}</h1>

                {/* Tarih ve Konum Kutusu */}
                <div className="event-meta-box">
                    <div className="meta-item">
                        <span className="meta-icon">📅</span>
                        <div className="meta-text">
                            <strong>Tarih</strong>
                            <span>{new Date(event.date).toLocaleDateString("tr-TR", {
                                year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                            })}</span>
                        </div>
                    </div>
                    <div className="meta-item">
                        <span className="meta-icon">📍</span>
                        <div className="meta-text">
                            <strong>Konum</strong>
                            <span>{event.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Açıklama */}
            <div className="event-description">
                <h2>Etkinlik Açıklaması</h2>
                <div
                    className="description-content"
                    dangerouslySetInnerHTML={{ __html: event.description }}
                />
            </div>

        </div>
    );
}

export default EventDetail;