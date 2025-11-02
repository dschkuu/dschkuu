import React, { useEffect, useState, useRef } from "react";
import "./HakkimizdaPage.css";
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
import { fetchTeamMembers } from "../services/api";
import { useLocation } from "react-router-dom";
import trustTheProcess from "../assets/sounds/trusttheprocess.mp3";

function HakkimizdaPage() {
  const [team, setTeam] = useState([]);
  const location = useLocation();
  const audioCache = useRef([]);
  const clickCount = useRef(0);
  const secretAudio = useRef(null);

  // Her bölüm için ref oluşturuyoruz
  const vizyonRef = useRef(null);
  const ekipRef = useRef(null);
  const sosyalRef = useRef(null);

  useEffect(() => {
    const loadTeam = async () => {
      const data = await fetchTeamMembers();
      setTeam(data);
    };
    loadTeam();
    window.scrollTo(0, 0);
  }, []);
  // 🔹 URL'deki ?section parametresine göre kaydırma
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");

    let targetRef;
    if (section === "1") targetRef = vizyonRef;
    else if (section === "2") targetRef = ekipRef;
    else if (section === "3") targetRef = sosyalRef;

    if (targetRef && targetRef.current) {
      setTimeout(() => {
        const yOffset = -100; // 🔹 Üstten 100px boşluk bırak
        const y =
          targetRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 300);
    }

  }, [location]);
  // preload ve önbellekleme
  useEffect(() => {
    for (let i = 1; i <= 7; i++) {
      const audio = new Audio(`/sounds/piano${i}.mp3`);
      audioCache.current.push(audio);
    }
  }, []);
  useEffect(() => {
    for (let i = 1; i <= 7; i++) {
      const audio = new Audio(`/sounds/piano${i}.mp3`);
      audioCache.current.push(audio);
    }


    secretAudio.current = new Audio(trustTheProcess);
    secretAudio.current.volume = 0.6;
  }, []);


  return (
    <section className="hakkimizdapage-section">
      <h2 className="hakkimizdapage-title">Hakkımızda</h2>

      {/* --- Vizyon ve Misyon --- */}
      <div ref={vizyonRef} id="vizyonmisyon" className="hakkimizdapage-card">
        <h3 className="hakkimizdapage-subtitle">Vizyonumuz</h3>
        <p className="hakkimizdapage-text">
          Vizyonumuz, üyelerimizin öğrenmeye açık, yenilikçi ve çözüm odaklı
          bireyler olarak yetişmelerini destekleyen, ilham verici ve kapsayıcı
          bir teknoloji topluluğu oluşturmaktır. Geleceğin teknoloji liderlerini
          ve girişimcilerini yetiştirmeyi amaçlıyoruz; bu doğrultuda her
          üyemizin yalnızca teknik bilgiyle değil, aynı zamanda eleştirel
          düşünme, takım çalışması ve sektördeki gerçek sorunlara çözüm üretme
          becerileriyle donanmasını hedefliyoruz. Amacımız, üniversite hayatı
          boyunca edindikleri yetkinliklerle mezun olmadan sektöre hazır hale
          gelmelerini sağlamaktır.
        </p>
        <p className="hakkimizdapage-text">
          Bu vizyonu gerçekleştirmek için, uygulamalı öğrenme ve sürekli
          gelişim kültürünü benimsiyoruz. Programlarımız ve atölye
          çalışmalarımızla, üyelerimizin teorik bilgiyi pratikle birleştirmesini
          sağlıyor, yenilikçi projeler geliştirmelerine zemin hazırlıyoruz.
          Teknoloji alanındaki en güncel trendleri ve araçları takip ederek,
          topluluğumuzun her üyesinin sektörün gerektirdiği yetkinlikleri en üst
          düzeyde kazanmasına olanak tanıyor, bilgi ve deneyim paylaşımını
          teşvik eden dinamik bir ortam sağlıyoruz.
        </p>
        <p className="hakkimizdapage-text">
          Nihai hedefimiz, topluluğumuzun etki alanını yerel sınırların ötesine
          taşımaktır. Geliştirdiğimiz projelerle yalnızca kampüsümüzdeki
          sorunlara değil, toplumsal ve çevresel zorluklara da dijital çözümler
          sunarak sürdürülebilir bir etki yaratmayı hedefliyoruz. DSC olarak,
          üyelerimizin teknoloji dünyasında birer fark yaratan birey olmaları ve
          geleceği şekillendiren vizyoner bakış açısıyla hareket etmeleri,
          bölgemize ve ülkemize değer katmaları en büyük arzumuzdur.
        </p>

        <h3 className="hakkimizdapage-subtitle">Misyonumuz</h3>
        <p className="hakkimizdapage-text">
          DSC olarak misyonumuz, teorik bilgiyi pratik uygulamalarla
          birleştirerek üyelerimizin teknoloji alanındaki potansiyelini en üst
          düzeye çıkarmaktır. Bu doğrultuda, sürekli olarak güncel ve uygulamalı
          eğitim içerikleri sunmak, mentorluk ve takım çalışması fırsatları
          yaratarak üyelerimizin teknik ve sosyal becerilerini geliştirmek temel
          hedefimizdir.
        </p>
        <p className="hakkimizdapage-text">
          Yerel sorunlara teknoloji tabanlı çözümler üreten projeleri
          destekleyerek, yalnızca yetkin bireyler değil, aynı zamanda topluma
          değer katan, sorumluluk sahibi geliştiriciler yetiştirmeyi misyon
          edinmekteyiz.
        </p>
      </div>

      {/* --- Ekibimiz --- */}
      <div ref={ekipRef} id="ekibimiz" className="hakkimizdapage-card">
        <h3 className="hakkimizdapage-subtitle">Ekibimiz</h3>
        <div className="hakkimizdapage-team-grid">
          {team.length > 0 ? (
            team.map((member, index) => (
              <div
                key={member.id}
                className="team-card"
                onMouseEnter={() => {
                  const noteNumber = index % 7;
                  const audio = audioCache.current[noteNumber];
                  if (audio) {
                    audio.currentTime = 0;
                    audio.volume = 0.4;
                    audio.play();
                  }
                }}
                onClick={() => {
                  if (index === 0) {
                    clickCount.current += 1;
                    if (clickCount.current === 6) {
                      secretAudio.current.currentTime = 0;
                      secretAudio.current.play();
                      clickCount.current = 0; 
                    }
                  }
                }}
              >
                {member.photo && (
                  <img src={member.photo} alt={member.name} className="team-photo" />
                )}
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
              </div>
            ))
          ) : (
            <p className="hakkimizdapage-loading">Ekibimiz yükleniyor...</p>
          )}
        </div>

      </div>

      {/* --- Sosyal Medya --- */}
      <div ref={sosyalRef} id="sosyalmedya" className="hakkimizdapage-card">
        <h3 className="hakkimizdapage-subtitle">Sosyal Medya</h3>
        <div className="social-media-list">
          <div className="social-media-item">
            <a
              href="https://www.instagram.com/dschasankalyoncu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-username"
            >
              <FaInstagram className="social-icon" />
              <span>@dschasankalyoncu</span>
            </a>
          </div>

          <div className="social-media-item">
            <a
              href="https://www.youtube.com/@dschku"
              target="_blank"
              rel="noopener noreferrer"
              className="social-username"
            >
              <FaYoutube className="social-icon" />
              <span>@dschku</span>
            </a>
          </div>

          <div className="social-media-item">
            <a
              href="https://www.linkedin.com/in/dschku"
              target="_blank"
              rel="noopener noreferrer"
              className="social-username"
            >
              <FaLinkedin className="social-icon" />
              <span>@dschku</span>
            </a>
          </div>

          <div className="social-media-item">
            <a
              href="https://x.com/dsc_hkuu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-username"
            >
              <FaTwitter className="social-icon" />
              <span>@dsc_hkuu</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HakkimizdaPage;
