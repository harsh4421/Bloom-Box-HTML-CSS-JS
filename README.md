<div align="center">

# 🌸 Bloom Box
### Flower Subscription E-Commerce Platform

*A modern, fully responsive flower subscription web app — built with pure HTML5, CSS3 & vanilla JavaScript.*

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-c0607a?style=for-the-badge)](https://bloom-box-theta.vercel.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**Semester II · Sprint I · HTML5 / CSS / JavaScript Final Project**

🚀 LIVE DEMO: https://bloom-box-theta.vercel.app/

</div>

---

## 📸 Screenshots

<img width="1705" alt="Hero & Box Selector" src="https://github.com/user-attachments/assets/76a862b0-cc8a-4341-aa92-40d167fc5ea9" />
<img width="1700" alt="Flower & Vase Selection" src="https://github.com/user-attachments/assets/09b0d7cb-d6ea-4e7e-b0e5-06f1b3b1227d" />
<img width="1704" alt="Order Summary" src="https://github.com/user-attachments/assets/63201a43-1eb0-4134-9a47-e57d57a786ab" />
<img width="1707" alt="Subscription Config" src="https://github.com/user-attachments/assets/29d6c59c-0a51-4116-94d0-ce57814a2850" />
<img width="1710" alt="Add-ons & Pricing" src="https://github.com/user-attachments/assets/2e6eb628-a202-4ea3-b1b5-22815f794e0b" />
<img width="1707" alt="Checkout Form" src="https://github.com/user-attachments/assets/dfd9a34a-0a52-4a85-b78c-409c60b372f6" />
<img width="688" alt="Mobile View" src="https://github.com/user-attachments/assets/49231d2f-63e9-4799-8649-179d469f6961" />

---

## 🌿 Overview

**Bloom Box** is a fully client-side flower subscription e-commerce platform. Users go through a two-page flow to:

1. Browse and select a **box size** (Small / Medium / Large)
2. Choose a **flower variety** and optional **vase upgrade**
3. Configure a **recurring subscription** (Weekly / Bi-Weekly / Monthly)
4. Select a **payment plan** — pay per delivery or save 17% with yearly prepay
5. Add **special occasion bundles** (Birthday, Anniversary, Holiday, Sympathy)
6. Complete **checkout** with real-time dynamic pricing

Order data is passed between pages via `localStorage` — no backend, no build tools, no dependencies.

---

## 🚀 Features

| Feature | Description |
|---|---|
| 🎁 Box Configurator | Choose Small (₹499), Medium (₹799), or Large (₹1,199) |
| 🌷 Flower Selector | Mixed Seasonal, Roses, Sunflowers, Lilacs |
| 🏺 Vase Options | No Vase (Free), Ceramic (+₹299), Crystal (+₹899), Rustic Wood (+₹599) |
| 🔄 Subscription Frequencies | Weekly (4×/mo), Bi-Weekly (2×/mo), Monthly (1×/mo) |
| 💳 Payment Plans | Pay-per-delivery (flexible) or Yearly Prepay (~17% savings) |
| ✨ Special Add-ons | Birthday (+₹299), Anniversary (+₹399), Holiday (+₹349), Sympathy (+₹249) |
| 📊 Live Order Summary | Sticky pricing panel with animated real-time updates |
| ✅ Form Validation | Field highlighting, error feedback, auto-focus on first empty field |
| 🎠 Hero Carousel | Auto-rotating slides (4s), dot navigation, pauses on hover |
| 🔍 Scroll Spy | Active nav link updates as user scrolls through sections |
| 🎉 Success Modal | Animated confirmation overlay — clears state on close |
| 📱 Fully Responsive | Mobile-first layout, adapts seamlessly from desktop to phone |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure, accessible form elements, ARIA attributes |
| **CSS3** | Flexbox & Grid layouts, `@keyframes` animations, custom properties, media queries |
| **JavaScript (ES6+)** | DOM manipulation, event handling, dynamic pricing, `localStorage` API |
| **Google Fonts** | Playfair Display · Dancing Script · Montserrat |

> ⚡ **Zero dependencies** — no npm, no bundler, no framework. Open `boxes.html` and it runs.

---

## 🌍 Box Pricing & Options

### Box Sizes

| Box | Stems | Ideal For | Price |
|---|---|---|---|
| 🌷 Small | 5–7 stems | Desk or side table | ₹499 / delivery |
| 💐 Medium ⭐ *Most Popular* | 10–14 stems | Dining or living room | ₹799 / delivery |
| 🌺 Large | 18–22 stems | Grand statement piece | ₹1,199 / delivery |

### Vase Upgrades

| Vase | Price |
|---|---|
| No Vase | Free |
| Ceramic Vase | +₹299 |
| Crystal Vase | +₹899 |
| Rustic Wood Vase | +₹599 |

### Special Occasion Add-ons

| Add-on | Includes | Price |
|---|---|---|
| 🎂 Birthday Bouquet Bundle | Premium seasonal blooms + ribbon wrap | +₹299 |
| 🌹 Anniversary Roses | 12 red roses + personalised card | +₹399 |
| 🎆 Holiday Arrangement | Festive bouquet — Diwali, Christmas, etc. | +₹349 |
| 🤍 Sympathy / Get Well Soon | Soft white and lavender mix | +₹249 |

---

## ⚙️ How It Works

```
boxes.html                             subscription.html
───────────────────────────────        ──────────────────────────────────────
1. Select box size                     4. Choose delivery frequency
2. Choose flower type           →      5. Select payment plan + add-ons
3. Pick vase option                    6. Fill in delivery details
   ↓                                   7. Submit → success modal → clear state
   Save selections to localStorage
```

**Cross-page state transfer:**

```javascript
// boxes.html — saves order on Proceed click
const orderData = {
  boxSize: "Medium",    boxPrice: 799,
  flowerType: "Roses",  vaseOption: "Ceramic Vase",  vasePrice: 299
};
localStorage.setItem('bloomboxOrder', JSON.stringify(orderData));
window.location.href = 'subscription.html';

// subscription.js — reads order on page load
const orderData = JSON.parse(localStorage.getItem('bloomboxOrder'));
```

---

## 📊 Pricing Formula

```
Cost per delivery = Box Price + Vase Price + Σ Selected Add-ons

── Pay-per-delivery ──────────────────────────────
  Total = Cost per delivery

── Yearly Prepay ─────────────────────────────────
  Deliveries / year = frequency_per_month × 12
  Subtotal          = Cost per delivery × Deliveries / year
  Discount          = Subtotal × 0.17
  Total             = Subtotal − Discount
```

| Frequency | Per Month | Per Year |
|---|---|---|
| Weekly | 4× | 48× |
| Bi-Weekly | 2× | 24× |
| Monthly | 1× | 12× |

---

## 📂 Project Structure

```
bloom-box/
│
├── boxes.html            # Page 1 — Hero, box/flower/vase selector, order summary
├── subscription.html     # Page 2 — Frequency, payment plan, add-ons, checkout
│
├── style.css             # Global styles — navbar, hero, cards, carousel
├── subscription.css      # Subscription page — tabs, toggles, checkbox cards, modal
│
├── script.js             # Scroll spy · carousel · box builder · localStorage write
├── subscription.js       # Live pricing · validation · success modal · localStorage read
│
├── bloom-box-logo.png    # Brand logo
├── hero_roses.png        # Hero carousel — slide 1
└── image_2.jpg           # Hero carousel — slide 2
```

---

## 📄 Page Sections

### `boxes.html`

| Section | Selector | Description |
|---|---|---|
| Navbar | `.nav-bar` | Sticky header with scroll-spy active link highlighting |
| Hero | `.hero` | Split layout — tagline, CTA buttons, image carousel |
| Box Selection | `#boxes` | Radio card grid — Small / Medium / Large |
| Flower Selection | `#flowers` | Radio cards — flower variety choice |
| Vase Selection | `#vases` | Radio cards — vase upgrade options |
| Care Guide | `#care-guide` | Flower care tips |
| Order Summary | `.order-summary-section` | Live total + Proceed button |

### `subscription.html`

| Step | Section | Description |
|---|---|---|
| 1 | Delivery Frequency | Tab-style radio: Weekly / Bi-Weekly / Monthly |
| 2 | Payment Plan | Toggle cards: Pay-per-delivery vs Yearly Prepay (BEST VALUE badge) |
| 3 | Add-ons | Optional checkbox cards for special occasions |
| 4 | Delivery Details | Name, phone, email, address with inline validation |
| — | Order Summary | Sticky panel — box, vase, add-ons, discount, total |
| — | Checkout | Loading state → animated success modal |

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/your-username/bloom-box.git
cd bloom-box

# 2. Open in browser
open boxes.html          # macOS
start boxes.html         # Windows
xdg-open boxes.html      # Linux
```

Or drag `boxes.html` directly into any browser window.

**Recommended setup:**
- **Editor:** VS Code + [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
- **Browser:** Chrome or Firefox (latest)

> ⚠️ Keep `hero_roses.png`, `image_2.jpg`, and `bloom-box-logo.png` in the same directory as the HTML files for the full visual experience.

---

## 🎯 Learning Outcomes

This project demonstrates:

1. **Multi-page state management** via the browser's `localStorage` API
2. **Dynamic DOM manipulation** — live pricing, summaries, and validation feedback
3. **Asynchronous UI patterns** — loading states, animated modals, CSS transitions
4. **Responsive design** using CSS Flexbox, Grid, and media queries
5. **Scroll-driven interactivity** — scroll spy navigation without any external library
6. **Modular CSS architecture** — separate stylesheets per page and feature
7. **Accessible form design** — semantic labels, focus management, client-side validation

---

## 🔮 Future Improvements

1. 🔗 Backend API integration for real order processing and email confirmations
2. 🔐 User authentication and order history dashboard
3. 💳 Payment gateway integration (Razorpay / Stripe)
4. 📦 Real-time delivery tracking with status updates
5. 📍 Auto-detect user location for delivery address pre-fill
6. ⚛️ React / Vue.js rewrite for scalable component architecture
7. 🌐 Multi-language and multi-currency support

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

<div align="center">

**Harsh Kumar**
B.Tech CSE 2025–29 · Semester II
School of Future Tech, ITM Skills University

---

*Made with 🌸 — Bloom Box*

</div>
