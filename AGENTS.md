# AGENTS.md - Development Guidelines

## Overview

This is the development guide for **Ekaterina Aust - Interior Design** website.

**Stack:** Next.js 16 + TypeScript + next-intl + CSS Modules + Netlify

---

## 🔴 Critical Rules

### Never Do
- **Never rebase or force push** to `main` branch
- **Never delete git history** - all changes are recoverable if history exists
- **Never modify `public/__forms.html`** without updating `Contact.tsx` to match

### Always Do
- **Always keep git history clean** - meaningful commit messages
- **Always test locally** before pushing (`npm run dev`)
- **Always update both language files** (`de.json` + `ru.json`)

---

## 📐 Layout Design Rules

### Section Container Pattern

Every section must follow this structure:

```css
.section {
    padding: var(--spacing-4xl) 0;
}

.sectionInner {
    width: var(--content-width);      /* 80vw */
    max-width: var(--max-width);       /* 1200px */
    margin: 0 auto;
}
```

### Content Width Standards

| Element | Width | Max Width |
|---------|-------|-----------|
| Section container | 80vw | 1200px |
| Text content | 100% of container | - |
| Image galleries | 60-80% of container | - |
| Forms | 100% of container | - |

### Section Dividers

- **Always add `<Divider />` between sections** on homepage
- **Exception:** No divider before Footer/Contact section
- **Subpages:** Add divider between major content blocks

```tsx
// Homepage pattern
<Hero />
<Divider />
<About />
<Divider />
<Projects />
<Divider />
<Services />
<Contact />  {/* No divider before contact/footer */}
```

---

## 🎨 Typography Rules

### Font Usage

| Element | Font | Variable |
|---------|------|----------|
| Headings, titles, labels | Montserrat | `var(--font-heading)` |
| Body text, paragraphs | Tahoma | `var(--font-body)` |

### Font Sizes

```css
--font-size-xs: 0.75rem;    /* Labels, captions */
--font-size-sm: 0.875rem;   /* Secondary text */
--font-size-base: 1rem;     /* Body text */
--font-size-lg: 1.125rem;   /* Emphasis */
--font-size-xl: 1.25rem;    /* Subheadings */
--font-size-2xl: 1.5rem;    /* Section titles */
--font-size-3xl: 2rem;      /* Hero text */
```

### Weight Rules

- Headings: `font-weight: 500` (medium)
- Body: `font-weight: 400` (regular)
- Labels: `font-weight: 500` (medium)

---

## 🖼️ Image Rules

### Next.js Image Component

Always use `next/image`:

```tsx
import Image from 'next/image';

<Image
    src="/images/example.jpg"
    alt="Descriptive SEO alt text"
    width={800}
    height={600}
    priority          // Only for above-fold images
    fetchPriority="high"  // Only for LCP image
/>
```

### Image Placement Patterns

**Hero/Header images:**
- Use `priority` and `fetchPriority="high"`
- Fixed dimensions

**Gallery images with `fill`:**
```tsx
<div style={{ position: 'relative', aspectRatio: '16/9' }}>
    <Image
        src="/images/gallery.jpg"
        alt="Description"
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className={styles.image}
    />
</div>
```

**Background style:**
- `object-fit: cover` for filling container
- `object-fit: contain` for showing entire image (3D renders)

---

## 🌐 Internationalization Rules

### Translation Structure

Both `messages/de.json` and `messages/ru.json` must have identical keys.

```json
{
    "sectionName": {
        "title": "Section Title",
        "description": "Description text",
        "items": {
            "item1": "Item 1 text"
        }
    }
}
```

### Using Translations

```tsx
import { useTranslations } from 'next-intl';

function Component() {
    const t = useTranslations('sectionName');
    return <h2>{t('title')}</h2>;
}
```

### Adding New Translatable Content

1. Add key to `messages/de.json`
2. Add same key to `messages/ru.json`
3. Use `t('keyName')` in component

---

## 🧩 Component Creation Rules

### New Section Component

1. Create folder: `src/components/SectionName/`
2. Create files:
   - `SectionName.tsx`
   - `SectionName.module.css`

### Component Template

```tsx
'use client';

import { useTranslations } from 'next-intl';
import styles from './SectionName.module.css';

export default function SectionName() {
    const t = useTranslations('sectionName');

    return (
        <section id="section-name" className={styles.section}>
            <div className={styles.sectionInner}>
                <h2 className={styles.title}>{t('title')}</h2>
                {/* Content */}
            </div>
        </section>
    );
}
```

### CSS Template

```css
.section {
    padding: var(--spacing-4xl) 0;
}

.sectionInner {
    width: var(--content-width);
    max-width: var(--max-width);
    margin: 0 auto;
}

.title {
    font-family: var(--font-heading);
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-medium);
    margin-bottom: var(--spacing-xl);
}
```

---

## 📄 Adding New Pages

### Subpage Structure

Create in: `src/app/[locale]/page-slug/page.tsx`

```tsx
import { setRequestLocale } from 'next-intl/server';
import ProjectHero from '@/components/ProjectHero/ProjectHero';
import Divider from '@/components/Divider/Divider';

export default async function PageName({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <>
            <ProjectHero
                title="Page Title"
                description="Description"
                mainImage="/images/hero-image.jpg"
                imageAlt="SEO alt text for image"
            />
            <Divider />
            {/* More content */}
        </>
    );
}
```

### After Adding Page

1. Update `public/sitemap.xml` with new URLs
2. Add navigation link if needed
3. Test both language versions

---

## 📧 Netlify Forms

### Form Detection File

`public/__forms.html` must contain all form fields for Netlify detection:

```html
<form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
    <input type="hidden" name="form-name" value="contact" />
    <input type="text" name="firstName" />
    <input type="text" name="lastName" />
    <input type="email" name="email" />
    <input type="tel" name="phone" />
    <textarea name="message"></textarea>
    <input name="bot-field" />
</form>
```

### Adding New Form Field

1. Add field to `public/__forms.html`
2. Add field to `Contact.tsx` state and form
3. Add translation key to both language files
4. Deploy and test

---

## 🎯 SEO Checklist

When adding new content:

- [ ] Add descriptive `alt` text to all images
- [ ] Include keywords: Interior Design, Hildesheim, Ekaterina Aust
- [ ] Update `sitemap.xml` with new pages
- [ ] Add page to both language versions
- [ ] Test canonical URLs work correctly

---

## 📁 File Organization

```
public/
├── images/           # All images (JPG, WebP)
├── favicon_io/       # Favicon assets
├── __forms.html      # Netlify form detection
├── manifest.json     # PWA config
├── robots.txt        # SEO
└── sitemap.xml       # SEO

messages/
├── de.json           # German translations
└── ru.json           # Russian translations

src/
├── app/[locale]/     # Pages
├── components/       # Reusable components
└── i18n/            # Internationalization config
```

---

## 🚀 Deployment

Push to `main` → Netlify auto-deploys

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

Check status: Netlify Dashboard → Deploys
