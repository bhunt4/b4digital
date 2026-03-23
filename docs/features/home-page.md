# Feature: home-page

## Goal
Build the B4Digital marketing home page — a single-page SEO services site with all sections composed on `app/page.tsx`, warm Claude/Anthropic color scheme, dark mode support, and full header visibility over the dark hero.

## Scope
**Included:**
- All home page sections (Hero, Services, Process, Benefits, CaseStudies, FAQ, CTA, Contact)
- Header with sticky transparent-to-solid scroll behavior
- Footer, mobile nav (sheet drawer)
- Warm color scheme (oklch) for light and dark modes
- Inverted color handling for header elements over dark hero
- JSON-LD structured data
- Scroll-triggered fade-in animations
- Contact form (React Hook Form + Zod)

**Out of scope:**
- Blog pages (`app/blog/`)
- Individual service pages (`app/services/[slug]/`)
- Resend email integration (API route exists but not wired to Resend)
- Google Tag Manager integration
- CMS integration
- Hero image (not yet added)

## Current Status
All home page sections are implemented and rendering. The warm Claude/Anthropic color scheme is applied in `globals.css` using oklch values for both light and dark modes. Header visibility over the dark hero (`bg-foreground`) is fully fixed — Logo, ThemeToggle, nav links, CTA button, and mobile hamburger all use `scrolled`-aware inverted color classes. Build passes. Deployed to Vercel via GitHub `main` branch.

## Key Decisions
- **Color format**: oklch throughout for perceptual uniformity and warm tinting
- **Header scroll threshold**: 50px (`window.scrollY > 50`) triggers transparent → solid transition
- **Inverted pattern**: Components accept `inverted` boolean prop; header passes `!scrolled`
- **Nav link colors**: `text-foreground/70 hover:text-foreground` when scrolled (lighter then darker), `text-background/70 hover:text-background` when over hero
- **CTA over hero**: Swaps to `bg-background text-foreground` (light button on dark bg) instead of default primary
- **System fonts**: `ui-sans-serif` stack — zero font loading overhead
- **shadcn/ui**: Local components, not package imports — tree-shaken naturally

## Relevant Files
- `app/page.tsx` — Home page composition (all sections)
- `app/globals.css` — CSS variables (warm oklch light/dark), animations
- `app/layout.tsx` — Root layout, fonts, theme provider, metadata
- `components/layout/header.tsx` — Sticky header with scroll-aware inverted colors
- `components/layout/mobile-nav.tsx` — Mobile sheet nav with `inverted` prop on hamburger
- `components/layout/footer.tsx` — Footer with dark background
- `components/shared/logo.tsx` — Logo with `inverted` prop
- `components/shared/theme-toggle.tsx` — Theme toggle with `inverted` prop
- `components/shared/section-wrapper.tsx` — Consistent section padding + scroll animation
- `components/sections/hero.tsx` — Dark bg hero, split layout (headline | form)
- `components/sections/services.tsx` — 4-card service grid
- `components/sections/process.tsx` — 4-step timeline
- `components/sections/benefits.tsx` — Key differentiators
- `components/sections/case-studies.tsx` — Results/metrics cards
- `components/sections/faq.tsx` — Accordion FAQ
- `components/sections/cta.tsx` — Full-width CTA banner
- `components/sections/contact.tsx` — Contact form + details
- `components/forms/contact-form.tsx` — Reusable contact form (React Hook Form + Zod)
- `components/forms/contact-schema.ts` — Zod validation schema
- `components/shared/json-ld.tsx` — Organization + FAQPage structured data
- `lib/constants.ts` — Nav links, section content, site metadata

## Implementation Notes
- Hero uses `bg-foreground text-background` (dark bg, light text) — this is why header elements need inversion
- Header transition: `bg-transparent` → `bg-background/95 shadow-sm backdrop-blur` at 50px scroll
- All color tokens flow through CSS custom properties — no hardcoded colors in components
- `SectionWrapper` uses Intersection Observer for `.animate-on-scroll` → `.is-visible` fade-in
- Contact form has honeypot field for bot prevention
- API route at `app/api/contact/route.ts` has server-side Zod validation + rate limiting stub

## Outstanding Issues
- Hero image not yet added (user considering ~960x720px for split layout)
- Resend email integration not connected (API route exists but needs `RESEND_API_KEY`)
- Google Tag Manager not integrated
- No E2E tests (Playwright)
- Lighthouse audit not performed
- Accessibility audit not performed
- WCAG contrast ratios not formally validated

## Next Steps
1. Add hero image/illustration to the split hero layout
2. Wire Resend email sending in `/api/contact/route.ts`
3. Integrate Google Tag Manager via `@next/third-parties`
4. Run Lighthouse audit and optimize for 95+ scores
5. Run accessibility audit (contrast, focus states, keyboard nav)
6. Add Playwright E2E tests (form submission, navigation, responsive)
7. Generate `robots.ts` and `sitemap.ts` if not already present

## Validation Checklist
- [x] `npm run build` passes
- [x] All sections render on home page
- [x] Dark mode toggle works
- [x] Header elements visible over dark hero before scroll
- [x] Header elements visible on solid background after scroll
- [x] Mobile hamburger visible in both states
- [ ] Contact form submits and email received
- [ ] Lighthouse Performance > 95
- [ ] Lighthouse SEO > 95
- [ ] Lighthouse Accessibility > 95
- [ ] No horizontal scroll on any viewport
- [ ] Playwright E2E tests pass

## Resume Prompt
Resume building the B4Digital marketing home page. All sections are implemented and rendering. Warm Claude/Anthropic oklch color scheme is applied (light + dark). Header visibility over the dark hero is fixed — Logo, ThemeToggle, nav links, CTA, and hamburger all use scrolled-aware inverted colors. Key files: `app/page.tsx` (composition), `app/globals.css` (colors), `components/layout/header.tsx` (scroll behavior), `components/layout/mobile-nav.tsx`. Next: add hero image, wire Resend email, integrate GTM, run Lighthouse/a11y audits, add E2E tests. Build passes, deployed on Vercel.

## Historical Notes
- 2026-03-14: Initial implementation of all home page sections and layout
- 2026-03-14: Applied warm Claude/Anthropic oklch color scheme (light + dark modes)
- 2026-03-14: Fixed header nav visibility — added inverted prop to Logo, ThemeToggle, MobileNav; added scroll-aware classes to nav links and CTA button
- 2026-03-14: Updated scrolled nav link colors to lighter-then-darker pattern (`text-foreground/70 hover:text-foreground`)
