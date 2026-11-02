# Anchor & Roots — Redesigned Website UI

> **Rooted in trust. Anchored in care.**  
> Minimal, nature-inspired, white & green web UI designed with high-craft Figma aesthetics for Non-Resident Indian (NRI) families.

---

## 🌿 Key Redesign Characteristics

1. **Minimal White & Green Palette**:
   - Primary: Deep Heritage Forest Green (`#0e2b1b`, `#153e28`)
   - Botanical Accents: Sage Green (`#2e7d52`), Leaf Mint (`#eef6f0`, `#e2f0e7`)
   - Natural Warmth: Harvest Ochre (`#b87333`)
   - Backgrounds: Clean, high-contrast pure white and soft alabaster layers

2. **Original Brand Logo Preserved**:
   - The original tree-and-root identity badge (`assets/logo.jpeg`) and brand manifesto are featured prominently in both the header and the footer.

3. **Nature & Human-Crafted Elements (Figma Aesthetic)**:
   - Botanical background watermarks and organic pill badges
   - Live on-ground operation status radar (`🟢 Active in Hyderabad, India`)
   - Glassmorphic navigation bar with blurred background
   - Tactile 6-pillar service cards with subtle hover lift and image zoom
   - Interactive Service Details Scope Modal
   - Interactive Care Plan Pricing Switcher (Monthly vs. Annual with 15% discount)
   - 4-step *"How It Works"* visual roadmap
   - 4-pillar *"Why Families Trust Us"* safeguard matrix
   - Interactive Free Home Audit Booking Form with real-time feedback
   - One-click direct NRI WhatsApp Concierge launcher

4. **100% Content & Link Parity**:
   - All links from [anchorroots.co.in](https://www.anchorroots.co.in/) are preserved, including service links, care plans, contact channels, and social media platforms (Facebook, Instagram, YouTube, X, LinkedIn, TikTok).

---

## 📁 Project Structure

```
c:\Users\adars\Downloads\anchorroots\
├── index.html              # Main redesigned single-page website
├── server.js               # Lightweight zero-dependency HTTP server (with video range streaming)
├── package.json            # npm scripts definition
├── assets/                 # High-resolution original images & media
│   ├── logo.jpeg           # Preserved official Anchor & Roots logo
│   ├── hero-video.mp4      # Original hero video clip
│   ├── hero-poster.jpg     # Video fallback thumbnail
│   ├── elder-care.jpg      # Elder Care service imagery
│   ├── property-watch.jpg  # Property & Land Watch imagery
│   ├── shipping-errands.jpg# Shipping & Errands imagery
│   ├── medical-coordination.jpg # Medical Coordination imagery
│   ├── personalized-travel.jpg  # Personalized Travel imagery
│   └── events.jpg          # Home, Weddings & Events imagery
└── src/
    ├── css/
    │   └── style.css       # Custom nature theme, glassmorphism, animations
    └── js/
        └── main.js         # Interactive modals, plan calculator, smooth scroll
```

---

## 🚀 How to Run Locally

You can launch the site locally using Node.js:

```bash
# Start server (default: port 3005)
node server.js
```

Then open your browser at:
👉 **[http://localhost:3005](http://localhost:3005)**

---

## 🌐 Deployment Options

This website is completely self-contained and static-ready:
- **Vercel / Netlify**: Simply drag and drop this folder or connect via Git.
- **GitHub Pages**: Push this repository and enable GitHub Pages on the root branch.
- **Wix / Webflow**: The HTML, Tailwind styles, and JS modules can be embedded directly into custom embed blocks or exported as clean assets.
