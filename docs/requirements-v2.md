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

## 5) Performance + SEO

- Image optimization (WebP/AVIF + proper sizes), lazy-loading, width/height attributes.
- Defer non-critical scripts; minimize third-party.
- Metadata: title/description per section, OpenGraph/Twitter, JSON-LD (LocalBusiness).
- Sitemap.xml and robots.txt verification.

## 6) Tech approach

- Keep Bootstrap and current theme; use small site.css additions.
- Optional: move contact to Formspree/Netlify Forms (no backend required).
- Optional: add MicroModal for a quote form modal; keep simple.

## 7) Deliverables for v2

- New sections: Industries Served, Credentials & Trust, Testimonials.
- Contact form hooked to Formspree (fallback mailto).
- Mobile sticky CTA bar.
- Compressed images (WebP) and srcset for hero/portfolio.
- Footer links: Privacy Policy, Terms (simple pages).

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
