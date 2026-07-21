import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const WA_URL =
  "https://wa.me/905061511150?text=Merhaba%2C%20ücretsiz%2030%20dakikalık%20deneme%20dersi%20hakkında%20bilgi%20almak%20istiyorum.";

const items = [
  {
    q: "Nişantaşı veya Teşvikiye'de personal trainer arıyorum, nasıl iletişime geçebilirim?",
    a: "WhatsApp üzerinden +90 506 151 11 50 numarasına yazarak ücretsiz 30 dakikalık tanışma seansı randevusu alabilirsiniz. Nişantaşı ve Teşvikiye bölgesinde yüz yüze seanslar düzenlenmektedir.",
  },
  {
    q: "Şişli'de kilo vermek istiyorum, nereden başlamalıyım?",
    a: "İlk adım ücretsiz bir tanışma seansıdır. Bu seansta mevcut durumunuz, hedefiniz ve günlük yaşam alışkanlıklarınız değerlendirilir. Ardından size özel bir antrenman ve beslenme planı hazırlanır. WhatsApp'tan hemen randevu alabilirsiniz.",
  },
  {
    q: "Daha önce hiç spor yapmadım. Koçlukla başlayabilir miyim?",
    a: "Kesinlikle. Sıfırdan başlayanlar için ilk hedef doğru form ve alışkanlık; ağırlık ya da tempo değil. Kendi hızında ilerlersin.",
  },
  {
    q: "Online koçluk gerçekten işe yarar mı?",
    a: "Evet. Program sana özel yazılır, düzenli check-in ile ilerlemeni birlikte değerlendiririz. WhatsApp üzerinden her an ulaşabilirsin. Türkiye'nin her yerinden ve yurt dışından danışanlarımız bulunmaktadır.",
  },
  {
    q: "12 derslik paket bittiğinde ne oluyor?",
    a: "Süreç sonunda birlikte değerlendirme yapıyoruz. Devam etmek istersen yeni bir plan; kendi başına ilerlemek istersen sana özel bir yol haritası hazırlıyorum.",
  },
  {
    q: "Beslenme takibi de dahil mi?",
    a: "Yüz yüze pakette temel beslenme yönlendirmesi, online pakette detaylı beslenme planı ve haftalık takip yer alıyor.",
  },
  {
    q: "Fiyatlar neden sitede yok?",
    a: "Her paket kişiye göre şekillendiğinden, önce hedefini ve durumunu konuşmayı tercih ediyorum. WhatsApp ya da form üzerinden ulaş; sana uygun teklifi birlikte belirleyelim.",
  },
];

const SCHEMA_FAQ = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
});

export const Route = createFileRoute("/sss")({
  head: () => ({
    meta: [
      { title: "Sıkça Sorulan Sorular | Nişantaşı Personal Trainer Erkan Oduncu" },
      {
        name: "description",
        content:
          "Nişantaşı, Teşvikiye ve Şişli'de personal training hakkında merak edilen sorular. Kilo vermek, kas yapmak ve online koçluk hakkında tüm cevaplar.",
      },
      {
        name: "keywords",
        content:
          "Nişantaşı personal trainer SSS, Şişli kişisel antrenör, kilo vermek istiyorum Şişli, personal trainer fiyatları İstanbul, Teşvikiye PT",
      },
      { property: "og:title", content: "SSS | Nişantaşı Personal Trainer Erkan Oduncu" },
      {
        property: "og:description",
        content: "Nişantaşı, Teşvikiye ve Şişli'de personal training hakkında merak ettiğin her şey.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://erkanoduncu.com/sss" },
    ],
    links: [{ rel: "canonical", href: "https://erkanoduncu.com/sss" }],
    scripts: [{ type: "application/ld+json", children: SCHEMA_FAQ }],
  }),
  component: FAQ,
});

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-base md:text-lg text-white">{q}</span>
        <span className="shrink-0 h-8 w-8 border border-border flex items-center justify-center text-gold">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && <p className="pb-6 pr-14 text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
}

function FAQ() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="px-5 md:px-8 pt-10 md:pt-16 pb-6 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="eyebrow text-muted-foreground hover:text-gold transition-colors">
            ← Anasayfa
          </Link>
          <div className="eyebrow text-gold mt-6 mb-3">Yardım</div>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
            <span className="text-white">Sıkça Sorulan</span>{" "}
            <span className="text-gold">Sorular</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Nişantaşı, Teşvikiye ve Şişli'de personal training hakkında merak ettiğin her şeyin cevabı burada.
          </p>
        </div>
      </header>

      {/* FAQ */}
      <section className="section-pad px-5 md:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="divide-y divide-border border-y border-border">
            {items.map((it, i) => (
              <FAQItem key={i} q={it.q} a={it.a} />
            ))}
          </div>
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
            <span className="text-white">Sorun mu var?</span>{" "}
            <span className="text-gold">Yaz bana.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Nişantaşı, Teşvikiye veya Şişli'de yüz yüze, ya da Türkiye'nin her yerinden online danışmanlık için hemen ulaş.
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
