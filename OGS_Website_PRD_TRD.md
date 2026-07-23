# Oil and Gas Solutions (Pvt.) Ltd
## Website Product Requirements Document (PRD) & Technical Requirements Document (TRD)

**Version:** 1.0  
**Date:** June 2026  
**Author:** Product & Engineering Team  
**Status:** Draft / Ready for Development  
**Domain:** oilandgassolutions.com  
**Contact:** info@oilandgassolutions.com

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [PRD — Product Requirements](#2-prd--product-requirements)
   - 2.1 Scope & Objectives
   - 2.2 Target Audience
   - 2.3 Information Architecture
   - 2.4 Page Specifications
   - 2.5 Functional Requirements
   - 2.6 Non-Functional Requirements
   - 2.7 Content Requirements
   - 2.8 Design & UX Requirements
   - 2.9 SEO & Marketing Requirements
3. [TRD — Technical Requirements](#3-trd--technical-requirements)
   - 3.1 Technology Stack
   - 3.2 System Architecture
   - 3.3 Data Models & Content Schema
   - 3.4 API & Integration Specifications
   - 3.5 Component Architecture
   - 3.6 State Management
   - 3.7 Performance Budget
   - 3.8 Security Requirements
   - 3.9 Deployment & DevOps
   - 3.10 Testing Strategy
4. [Appendix](#4-appendix)
   - A. Complete Content Inventory
   - B. Color Tokens & Design System
   - C. Route Map

---

## 1. Executive Summary

Oil and Gas Solutions (Pvt.) Ltd (OGS) requires a modern, professional corporate website to serve as the primary digital presence for its eight business divisions. The website must communicate credibility to enterprise clients (OMV, CNPC, BGP, Dewan Petroleum, etc.), attract job candidates for HR placement, generate training enrollments, and drive procurement inquiries.

The site will be a **static-first, SEO-optimized, responsive web application** built with Next.js 15, React, TypeScript, and Tailwind CSS. All content is stored in version-controlled TypeScript/data files (no external CMS dependency for v1).

---

## 2. PRD — Product Requirements

### 2.1 Scope & Objectives

#### In Scope
- Public-facing marketing website with 14+ pages
- Eight divisional service pages with detailed content
- Contact/quote inquiry form with validation
- Client showcase and social proof
- Training course catalog (50+ courses)
- HR manpower category listings (40+ roles)
- Procurement product catalog (100+ items)
- Safety equipment catalog (100+ items)
- Responsive design (mobile, tablet, desktop)
- SEO optimization (metadata, sitemap, structured data)
- Performance optimization (Lighthouse 90+)

#### Out of Scope (Future Phases)
- Client portal / authentication
- E-commerce checkout / payment processing
- Real-time chat / AI chatbot
- Multi-language i18n (Urdu/Arabic)
- CMS admin dashboard
- Job application portal with file upload
- Course booking calendar with payment
- Dynamic blog / news engine

### 2.2 Target Audience

| Persona | Role | Needs | Primary Pages |
|---------|------|-------|---------------|
| **Procurement Manager** | Oil & Gas Operator | Vendor qualification, product catalogs, contact | Procurement, Safety, Logistics, Contact |
| **Drilling Superintendent** | Drilling Contractor | Rig contracting, crew supply, training | Rig Contracting, HR, Training, Drilling Ops |
| **HSE Manager** | E&P Company | Safety equipment, training certifications, audits | Safety, Training, Consultancy |
| **Job Seeker** | Oilfield Worker | Placement opportunities, application process | HR Services, Training, Contact |
| **Training Coordinator** | Corporate HR | Bulk training, certification courses | Training Services, Contact |
| **Logistics Coordinator** | Project Manager | Heavy haul, freight, fleet availability | Logistics, Contact |
| **Investor / Consultant** | Advisory Firm | Market entry, rig strategy, manpower planning | Consultancy, About, Contact |

### 2.3 Information Architecture

```
oilandgassolutions.com
├── /                          [Homepage]
├── /about                     [About Us]
├── /services                  [Services Index]
│   ├── /services/hr-services
│   ├── /services/rig-contracting
│   ├── /services/drilling-operations
│   ├── /services/training-services
│   ├── /services/procurement
│   ├── /services/logistics
│   ├── /services/safety
│   ├── /services/catering
│   └── /services/consultancy
├── /clients                   [Our Clients]
└── /contact                   [Contact / Inquiry]
```

**Navigation Structure:**
- Primary Nav: Home | About | Services (Dropdown) | Clients | Contact
- Services Dropdown: All 8 divisions + Consultancy
- Mobile: Hamburger Sheet with full navigation + CTA
- Footer: 4-column layout with links, contact info, social placeholders

### 2.4 Page Specifications

#### 2.4.1 Homepage (`/`)
**Purpose:** First impression, conversion hub, service discovery  
**Sections (top to bottom):**

| # | Section | Content | Interaction |
|---|---------|---------|-------------|
| 1 | Hero | Headline "Complete Oil & Gas Solutions", subheadline, 2 CTAs | Scroll-triggered text reveal |
| 2 | Services Grid | 8 division cards + 1 consultancy banner | Hover scale, click to service page |
| 3 | Why OGS | 4 pillars: Experience, Quality, Affordability, Safety | Fade-in on scroll |
| 4 | Stats | 4 animated counters (Years, Projects, Courses, Placements) | Count-up on viewport entry |
| 5 | Clients | Horizontal marquee of client logos | Infinite scroll marquee |
| 6 | CTA | "Ready to power your next project?" + Get Quote button | Static, high contrast |

**Key Metrics:** Load time < 2s, Time to Interactive < 3s

#### 2.4.2 About Page (`/about`)
**Purpose:** Build trust, communicate values  
**Sections:**
- Hero with breadcrumb
- Introduction (2-column: text + image placeholder)
- Vision & Mission (2 cards with icons)
- Aim (full-width accent card)
- Clients grid

#### 2.4.3 Services Index (`/services`)
**Purpose:** Service navigation hub  
**Sections:**
- Hero
- 2×4 grid of division cards
- Consultancy banner (full-width)
- CTA to contact

#### 2.4.4 Service Detail Pages (`/services/[slug]`)
**Template:** Dynamic route, shared layout, content-driven  
**Layout:**
- Hero (service name + short description)
- Sticky sidebar: Other services navigation
- Main content: Sections vary per service (see Appendix A)
- Bottom CTA: "Need [Service]? Contact our team"

**Service-Specific Content:**

| Slug | Key Sections |
|------|-------------|
| hr-services | Manpower Categories (Accordion), Recruitment Process, Global Reach |
| rig-contracting | Day Rate Services, Crew Management, Technical Support, Advisory |
| drilling-operations | Well Services, Operations Management, Investor Advisory, Staffing |
| training-services | Featured Certifications (6), QHSE Course Catalog (50+), Career Paths |
| procurement | Equipment Categories, Fuel & Lubricants, Drilling Compounds, PPE |
| logistics | Capabilities, Heavy Fleet Grid, Light Vehicles, Project Transport |
| safety | Fire Extinguishers, Fire Systems, PPE, Gas Detection, Site Safety, Fall Protection |
| catering | Accommodation, Personnel Supply, Mobile Units, Integration Note |
| consultancy | 6 advisory areas, premium dark styling |

#### 2.4.5 Clients Page (`/clients`)
**Purpose:** Social proof, credibility  
**Content:** 13 client cards with name, location tag, industry tag  
**Clients:** CNPC/CCDC, BGP, Dewan Drilling, Dewan Petroleum, Abraj Energy (Oman), OMV, Al Burgan, Kuwait Drilling, Pakistan Oilfields, China National Logging, China State Construction, UNISYS/Pak Sino Unisys, Islamabad Police HQ

#### 2.4.6 Contact Page (`/contact`)
**Purpose:** Lead generation, inquiries  
**Layout:** 2-column (form left, info right)  
**Form Fields:**
- Full Name (required, string, 2-100 chars)
- Email (required, valid email format)
- Phone (optional, string)
- Division of Interest (dropdown: General, HR Services, Rig Contracting, Drilling Operations, Training Services, Procurement, Logistics, Safety, Catering, Consultancy)
- Message (textarea, required, 10-2000 chars)
- Submit button

**Validation:** Real-time with Zod schema  
**Success State:** Toast notification + form reset  
**Contact Info:** Email (info@oilandgassolutions.com), Website, Office hours placeholder, Map placeholder

### 2.5 Functional Requirements

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| FR-01 | All navigation links must work and route correctly | P0 | 404 tested, no broken links |
| FR-02 | Contact form must validate all fields before submission | P0 | Zod schema enforced, error messages displayed |
| FR-03 | Service pages must render correct content based on slug | P0 | All 9 slugs tested, content matches spec |
| FR-04 | Mobile menu must expand/collapse smoothly | P0 | Sheet component, accessible, focus trap |
| FR-05 | Stats must animate on viewport entry | P1 | IntersectionObserver or Framer Motion, triggers once |
| FR-06 | Client marquee must scroll infinitely | P1 | CSS animation or Framer Motion, no layout shift |
| FR-07 | Scroll reveal animations on all sections | P1 | Fade-in-up, staggered children, reduced-motion support |
| FR-08 | SEO metadata must be unique per page | P0 | Title, description, keywords, OG tags present |
| FR-09 | Sitemap and robots.txt must be generated | P0 | /sitemap.xml and /robots.txt accessible |
| FR-10 | Breadcrumb navigation on sub-pages | P2 | Home > Parent > Current Page |
| FR-11 | Sticky sidebar on service detail pages | P2 | Sticky on desktop, hidden on mobile |
| FR-12 | Form success toast notification | P2 | Sonner or custom toast, auto-dismiss 5s |

### 2.6 Non-Functional Requirements

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-01 | Performance (Lighthouse Performance) | ≥ 90 |
| NFR-02 | Accessibility (Lighthouse Accessibility) | ≥ 95 |
| NFR-03 | Best Practices (Lighthouse) | ≥ 95 |
| NFR-04 | SEO (Lighthouse) | ≥ 95 |
| NFR-05 | First Contentful Paint (FCP) | < 1.5s |
| NFR-06 | Largest Contentful Paint (LCP) | < 2.5s |
| NFR-07 | Time to Interactive (TTI) | < 3.5s |
| NFR-08 | Cumulative Layout Shift (CLS) | < 0.1 |
| NFR-09 | Mobile responsiveness | Tested on 320px–1440px |
| NFR-10 | Browser support | Chrome, Safari, Firefox, Edge (last 2 versions) |
| NFR-11 | Color contrast | WCAG AA compliance |
| NFR-12 | Keyboard navigation | All interactive elements accessible |
| NFR-13 | No external runtime dependencies | No CMS API calls at runtime |

### 2.7 Content Requirements

All content is sourced from the OGS Company Profile 2021 PDF. The content inventory is maintained in `/data/` as TypeScript/JSON files.

**Content Sources:**
- Company introduction, vision, mission, aim (Page 2)
- Services overview (Page 3)
- Rig contracting details (Page 4)
- Training courses and certifications (Pages 5-8)
- HR categories (Pages 9-10)
- Procurement products (Pages 11-15)
- Safety equipment (Pages 16-18)
- Logistics (Pages 19-20)
- Client list (Page 21)

**Content Gaps (to be provided by client):**
- High-resolution project/field photos
- Team/staff photos
- Office address and map coordinates
- Course schedules and pricing
- Catering menu samples
- Logistics fleet photos
- Video testimonials

### 2.8 Design & UX Requirements

#### Color System

| Token | Hex | Usage |
|-------|-----|-------|
| Primary Red | `#C41E3A` | CTAs, accents, active states, highlights |
| Navy | `#1B2A4A` | Headings, hero backgrounds, footer, dark sections |
| Accent Yellow | `#FFD700` | Icons, badges, highlights on dark backgrounds |
| Surface | `#F8FAFC` | Section backgrounds, cards |
| Text Primary | `#0F172A` | Body text, headings on light bg |
| Text Secondary | `#64748B` | Subtitles, descriptions, meta text |
| White | `#FFFFFF` | Background, text on dark |
| Border | `#E2E8F0` | Card borders, dividers |

#### Typography

| Element | Font | Weight | Size (Desktop) | Size (Mobile) |
|---------|------|--------|----------------|---------------|
| H1 / Hero | System Sans (Inter) | 800 | 56px | 36px |
| H2 / Section | System Sans | 700 | 40px | 28px |
| H3 / Card Title | System Sans | 600 | 24px | 20px |
| Body | System Sans | 400 | 16px | 16px |
| Caption | System Sans | 500 | 14px | 14px |

#### Spacing System
- Section padding: `py-20` (80px) desktop, `py-12` (48px) mobile
- Container max-width: `max-w-7xl` (1280px)
- Card gap: `gap-6` (24px)
- Component padding: `p-6` to `p-8`

#### Animation Specifications

| Animation | Trigger | Duration | Easing |
|-----------|---------|----------|--------|
| Fade In Up | Scroll into view | 600ms | easeOut |
| Stagger Children | Parent in view | 100ms delay | easeOut |
| Card Hover | Mouse enter | 300ms | easeInOut |
| Stat Count | Viewport entry | 2000ms | easeOut |
| Nav Background | Scroll > 50px | 300ms | easeInOut |
| Mobile Menu | Click | 300ms | easeInOut |

#### Responsive Breakpoints

| Name | Width | Tailwind Prefix |
|------|-------|-----------------|
| Mobile | < 640px | Default |
| Tablet | 640px – 1024px | `sm:` / `md:` |
| Desktop | 1024px – 1280px | `lg:` |
| Wide | > 1280px | `xl:` |

### 2.9 SEO & Marketing Requirements

**Meta Template:** `%s | Oil and Gas Solutions (Pvt.) Ltd`

**Target Keywords:**
- Primary: "oil and gas solutions Pakistan", "rig contracting Pakistan", "oilfield manpower supply"
- Secondary: "drilling training Pakistan", "IWCF well control Pakistan", "oilfield safety equipment", "oil and gas logistics", "drilling procurement Pakistan"

**Structured Data:**
- Organization schema (homepage)
- LocalBusiness schema (contact page)
- BreadcrumbList schema (all sub-pages)

**Open Graph:**
- OG Image: 1200×630px, Navy background, OGS logo text in Primary Red + Yellow accent
- OG Title / Description: Unique per page
- Twitter Card: Summary Large Image

---

## 3. TRD — Technical Requirements

### 3.1 Technology Stack

| Layer | Technology | Version | Rationale |
|-------|-----------|---------|-----------|
| Framework | Next.js | 15.x (App Router) | SSR/SSG, file-based routing, SEO, image optimization |
| Language | TypeScript | 5.x | Type safety, developer experience, maintainability |
| Styling | Tailwind CSS | 3.4.x | Utility-first, rapid development, consistent design system |
| UI Components | shadcn/ui | Latest | Accessible, customizable, Radix-based primitives |
| Animation | Framer Motion | 11.x | Declarative animations, viewport detection, layout animations |
| Icons | Lucide React | Latest | Consistent icon set, tree-shakeable |
| Forms | React Hook Form | 7.x | Performance, minimal re-renders, easy validation |
| Validation | Zod | 3.x | TypeScript-first schema validation |
| Toast | Sonner | Latest | Lightweight toast notifications |
| Deployment | Vercel | — | Edge network, CI/CD, serverless functions |

**Dev Dependencies:**
- ESLint, Prettier, TypeScript, @types/node, @types/react, @types/react-dom
- Tailwind plugins: tailwindcss-animate

### 3.2 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Vercel Edge                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │   Static    │  │   Static    │  │   Static / SSR      │ │
│  │   Routes    │  │   Assets    │  │   (Future API)      │ │
│  │  (SSG/ISR)  │  │  (Images)   │  │                     │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                           │
┌─────────────────────────────────────────────────────────────┐
│                    Next.js 15 App Router                    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Layout (Root)                                      │    │
│  │  ├── Navbar (Client Component)                      │    │
│  │  ├── Main Content (Server/Client)                   │    │
│  │  └── Footer (Server Component)                      │    │
│  └─────────────────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Pages                                              │    │
│  │  ├── page.tsx (Home)                                │    │
│  │  ├── about/page.tsx                                 │    │
│  │  ├── services/page.tsx                              │    │
│  │  ├── services/[slug]/page.tsx (Dynamic)             │    │
│  │  ├── clients/page.tsx                               │    │
│  │  └── contact/page.tsx                               │    │
│  └─────────────────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  API Routes (Future)                                │    │
│  │  └── api/contact/route.ts (Form handler)            │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                           │
┌─────────────────────────────────────────────────────────────┐
│                      Data Layer (Static)                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │  services.ts│  │  courses.ts │  │  products.ts        │ │
│  │  clients.ts │  │  stats.ts   │  │  navigation.ts      │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**Architecture Principles:**
1. **Static-First:** All pages pre-rendered at build time (SSG). No runtime CMS calls.
2. **Server Components by Default:** Use React Server Components for data fetching and static rendering.
3. **Client Components for Interactivity:** Forms, animations, mobile menu, carousels.
4. **Co-location:** Page-specific components live in `_components/` inside route folders.

### 3.3 Data Models & Content Schema

#### 3.3.1 Core TypeScript Interfaces

```typescript
// types/index.ts

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string; // Lucide icon name
  sections: ServiceSection[];
  ctaText: string;
  meta: MetaData;
}

interface ServiceSection {
  id: string;
  title: string;
  content: string | string[];
  type: 'text' | 'list' | 'grid' | 'accordion' | 'table';
  items?: SectionItem[];
}

interface SectionItem {
  title: string;
  description?: string;
  icon?: string;
}

interface Course {
  id: string;
  title: string;
  category: 'Certification' | 'QHSE' | 'Technical' | 'Soft Skills';
  level?: 'Basic' | 'Intermediate' | 'Advanced';
  duration?: string;
  description?: string;
}

interface JobCategory {
  department: string;
  roles: string[];
}

interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description?: string;
}

interface Client {
  name: string;
  location: string;
  industry: string;
  logo?: string; // placeholder or path
}

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

interface MetaData {
  title: string;
  description: string;
  keywords: string[];
}

interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  division: string;
  message: string;
}
```

#### 3.3.2 Content File Structure

```
data/
├── index.ts          # Barrel exports
├── services.ts       # All 9 services with full content
├── courses.ts        # 50+ training courses
├── jobs.ts           # 40+ HR job categories
├── products.ts       # 100+ procurement items
├── clients.ts        # 13 client entries
├── stats.ts          # 4 homepage stats
├── navigation.ts     # Nav items with dropdowns
├── testimonials.ts   # Placeholder testimonials
└── site.ts           # Global site config (name, email, url, social)
```

### 3.4 API & Integration Specifications

#### 3.4.1 Internal API Routes (Phase 1 — Static)

No API routes required for v1. Contact form submits to client-side state with success toast. (No backend email service in scope).

#### 3.4.2 Future API Routes (Phase 2)

| Route | Method | Purpose | Payload |
|-------|--------|---------|---------|
| `/api/contact` | POST | Form submission handler | `{ fullName, email, phone, division, message }` |
| `/api/courses` | GET | Fetch course list (if dynamic) | Query params: category, level |

#### 3.4.3 External Integrations (Future)

| Service | Purpose | Phase |
|---------|---------|-------|
| Google Maps Embed | Office location display | 1 (iframe) |
| Google Analytics 4 | Traffic tracking | 1 (gtag) |
| Meta Pixel | Ad conversion tracking | 2 |
| Email Service (Resend/SendGrid) | Contact form delivery | 2 |
| CRM Webhook | Lead routing to sales | 2 |

### 3.5 Component Architecture

#### 3.5.1 Shared Components (`/components`)

| Component | Type | Props | Description |
|-----------|------|-------|-------------|
| Navbar | Client | — | Sticky nav with scroll detection, mobile sheet |
| Footer | Server | — | 4-column footer with links |
| SectionHeader | Server | title, subtitle, centered? | Reusable section title with red accent bar |
| ServiceCard | Server | icon, title, description, href | Hover-animated card |
| StatCounter | Client | value, label, suffix | Animated number counter |
| ClientLogo | Server | name, location? | Placeholder logo card |
| FadeIn | Client | children, delay?, direction? | Framer Motion scroll reveal wrapper |
| Breadcrumb | Server | items: {label, href}[] | Navigation breadcrumb |
| MobileMenu | Client | isOpen, onClose | Sheet-based mobile navigation |

#### 3.5.2 Page-Specific Components (`/app/**/_components`)

| Page | Components |
|------|-----------|
| Home | HeroSection, ServicesGridSection, WhyOGSSection, StatsSection, ClientsSection, CTASection |
| About | IntroductionSection, VisionMissionSection, AimSection |
| Services | ServiceHero, ServiceSidebar, ServiceContent |
| Contact | ContactForm, ContactInfo, MapPlaceholder |

#### 3.5.3 shadcn/ui Components Required

Install via CLI:
```bash
npx shadcn add button
npx shadcn add card
npx shadcn add input
npx shadcn add textarea
npx shadcn add select
npx shadcn add sheet
npx shadcn add accordion
npx shadcn add badge
npx shadcn add separator
npx shadcn add sonner
npx shadcn add toast
```

### 3.6 State Management

**No global state library required.**

| State | Location | Solution |
|-------|----------|----------|
| Mobile menu open | Navbar | React useState |
| Form data | ContactForm | React Hook Form |
| Form submission | ContactForm | React useState (idle/loading/success) |
| Scroll position | Navbar | React useState + scroll listener |
| Animation state | FadeIn | Framer Motion (self-contained) |

### 3.7 Performance Budget

| Metric | Budget | Measurement |
|--------|--------|-------------|
| Total JS (gzipped) | < 200 KB | Lighthouse / Bundle Analyzer |
| Total CSS (gzipped) | < 50 KB | Lighthouse |
| First Contentful Paint | < 1.5s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Time to Interactive | < 3.5s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Image delivery | WebP/AVIF | next/image with formats |
| Font loading | font-display: swap | CSS |

**Optimization Strategies:**
- Static export or ISR for all pages
- `next/image` with priority loading for hero images
- Lazy load below-fold images
- Code-split client components
- Preload critical CSS and fonts
- Minimize Framer Motion bundle (tree-shake unused features)

### 3.8 Security Requirements

| ID | Requirement | Implementation |
|----|-------------|----------------|
| SEC-01 | No secrets in client bundle | All API keys server-side only (future) |
| SEC-02 | Form validation | Zod schema on client + server (future) |
| SEC-03 | XSS prevention | React auto-escaping, no dangerouslySetInnerHTML |
| SEC-04 | CSRF protection | Not applicable for static v1 (future: tokens) |
| SEC-05 | Content Security Policy | Add CSP headers via next.config.js (future) |
| SEC-06 | HTTPS only | Enforced by Vercel |

### 3.9 Deployment & DevOps

#### 3.9.1 Environment Setup

| Environment | URL | Purpose |
|-------------|-----|---------|
| Development | localhost:3000 | Local development |
| Preview | Vercel Preview | PR previews |
| Production | oilandgassolutions.com | Live site |

#### 3.9.2 Build Configuration

```javascript
// next.config.js
const nextConfig = {
  output: 'export', // Static site generation
  distDir: 'dist',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // SEO-friendly URLs
}
module.exports = nextConfig
```

#### 3.9.3 CI/CD Pipeline (GitHub + Vercel)

```
Push to main ──► Vercel Build ──► Deploy to Production
Pull Request ──► Vercel Preview ──► Team Review ──► Merge
```

#### 3.9.4 Domain Configuration

- Primary: `oilandgassolutions.com`
- Redirect: `www.oilandgassolutions.com` → apex
- SSL: Automatic (Let's Encrypt via Vercel)
- DNS: A/AAAA records to Vercel

### 3.10 Testing Strategy

| Type | Tool | Scope | Frequency |
|------|------|-------|-----------|
| Unit | Jest + React Testing Library | Components, utilities, validation | Every PR |
| E2E | Playwright | Critical user flows (nav, form, mobile) | Pre-release |
| Visual | Storybook (optional) | Component isolation | Development |
| Accessibility | axe-core / Lighthouse | WCAG AA compliance | Every PR |
| Performance | Lighthouse CI | Performance budget | Pre-release |
| SEO | Screaming Frog / Lighthouse | Meta tags, structured data | Pre-release |

**Test Cases (E2E):**
1. User can navigate from Home → Services → HR Services → Contact
2. User can submit contact form with valid data
3. User sees validation errors on empty form submission
4. Mobile menu opens and closes
5. All service pages load without 404
6. Client marquee scrolls on homepage

---

## 4. Appendix

### A. Complete Content Inventory

#### A.1 Services Content

**HR Services**
- Manpower Categories: Management (Rig Managers, Superintendents, Tool Pushers, Project Managers, Directional Drillers, Consultants), Technical (Drillers, Assistant Drillers, Derrickmen, Floormen, Roustabouts, Geologists, Petrophysicists, Geophysicists, Mud Logging Geologists, Wireline Operators, Coiled Tubing Operators, Field Engineers/Technicians), Safety (Safety Officers, Loss Prevention Officers), Support (Welders, Crane & Fork-lift Operators, Professional Drivers, Rig Mechanics/Electricians, Motormen, Plant Operators), Catering (Camp Boss, Cooks, Catering Personnel)
- Recruitment Process: Select → Validate → Deploy
- Global Reach: Pakistan, Gulf, Middle East, Europe, Africa

**Rig Contracting**
- Services: Rig Hiring on Day Rate, Complete Crew Hiring & Management, Well Site Accommodation & Food, Rig Maintenance and Inspection
- Technical Support: Drilling & Services (well logging, testing, cementing), Drilling and Completion Operations, Project Management, Asset Integrity Management, Staffing and Payroll Services, Rig Audits and Inspections, HSE Supervision, Procedures and Audits
- Advisory for Oil and Gas Investors

**Drilling Operations**
- Well Services: Well Logging, Testing, Cementing
- Operations Management: Third-party drilling operations
- Investor Advisory
- Staffing & Payroll for contract labor

**Training Services**
- Certifications: IWCF Well Control (Driller & Supervisor), IADC WellCAP (Driller & Supervisor), NEBOSH, IOSH Managing Safely, Simulator Training Program, Stuck Pipe Recovery Course
- QHSE Courses (50+): Accident/Incident Investigation, Advanced Hydraulic Fracturing, Basic Petroleum Geology, Basic Petroleum Technology, CPR, Casing & Cementing, Chemical Spill Awareness, Chlorine Handling, Concepts of E&P, Conflict Management, COSHH, Cost Management, Crane & Fork Lift, Drill String Failure Prevention, Drilling Fluids Technology, Drilling Rig Site Safety, Fire Fighting, First Aid Level 1/2, Food Hygiene, Gas Testing, H2S Safety & SCBA, Hazcom, Hazmat, Hazop, IATA Dangerous Cargo, IMO Dangerous Cargo, Inspection of CO2 Welding, Intro to Drilling, Introduction to Oil & Gas Production, Introduction to Oil Industry, Lubrication & Greasing, Maintenance of Rotating Machinery, Maintenance Planning, Manual Handling, Mechanical Lifting, Noise Hazards, Oil Field Services, Oil From Pore to Pure, Permit to Work, Pumps Operation & Maintenance, Radiation Level 1/2, Rig Pass, Risk Assessment, Scaffolding Safety, Waste Management, Welding & Inspection, Welding Safety, Working at Height, Working in Extreme Environment, Working Safely, Workshop & Warehouse Safety
- Career Paths: HSE Officer, Loss Prevention Officer, Safety Officer, Barge Safety Officer, Construction Foreman, Mechanical & Electrical Foreman, Warehouse Supervisor, Permit to Work Coordinator

**Procurement**
- Mechanical: Bearings, Belts, Chains, Valves, Pumps, Drill Pipes, Collars, Bits, Jars, Motors, Compressors, Generators, AC (Mitsubishi, Sabro, Pel), Air Clutches, Air Compressors, Ball Valves, Blowers, Boilers, Centrifugal Pumps, Chain & Wire, Compressors, Conveyor Belts, Couplings, Crane Parts, Cutting Tools, Cylinders, Diesel Engines, Duplex Pumps, Elbows, Expansion Joints, Fan Coils, Fasteners, Filters, Fishing Tools, Flanges, Flow Control Valves, Flow Indicators, Flow Level Analyzer, Flow Meters, Gas Analyzer, Gaskets, Gate Valves, Gear Box, Generators DC, Heat Exchangers, Hoists, Hooks, Hose & Fittings (High Pressure), Hydraulic Adapters, Hydraulic Fittings, Hydraulic Tools, Kelly Hoses, Kelly Spinners, Kelly Valves, Lifting Equipment, Machine Tools, Master Bushings, Material Handling Equipment, Measuring Equipment, Milling Tools, Monitors, Mud Buckets, Mud Gate Valves, Mud Gauges, Mud Pump Hose, Mud Pump Sheaves, Needle Valves, Oil Coolers, Orifice Fittings, Pipe Fittings, Pipe Wipers, Plug Valves, Polished Rods, Polished Rod Clamps, Polished Rod Liners, Power Crimpers, Pressure Gauges, Pressure Valves, Pressure Vessels, Pump Couplings, Pump Parts, Quick Connectors, Quick Coupling, Radial Ball Bearing, Radiators, Reamers, Regulators, Rig Parts, Ropes, Slings, Temperature Gauges, Tires, Tong
- Electrical: Cables, Lighting, Power Tools, Calibration Equipment, Laptops (Dell, HP, IBM), Monitors (LCD & CRT), Motors, Electric Accessories, Electric Tools, Electrical Lighting, Alarm Systems, Batteries, Computers, Meters (Multimeters, Insulation Testers), Smoke Detectors
- Fluid Systems: Flow Meters, Flow Indicators, Gauges, Filters, Pumps, Density Meter, Mud Chemicals
- Fasteners: Bolts, Nuts, Flanges, Elbows, Dresser Couplings, Dresser Sleeves, Butterfly Valves, Hangers, Manifold Fittings
- Fuel & Lubricants: Engine Oil, Diesel Drums, Grease, Coolants, Brake & Gear Oil, Hydraulic/Power Oil, Lubriplate, Silicon Grease, WD-40, CRC
- Drilling Compounds: API (Drill Collar Compound, Tool Joint Compounds, Thread Compound), Sealing (Thread Sealant, Metal-Free Thread Sealant), Special (Epoxy Based Thread lock Kit, Extreme Services Grease, Zinc Rich Galvanizer, Easy-Clean Rig Wash, C-Plate)
- PPE: Safety Shoes (Red Wing, Caterpillar), Hard Hats, Safety Glasses, Gloves (Safety & Welding), Harnesses, Safety Harness, Man-Riding Belts, Rain Suits, Fire Coverall, Cotton PC Coverall, Safety Hamlets, Chin + Strap, Face Shield, Welding Helmet, Welding Shield, Face Mask, Dust Mask, Respiration, Chemical Hood, Leather Safety Hood, Leather Gloves, Dotted Knitting Gloves, Cotton Knitting Gloves, Electric Gloves, Chemical Gloves, Anti Cut Gloves
- Note: Maintenance, repairing and installation services offered

**Logistics**
- Capabilities: Ground Transportation, International Shipping (Air, Sea), Customs Clearance, Specialized Heavy Hauling
- Heavy Fleet: Wheel Loader, Concrete Batch Plants, Dump Truck, Water Well Drilling Machines, Low Beds, Tractors & Trolleys, 20-40ft Trailers, Containers, Trucks, Mini Trucks, Fork-Lifters, Cranes, Diesel & Water Tankers, Dozers, Rollers, Excavators
- Light Vehicles: 4x4 Pick-ups, Cars, Hi-Ace, Coasters (ambulance/crew shifts), Mazda, Shahzore, Airport pick & drop
- Project Transportation: Multi-modal (air, ship, road, rail, barge)

**Safety**
- Fire Extinguishers: Foam, CO2, Water, Powder, Dry Chemical
- Fire Systems: Fire Door, Fire Blanket, Emergency Exit Light, Fire Alarm Control Panel, Addressable Fire Alarm, Automatic Nozzle, Foam Making Unit, Smoke & Heat Detector, Sound & Flasher, Fire Strobe Siren, Advance Fire Vehicle, Emergency Eye Washer & Shower, Automatic Fire Extinguisher, Fire Fighting Pump, Brow Nozzle & Couplings, Rescue Tools, Fire Hose, Fire Hose Racks, Fire Hose Valves, Fire Monitor & Nozzle, Fire Monitor Automatic, Foam Fire Extinguisher System, Single Jacket Hose, Cabinet for Fire Hose Reel, Rack Assembly, Rack & Peel Hose, Hand Hose Winder
- PPE: Ear Plugs/Protectors, Safety Spectacles, Chemical/Welding Goggles, Masks with Filters, First Aid Box, Spill Kit, Face Protection, Body Cooling, Winter Liners, Safety Leather Jackets, Fire Rescue Suit, Fire Coverall, Cotton PC Coverall, Rain Coats, T-Shirts, Safety Shoes (Red Wing, Caterpillar, etc), Rubber Shoes
- Gas Detection: Portable Instruments, Calibration, Sensors, Gas Detection Accessories, Gas Detection Calibration Ring
- Rescue: Breathing Apparatus, Scuba Diving Kit, Emergency Oxygen Kit, Thermal Imaging Camera, Rescue Audio Finder, Fire Hook, Fire Fighting Motorcycle, Portable Spreader, Concrete Cutter, Rescue Door Open, Rescue Roof Ladder, Rescue Suit
- Site Safety: Cones, Barriers, Warning Tapes, Delineator Spring Post, Road Stud, Speed Barkers, Reflection Vests, Solar Cat Eye, Convex Mirror, Blinking Light, Baton Light, Personnel Marker Light, Man Overboard Light, Emergency Lights, Traffic Warning Lights, Road Barriers, Barrication Chains, Anti Impact Barrel, Barrier Fencing, 5 Gallon Storage Can, Smokers Can, Spill Kit, Penetrant, Ground, Cool Vest, Roadside Emergency Kit, Crowfoot Safety Cable, Ground Fault Circuit Interrupter, Alternative Cutting Tool
- Fall Protection: Harnesses, Safety Belts, Shock Absorbing Lanyards, Shock Absorbing Tail Lines, Tie-Off Straps, Fixed Beam Anchor, Tool Lanyard, Tethered Tool Kit, Portable Guard Rail, Self Closing Safety Gates, Self Retracting Lifelines, Rope Grab, Ladder Climb Assist System, Ladder Mast System, Tripod, Rescue at Heights Rescue Lanyards and Carabineer
- Marine Safety: Ring Buoy Release Mechanism, EPIRB, Line Thrower, Distress Signals/Flares/Smokes, Ring Buoy Bracket, Life Preserver Boxes
- Traffic/Security: Walk Through Gates, Metal Detector, Portable Explosive Detector, Inspection Mirror, Bullet Proof Helmet, Bullet Proof Jackets, Alcohol Tester Digital, Cable & Mine Detector, Portable Digital Viewing System, Lockout Station, Gate Valve Lockout, Breaker Switch Lockout, Wall Switch Lockout, Plug Lockout, Personnel Eyewash Station, Dermatological Skin Products, Poly-Pro Rope, Personnel Transfer Basket, Windsock, Fuel Nozzle
- Electrical Safety: Electrical Rescue & Work Station, Electrical Gloves, Electrical Rescue Tools
- Confined Space: Confined Space System

**Catering**
- Well Site Accommodation: Camp Setup & Management, Food Services (Field Kitchens), Housekeeping & Janitorial
- Personnel: Camp Boss, Cooks, Helpers, Kitchen Staff, Nutrition Planning
- Mobile Catering Units
- Integration with Rig Contracting crew management

**Consultancy**
- Investment Advisory (Oil & Gas)
- Project Management Consultancy
- HSE Consultancy & Audits
- Rig Selection & Contract Strategy
- Manpower Planning & Optimization
- Supply Chain Optimization

#### A.2 Client List

1. CNPC Chuanqing Drilling Engineering Company Ltd. (CCDC) Pakistan Branch
2. BGP (Pakistan) International
3. Dewan Drilling Company (Pvt) Limited
4. Dewan Petroleum (Pvt) Ltd
5. Abraj Energy Services (Oman)
6. OMV (Pakistan) Exploration & Production GmbH
7. Al Burgan Drilling Company
8. Kuwait Drilling Company
9. Pakistan Oilfields Limited
10. China National Logging Corporation (Pakistan)
11. China State Construction and Engineering Co (Overseas)
12. UNISYS / Pak Sino Unisys Engineering (Private) Limited
13. Islamabad Police Headquarters, Rapid Response Force, HQ

#### A.3 Global Site Configuration

```typescript
// data/site.ts
export const siteConfig = {
  name: "Oil and Gas Solutions (Pvt.) Ltd",
  shortName: "OGS",
  tagline: "Complete Oil & Gas Solutions",
  description: "OGS provides HR, Rig Contracting, Drilling Operations, Training, Procurement, Logistics, Safety, and Catering services to the oil and gas industry.",
  url: "https://www.oilandgassolutions.com",
  email: "info@oilandgassolutions.com",
  founded: 2006, // Estimated from "15+ Years"
  location: {
    country: "Pakistan",
    cities: ["Islamabad"], // Primary, others TBD
  },
  social: {
    linkedin: null, // TBD
  },
  keywords: [
    "oil and gas solutions",
    "rig contracting Pakistan",
    "drilling services",
    "oilfield training",
    "manpower supply",
    "oilfield procurement",
    "safety equipment Pakistan",
    "oil and gas logistics",
  ],
};
```

### B. Color Tokens & Design System

#### B.1 Tailwind Config Extension

```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C41E3A',
          50: '#FDE8EB',
          100: '#F9D0D7',
          200: '#F2A2AF',
          300: '#EB7387',
          400: '#E4455F',
          500: '#C41E3A',
          600: '#9E182F',
          700: '#771224',
          800: '#4F0C18',
          900: '#28060C',
        },
        navy: {
          DEFAULT: '#1B2A4A',
          50: '#E8EBF0',
          100: '#D1D7E1',
          200: '#A3AFC3',
          300: '#7587A4',
          400: '#475F86',
          500: '#1B2A4A',
          600: '#16223B',
          700: '#10192D',
          800: '#0B111E',
          900: '#05080F',
        },
        accent: {
          DEFAULT: '#FFD700',
          50: '#FFFBE6',
          100: '#FFF7CC',
          200: '#FFEF99',
          300: '#FFE766',
          400: '#FFDF33',
          500: '#FFD700',
          600: '#CCAC00',
          700: '#998100',
          800: '#665600',
          900: '#332B00',
        },
        surface: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
};
```

#### B.2 Component Token Mapping

| UI Element | Background | Text | Border | Shadow |
|------------|------------|------|--------|--------|
| Primary Button | primary-500 | white | none | shadow-lg |
| Secondary Button | white | primary-500 | primary-500 | shadow-sm |
| Card | white | text-primary | border | shadow-sm |
| Card Hover | white | text-primary | primary-500 | shadow-lg |
| Dark Section | navy-500 | white | none | none |
| CTA Banner | primary-500 | white | none | none |
| Input | white | text-primary | border | none |
| Input Focus | white | text-primary | primary-500 | ring |
| Badge | accent-500 | navy-900 | none | none |
| Footer | navy-700 | white/80 | none | none |

### C. Route Map

| Route | File Path | Type | Metadata Title |
|-------|-----------|------|----------------|
| `/` | `app/page.tsx` | Static | "Oil and Gas Solutions (Pvt.) Ltd" |
| `/about` | `app/about/page.tsx` | Static | "About Us" |
| `/services` | `app/services/page.tsx` | Static | "Our Services" |
| `/services/hr-services` | `app/services/[slug]/page.tsx` | Dynamic | "HR Services" |
| `/services/rig-contracting` | `app/services/[slug]/page.tsx` | Dynamic | "Rig Contracting" |
| `/services/drilling-operations` | `app/services/[slug]/page.tsx` | Dynamic | "Drilling Operations" |
| `/services/training-services` | `app/services/[slug]/page.tsx` | Dynamic | "Training Services" |
| `/services/procurement` | `app/services/[slug]/page.tsx` | Dynamic | "Procurement" |
| `/services/logistics` | `app/services/[slug]/page.tsx` | Dynamic | "Logistics" |
| `/services/safety` | `app/services/[slug]/page.tsx` | Dynamic | "Safety" |
| `/services/catering` | `app/services/[slug]/page.tsx` | Dynamic | "Catering" |
| `/services/consultancy` | `app/services/[slug]/page.tsx` | Dynamic | "Consultancy" |
| `/clients` | `app/clients/page.tsx` | Static | "Our Clients" |
| `/contact` | `app/contact/page.tsx` | Static | "Contact Us" |
| `/sitemap.xml` | `app/sitemap.ts` | Generated | — |
| `/robots.txt` | `app/robots.ts` | Generated | — |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-06-05 | Product Team | Initial PRD + TRD for OGS Website |

**Next Steps:**
1. Review and approve PRD/TRD with stakeholders
2. Provide missing content assets (photos, addresses, schedules)
3. Begin Phase 1 development (Foundation)
4. Weekly sprint reviews against this document

**Contact:** info@oilandgassolutions.com
