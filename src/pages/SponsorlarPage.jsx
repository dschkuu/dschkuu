import React, { useEffect, useState } from "react";
import { fetchSponsors } from "../services/api";
import "./SponsorlarPage.css";
import defaultLogo from "../assets/logo.png";

function SponsorlarPage() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const getSponsors = async () => {
      try {
        const data = await fetchSponsors();
        if (data && Array.isArray(data)) setSponsors(data);
        window.scrollTo(0, 0);
      } catch (err) {
        console.error("Sponsorlar yüklenemedi:", err);
      }
    };
    getSponsors();
  }, []);

  return (
    <section className="sponsorlar-section">
      {/* Başlık */}
      <h2 className="sponsorlar-title">Sponsorlarımız</h2>

      {/* Giriş yazısı */}
      <p className="sponsorlar-intro">
        Değerli Destekçilerimiz ve Potansiyel Ortaklarımız, DSC olarak biz, teknolojiyi tutkuyla takip eden, çözüm odaklı projeler üreten ve sürekli öğrenmeyi hedefleyen dinamik bir topluluğuz. Her faaliyetimiz, üyelerimizi sektörün ihtiyaç duyduğu yetkinliklerle donatmak ve dijital dünyada fark yaratan bireyler olmalarını sağlamak üzerine kuruludur. Vizyonumuz büyük; ancak bu vizyonu gerçeğe dönüştürmek ve topluluğumuzun etki alanını genişletmek için güçlü iş ortaklarına ihtiyacımız var.
      </p>

      {/* Alt başlık ve metinler */}
      <h3 className="sponsorlar-subtitle">Neden DSC'ye Sponsor Olmalısınız?</h3>
      <p className="sponsorlar-text">
        Bizimle yapacağınız iş birliği, yalnızca bir desteğin ötesinde, geleceğe yapılan stratejik bir yatırımdır. DSC'ye sponsor olarak:
      </p>
      <ul className="sponsorlar-list">
        <li>Doğrudan Yetenek Havuzuna Erişim: Üniversite çağındaki en parlak ve en motive geliştirici, mühendis ve tasarımcı adaylarına doğrudan ulaşma fırsatı yakalarsınız. Erken kariyer dönemlerinde marka bilinirliğinizi artırır, potansiyel işe alım hedeflerinize ulaşırsınız.</li>
        <li>Marka Bilinirliği ve İtibar: Etkinliklerimizde, sosyal medya kanallarımızda ve web sitemizde yer alarak markanızın yenilikçilik, teknolojiye yatırım ve eğitime destek vizyonunu geniş kitlelere duyurursunuz.</li>
        <li>Sosyal Sorumluluk Katkısı: Gençlerin gelişimine ve ülkemizin teknolojik ilerlemesine doğrudan katkı sağlamanın getirdiği itibari değeri elde edersiniz.</li>
      </ul>

      <h3 className="sponsorlar-subtitle">İş Birliği Olanaklarımız</h3>
      <p className="sponsorlar-text">
        Size özel esnek sponsorluk paketleri sunarak, hedeflerinize en uygun iş birliğini hayata geçirebiliriz. Destekleriniz; etkinliklerimizin finansmanı, teknik eğitim materyali sağlanması, mentorluk desteği veya altyapı ihtiyaçlarımızın karşılanması gibi farklı şekillerde olabilir.
      </p>
      <ul className="sponsorlar-list">
        <li>Etkinliklerde Logo Görünürlüğü</li>
        <li>Üyelerimize Yönelik Özel Atölye ve Webinarlar Düzenleme</li>
        <li>Web Sitemizde ve Sosyal Medyada Tanıtım</li>
        <li>Proje Geliştirme Süreçlerimize Mentorluk Sağlama</li>
      </ul>

      <p className="sponsorlar-text">
        Gelin, bu heyecan verici yolculukta bize katılın. Birlikte, genç yeteneklerin potansiyelini açığa çıkaralım ve geleceğin teknoloji dünyasına yön verelim.
      </p>

      {/* Sponsor Görselleri */}
      <div className="sponsorlar-grid-container">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id || Math.random()}
            className="sponsor-logo-wrapper"
            onClick={() => {
              if (sponsor.website) window.open(sponsor.website, "_blank");
            }}
          >
            <img
              src={sponsor.image || defaultLogo}
              alt={sponsor.name || "Sponsor"}
              className="sponsorlar-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SponsorlarPage;