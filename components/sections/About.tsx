"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Smile, Tag, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    title: "Fresh Premium Tea",
    desc: "Sourced from the finest gardens, brewed to perfection every single cup.",
    icon: Leaf,
    bg: "#f0fdf4",
    color: "#15803d",
    hoverBg: "#16a34a",
  },
  {
    title: "Good Vibes Only",
    desc: "A calm, unhurried space to read, chat, or simply be yourself.",
    icon: Smile,
    bg: "#fffbeb",
    color: "#b45309",
    hoverBg: "#d97706",
  },
  {
    title: "Affordable Prices",
    desc: "Premium quality tea that never breaks the bank. Flavor for everyone.",
    icon: Tag,
    bg: "#eff6ff",
    color: "#1d4ed8",
    hoverBg: "#2563eb",
  },
  {
    title: "Friendly Environment",
    desc: "Everyone is welcome here. We remember your order and your name.",
    icon: Heart,
    bg: "#fff1f2",
    color: "#be123c",
    hoverBg: "#e11d48",
  },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-text > *", { y: 40, autoAlpha: 0 }, {
        y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: ".about-text", start: "top 85%", once: true },
      });
      gsap.fromTo(".reason-card", { y: 50, autoAlpha: 0 }, {
        y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: ".reasons-grid", start: "top 85%", once: true },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} style={{ padding: "112px 0", backgroundColor: "#faf8f5", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: 384, height: 384, background: "radial-gradient(circle, rgba(107,66,38,0.06) 0%, transparent 70%)", transform: "translate(50%, -50%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: 500, height: 500, background: "radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)", transform: "translate(-25%, 33%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <div className="about-text" style={{ maxWidth: 700, margin: "0 auto 80px", textAlign: "center" }}>
          <span style={{ display: "inline-block", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: "rgba(107,66,38,0.7)", textTransform: "uppercase", marginBottom: 16, fontFamily: "var(--font-sans)" }}>
            Our Story
          </span>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: 24, lineHeight: 1.2 }}>
            More Than Just a Cup of Tea
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, color: "var(--muted-foreground)", lineHeight: 1.75 }}>
            Tea Hub started with a simple idea — creating a space in Kakarvitta where people could slow down. We believe that a good cup of tea is an experience, a moment of pause, and a chance to connect. Our wooden tables have seen endless laughter, deep conversations, and quiet afternoons of reflection.
          </p>
        </div>

        <div className="reasons-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="reason-card"
                style={{ padding: 32, borderRadius: 24, backgroundColor: "#ffffff", border: "1px solid #e8e0d8", boxShadow: "0 1px 4px rgba(0,0,0,0.04)", textAlign: "center", transition: "all 0.4s ease" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)"; el.style.transform = "translateY(-8px)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)"; el.style.transform = "translateY(0)"; }}
              >
                <div style={{ width: 64, height: 64, margin: "0 auto 24px", borderRadius: 16, backgroundColor: reason.bg, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s", color: reason.color }}>
                  <Icon size={28} />
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 700, color: "var(--foreground)", marginBottom: 12 }}>{reason.title}</h3>
                <p style={{ fontFamily: "var(--font-sans)", color: "var(--muted-foreground)", fontSize: 14, lineHeight: 1.65 }}>{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
