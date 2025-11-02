import React, { useEffect, useState } from "react";
import { fetchBlogs, fetchEvents } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./BlogEventList.css";
import logo from "../assets/logo.png"; // varsayılan görsel
import { BASE_URL } from "../services/api";

function BlogEventList() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const blogs = await fetchBlogs();
      const events = await fetchEvents();

      const combined = [
        ...blogs.map((b) => ({
          id: b.id,
          title: b.title,
          image: b.image,
          content: b.content,
          date: b.published_date,
          type: "blog",
        })),
        ...events.map((e) => ({
          id: e.id,
          title: e.name,
          image: e.image,
          content: e.description,
          date: e.date,
          type: "event",
        })),
      ];

      combined.sort((a, b) => new Date(b.date) - new Date(a.date));
      setItems(combined.slice(0, 15));
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    getData();
  }, []);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = items.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleClick = (item) => {
    if (item.type === "blog") navigate(`/blog/${item.id}`);
    else navigate(`/event/${item.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // HTML içeriğini güvenli şekilde kesen fonksiyon
  const truncateHTML = (html, maxLength) => {
    if (!html) return "Açıklama mevcut değil.";
    const div = document.createElement("div");
    div.innerHTML = html;
    let text = div.textContent || div.innerText || "";
    if (text.length > maxLength) {
      text = text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="blog-event-list">
      <h2 className="page-title">Blog / Etkinliklerimiz</h2>

      {currentItems.map((item, index) => (
        <div
          key={item.id}
          className="blog-event-row"
          style={{ "--i": index }}
          onClick={() => handleClick(item)}
        >
          <img
            src={item.image ? `${BASE_URL}${item.image}` : logo}
            alt={item.title}
            className="blog-event-image"
          />

          <div className="blog-event-content">
            <h3>{item.title}</h3>
            <div
              className="blog-preview"
              dangerouslySetInnerHTML={{
                __html: truncateHTML(item.content, 250),
              }}
            />
            <div className="blog-event-footer">
              <span className="date">
                {new Date(item.date).toLocaleDateString("tr-TR")}
              </span>
              <button
                className="more-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(item);
                }}
              >
                Daha Fazla →
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => {
              setCurrentPage(i + 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BlogEventList;
