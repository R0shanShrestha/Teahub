# Tea Hub — Next.js Website

A premium, animated single-page landing website for **Tea Hub**, a cozy local tea shop in Kakarvitta jhapa, Nepal.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **GSAP** (animations + ScrollTrigger)
- **TypeScript**
- **Lucide React** (icons)

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm run start
```

## Project Structure

```
tea-hub-nextjs/
├── app/
│   ├── globals.css        # Global styles + CSS variables
│   ├── layout.tsx         # Root layout (metadata, fonts)
│   └── page.tsx           # Main page (assembles all sections)
├── components/
│   └── sections/
│       ├── Navbar.tsx     # Fixed sticky navbar with mobile menu
│       ├── Hero.tsx       # Hero with GSAP entrance animation
│       ├── Menu.tsx       # Tea menu cards with images
│       ├── Gallery.tsx    # Photo gallery with scroll animations
│       ├── About.tsx      # About + Why Choose Us section
│       ├── Contact.tsx    # Contact details + WhatsApp CTA
│       └── Footer.tsx     # Footer with nav links
├── public/
│   └── assets/
│       ├── hero-bg.png    # Hero background image
│       ├── menu/          # Tea item images (8 images)
│       └── gallery/       # Gallery photos (6 images)
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

## Customization

### Update Contact Info
In `components/sections/Contact.tsx` and `components/sections/Navbar.tsx`:
- Replace `https://wa.me/9779800000000` with your actual WhatsApp number
- Replace phone number and address

### Update Menu Prices
In `components/sections/Menu.tsx`, edit the `menuItems` array.

### Replace Images
Put your own images in the `public/assets/` folder with the same filenames.

### Update Colors
In `app/globals.css`, edit the CSS variables in `:root`:
```css
:root {
  --primary: #6b4226;     /* Main brown color */
  --background: #faf8f5;  /* Page background */
  --foreground: #2d2016;  /* Text color */
}
```

## Animations

GSAP is used for:
- **Hero section**: Timeline animation (background zoom + content slide-in)
- **Menu cards**: ScrollTrigger fade-up with stagger
- **Gallery**: ScrollTrigger scale + fade-in with stagger
- **About / Why Choose Us**: ScrollTrigger slide-up with stagger
- **Contact**: ScrollTrigger fade-up

---

Built with care for Tea Hub, Kakarvitta jhapa, Nepal.
