# AI Product Manager Portfolio

> A minimal, professional portfolio website for an AI Product Manager. Built with Next.js, TailwindCSS, Framer Motion, and MDX.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** — subtle animations
- **MDX** — blog writing
- **next-themes** — dark mode
- **next-mdx-remote** — MDX rendering
- **Lucide React** — icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
git clone https://github.com/zerozlw/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Features

- **6 pages**: Home, Projects, Writing, Playground, Resume, About
- **Dark mode** toggle
- **EN/ZH** language switch
- **MDX** blog with syntax highlighting
- **RSS** feed at `/feed.xml`
- **SEO** with sitemap and robots.txt
- **Responsive** design (mobile + desktop)
- **Subtle animations** (fade-in on scroll)

## Customization

### Content

Edit MDX files in `src/content/`:

- `src/content/projects/` — case study pages
- `src/content/writing/` — blog articles

### Translations

Edit `src/lib/i18n.ts` to modify EN/ZH text.

### Images

Add project images to `public/images/projects/`.

## Project Structure

```
src/
├── app/              # Pages (Next.js App Router)
├── components/       # React components
│   ├── layout/       # Navbar, Footer, Container
│   ├── home/         # Hero, FeaturedProjects
│   ├── projects/     # ProjectCard, CaseStudyLayout
│   ├── writing/      # ArticleCard, MDXContent
│   └── ui/           # ThemeToggle, LanguageToggle, etc.
├── content/          # MDX content (projects + articles)
├── lib/              # Utilities, i18n, data fetching
└── types/            # TypeScript types
```

## Deploy

Push to GitHub, then connect the repo to [Vercel](https://vercel.com) for automatic deployments.
