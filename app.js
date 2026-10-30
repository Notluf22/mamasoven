/**
 * Mama's Oven - Main Application Script
 * Handles catalog browsing, category filtering, search, image gallery,
 * dynamic pricing calculations, and WhatsApp order formatting.
 */

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

// Format currency in Indian Rupees (INR)
const money = n => new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0
}).format(n);

// Safe HTML escaping
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[c]));

// Format WhatsApp direct link
const wa = text => 'https://wa.me/' + CONFIG.phone + '?text=' + encodeURIComponent(text);

// Determine absolute or relative link to product page
function itemLink(p) {
  return location.protocol === 'file:'
    ? p.id + '.html'
    : new URL(p.id + '.html', location.href).href;
}

// Calculate selected price based on size factor or explicit override
function selectedPrice(p, sizeIndex = 0) {
  if (!p || !p.sizes || !p.sizes[sizeIndex]) return p.price;
  const size = p.sizes[sizeIndex];
  return size.price ?? (p.price === null ? null : Math.round(p.price * size.factor));
}

// Friendly price label
function priceLabel(p) {
  return p.price === null ? 'Price on request' : money(p.price);
}

// WhatsApp icon SVG helper
const waIconSvg = `<svg class="icon-wa" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.488-8.482z"/></svg>`;

// Pre-compose clear and beautiful WhatsApp order message
function orderMessage(p, size, recipe, quantity, message, date, total) {
  const formattedTotal = total === null ? 'Price on request' : money(total);
  const requestedDate = date ? date.replace('T', ' at ') : 'Please discuss availability';
  const customNote = message ? message.trim() : 'None';

  return `🎂 *Order Enquiry - Mama’s Oven*
---------------------------------------
• *Bake:* ${p.name}
• *Category:* ${p.category}
• *Size / Weight:* ${size}
• *Recipe Preference:* ${recipe}
• *Quantity:* ${quantity}
• *Estimated Price:* ${formattedTotal}
• *Requested Date/Time:* ${requestedDate}
• *Message on cake / Notes:* ${customNote}
• *Item Link:* ${itemLink(p)}
---------------------------------------
Hi Mama’s Oven! Please confirm availability, preparation time, and delivery/pickup details.`;
}

// Generate image tag with graceful fallback
function photo(p, cls = '') {
  // If product has an explicit image assigned
  if (p.image) {
    return `<div class="photo-wrapper ${cls}">
      <img class="${cls === 'gallery-main' ? 'gallery-main' : 'card-photo'}" 
           src="${esc(p.image)}" 
           alt="${esc(p.name)}" 
           loading="lazy" 
           onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
      <div class="placeholder product-tile" style="display:none;">
        <span class="tile-mark">M</span>
        <span class="tile-cat">${esc(p.subcategory || p.category)}</span>
        <small class="tile-sub">MAMA’S OVEN</small>
      </div>
    </div>`;
  }

  // Automatic check for dropped image in images/products/<id>.webp with placeholder fallback
  const autoSrc = `images/products/${p.id}.webp`;
  return `<div class="photo-wrapper ${cls}">
    <img class="${cls === 'gallery-main' ? 'gallery-main' : 'card-photo'}" 
         src="${esc(autoSrc)}" 
         alt="${esc(p.name)}" 
         loading="lazy" 
         onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
    <div class="placeholder product-tile">
      <span class="tile-mark">M</span>
      <span class="tile-cat">${esc(p.subcategory || p.category)}</span>
      <small class="tile-sub">MAMA’S OVEN</small>
    </div>
  </div>`;
}

