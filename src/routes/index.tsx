import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-gym.jpg";
import logoAsset from "@/assets/erkan-logo.svg.asset.json";

const WA_URL =
  "https://wa.me/905061511150?text=Merhaba%2C%20ücretsiz%2030%20dakikalık%20deneme%20dersi%20hakkında%20bilgi%20almak%20istiyorum.";
const IG_URL = "https://instagram.com/erkanodnc";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "İstanbul Personal Trainer | Nişantaşı & Teşvikiye Kişisel Antrenör | Erkan Oduncu" },
      {
        name: "description",
        content:
          "İstanbul'un en iyi personal trainer'ı Erkan Oduncu ile zayıflamak artık çok kolay. Nişantaşı ve Teşvikiye'de yüz yüze veya online kişisel antrenörlük hizmeti. Ücretsiz 30 dakikalık deneme dersi için hemen iletişime geç!",
      },
      {
        name: "keywords",
        content:
          "İstanbul personal trainer, Nişantaşı personal trainer, Teşvikiye kişisel antrenör, online kişisel antrenör, kilo verme, fitness koçu, Erkan Oduncu",
      },
      { property: "og:title", content: "İstanbul Personal Trainer | Erkan Oduncu" },
      {
        property: "og:description",
        content:
          "Nişantaşı & Teşvikiye'de yüz yüze veya online kişisel antrenörlük. Ücretsiz 30 dk deneme dersi al.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.02 0C5.42 0 .07 5.34.07 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.93 11.93 0 0 0 5.74 1.46h.01c6.6 0 11.95-5.34 11.95-11.94a11.83 11.83 0 0 0-3.45-8.4ZM12.02 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98 1-3.63-.24-.37a9.86 9.86 0 0 1-1.52-5.25c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.15 1.04 7.03 2.92a9.87 9.87 0 0 1 2.91 7.03c0 5.48-4.46 9.85-9.95 9.85Zm5.46-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section-pad px-5 md:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {eyebrow && <div className="eyebrow text-gold mb-3">{eyebrow}</div>}
        {title && (
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] mb-10 uppercase">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

function Index() {
  const services = [
    { icon: "🏋️", title: "Birebir PT", desc: "Birebir özel ders ve profesyonel rehberlik" },
    { icon: "💻", title: "Online Koçluk", desc: "Bulunduğun her yerden bana ulaş" },
    { icon: "🥗", title: "Beslenme Takibi", desc: "Kişisel beslenme planı ve takibi" },
    { icon: "📊", title: "İlerleme Analizi", desc: "Haftalık değerlendirme ve performans takibi" },
  ];

  const steps = [
    { n: "01", t: "WhatsApp'tan yaz, randevunu al" },
    { n: "02", t: "Ücretsiz 30 dk deneme dersine gel" },
    { n: "03", t: "Kişisel programınla dönüşümüne başla" },
  ];

  const testimonials = [
    { name: "Selin K.", text: "3 ayda 12 kilo verdim ve kendimi çok daha enerjik hissediyorum." },
    { name: "Mert A.", text: "Online koçluk programı sayesinde evden antrenman yapmayı öğrendim." },
    { name: "Zeynep T.", text: "Beslenme planı ve takip sistemi inanılmaz işe yarıyor." },
  ];

  const trialIncludes = [
    "Vücut analizi ve hedef belirleme",
    "Sana özel antrenman önerisi",
    "Beslenme hakkında ilk adım rehberliği",
    "Sorularını cevaplarız",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16 h-16 md:h-20 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 shrink-0">
            <img src={logoAsset.url} alt="Erkan Oduncu Logo" className="h-8 w-auto md:h-10" />
            <span className="font-display text-lg md:text-xl uppercase tracking-wider text-white">
              Erkan <span className="text-gold">Oduncu</span>
            </span>
          </a>
          <ul className="hidden md:flex flex-1 items-center justify-end gap-4 lg:gap-8 text-xs lg:text-sm text-white/70 tracking-wide">
            {[
              { l: "Anasayfa", h: "/" },
              { l: "Hakkımda", h: "/hakkimda" },
              { l: "Danışmanlık Paketleri", h: "/paketler" },
              { l: "Sık Sorulan Sorular", h: "/sss" },
              { l: "Dönüşümler", h: "/donusumler" },
            ].map((item) => (
              <li key={item.l}>
                <a href={item.h} className="hover:text-white transition-colors whitespace-nowrap">
                  {item.l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Karanlık lüks spor salonunda ağırlık çalışan sporcu silueti"
          width={1080}
          height={1920}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.35) 40%, #0A0A0A 95%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 30%, rgba(212,160,23,0.18), transparent 55%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-8 pb-16 pt-28 md:pb-24">
          <div className="eyebrow text-gold mb-5 fade-up">Personal Trainer · İstanbul</div>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.88] uppercase fade-up">
            <span className="block text-white">Güçlü Bir Beden</span>
            <span className="block text-gold">Güçlü Bir Zihin</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl text-white/85 fade-up">
            Hedefine birlikte ulaşalım.
          </p>
          <div className="mt-8 fade-up">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-gold text-base md:text-lg">
              🎁 Ücretsiz 30 Dakikalık Deneme Dersi Al
            </a>
            <p className="mt-3 text-sm text-muted-foreground">Hemen yaz, bugün başla.</p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="border-y border-border/70 bg-card/50">
        <div className="mx-auto max-w-6xl grid grid-cols-3 divide-x divide-border/70">
          {[
            { i: "🏆", n: "+5", l: "Yıl Deneyim", d: "Profesyonel koçluk" },
            { i: "👥", n: "500+", l: "Danışan", d: "Başarı hikayeleri" },
            { i: "⭐", n: "4.9/5", l: "Memnuniyet", d: "%97 memnuniyet" },
          ].map((s) => (
            <div key={s.l} className="px-3 py-6 md:py-8 text-center">
              <div className="text-2xl md:text-3xl mb-1">{s.i}</div>
              <div className="font-display text-2xl md:text-3xl text-gold uppercase leading-none">
                {s.n}
              </div>
              <div className="eyebrow text-muted-foreground mt-2">{s.l}</div>
              <div className="text-xs text-muted-foreground/80 mt-1 hidden md:block">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRANSFORMATIONS TEASER */}
      <section className="px-5 md:px-8 pt-10">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-card border border-border p-6">
          <div>
            <div className="eyebrow text-gold mb-1">Önce / Sonra</div>
            <h3 className="font-display text-2xl md:text-3xl uppercase text-white">Danışan Dönüşümleri</h3>
            <p className="text-sm text-muted-foreground mt-1">Gerçek sonuçlar, gerçek danışanlar.</p>
          </div>
          <a href="/donusumler" className="btn-outline-gold whitespace-nowrap">Galeriyi Gör →</a>
        </div>
      </section>

      {/* FREE TRIAL */}
      <Section id="deneme" eyebrow="Sana Özel Teklif">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
          <div>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] uppercase">
              <span className="text-white">30 Dakikalık</span>
              <br />
              <span className="text-gold">Ücretsiz Deneme Dersi</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Seninle tanışalım, hedeflerini öğrenelim ve sana özel bir yol haritası çizelim —
              tamamen ücretsiz.
            </p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-gold mt-8">
              WhatsApp'tan Randevu Al →
            </a>
          </div>
          <ul className="bg-card border border-border p-6 md:p-8 space-y-4">
            {trialIncludes.map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <span className="text-gold-bright mt-0.5">✓</span>
                <span className="text-white/90">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <div className="hairline mx-auto max-w-6xl" />

      {/* SERVICES */}
      <Section eyebrow="Ne Sunuyorum" title="Hizmetlerim">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-border p-5 md:p-6 flex flex-col"
            >
              <div className="text-3xl md:text-4xl text-gold mb-4">{s.icon}</div>
              <h3 className="font-display text-xl md:text-2xl uppercase text-white">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 flex-1">{s.desc}</p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold mt-5 self-start"
              >
                Bilgi Al →
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section eyebrow="Süreç" title="Nasıl Çalışır?" className="bg-card/30">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="border-l-2 border-gold pl-5 py-2">
              <div className="font-display text-5xl text-gold leading-none">{s.n}</div>
              <p className="mt-3 text-white/90 text-lg">{s.t}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Hemen Başla →
          </a>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Referanslar" title="Danışanlarım Ne Diyor?">
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-card border border-border p-6 flex flex-col">
              <div className="text-gold-bright tracking-widest mb-3">★★★★★</div>
              <blockquote className="text-white/90 flex-1">"{t.text}"</blockquote>
              <figcaption className="mt-5 eyebrow text-muted-foreground">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section
        className="section-pad px-5 md:px-8 text-center relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,160,23,0.25), transparent 60%), linear-gradient(180deg, #141414, #0A0A0A)",
        }}
      >
        <div className="mx-auto max-w-3xl relative z-10">
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
            <span className="text-white">Değişime</span>{" "}
            <span className="text-gold">Kendinden Başla</span>
          </h2>
          <p className="mt-5 text-lg text-white/80">
            İlk adımı atmak için doğru an şu an.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-8 text-base md:text-lg"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp'tan Yaz
          </a>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
            <a href={`tel:+905061511150`} className="hover:text-gold transition-colors">
              +90 506 151 11 50
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors inline-flex items-center gap-2"
            >
              <InstagramIcon className="h-4 w-4" /> @erkanodnc
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-5 md:px-8 py-10">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="font-display text-xl uppercase tracking-wider text-white">
            Fitness Coach <span className="text-gold">Erkan Oduncu</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-gold transition-colors">
              <InstagramIcon />
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-muted-foreground hover:text-gold transition-colors">
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">© 2025 Erkan Oduncu. Tüm hakları saklıdır.</p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP FAB */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="wa-fab fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl"
        style={{ backgroundColor: "#25D366" }}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </main>
  );
}
