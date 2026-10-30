/**
 * Mama's Oven - Automatic Product Image Linker
 * 
 * Usage:
 *   node link-images.js          -> Scans images/products/ and updates catalog.js
 *   node link-images.js --status -> Prints image coverage status without modifying files
 */

const fs = require('fs');
const path = require('path');

const CATALOG_PATH = path.join(__dirname, 'catalog.js');
const PRODUCTS_DIR = path.join(__dirname, 'images', 'products');

if (!fs.existsSync(CATALOG_PATH)) {
  console.error('Error: catalog.js not found at ' + CATALOG_PATH);
  process.exit(1);
}

// Read catalog.js
const catalogContent = fs.readFileSync(CATALOG_PATH, 'utf8');

// Match CONFIG and PRODUCTS
const configMatch = catalogContent.match(/const CONFIG\s*=\s*(\{[\s\S]*?\});/);
const productsMatch = catalogContent.match(/const PRODUCTS\s*=\s*(\[[\s\S]*?\]);/);

if (!productsMatch) {
  console.error('Error: Could not parse PRODUCTS array in catalog.js');
  process.exit(1);
}

let products;
try {
  products = JSON.parse(productsMatch[1]);
} catch (e) {
  // If JSON.parse fails due to formatting, eval safely
  const sandbox = {};
  eval('sandbox.products = ' + productsMatch[1]);
  products = sandbox.products;
}

const statusOnly = process.argv.includes('--status');

// Scan images/products directory
const availableFiles = fs.existsSync(PRODUCTS_DIR) ? fs.readdirSync(PRODUCTS_DIR) : [];
const extPriority = ['.webp', '.jpg', '.jpeg', '.png'];

let updatedCount = 0;
let totalWithImages = 0;
const missingByCategory = {};

products.forEach(p => {
  // Check if an image already exists in images/products matching this id
  let matchedFile = null;
  for (const ext of extPriority) {
    const candidate = `${p.id}${ext}`;
    if (availableFiles.includes(candidate)) {
      matchedFile = candidate;
      break;
    }
  }

  const previousImage = p.image;

  if (matchedFile) {
    p.image = `images/products/${matchedFile}`;
    if (previousImage !== p.image) {
      updatedCount++;
    }
    totalWithImages++;
  } else if (p.image && (fs.existsSync(path.join(__dirname, p.image)) || fs.existsSync(p.image))) {
    // Keep existing valid image
    totalWithImages++;
  } else {
    // No image found
    missingByCategory[p.category] = missingByCategory[p.category] || [];
    missingByCategory[p.category].push(p.name);
  }
});

console.log('\n========================================');
console.log("   MAMA'S OVEN · PRODUCT IMAGE STATUS    ");
console.log('========================================');
console.log(`Total Products:         ${products.length}`);
console.log(`Products with Images:   ${totalWithImages} (${Math.round((totalWithImages / products.length) * 100)}%)`);
console.log(`Products without Image: ${products.length - totalWithImages}`);

if (updatedCount > 0 && !statusOnly) {
  console.log(`Newly Linked Images:    ${updatedCount}`);
}

if (totalWithImages < products.length) {
  console.log('\nPending Images by Category:');
  for (const [cat, items] of Object.entries(missingByCategory)) {
    console.log(`  - ${cat}: ${items.length} pending (e.g. ${items.slice(0, 3).join(', ')}${items.length > 3 ? '...' : ''})`);
  }
  console.log('\nTip: Drop photos into images/products/<id>.webp and re-run this script!');
}

if (!statusOnly) {
  // Rebuild catalog.js
  const updatedProductsJson = JSON.stringify(products, null, 2);
  const newContent = catalogContent.replace(
    /const PRODUCTS\s*=\s*\[[\s\S]*?\];/,
    `const PRODUCTS = ${updatedProductsJson};`
  );
  fs.writeFileSync(CATALOG_PATH, newContent, 'utf8');
  console.log('\n✓ catalog.js updated successfully!');
}
console.log('========================================\n');
