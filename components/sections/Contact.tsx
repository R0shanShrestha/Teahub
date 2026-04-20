"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: MapPin,
    title: "Location",
    content: "Kakarvitta jhapa \nKoshi Province, Nepal",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+977-9800000000",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Daily: 7am – 9pm\nWeekends until 10pm",
  },
];

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-header", { y: 40, autoAlpha: 0 }, {
        y: 0, autoAlpha: 1, duration: 0.9, ease: "power2.out",
        scrollTrigger: { trigger: ".contact-header", start: "top 85%", once: true },
      });
      gsap.fromTo(".contact-card", { y: 40, autoAlpha: 0 }, {
        y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: ".contact-cards", start: "top 85%", once: true },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      style={{
        padding: "112px 0",
        backgroundColor: "#2d2016",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          background:
            "radial-gradient(circle at 20% 50%, hsl(35 50% 70%) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(25 40% 60%) 0%, transparent 40%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <div className="contact-header" style={{ maxWidth: 600, margin: "0 auto 64px", textAlign: "center" }}>
          <span style={{ display: "inline-block", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", marginBottom: 16, fontFamily: "var(--font-sans)" }}>
            Find Us
          </span>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#ffffff", marginBottom: 20, lineHeight: 1.2 }}>
            Come Visit Us
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.6)", fontSize: 18, lineHeight: 1.7 }}>
            Ready for your perfect cup? Drop by our cozy space in Itahari or message us to place an order.
          </p>
        </div>

        <div className="contact-cards" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20, maxWidth: 900, margin: "0 auto 56px" }}>
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="contact-card"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 32, borderRadius: 24, backgroundColor: "rgba(255,255,255,0.07)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.10)", textAlign: "center", transition: "background 0.3s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(255,255,255,0.11)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(255,255,255,0.07)"; }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 16, backgroundColor: "rgba(255,255,255,0.10)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, color: "rgba(255,255,255,0.9)" }}>
                  <Icon size={26} />
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 700, color: "#ffffff", marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7, whiteSpace: "pre-line" }}>{card.content}</p>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => window.open("https://wa.me/9779800000000", "_blank")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 40px",
              borderRadius: 9999,
              backgroundColor: "#25D366",
              color: "#ffffff",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 18,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 8px 32px rgba(37,211,102,0.25)",
              transition: "all 0.3s",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.backgroundColor = "#20bd5a"; b.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.backgroundColor = "#25D366"; b.style.transform = "translateY(0)"; }}
          >
            <MessageCircle size={22} />
            Message on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
