import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { PulseFitHero } from "@/components/ui/pulse-fit-hero";

const WA_URL =
  "https://wa.me/905061511150?text=Merhaba%2C%20ücretsiz%2030%20dakikalık%20deneme%20dersi%20hakkında%20bilgi%20almak%20istiyorum.";
const IG_URL = "https://instagram.com/erkanodnc";

const SCHEMA_LOCAL_BUSINESS = JSON.stringify({
  "@context": "https://schema.org",
  "@type": ["Person", "LocalBusiness"],
  name: "Erkan Oduncu Personal Trainer",
  jobTitle: "Kişisel Antrenör",
  description:
    "Nişantaşı, Teşvikiye ve Şişli'de yüz yüze ve online kişisel antrenörlük hizmeti. Kilo vermek, kas yapmak ve form değiştirmek isteyenler için özel fitness danışmanlığı.",
  url: "https://erkanoduncu.com",
  telephone: "+905061511150",
  image: "https://erkanoduncu.com/erkan-portrait.png.PNG",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nişantaşı",
    addressLocality: "Şişli",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.0502,
    longitude: 28.9938,
  },
  areaServed: [
    { "@type": "City", name: "İstanbul" },
    { "@type": "Neighborhood", name: "Nişantaşı" },
    { "@type": "Neighborhood", name: "Teşvikiye" },
    { "@type": "Neighborhood", name: "Şişli" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fitness Danışmanlık Hizmetleri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Yüz Yüze Personal Training",
          description: "Nişantaşı ve Teşvikiye'de birebir kişisel antrenörlük seansları",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Online Fitness Danışmanlığı",
          description: "Her yerden erişilebilen kişiye özel online koçluk programı",
        },
      },
    ],
  },
  sameAs: ["https://instagram.com/erkanodnc"],
});

const SCHEMA_FAQ = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Nişantaşı'nda personal trainer nerede bulabilirim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nişantaşı ve Teşvikiye bölgesinde Erkan Oduncu ile birebir personal training seansları alabilirsiniz. WhatsApp'tan ulaşarak ücretsiz 30 dakikalık deneme dersi randevusu oluşturabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Şişli'de kilo vermek için personal trainer tutsam mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kilo vermek için bir personal trainer ile çalışmak süreci çok daha hızlı ve doğru hale getirir. Erkan Oduncu, Şişli bölgesinde kişiye özel beslenme ve antrenman programıyla kalıcı kilo kaybı için destek sunmaktadır.",
      },
    },
    {
      "@type": "Question",
      name: "Teşvikiye'de fitness koçu fiyatları ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fiyatlar kişiye özel programa göre belirlenmektedir. Ücretsiz 30 dakikalık tanışma seansı için WhatsApp'tan iletişime geçerek bilgi alabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Online personal training Türkiye'de işe yarar mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, online personal training kişiye özel program ve düzenli check-in ile son derece etkilidir. Türkiye genelinde ve yurt dışında birçok danışan bu yöntemle hedeflerine ulaşmıştır.",
      },
    },
  ],
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nişantaşı Personal Trainer | Teşvikiye & Şişli PT | Erkan Oduncu" },
      {
        name: "description",
        content:
          "Nişantaşı, Teşvikiye ve Şişli'de kilo vermek, kas yapmak veya form değiştirmek isteyenler için uzman personal trainer Erkan Oduncu. Ücretsiz 30 dakikalık deneme dersi için hemen iletişime geç!",
      },
      {
        name: "keywords",
        content:
          "Nişantaşı personal trainer, Teşvikiye personal trainer, Şişli personal trainer, Nişantaşı PT, Teşvikiye PT, Şişli PT, kilo vermek istiyorum, kişisel antrenör İstanbul, fitness koçu Şişli, kilo verme programı, personal trainer İstanbul",
      },
      { name: "geo.region", content: "TR-34" },
      { name: "geo.placename", content: "Nişantaşı, Şişli, İstanbul" },
      { name: "geo.position", content: "41.0502;28.9938" },
      { name: "ICBM", content: "41.0502, 28.9938" },
      { property: "og:title", content: "Nişantaşı & Teşvikiye Personal Trainer | Erkan Oduncu" },
      {
        property: "og:description",
        content:
          "Nişantaşı, Teşvikiye ve Şişli'de yüz yüze veya online kişisel antrenörlük. Kilo ver, kas yap, form değiştir. Ücretsiz deneme dersi al.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://erkanoduncu.com" },
      { property: "og:image", content: "https://erkanoduncu.com/erkan-portrait.png.PNG" },
      { property: "og:locale", content: "tr_TR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nişantaşı Personal Trainer | Erkan Oduncu" },
      { name: "twitter:description", content: "Nişantaşı, Teşvikiye, Şişli'de kilo vermek ve form değiştirmek için uzman PT." },
    ],
    links: [{ rel: "canonical", href: "https://erkanoduncu.com" }],
    scripts: [
      { type: "application/ld+json", children: SCHEMA_LOCAL_BUSINESS },
      { type: "application/ld+json", children: SCHEMA_FAQ },
    ],
  }),
  component: Index,
});

