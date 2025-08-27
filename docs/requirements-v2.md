# URPS website v2 – requirements draft

Goal: Elevate the single-page site into a more professional, conversion-focused presence for Urban And Rural Protection Services (security and manpower).

## 1) Audience and outcomes

- Primary audience: Businesses, apartments, malls, hospitals, construction sites in UP needing security guards/manpower.
- Secondary: Candidates looking for guard/manpower jobs.
- Primary outcomes: Inquiries via call, WhatsApp, or contact form; trust and legitimacy.

## 2) Information architecture (proposed)

- Hero: clear value, PSARA trust, service coverage, primary CTAs (Call / WhatsApp / Get quote).
- Services: security services and manpower; list core offerings with short bullets and icons.
- Industries served: cards/logos (malls, hospitals, residential societies, events, construction, warehousing, schools).
- Credentials & trust: PSARA, training, verification process, SLA/response time, uniforms, supervision, night audits.
- Clients & testimonials: logos plus 2–4 short quotes (name, company, city).
- Portfolio/gallery: selected operational photos with captions.
- About: mission, vision, leadership.
- Contact: form + direct call/WhatsApp; head office address and a small map.
- Careers (optional): simple form to collect candidate details (name, phone, city, role).

## 3) Content/copy checklist

- Location coverage: Cities and districts served; primary: Lucknow and UP.
- Services list (security): unarmed guards, armed guards, gunman, event security, industrial/residential security, VIP/executive, supervisors.
- Services list (manpower): housekeeping, loaders/unloaders, site helpers, skilled/unskilled labour.
- Differentiators: PSARA-certified, verified staff, training, supervision, replacements, 24x7 support, TAT, experience, compliance.
- Contact details to display: 2 phone numbers, WhatsApp number, email, office address, service hours.
- Legal: company registration, GST (optional), PSARA license number(s), T&Cs/privacy (footer).

## 4) Design and UX

- Keep single-page structure; add a sticky CTA footer on mobile (Call / WhatsApp / Quote).
- Replace stock emojis with proper SVG icons (shield, headset, clock, map, WhatsApp, phone).
- Typography: Poppins (kept), consistent sizing, tightened spacing.
- Imagery: compress and convert hero and gallery to WebP; maintain alt text and lazy-loading.
- Accessibility: color contrast, focus states, semantic headings (one H1), labelled controls.

### 4.1 Responsive design (explicit)

- Breakpoints: Bootstrap 5 defaults (xs <576, sm ≥576, md ≥768, lg ≥992, xl ≥1200, xxl ≥1400).
- Mobile (xs–sm):
	- Sticky CTA bar at bottom with three buttons: Call, WhatsApp, Quote.
	- Hero stacks: text first, image second; CTAs wrap.
	- Services/Industries as 2-up grid; reduce icon size.
- Tablet (md): 2–3 columns for Services/Industries; hero text + image side-by-side.
- Desktop (lg+): 3–4 columns where applicable; balanced whitespace; larger hero.
- Navigation: collapsible menu (hamburger) below lg; sticky header; scroll-to with offset.

### 4.2 Section-by-section UI improvements

- Hero:
	- One H1 + concise subhead; trust badges: “PSARA-certified”, “Verified & trained guards”, “24x7 operations”.
	- Primary CTAs: Get a quote, Call, WhatsApp; high contrast; visible on all breakpoints.
	- Optional subtle background overlay on hero image for readability.
- Services:
	- Card grid with consistent icons and short bullets; 6–8 cards max.
	- Example bullets: Coverage (24x7/day/night), Supervision, Replacement within X hours.
- Industries served:
	- Icon tiles for Malls, Hospitals, Residential, Events, Construction, Warehousing, Schools, Offices.
- Credentials & trust:
	- PSARA license no(s), training process, verification (police/KYC), uniformed staff, night audits, reporting cadence.
	- Small checklist with shield/check icons.
- Clients & testimonials:
	- Logos grid (equal height); 2–4 short testimonials with name, org, city.
- Portfolio/gallery:
	- Lightbox gallery (optional) with captions; WebP prioritized.
- About:
	- Tighten copy; leadership cards with names/titles.
- Contact:
	- Form fields: Name, Phone (required), Email (optional), Message (required), Consent checkbox.
	- Backend: Formspree (fallback to mailto); success/fail toasts; WhatsApp deep link.
	- Optional small embedded Google Map.
- Careers (optional):
	- Simple application form (Name, Phone, City, Role, Experience years).

## 5) Performance + SEO

- Image optimization (WebP/AVIF + proper sizes), lazy-loading, width/height attributes.
- Defer non-critical scripts; minimize third-party.
- Metadata: title/description per section, OpenGraph/Twitter, JSON-LD (LocalBusiness).
- Sitemap.xml and robots.txt verification.

## 6) Tech approach

- Keep Bootstrap and current theme; use small site.css additions.
- Optional: move contact to Formspree/Netlify Forms (no backend required).
- Optional: add MicroModal for a quote form modal; keep simple.

### 6.1 UI technical improvements

- CSS:
	- Use site.css for custom layer; CSS variables for colors/spacing; consistent spacing scale (4/8/12/16px).
	- Prefer Bootstrap utilities and grid; avoid custom JS for layout.
- Icons:
	- Use Font Awesome already bundled or add a small SVG sprite for core icons (phone, WhatsApp, shield, clock, map).
- Images:
	- Convert key images to WebP with fallback; add width/height, srcset/sizes; lazy-load below-the-fold.
- JS:
	- Defer non-critical scripts; avoid duplicate libraries; keep carousel simple; consider removing jQuery-only plugins if unused.
- Accessibility:
	- One H1 per page; labelled controls; focus-visible styles; color contrast ≥ WCAG AA.

## 7) Deliverables for v2

- New sections: Industries Served, Credentials & Trust, Testimonials.
- Contact form hooked to Formspree (fallback mailto).
- Mobile sticky CTA bar.
- Compressed images (WebP) and srcset for hero/portfolio.
- Footer links: Privacy Policy, Terms (simple pages).

### 7.1 Acceptance criteria

- Layout is responsive at all Bootstrap breakpoints without overflow/clip.
- Lighthouse (mobile): Performance ≥ 85, Accessibility ≥ 90, Best Practices ≥ 90, SEO ≥ 90.
- Cumulative Layout Shift (CLS) ≤ 0.1 on mobile for hero/above-the-fold.
- All interactive targets ≥ 44x44px on mobile.
- Contact form submits successfully to Formspree (or configured backend) with validation and user feedback.

## 8) Open questions (please confirm)

1. List all cities/districts you want to display as service coverage.
2. Provide PSARA license number(s) and any other registrations you’d like shown.
3. Which services are core vs. optional (for prioritizing menu/cards)?
4. Any specific clients we can quote for testimonials? Provide 2–4 short quotes if possible.
5. Preferred WhatsApp number and primary phone to highlight.
6. Do you want a Careers section with a simple application form?
7. Is there a brand color preference beyond current palette? Provide a logo SVG if available.
8. Do you want a Google Map embed or just address text?

## 9) Timeline proposal

- Day 1: Finalize requirements (this doc), assets (logos/testimonials/license), and content.
- Day 2: Implement sections + sticky CTA + optimized images.
- Day 3: Hook contact form + polish accessibility + QA and deploy.

---

Reply with answers to the open questions and any edits to this plan. Once confirmed, I’ll implement v2 on a new branch and raise a PR.