// Determine dietary badge pills
function getDietaryBadges(p) {
  const text = (p.category + ' ' + (p.subcategory || '') + ' ' + (p.ingredients || '')).toLowerCase();
  const badges = [];

  if (text.includes('eggless')) badges.push({ label: 'Eggless', cls: 'badge-eggless' });
  if (text.includes('gluten free') || text.includes('gluten-free')) badges.push({ label: 'Gluten-Free', cls: 'badge-gf' });
  if (text.includes('sugar free') || text.includes('no white sugar') || text.includes('zero sugar')) badges.push({ label: 'No White Sugar', cls: 'badge-sf' });
  if (text.includes('vegan')) badges.push({ label: 'Vegan', cls: 'badge-vegan' });
  if (text.includes('ragi') || text.includes('millet') || text.includes('wheat') || text.includes('wholesome')) badges.push({ label: 'Wholesome', cls: 'badge-wholesome' });
  if (text.includes('sourdough')) badges.push({ label: 'Sourdough', cls: 'badge-sourdough' });

  return badges;
}

// Product card component
function card(p) {
  const defaultSize = (p.sizes && p.sizes[0]) ? p.sizes[0].label : p.unit;
  const defaultRecipe = (p.options && p.options[0]) ? p.options[0] : 'Standard recipe';
  const badges = getDietaryBadges(p);
  const badgeHtml = badges.length ? `<div class="diet-badges">${badges.slice(0, 2).map(b => `<span class="diet-pill ${b.cls}">${b.label}</span>`).join('')}</div>` : '';

  return `
  <article class="card">
    <a class="card-image" href="${p.id}.html" aria-label="View details for ${esc(p.name)}">
      ${photo(p)}
      <span class="image-tag">View Bake ↗</span>
    </a>
    <div class="body">
      <div class="card-meta">
        <span class="eyebrow">${esc(p.category)}</span>
        ${badgeHtml}
      </div>
      <h3 class="card-title"><a href="${p.id}.html">${esc(p.name)}</a></h3>
      <p class="card-desc">${esc(p.description)}</p>
      <div class="price-row">
        <div class="price">${priceLabel(p)} ${p.price === null ? '' : `<small class="unit">/ ${esc(p.unit)}</small>`}</div>
      </div>
      <div class="card-actions">
        <a class="btn outline details-btn" href="${p.id}.html">Details</a>
        <a class="btn wa-btn" href="${esc(wa(orderMessage(p, defaultSize, defaultRecipe, 1, '', '', p.price)))}" target="_blank" rel="noopener">
          ${waIconSvg} <span>WhatsApp</span>
        </a>
      </div>
    </div>
  </article>`;
}

// -------------------------------------------------------------
// Navigation & Global Event Handlers
// -------------------------------------------------------------
const menuToggle = $('.menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', e => {
    const open = e.currentTarget.getAttribute('aria-expanded') !== 'true';
    e.currentTarget.setAttribute('aria-expanded', String(open));
    const nav = $('#navigation');
    if (nav) nav.classList.toggle('open', open);
  });
}

// Wire WhatsApp buttons with default general message
document.querySelectorAll('.general-order').forEach(a => {
  a.href = wa('Hi Mama’s Oven! I would like to enquire about your cakes and breads. Please share availability, ordering lead-time, and today’s fresh bakes.');
});

// Populate contact & address elements from CONFIG
document.querySelectorAll('.address').forEach(e => {
  e.textContent = CONFIG.address;
});
document.querySelectorAll('.hours').forEach(e => {
  e.textContent = CONFIG.hours;
});

// Set current nav page
document.querySelectorAll('nav a').forEach(a => {
  const currentPath = location.pathname.split('/').pop() || 'index.html';
  if (a.getAttribute('href') === currentPath) {
    a.setAttribute('aria-current', 'page');
  }
});

