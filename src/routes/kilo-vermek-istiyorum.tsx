import { createFileRoute } from "@tanstack/react-router";

const WA_URL =
  "https://wa.me/905061511150?text=Merhaba%2C%20kilo%20vermek%20istiyorum%2C%20bilgi%20almak%20istiyorum.";

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kilo vermek için ne yapmalıyım?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kilo vermek için doğru antrenman programı ve beslenme planının bir arada uygulanması gerekir. Erkan Oduncu ile ücretsiz 30 dakikalık tanışma seansında kişisel yol haritanızı çizin.",
      },
    },
    {
      "@type": "Question",
      name: "Nişantaşı ve Şişli'de kilo vermek için personal trainer var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Erkan Oduncu Nişantaşı, Teşvikiye ve Şişli bölgesinde birebir personal training hizmeti sunmaktadır. WhatsApp üzerinden hemen randevu alabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Kaç kiloyu ne kadar sürede verebilirim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bu kişiden kişiye değişir. Ortalama olarak aylık 2-4 kg sağlıklı kilo kaybı hedeflenir. Sonuçlar tutarlı antrenman ve beslenme ile hızlanır.",
      },
    },
  ],
});

export const Route = createFileRoute("/kilo-vermek-istiyorum")({
  head: () => ({
    meta: [
      { title: "Kilo Vermek İstiyorum | Nişantaşı & Şişli Personal Trainer Erkan Oduncu" },
      {
        name: "description",
        content:
          "Kilo vermek istiyorum diyorsanız doğru adrestesiniz. Nişantaşı ve Şişli'de personal trainer Erkan Oduncu ile kişisel program, beslenme takibi ve birebir antrenman.",
      },
      {
        name: "keywords",
        content:
          "kilo vermek istiyorum, kilo vermek istiyorum nereden başlamalıyım, Şişli kilo verme, Nişantaşı kilo verme, kilo verme programı İstanbul, personal trainer kilo verme",
      },
      { property: "og:title", content: "Kilo Vermek İstiyorum | Personal Trainer Erkan Oduncu" },
      {
        property: "og:description",
        content: "Kilo vermek için doğru adres. Nişantaşı & Şişli'de birebir antrenman ve beslenme takibi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://erkanoduncu.com/kilo-vermek-istiyorum" },
      { name: "geo.region", content: "TR-34" },
      { name: "geo.placename", content: "Nişantaşı, Şişli, İstanbul" },
    ],
    links: [
      { rel: "canonical", href: "https://erkanoduncu.com/kilo-vermek-istiyorum" },
    ],
    scripts: [{ type: "application/ld+json", children: SCHEMA }],
  }),
  component: KiloVermek,
});

function KiloVermek() {
  const steps = [
    {
      n: "01",
      title: "Ücretsiz Tanışma Seansı",
      desc: "WhatsApp'tan yazın, 30 dakikalık ücretsiz seans planlayalım. Hedefinizi ve mevcut durumunuzu konuşalım.",
    },
    {
      n: "02",
      title: "Kişisel Program",
      desc: "Vücudunuza ve hedefinize özel antrenman programı ve beslenme planı hazırlanır.",
    },
    {
      n: "03",
      title: "Haftalık Takip",
      desc: "İlerlemenizi birlikte değerlendiririz. Programı gerektiğinde güncelleriz.",
    },
  ];

  const faqs = [
    {
      q: "Kilo vermek için ne yapmalıyım?",
      a: "Doğru antrenman + beslenme kombinasyonu şart. Tek başına diyet ya da tek başına spor yetmez. Erkan Oduncu ile her ikisini birlikte planlayabilirsiniz.",
    },
    {
      q: "Nişantaşı ve Şişli'de kilo verme programı var mı?",
      a: "Evet. Nişantaşı ve Teşvikiye'de birebir antrenman seansları, İstanbul genelinde online koçluk hizmeti sunuyorum.",
    },
    {
      q: "Ne kadar sürede kilo verebilirim?",
      a: "Sağlıklı kilo kaybı aylık 2-4 kg olarak hedeflenir. Tutarlı antrenman ve beslenme takibiyle bu süre kısalabilir.",
    },
    {
      q: "Online kilo verme programı da var mı?",
      a: "Evet. Online koçluk paketimizde kişisel antrenman programı, beslenme planı ve haftalık WhatsApp check-in yer alıyor.",
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
          <div className="eyebrow text-gold mb-4">Kilo Verme · Personal Training</div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9]">
            <span className="block text-white">Kilo Vermek</span>
            <span className="block text-gold">İstiyorum</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Nişantaşı ve Şişli'de kişisel antrenör eşliğinde, doğru antrenman ve beslenme
            planıyla kalıcı kilo verme. Yalnız değilsiniz.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Ücretsiz Danışma Al →
            </a>
            <a href="/donusumler" className="btn-outline-gold">
              Dönüşümleri Gör
            </a>
          </div>
        </div>
      </header>

      {/* HOW IT WORKS */}
      <section className="section-pad px-5 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="eyebrow text-gold mb-3">Süreç</div>
          <h2 className="font-display text-4xl md:text-5xl uppercase leading-[0.95] text-white mb-10">
            Nasıl Çalışır?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="border-l-2 border-gold pl-5 py-2">
                <div className="font-display text-5xl text-gold leading-none">{s.n}</div>
                <h3 className="font-display text-xl uppercase text-white mt-3 mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
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
            { n: "500+", l: "Danışan" },
            { n: "Nişantaşı", l: "& Şişli" },
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
            Kilo Verme Hakkında
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
            <span className="text-white">Bugün Başla,</span>{" "}
            <span className="text-gold">Fark Gör</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Ücretsiz 30 dakikalık danışma seansı için hemen yaz.
          </p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-gold mt-7">
            WhatsApp'tan Yaz →
          </a>
        </div>
      </section>

      <footer className="border-t border-border px-5 md:px-8 py-8 text-center">
        <p className="text-xs text-muted-foreground">© 2025 Erkan Oduncu | Kilo Verme Programı</p>
      </footer>
    </main>
  );
}
