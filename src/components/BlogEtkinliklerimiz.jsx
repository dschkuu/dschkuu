import React, { useEffect, useState } from "react";
import "./BlogEtkinliklerimiz.css";
import { fetchBlogs, fetchEvents } from "../services/api";
import { useNavigate } from "react-router-dom";
import siteLogo from "../assets/logo.png";

function BlogEtkinliklerimiz() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const blogs = await fetchBlogs();
      const events = await fetchEvents();

      const combined = [
        ...blogs.map((b) => ({
          ...b,
          type: "blog",
          date: b.published_date,
        })),
        ...events.map((e) => ({
          ...e,
          type: "event",
          date: e.date,
        })),
      ]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 6);

      setItems(combined);
    };

    getData();
  }, []);

  const handleClick = (item) => {
    if (item.type === "blog") navigate(`/blog/${item.id}`);
    else navigate(`/event/${item.id}`);

    // Sayfa değiştikten hemen sonra en üste kaydır
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="blog-etkinlikler" className="blog-section">
      <h2 className="blog-title">Blog / Etkinliklerimiz</h2>

      <div className="blog-layout">
        {items.length > 0 ? (
          <>
            {/* Ana büyük kart */}
            <div className="main-card" onClick={() => handleClick(items[0])}>
              <img
                src={items[0].image || siteLogo}
                alt={items[0].title || items[0].name}
              />
              <p>{items[0].title || items[0].name}</p>
            </div>

            {/* Sağdaki kart grubu */}
            <div className="side-cards">
              <div className="top-cards">
                {items.slice(1, 4).map((item) => (
                  <div
                    key={item.id}
                    className="small-card"
                    onClick={() => handleClick(item)}
                  >
                    <img
                      src={item.image || siteLogo}
                      alt={item.title || item.name}
                    />
                    <p>{item.title || item.name}</p>
                  </div>
                ))}
              </div>

              <div className="bottom-cards">
                {items.slice(4, 6).map((item) => (
                  <div
                    key={item.id}
                    className="small-card"
                    onClick={() => handleClick(item)}
                  >
                    <img
                      src={item.image || siteLogo}
                      alt={item.title || item.name}
                    />
                    <p>{item.title || item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <p>Veriler yükleniyor...</p>
        )}
      </div>
    </section>
  );
}

export default BlogEtkinliklerimiz;
