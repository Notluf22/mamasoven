# Product Images Directory

Drop your product photos into this folder!

## Naming Convention
Name each image file using the **Product ID** (found in `catalog.js` or the URL of the product page).

Supported formats:
- `.webp` (Recommended for best quality and smallest file size)
- `.jpg` or `.jpeg`
- `.png`

### Examples
- `celebration-cakes-choco-truffle.webp`
- `wholesome-cakes-ragi-jaggery-banana-walnut.webp`
- `celebration-cakes-mango-passion-fruit-mousse.webp`
- `artisan-breads-classic-white-sourdough.jpg`

## How It Works
1. Drop your new image files into `images/products/`.
2. Run `npm run link-images` (or `node link-images.js`) to automatically link them into `catalog.js`.
3. Even without running the script, `app.js` automatically tries to load `images/products/<product-id>.webp` on each product page!

## Image Recommendations
- **Aspect Ratio**: Square (1:1) or 4:3 landscape works best.
- **Resolution**: 800×800 to 1200×1200 pixels is ideal.
- **Lighting**: Warm, bright daylight showcasing the cake texture, toppings, or crumb.
