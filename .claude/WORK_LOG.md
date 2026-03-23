# Work Log

## 2026-03-14
**Focus:** Header nav visibility over dark hero

**Completed:**
- Fixed all header elements (nav links, CTA button, mobile hamburger) to use scroll-aware inverted colors over dark hero
- Extended existing `inverted` prop pattern from Logo/ThemeToggle to MobileNav
- Nav links: `text-background/70 hover:text-background` over hero, `text-foreground/70 hover:text-foreground` after scroll
- CTA button: `bg-background text-foreground` over hero, default primary after scroll
- Hamburger: `text-background` with subtle hover over hero, default after scroll
- Saved feature context (`docs/features/home-page.md`)

**Decisions:**
- Scrolled nav links use lighter-then-darker pattern per user preference (`/70` opacity → full)
- CTA button swaps entirely to light variant over hero rather than adjusting opacity

**Issues:** None — build and lint pass
