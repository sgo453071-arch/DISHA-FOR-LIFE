# DISHA For India — Website Features Documentation

> **Project**: DISHA For India Foundation and Educational Trust
> **Type**: Static multi-page website (HTML + CSS + Vanilla JS)
> **Pages**: 5 HTML pages + shared assets

---

## Page Index

| Page | File | Description |
|------|------|-------------|
| Landing / Home | `index.html` | Main entry point with all brand sections |
| Token Economy | `2.html` | DiSha Coin earning & redemption system |
| Refer & Earn | `3.html` | Referral rewards hub |
| Proof of Impact | `4.html` | Volunteer Wall of Fame & certificates |
| Active Programs | `5.html` | Open volunteer programs & registration form |

---

## Page 1 — Landing Page (index.html)

### Navbar
- Sticky navbar with scrolled shadow effect
- SVG Disha logo + brand name + tagline
- Dropdown menus: About Us, Events, Volunteer Hub (Token Economy, Refer & Earn, Proof of Impact, Active Programs, Testimonials)
- 'Create an Impact' CTA button
- Responsive hamburger menu with slide-in mobile drawer
- Mobile drawer includes contact info and social icons

### Hero Section
- Full-screen hero with animated floating particles (amber, coral, teal)
- Animated headline, subtitle, and tagline
- Five CTA action buttons linking to all key sections/pages
- Scroll indicator arrow

### Disha x TalentGro Promo Band
- 'Learn, Earn, Grow' overview of the coin ecosystem
- Buttons to Token Economy and Refer & Earn pages

### Floating Philosophy Cards
- Three animated bobbing cards (CSS keyframe animation):
  - Lifelong Empowerment
  - Active Volunteerism
  - Empowered Society

### Core Platform Modules (Ecosystem Docs)
- Full-width 4-card grid:
  - Token Economy — earn & redeem DSC coins
  - Refer & Earn — invite friends, earn milestone rewards
  - Proof of Impact — Wall of Fame & digital certificates
  - Active Programs — browse and apply to campaigns
- Each card links to the respective page

### Impact Stats Bar
- Animated counting stats:
  - 5,000+ Development
  - 200+ Events Organized
  - 50+ Partner Organizations
  - 15+ Years of Impact

### About Us Section
- Two-column layout: photo with badge + text content
- Four value cards: Vision, Mission, Passion, Core Value
- 'Explore Our Programs' CTA

### Programs & Initiatives
- 6-card hover grid:
  - Emotional Wellness & Preventive Healthcare
  - Ignite
  - Entrepreneurship
  - Financial Literacy
  - Clean & Green India
  - Love & Relationships

### Impact Banner / Video Section
- Cinematic banner with brand quote
- Play button opens a video modal with the PixVerse brand film
- Auto-pauses on close

### Video Modal
- HTML5 video player for PixVerse_V6_Image_Text_360P_Create_a_cinematic.mp4
- Dark overlay, close button, Escape key support

### Upcoming Events
- 3 event cards (Education Career Fair, Emotional Wellness Workshop, Financial Literacy Seminar)
- Each card: date box, category tag, location, time

### Testimonials Slider
- 5 auto-playing testimonial cards
- Prev/Next buttons + dot pagination
- Pauses on hover; keyboard accessible

### Photo Gallery
- 5-image grid with hover overlay
- Click opens full-screen image lightbox (Escape to close)

### Trusted Partners Bar
- Haryana Tourism, Lifestyle, Dainik Bhaskar, Raabta, Tagore Theater

### FAQ Accordion
- 5 expandable questions with smooth animation
- Single-open behaviour with aria-expanded

### Contact Form
- Fields: First Name, Last Name, Email, Phone, Interest, Message
- JS validation + success toast notification

### Footer
- Logo, quick links, programs links, contact info, social icons, copyright

### UI Utilities
- Toast notifications (bottom-right slide-up)
- Back to Top button (appears at 500px scroll)
- Scroll Reveal animations (fade/slide left, right, up)
- Smooth scroll for all anchor links

---

## Page 2 — Token Economy (2.html)
- DiSha Coin (DSC) and DiSha Premium (DSC-P) system explanation
- Volunteer action to coin earning table
- Coin redemption guide for TalentGro Global
- Tier/level progression system

---

## Page 3 — Refer & Earn (3.html)
- Referral link generator (simulated)
- +150 DSC for both referrer and friend on first verified activity
- Milestone: Community Builder (10 invites = +2,000 DSC + Catalyst tier)
- Referral progress tracker

---

## Page 4 — Proof of Impact (4.html)
- Wall of Fame with verified volunteer cards
- Featured volunteer: Shourya Garg (120 hrs, 8,400 DSC)
- Category filter buttons
- 'Verify Credentials' button generates a digital certificate overlay

---

## Page 5 — Active Programs (5.html)
- Browse open volunteer campaigns (Campus Ambassador, Wellness Drives, Green India)
- Role breakdown with DSC coin payouts
- Volunteer Registration Form (Full Name, Email, Phone, City, Organization, Skills, Role, Message)
- Submits to Google Apps Script (no-cors, text/plain JSON)
- Logs to Google Sheets + sends welcome email
- Toast feedback on success/error

---

## Design System

| Element | Value |
|---------|-------|
| Heading Font | Playfair Display |
| Body Font | Inter (300, 400, 500, 600) |
| Primary Accent | --amber (warm orange/gold) |
| Secondary Accent | --coral (warm red-orange) |
| Tertiary Accent | --teal (muted teal-green) |
| Background | --off (#f8f5f0 off-white) |
| Dark Text | --navy (charcoal navy) |
| Card Radius | 16px |
| Transitions | 0.3s ease |

---

## JavaScript Features (1.js)

| Feature | Description |
|---------|-------------|
| Scroll Reveal | IntersectionObserver fade/slide-in for .reveal elements |
| Navbar Scroll | Adds shadow after 50px scroll |
| Mobile Menu | Hamburger drawer with body scroll lock |
| Mobile Sub-menus | Accordion toggles in mobile drawer |
| Smooth Scroll | All anchor links scroll with 80px navbar offset |
| Counter Animation | Counts up stat numbers on viewport entry |
| Testimonials Slider | Auto-play + manual nav + dot indicators |
| FAQ Accordion | Single-open with aria-expanded |
| Photo Lightbox | Full-screen image with keyboard close |
| Video Modal | Brand film player, auto-stop on close |
| Toast Notifications | Timed slide-in alerts |
| Contact Form | Validation + confirmation toast |
| Back to Top | Smooth scroll button after 500px |
| Keyboard Access | Gallery and program cards keyboard-accessible |

---

## Backend Integration

| Service | Purpose |
|---------|---------|
| Google Apps Script | Volunteer form handler: Sheets + Email |
| Google Fonts | Playfair Display + Inter |
| Unsplash (CDN) | Gallery and About section images |

---

## Accessibility
- ARIA labels on all interactive elements
- Semantic HTML5 (nav, section, article, footer)
- aria-expanded on accordions and dropdowns
- aria-modal on all overlay dialogs
- Keyboard navigation for gallery, FAQ, slider, program cards
- Alt text on all images
- loading=lazy on all non-hero images
