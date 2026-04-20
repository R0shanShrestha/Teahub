"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "/assets/gallery/gallery-1.png", label: "Cozy interiors" },
  { src: "/assets/gallery/gallery-2.jpg", label: "Tea being poured" },
  { src: "/assets/gallery/gallery-3.jpg", label: "Happy guests" },
  { src: "/assets/gallery/gallery-4.jpg", label: "Our selection" },
  { src: "/assets/gallery/gallery-5.jpg", label: "Morning ritual" },
  { src: "/assets/gallery/gallery-6.jpg", label: "Warm evenings" },
];

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".gallery-header", { y: 40, autoAlpha: 0 }, {
        y: 0, autoAlpha: 1, duration: 0.9, ease: "power2.out",
        scrollTrigger: { trigger: ".gallery-header", start: "top 85%", once: true },
      });
      gsap.fromTo(".gallery-item", { scale: 0.92, autoAlpha: 0 }, {
        scale: 1, autoAlpha: 1, duration: 0.7, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".gallery-grid", start: "top 85%", once: true },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={containerRef} style={{ padding: "112px 0", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="gallery-header" style={{ textAlign: "center", marginBottom: 64, maxWidth: 600, margin: "0 auto 64px" }}>
          <span style={{ display: "inline-block", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: "rgba(107,66,38,0.7)", textTransform: "uppercase", marginBottom: 16, fontFamily: "var(--font-sans)" }}>
            Gallery
          </span>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: 16, lineHeight: 1.2 }}>
            The Tea Hub Experience
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", color: "var(--muted-foreground)", fontSize: 18 }}>
            Warm wood, soft light, and moments worth remembering.
          </p>
        </div>

        <div
          className="gallery-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="gallery-item"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 16,
                cursor: "pointer",
                gridColumn: index === 0 || index === 3 ? "span 2" : "span 1",
                aspectRatio: index === 0 || index === 3 ? "2/1" : "1/1",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.label}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease", display: "block" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.1), transparent)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: 16,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.opacity = "1"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.opacity = "0"; }}
              >
                <p style={{ fontFamily: "var(--font-serif)", color: "#ffffff", fontSize: 14, fontWeight: 500 }}>{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
