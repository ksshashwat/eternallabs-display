# PRD: Portfolio Display Website (Client-Side App)

## tl;dr

A sleek, minimalistic, modular portfolio site showcasing your personal profile, products, current YouTube learning activity with notes, and links to external platforms. All content is driven by a separate admin panel.

---

## Problem Statement

Independent creators and builders need a clean, modular way to present their digital work, current learning, and thought leadership across the internet — all in one elegant, live-updating portfolio interface. Most portfolios are either static or overly complicated to maintain. This portfolio solves that by decoupling content entry (via an admin app) from content presentation.

---

## Goals

### Business Goals

* Create a personal brand home on the internet that’s live and easily updatable via admin app.
* Encourage engagement with your products, writing, and YouTube learning journey.
* Drive traffic to external links like Medium, Substack, Notion, and product homepages.

### User Goals

* Quickly get a sense of your digital products and what you’re learning.
* Navigate easily to tools, content, or notes.
* Enjoy an elegant, non-distracting, delightful experience.

### Non-Goals

* Admin content management (covered in admin app).
* Complex product case studies or full resumes/CVs.

---

## User Stories

* As a visitor, I want to see a profile photo and social media links so I can quickly get context about the person behind the portfolio.
* As a visitor, I want to view product badges that I can hover over to get a summary and click through if I want to learn more.
* As a visitor, I want to see embedded YouTube videos showing what the creator is watching to learn.
* As a visitor, I want to click on a “Read my notes” link to open a Notion doc and explore deeper.
* As a visitor, I want intuitive access to writing (Medium), newsletter (Substack), and prompts (Notion) from the nav bar.

---

## UX & Design Requirements

### Design Principles

* Minimalist, modular, soothing color palette.
* Ample whitespace, subtle hover states, smooth transitions.
* Responsive layout for desktop and mobile.

### Page Layout (Referencing Provided Wireframe)

#### Left Sidebar

* Profile Image (circular)

  * Pulled dynamically from admin app
* Internet Links (text list with labels)

  * Linkedin, Github, X, etc.
  * Editable list from admin
  * Open in new tab

#### Top Nav Bar

* Right-aligned links: `Thoughts`, `Newsletter`, `Product Prompts`

  * Click opens external links (Medium, Substack, Notion)

#### Main Content Area

##### Product Grid (Top Section)

* Grid layout: 3–5 columns depending on screen size.
* Each product is a **badge**:

  * Square card with logo only by default.
  * Tooltip on hover shows 1-line description.
  * Entire card clickable if `productLink` exists.
  * Logo image + optional URL + description pulled from admin.

##### YouTube Learning Section (Below Product Grid)

* Embed grid of most recent YouTube links.
* Format: Responsive iframe embed for each video.
* Below each embed: “📓 Read my notes” button.

  * Links to Notion doc (pulled via admin).
  * Opens in new tab.

---

## Narrative

Imagine you’re a potential collaborator, investor, or even just a curious internet wanderer. You land on a page that instantly tells you who the person is — not through a wall of text, but through what they’re building, learning, and thinking about. You can see their active projects, peek at what’s inspiring them, and dive deeper only if you want to. This isn’t a resume. It’s a living, modular, quietly powerful space — always current, powered by a lightweight admin backend. It respects the user’s time and attention while still showcasing depth and rigor behind the creator.

---

## Implementation Status ✅

**COMPLETED**: Portfolio website successfully implemented according to all PRD specifications.

### Implemented Components:
- ✅ `ProfileCard` - Profile image with social links sidebar
- ✅ `ProductGrid` - Interactive product badges with hover tooltips
- ✅ `YouTubeSection` - Embedded videos with notes links
- ✅ `Navigation` - Right-aligned top navigation

### Features Delivered:
- ✅ Responsive design (desktop + mobile)
- ✅ Hover states and smooth transitions
- ✅ Modular component architecture
- ✅ Mock data structure ready for API integration
- ✅ Accessibility features (alt text, keyboard navigation)
- ✅ Modern design with Tailwind CSS

### Latest UI/UX Improvements (v2):
- ✅ **Custom Background**: Warm beige tone (#F0E7E0) for elegant feel
- ✅ **Enhanced Navigation**: Bold blue (#3447AA) text with improved styling
- ✅ **Product Tiles**: Deep shadows with blue hover effects for better depth
- ✅ **Fixed Hover Issues**: All product tiles now properly lift on hover
- ✅ **YouTube Section**: Separated notes buttons for better UX
- ✅ **Tooltip Enhancement**: Proper text wrapping for full content display
- ✅ **San Francisco Font**: Premium typography throughout the site

---

## Technical Requirements

### Architecture

* ✅ Static frontend app (Next.js 15 with TypeScript)
* 🔄 Ready for dynamic data via API from admin app
  * Mock data structure implemented for easy API integration
* ✅ Modular component structure (`ProfileCard`, `ProductBadge`, `YouTubeCard`)

### Data Models (from Admin app)

1. **Profile**

   * `profileImageUrl`: string
   * `socialLinks`: array of `{label: string, url: string}`

2. **Products**

   * `logoUrl`: string
   * `description`: string (1-liner)
   * `productUrl`: optional string

3. **YouTube Videos**

   * `videoUrl`: string (for iframe embedding)
   * `notesLink`: string (Notion)

4. **Navigation Links**

   * `thoughtsUrl`: string
   * `newsletterUrl`: string
   * `productPromptsUrl`: string

### Behaviors

* Hover on product badge shows tooltip (CSS or JS)
* If `productUrl` is missing, disable link click
* All external links open in new tab
* Embed iframe using YouTube’s embed URL format

### Performance & Accessibility

* Lazy-load images and videos
* Keyboard-navigable UI
* Descriptive alt text for all images/logos
