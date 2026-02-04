# Ekaterina Aust - Interior Design

Portfolio website for interior designer Ekaterina Aust based in Hildesheim, Germany.

🌐 **Live:** [logica-interior.netlify.app](https://logica-interior.netlify.app)

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7)

---

## Features

- 🇩🇪 🇷🇺 **Bilingual** - German and Russian
- 📱 **Responsive** - Mobile-first design
- 📧 **Contact Form** - Netlify Forms integration
- ⚡ **Fast** - Next.js image optimization
- 🔍 **SEO Ready** - Meta tags, sitemap, structured data
- 📲 **PWA** - Installable on mobile devices

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
src/
├── app/[locale]/        # Pages (de/ru routes)
├── components/          # React components
└── i18n/               # Language config

messages/
├── de.json             # German text
└── ru.json             # Russian text

public/
├── images/             # All images
└── sitemap.xml         # SEO
```

---

## Content Management

### Edit Text

Update translations in `messages/de.json` and `messages/ru.json`:

```json
"about": {
    "title": "Your new title"
}
```

### Replace Images

1. Add image to `public/images/`
2. Use same filename to replace existing
3. Push to GitHub → auto-deploys

---

## Form Submissions

Contact form submissions are stored in Netlify:

1. Login to [Netlify Dashboard](https://app.netlify.com)
2. Go to **Forms** → **contact**
3. View/export submissions

---

## Deployment

Automatic deployment on push to `main`:

```bash
git add .
git commit -m "Update content"
git push origin main
```

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **i18n:** next-intl
- **Styling:** CSS Modules
- **Hosting:** Netlify
- **Forms:** Netlify Forms

---

## Development Docs

See [AGENTS.md](./AGENTS.md) for detailed development guidelines and style rules.

---

## License

Private project - All rights reserved.
