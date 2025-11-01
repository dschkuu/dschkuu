import React, { useEffect } from "react";
import "./PrivacyPage.css";

function PrivacyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="privacy-page">
      <h2 className="page-title">Gizlilik Politikası</h2>

      <p className="privacy-intro">
        Bu web sitesi, Hasan Kalyoncu Üniversitesi Developer Student Club (DSC HKÜ) tarafından hazırlanmıştır.
        Kullanıcı gizliliği bizim için önemlidir. Bu politika, web sitemizde toplanan verilerin nasıl
        kullanıldığını ve korunduğunu açıklar.
      </p>

      <div className="privacy-section">
        <h3 className="section-title">1. Toplanan Bilgiler</h3>
        <p>
          Siteye giriş yapılmadığı için kişisel veri zorunlu olarak toplanmaz. Ancak, kullanıcı deneyimini
          iyileştirmek ve reklamların doğru gösterilmesi için aşağıdaki veriler otomatik olarak
          toplanabilir:
        </p>
        <ul>
          <li>IP adresi ve tarayıcı bilgileri</li>
          <li>Site ziyaret tarih ve saatleri</li>
          <li>Hangi sayfaların görüntülendiği ve etkileşimler</li>
        </ul>
      </div>

      <div className="privacy-section">
        <h3 className="section-title">2. Çerezler ve Benzeri Teknolojiler</h3>
        <p>
          Site, kullanıcı deneyimini ve reklamları optimize etmek amacıyla çerezler ve benzeri
          teknolojiler kullanabilir. Tarayıcı ayarlarından çerezler engellenebilir; bazı site
          özellikleri sınırlı çalışabilir.
        </p>
      </div>

      <div className="privacy-section">
        <h3 className="section-title">3. Reklamlar</h3>
        <p>
          Üçüncü taraf reklamlar kullanılabilir. Reklam sağlayıcıları çerez veya benzeri
          teknolojilerle kullanıcı davranışlarını analiz edebilir. DSC HKÜ, reklamların içeriği
          ve doğruluğundan sorumlu değildir. Reklamlardan kaynaklı herhangi bir zarardan kullanıcı
          sorumludur.
        </p>
      </div>

      <div className="privacy-section">
        <h3 className="section-title">4. Bilgilerin Kullanımı</h3>
        <p>
          Toplanan bilgiler yalnızca:
        </p>
        <ul>
          <li>Site performansını artırmak ve kullanıcı deneyimini geliştirmek</li>
          <li>Reklamların uygun şekilde gösterilmesini sağlamak</li>
          <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
        </ul>
        <p>Kişisel veri toplama yapılmaz.</p>
      </div>

      <div className="privacy-section">
        <h3 className="section-title">5. Bilgi Güvenliği</h3>
        <p>
          Toplanan bilgiler güvenli sunucularda saklanır ve yetkisiz erişime karşı korunur.
          DSC HKÜ, veri kaybı veya kötüye kullanım riskini en aza indirmek için gerekli
          teknik ve idari önlemleri alır.
        </p>
      </div>

      <div className="privacy-section">
        <h3 className="section-title">6. Kullanıcı Hakları</h3>
        <p>
          KVKK ve ilgili mevzuat gereği kullanıcılar, veri toplama hakkında bilgi talep edebilir
          ve itiraz haklarını kullanabilir. Sorular ve talepler için:
        </p>
        <p className="privacy-mail">
          <a
            className="mail-link"
            href="mailto:dschkuu@gmail.com?subject=Gizlilik Politikası Hakkında&body=Merhaba DSC HKÜ ekibi,"
          >
            dschkuu@gmail.com
          </a>
        </p>
      </div>

      <div className="privacy-section">
        <h3 className="section-title">7. Güncellemeler</h3>
        <p>
          Gizlilik politikası gerektiğinde güncellenebilir. Güncellenmiş sürüm yayımlandığı tarih itibarıyla
          yürürlüğe girer. Siteyi kullanmaya devam eden kullanıcılar güncel politikayı kabul etmiş sayılır.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPage;
