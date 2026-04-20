"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "Gallery", id: "gallery" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.4s ease",
        padding: isScrolled ? "12px 0" : "20px 0",
        backgroundColor: isScrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid #e8e0d8" : "none",
        boxShadow: isScrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontFamily: "var(--font-serif)",
            fontWeight: 700,
            cursor: "pointer",
            color: isScrolled ? "var(--foreground)" : "#ffffff",
            transition: "color 0.3s",
            letterSpacing: "-0.02em",
          }}
          onClick={() => scrollTo("home")}
        >
          {/* Tea Hub */}
          {/* <img src={"/assets/logo/teahub.png"} alt="Tea Hub Logo" className="w-10 border" /> */}
          <span>
            Tea <span style={{ color: "var(--primary)" }} className="font-extrabold">Hub</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 14,
                color: isScrolled ? "rgba(45,32,22,0.7)" : "rgba(255,255,255,0.82)",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.3s",
              }}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => window.open("https://wa.me/9779800000000", "_blank")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              borderRadius: 9999,
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 14,
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
              letterSpacing: "0.01em",
            }}
          >
            <MessageCircle size={15} />
            Order Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: isScrolled ? "var(--foreground)" : "#ffffff",
            padding: 8,
            display: "none",
          }}
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid #e8e0d8",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 16,
                color: "rgba(45,32,22,0.75)",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                padding: "6px 0",
              }}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => window.open("https://wa.me/9779800000000", "_blank")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              width: "100%",
              padding: "12px 0",
              borderRadius: 9999,
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 14,
              border: "none",
              cursor: "pointer",
              marginTop: 8,
            }}
          >
            <MessageCircle size={16} />
            Order on WhatsApp
          </button>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
