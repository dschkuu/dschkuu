import React, { useEffect, useState } from "react";
import Resim1 from "../assets/resim1.png";
import { fetchSettings } from "../services/api";

function Home() {
    const [joinLink, setJoinLink] = useState("#");

    useEffect(() => {
        fetchSettings().then((data) => {
            if (data && data.join_link) setJoinLink(data.join_link);
        });
    }, []);

    return (
        <main
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "60px",
                gap: "50px",
                flexWrap: "wrap",
                flex: 1,
            }}
        >
            {/* Sol sütun: Görsel */}
            <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
                <img
                    src={Resim1}
                    alt="Hero Görseli"
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
                />
            </div>

            {/* Sağ sütun: Yazılar ve butonlar */}
            <div
                style={{
                    flex: "1 1 45%",
                    minWidth: "300px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "20px" }}>
                    Öğren. Geliştir. <br />
                    Teknoloji ile Geleceği Şekillendir.
                </h1>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "400", marginBottom: "30px" }}>
                    DSC Hasan Kalyoncu Üniversitesi
                </h2>
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                    <a
                        href={joinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: "#6ca2f4",
                            color: "white",
                            padding: "12px 24px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontWeight: "500",
                            flex: "1 1 150px",
                            textAlign: "center",
                        }}
                    >
                        Hemen Üye Ol!
                    </a>
                    <a
                        href="#blog-events"
                        style={{
                            backgroundColor: "white",
                            color: "black",
                            padding: "12px 24px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontWeight: "500",
                            border: "1px solid black",
                            flex: "1 1 150px",
                            textAlign: "center",
                        }}
                    >
                        Etkinlikleri Gör
                    </a>
                </div>
            </div>
        </main>
    );
}

export default Home;
