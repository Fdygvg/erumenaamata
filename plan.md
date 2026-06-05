
**Architecture:**
- **Pure frontend** - React/Vite, static content. No backend needed for v1.
- **Simple, fast, maintainable** - she doesn't need servers to manage

---

**Pages:**

1. **Home/Hero** - Strong opening with her value prop (the headline you provided)
2. **Services** - Detailed breakdown (Proofreading, Copyediting, Stylistic Editing, Copywriting)
3. **Pricing/Rates** - Clear, simple pricing table
4. **Books** - Showcase her published books with cover images, descriptions, and "Buy" buttons
   - Each book links to purchase page (Amazon, her publisher, etc.)
   - Book details: Title, description, genre, publication year
5. **About** - Her background, credentials, why hire her
6. **Contact** - Email, phone, contact form (redirects to her email)
7. **Maybe: Testimonials/Portfolio** - If she has client work to showcase

---

**Color Scheme - Professional & Warm:**
- **Primary**: Deep navy or charcoal (`#1a1a2e` or `#2c3e50`) - authoritative, professional
- **Accent**: Warm gold/amber (`#d4af37` or `#c89d5c`) - elegant, inviting, literary
- **Background**: Off-white/cream (`#f5f3f0`) - warm, easy on eyes (important for older visitors)
- **Text**: Dark charcoal on cream - high contrast, readable

**Why this palette?** Feels literary, professional, trustworthy. Gold suggests quality editing work.

---

**Typography:**
- **Headings**: Serif font like `Georgia`, `Garamond`, or `Playfair Display` - classic, editorial
- **Body**: Clean sans-serif like `Inter`, `Open Sans`, or `Lato` - readable, modern
- **Mix**: Serif headings + sans-serif body = professional + accessible

---

**Design Approach:**
- **Clean, minimal** - let her words shine
- **Readable** - good spacing, large fonts (accessibility for older users)
- **Mobile-first** - works on phones/tablets
- **Fast** - no animations, just solid content
- **CTA buttons** - prominent email/phone call-to-action throughout

---

**Structure I'd build:**
```
src/
├── components/
│   ├── Header.jsx (nav)
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Pricing.jsx
│   ├── Books.jsx (NEW - showcase books with buy links)
│   ├── About.jsx
│   ├── Testimonials.jsx (optional)
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── content.js (all her text, services, pricing, books data)
├── App.jsx
└── App.css
```

All content lives in `content.js` so updating is just editing that one file.

---


---

**Books Section Details:**
- **Display**: Grid layout with book covers, titles, descriptions
- **Per book**: 
  - Cover image (book thumbnail)
  - Title
  - Genre/category
  - Short description
  - Publication year
  - "Buy Now" button → links to purchase page (Amazon, Goodreads, personal store, etc.)
- **Data structure**: Array of books in `content.js` with book details and purchase URLs

**Example book object:**
```javascript
{
  id: 1,
  title: "Book Title",
  cover: "/path/to/cover.jpg",
  genre: "Fiction",
  year: 2023,
  description: "Short description of the book...",
  purchaseUrl: "https://amazon.com/...", // or Goodreads, Apple Books, etc.
}
```

---

---

**Additional Requirements:**

- **Mobile Responsiveness**: Full mobile-first design, responsive breakpoints (mobile, tablet, desktop)
- **Performance**: 
  - Image optimization for book covers (WebP format, fallbacks)
  - Lazy loading for book cover images
  - Optimized bundle size
- **Hosting**: Deploy to Vercel
- **Book Purchase Links**: Placeholder URLs for now (`#` or generic "Coming Soon"), easily swappable when she decides where to sell
- **Sitemap & 404**: Include XML sitemap for SEO, custom 404 page

---

**Book Setup:**
- 3-4 books with front and back cover images
- Purchase links as placeholders until she decides on platform
- Grid display with lazy-loaded cover images

---

**Ready to build.**
