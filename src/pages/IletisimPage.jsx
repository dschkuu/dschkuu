import React, { useEffect } from "react";
import "./IletisimPage.css";

function IletisimPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 80;
        const y = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, []);

  const emailSubject = encodeURIComponent("DSC HKÜ İletişim Talebi");
  const emailBody = encodeURIComponent(
    "Merhaba DSC HKÜ Ekibi,\n\nSizinle aşağıdaki konuda iletişime geçmek istiyorum:\n\n(Kısaca buraya yazınız...)\n\nTeşekkür ederim,\nAdınız Soyadınız"
  );
  const mailtoLink = `mailto:dschkuu@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div id="iletisim" className="iletisim-page">
      <h2 className="page-title">İletişim</h2>

      <div className="iletisim-content">
        <h2 className="section-title">
          <u>Bizimle İletişime Geçin!</u>
        </h2>

        <p className="iletisim-intro">
          Her türlü soru, öneri, geri bildirim veya iş birliği talebiniz için
          tek bir adres üzerinden bize kolayca ulaşabilirsiniz. Ekibimiz size
          en kısa sürede geri dönüş yapacaktır.
        </p>

        <p className="iletisim-mail">
          <strong>Tüm İletişimler İçin E-posta:</strong>{" "}
          <a href={mailtoLink} className="mail-link">
            dschkuu@gmail.com
          </a>
        </p>

        <div id="sss" className="sss-section">
          <h2 className="section-title">
            <u>Sıkça Sorulan Sorular (SSS)</u>
          </h2>

          {[
            {
              q: "DSC ne anlama geliyor?",
              a: "DSC, Developer Student Club kısaltmasıdır ve üniversitemizdeki teknoloji odaklı öğrenci topluluğunu temsil eder.",
            },
            {
              q: "Kimler topluluğunuza katılabilir?",
              a: "Topluluğumuz, bölümü veya teknik seviyesi ne olursa olsun, teknolojiye ilgi duyan tüm üniversite öğrencilerine açıktır.",
            },
            {
              q: "Üyelik ücretli mi?",
              a: "Hayır, DSC topluluğuna katılım tamamen ücretsizdir. Etkinliklerimizin ve kaynaklarımızın çoğu da ücretsiz olarak sunulmaktadır.",
            },
            {
              q: "Ne tür etkinlikler düzenliyorsunuz?",
              a: "Yıl boyunca teknik atölyeler, kariyer seminerleri, hackathonlar, konuşmacı etkinlikleri ve sosyal buluşmalar düzenliyoruz.",
            },
            {
              q: "Hiç deneyimim yok, katılabilir miyim?",
              a: "Kesinlikle! Deneyimli ve deneyimsiz tüm öğrencilerin birlikte öğrenmesini destekliyoruz. Başlangıç seviyesine uygun eğitimlerimiz mevcuttur.",
            },
            {
              q: "Etkinliklerinizi nereden takip edebilirim?",
              a: "Tüm duyurularımız ve etkinlik kayıt linklerimiz web sitemizdeki Duyurular bölümünden ve sosyal medya hesaplarımızdan paylaşılmaktadır.",
            },
            {
              q: "Şirketler size nasıl destek olabilir?",
              a: (
                <>
                  Bize sponsorluk, mentorluk veya konuşmacı desteği gibi farklı şekillerde destek olabilirsiniz.
                  İş birliği teklifleri için{" "}
                  <a href={mailtoLink} className="mail-link">dschkuu@gmail.com</a>{" "}
                  adresi üzerinden bizimle iletişime geçebilirsiniz.
                </>
              ),
            },
          ].map((item, index) => (
            <div key={index} className="sss-item">
              <p className="sss-question"><strong>Soru:</strong> {item.q}</p>
              <p className="sss-answer"><strong>Cevap:</strong> {item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IletisimPage;
