import { createFileRoute, Link } from "@tanstack/react-router";

const WA_URL =
  "https://wa.me/905061511150?text=Merhaba%2C%20ücretsiz%2030%20dakikalık%20deneme%20dersi%20hakkında%20bilgi%20almak%20istiyorum.";

const certs = [
  "Haliç Üniversitesi, Spor Yönetimi",
  "Egzersiz Uzmanlığı alanında aldığım eğitimler",
  "EREPS EQF Seviye 4 Antrenörlük Sertifikası",
  "TVGFBF 2. Kademe Antrenörlük Sertifikası",
];

export const Route = createFileRoute("/hakkimda")({
  head: () => ({
    meta: [
      { title: "Hakkımda | Erkan Oduncu Personal Trainer" },
      {
        name: "description",
        content:
          "Erkan Oduncu hakkında. 5 yıllık antrenörlük deneyimi ve 500+ öğrenci ile bire bir ve online fitness danışmanlığı.",
      },
      { property: "og:title", content: "Hakkımda | Erkan Oduncu" },
      {
        property: "og:description",
        content: "5 yıllık antrenörlük deneyimi ve 500+ öğrenci ile fitness danışmanlığı.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/hakkimda" },
    ],
    links: [{ rel: "canonical", href: "/hakkimda" }],
  }),
  component: About,
});

function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="px-5 md:px-8 pt-10 md:pt-16 pb-6 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="eyebrow text-muted-foreground hover:text-gold transition-colors">
            ← Anasayfa
          </Link>
          <div className="eyebrow text-gold mt-6 mb-3">Koç</div>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
            <span className="text-white">Hakkımda</span>
          </h1>
        </div>
      </header>

      {/* CONTENT */}
      <section className="section-pad px-5 md:px-8">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Sol: fotoğraf + istatistikler */}
          <div className="relative">
            <img
              src="/erkan-portrait.png.PNG"
              alt="Erkan Oduncu"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover object-top"
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gold text-ink p-6 md:p-8 max-w-[220px]">
              <div className="font-display font-black text-3xl md:text-4xl">5+</div>
              <div className="text-xs uppercase tracking-widest mt-1">Yıllık antrenörlük deneyimi</div>
            </div>
          </div>

          {/* Sağ: metin */}
          <div className="lg:pt-4">
            <div className="eyebrow text-gold mb-3">Hakkımda</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-[0.95] text-white mb-8">
              Ben Erkan Oduncu
            </h2>

            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Bu spor, hayatıma erken yaşlarda girdi ve zamanla sadece bir tutku olmaktan çıkıp
                geleceğimi inşa ettiğim bir yol haline geldi. Bugün geldiğim noktada en büyük hedefim,
                benimle çalışan herkese sadece fiziksel bir değişim değil, sporu hayatlarının kalıcı
                bir parçası haline getirme deneyimini yaşatmak.
              </p>
              <p>
                10 yıllık fitness sektörü tecrübem ve 5 yıllık antrenörlük deneyimimle, bugüne kadar
                500'ün üzerinde öğrenciyle birebir yol yürüdüm. Her biri, bu işi neden bu kadar
                içtenlikle yaptığımı bir kez daha hatırlattı bana.
              </p>
              <p className="text-foreground font-medium">
                Tüm bilgi birikimimi ve tecrübemi arkama alarak, şimdi sizlerle yürümeye hazırım.
              </p>
            </div>

            {/* Sertifikalar */}
            <div className="mt-10 border-t border-border pt-8">
              <div className="eyebrow text-gold mb-5">Eğitim & Sertifikalar</div>
              <ul className="space-y-3">
                {certs.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-10 inline-flex"
            >
              Ücretsiz Deneme Dersi →
            </a>
          </div>
        </div>
      </section>

      {/* İstatistik bar */}
      <section className="section-pad px-5 md:px-8 border-t border-border">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            { n: "10+", l: "Yıl Sektör Deneyimi" },
            { n: "5+", l: "Yıl Antrenörlük" },
            { n: "500+", l: "Öğrenci" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl md:text-5xl text-gold">{s.n}</div>
              <div className="eyebrow text-muted-foreground mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border px-5 md:px-8 py-8 text-center">
        <p className="text-xs text-muted-foreground">© 2025 Erkan Oduncu</p>
      </footer>
    </main>
  );
}