// -------------------------------------------------------------
// Homepage Initialization (index.html)
// -------------------------------------------------------------
if ($('#special')) {
  $('#special').textContent = CONFIG.special;

  // Curated showcase of signature bakes with real photography
  const signatureIds = [
    'celebration-cakes-choco-truffle',
    'celebration-cakes-pistachio-rose',
    'wholesome-cakes-ragi-jaggery-banana-walnut',
    'celebration-cakes-mango-passion-fruit-mousse',
    'butter-icing-cakes-coffee-walnut-cake',
    'celebration-cakes-double-chocolate-brownie-cake'
  ];

  const showcaseProducts = signatureIds
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean);

  // If some are missing, fall back to first few products
  const featuredList = showcaseProducts.length >= 3 ? showcaseProducts : PRODUCTS.slice(0, 6);

  if ($('#featured')) {
    $('#featured').innerHTML = featuredList.map(card).join('');
  }

  // Visual Category Tiles
  const mainCategories = [
    { name: 'Wholesome Cakes', count: 13, note: 'Ragi, Jaggery, Wheat' },
    { name: 'Celebration Cakes', count: 29, note: 'Birthdays & Special Days' },
    { name: 'Artisan Breads', count: 8, note: 'Slow-Fermented Sourdough' },
    { name: 'Cheese Cakes', count: 15, note: 'Baked & Creamy Classics' },
    { name: 'Gluten free Cakes', count: 8, note: 'Almond & Millet Recipes' },
    { name: 'Sugar free Cakes', count: 6, note: 'Dates & Natural Sweetness' }
  ];

  if ($('#featured-categories')) {
    $('#featured-categories').innerHTML = mainCategories.map((c, i) => `
      <a class="category-tile" href="menu.html?category=${encodeURIComponent(c.name)}">
        <span class="category-number">0${i + 1}</span>
        <div class="category-info">
          <strong class="category-name">${esc(c.name)}</strong>
          <small class="category-note">${esc(c.note)}</small>
        </div>
        <span class="category-arrow">↗</span>
      </a>
    `).join('');
  }
}

// -------------------------------------------------------------
// Menu Page Initialization (menu.html)
// -------------------------------------------------------------
if ($('#products')) {
  const allCategories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
  let activeCategory = new URLSearchParams(location.search).get('category') || 'All';
  let activeDietFilter = 'all';

  if (!allCategories.includes(activeCategory)) activeCategory = 'All';

  function renderMenu() {
    const searchVal = $('#search') ? $('#search').value.trim().toLowerCase() : '';

    const filtered = PRODUCTS.filter(p => {
      // Category filter
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      if (!matchesCategory) return false;

      // Dietary filter
      if (activeDietFilter !== 'all') {
        const fullText = (p.category + ' ' + (p.subcategory || '') + ' ' + p.name + ' ' + (p.ingredients || '')).toLowerCase();
        if (activeDietFilter === 'eggless' && !fullText.includes('eggless')) return false;
        if (activeDietFilter === 'gluten-free' && !fullText.includes('gluten free') && !fullText.includes('gluten-free')) return false;
        if (activeDietFilter === 'sugar-free' && !fullText.includes('sugar free') && !fullText.includes('zero sugar') && !fullText.includes('no white sugar')) return false;
        if (activeDietFilter === 'vegan' && !fullText.includes('vegan')) return false;
        if (activeDietFilter === 'breads' && !p.category.includes('Breads') && !p.category.includes('Pizza')) return false;
      }

      // Search filter
      if (searchVal) {
        const searchable = (p.name + ' ' + p.description + ' ' + p.category + ' ' + (p.subcategory || '')).toLowerCase();
        if (!searchable.includes(searchVal)) return false;
      }

      return true;
    });

    // Render cards
    $('#products').innerHTML = filtered.length
      ? filtered.map(card).join('')
      : `<div class="empty-state">
           <p class="empty-title">No bakes found matching your search.</p>
           <p class="empty-sub">Try searching another term, clearing filters, or message us on WhatsApp for custom bakes.</p>
           <button class="btn outline" id="reset-filters-btn">Clear all filters</button>
         </div>`;

    if ($('#reset-filters-btn')) {
      $('#reset-filters-btn').addEventListener('click', () => {
        if ($('#search')) $('#search').value = '';
        activeCategory = 'All';
        activeDietFilter = 'all';
        history.replaceState(null, '', 'menu.html');
        renderMenu();
      });
    }

    // Results count
    const totalCount = PRODUCTS.length;
    if ($('#result-count')) {
      $('#result-count').textContent = `Showing ${filtered.length} of ${totalCount} handcrafted bakes`;
    }

    // Render category pills with count
    if ($('#filters')) {
      $('#filters').innerHTML = allCategories.map(c => {
        const count = c === 'All' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === c).length;
        const isSelected = c === activeCategory;
        return `<button class="pill ${isSelected ? 'active' : ''}" 
                        aria-pressed="${isSelected}" 
                        data-category="${esc(c)}">
                  ${esc(c)} <span class="pill-count">${count}</span>
                </button>`;
      }).join('');
    }
  }

  // Category filter click delegation
  if ($('#filters')) {
    $('#filters').addEventListener('click', e => {
      const btn = e.target.closest('button[data-category]');
      if (!btn) return;
      activeCategory = btn.dataset.category;
      history.replaceState(null, '', activeCategory === 'All' ? 'menu.html' : '?category=' + encodeURIComponent(activeCategory));
      renderMenu();
    });
  }

  // Dietary chips delegation
  if ($('#dietary-filters')) {
    $('#dietary-filters').addEventListener('click', e => {
      const btn = e.target.closest('button[data-diet]');
      if (!btn) return;
      $$('#dietary-filters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeDietFilter = btn.dataset.diet;
      renderMenu();
    });
  }

  // Search input with instant filter
  if ($('#search')) {
    $('#search').addEventListener('input', renderMenu);

    const clearBtn = $('#search-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        $('#search').value = '';
        renderMenu();
        $('#search').focus();
      });
    }
  }

  renderMenu();
}

