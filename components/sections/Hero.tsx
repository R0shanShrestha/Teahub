"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MessageCircle, ChevronDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-bg",
        { scale: 1.08, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 2.2 }
      )
        .fromTo(
          ".hero-badge",
          { y: -16, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8 },
          "-=1.4"
        )
        .fromTo(
          ".hero-title",
          { y: 40, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1 },
          "-=0.6"
        )
        .fromTo(
          ".hero-sub",
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.9 },
          "-=0.7"
        )
        .fromTo(
          ".hero-cta",
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".hero-scroll",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.8 },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        className="hero-bg"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: "url(/assets/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.60) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 24px 0",
          textAlign: "center",
          color: "#ffffff",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="hero-badge"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 9999,
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.25)",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.02em",
            marginBottom: 32,
            fontFamily: "var(--font-sans)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#4ade80",
              animation: "pulse 2s infinite",
              flexShrink: 0,
            }}
          />
          Est. 2024 — Kakarvitta jhapa, Nepal
        </div>

        <h1
          className="hero-title"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 24,
            maxWidth: 900,
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}
        >
          A Perfect Place to Relax
          <br />
          <em style={{ fontStyle: "normal", color: "#fde68a" }}>
            with Every Sip
          </em>
        </h1>

        <p
          className="hero-sub"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.8)",
            maxWidth: 600,
            marginBottom: 48,
            fontWeight: 300,
            lineHeight: 1.7,
            textShadow: "0 1px 8px rgba(0,0,0,0.2)",
          }}
        >
          Find your favorite corner of the world. Warm wood, soft light, and
          handcrafted teas brewed slowly — just for you.
        </p>

        <div
          className="hero-cta"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() =>
              window.open("https://wa.me/9779807960410", "_blank")
            }
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,  
              padding: "14px 36px",
              borderRadius: 9999,
              backgroundColor: "#25D366",
              color: "#ffffff",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 16,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 8px 32px rgba(37,211,102,0.35)",
              letterSpacing: "0.02em",
              transition: "all 0.3s",
            }}
          >
            <MessageCircle size={20} />
            Order on WhatsApp
          </button>
          <button
            onClick={() => {
              document
                .getElementById("menu")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 36px",
              borderRadius: 9999,
              backgroundColor: "rgba(255,255,255,0.12)",
              color: "#ffffff",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 16,
              border: "1px solid rgba(255,255,255,0.30)",
              backdropFilter: "blur(8px)",
              cursor: "pointer",
              letterSpacing: "0.02em",
              transition: "all 0.3s",
            }}
          >
            View Our Menu
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll"
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          color: "rgba(255,255,255,0.55)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <ChevronDown size={18} style={{ animation: "bounce 1.5s infinite" }} />
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
      `}</style>
    </section>
  );
}
