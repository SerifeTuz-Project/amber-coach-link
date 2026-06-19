import { createFileRoute, Link } from "@tanstack/react-router";

const WA_URL =
  "https://wa.me/905061511150?text=Merhaba%2C%20ücretsiz%2030%20dakikalık%20deneme%20dersi%20hakkında%20bilgi%20almak%20istiyorum.";

export const Route = createFileRoute("/donusumler")({
  head: () => ({
    meta: [
      { title: "Önce / Sonra Dönüşümleri | Erkan Oduncu Personal Trainer" },
      {
        name: "description",
        content:
          "Erkan Oduncu ile çalışan danışanların gerçek önce ve sonra fotoğrafları. Kilo verme, kas yapma ve form değişim hikayeleri.",
      },
      { property: "og:title", content: "Önce / Sonra Dönüşümleri | Erkan Oduncu" },
      {
        property: "og:description",
        content: "Danışanlarımın gerçek dönüşüm hikayeleri ve önce/sonra fotoğrafları.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/donusumler" },
    ],
    links: [{ rel: "canonical", href: "/donusumler" }],
  }),
  component: Transformations,
});

type Item = {
  name: string;
  duration: string;
  result: string;
  before?: string;
  after?: string;
  note?: string;
};

// Replace src values with real photo URLs as they become available.
const items: Item[] = [
  { name: "Danışan #1", duration: "12 hafta", result: "-10 kg yağ kaybı" },
  { name: "Danışan #2", duration: "16 hafta", result: "+6 kg kas kazanımı" },
  { name: "Danışan #3", duration: "20 hafta", result: "Form & duruş dönüşümü" },
  { name: "Danışan #4", duration: "8 hafta", result: "-6 kg & enerji artışı" },
];

function Placeholder({ label }: { label: string }) {
  return (
    <div className="relative aspect-[3/4] w-full bg-[#141414] border border-border flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        background: "repeating-linear-gradient(45deg, transparent 0 12px, rgba(212,160,23,0.08) 12px 13px)",
      }} />
      <div className="text-center px-4 relative">
        <div className="eyebrow text-gold mb-2">{label}</div>
        <div className="text-xs text-muted-foreground">Fotoğraf yakında</div>
      </div>
    </div>
  );
}

function Transformations() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="px-5 md:px-8 pt-10 md:pt-16 pb-6 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="eyebrow text-muted-foreground hover:text-gold transition-colors">
            ← Anasayfa
          </Link>
          <div className="eyebrow text-gold mt-6 mb-3">Önce / Sonra</div>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
            <span className="text-white">Danışan</span>{" "}
            <span className="text-gold">Dönüşümleri</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground text-lg">
            Disiplin, doğru program ve sürekli takip ile elde edilen gerçek sonuçlar.
            Sıradaki dönüşüm hikayesi senin olabilir.
          </p>
        </div>
      </header>

      {/* GALLERY */}
      <section className="section-pad px-5 md:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          {items.map((it, i) => (
            <article key={i} className="bg-card border border-border p-5 md:p-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl uppercase text-white">
                    {it.name}
                  </h2>
                  <div className="text-sm text-muted-foreground mt-1">
                    Süre: <span className="text-white/80">{it.duration}</span>
                  </div>
                </div>
                <div className="eyebrow text-gold-bright">{it.result}</div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-5">
                <div className="relative">
                  {it.before ? (
                    <img
                      src={it.before}
                      alt={`${it.name} önce fotoğrafı`}
                      className="aspect-[3/4] w-full object-cover border border-border"
                    />
                  ) : (
                    <Placeholder label="ÖNCE" />
                  )}
                  <div className="absolute top-3 left-3 bg-background/80 backdrop-blur px-3 py-1 eyebrow text-white border border-border">
                    Önce
                  </div>
                </div>
                <div className="relative">
                  {it.after ? (
                    <img
                      src={it.after}
                      alt={`${it.name} sonra fotoğrafı`}
                      className="aspect-[3/4] w-full object-cover border border-border"
                    />
                  ) : (
                    <Placeholder label="SONRA" />
                  )}
                  <div className="absolute top-3 left-3 bg-gold text-background px-3 py-1 eyebrow">
                    Sonra
                  </div>
                </div>
              </div>

              {it.note && (
                <p className="mt-5 text-sm text-muted-foreground italic">"{it.note}"</p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-pad px-5 md:px-8 text-center"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,160,23,0.25), transparent 60%), linear-gradient(180deg, #141414, #0A0A0A)",
        }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95]">
            <span className="text-white">Sıradaki Sen</span>{" "}
            <span className="text-gold">Olabilirsin</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Ücretsiz 30 dk deneme dersi için hemen yaz.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-7"
          >
            WhatsApp'tan Yaz →
          </a>
        </div>
      </section>

      <footer className="border-t border-border px-5 md:px-8 py-8 text-center">
        <p className="text-xs text-muted-foreground">© 2025 Erkan Oduncu</p>
      </footer>
    </main>
  );
}
