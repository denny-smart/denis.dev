# Site Layout And Components

This document describes how the portfolio site is structured today, the order of sections on the homepage, and the main reusable components that shape the experience.

## App Structure

The site uses the Next.js App Router.

- `src/app/layout.tsx`
  Sets global fonts, metadata, global CSS, and scroll restoration behavior.
- `src/app/page.tsx`
  Composes the homepage by stacking the major sections in order.
- `src/app/globals.css`
  Defines the theme tokens, marquee animation, and base scrollbar styling.
- `src/app/actions.ts`
  Contains the server action used by the contact form to send Telegram messages.

## Homepage Layout Order

The homepage is assembled in `src/app/page.tsx` in this order:

1. `GridBackground`
2. `Navbar`
3. `Hero`
4. `Skills`
5. `Stats`
6. `Projects`
7. `About`
8. `Expertise`
9. `ContactTerminal`
10. `Footer`

## Section Breakdown

### 1. Grid Background

File: `src/components/ui/grid-background.tsx`

Purpose:
- Renders the fixed full-screen grid behind the entire page.
- Adds a radial fade and vignette so the layout keeps its dark cyber-style atmosphere.

### 2. Navbar

File: `src/components/navbar.tsx`

Purpose:
- Stays fixed at the top of the page.
- Shows the site brand, navigation links, and a `Let's Talk` button.
- Opens the contact modal with the reusable `Modal` and `ContactForm` components.

Notes:
- The nav links currently point to `#work`, `#about`, `#notes`, and `#contact`.
- `#about` and `#contact` exist.
- `#work` and `#notes` do not currently map to section IDs, so those links may need updating later.

### 3. Hero

File: `src/components/sections/hero.tsx`

Purpose:
- Acts as the main landing section.
- Introduces the portfolio owner and value proposition.
- Includes:
  - a badge
  - a large headline
  - supporting copy
  - a GitHub CTA
  - a contact CTA
  - two floating decorative status cards

Shared components used:
- `Button`
- `Card`
- `Modal`
- `ContactForm`

### 4. Skills Ribbon

File: `src/components/sections/skills.tsx`

Purpose:
- Displays the large scrolling ribbon of keywords and technologies.
- Uses two marquee tracks to create a seamless continuous motion effect.

### 5. Stats

File: `src/components/sections/stats.tsx`

Purpose:
- Highlights key numbers below the skills ribbon.
- Uses animated reveal cards for metrics such as:
  - systems secured
  - uptime maintained
  - vulnerabilities patched
  - automation modules

### 6. Projects

File: `src/components/sections/projects.tsx`

Purpose:
- Showcases featured work with large image-based project cards.
- Each card includes:
  - category label
  - title
  - description
  - external CTA link

Current project entries:
- `MaliBot` using `/MaliBot.JPG` and linking to `https://malibot.vercel.app/`
- `GitHub Portfolio` using `/github.JPG` and linking to `https://github.com/denny-smart`

Behavior:
- Uses Framer Motion scroll tracking for a subtle parallax effect on project images.

### 7. About

File: `src/components/sections/about.tsx`

Purpose:
- Gives a short personal summary and a set of principles.
- Uses a two-column card grid for quick-read value statements.

### 8. Core Expertise

File: `src/components/sections/expertise.tsx`

Purpose:
- Presents the main service and knowledge areas as feature cards.
- Each expertise card includes:
  - icon
  - title
  - description
  - tags

Current expertise topics:
- Secure Web Systems
- Automated Trading & Financial Systems
- Backend Architecture
- Security Awareness

### 9. Contact Terminal

File: `src/components/sections/contact.tsx`

Purpose:
- Creates an interactive contact section with two modes:
  - terminal mode
  - secure form mode

Terminal mode:
- Simulates a command-line interface.
- Supports commands like `help`, `email`, `socials`, `status`, and `clear`.

Form mode:
- Renders the reusable `ContactForm`.

### 10. Footer

File: `src/components/footer.tsx`

Purpose:
- Displays a small mono-style signature footer with the current year.

## Reusable UI Components

### Card

File: `src/components/ui/card.tsx`

Purpose:
- Shared glassy card wrapper used across sections.
- Adds hover lift, border styling, gradient hover glow, and optional padding control.

### Button

File: `src/components/ui/button.tsx`

Purpose:
- Shared animated button component.
- Supports `primary`, `secondary`, `outline`, and `ghost` variants.
- Supports `default`, `sm`, `lg`, and `icon` sizes.

### Modal

File: `src/components/ui/modal.tsx`

Purpose:
- Full-screen modal shell used for contact overlays.
- Locks body scroll while open.
- Handles backdrop click and animated entrance/exit.

### ContactForm

File: `src/components/contact-form.tsx`

Purpose:
- Collects email and message input.
- Sends data through the server action in `src/app/actions.ts`.
- Shows success and error states after submission.

## Interaction And Motion

The site uses `framer-motion` throughout for:

- section entrance animations
- hover lift effects
- button feedback
- project image parallax
- modal transitions
- terminal cursor animation

## Visual Style Summary

The current UI direction is:

- dark background with grid texture
- emerald accent color
- strong white headings
- glassmorphism-style cards
- mono details for technical flavor
- large, cinematic section spacing

## Public Assets

Current custom images in `public/` used by the homepage:

- `MaliBot.JPG`
- `github.JPG`

## Quick Mental Model

You can think of the page in five layers:

1. Global shell: `layout.tsx`, fonts, metadata, CSS
2. Background layer: `GridBackground`
3. Navigation layer: `Navbar`
4. Content sections: hero, skills, stats, projects, about, expertise, contact
5. Reusable interaction layer: card, button, modal, contact form
