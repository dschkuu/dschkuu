import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate'i EKLE
import { fetchBlogDetail } from "../services/api";
import "./BlogDetail.css";

function BlogDetail() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate(); // Hook'u tanımla

    useEffect(() => {
        const loadBlog = async () => {
            const data = await fetchBlogDetail(id);
            setBlog(data);
        };
        loadBlog();
    }, [id]);

    if (!blog) return <p>Yükleniyor...</p>;

    // Geri butonuna tıklandığında çalışacak fonksiyon
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
        <div className="detail-container">

            {/* 1. GERİ BUTONU ALANI EKLENDİ */}
            <button onClick={handleGoBack} className="back-button">
                ← Geri Dön
            </button>

            {/* 2. Başlık */}
            <h1 className="detail-title">{blog.title}</h1>

            {/* 3. Resim */}
            {blog.image && (
                <div className="detail-image-wrapper">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="detail-image"
                    />
                </div>
            )}

            {/* 4. İçerik */}
            <div className="detail-content">
                <p>{blog.content}</p>
            </div>
        </div>
    );
}

export default BlogDetail;