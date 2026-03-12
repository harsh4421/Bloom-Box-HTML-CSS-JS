# Bloom-Box-Flower_Subsription
Semester II Sprint I
HTML5, CSS, JavaScript Final Project

🌸 Bloom Box — Flower Subscription E-Commerce Platform

A modern, fully responsive flower subscription web app that lets users build a custom flower box, configure a recurring delivery plan, and complete checkout — all powered by pure HTML5, CSS3, and vanilla JavaScript with zero dependencies.

🚀 LIVE DEMO: https://bloom-box-theta.vercel.app/

## 📋 Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [File Structure](#file-structure)
- [Pages & Sections](#pages--sections)
- [How It Works](#how-it-works)
- [Pricing Logic](#pricing-logic)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)

---

## Overview

**Bloom Box** is an e-commerce flower subscription platform where users can:

1. Browse and select a flower box size (Small / Medium / Large)
2. Choose a flower type and vase option
3. Configure a recurring subscription (Weekly / Bi-Weekly / Monthly)
4. Pick a payment plan with optional yearly prepay discount
5. Add special occasion bundles (Birthday, Anniversary, Holiday, Sympathy)
6. Complete checkout with real-time dynamic pricing

The entire order flow spans two pages and uses `localStorage` to pass order data between them — no backend required.



## Features

| Feature | Description |
|---|---|
| 🎁 Box Configurator | Choose Small (₹499), Medium (₹799), or Large (₹1199) boxes |
| 🌷 Flower Selector | Pick from seasonal varieties — Mixed Seasonal, Roses, Sunflowers, Lilacs |
| 🏺 Vase Options | No Vase (Free), Ceramic (+₹299), Crystal (+₹899), Rustic Wood (+₹599) |
| 🔄 Subscription Frequencies | Weekly (4×/month), Bi-Weekly (2×/month), Monthly (1×/month) |
| 💳 Payment Plans | Pay-per-delivery (flexible) or Yearly Prepay (save ~17%) |
| ✨ Special Add-ons | Birthday Bouquet (+₹299), Anniversary Roses (+₹399), Holiday Arrangement (+₹349), Sympathy Bouquet (+₹249) |
| 📊 Live Order Summary | Real-time pricing panel with animated price updates |
| ✅ Form Validation | Client-side validation with field highlighting and auto-focus |
| 🎠 Hero Carousel | Auto-rotating image carousel with dot navigation and pause-on-hover |
| 🔍 Scroll Spy | Active nav link highlights based on current scroll position |
| 📱 Fully Responsive | Mobile-first layout adapting from desktop to narrow viewports |
| 🎉 Success Modal | Animated confirmation modal on order completion |

---

## File Structure

bloom-box/
│
├── boxes.html            # Page 1 — Hero, box/flower/vase selector, order summary
├── subscription.html     # Page 2 — Frequency, payment plan, add-ons, checkout form
│
├── style.css             # Global styles — navbar, hero, product cards, carousel
├── subscription.css      # Subscription page — tabs, toggles, checkbox cards, modal
│
├── script.js             # Scroll spy · Hero carousel · Box builder · localStorage write
├── subscription.js       # Live pricing · Form validation · Success modal · localStorage read
│
├── bloom-box-logo.png    # Brand logo
├── hero_roses.png        # Hero carousel — slide 1
└── image_2.jpg           # Hero carousel — slide 2

---

## Pages & Sections

### `boxes.html`

| Section | ID | Description |
|---|---|---|
| Navigation | `.nav-bar` | Sticky navbar with scroll-spy active link highlighting |
| Hero | `.hero` | Split layout with tagline, CTA buttons, and auto-rotating image carousel |
| Box Selection | `#boxes` | Radio card grid — Small, Medium (default), Large boxes with pricing |
| Flower Selection | `#flowers` | Radio cards for flower variety choice |
| Vase Selection | `#vases` | Radio cards for vase upgrade options |
| Care Guide | `#care-guide` | Flower care tips section |
| Order Summary | `.order-summary-section` | Live summary with selected box, flower, vase, and total |
| Proceed Button | `#proceed-btn` | Validates selection, saves to localStorage, navigates to subscription page |

### `subscription.html`

| Step | Description |
|---|---|
| Step 1 — Frequency | Tab-style radio buttons: Weekly / Bi-Weekly / Monthly |
| Step 2 — Payment Plan | Toggle cards: Pay-per-delivery vs Yearly Prepay (BEST VALUE badge) |
| Step 3 — Add-ons | Checkbox cards for special occasion bundles (optional) |
| Step 4 — Delivery Details | Name, phone, email, delivery address with validation |
| Order Summary | Sticky panel with full breakdown — box, vase, add-ons, discount, total |
| Checkout | Submit triggers loading state → success modal on completion |

---

## Tech Stack

- **HTML5** — semantic structure, accessible form elements
- **CSS3** — custom properties, Flexbox, Grid, animations (`@keyframes`), responsive media queries
- **JavaScript (ES6+)** — DOM manipulation, event listeners, `localStorage` API, dynamic pricing
- **Google Fonts** — Playfair Display, Dancing Script, Montserrat
- CSS @keyframesPrice pulse animation, modal entrance, carousel slide transitions

No npm, no bundler, no framework. Open `boxes.html` and it runs.

---

How It Works

User visits boxes.html and selects a box size, flower type, and vase option.
The live order summary updates dynamically as selections change.
User clicks Proceed — selections are saved to localStorage and the app navigates to subscription.html.
User configures delivery frequency, payment plan, and optional special occasion add-ons.
The sticky order summary recalculates pricing in real time.
User fills in delivery details (name, phone, email, address) and submits.
A success modal confirms the order and clears localStorage.



## Getting Started

### Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/bloom-box.git
cd bloom-box

# Open in browser
open boxes.html         # macOS
start boxes.html        # Windows
xdg-open boxes.html     # Linux
```

Or simply drag `boxes.html` into any browser window.

> **Note:** The hero carousel images (`hero_roses.png`, `image_2.jpg`) and logo (`bloom-box-logo.png`) must be present in the same directory for the full visual experience.

### Recommended Development Setup

⚡ No npm · No bundler · No framework — open boxes.html and it runs instantly.
- **Editor:** VS Code with Live Server extension
- **Browser:** Chrome or Firefox (latest)
- **No build step required**

---

## Screenshots
<img width="1705" height="979" alt="Screenshot 2026-03-13 at 3 07 56 AM" src="https://github.com/user-attachments/assets/76a862b0-cc8a-4341-aa92-40d167fc5ea9" />
<img width="1700" height="980" alt="Screenshot 2026-03-13 at 3 09 42 AM" src="https://github.com/user-attachments/assets/09b0d7cb-d6ea-4e7e-b0e5-06f1b3b1227d" />
<img width="1704" height="822" alt="Screenshot 2026-03-13 at 3 10 00 AM" src="https://github.com/user-attachments/assets/63201a43-1eb0-4134-9a47-e57d57a786ab" />
<img width="1707" height="736" alt="Screenshot 2026-03-13 at 3 10 13 AM" src="https://github.com/user-attachments/assets/29d6c59c-0a51-4116-94d0-ce57814a2850" />
<img width="1710" height="915" alt="Screenshot 2026-03-13 at 3 10 26 AM" src="https://github.com/user-attachments/assets/2e6eb628-a202-4ea3-b1b5-22815f794e0b" />

<img width="1707" height="938" alt="Screenshot 2026-03-13 at 3 10 40 AM" src="https://github.com/user-attachments/assets/dfd9a34a-0a52-4a85-b78c-409c60b372f6" />

<img width="688" height="754" alt="Screenshot 2026-03-13 at 3 11 01 AM" src="https://github.com/user-attachments/assets/49231d2f-63e9-4799-8649-179d469f6961" />

🎯 Learning Outcomes
This project demonstrates:

Multi-page state management using the browser's localStorage API
Dynamic DOM manipulation — live pricing, summaries, and validation feedback
Asynchronous UI patterns — loading states, animated modals, CSS transitions
Responsive design — CSS Flexbox, Grid, and media queries
Scroll-driven interactivity — scroll spy navigation without any library
Modular CSS architecture — separate stylesheets per page/feature
Accessible form design — semantic labels, focus management, client-side validation

Future Improvements

🔗 Backend API integration for real order processing and email confirmations
🔐 User authentication and order history dashboard
💳 Payment gateway integration (Razorpay / Stripe)
📦 Real-time delivery tracking with status updates
📍 Auto-detect user location for address pre-fill
⚛️ React / Vue.js rewrite for scalable component architecture
🌐 Multi-language and multi-currency support

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

👨‍💻 Author
Harsh Kumar
B.Tech CSE 2025-29 | Semester II
School of Future Tech, ITM Skills University

---

<p align="center">Made with 🌸 by the Bloom Box team</p>
