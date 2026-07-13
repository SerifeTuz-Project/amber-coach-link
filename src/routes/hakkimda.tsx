import { createFileRoute, Link } from "@tanstack/react-router";

const WA_URL =
  "https://wa.me/905061511150?text=Merhaba%2C%20ücretsiz%2030%20dakikalık%20deneme%20dersi%20hakkında%20bilgi%20almak%20istiyorum.";

export const Route = createFileRoute("/hakkimda")({
  head: () => ({
    meta: [
      { title: "Hakkımda | Erkan Oduncu Personal Trainer" },
      {
        name: "description",
        content:
          "Erkan Oduncu hakkında. 10+ yıllık koçluk deneyimi ile bire bir ve online fitness danışmanlığı.",
      },
      { property: "og:title", content: "Hakkımda | Erkan Oduncu" },
      {
        property: "og:description",
        content: "Erkan Oduncu hakkında. 10+ yıllık koçluk deneyimi ile bire bir ve online fitness danışmanlığı.",
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
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src="/erkan-portrait.png.PNG"
              alt="Erkan Oduncu"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover object-top"
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gold text-ink p-6 md:p-8 max-w-[220px]">
              <div className="font-display font-black text-3xl md:text-4xl">5+</div>
              <div className="text-xs uppercase tracking-widest mt-1">Yıllık koçluk deneyimi</div>
            </div>
          </div>

          <div>
            <div className="eyebrow text-gold mb-3">Hakkımda</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-[0.95] text-white mb-8">
              Ben Erkan Oduncu
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Yıllardır insanların kendi bedenleriyle barışmalarına, güçlenmelerine
                ve kendi zirvelerine ulaşmalarına eşlik ediyorum. Sıfırdan başlayanlar
                da, uzun süredir çalışıp tıkananlar da bu yolda yanımda yer aldı.
              </p>
              <p>
                Benim koçluğum tek tip program yazıp göndermek değil. Her insan farklı
                bir dağa tırmanıyor; yolu, temposu, karşılaştığı yamacı da farklı.
                Ben bu yolda seninle adım adım yürüyen bir koçum: disiplinli ama
                anlayışlı, net ama zorlamayan.
              </p>
              <p className="text-foreground font-medium text-xl">
                "Herkesin kendi zirvesi var. Benim işim, seni oraya çıkarmak."
              </p>
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

      <footer className="border-t border-border px-5 md:px-8 py-8 text-center">
        <p className="text-xs text-muted-foreground">© 2025 Erkan Oduncu</p>
      </footer>
    </main>
  );
}
