"use client";

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "Gallery", id: "gallery" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer style={{ backgroundColor: "#faf8f5", borderTop: "1px solid #e8e0d8", padding: "48px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 24, fontWeight: 700, color: "var(--primary)", marginBottom: 8 }}>
              Tea Hub
            </div>
            <p style={{ fontFamily: "var(--font-sans)", color: "var(--muted-foreground)", fontSize: 14 }}>
              A cozy corner for tea lovers in Kakarvitta jhapa.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, color: "var(--muted-foreground)", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--primary)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--muted-foreground)"; }}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid #e8e0d8", paddingTop: 32, textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--muted-foreground)" }}>
            &copy; {new Date().getFullYear()} Tea Hub. All rights reserved. Kakarvitta jhapa, Sunsari, Nepal.
          </p>
        </div>
      </div>
    </footer>
  );
}
