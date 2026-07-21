import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowUpRight } from "lucide-react";

const WA_URL =
  "https://wa.me/905061511150?text=Merhaba%2C%20danışmanlık%20paketleri%20hakkında%20bilgi%20almak%20istiyorum.";

export const Route = createFileRoute("/paketler")({
  head: () => ({
    meta: [
      { title: "Danışmanlık Paketleri | Erkan Oduncu Personal Trainer" },
      {
        name: "description",
        content:
          "Erkan Oduncu fitness danışmanlık paketleri. Yüz yüze bire bir antrenman ve online koçluk seçenekleri.",
      },
      { property: "og:title", content: "Danışmanlık Paketleri | Erkan Oduncu" },
      {
        property: "og:description",
        content: "Yüz yüze ve online fitness danışmanlık paketleri. Hedefine ulaşmak için doğru paketi seç.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://erkanoduncu.com/paketler" },
      {
        name: "keywords",
        content:
          "Nişantaşı personal trainer fiyat, Teşvikiye PT paketi, Şişli online fitness danışmanlık, kişisel antrenör ücret İstanbul",
      },
    ],
    links: [{ rel: "canonical", href: "https://erkanoduncu.com/paketler" }],
  }),
  component: Packages,
});

const packages = [
  {
    tag: "Yüz Yüze",
    title: "12 Derslik Bire Bir Fitness Danışmanlığı",
    desc: "Aynı salonda, birebir antrenman. Formundan tekniğine kadar her hareket senin için planlanır, senin için düzeltilir.",
    features: [
      "12 seans birebir antrenman",
      "Kişiye özel program tasarımı",
      "Hareket tekniği düzeltme ve postür analizi",
      "Beslenme yönlendirmesi",
      "İlerleme ölçümleri ve haftalık değerlendirme",
    ],
    price: "Fiyat için iletişime geç",
  },
  {
    tag: "Uzaktan",
    title: "Online Fitness Danışmanlığı",
    desc: "Nerede olursan ol, yanındayım. Kişiye özel program ve beslenme planı, düzenli check-in ile canlı takip.",
    features: [
      "Kişiye özel antrenman programı",
      "Bireysel beslenme planı",
      "Haftalık video/mesaj check-in",
      "WhatsApp üzerinden anlık destek",
      "Aylık program yenileme",
    ],
    price: "Fiyat için iletişime geç",
  },
];

function Packages() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="px-5 md:px-8 pt-10 md:pt-16 pb-6 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="eyebrow text-muted-foreground hover:text-gold transition-colors">
            ← Anasayfa
          </Link>
          <div className="eyebrow text-gold mt-6 mb-3">Hizmetler</div>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
            <span className="text-white">Danışmanlık</span>{" "}
            <span className="text-gold">Paketleri</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground text-lg">
            Salonda yan yana ya da ekranın öbür ucunda — sana uygun olanı birlikte seçelim.
          </p>
        </div>
      </header>

      {/* PACKAGES */}
      <section className="section-pad px-5 md:px-8">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6 md:gap-8">
          {packages.map((p) => (
            <article
              key={p.title}
              className="bg-card border border-border p-8 md:p-10 flex flex-col hover:border-gold transition-colors"
            >
              <span className="eyebrow text-gold">{p.tag}</span>
              <h2 className="mt-3 font-display text-2xl md:text-3xl uppercase leading-tight text-white">
                {p.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>

              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" strokeWidth={3} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-6 border-t border-border flex flex-col gap-4">
                <span className="text-sm font-semibold text-muted-foreground">{p.price}</span>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center justify-center gap-2"
                >
                  Detaylı Bilgi Al
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-border px-5 md:px-8 py-8 text-center">
        <p className="text-xs text-muted-foreground">© 2025 Erkan Oduncu</p>
      </footer>
    </main>
  );
}
