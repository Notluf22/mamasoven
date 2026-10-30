# Mama’s Oven | Artisanal Bakery Website

A modern, mobile-first static catalog website for **Mama’s Oven**, featuring 166 handcrafted bakes across 14 categories with interactive WhatsApp direct ordering, real-time price calculation, and a multi-view product photo gallery.

---

## 🌟 Key Features

- **166 Transcribed Bakes**: Complete catalog across Wholesome Cakes, Celebration Cakes, Artisan Sourdough Breads, Cheesecakes, Vegan, Gluten-Free, and Sugar-Free selections.
- **WhatsApp Order Integration**: Generates structured, pre-filled WhatsApp messages with selected size/weight, recipe preference, quantity, custom cake message, and delivery date.
- **Real-Time Dynamic Pricing**: Automatically calculates order totals when weights or quantities change.
- **Image Gallery & Automatic Linking**: Supports high-res bake photography with gallery thumbnails and the original menu card scan.
- **Search & Dietary Filters**: Instant instant search and one-click filtering for Eggless, Gluten-Free, Vegan, Sugar-Free, and Sourdough items.
- **Zero Build Dependencies**: Pure HTML5, CSS3, and modern vanilla JavaScript. Runs out-of-the-box locally and on any static host.

---

## 🚀 Quick Start (Local Preview)

### Option 1: Using Node.js (Recommended)
```bash
npm start
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Direct File Open
Simply double-click `index.html` in your file explorer to open it directly in any web browser.

### Option 3: Python Built-in Server
```bash
python -m http.server 3000
```

---

## 📸 How to Add Images for Each Page

We've built a dedicated image management system so you can easily add photography for all 166 bakes:

### Step 1: Prepare Your Photos
Name each image using the product's ID (found in `catalog.js` or the URL of the product page).

**Naming Examples:**
- `celebration-cakes-choco-truffle.webp`
- `wholesome-cakes-ragi-jaggery-banana-walnut.webp`
- `artisan-breads-classic-white-sourdough.jpg`
- `cheese-cakes-blueberry-cheesecake.png`

> **Tip:** `.webp` is recommended for the best balance of crisp quality and fast loading, but `.jpg` and `.png` are also fully supported. Square (1:1) or 4:3 aspect ratio works best.

### Step 2: Drop the Files into `images/products/`
Place your new image files directly inside:
```
images/products/
```

### Step 3: Run the Automatic Linker
```bash
npm run link-images
```
*(Or run `node link-images.js`)*

The script will automatically scan your folder, update `catalog.js` with the correct image paths, and report the current image coverage across all 14 categories!

### Checking Image Coverage Status
To see how many products have photos and which ones are still pending without making changes:
```bash
npm run image-status
```

> **Instant Auto-Fallback:** Even before running the linker script, `app.js` will automatically look for `images/products/<id>.webp` whenever a visitor views that bake. If no custom photo exists yet, it seamlessly falls back to the authentic menu card scan.

---

## ⚙️ Customizing Shop Details & Menu

All bakery settings and menu data are managed in **`catalog.js`**:

### Bakery Configuration (`CONFIG`)
Edit lines 2–10 of `catalog.js`:
```javascript
const CONFIG = {
  "phone": "919745762111",                                              // WhatsApp phone number
  "formattedPhone": "+91 97457 62111",                                 // Display phone number
  "special": "Freshly baked artisan cakes & sourdough breads daily.",  // Announcement strip
  "address": "Mama’s Oven Studio · Kozhikode, Kerala",                // Pickup & Studio address
  "hours": "Tue – Sun: 9:30 AM – 8:00 PM",                             // Working hours
  "instagram": "mamasoven"                                             // Social handle
};
```

### Products Catalog (`PRODUCTS`)
Each bake entry contains:
- `id`: Unique identifier (matches the HTML page filename)
- `name`: Display title
- `category`: Category group (e.g., `Wholesome Cakes`, `Celebration Cakes`)
- `price`: Unit price in INR (`null` for "Price on request")
- `unit`: Pack size (`1 kg`, `500 g`, `450 g`, `Medium`)
- `image`: Relative path to photo (e.g., `images/products/my-cake.webp`)
- `source`: Reference scan of the printed menu card
- `sizes`: Available weight options and price multipliers
- `options`: Recipe preferences (e.g. `Standard`, `Eggless`)

---

## 📤 How to Upload to GitHub / Git as a New Project

To publish this project to GitHub (or GitLab / Bitbucket):

### 1. Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Name your repository (e.g. `mamas-oven-website`).
3. Set the visibility to **Public** (or **Private**).
4. **Leave all checkboxes unchecked** (do not add a README, .gitignore, or license as we already created them).
5. Click **Create repository**.

### 2. Connect Your Local Project and Push
Run these commands in your project terminal:

```bash
# Add your GitHub remote (replace with your actual GitHub URL)
git remote add origin https://github.com/<YOUR-USERNAME>/mamas-oven-website.git

# Ensure branch is main
git branch -M main

# Push all files to GitHub
git push -u origin main
```

---

## 🌐 Free 1-Click Hosting Options

Once uploaded to GitHub, you can host the website for free:

### Option A: GitHub Pages
1. On your GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Branch**, select `main` and root `/`.
3. Click **Save**. Your site will be live at `https://<YOUR-USERNAME>.github.io/<REPO-NAME>/`!

### Option B: Vercel / Netlify
1. Connect your GitHub account to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Select your `mamas-oven-website` repository.
3. Click **Deploy**. It will deploy instantly with global CDN performance and automatic SSL!

---

## 📁 Project Structure

```
├── index.html            # Homepage (Hero, Featured Bakes, Story, FAQs)
├── menu.html             # Full catalog with search, dietary chips & category pills
├── *.html (166 pages)    # Individual detail pages for every bake
├── styles.css            # Responsive design system & animations
├── catalog.js            # Menu database, pricing & bakery CONFIG
├── app.js                # Search, filtering, dynamic pricing & WhatsApp builder
├── link-images.js        # Helper tool to auto-link product images
├── package.json          # Node scripts (start, link-images, image-status)
├── .gitignore            # Git exclusions
├── images/
│   ├── logo.webp         # Brand identity
│   ├── signature.webp    # Signature chocolate cake
│   ├── chocolate.webp    # Chocolate truffle
│   ├── mango.webp        # Mango passion fruit mousse
│   ├── rose.webp         # Pistachio rose
│   ├── ragi.webp         # Ragi jaggery cake
│   ├── walnut.webp       # Coffee & walnut cake
│   ├── menu-0.webp...16  # Authentic scanned menu card cards
│   └── products/         # Place your new product photos here!
└── README.md             # Documentation
```

---

© Mama’s Oven · Handcrafted with care.