// -------------------------------------------------------------
// Product Detail Page Initialization (*.html with #product-detail)
// -------------------------------------------------------------
if ($('#product-detail')) {
  const root = $('#product-detail');
  const productId = root.dataset.id;
  const p = PRODUCTS.find(x => x.id === productId);

  if (p) {
    // Document title & meta polish
    document.title = `${p.name} | Mama’s Oven`;

    const badges = getDietaryBadges(p);
    const badgesHtml = badges.map(b => `<span class="diet-pill ${b.cls}">${b.label}</span>`).join(' ');

    // Determine primary image
    const hasExplicitImage = Boolean(p.image);
    const primaryImgSrc = p.image || `images/products/${p.id}.webp`;

    // Construct gallery views
    // View 1: Bake Photo
    // View 2: Original Menu Card
    const galleryItems = [];
    galleryItems.push({
      type: 'photo',
      title: 'Bake Photo',
      src: primaryImgSrc,
      fallbackSrc: p.source
    });

    if (p.source) {
      galleryItems.push({
        type: 'menu-card',
        title: 'Original Menu Card',
        src: p.source
      });
    }

    if (Array.isArray(p.images)) {
      p.images.forEach((imgSrc, idx) => {
        galleryItems.push({
          type: 'extra',
          title: `View ${idx + 2}`,
          src: imgSrc
        });
      });
    }

    // Related bakes from same category
    const relatedBakes = PRODUCTS
      .filter(item => item.category === p.category && item.id !== p.id)
      .slice(0, 3);

    root.innerHTML = `
      <div class="product-gallery-col">
        <div class="gallery-frame">
          <img id="main-gallery-img" 
               class="gallery-main" 
               src="${esc(primaryImgSrc)}" 
               alt="${esc(p.name)}" 
               onerror="if(!this.dataset.triedFallback){ this.dataset.triedFallback='true'; this.src='${esc(p.source)}'; document.getElementById('gallery-note').textContent='Original bakery menu card listing shown below.'; }">
          <span class="gallery-badge" id="gallery-badge">Authentic Bake</span>
        </div>

        <div class="gallery-thumbs" id="gallery-thumbs">
          ${galleryItems.map((item, i) => `
            <button type="button" 
                    class="thumb-btn ${i === 0 ? 'active' : ''}" 
                    data-src="${esc(item.src)}" 
                    data-title="${esc(item.title)}" 
                    aria-label="${esc(item.title)}">
              <img src="${esc(item.src)}" alt="${esc(item.title)}" onerror="this.src='${esc(p.source)}'">
              <span class="thumb-label">${esc(item.title)}</span>
            </button>
          `).join('')}
        </div>

        <p class="small text-muted" id="gallery-note">
          Tap thumbnails to toggle between bake photo and original menu card listing.
        </p>

        <a class="menu-source-link" href="${esc(p.source)}" target="_blank" rel="noopener">
          🔍 View full-resolution original menu card ↗
        </a>
      </div>

      <div class="product-info-col">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <a href="index.html">Home</a>
          <span class="sep">/</span>
          <a href="menu.html">Menu</a>
          <span class="sep">/</span>
          <a href="menu.html?category=${encodeURIComponent(p.category)}">${esc(p.category)}</a>
        </nav>

        <div class="product-header">
          <div class="eyebrow">${esc(p.category)}</div>
          <h1 class="product-title">${esc(p.name)}</h1>
          ${badgesHtml ? `<div class="diet-badges detail-badges">${badgesHtml}</div>` : ''}
        </div>

        <p class="product-description">${esc(p.description)}</p>

        <div class="product-pricing-box">
          <span class="price-lead">Listed Price:</span>
          <span class="price-val">${priceLabel(p)}</span>
          <span class="price-unit">${p.price === null ? '' : `/ ${esc(p.unit)}`}</span>
        </div>

        <form id="order-form" class="order-calculator">
          <h3 class="form-title">Customize & Enquire</h3>

          <div class="fields-grid">
            <label class="form-group">
              <span class="label-text">Select Weight / Size:</span>
              <select id="size" class="form-input">
                ${p.sizes.map((s, i) => `<option value="${i}">${esc(s.label)}</option>`).join('')}
              </select>
            </label>

            <label class="form-group">
              <span class="label-text">Recipe Preference:</span>
              <select id="recipe" class="form-input">
                ${p.options.map(s => `<option>${esc(s)}</option>`).join('')}
              </select>
            </label>

            <label class="form-group">
              <span class="label-text">Quantity:</span>
              <div class="quantity-control">
                <button type="button" id="qty-minus" class="qty-btn" aria-label="Decrease quantity">−</button>
                <input id="quantity" type="number" class="form-input qty-input" value="1" min="1" max="50" step="1" required>
                <button type="button" id="qty-plus" class="qty-btn" aria-label="Increase quantity">+</button>
              </div>
            </label>

            <label class="form-group">
              <span class="label-text">Requested Delivery / Pickup Date:</span>
              <input id="date" type="datetime-local" class="form-input">
            </label>

            <label class="form-group full-width">
              <span class="label-text">Message on Cake / Custom Notes:</span>
              <textarea id="message" class="form-input form-textarea" rows="2" maxlength="250" placeholder="e.g. 'Happy 30th Birthday Rahul!', dietary notes, or topper requests..."></textarea>
            </label>
          </div>

          <div class="order-summary-box">
            <div class="summary-line">
              <span>Estimated Total:</span>
              <strong class="total-price" id="total" aria-live="polite"></strong>
            </div>
            <p class="small note-text">Listed menu price. Custom theme designs, delivery charges, and final slot confirmation are handled personally on WhatsApp.</p>
          </div>

          <button class="btn wa-submit-btn" type="submit">
            ${waIconSvg} <span>Enquire & Order on WhatsApp ↗</span>
          </button>
        </form>

        <div class="faq-accordion">
          <details>
            <summary>Ingredients & Dietary Suitability</summary>
            <div class="faq-content">
              <p>${esc(p.ingredients)}</p>
              <p class="small text-muted">Please notify us of any severe allergies before ordering. All bakes are prepared in an artisanal kitchen handling wheat, nuts, and dairy.</p>
            </div>
          </details>

          <details>
            <summary>Customization, Lead Time & Delivery</summary>
            <div class="faq-content">
              <p>We recommend pre-ordering celebration cakes at least 24–48 hours in advance. Freshly baked breads and standard tea cakes are subject to daily oven batches.</p>
              <p>Home delivery across Kozhikode and studio pickup can be scheduled via WhatsApp.</p>
            </div>
          </details>
        </div>
      </div>
    `;

    // Inject related bakes section below product details if available
    if (relatedBakes.length) {
      const relatedSection = document.createElement('section');
      relatedSection.className = 'wrap section related-bakes';
      relatedSection.innerHTML = `
        <div class="section-title">
          <div>
            <div class="eyebrow">More From ${esc(p.category)}</div>
            <h2>You might also <em>love.</em></h2>
          </div>
          <a href="menu.html?category=${encodeURIComponent(p.category)}">View all in ${esc(p.category)} ↗</a>
        </div>
        <div class="grid">${relatedBakes.map(card).join('')}</div>
      `;
      root.parentElement.appendChild(relatedSection);
    }

    // Set minimum date picker to current local time + 2 hours
    const dateInput = $('#date');
    if (dateInput) {
      const now = new Date(Date.now() + 2 * 60 * 60 * 1000);
      dateInput.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
    }

    // Thumbnail switching logic
    const mainImg = $('#main-gallery-img');
    const badge = $('#gallery-badge');
    const thumbs = $$('.thumb-btn');

    thumbs.forEach(btn => {
      btn.addEventListener('click', () => {
        thumbs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (mainImg) {
          mainImg.src = btn.dataset.src;
          if (badge) {
            badge.textContent = btn.dataset.title.includes('Menu') ? 'Menu Card Reference' : 'Bake Photo';
          }
        }
      });
    });

    // Quantity buttons
    const qtyInput = $('#quantity');
    const minusBtn = $('#qty-minus');
    const plusBtn = $('#qty-plus');

    if (minusBtn && qtyInput) {
      minusBtn.addEventListener('click', () => {
        const val = parseInt(qtyInput.value, 10) || 1;
        if (val > 1) {
          qtyInput.value = val - 1;
          updateTotal();
        }
      });
    }

    if (plusBtn && qtyInput) {
      plusBtn.addEventListener('click', () => {
        const val = parseInt(qtyInput.value, 10) || 1;
        qtyInput.value = val + 1;
        updateTotal();
      });
    }

    // Dynamic price calculation
    function calcTotal() {
      const sizeIdx = Number($('#size') ? $('#size').value : 0);
      const qty = Math.max(1, Number($('#quantity') ? $('#quantity').value : 1));
      const unitCost = selectedPrice(p, sizeIdx);
      return unitCost === null ? null : unitCost * qty;
    }

    function updateTotal() {
      const totalAmount = calcTotal();
      const totalEl = $('#total');
      if (totalEl) {
        totalEl.textContent = totalAmount === null ? 'Price on request' : money(totalAmount);
      }
    }

    const orderForm = $('#order-form');
    if (orderForm) {
      orderForm.addEventListener('input', updateTotal);
      orderForm.addEventListener('change', updateTotal);

      orderForm.addEventListener('submit', e => {
        e.preventDefault();
        if (!e.currentTarget.reportValidity()) return;

        const sizeIdx = Number($('#size').value);
        const sizeLabel = p.sizes[sizeIdx] ? p.sizes[sizeIdx].label : p.unit;
        const recipeChoice = $('#recipe').value;
        const quantity = Number($('#quantity').value);
        const message = $('#message').value;
        const dateVal = $('#date').value;
        const total = calcTotal();

        const waUrl = wa(orderMessage(p, sizeLabel, recipeChoice, quantity, message, dateVal, total));
        window.open(waUrl, '_blank', 'noopener');
      });
    }

    updateTotal();
  } else {
    root.innerHTML = `
      <div class="empty-state wrap">
        <h1>Bake Not Found</h1>
        <p>The bake you are looking for may have been updated or moved.</p>
        <a class="btn" href="menu.html">Explore our complete menu ↗</a>
      </div>
    `;
  }
}
