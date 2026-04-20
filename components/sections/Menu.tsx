"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MenuItem {
  name: string;
  price: string;
  image: string;
  desc: string;
  longDesc: string;
  tag: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Milk Tea",
    price: "30",
    image: "/assets/menu/milk-tea.png",
    desc: "Classic rich & creamy chiya",
    longDesc: "Our signature milk tea, made fresh every morning with full-cream milk, robust Darjeeling tea leaves, and a touch of sugar. A warm hug in every sip.",
    tag: "Bestseller",
  },
  {
    name: "Black Tea",
    price: "20",
    image: "/assets/menu/black-tea.png",
    desc: "Strong, pure, and awakening",
    longDesc: "Bold and uncompromising. Pure single-origin tea leaves steeped to the perfect strength. No additives, just the honest depth of a great cup.",
    tag: "",
  },
  {
    name: "Green Tea",
    price: "35",
    image: "/assets/menu/green-tea.png",
    desc: "Light, fresh, and healthy",
    longDesc: "Delicately hand-rolled green tea leaves from high-altitude gardens. Naturally sweet, grassy, and full of antioxidants. The cleanest sip you will have today.",
    tag: "Healthy",
  },
  {
    name: "Lemon Tea",
    price: "30",
    image: "/assets/menu/lemon-tea.png",
    desc: "Zesty, sweet, and refreshing",
    longDesc: "Black tea brightened with fresh-squeezed lemon and a hint of honey. Bright, tangy, and beautifully balanced — perfect for a warm afternoon.",
    tag: "",
  },
  {
    name: "Ginger Tea",
    price: "35",
    image: "/assets/menu/ginger-tea.png",
    desc: "Warm, spicy, and soothing",
    longDesc: "Fresh-grated ginger steeped slowly with aromatic tea leaves. Warming from the inside out, with a pleasant kick that lingers just long enough.",
    tag: "Popular",
  },
  {
    name: "Masala Tea",
    price: "40",
    image: "/assets/menu/masala-tea.png",
    desc: "Spiced with cardamom & cloves",
    longDesc: "A traditional Nepali-style masala chai with whole cardamom pods, cloves, cinnamon, and black pepper. Rich, layered, and deeply satisfying.",
    tag: "",
  },
  {
    name: "Cold Brew Tea",
    price: "60",
    image: "/assets/menu/cold-brew-tea.png",
    desc: "Slow steeped, served chilled",
    longDesc: "Premium tea leaves cold-steeped for 12 hours, then served over ice. Incredibly smooth, naturally sweet, and remarkably complex. Our most unique offering.",
    tag: "Special",
  },
  {
    name: "Premium Herbal",
    price: "80",
    image: "/assets/menu/herbal-tea.png",
    desc: "Caffeine-free floral blend",
    longDesc: "A curated blend of chamomile, rose petals, hibiscus, and lemongrass. Caffeine-free, deeply calming, and perfect for winding down. A true ritual in a cup.",
    tag: "Premium",
  },
];

