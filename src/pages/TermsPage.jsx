import React, { useEffect } from "react";
import "./TermsPage.css";

function TermsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="terms-page">
      <h2 className="page-title">Kullanım Şartları</h2>

      <p className="terms-intro">
        Bu web sitesi, Hasan Kalyoncu Üniversitesi Developer Student Club (DSC HKÜ) topluluğu
        tarafından hazırlanmıştır. Site, topluluk etkinlikleri, blog yazıları ve duyurular hakkında
        bilgi vermek amacıyla oluşturulmuştur.
      </p>

      <div className="terms-section">
        <h3 className="section-title">1. Genel Bilgiler</h3>
        <p>
          Site yalnızca bilgilendirme amacı taşır. Buradaki içerikler resmi veya ticari beyan
          niteliği taşımaz. Siteyi kullanmanız, bu şartları ve aşağıdaki tüm hükümleri kabul ettiğiniz
          anlamına gelir.
        </p>
      </div>

      <div className="terms-section">
        <h3 className="section-title">2. İçerik Kullanımı</h3>
        <p>
          Web sitesindeki tüm içerik (metin, görsel, logo vb.) DSC HKÜ’ye aittir veya ilgili kaynak
          belirtilmiştir. İzinsiz çoğaltılması, dağıtılması veya ticari amaçla kullanılması yasaktır.
          İçerikler yalnızca kişisel ve bilgilendirme amaçlı kullanılabilir.
        </p>
      </div>

      <div className="terms-section">
        <h3 className="section-title">3. Sorumluluk Reddi</h3>
        <p>
          DSC HKÜ, sitede sunulan bilgilerin doğruluğunu korumaya çalışsa da; hata, eksiklik,
          teknik aksaklık veya içerikten kaynaklı herhangi bir zarar veya kayıptan sorumlu değildir.
          Siteyi kullanmanız, tüm riskleri kabul ettiğiniz anlamına gelir.
        </p>
      </div>

      <div className="terms-section">
        <h3 className="section-title">4. Harici Bağlantılar</h3>
        <p>
          Site, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar yalnızca
          bilgilendirme amaçlıdır. DSC HKÜ, harici sitelerin içeriklerinden, gizlilik politikalarından
          veya hizmetlerinden sorumlu tutulamaz.
        </p>
      </div>

      <div className="terms-section">
        <h3 className="section-title">5. Reklamlar ve Çerezler</h3>
        <p>
          Sitede üçüncü taraf reklamlar bulunabilir. Reklam sağlayıcıları çerezler veya benzeri
          teknolojiler kullanabilir. DSC HKÜ, reklamların içeriği, doğruluğu veya güvenilirliğinden
          sorumlu değildir. Kullanıcı, reklamları görüntüleyerek bu şartları kabul etmiş sayılır.
        </p>
        <p>
          Herhangi bir reklamın neden olabileceği doğrudan veya dolaylı zararlardan kullanıcı sorumludur;
          DSC HKÜ bu tür zararlar nedeniyle sorumlu tutulamaz.
        </p>
      </div>

      <div className="terms-section">
        <h3 className="section-title">6. Kullanım Kısıtlamaları</h3>
        <p>
          Siteyi yasa dışı, zararlı, başkalarının haklarına müdahale eden veya kötü niyetli şekilde
          kullanmak yasaktır. Bu kurallara uymayan kullanıcılar doğabilecek hukuki veya maddi
          sorumluluklardan bizzat sorumludur.
        </p>
      </div>

      <div className="terms-section">
        <h3 className="section-title">7. Uygulanacak Hukuk</h3>
        <p>
          Kullanım şartları ve siteyle ilgili anlaşmazlıklarda Türkiye Cumhuriyeti kanunları geçerlidir.
          Kullanıcılar, olası ihtilafların Türkiye mahkemelerinde çözüleceğini kabul etmiş sayılır.
        </p>
      </div>

      <div className="terms-section">
        <h3 className="section-title">İletişim</h3>
        <p className="terms-mail">
          Sorular ve talepler için:{" "}
          <a
            className="mail-link"
            href="mailto:dschkuu@gmail.com?subject=Kullanım Şartları Hakkında&body=Merhaba DSC HKÜ ekibi,"
          >
            dschkuu@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default TermsPage;