function TestimonialForm() {
  const [rating, setRating] = React.useState(5);
  const [submitted, setSubmitted] = React.useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-3 py-4">
        <div className="text-gold text-2xl">✓</div>
        <p className="text-white font-medium">Yorumun için teşekkürler!</p>
        <p className="text-muted-foreground text-sm">İnceledikten sonra sayfaya ekleyeceğim.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        fetch("https://formspree.io/f/mzepndba", { method: "POST", body: data, headers: { Accept: "application/json" } })
          .then(() => setSubmitted(true))
          .catch(() => setSubmitted(true));
      }}
      className="flex flex-col gap-5"
    >
      <input type="hidden" name="rating" value={String(rating)} />

      {/* Ad */}
      <div className="flex flex-col gap-1.5">
        <label className="eyebrow text-muted-foreground text-xs">Adın</label>
        <input
          name="name"
          required
          placeholder="Adın Soyadın"
          className="bg-background border border-border text-white placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
        />
      </div>

      {/* Puan */}
      <div className="flex flex-col gap-1.5">
        <label className="eyebrow text-muted-foreground text-xs">Puan</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setRating(s)}
              className="text-2xl transition-transform hover:scale-110"
              style={{ color: s <= rating ? "#F5C842" : "rgba(255,255,255,0.2)" }}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      {/* Yorum */}
      <div className="flex flex-col gap-1.5">
        <label className="eyebrow text-muted-foreground text-xs">Yorumun</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Birlikte çalışma deneyimini anlat..."
          className="bg-background border border-border text-white placeholder:text-muted-foreground px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="btn-gold self-start"
      >
        Yorumu Gönder →
      </button>
    </form>
  );
}

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
    {
      icon: (
        <svg width="56" height="56" viewBox="-5.0 -10.0 110.0 135.0" fill="#D4A017">
          <path d="m50 25.973c-3.5 0-6.3477-3.0312-6.3477-6.7344s2.8477-6.7344 6.3477-6.7344 6.3477 3.0312 6.3477 6.7344-2.8477 6.7344-6.3477 6.7344zm0-11.555c-2.4414 0-4.4141 2.1562-4.4141 4.8008s1.9922 4.8008 4.4141 4.8008c2.4414 0 4.4141-2.1562 4.4141-4.8008s-1.9727-4.8008-4.4141-4.8008z" fillRule="evenodd"/>
          <path d="m50 68.207c-3.5 0-6.3477-3.0312-6.3477-6.7344s2.8477-6.7344 6.3477-6.7344 6.3477 3.0312 6.3477 6.7344-2.8477 6.7344-6.3477 6.7344zm0-11.555c-2.4414 0-4.4141 2.1562-4.4141 4.8008s1.9922 4.8008 4.4141 4.8008c2.4414 0 4.4141-2.1562 4.4141-4.8008s-1.9727-4.8008-4.4141-4.8008z" fillRule="evenodd"/>
          <path d="m42.328 55.879c-0.52734 0-0.97656-0.42578-0.97656-0.97656v-15.016l-0.71094 3.4805c-0.019531 0.10156-0.0625 0.18359-0.10156 0.28516l-5.5547 9.8867c-0.50781 0.89453-1.3828 1.5664-2.3789 1.8125-1.0156 0.24219-2.0547 0.082032-2.9297-0.48828-1.668-1.0781-2.2188-3.2969-1.2422-5.0234l4.3945-7.832c0.32422-0.57031 0.50781-1.2227 0.52734-1.8516 0.082031-3.0117 0.71094-5.9609 1.8516-8.7891l0.91406-2.2188c0.58984-1.4453 1.7695-2.6445 3.2344-3.2773l7.0391-2.9492c0.48828-0.20312 1.0586 0.019531 1.2617 0.50781 0.20312 0.48828-0.019531 1.0586-0.50781 1.2617l-7.0195 2.9492c-0.99609 0.42578-1.8125 1.2422-2.1992 2.2188l-0.91406 2.2188c-1.0586 2.6055-1.6289 5.332-1.707 8.0977-0.019532 0.95703-0.28516 1.9141-0.77344 2.7461l-4.3945 7.832c-0.46875 0.85547-0.20312 1.9141 0.60938 2.4414 0.42578 0.26563 0.91406 0.34766 1.4023 0.22266 0.48828-0.12109 0.91406-0.42578 1.1602-0.875l5.4727-9.7656 1.5469-7.5664c0.10156-0.44922 0.48828-0.77344 0.95703-0.77344h1.0586c0.52734 0 0.97656 0.42578 0.97656 0.97656v19.449c-0.039063 0.58984-0.46875 1.0156-0.99609 1.0156z" fillRule="evenodd"/>
          <path d="m58.566 55.859c-0.52734 0-0.97656-0.42578-0.97656-0.97656v-19.43c0-0.52734 0.42578-0.97656 0.97656-0.97656h1.0586c0.46875 0 0.85547 0.32422 0.95703 0.77344l1.5469 7.5664 5.0469 9.0117 0.42578 0.73438c0.32422 0.58984 0.95703 0.9375 1.6055 0.9375 0.34766 0 0.67188-0.10156 0.97656-0.28516 0.40625-0.26562 0.71094-0.67188 0.8125-1.1406 0.10156-0.42578 0.039062-0.89453-0.18359-1.3242l-4.3945-7.832c-0.44922-0.75391-0.71094-1.707-0.77344-2.7266-0.10156-2.8477-0.67188-5.5742-1.707-8.1172-0.10156-0.26562-0.20312-0.52734-0.30469-0.79297-0.67187-1.7305-1.1602-2.9688-2.7891-3.6406l-4.3555-1.8125s-0.019531 0-0.019531-0.019531l-3.2148-1.4453c-0.48828-0.22266-0.71094-0.79297-0.48828-1.2812s0.79297-0.71094 1.2812-0.48828l3.2148 1.4453 4.332 1.8125c2.4023 0.97656 3.1328 2.8906 3.8438 4.7188 0.10156 0.24219 0.20312 0.50781 0.30469 0.77344 1.1172 2.7656 1.75 5.7188 1.8516 8.7695 0.039062 0.67188 0.22266 1.3438 0.50781 1.8516l4.4141 7.8516c0.46875 0.85547 0.58984 1.8125 0.38672 2.707-0.22266 0.95703-0.83594 1.8125-1.668 2.3203-0.58984 0.38672-1.2812 0.58984-2.0156 0.58984-1.3438 0-2.6055-0.73438-3.2773-1.9141l-0.42578-0.75391-5.1289-9.1562c-0.039063-0.082031-0.082031-0.18359-0.10156-0.28516l-0.71094-3.4805v15.055c-0.0625 0.52734-0.48828 0.95703-1.0156 0.95703z" fillRule="evenodd"/>
          <path d="m19.441 61.781h-3.4805c-2.0156 0-3.6406-1.6484-3.6406-3.6406v-12.613c0-2.0156 1.6484-3.6406 3.6406-3.6406h3.4805c0.26562 0 0.50781 0.10156 0.69141 0.28516 0.18359 0.18359 0.28516 0.42578 0.28516 0.69141v17.984c-0.019531 0.50781-0.44922 0.9375-0.97656 0.9375zm-0.97656-17.984h-2.5039c-0.95703 0-1.707 0.77344-1.707 1.707v12.613c0 0.95703 0.77344 1.707 1.707 1.707h2.5039v-16.031z" fillRule="evenodd"/>
          <path d="m84.039 61.781h-3.4805c-0.52734 0-0.97656-0.42578-0.97656-0.97656v-17.984c0-0.52734 0.42578-0.97656 0.97656-0.97656h3.4805c2.0156 0 3.6406 1.6484 3.6406 3.6406v12.613c0 2.0547-1.6289 3.6836-3.6406 3.6836zm-2.5234-1.9336h2.5039c0.95703 0 1.707-0.77344 1.707-1.707v-12.613c0-0.95703-0.77344-1.707-1.707-1.707h-2.5039v16.031z" fillRule="evenodd"/>
          <path d="m66.297 52.199h-31.109c-0.52734 0-0.97656-0.42578-0.97656-0.97656 0-0.55078 0.42578-0.97656 0.97656-0.97656h31.109c0.52734 0 0.97656 0.42578 0.97656 0.97656 0 0.55078-0.44922 0.97656-0.97656 0.97656z" fillRule="evenodd"/>
          <path d="m75.637 52.199h-3.7227c-0.52734 0-0.97656-0.42578-0.97656-0.97656 0-0.55078 0.42578-0.97656 0.97656-0.97656h3.7227c0.52734 0 0.97656 0.42578 0.97656 0.97656 0 0.55078-0.44922 0.97656-0.97656 0.97656z" fillRule="evenodd"/>
          <path d="m28.965 52.199h-4.5977c-0.52734 0-0.97656-0.42578-0.97656-0.97656 0-0.55078 0.42578-0.97656 0.97656-0.97656h4.5977c0.52734 0 0.97656 0.42578 0.97656 0.97656 0 0.55078-0.44922 0.97656-0.97656 0.97656z" fillRule="evenodd"/>
          <path d="m58.566 45.098h-16.215c-0.52734 0-0.97656-0.42578-0.97656-0.97656 0-0.55078 0.42578-0.97656 0.97656-0.97656h16.215c0.52734 0 0.97656 0.42578 0.97656 0.97656 0 0.55078-0.44922 0.97656-0.97656 0.97656z" fillRule="evenodd"/>
          <path d="m50 39.238c-1.7305 0-3.1328-1.4023-3.1328-3.1328s1.4023-3.1328 3.1328-3.1328 3.1328 1.4023 3.1328 3.1328-1.4023 3.1328-3.1328 3.1328zm0-4.332c-0.65234 0-1.1992 0.52734-1.1992 1.1992s0.52734 1.1992 1.1992 1.1992 1.1992-0.52734 1.1992-1.1992-0.55078-1.1992-1.1992-1.1992z" fillRule="evenodd"/>
          <path d="m39.727 87.496c-0.42578 0-0.83594-0.28516-0.9375-0.73438l-2.543-10.09-6.2266-0.0625c-3.9883-0.039063-7.832-1.75-10.539-4.6797l-0.36719-0.40625c-0.40625-0.44922-0.65234-1.0586-0.65234-1.668v-17.23c0-1.9922 1.6289-3.6406 3.6406-3.6406 1.0586 0 2.0547 0.44922 2.7461 1.2422 0.69141 0.79297 1.0156 1.8516 0.875 2.9102l-0.0625 0.44922c-0.16406 1.1406-0.16406 2.3203 0 3.457l1.3242 9.625c1.9727-0.9375 4.293-0.8125 6.1836 0.32422 1.8906-2.0547 4.9023-2.582 7.3047-1.3008l5.4922-1.0977c0.52734-0.10156 1.0391 0.22266 1.1406 0.75391 0.10156 0.52734-0.22266 1.0391-0.75391 1.1406l-5.8398 1.1797c-0.24219 0.039062-0.48828 0-0.69141-0.12109-1.6875-1.0391-3.8867-0.69141-5.2305 0.77344l-0.57031 0.62891c-0.34766 0.38672-0.9375 0.42578-1.3242 0.10156-1.6484-1.3438-3.9883-1.4023-5.6758-0.14062l-0.22266 0.16406c-0.26562 0.20312-0.62891 0.24219-0.95703 0.10156-0.30469-0.14062-0.52734-0.42578-0.57031-0.75391l-1.5273-11.09c-0.20313-1.3438-0.20313-2.6875 0-4.0078l0.0625-0.42578c0.0625-0.48828-0.082032-0.99609-0.40625-1.3633-0.32422-0.36719-0.79297-0.58984-1.2812-0.58984-0.9375 0-1.707 0.75391-1.707 1.707v17.23c0 0.14063 0.039063 0.26563 0.14062 0.36719l0.36719 0.40625c2.3398 2.5234 5.6758 4.0078 9.1367 4.0469l6.957 0.0625c0.44922 0 0.8125 0.30469 0.9375 0.73438l2.7266 10.824c0.12109 0.50781-0.18359 1.0391-0.69141 1.1797-0.10156-0.019531-0.18359 0-0.26562 0z" fillRule="evenodd"/>
          <path d="m60.273 87.496c-0.082032 0-0.16406 0-0.24219-0.019532-0.50781-0.12109-0.83594-0.65234-0.69141-1.1797l2.7266-10.824c0.10156-0.42578 0.48828-0.73438 0.9375-0.73438l6.957-0.0625c3.457-0.039062 6.7734-1.5039 9.1367-4.0469 0.039063-0.039062 0.082032-0.082031 0.12109-0.14062 0.34766-0.36719 0.38672-0.44922 0.38672-0.62891v-17.23c0-0.9375-0.75391-1.707-1.707-1.707-0.52734 0-0.9375 0.16406-1.2227 0.46875-0.36719 0.42578-0.52734 1.1406-0.40625 1.9141 0.20312 1.3008 0.20312 2.6641 0 4.0078l-1.5273 11.09c-0.039063 0.34766-0.26563 0.62891-0.57031 0.75391-0.30469 0.14062-0.67188 0.10156-0.95703-0.10156-1.9727-1.4258-4.1719-1.4453-5.8984-0.039063-0.40625 0.32422-0.97656 0.28516-1.3242-0.10156l-0.57031-0.62891c-1.3438-1.4648-3.5391-1.7891-5.2305-0.77344-0.20312 0.12109-0.44922 0.16406-0.69141 0.12109l-5.8398-1.1797c-0.52734-0.10156-0.85547-0.60938-0.75391-1.1406 0.10156-0.52734 0.60938-0.85547 1.1406-0.75391l5.4922 1.0977c2.4219-1.2617 5.4336-0.75391 7.3047 1.3008 1.8906-1.1602 4.1094-1.2617 6.1836-0.28516l1.3438-9.6445c0.16406-1.1602 0.16406-2.3203 0-3.457-0.18359-1.3633 0.14062-2.625 0.875-3.457 0.65234-0.75391 1.5664-1.1406 2.6641-1.1406 1.9922 0 3.6406 1.6289 3.6406 3.6406v17.23c0 0.97656-0.48828 1.5039-0.89453 1.9531l-0.12109 0.14062c-2.7266 2.9297-6.5508 4.6367-10.539 4.6797l-6.2266 0.0625-2.543 10.09c-0.14062 0.42578-0.52734 0.73438-0.95703 0.73438z" fillRule="evenodd"/>
          <path d="m50 73.273c-3.1719 0-5.7773-2.582-5.7773-5.7773 0-1.0586 0.24219-1.9922 0.77344-2.8672 0.28516-0.44922 0.875-0.60938 1.3242-0.32422 0.44922 0.26562 0.60938 0.875 0.32422 1.3242-0.32422 0.55078-0.48828 1.1797-0.48828 1.8711 0 2.1172 1.7305 3.8438 3.8438 3.8438 2.1172 0 3.8438-1.7305 3.8438-3.8438 0-0.8125-0.12109-1.3242-0.46875-1.8711-0.28516-0.44922-0.14062-1.0586 0.30469-1.3242 0.44922-0.28516 1.0586-0.14063 1.3242 0.30469 0.52734 0.875 0.77344 1.7305 0.77344 2.8906 0 3.1758-2.6055 5.7773-5.7773 5.7773z" fillRule="evenodd"/>
          <path d="m50 35.148c-0.16406 0-0.32422-0.039063-0.46875-0.12109-0.46875-0.26562-0.62891-0.85547-0.36719-1.3242l5.5547-9.7461c0.26562-0.46875 0.85547-0.62891 1.3242-0.36719 0.46875 0.26562 0.62891 0.85547 0.36719 1.3242l-5.5547 9.7461c-0.20312 0.30469-0.52734 0.48828-0.85547 0.48828z" fillRule="evenodd"/>
          <path d="m50 35.148c-0.34766 0-0.67188-0.18359-0.83594-0.48828l-5.3516-9.4414c-0.26562-0.46875-0.10156-1.0586 0.36719-1.3242s1.0586-0.10156 1.3242 0.36719l5.3516 9.4414c0.26562 0.46875 0.10156 1.0586-0.36719 1.3242-0.16406 0.082031-0.32422 0.12109-0.48828 0.12109z" fillRule="evenodd"/>
        </svg>
      ),
      title: "Birebir PT",
      desc: "Birebir özel ders ve profesyonel rehberlik",
    },
    {
      icon: (
        <svg width="56" height="56" viewBox="-5.0 -10.0 110.0 135.0" fill="#D4A017">
          <path d="m17.5 76.711 17.875-0.003907c1.4805 0 2.6836 1.2031 2.6836 2.6836v4.3242h-10.18c-0.33594 0-0.60938 0.27344-0.60938 0.60938 0 0.33594 0.27344 0.60938 0.60938 0.60938h10.789c0.003906 0 0.011719-0.003906 0.015625-0.003906l19.668 0.003906c0.003907 0 0.011719 0.003906 0.015626 0.003906h10.789c0.33594 0 0.60938-0.27344 0.60938-0.60938s-0.27344-0.60938-0.60938-0.60938h-10.18v-4.3242c0-1.4805 1.2031-2.6836 2.6836-2.6836l17.879 0.003906c2.2695 0 4.1172-1.8438 4.1172-4.1133v-24.043c0-0.33594-0.27344-0.60938-0.60938-0.60938s-0.60938 0.27344-0.60938 0.60938v16.801h-22.941c-0.33594 0-0.60938 0.27344-0.60938 0.60938s0.27344 0.60938 0.60938 0.60938h22.941v6.0234c0 1.5977-1.3008 2.8945-2.8984 2.8945l-17.875-0.003906-26.289-0.003907-17.875 0.003907c-1.5977 0-2.8945-1.3008-2.8945-2.8945v-6.0234h33.105v2.2539c0 0.57031 0.29297 1.0859 0.78125 1.3828 0.25781 0.15625 0.54297 0.23437 0.82812 0.23437 0.25781 0 0.51563-0.0625 0.75391-0.19141l5.4062-2.8633c0.52734-0.28125 0.85938-0.82422 0.85938-1.4258 0-0.60156-0.32812-1.1445-0.85938-1.4258l-5.4023-2.8633c-0.50391-0.26562-1.0977-0.25-1.5859 0.042969-0.48828 0.29688-0.78125 0.80859-0.78125 1.3828v2.2578h-33.105v-46.188c0-1.5938 1.3008-2.8906 2.8945-2.8906h62.039c1.6016 0 2.8984 1.2969 2.8984 2.8906v12.301c0 0.33594 0.27344 0.60938 0.60938 0.60938s0.60938-0.27344 0.60938-0.60938v-12.301c0-2.2656-1.8477-4.1094-4.1172-4.1094h-62.039c-2.2695 0-4.1133 1.8438-4.1133 4.1094v53.426c0 2.2695 1.8477 4.1133 4.1133 4.1133zm40.258 2.6797v4.3242h-18.477v-4.3242c0-1.0391-0.41406-1.9844-1.0781-2.6836h20.633c-0.66406 0.70312-1.0781 1.6445-1.0781 2.6836zm-8.832-16.289c0-0.19922 0.13281-0.30078 0.19141-0.33594 0.035156-0.023437 0.10937-0.058594 0.20312-0.058594 0.054688 0 0.11719 0.011719 0.18359 0.046875l5.4062 2.8633c0.19141 0.10156 0.21094 0.27734 0.21094 0.34766 0 0.070312-0.019532 0.24609-0.21094 0.34766l-5.4062 2.8633c-0.17578 0.09375-0.32812 0.023438-0.38672-0.011719-0.058594-0.035156-0.19141-0.13672-0.19141-0.33594z"/>
          <path d="m86.613 38.164c0-0.95703-0.78125-1.7383-1.7383-1.7383h-0.31641v-0.23047c0-1.4648-1.1914-2.6562-2.6562-2.6562h-1.8594c-0.84375 0-1.5312 0.6875-1.5312 1.5312v1.5898h-2.2305c-0.070312-1.6094-1.3984-2.8984-3.0234-2.8984h-5.6836c-0.40625-0.50391-0.98828-0.82812-1.6133-0.88281-0.68359-0.066406-1.3672 0.15625-1.8711 0.61719-0.50781 0.46094-0.79688 1.1133-0.79688 1.8008v1.3633h-1.7461v-1.5859c0-0.84375-0.6875-1.5312-1.5312-1.5312h-1.8672c-1.4609 0-2.6562 1.1914-2.6562 2.6523v0.23438h-0.31641c-0.95703 0-1.7383 0.78125-1.7383 1.7383v4.0391c0 0.95703 0.78125 1.7383 1.7383 1.7383h0.31641v0.22656c0 1.4648 1.1914 2.6562 2.6562 2.6562h1.8594c0.84375 0 1.5312-0.6875 1.5312-1.5312v-1.5938h2.5703c0.4375 0.63672 1.0273 1.1562 1.7109 1.5117v7.3984c-2.1328-2.4336-5.3203-3.8906-8.707-3.8906h-6.7656c-0.64062 0-1.2422-0.24609-1.6914-0.69922-0.45312-0.45313-0.69922-1.0586-0.69922-1.6953v-1.1562c1.7539-1.7031 2.7188-3.9766 2.7188-6.4258v-0.30078c1.2188-0.18359 2.1641-0.92578 2.6875-2.1406 0.82031-1.8867 0.60156-3.457-0.55078-4.2109v-2.3086c0-0.03125-0.003906-0.066406-0.011719-0.097656v-6.582c0-2.1367-1.7188-3.8711-3.832-3.8711h-14.594c-2.0039 0-3.5938 1.5391-3.75 3.5547-0.011719 0.042969-0.015625 0.085938-0.015625 0.13281v9.1797c-1.1445 0.75391-1.3633 2.3203-0.55078 4.207 0.52344 1.2148 1.4648 1.9609 2.6914 2.1445v0.30078c0 2.3633 0.91406 4.5742 2.5625 6.2578v1.4844c0 1.2305-1.0039 2.2344-2.2344 2.2344l-6.0039-0.003907c-4.2734 0-7.7461 3.4766-7.7461 7.7461v6.8242c0 0.33594 0.27344 0.60938 0.60938 0.60938s0.60938-0.27344 0.60938-0.60938v-6.8203c0-3.6016 2.9297-6.5312 6.5312-6.5312h5.7461l8.4531 8.6953c0.11328 0.11719 0.27344 0.18359 0.4375 0.18359 0.16406 0 0.32422-0.066407 0.4375-0.18359l8.4531-8.6992h6.5078c3.6289 0 7 1.8594 8.7969 4.8516 0.11328 0.1875 0.3125 0.29688 0.52344 0.29688 0.054687 0 0.10938-0.007813 0.16406-0.023438 0.26562-0.074218 0.44922-0.3125 0.44922-0.58594v-9.6523c-0.015625-0.17969-0.082031-0.44531-0.37891-0.5625-0.70703-0.29297-1.3086-0.81641-1.6914-1.4766-0.30469-0.52344-0.46484-1.1289-0.46484-1.7422v-5.7539c0-0.33984 0.14453-0.66797 0.39844-0.89844 0.25391-0.23438 0.58594-0.34766 0.94141-0.30859 0.36328 0.03125 0.69141 0.24609 0.89453 0.59375 0.125 0.20312 0.19141 0.44141 0.19141 0.68359v3.9258c0.011719 0.22656 0.14062 0.50781 0.46094 0.58984 2.1484 0.54688 2.7227 2.6758 2.8477 3.3164 0.058594 0.15234 0.16016 0.48047 0.59766 0.49219h4.2344v19.594c0 0.33594 0.27344 0.60938 0.60938 0.60938s0.60938-0.27344 0.60938-0.60938v-19.594h2.2227v1.5938c0 0.84375 0.6875 1.5312 1.5312 1.5312h1.8594c1.4648 0 2.6562-1.1914 2.6562-2.6602v-0.22656h0.31641c0.95703 0 1.7383-0.78125 1.7383-1.7383zm-52.238-17.715h14.598c1.4414 0 2.6133 1.1914 2.6133 2.6562v6.6875c0 0.15625-0.12109 0.28125-0.27344 0.28125h-0.57031c-0.32813 0-0.64063-0.070313-0.9375-0.21094-2.7852-1.3086-4.7188-2.2344-4.957-2.3672-0.35938-0.24609-1.1328 0.058594-0.90625 0.71484 0.15625 0.50391 0.51953 2.1094-1.0156 2.625-0.64062 0.21484-2.4961-0.85938-5.6367-4.6094-0.94922-1.1367-1.6211-2.0469-1.6289-2.0586-0.19922-0.26953-0.57812-0.32812-0.85156-0.12891-0.26953 0.19922-0.32812 0.57813-0.12891 0.85156 0.023437 0.03125 0.50391 0.67969 1.2344 1.5781l-4.0859 2.5664v-5.9297c0-1.4922 1.1211-2.6562 2.5469-2.6562zm-1.0156 16.828c-1.0312 0-1.7656-0.48828-2.1797-1.4531-0.29297-0.67578-0.84766-2.3047 0.28906-2.8086 0.21875-0.097656 0.36328-0.31641 0.36328-0.55859v-1.9844l4.875-3.0586c3.4492 4.0273 5.1836 4.6797 6.0391 4.6797 0.26562 0 0.44922-0.0625 0.57422-0.10547 1.5234-0.51172 2.0234-1.7148 1.9961-2.9102 0.73438 0.35547 1.9531 0.93359 3.9766 1.8867 0.45703 0.21484 0.94922 0.32422 1.4531 0.32422h0.57031c0.097656 0 0.19141-0.011718 0.28125-0.027343v1.1953c0 0.25391 0.15625 0.47266 0.37891 0.5625 1.1484 0.53125 0.5 2.2734 0.27344 2.8008-0.42188 0.97656-1.1367 1.4531-2.1797 1.4531-0.33594 0-0.60937 0.27344-0.60937 0.60937v0.86719c0 2.1445-0.85938 4.1406-2.4219 5.6211-0.019531 0.015625-0.039062 0.03125-0.054687 0.050781-0.058594 0.058594-0.11719 0.11328-0.17969 0.16797-1.3984 1.2266-3.2031 1.9062-5.0938 1.9062-1.875-0.003906-3.6836-0.67969-5.082-1.9062-0.078125-0.070313-0.15625-0.14062-0.23438-0.21484-0.003906-0.003906-0.027343-0.023438-0.03125-0.027344-0.011719-0.015625-0.023437-0.027344-0.039062-0.039062-1.5195-1.4727-2.3555-3.4453-2.3555-5.5586v-0.86719c0-0.33203-0.27344-0.60547-0.60938-0.60547zm8.3516 20.066-7.4102-7.625c1.3008-0.49609 2.2305-1.7539 2.2305-3.2227v-0.42969c1.5039 1.0664 3.3125 1.6523 5.1914 1.6562 1.8008-0.003906 3.5469-0.55078 5.0156-1.5508v0.16406c0 0.96094 0.375 1.8672 1.0547 2.5547 0.37891 0.37891 0.83203 0.66016 1.3242 0.83594zm18.613-12.047c0 0.17188-0.14062 0.3125-0.3125 0.3125h-1.8633c-0.79297 0-1.4336-0.64453-1.4336-1.4414v-0.83594c0-0.33594-0.27344-0.60938-0.60938-0.60938h-0.92578c-0.28516 0-0.51953-0.23438-0.51953-0.51953v-4.0391c0-0.28516 0.23438-0.51953 0.51953-0.51953h0.92578c0.33594 0 0.60938-0.27344 0.60938-0.60938v-0.83984c0-0.79297 0.64453-1.4336 1.4336-1.4336h1.8594c0.17188 0 0.3125 0.14062 0.3125 0.3125zm1.2148-7.418h1.7461v3.1719c0 0.48828 0.085938 0.97656 0.23438 1.4336h-1.9844zm13.52-1.2227h-6.9102v-1.2812c0-0.13281-0.011719-0.26562-0.03125-0.39062h5.1406c0.95313-0.003906 1.7305 0.73828 1.8008 1.6719zm-3.7422 5.8281c-0.29297-1.0352-1.0938-2.8867-3.1641-3.6289v-0.97656h10.363v4.6094zm14.078-0.28125c0 0.28516-0.23438 0.51953-0.51953 0.51953h-0.92578c-0.33594 0-0.60938 0.27344-0.60938 0.60938v0.83594c0 0.79688-0.64453 1.4414-1.4375 1.4414h-1.8594c-0.17188 0-0.3125-0.14062-0.3125-0.3125v-10.227c0-0.17187 0.14062-0.3125 0.3125-0.3125h1.8594c0.79297 0 1.4375 0.64453 1.4375 1.4375v0.83984c0 0.30859 0.23047 0.56641 0.53516 0.60547 0.03125 0.003906 0.066406 0.003906 0.097656 0.003906h0.90234c0.28516 0 0.51953 0.23438 0.51953 0.51953z"/>
        </svg>
      ),
      title: "Online Koçluk",
      desc: "Bulunduğun her yerden bana ulaş",
    },
    {
      icon: (
        <svg width="56" height="56" viewBox="0 0 72 90" fill="#D4A017">
          <g>
            <path d="M36,3C17.8,3,3,17.8,3,36s14.8,33,33,33s33-14.8,33-33S54.2,3,36,3z M36,67C18.91,67,5,53.09,5,36S18.91,5,36,5s31,13.91,31,31S53.09,67,36,67z"/>
            <path d="M64.32,31.93c-1.32-1.31-3.33-1.52-4.86-0.62L55,26.85c0.53-1.11,0.34-2.49-0.58-3.41l-1.62-1.62c-0.63-0.63-0.94-1.48-0.86-2.34c0.29-3.26-0.86-6.46-3.17-8.76c-2.21-2.21-5.27-3.37-8.39-3.21c-3.12,0.17-6.04,1.68-8,4.14c-3.22,4.02-3.18,9.82,0.09,13.81c2.31,2.81,5.85,4.3,9.47,3.99c0.89-0.08,1.75,0.24,2.38,0.86l1.62,1.62c0.58,0.58,1.35,0.88,2.12,0.88c0.44,0,0.88-0.11,1.28-0.3l4.46,4.46c-0.36,0.61-0.55,1.31-0.55,2.03c0,1.07,0.42,2.07,1.17,2.83c0.76,0.76,1.76,1.17,2.83,1.17s2.07-0.42,2.83-1.17c0.76-0.75,1.17-1.76,1.17-2.83c0-0.08,0-0.17-0.01-0.25c1.1,0.08,2.24-0.32,3.08-1.16C65.88,36.03,65.88,33.49,64.32,31.93z M47.35,30.51l-1.62-1.62c-0.94-0.94-2.21-1.46-3.53-1.46c-0.15,0-0.29,0.01-0.44,0.02c-2.97,0.25-5.86-0.96-7.75-3.27c-2.68-3.26-2.71-8-0.08-11.29c1.64-2.04,3.96-3.25,6.55-3.39c2.55-0.13,5.06,0.81,6.86,2.62c1.89,1.89,2.83,4.5,2.59,7.17c-0.13,1.45,0.4,2.89,1.44,3.93l1.62,1.62c0.39,0.39,0.39,1.02,0,1.42l-4.24,4.24C48.38,30.91,47.74,30.91,47.35,30.51z M62.91,36.17c-0.78,0.78-2.05,0.78-2.83,0c-0.39-0.39-1.02-0.39-1.41,0c-0.19,0.2-0.29,0.45-0.29,0.71s0.1,0.51,0.29,0.71c0.38,0.38,0.59,0.88,0.59,1.41s-0.21,1.04-0.59,1.41c-0.76,0.76-2.07,0.76-2.83,0c-0.38-0.38-0.59-0.88-0.59-1.41s0.21-1.04,0.59-1.41c0.19-0.19,0.29-0.44,0.29-0.71c0-0.26-0.11-0.52-0.29-0.71l-4.95-4.95l1.41-1.41l1.41-1.41l4.95,4.95c0.39,0.39,1.02,0.39,1.41,0c0.78-0.78,2.05-0.78,2.83,0C63.69,34.12,63.69,35.39,62.91,36.17z"/>
            <path d="M23,31c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6S26.31,31,23,31z M23,41c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S25.21,41,23,41z"/>
            <path d="M34.73,44.2c1.38-0.08,2.81-0.17,4.02-1.54c1.18-1.34,1.6-3.29,1.24-5.8c-0.01-0.09-0.04-0.18-0.08-0.27c-1.05-2.36-2.47-4.05-4.23-5.03c-0.21-0.12-0.43-0.23-0.66-0.34c-0.64-0.32-1.24-0.61-1.85-1.27c-0.65-0.71-0.92-1.44-1.16-2.07l-0.09-0.24c-0.73-1.91-2.29-4.73-4.29-6.41c-3.07-2.57-6.99-2.31-7.75-2.23c-4.04,0.42-6.46,3.05-7.63,4.32C8.67,27.22,8.2,31.9,8,33.9c-0.52,5.21,1.1,9.13,2.07,11.48c1.51,3.66,2.94,7.12,6.56,8.55c0.36,0.14,1.72,0.63,3.46,0.63c1,0,2.13-0.16,3.28-0.63c2.64-1.09,3.66-3.13,4.56-4.94c0.81-1.63,1.58-3.17,3.49-4.09C32.63,44.33,33.7,44.26,34.73,44.2z M26.15,48.09c-0.85,1.71-1.59,3.18-3.53,3.98c-2.44,1.01-4.8,0.17-5.25,0c-2.83-1.12-4.04-4.05-5.44-7.45C10.97,42.3,9.53,38.81,10,34.1c0.19-1.95,0.6-6.01,3.74-9.42c1.08-1.17,3.08-3.34,6.37-3.68c0.09-0.01,0.37-0.03,0.77-0.03c1.22,0,3.6,0.23,5.48,1.81c1.6,1.34,3.01,3.77,3.71,5.59l0.08,0.22c0.27,0.73,0.64,1.72,1.56,2.73c0.86,0.94,1.73,1.37,2.44,1.72c0.19,0.1,0.38,0.19,0.57,0.29c1.34,0.74,2.45,2.08,3.31,3.97c0.24,1.84-0.02,3.2-0.78,4.06c-0.63,0.71-1.34,0.79-2.64,0.87c-1.11,0.07-2.49,0.15-4.04,0.89C28.04,44.31,27.04,46.32,26.15,48.09z"/>
            <path d="M40,47c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S44.96,47,40,47z M40,63c-3.86,0-7-3.14-7-7s3.14-7,7-7s7,3.14,7,7S43.86,63,40,63z"/>
            <path d="M38,56c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1s0.45,1,1,1h2C37.55,57,38,56.55,38,56z"/>
            <path d="M42,56c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1s-0.45-1-1-1h-2C42.45,55,42,55.45,42,56z"/>
            <path d="M42,54c0.26,0,0.51-0.1,0.71-0.29l1-1c0.39-0.39,0.39-1.02,0-1.41s-1.02-0.39-1.41,0l-1,1c-0.39,0.39-0.39,1.02,0,1.41C41.49,53.9,41.74,54,42,54z"/>
            <path d="M37.71,51.29c-0.39-0.39-1.02-0.39-1.41,0s-0.39,1.02,0,1.41l1,1C37.49,53.9,37.74,54,38,54s0.51-0.1,0.71-0.29c0.39-0.39,0.39-1.02,0-1.41L37.71,51.29z"/>
            <path d="M37.29,58.29l-1,1c-0.39,0.39-0.39,1.02,0,1.41C36.49,60.9,36.74,61,37,61s0.51-0.1,0.71-0.29l1-1c0.39-0.39,0.39-1.02,0-1.41S37.68,57.9,37.29,58.29z"/>
            <path d="M42.71,58.29c-0.39-0.39-1.02-0.39-1.41,0s-0.39,1.02,0,1.41l1,1C42.49,60.9,42.74,61,43,61s0.51-0.1,0.71-0.29c0.39-0.39,0.39-1.02,0-1.41L42.71,58.29z"/>
          </g>
        </svg>
      ),
      title: "Beslenme Takibi",
      desc: "Kişisel beslenme planı ve takibi",
    },
    {
      icon: (
        <svg width="56" height="56" viewBox="0 0 32 40" fill="#D4A017">
          <path d="M30,12a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H25a1,1,0,0,0,0,2h2.586L19,15.586l-5.293-5.293a1,1,0,0,0-1.414,0L3,19.586V2A1,1,0,0,0,1,2V30a1,1,0,0,0,1,1H30a1,1,0,0,0,0-2H3V22.414l10-10,5.293,5.293a1,1,0,0,0,1.414,0L29,8.414V11A1,1,0,0,0,30,12Z"/>
        </svg>
      ),
      title: "İlerleme Analizi",
      desc: "Haftalık değerlendirme ve performans takibi",
    },
  ];

  const steps = [
    { n: "01", t: "WhatsApp'tan yaz, randevunu al" },
    { n: "02", t: "Ücretsiz 30 dk deneme dersine gel" },
    { n: "03", t: "Kişisel programınla dönüşümüne başla" },
  ];

  const testimonials = [
    { name: "Selin K.", text: "3 ayda 12 kilo verdim ve kendimi çok daha enerjik hissediyorum." },
    { name: "Mert A.", text: "Online koçluk programı sayesinde evden antrenman yapmayı öğrendim." },
    { name: "Şerife", text: "Erkan Bey ile tanıştığımda başka bir antrenörle çalışıyordum. Öğrencileriyle nasıl ilgilendiğini görünce neden bu kadar başarılı bir eğitmen olduğunu anladım. Samimi, disiplinli ve saygılı bir eğitmen; onu bulduğum için çok şanslıyım." },
  ];

  const trialIncludes = [
    "Vücut analizi ve hedef belirleme",
    "Sana özel antrenman önerisi",
    "Beslenme hakkında ilk adım rehberliği",
    "Sorularını cevaplarız",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HERO — PulseFitHero bileşeni */}
      <PulseFitHero
        logo={
          <a href="/" className="flex items-center">
            Erkan <span style={{ color: "#D4A017" }}>&nbsp;Oduncu</span>
          </a>
        }
        navigation={[
          { label: "Anasayfa", href: "/" },
          { label: "Hakkımda", href: "/hakkimda" },
          { label: "Paketler", href: "/paketler" },
          { label: "SSS", href: "/sss" },
          { label: "Dönüşümler", href: "/donusumler" },
        ]}
        ctaButton={{ label: "Ücretsiz Deneme Dersi Al", href: WA_URL }}
        title={null}
        titleLine1="Güçlü Bir Beden"
        titleLine2="Güçlü Bir Zihin"
        subtitle="Nişantaşı ve Teşvikiye'de birebir personal training ile kilo ver, kas yap, formunu değiştir. Kişiye özel program, beslenme takibi ve 7/24 destek."
        primaryAction={{ label: "Ücretsiz 30 dk Deneme Dersi", href: WA_URL }}
        secondaryAction={{ label: "Dönüşümleri Gör", href: "/donusumler" }}
        disclaimer="*Kredi kartı gerekmez. Hemen yaz, bugün başla."
        socialProof={{
          text: "Güvenilir sonuçlar, gerçek danışanlar",
          stats: [
            { value: "5+", label: "Yıl Deneyim" },
            { value: "500+", label: "Danışan" },
            { value: "4.9/5", label: "Memnuniyet" },
          ],
        }}
        programs={[
          {
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
            category: "Kilo Verme",
            title: "Yağ Yakma Programı",
            href: "/kilo-vermek-istiyorum",
          },
          {
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop",
            category: "Kas Yapma",
            title: "Kas & Güç Antrenmanı",
            href: "/paketler",
          },
          {
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop",
            category: "Form Değişimi",
            title: "Vücut Dönüşüm Programı",
            href: "/donusumler",
          },
          {
            image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=500&fit=crop",
            category: "Online Koçluk",
            title: "Her Yerden Antrenman",
            href: "/paketler",
          },
          {
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=500&fit=crop",
            category: "Esneklik & Toparlanma",
            title: "Mobility & Recovery",
            href: "/paketler",
          },
        ]}
      />

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
              <div className="mb-5">{s.icon}</div>
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

        {/* Yorum Formu */}
        <div className="mt-14 border border-border bg-card p-8 md:p-10 max-w-2xl">
          <div className="eyebrow text-gold mb-3">Deneyimini Paylaş</div>
          <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
            Sen de Yorum Bırak
          </h3>
          <p className="text-muted-foreground text-sm mb-8">
            Birlikte çalıştıysak deneyimini paylaşmana sevinirim.
          </p>
          <TestimonialForm />
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
