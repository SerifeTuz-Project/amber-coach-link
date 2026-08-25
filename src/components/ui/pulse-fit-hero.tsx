import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { StaggeredFadeTwoLine } from "@/components/ui/staggered-fade";

interface NavigationItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface ProgramCard {
  image: string;
  category: string;
  title: string;
  href?: string;
}

interface PulseFitHeroProps {
  logo?: React.ReactNode;
  navigation?: NavigationItem[];
  ctaButton?: {
    label: string;
    href: string;
  };
  title?: React.ReactNode;
  titleLine1?: string;
  titleLine2?: string;
  subtitle: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  disclaimer?: string;
  socialProof?: {
    text: string;
    stats: { value: string; label: string }[];
  };
  programs?: ProgramCard[];
  className?: string;
  children?: React.ReactNode;
}

export function PulseFitHero({
  logo,
  navigation = [],
  ctaButton,
  title,
  titleLine1,
  titleLine2,
  subtitle,
  primaryAction,
  secondaryAction,
  disclaimer,
  socialProof,
  programs = [],
  className,
  children,
}: PulseFitHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full min-h-screen flex flex-col overflow-hidden",
        className
      )}
      style={{ backgroundColor: "#0A0A0A" }}
      role="banner"
      aria-label="Hero bölümü"
    >
      {/* Arka plan fotoğrafı */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/backgroundimage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Karartma katmanı */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />
      {/* LED tavan şeridi animasyonu */}
      <div
        className="pointer-events-none absolute z-10"
        style={{
          top: "6%",
          left: "8%",
          right: "8%",
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, rgba(255,90,10,0.8) 15%, rgba(255,130,30,1) 50%, rgba(255,90,10,0.8) 85%, transparent 100%)",
          borderRadius: "2px",
          animation: "ledGlow 3s ease-in-out infinite",
          boxShadow: "0 0 16px 8px rgba(255,90,10,0.45), 0 0 36px 14px rgba(255,70,0,0.18)",
        }}
      />
      {/* LED ikinci tavan şeridi */}
      <div
        className="pointer-events-none absolute z-10"
        style={{
          top: "11%",
          left: "12%",
          right: "12%",
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, rgba(255,90,10,0.6) 15%, rgba(255,130,30,0.85) 50%, rgba(255,90,10,0.6) 85%, transparent 100%)",
          borderRadius: "2px",
          animation: "ledGlow 3s ease-in-out infinite 0.3s",
          boxShadow: "0 0 12px 6px rgba(255,90,10,0.3), 0 0 28px 10px rgba(255,70,0,0.12)",
        }}
      />
      {/* LED duvar şeridi (sağ) */}
      <div
        className="pointer-events-none absolute z-10"
        style={{
          top: "14%",
          bottom: "0",
          right: "0%",
          width: "2px",
          background: "linear-gradient(180deg, rgba(255,100,20,0.8) 0%, rgba(255,140,40,0.5) 40%, transparent 100%)",
          animation: "ledGlow 3s ease-in-out infinite 0.6s",
          boxShadow: "0 0 12px 5px rgba(255,90,10,0.35)",
        }}
      />

      {/* Header */}
      <header className="relative z-20 flex flex-row justify-between items-center px-5 md:px-10 lg:px-16 h-16 md:h-20 border-b border-white/10">
        {/* Logo */}
        <div className="font-display text-lg md:text-xl uppercase tracking-wider text-white shrink-0">
          {logo ?? (
            <>
              Erkan <span style={{ color: "#D4A017" }}>Oduncu</span>
            </>
          )}
        </div>

        {/* Navigasyon */}
        {navigation.length > 0 && (
          <nav
            className="hidden md:flex flex-row items-center gap-4 lg:gap-8 text-xs lg:text-sm text-white/70 tracking-wide"
            aria-label="Ana navigasyon"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-1 hover:text-white transition-colors whitespace-nowrap"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>
            ))}
          </nav>
        )}

        {/* CTA Butonu */}
        {ctaButton && (
          <a
            href={ctaButton.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{
              background: "#FFFFFF",
              color: "#1a1a1a",
              fontWeight: 500,
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            }}
          >
            {ctaButton.label}
          </a>
        )}
      </header>

      {/* Ana İçerik */}
      {children ? (
        <div className="relative z-10 flex-1 flex items-center justify-center w-full">
          {children}
        </div>
      ) : (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 md:px-8 py-16">
          <div className="flex flex-col items-center text-center max-w-5xl gap-8">
            {/* Eyebrow */}
            <div
              className="eyebrow"
              style={{ color: "#D4A017", letterSpacing: "0.18em", fontSize: "12px", fontWeight: 600 }}
            >
              Personal Trainer · Nişantaşı / Teşvikiye / Şişli
            </div>

            {/* Başlık */}
            {titleLine1 && titleLine2 ? (
              <StaggeredFadeTwoLine
                line1={titleLine1}
                line2={titleLine2}
                className="font-display"
                style={{ fontSize: "clamp(48px, 8vw, 96px)", lineHeight: "0.95" }}
              />
            ) : (
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(48px, 8vw, 96px)",
                  lineHeight: "0.95",
                  color: "#FFFFFF",
                }}
              >
                {title}
              </h1>
            )}

            {/* Alt Başlık */}
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                lineHeight: "1.65",
                color: "rgba(255,255,255,0.75)",
                maxWidth: "560px",
              }}
            >
              {subtitle}
            </p>

            {/* Butonlar */}
            {(primaryAction || secondaryAction) && (
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {primaryAction && (
                  <a
                    href={primaryAction.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 rounded-full transition-all hover:scale-105 text-base md:text-lg font-semibold"
                    style={{
                      background: "#D4A017",
                      color: "#0A0A0A",
                      boxShadow: "0 4px 24px rgba(212,160,23,0.35)",
                    }}
                  >
                    {primaryAction.label}
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M7 10H13M13 10L10 7M13 10L10 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}

                {secondaryAction && (
                  <a
                    href={secondaryAction.href}
                    className="px-8 py-4 rounded-full text-base md:text-lg font-medium transition-all hover:scale-105"
                    style={{
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#FFFFFF",
                    }}
                  >
                    {secondaryAction.label}
                  </a>
                )}
              </div>
            )}

            {/* Disclaimer */}
            {disclaimer && (
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", fontStyle: "italic" }}>
                {disclaimer}
              </p>
            )}

            {/* Social Proof İstatistikler */}
            {socialProof && (
              <div className="flex flex-col items-center gap-4">
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
                  {socialProof.text}
                </p>
                <div className="flex gap-8">
                  {socialProof.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div
                        className="font-display uppercase"
                        style={{ fontSize: "28px", color: "#D4A017", lineHeight: 1 }}
                      >
                        {s.value}
                      </div>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "4px", letterSpacing: "0.1em" }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Program Kartları Carousel */}
      {programs.length > 0 && (
        <div
          className="relative z-10 w-full overflow-hidden"
          style={{ paddingTop: "40px", paddingBottom: "60px" }}
        >
          {/* Soluk geçiş — sol */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: "120px",
              background: "linear-gradient(90deg, #0A0A0A 0%, transparent 100%)",
            }}
          />
          {/* Soluk geçiş — sağ */}
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: "120px",
              background: "linear-gradient(270deg, #0A0A0A 0%, transparent 100%)",
            }}
          />

          {/* Kayan şerit */}
          <motion.div
            className="flex items-center"
            animate={{ x: [0, -((programs.length * 380) / 2)] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: programs.length * 4,
                ease: "linear",
              },
            }}
            style={{ gap: "20px", paddingLeft: "20px" }}
          >
            {[...programs, ...programs].map((program, index) => (
              <motion.a
                key={index}
                href={program.href ?? "#"}
                whileHover={{ scale: 1.04, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 relative overflow-hidden block"
                style={{
                  width: "300px",
                  height: "420px",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                  border: "1px solid rgba(212,160,23,0.15)",
                }}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {/* Karartma */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.85) 100%)",
                  }}
                />
                {/* Alt metin */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      color: "#D4A017",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {program.category}
                  </span>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "20px",
                      color: "#FFFFFF",
                      lineHeight: "1.2",
                      marginTop: "6px",
                    }}
                  >
                    {program.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
