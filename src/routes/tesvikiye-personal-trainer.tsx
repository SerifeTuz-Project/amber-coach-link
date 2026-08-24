import { createFileRoute } from "@tanstack/react-router";

const WA_URL =
  "https://wa.me/905061511150?text=Merhaba%2C%20Teşvikiye'de%20personal%20training%20hakkında%20bilgi%20almak%20istiyorum.";

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Erkan Oduncu Personal Trainer",
  description:
    "Teşvikiye'de birebir ve online personal training hizmeti. Kilo verme, kas yapma ve form değişimi için uzman koçluk.",
  url: "https://erkanoduncu.com/tesvikiye-personal-trainer",
  telephone: "+905061511150",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Teşvikiye",
    addressRegion: "Şişli, İstanbul",
    addressCountry: "TR",
  },
  geo: { "@type": "GeoCoordinates", latitude: "41.0478", longitude: "28.9936" },
  priceRange: "₺₺₺",
  openingHours: "Mo-Sa 08:00-21:00",
  sameAs: ["https://instagram.com/erkanodnc"],
});

export const Route = createFileRoute("/tesvikiye-personal-trainer")({
  head: () => ({
    meta: [
      { title: "Teşvikiye Personal Trainer | Erkan Oduncu — Kişisel Antrenör" },
      {
        name: "description",
        content:
          "Teşvikiye'nin en iyi personal trainer'ı Erkan Oduncu ile kilo ver, kas yap, form değiştir. Birebir yüz yüze antrenman ve online koçluk. Ücretsiz 30 dk deneme dersi.",
      },
      {
        name: "keywords",
        content:
          "Teşvikiye personal trainer, Teşvikiye kişisel antrenör, Teşvikiye PT, Teşvikiye fitness koçu, Teşvikiye kilo verme",
      },
      { property: "og:title", content: "Teşvikiye Personal Trainer | Erkan Oduncu" },
      {
        property: "og:description",
        content: "Teşvikiye'de birebir personal training. Ücretsiz deneme dersi için hemen iletişime geç.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://erkanoduncu.com/tesvikiye-personal-trainer" },
      { name: "geo.region", content: "TR-34" },
      { name: "geo.placename", content: "Teşvikiye, Şişli, İstanbul" },
      { name: "geo.position", content: "41.0478;28.9936" },
      { name: "ICBM", content: "41.0478, 28.9936" },
    ],
    links: [
      { rel: "canonical", href: "https://erkanoduncu.com/tesvikiye-personal-trainer" },
    ],
    scripts: [{ type: "application/ld+json", children: SCHEMA }],
  }),
  component: TesvikiyePT,
});

function TesvikiyePT() {
  const faqs = [
    {
      q: "Teşvikiye'de personal trainer hizmeti nasıl alınır?",
      a: "WhatsApp üzerinden iletişime geçin, ücretsiz 30 dakikalık tanışma seansı planlayalım. Teşvikiye ve Nişantaşı bölgesinde birebir antrenman seansları düzenliyorum.",
    },
    {
      q: "Teşvikiye personal trainer fiyatları ne kadar?",
      a: "Fiyatlar pakete ve sıklığa göre değişiyor. 12 derslik yüz yüze ve aylık online paketlerimiz mevcut. Detay için WhatsApp'tan ulaşın.",
    },
    {
      q: "Teşvikiye'de hangi spor salonlarında antrenman yapılıyor?",
      a: "Teşvikiye ve Nişantaşı çevresindeki çeşitli lokasyonlarda çalışıyorum. Randevu sırasında size en uygun lokasyonu birlikte belirleriz.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-10 h-16 flex items-center justify-between">
          <a href="/" className="font-display text-lg uppercase tracking-wider text-white">
            Erkan <span className="text-gold">Oduncu</span>
          </a>
          <a href="/" className="eyebrow text-muted-foreground hover:text-gold transition-colors text-xs">
            ← Anasayfa
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="px-5 md:px-8 pt-16 md:pt-24 pb-12 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <div className="eyebrow text-gold mb-4">Teşvikiye · Personal Trainer</div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9]">
            <span className="block text-white">Teşvikiye'de</span>
            <span className="block text-gold">Personal Trainer</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Teşvikiye ve Nişantaşı'nda birebir, kişiye özel antrenman programları.
            Erkan Oduncu ile kilo ver, kas yap, formunu değiştir.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Ücretsiz Deneme Dersi Al →
            </a>
            <a href="/paketler" className="btn-outline-gold">
              Paketleri Gör
            </a>
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section className="section-pad px-5 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="eyebrow text-gold mb-3">Neden Erkan Oduncu?</div>
          <h2 className="font-display text-4xl md:text-5xl uppercase leading-[0.95] text-white mb-10">
            Teşvikiye'nin Farkı
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "📍",
                title: "Teşvikiye & Nişantaşı",
                desc: "Mahallenizde, size yakın lokasyonda birebir antrenman seansları.",
              },
              {
                icon: "🎯",
                title: "Kişiye Özel Program",
                desc: "Hedefinize, vücut yapınıza ve yaşam tarzınıza göre tasarlanan özel program.",
              },
              {
                icon: "📱",
                title: "7/24 Destek",
                desc: "WhatsApp üzerinden sorularınızı anında yanıtlıyorum.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-card border border-border p-6">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-display text-xl uppercase text-white mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/70 bg-card/50">
        <div className="mx-auto max-w-6xl grid grid-cols-3 divide-x divide-border/70">
          {[
            { n: "5+", l: "Yıl Antrenörlük" },
            { n: "500+", l: "Mutlu Danışan" },
            { n: "4.9/5", l: "Memnuniyet" },
          ].map((s) => (
            <div key={s.l} className="px-3 py-8 text-center">
              <div className="font-display text-3xl md:text-4xl text-gold uppercase leading-none">{s.n}</div>
              <div className="eyebrow text-muted-foreground mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad px-5 md:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="eyebrow text-gold mb-3">Sıkça Sorulanlar</div>
          <h2 className="font-display text-4xl md:text-5xl uppercase leading-[0.95] text-white mb-10">
            Merak Edilenler
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="border border-border p-6">
                <h3 className="font-display text-lg uppercase text-white mb-3">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-pad px-5 md:px-8 text-center"
        style={{
          background: "radial-gradient(ellipse at center, rgba(212,160,23,0.25), transparent 60%), linear-gradient(180deg, #141414, #0A0A0A)",
        }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95]">
            <span className="text-white">Teşvikiye'de</span>{" "}
            <span className="text-gold">Başla</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Ücretsiz 30 dakikalık deneme dersi için hemen yaz. Bugün başla.
          </p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-gold mt-7">
            WhatsApp'tan Randevu Al →
          </a>
        </div>
      </section>

      <footer className="border-t border-border px-5 md:px-8 py-8 text-center">
        <p className="text-xs text-muted-foreground">© 2025 Erkan Oduncu | Teşvikiye Personal Trainer</p>
      </footer>
    </main>
  );
}
