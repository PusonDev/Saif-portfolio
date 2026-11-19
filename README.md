# Saif Portfolio - Foundation Setup

Production-grade personal engineering portfolio template built with Next.js 14 App Router, TypeScript and Tailwind CSS.

## 🚀 Stack & Architectural Highlights

- **Framework:** Next.js 14 (App Router, Static Export ready)
- **Styling:** Tailwind CSS with custom Obsidian dark luxury design tokens
- **Animations:** Framer Motion physics
- **Icons:** Lucide React
- **Typography:** Architectural sans font, Geist Mono / JetBrains Mono metrics
- **Deployment:** Cloudflare Pages ready (`output: 'export'`)
- **Policies Enforced:**
  - Strict Halal media policy (zero female imagery, zero audio tracks)
  - Zero Oxford comma policy (`A, B and C`)
  - ZenVQ UI luxury guardrails (specular highlights, hairline borders and emerald mint accents)

## 📁 Project Structure

```
Saif-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css         # Luxury tokens, specular effects & scrollbars
│   │   ├── layout.tsx          # Root layout & SEO meta tags
│   │   └── page.tsx            # Main page assembly
│   ├── components/
│   │   ├── Navbar.tsx          # Floating frosted glass navbar
│   │   ├── HeroSection.tsx     # Hero banner, availability badge & stats
│   │   ├── ProjectsSection.tsx # Bento cards with specular edge lighting
│   │   ├── SkillsSection.tsx   # Stack & capability breakdown
│   │   ├── ContactSection.tsx  # Direct email actions & social links
│   │   └── Footer.tsx          # Minimalist architectural footer
│   ├── data/
│   │   └── portfolioData.ts    # Centralized data model for instant customization
│   └── lib/
│       └── utils.ts            # Class merging utility (clsx + twMerge)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── patch-node.js
└── run-build.js
```

## 🛠️ Commands

```bash
# Install dependencies
npm install

# Run local development server (Port 3006)
npm run dev

# Build static production export
npm run build
```