export function Menu() {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".menu-header",
        { y: 40, autoAlpha: 0 },
        {
          y: 0, autoAlpha: 1, duration: 0.9, ease: "power2.out",
          scrollTrigger: { trigger: ".menu-header", start: "top 85%", once: true },
        }
      );
      gsap.fromTo(
        ".menu-card",
        { y: 50, autoAlpha: 0 },
        {
          y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: ".menu-grid", start: "top 85%", once: true },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const openPopup = useCallback((item: MenuItem) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveItem(item);
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      if (!overlayRef.current || !popupRef.current) return;
      gsap.set(overlayRef.current, { display: "flex", autoAlpha: 0 });
      gsap.set(popupRef.current, { scale: 0.88, autoAlpha: 0, y: 24 });

      const tl = gsap.timeline({ onComplete: () => setIsAnimating(false) });
      tl.to(overlayRef.current, { autoAlpha: 1, duration: 0.25, ease: "power2.out" })
        .to(popupRef.current, { scale: 1, autoAlpha: 1, y: 0, duration: 0.35, ease: "back.out(1.4)" }, "-=0.1");
    });
  }, [isAnimating]);

  const closePopup = useCallback(() => {
    if (isAnimating || !overlayRef.current || !popupRef.current) return;
    setIsAnimating(true);
    document.body.style.overflow = "";

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveItem(null);
        setIsAnimating(false);
        if (overlayRef.current) gsap.set(overlayRef.current, { display: "none" });
      },
    });
    tl.to(popupRef.current, { scale: 0.88, autoAlpha: 0, y: 16, duration: 0.25, ease: "power2.in" })
      .to(overlayRef.current, { autoAlpha: 0, duration: 0.2, ease: "power2.in" }, "-=0.1");
  }, [isAnimating]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape" && activeItem) closePopup(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeItem, closePopup]);

  useEffect(() => () => { document.body.style.overflow = ""; }, []);

  return (
    <>
      <section id="menu" ref={containerRef} style={{ padding: "112px 0", backgroundColor: "#faf8f5" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

          <div
            className="menu-header"
            style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}
          >
            <span style={{ display: "inline-block", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: "rgba(107,66,38,0.7)", textTransform: "uppercase", marginBottom: 16, fontFamily: "var(--font-sans)" }}>
              Our Menu
            </span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "var(--foreground)", marginBottom: 20, lineHeight: 1.2 }}>
              Our Handcrafted Menu
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", color: "var(--muted-foreground)", fontSize: 18, lineHeight: 1.7 }}>
              Brewed slowly with premium leaves and whole spices. Tap any item to explore and order.
            </p>
          </div>

          <div className="menu-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 28 }}>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="menu-card"
                role="button"
                tabIndex={0}
                aria-label={`View details for ${item.name}`}
                onClick={() => openPopup(item)}
                onKeyDown={(e) => e.key === "Enter" && openPopup(item)}
                style={{
                  position: "relative",
                  borderRadius: 20,
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e8e0d8",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  cursor: "pointer",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  userSelect: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 12px 32px rgba(107,66,38,0.14)";
                  el.style.transform = "translateY(-5px) scale(1.015)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
                  el.style.transform = "translateY(0) scale(1)";
                }}
              >
                {item.tag && (
                  <div style={{ position: "absolute", top: 12, left: 12, zIndex: 10 }}>
                    <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: 9999, fontSize: 11, fontWeight: 700, backgroundColor: "var(--primary)", color: "var(--primary-foreground)", fontFamily: "var(--font-sans)", letterSpacing: "0.03em" }}>
                      {item.tag}
                    </span>
                  </div>
                )}

                <div style={{ height: 208, overflow: "hidden", backgroundColor: "#f2ede7" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease", display: "block" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.1)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                  />
                </div>

                <div style={{ padding: "20px 24px 24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 700, color: "var(--foreground)", lineHeight: 1.3 }}>
                      {item.name}
                    </h3>
                    <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, color: "var(--primary)", fontSize: 15, marginLeft: 8, whiteSpace: "nowrap" }}>
                      Rs. {item.price}
                    </span>
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", color: "var(--muted-foreground)", fontSize: 13, lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal overlay */}
      <div
        ref={overlayRef}
        onClick={(e) => { if (e.target === overlayRef.current) closePopup(); }}
        style={{
          display: "none",
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          backgroundColor: "rgba(15,10,5,0.65)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      >
        <div
          ref={popupRef}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 440,
            backgroundColor: "#ffffff",
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.04)",
          }}
        >
          {/* Close button */}
          <button
            onClick={closePopup}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              zIndex: 10,
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: "none",
              backgroundColor: "rgba(0,0,0,0.08)",
              cursor: "pointer",
              fontSize: 18,
              color: "#555",
              lineHeight: 1,
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(0,0,0,0.14)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(0,0,0,0.08)"; }}
          >
            ✕
          </button>

          {activeItem && (
            <>
              <div style={{ height: 220, overflow: "hidden", backgroundColor: "#f2ede7" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeItem.image}
                  alt={activeItem.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>

              <div style={{ padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem,4vw,1.8rem)", fontWeight: 700, color: "var(--foreground)", lineHeight: 1.25, paddingRight: 16 }}>
                    {activeItem.name}
                  </h2>
                  <div style={{ flexShrink: 0, textAlign: "right" }}>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: 2 }}>Price</p>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 22, fontWeight: 700, color: "var(--primary)" }}>
                      Rs. {activeItem.price}
                    </p>
                  </div>
                </div>

                {activeItem.tag && (
                  <span style={{ display: "inline-block", padding: "3px 12px", borderRadius: 9999, fontSize: 11, fontWeight: 700, backgroundColor: "rgba(107,66,38,0.1)", color: "var(--primary)", fontFamily: "var(--font-sans)", letterSpacing: "0.03em", marginBottom: 16 }}>
                    {activeItem.tag}
                  </span>
                )}

                <p style={{ fontFamily: "var(--font-sans)", color: "var(--muted-foreground)", fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
                  {activeItem.longDesc}
                </p>

                <div style={{ height: 1, backgroundColor: "#e8e0d8", marginBottom: 24 }} />

                <button
                  onClick={() => window.open("https://wa.me/9779800000000", "_blank")}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    padding: "15px 0",
                    borderRadius: 16,
                    border: "none",
                    backgroundColor: "#25D366",
                    color: "#ffffff",
                    fontSize: 15,
                    fontWeight: 600,
                    fontFamily: "var(--font-sans)",
                    cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const b = e.currentTarget as HTMLButtonElement;
                    b.style.backgroundColor = "#1fb859";
                    b.style.transform = "translateY(-2px)";
                    b.style.boxShadow = "0 8px 28px rgba(37,211,102,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    const b = e.currentTarget as HTMLButtonElement;
                    b.style.backgroundColor = "#25D366";
                    b.style.transform = "translateY(0)";
                    b.style.boxShadow = "0 4px 20px rgba(37,211,102,0.35)";
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order on WhatsApp
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
