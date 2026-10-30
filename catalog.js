/* OWNER: edit products, prices, photos and recipe options here. All entries are sample catalog data. */
const CONFIG = {
  "phone": "919745762111",
  "formattedPhone": "+91 97457 62111",
  "special": "Freshly baked artisan cakes & sourdough breads daily. Handcrafted with love.",
  "address": "Mama’s Oven Studio · Kozhikode, Kerala · Citywide Delivery & Pickup",
  "hours": "Tue – Sun: 9:30 AM – 8:00 PM · Custom orders 24–48h in advance",
  "instagram": "mamasoven",
  "email": "orders@mamasoven.in"
};
const PRODUCTS = [
  {
    "id": "wholesome-cakes-ragi-jaggery-banana-walnut",
    "name": "Ragi Jaggery Banana Walnut",
    "category": "Wholesome Cakes",
    "subcategory": "No maida; no white sugar; with jaggery",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-1.webp",
    "image": "images/products/wholesome-cakes-ragi-jaggery-banana-walnut.webp",
    "description": "No maida; no white sugar; with jaggery. From Mama’s Oven’s wholesome cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 1
  },
  {
    "id": "wholesome-cakes-wheat-chocolate-cake-butter-icing",
    "name": "Wheat Chocolate Cake (butter icing)",
    "category": "Wholesome Cakes",
    "subcategory": "No maida; no white sugar; with jaggery",
    "price": 1700,
    "unit": "1 kg",
    "source": "images/menu-1.webp",
    "image": "images/products/wholesome-cakes-wheat-chocolate-cake-butter-icing.webp",
    "description": "No maida; no white sugar; with jaggery. From Mama’s Oven’s wholesome cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 1
  },
  {
    "id": "wholesome-cakes-wheat-oats-pineapple-delight",
    "name": "Wheat Oats Pineapple Delight",
    "category": "Wholesome Cakes",
    "subcategory": "No maida; no white sugar; with jaggery",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-1.webp",
    "image": "images/products/wholesome-cakes-wheat-oats-pineapple-delight.webp",
    "description": "No maida; no white sugar; with jaggery. From Mama’s Oven’s wholesome cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 1
  },
  {
    "id": "wholesome-cakes-pearl-millet-carrot-banana",
    "name": "Pearl Millet Carrot & Banana",
    "category": "Wholesome Cakes",
    "subcategory": "No maida; no white sugar; with jaggery",
    "price": 1550,
    "unit": "1 kg",
    "source": "images/menu-1.webp",
    "image": "images/products/wholesome-cakes-pearl-millet-carrot-banana.webp",
    "description": "No maida; no white sugar; with jaggery. From Mama’s Oven’s wholesome cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 1
  },
  {
    "id": "wholesome-cakes-dates-nuts-wheat",
    "name": "Dates & Nuts Wheat",
    "category": "Wholesome Cakes",
    "subcategory": "No maida; no white sugar; with jaggery",
    "price": 1650,
    "unit": "1 kg",
    "source": "images/menu-1.webp",
    "image": "images/products/wholesome-cakes-dates-nuts-wheat.webp",
    "description": "No maida; no white sugar; with jaggery. From Mama’s Oven’s wholesome cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 1
  },
  {
    "id": "wholesome-cakes-pearl-millet-chocolate",
    "name": "Pearl Millet Chocolate",
    "category": "Wholesome Cakes",
    "subcategory": "No maida; no white sugar; with jaggery",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-1.webp",
    "image": "images/products/wholesome-cakes-pearl-millet-chocolate.webp",
    "description": "No maida; no white sugar; with jaggery. From Mama’s Oven’s wholesome cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 1
  },
  {
    "id": "wholesome-cakes-fig-walnut-whole-wheat",
    "name": "Fig & Walnut Whole Wheat",
    "category": "Wholesome Cakes",
    "subcategory": "No maida; no white sugar; with jaggery",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-1.webp",
    "image": "images/products/wholesome-cakes-fig-walnut-whole-wheat.webp",
    "description": "No maida; no white sugar; with jaggery. From Mama’s Oven’s wholesome cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 1
  },
  {
    "id": "wholesome-cakes-wheat-biscoff-jaggery",
    "name": "Wheat Biscoff Jaggery",
    "category": "Wholesome Cakes",
    "subcategory": "No maida; no white sugar; with jaggery",
    "price": 1700,
    "unit": "1 kg",
    "source": "images/menu-1.webp",
    "image": "images/products/wholesome-cakes-wheat-biscoff-jaggery.webp",
    "description": "No maida; no white sugar; with jaggery. From Mama’s Oven’s wholesome cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 1
  },
  {
    "id": "wholesome-cakes-multigrain-nutty",
    "name": "Multigrain Nutty",
    "category": "Wholesome Cakes",
    "subcategory": "No maida; no white sugar; with jaggery",
    "price": 1700,
    "unit": "1 kg",
    "source": "images/menu-1.webp",
    "image": "images/products/wholesome-cakes-multigrain-nutty.webp",
    "description": "No maida; no white sugar; with jaggery. From Mama’s Oven’s wholesome cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 1
  },
  {
    "id": "wholesome-cakes-wheat-butter-cookies",
    "name": "Wheat Butter Cookies",
    "category": "Wholesome Cakes",
    "subcategory": "No maida; no white sugar; with jaggery",
    "price": 550,
    "unit": "500 g",
    "source": "images/menu-1.webp",
    "image": "images/products/wholesome-cakes-wheat-butter-cookies.webp",
    "description": "No maida; no white sugar; with jaggery. From Mama’s Oven’s wholesome cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "500 g",
        "factor": 1
      }
    ],
    "menuSource": 1
  },
  {
    "id": "wholesome-cakes-oats-nuts-cookies",
    "name": "Oats Nuts Cookies",
    "category": "Wholesome Cakes",
    "subcategory": "No maida; no white sugar; with jaggery",
    "price": 550,
    "unit": "500 g",
    "source": "images/menu-1.webp",
    "image": "images/products/wholesome-cakes-oats-nuts-cookies.webp",
    "description": "No maida; no white sugar; with jaggery. From Mama’s Oven’s wholesome cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "500 g",
        "factor": 1
      }
    ],
    "menuSource": 1
  },
  {
    "id": "wholesome-cakes-almond-wheat-cookies",
    "name": "Almond Wheat Cookies",
    "category": "Wholesome Cakes",
    "subcategory": "No maida; no white sugar; with jaggery",
    "price": 650,
    "unit": "500 g",
    "source": "images/menu-1.webp",
    "image": "images/products/wholesome-cakes-almond-wheat-cookies.webp",
    "description": "No maida; no white sugar; with jaggery. From Mama’s Oven’s wholesome cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "500 g",
        "factor": 1
      }
    ],
    "menuSource": 1
  },
  {
    "id": "wholesome-cakes-ragi-double-chocolate-brownie",
    "name": "Ragi Double Chocolate Brownie",
    "category": "Wholesome Cakes",
    "subcategory": "No maida; no white sugar; with jaggery",
    "price": 950,
    "unit": "500 g",
    "source": "images/menu-1.webp",
    "image": "images/products/wholesome-cakes-ragi-double-chocolate-brownie.webp",
    "description": "No maida; no white sugar; with jaggery. From Mama’s Oven’s wholesome cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "500 g",
        "factor": 1
      }
    ],
    "menuSource": 1
  },
  {
    "id": "gluten-free-cakes-ragi-jaggery-banana-walnut",
    "name": "Ragi Jaggery Banana Walnut",
    "category": "Gluten free Cakes",
    "subcategory": "No maida; no wheat",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-2.webp",
    "image": "images/products/gluten-free-cakes-ragi-jaggery-banana-walnut.webp",
    "description": "No maida; no wheat. From Mama’s Oven’s gluten free cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 2
  },
  {
    "id": "gluten-free-cakes-sweet-potato-bajra",
    "name": "Sweet Potato Bajra",
    "category": "Gluten free Cakes",
    "subcategory": "No maida; no wheat",
    "price": 1550,
    "unit": "1 kg",
    "source": "images/menu-2.webp",
    "image": "images/products/gluten-free-cakes-sweet-potato-bajra.webp",
    "description": "No maida; no wheat. From Mama’s Oven’s gluten free cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 2
  },
  {
    "id": "gluten-free-cakes-almond-flour-chocolate",
    "name": "Almond Flour Chocolate",
    "category": "Gluten free Cakes",
    "subcategory": "No maida; no wheat",
    "price": 1900,
    "unit": "1 kg",
    "source": "images/menu-2.webp",
    "image": "images/products/gluten-free-cakes-almond-flour-chocolate.webp",
    "description": "No maida; no wheat. From Mama’s Oven’s gluten free cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 2
  },
  {
    "id": "gluten-free-cakes-ragi-oats-dates-jaggery",
    "name": "Ragi Oats & Dates Jaggery",
    "category": "Gluten free Cakes",
    "subcategory": "No maida; no wheat",
    "price": 1250,
    "unit": "1 kg",
    "source": "images/menu-2.webp",
    "image": "images/products/gluten-free-cakes-ragi-oats-dates-jaggery.webp",
    "description": "No maida; no wheat. From Mama’s Oven’s gluten free cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 2
  },
  {
    "id": "gluten-free-cakes-ragi-chocolate",
    "name": "Ragi Chocolate",
    "category": "Gluten free Cakes",
    "subcategory": "No maida; no wheat",
    "price": 1500,
    "unit": "1 kg",
    "source": "images/menu-2.webp",
    "image": "images/products/gluten-free-cakes-ragi-chocolate.webp",
    "description": "No maida; no wheat. From Mama’s Oven’s gluten free cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 2
  },
  {
    "id": "gluten-free-cakes-pearl-millet-carrot",
    "name": "Pearl Millet Carrot",
    "category": "Gluten free Cakes",
    "subcategory": "No maida; no wheat",
    "price": 1550,
    "unit": "1 kg",
    "source": "images/menu-2.webp",
    "image": "images/products/gluten-free-cakes-pearl-millet-carrot.webp",
    "description": "No maida; no wheat. From Mama’s Oven’s gluten free cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 2
  },
  {
    "id": "gluten-free-cakes-almond-flour-honey-vanilla",
    "name": "Almond Flour Honey Vanilla",
    "category": "Gluten free Cakes",
    "subcategory": "No maida; no wheat",
    "price": 1900,
    "unit": "1 kg",
    "source": "images/menu-2.webp",
    "image": "images/products/gluten-free-cakes-almond-flour-honey-vanilla.webp",
    "description": "No maida; no wheat. From Mama’s Oven’s gluten free cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 2
  },
  {
    "id": "gluten-free-cakes-gluten-free-ragi-plum",
    "name": "Gluten free Ragi Plum",
    "category": "Gluten free Cakes",
    "subcategory": "No maida; no wheat",
    "price": 2300,
    "unit": "1 kg",
    "source": "images/menu-2.webp",
    "image": "images/products/gluten-free-cakes-gluten-free-ragi-plum.webp",
    "description": "No maida; no wheat. From Mama’s Oven’s gluten free cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 2
  },
  {
    "id": "sugar-free-cakes-vanilla-cake-with-butter-icing",
    "name": "Vanilla Cake with Butter Icing",
    "category": "Sugar free Cakes",
    "subcategory": "",
    "price": 1650,
    "unit": "1 kg",
    "source": "images/menu-3.webp",
    "image": "images/products/sugar-free-cakes-vanilla-cake-with-butter-icing.webp",
    "description": "From Mama’s Oven’s sugar free cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 3
  },
  {
    "id": "sugar-free-cakes-chocolate-cake-with-butter-icing",
    "name": "Chocolate Cake with Butter Icing",
    "category": "Sugar free Cakes",
    "subcategory": "",
    "price": 1900,
    "unit": "1 kg",
    "source": "images/menu-3.webp",
    "image": "images/products/sugar-free-cakes-chocolate-cake-with-butter-icing.webp",
    "description": "From Mama’s Oven’s sugar free cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 3
  },
  {
    "id": "sugar-free-cakes-pineapple-cake",
    "name": "Pineapple Cake",
    "category": "Sugar free Cakes",
    "subcategory": "",
    "price": 1700,
    "unit": "1 kg",
    "source": "images/menu-3.webp",
    "image": "images/products/sugar-free-cakes-pineapple-cake.webp",
    "description": "From Mama’s Oven’s sugar free cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 3
  },
  {
    "id": "sugar-free-cakes-dates-cake",
    "name": "Dates Cake",
    "category": "Sugar free Cakes",
    "subcategory": "",
    "price": 1650,
    "unit": "1 kg",
    "source": "images/menu-3.webp",
    "image": "images/products/sugar-free-cakes-dates-cake.webp",
    "description": "From Mama’s Oven’s sugar free cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 3
  },
  {
    "id": "sugar-free-cakes-zero-sugar-dates-nuts",
    "name": "Zero Sugar Dates & Nuts",
    "category": "Sugar free Cakes",
    "subcategory": "",
    "price": 1000,
    "unit": "1 kg",
    "source": "images/menu-3.webp",
    "image": "images/products/sugar-free-cakes-zero-sugar-dates-nuts.webp",
    "description": "From Mama’s Oven’s sugar free cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 3
  },
  {
    "id": "sugar-free-cakes-cashew-cookies",
    "name": "Cashew Cookies",
    "category": "Sugar free Cakes",
    "subcategory": "",
    "price": 1300,
    "unit": "1 kg",
    "source": "images/menu-3.webp",
    "image": "images/products/sugar-free-cakes-cashew-cookies.webp",
    "description": "From Mama’s Oven’s sugar free cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 3
  },
  {
    "id": "vegan-cakes-chocolate-ganache",
    "name": "Chocolate Ganache",
    "category": "Vegan Cakes",
    "subcategory": "No eggs; no dairy",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-4.webp",
    "image": "images/products/vegan-cakes-chocolate-ganache.webp",
    "description": "No eggs; no dairy. From Mama’s Oven’s vegan cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Vegan"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 4
  },
  {
    "id": "vegan-cakes-vanilla-white-chocolate-ganache",
    "name": "Vanilla & White Chocolate Ganache",
    "category": "Vegan Cakes",
    "subcategory": "No eggs; no dairy",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-4.webp",
    "image": "images/products/vegan-cakes-vanilla-white-chocolate-ganache.webp",
    "description": "No eggs; no dairy. From Mama’s Oven’s vegan cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Vegan"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 4
  },
  {
    "id": "vegan-cakes-almond-coconut",
    "name": "Almond Coconut",
    "category": "Vegan Cakes",
    "subcategory": "No eggs; no dairy",
    "price": 1900,
    "unit": "1 kg",
    "source": "images/menu-4.webp",
    "image": "images/products/vegan-cakes-almond-coconut.webp",
    "description": "No eggs; no dairy. From Mama’s Oven’s vegan cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Vegan"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 4
  },
  {
    "id": "vegan-cakes-carrot-nuts",
    "name": "Carrot Nuts",
    "category": "Vegan Cakes",
    "subcategory": "No eggs; no dairy",
    "price": 1400,
    "unit": "1 kg",
    "source": "images/menu-4.webp",
    "image": "images/products/vegan-cakes-carrot-nuts.webp",
    "description": "No eggs; no dairy. From Mama’s Oven’s vegan cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Vegan"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 4
  },
  {
    "id": "vegan-cakes-butterscotch",
    "name": "Butterscotch",
    "category": "Vegan Cakes",
    "subcategory": "No eggs; no dairy",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-4.webp",
    "image": "images/products/vegan-cakes-butterscotch.webp",
    "description": "No eggs; no dairy. From Mama’s Oven’s vegan cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Vegan"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 4
  },
  {
    "id": "vegan-cakes-dates",
    "name": "Dates",
    "category": "Vegan Cakes",
    "subcategory": "No eggs; no dairy",
    "price": 1550,
    "unit": "1 kg",
    "source": "images/menu-4.webp",
    "image": "images/products/vegan-cakes-dates.webp",
    "description": "No eggs; no dairy. From Mama’s Oven’s vegan cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Vegan"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 4
  },
  {
    "id": "vegan-cakes-vegan-plum",
    "name": "Vegan Plum",
    "category": "Vegan Cakes",
    "subcategory": "No eggs; no dairy",
    "price": 1800,
    "unit": "1 kg",
    "source": "images/menu-4.webp",
    "image": "images/products/vegan-cakes-vegan-plum.webp",
    "description": "No eggs; no dairy. From Mama’s Oven’s vegan cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Vegan"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 4
  },
  {
    "id": "fresh-cream-cakes-choco-truffle",
    "name": "Choco Truffle",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1050,
    "unit": "1 kg",
    "source": "images/menu-5.webp",
    "image": "images/products/fresh-cream-cakes-choco-truffle.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 5
  },
  {
    "id": "fresh-cream-cakes-nutty-butterscotch",
    "name": "Nutty Butterscotch",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1150,
    "unit": "1 kg",
    "source": "images/menu-5.webp",
    "image": "images/products/fresh-cream-cakes-nutty-butterscotch.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 5
  },
  {
    "id": "fresh-cream-cakes-white-chocolate-mocha",
    "name": "White Chocolate Mocha",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1100,
    "unit": "1 kg",
    "source": "images/menu-5.webp",
    "image": "images/products/fresh-cream-cakes-white-chocolate-mocha.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 5
  },
  {
    "id": "fresh-cream-cakes-spanish-delight",
    "name": "Spanish Delight",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1450,
    "unit": "1 kg",
    "source": "images/menu-5.webp",
    "image": "images/products/fresh-cream-cakes-spanish-delight.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 5
  },
  {
    "id": "fresh-cream-cakes-premium-choco-truffle",
    "name": "Premium Choco Truffle",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1500,
    "unit": "1 kg",
    "source": "images/menu-5.webp",
    "image": "images/products/fresh-cream-cakes-premium-choco-truffle.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 5
  },
  {
    "id": "fresh-cream-cakes-pineapple",
    "name": "Pineapple",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1000,
    "unit": "1 kg",
    "source": "images/menu-5.webp",
    "image": "images/products/fresh-cream-cakes-pineapple.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 5
  },
  {
    "id": "fresh-cream-cakes-red-velvet",
    "name": "Red Velvet",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1000,
    "unit": "1 kg",
    "source": "images/menu-5.webp",
    "image": "images/products/fresh-cream-cakes-red-velvet.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 5
  },
  {
    "id": "fresh-cream-cakes-black-forest",
    "name": "Black Forest",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 750,
    "unit": "1 kg",
    "source": "images/menu-5.webp",
    "image": "images/products/fresh-cream-cakes-black-forest.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 5
  },
  {
    "id": "fresh-cream-cakes-white-forest",
    "name": "White Forest",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 800,
    "unit": "1 kg",
    "source": "images/menu-5.webp",
    "image": "images/products/fresh-cream-cakes-white-forest.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 5
  },
  {
    "id": "fresh-cream-cakes-strawberry",
    "name": "Strawberry",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 900,
    "unit": "1 kg",
    "source": "images/menu-5.webp",
    "image": "images/products/fresh-cream-cakes-strawberry.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 5
  },
  {
    "id": "fresh-cream-cakes-blueberry",
    "name": "Blueberry",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1000,
    "unit": "1 kg",
    "source": "images/menu-5.webp",
    "image": "images/products/fresh-cream-cakes-blueberry.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 5
  },
  {
    "id": "fresh-cream-cakes-chocolate-mocha",
    "name": "Chocolate Mocha",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 950,
    "unit": "1 kg",
    "source": "images/menu-5.webp",
    "image": "images/products/fresh-cream-cakes-chocolate-mocha.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 5
  },
  {
    "id": "fresh-cream-cakes-vancho",
    "name": "Vancho",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1200,
    "unit": "1 kg",
    "source": "images/menu-5.webp",
    "image": "images/products/fresh-cream-cakes-vancho.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 5
  },
  {
    "id": "fresh-cream-cakes-red-b",
    "name": "Red B",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1200,
    "unit": "1 kg",
    "source": "images/menu-5.webp",
    "image": "images/products/fresh-cream-cakes-red-b.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 5
  },
  {
    "id": "fresh-cream-cakes-caramel-praline",
    "name": "Caramel Praline",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1150,
    "unit": "1 kg",
    "source": "images/menu-5.webp",
    "image": "images/products/fresh-cream-cakes-caramel-praline.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 5
  },
  {
    "id": "fresh-cream-cakes-nutty-bubble",
    "name": "Nutty Bubble",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1200,
    "unit": "1 kg",
    "source": "images/menu-7.webp",
    "image": "images/products/fresh-cream-cakes-nutty-bubble.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 7
  },
  {
    "id": "fresh-cream-cakes-rasamalai",
    "name": "Rasamalai",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-7.webp",
    "image": "images/products/fresh-cream-cakes-rasamalai.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 7
  },
  {
    "id": "fresh-cream-cakes-kitkat",
    "name": "Kitkat",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1650,
    "unit": "1 kg",
    "source": "images/menu-7.webp",
    "image": "images/products/fresh-cream-cakes-kitkat.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 7
  },
  {
    "id": "fresh-cream-cakes-lotus-biscoff",
    "name": "Lotus Biscoff",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1650,
    "unit": "1 kg",
    "source": "images/menu-7.webp",
    "image": "images/products/fresh-cream-cakes-lotus-biscoff.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 7
  },
  {
    "id": "fresh-cream-cakes-ferraro-rocher",
    "name": "Ferraro Rocher",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1800,
    "unit": "1 kg",
    "source": "images/menu-7.webp",
    "image": "images/products/fresh-cream-cakes-ferraro-rocher.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 7
  },
  {
    "id": "fresh-cream-cakes-rose-milk-tres-leches",
    "name": "Rose Milk Tres Leches",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1400,
    "unit": "1 kg",
    "source": "images/menu-7.webp",
    "image": "images/products/fresh-cream-cakes-rose-milk-tres-leches.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 7
  },
  {
    "id": "fresh-cream-cakes-german-chocolate",
    "name": "German Chocolate",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1750,
    "unit": "1 kg",
    "source": "images/menu-7.webp",
    "image": "images/products/fresh-cream-cakes-german-chocolate.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 7
  },
  {
    "id": "fresh-cream-cakes-tender-coconut",
    "name": "Tender Coconut",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-7.webp",
    "image": "images/products/fresh-cream-cakes-tender-coconut.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 7
  },
  {
    "id": "fresh-cream-cakes-russian-honey",
    "name": "Russian Honey",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1700,
    "unit": "1 kg",
    "source": "images/menu-7.webp",
    "image": "images/products/fresh-cream-cakes-russian-honey.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 7
  },
  {
    "id": "fresh-cream-cakes-chocolate-butter-icing",
    "name": "Chocolate (Butter Icing)",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1050,
    "unit": "1 kg",
    "source": "images/menu-7.webp",
    "image": "images/products/fresh-cream-cakes-chocolate-butter-icing.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 7
  },
  {
    "id": "fresh-cream-cakes-vanilla-butter-icing",
    "name": "Vanilla (Butter Icing)",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1000,
    "unit": "1 kg",
    "source": "images/menu-7.webp",
    "image": "images/products/fresh-cream-cakes-vanilla-butter-icing.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 7
  },
  {
    "id": "fresh-cream-cakes-chocolate-jaggery-butter-icing",
    "name": "Chocolate (Jaggery Butter Icing)",
    "category": "Fresh Cream Cakes",
    "subcategory": "",
    "price": 1200,
    "unit": "1 kg",
    "source": "images/menu-7.webp",
    "image": "images/products/fresh-cream-cakes-chocolate-jaggery-butter-icing.webp",
    "description": "From Mama’s Oven’s fresh cream cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 7
  },
  {
    "id": "butter-icing-cakes-vanilla-cake",
    "name": "Vanilla Cake",
    "category": "Butter Icing Cakes",
    "subcategory": "",
    "price": 1450,
    "unit": "1 kg",
    "source": "images/menu-6.webp",
    "image": "images/products/butter-icing-cakes-vanilla-cake.webp",
    "description": "From Mama’s Oven’s butter icing cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 6
  },
  {
    "id": "butter-icing-cakes-chocolate-cake-white-icing",
    "name": "Chocolate Cake (white icing)",
    "category": "Butter Icing Cakes",
    "subcategory": "",
    "price": 1550,
    "unit": "1 kg",
    "source": "images/menu-6.webp",
    "image": "images/products/butter-icing-cakes-chocolate-cake-white-icing.webp",
    "description": "From Mama’s Oven’s butter icing cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 6
  },
  {
    "id": "butter-icing-cakes-chocolate-cake-chocolate-icing",
    "name": "Chocolate Cake (chocolate icing)",
    "category": "Butter Icing Cakes",
    "subcategory": "",
    "price": 1650,
    "unit": "1 kg",
    "source": "images/menu-6.webp",
    "image": "images/products/butter-icing-cakes-chocolate-cake-chocolate-icing.webp",
    "description": "From Mama’s Oven’s butter icing cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 6
  },
  {
    "id": "butter-icing-cakes-nutty-butter-scotch",
    "name": "Nutty Butter scotch",
    "category": "Butter Icing Cakes",
    "subcategory": "",
    "price": 1850,
    "unit": "1 kg",
    "source": "images/menu-6.webp",
    "image": "images/products/butter-icing-cakes-nutty-butter-scotch.webp",
    "description": "From Mama’s Oven’s butter icing cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 6
  },
  {
    "id": "butter-icing-cakes-vanilla-cake-strawberry-compote",
    "name": "Vanilla Cake – Strawberry compote",
    "category": "Butter Icing Cakes",
    "subcategory": "",
    "price": 1900,
    "unit": "1 kg",
    "source": "images/menu-6.webp",
    "image": "images/products/butter-icing-cakes-vanilla-cake-strawberry-compote.webp",
    "description": "From Mama’s Oven’s butter icing cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 6
  },
  {
    "id": "butter-icing-cakes-vanilla-cake-blueberry-compote",
    "name": "Vanilla Cake – Blueberry compote",
    "category": "Butter Icing Cakes",
    "subcategory": "",
    "price": 2200,
    "unit": "1 kg",
    "source": "images/menu-6.webp",
    "image": "images/products/butter-icing-cakes-vanilla-cake-blueberry-compote.webp",
    "description": "From Mama’s Oven’s butter icing cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 6
  },
  {
    "id": "butter-icing-cakes-coffee-walnut-cake",
    "name": "Coffee & Walnut Cake",
    "category": "Butter Icing Cakes",
    "subcategory": "",
    "price": 1900,
    "unit": "1 kg",
    "source": "images/menu-6.webp",
    "image": "images/products/butter-icing-cakes-coffee-walnut-cake.webp",
    "description": "From Mama’s Oven’s butter icing cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 6
  },
  {
    "id": "tea-cakes-dates-carrot-cake",
    "name": "Dates & Carrot Cake",
    "category": "Tea Cakes",
    "subcategory": "",
    "price": 800,
    "unit": "1 kg",
    "source": "images/menu-8.webp",
    "image": "images/products/tea-cakes-dates-carrot-cake.webp",
    "description": "From Mama’s Oven’s tea cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 8
  },
  {
    "id": "tea-cakes-dates-cake",
    "name": "Dates Cake",
    "category": "Tea Cakes",
    "subcategory": "",
    "price": 800,
    "unit": "1 kg",
    "source": "images/menu-8.webp",
    "image": "images/products/tea-cakes-dates-cake.webp",
    "description": "From Mama’s Oven’s tea cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 8
  },
  {
    "id": "tea-cakes-carrot-cake",
    "name": "Carrot Cake",
    "category": "Tea Cakes",
    "subcategory": "",
    "price": 750,
    "unit": "1 kg",
    "source": "images/menu-8.webp",
    "image": "images/products/tea-cakes-carrot-cake.webp",
    "description": "From Mama’s Oven’s tea cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 8
  },
  {
    "id": "tea-cakes-butter-cake",
    "name": "Butter Cake",
    "category": "Tea Cakes",
    "subcategory": "",
    "price": 800,
    "unit": "1 kg",
    "source": "images/menu-8.webp",
    "image": "images/products/tea-cakes-butter-cake.webp",
    "description": "From Mama’s Oven’s tea cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 8
  },
  {
    "id": "tea-cakes-caramel-tea-cake",
    "name": "Caramel Tea Cake",
    "category": "Tea Cakes",
    "subcategory": "",
    "price": 750,
    "unit": "1 kg",
    "source": "images/menu-8.webp",
    "image": "images/products/tea-cakes-caramel-tea-cake.webp",
    "description": "From Mama’s Oven’s tea cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 8
  },
  {
    "id": "tea-cakes-ghee-cake",
    "name": "Ghee Cake",
    "category": "Tea Cakes",
    "subcategory": "",
    "price": 1050,
    "unit": "1 kg",
    "source": "images/menu-8.webp",
    "image": "images/products/tea-cakes-ghee-cake.webp",
    "description": "From Mama’s Oven’s tea cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 8
  },
  {
    "id": "tea-cakes-marble-cake",
    "name": "Marble Cake",
    "category": "Tea Cakes",
    "subcategory": "",
    "price": 800,
    "unit": "1 kg",
    "source": "images/menu-8.webp",
    "image": "images/products/tea-cakes-marble-cake.webp",
    "description": "From Mama’s Oven’s tea cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 8
  },
  {
    "id": "tea-cakes-chocolate-sponge-cake",
    "name": "Chocolate Sponge Cake",
    "category": "Tea Cakes",
    "subcategory": "",
    "price": 700,
    "unit": "1 kg",
    "source": "images/menu-8.webp",
    "image": "images/products/tea-cakes-chocolate-sponge-cake.webp",
    "description": "From Mama’s Oven’s tea cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 8
  },
  {
    "id": "tea-cakes-pineapple-cake",
    "name": "Pineapple Cake",
    "category": "Tea Cakes",
    "subcategory": "",
    "price": 750,
    "unit": "1 kg",
    "source": "images/menu-8.webp",
    "image": "images/products/tea-cakes-pineapple-cake.webp",
    "description": "From Mama’s Oven’s tea cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 8
  },
  {
    "id": "tea-cakes-strawberry-cake",
    "name": "Strawberry Cake",
    "category": "Tea Cakes",
    "subcategory": "",
    "price": 850,
    "unit": "1 kg",
    "source": "images/menu-8.webp",
    "image": "images/products/tea-cakes-strawberry-cake.webp",
    "description": "From Mama’s Oven’s tea cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 8
  },
  {
    "id": "fruit-cakes-butterscotch-fruit",
    "name": "Butterscotch Fruit",
    "category": "Fruit Cakes",
    "subcategory": "",
    "price": 1200,
    "unit": "1 kg",
    "source": "images/menu-8.webp",
    "image": "images/products/fruit-cakes-butterscotch-fruit.webp",
    "description": "From Mama’s Oven’s fruit cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 8
  },
  {
    "id": "fruit-cakes-royal-plum",
    "name": "Royal Plum",
    "category": "Fruit Cakes",
    "subcategory": "",
    "price": 1000,
    "unit": "1 kg",
    "source": "images/menu-8.webp",
    "image": "images/products/fruit-cakes-royal-plum.webp",
    "description": "From Mama’s Oven’s fruit cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 8
  },
  {
    "id": "fruit-cakes-superrich-plum",
    "name": "Superrich Plum",
    "category": "Fruit Cakes",
    "subcategory": "",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-8.webp",
    "image": "images/products/fruit-cakes-superrich-plum.webp",
    "description": "From Mama’s Oven’s fruit cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 8
  },
  {
    "id": "fruit-cakes-exotic-plum",
    "name": "Exotic Plum",
    "category": "Fruit Cakes",
    "subcategory": "",
    "price": 2300,
    "unit": "1 kg",
    "source": "images/menu-8.webp",
    "image": "images/products/fruit-cakes-exotic-plum.webp",
    "description": "From Mama’s Oven’s fruit cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 8
  },
  {
    "id": "new-flavours-tender-coconut-pineapple",
    "name": "Tender Coconut & Pineapple",
    "category": "New Flavours",
    "subcategory": "",
    "price": 1650,
    "unit": "1 kg",
    "source": "images/menu-9.webp",
    "image": "images/products/new-flavours-tender-coconut-pineapple.webp",
    "description": "From Mama’s Oven’s new flavours menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 9
  },
  {
    "id": "new-flavours-tiramisu-cream",
    "name": "Tiramisu Cream",
    "category": "New Flavours",
    "subcategory": "",
    "price": 1650,
    "unit": "1 kg",
    "source": "images/menu-9.webp",
    "image": "images/products/new-flavours-tiramisu-cream.webp",
    "description": "From Mama’s Oven’s new flavours menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 9
  },
  {
    "id": "new-flavours-chocolate-hazelnut-praline",
    "name": "Chocolate Hazelnut Praline",
    "category": "New Flavours",
    "subcategory": "",
    "price": 1700,
    "unit": "1 kg",
    "source": "images/menu-9.webp",
    "image": "images/products/new-flavours-chocolate-hazelnut-praline.webp",
    "description": "From Mama’s Oven’s new flavours menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 9
  },
  {
    "id": "new-flavours-vanilla-caramel-crunch",
    "name": "Vanilla Caramel Crunch",
    "category": "New Flavours",
    "subcategory": "",
    "price": 1100,
    "unit": "1 kg",
    "source": "images/menu-9.webp",
    "image": "images/products/new-flavours-vanilla-caramel-crunch.webp",
    "description": "From Mama’s Oven’s new flavours menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 9
  },
  {
    "id": "new-flavours-mango-passion-fruit-mousse",
    "name": "Mango Passion Fruit Mousse",
    "category": "New Flavours",
    "subcategory": "",
    "price": 1650,
    "unit": "1 kg",
    "source": "images/menu-9.webp",
    "image": "images/products/new-flavours-mango-passion-fruit-mousse.webp",
    "description": "From Mama’s Oven’s new flavours menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 9
  },
  {
    "id": "new-flavours-dubai-kubafa-chocolate",
    "name": "Dubai Kubafa Chocolate",
    "category": "New Flavours",
    "subcategory": "",
    "price": 1800,
    "unit": "1 kg",
    "source": "images/menu-9.webp",
    "image": "images/products/new-flavours-dubai-kubafa-chocolate.webp",
    "description": "From Mama’s Oven’s new flavours menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 9
  },
  {
    "id": "new-flavours-pistachio-rose",
    "name": "Pistachio Rose",
    "category": "New Flavours",
    "subcategory": "",
    "price": 1700,
    "unit": "1 kg",
    "source": "images/menu-9.webp",
    "image": "images/products/new-flavours-pistachio-rose.webp",
    "description": "From Mama’s Oven’s new flavours menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 9
  },
  {
    "id": "new-flavours-vanilla-streusel",
    "name": "Vanilla Streusel",
    "category": "New Flavours",
    "subcategory": "",
    "price": 1200,
    "unit": "1 kg",
    "source": "images/menu-9.webp",
    "image": "images/products/new-flavours-vanilla-streusel.webp",
    "description": "From Mama’s Oven’s new flavours menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 9
  },
  {
    "id": "new-flavours-lemon-cream-blueberry-compote",
    "name": "Lemon Cream Blueberry Compote",
    "category": "New Flavours",
    "subcategory": "",
    "price": 1750,
    "unit": "1 kg",
    "source": "images/menu-9.webp",
    "image": "images/products/new-flavours-lemon-cream-blueberry-compote.webp",
    "description": "From Mama’s Oven’s new flavours menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 9
  },
  {
    "id": "new-flavours-double-chocolate-brownie-cake",
    "name": "Double Chocolate Brownie cake",
    "category": "New Flavours",
    "subcategory": "",
    "price": 1900,
    "unit": "1 kg",
    "source": "images/menu-9.webp",
    "image": "images/products/new-flavours-double-chocolate-brownie-cake.webp",
    "description": "From Mama’s Oven’s new flavours menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 9
  },
  {
    "id": "cheese-cakes-new-york-cheesecake",
    "name": "New York Cheesecake",
    "category": "Cheese Cakes",
    "subcategory": "Classic Biscuit Base",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-10.webp",
    "image": "images/products/cheese-cakes-new-york-cheesecake.webp",
    "description": "Classic Biscuit Base. From Mama’s Oven’s cheese cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Egg",
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 10
  },
  {
    "id": "cheese-cakes-chocolate-cheesecake",
    "name": "Chocolate Cheesecake",
    "category": "Cheese Cakes",
    "subcategory": "Classic Biscuit Base",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-10.webp",
    "image": "images/products/cheese-cakes-chocolate-cheesecake.webp",
    "description": "Classic Biscuit Base. From Mama’s Oven’s cheese cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Egg",
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 10
  },
  {
    "id": "cheese-cakes-mango-cheesecake",
    "name": "Mango Cheesecake",
    "category": "Cheese Cakes",
    "subcategory": "Classic Biscuit Base",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-10.webp",
    "image": "images/products/cheese-cakes-mango-cheesecake.webp",
    "description": "Classic Biscuit Base. From Mama’s Oven’s cheese cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Egg",
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 10
  },
  {
    "id": "cheese-cakes-blueberry-cheesecake",
    "name": "Blueberry Cheesecake",
    "category": "Cheese Cakes",
    "subcategory": "Classic Biscuit Base",
    "price": 1700,
    "unit": "1 kg",
    "source": "images/menu-10.webp",
    "image": "images/products/cheese-cakes-blueberry-cheesecake.webp",
    "description": "Classic Biscuit Base. From Mama’s Oven’s cheese cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Egg",
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 10
  },
  {
    "id": "cheese-cakes-oreo-cheesecake",
    "name": "Oreo Cheesecake",
    "category": "Cheese Cakes",
    "subcategory": "Classic Biscuit Base",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-10.webp",
    "image": "images/products/cheese-cakes-oreo-cheesecake.webp",
    "description": "Classic Biscuit Base. From Mama’s Oven’s cheese cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Egg",
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 10
  },
  {
    "id": "cheese-cakes-mango-cake-cheesecake",
    "name": "Mango Cake Cheesecake",
    "category": "Cheese Cakes",
    "subcategory": "Fusion Cake Base",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-10.webp",
    "image": "images/products/cheese-cakes-mango-cake-cheesecake.webp",
    "description": "Fusion Cake Base. From Mama’s Oven’s cheese cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Egg",
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 10
  },
  {
    "id": "cheese-cakes-chocolate-truffle-vancho-cheesecake",
    "name": "Chocolate Truffle Vancho Cheesecake",
    "category": "Cheese Cakes",
    "subcategory": "Fusion Cake Base",
    "price": 1750,
    "unit": "1 kg",
    "source": "images/menu-10.webp",
    "image": "images/products/cheese-cakes-chocolate-truffle-vancho-cheesecake.webp",
    "description": "Fusion Cake Base. From Mama’s Oven’s cheese cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Egg",
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 10
  },
  {
    "id": "cheese-cakes-carrot-cake-cheesecake",
    "name": "Carrot Cake Cheesecake",
    "category": "Cheese Cakes",
    "subcategory": "Fusion Cake Base",
    "price": 1500,
    "unit": "1 kg",
    "source": "images/menu-10.webp",
    "image": "images/products/cheese-cakes-carrot-cake-cheesecake.webp",
    "description": "Fusion Cake Base. From Mama’s Oven’s cheese cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Egg",
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 10
  },
  {
    "id": "cheese-cakes-dark-chocolate-brownie-cheesecake",
    "name": "Dark chocolate Brownie Cheesecake",
    "category": "Cheese Cakes",
    "subcategory": "Fusion Cake Base",
    "price": 1850,
    "unit": "1 kg",
    "source": "images/menu-10.webp",
    "image": "images/products/cheese-cakes-dark-chocolate-brownie-cheesecake.webp",
    "description": "Fusion Cake Base. From Mama’s Oven’s cheese cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Egg",
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 10
  },
  {
    "id": "cheese-cakes-white-chocolate-blondie-cheesecake",
    "name": "White Chocolate Blondie Cheesecake",
    "category": "Cheese Cakes",
    "subcategory": "Fusion Cake Base",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-10.webp",
    "image": "images/products/cheese-cakes-white-chocolate-blondie-cheesecake.webp",
    "description": "Fusion Cake Base. From Mama’s Oven’s cheese cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Egg",
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 10
  },
  {
    "id": "cheese-cakes-lotus-biscoff-cheesecake",
    "name": "Lotus Biscoff Cheesecake",
    "category": "Cheese Cakes",
    "subcategory": "Premium / Signature",
    "price": 1850,
    "unit": "1 kg",
    "source": "images/menu-11.webp",
    "image": "images/products/cheese-cakes-lotus-biscoff-cheesecake.webp",
    "description": "Premium / Signature. From Mama’s Oven’s cheese cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Egg",
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 11
  },
  {
    "id": "cheese-cakes-passionfruit-cheesecake",
    "name": "Passionfruit Cheesecake",
    "category": "Cheese Cakes",
    "subcategory": "Premium / Signature",
    "price": 1850,
    "unit": "1 kg",
    "source": "images/menu-11.webp",
    "image": "images/products/cheese-cakes-passionfruit-cheesecake.webp",
    "description": "Premium / Signature. From Mama’s Oven’s cheese cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Egg",
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 11
  },
  {
    "id": "cheese-cakes-salted-caramel-pecan-cheesecake",
    "name": "Salted Caramel Pecan Cheesecake",
    "category": "Cheese Cakes",
    "subcategory": "Premium / Signature",
    "price": 1850,
    "unit": "1 kg",
    "source": "images/menu-11.webp",
    "image": "images/products/cheese-cakes-salted-caramel-pecan-cheesecake.webp",
    "description": "Premium / Signature. From Mama’s Oven’s cheese cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Egg",
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 11
  },
  {
    "id": "cheese-cakes-nutella-hazelnut-cheesecake",
    "name": "Nutella Hazelnut Cheesecake",
    "category": "Cheese Cakes",
    "subcategory": "Premium / Signature",
    "price": 1850,
    "unit": "1 kg",
    "source": "images/menu-11.webp",
    "image": "images/products/cheese-cakes-nutella-hazelnut-cheesecake.webp",
    "description": "Premium / Signature. From Mama’s Oven’s cheese cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Egg",
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 11
  },
  {
    "id": "cheese-cakes-strawberry-cheesecake-seasonal",
    "name": "Strawberry Cheesecake (Seasonal)",
    "category": "Cheese Cakes",
    "subcategory": "Premium / Signature",
    "price": 1850,
    "unit": "1 kg",
    "source": "images/menu-11.webp",
    "image": "images/products/cheese-cakes-strawberry-cheesecake-seasonal.webp",
    "description": "Premium / Signature. From Mama’s Oven’s cheese cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Egg",
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 11
  },
  {
    "id": "artisan-breads-classic-white-sourdough",
    "name": "Classic White Sourdough",
    "category": "Artisan Breads",
    "subcategory": "Sourdough Boule – Rustic & Crusty",
    "price": 300,
    "unit": "450 g",
    "source": "images/menu-12.webp",
    "image": "images/products/artisan-breads-classic-white-sourdough.webp",
    "description": "Sourdough Boule – Rustic & Crusty. From Mama’s Oven’s artisan breads menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "450 g",
        "factor": 1
      }
    ],
    "menuSource": 12
  },
  {
    "id": "artisan-breads-classic-sourdough-with-multi-seeds",
    "name": "Classic Sourdough with multi-seeds",
    "category": "Artisan Breads",
    "subcategory": "Sourdough Boule – Rustic & Crusty",
    "price": 350,
    "unit": "450 g",
    "source": "images/menu-12.webp",
    "image": "images/products/artisan-breads-classic-sourdough-with-multi-seeds.webp",
    "description": "Sourdough Boule – Rustic & Crusty. From Mama’s Oven’s artisan breads menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "450 g",
        "factor": 1
      }
    ],
    "menuSource": 12
  },
  {
    "id": "artisan-breads-classic-sourdough-with-cheese",
    "name": "Classic Sourdough with cheese",
    "category": "Artisan Breads",
    "subcategory": "Sourdough Boule – Rustic & Crusty",
    "price": 380,
    "unit": "450 g",
    "source": "images/menu-12.webp",
    "image": "images/products/artisan-breads-classic-sourdough-with-cheese.webp",
    "description": "Sourdough Boule – Rustic & Crusty. From Mama’s Oven’s artisan breads menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "450 g",
        "factor": 1
      }
    ],
    "menuSource": 12
  },
  {
    "id": "artisan-breads-multigrain-sourdough",
    "name": "Multigrain Sourdough",
    "category": "Artisan Breads",
    "subcategory": "Sourdough Boule – Rustic & Crusty",
    "price": 420,
    "unit": "450 g",
    "source": "images/menu-12.webp",
    "image": "images/products/artisan-breads-multigrain-sourdough.webp",
    "description": "Sourdough Boule – Rustic & Crusty. From Mama’s Oven’s artisan breads menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "450 g",
        "factor": 1
      }
    ],
    "menuSource": 12
  },
  {
    "id": "artisan-breads-chocolate-chip-sourdough",
    "name": "Chocolate Chip Sourdough",
    "category": "Artisan Breads",
    "subcategory": "Sourdough Boule – Rustic & Crusty",
    "price": 420,
    "unit": "450 g",
    "source": "images/menu-12.webp",
    "image": "images/products/artisan-breads-chocolate-chip-sourdough.webp",
    "description": "Sourdough Boule – Rustic & Crusty. From Mama’s Oven’s artisan breads menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "450 g",
        "factor": 1
      }
    ],
    "menuSource": 12
  },
  {
    "id": "artisan-breads-rosemary-oregano",
    "name": "Rosemary & Oregano",
    "category": "Artisan Breads",
    "subcategory": "Sourdough Focaccia – Fluffy Italian Flatbread",
    "price": 400,
    "unit": "450 g",
    "source": "images/menu-12.webp",
    "image": "images/products/artisan-breads-rosemary-oregano.webp",
    "description": "Sourdough Focaccia – Fluffy Italian Flatbread. From Mama’s Oven’s artisan breads menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "450 g",
        "factor": 1
      }
    ],
    "menuSource": 12
  },
  {
    "id": "artisan-breads-cheddar-jalape-o",
    "name": "Cheddar & Jalapeño",
    "category": "Artisan Breads",
    "subcategory": "Sourdough Focaccia – Fluffy Italian Flatbread",
    "price": 450,
    "unit": "450 g",
    "source": "images/menu-12.webp",
    "image": "images/products/artisan-breads-cheddar-jalape-o.webp",
    "description": "Sourdough Focaccia – Fluffy Italian Flatbread. From Mama’s Oven’s artisan breads menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "450 g",
        "factor": 1
      }
    ],
    "menuSource": 12
  },
  {
    "id": "artisan-breads-honey-walnuts-sweet",
    "name": "Honey & Walnuts (Sweet)",
    "category": "Artisan Breads",
    "subcategory": "Sourdough Focaccia – Fluffy Italian Flatbread",
    "price": 450,
    "unit": "450 g",
    "source": "images/menu-12.webp",
    "image": "images/products/artisan-breads-honey-walnuts-sweet.webp",
    "description": "Sourdough Focaccia – Fluffy Italian Flatbread. From Mama’s Oven’s artisan breads menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "450 g",
        "factor": 1
      }
    ],
    "menuSource": 12
  },
  {
    "id": "sourdough-pizza-classic-sourdough-cheese",
    "name": "Classic Sourdough Cheese",
    "category": "Sourdough Pizza",
    "subcategory": "",
    "price": 450,
    "unit": "Medium",
    "source": "images/menu-13.webp",
    "image": "images/products/sourdough-pizza-classic-sourdough-cheese.webp",
    "description": "From Mama’s Oven’s sourdough pizza menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "Medium",
        "factor": 1
      },
      {
        "label": "Large",
        "factor": 1,
        "price": 850
      }
    ],
    "menuSource": 13
  },
  {
    "id": "sourdough-pizza-chicken-onion",
    "name": "Chicken & Onion",
    "category": "Sourdough Pizza",
    "subcategory": "",
    "price": 600,
    "unit": "Medium",
    "source": "images/menu-13.webp",
    "image": "images/products/sourdough-pizza-chicken-onion.webp",
    "description": "From Mama’s Oven’s sourdough pizza menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "Medium",
        "factor": 1
      },
      {
        "label": "Large",
        "factor": 1,
        "price": 1150
      }
    ],
    "menuSource": 13
  },
  {
    "id": "sourdough-pizza-veggie-delight-paneer-capsicum-onion",
    "name": "Veggie Delight (Paneer, Capsicum, Onion)",
    "category": "Sourdough Pizza",
    "subcategory": "",
    "price": 500,
    "unit": "Medium",
    "source": "images/menu-13.webp",
    "image": "images/products/sourdough-pizza-veggie-delight-paneer-capsicum-onion.webp",
    "description": "From Mama’s Oven’s sourdough pizza menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "Medium",
        "factor": 1
      },
      {
        "label": "Large",
        "factor": 1,
        "price": 950
      }
    ],
    "menuSource": 13
  },
  {
    "id": "sourdough-pizza-multigrain-ragi-wheat-bread-flour",
    "name": "Multigrain (Ragi, Wheat, Bread Flour)",
    "category": "Sourdough Pizza",
    "subcategory": "",
    "price": 650,
    "unit": "Medium",
    "source": "images/menu-13.webp",
    "image": "images/products/sourdough-pizza-multigrain-ragi-wheat-bread-flour.webp",
    "description": "From Mama’s Oven’s sourdough pizza menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "Medium",
        "factor": 1
      },
      {
        "label": "Large",
        "factor": 1,
        "price": 1250
      }
    ],
    "menuSource": 13
  },
  {
    "id": "eggless-cakes-black-forest",
    "name": "Black Forest",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 900,
    "unit": "1 kg",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-black-forest.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "eggless-cakes-choco-truffle",
    "name": "Choco Truffle",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 1200,
    "unit": "1 kg",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-choco-truffle.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "eggless-cakes-nutty-butterscotch",
    "name": "Nutty Butterscotch",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 1200,
    "unit": "1 kg",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-nutty-butterscotch.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "eggless-cakes-pineapple-cream-delight",
    "name": "Pineapple Cream Delight",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 1200,
    "unit": "1 kg",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-pineapple-cream-delight.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "eggless-cakes-white-forest",
    "name": "White Forest",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 1000,
    "unit": "1 kg",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-white-forest.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "eggless-cakes-strawberry",
    "name": "Strawberry",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 1200,
    "unit": "1 kg",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-strawberry.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "eggless-cakes-butterscotch-fruit",
    "name": "Butterscotch Fruit",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 1450,
    "unit": "1 kg",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-butterscotch-fruit.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "eggless-cakes-plum",
    "name": "Plum",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 1500,
    "unit": "1 kg",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-plum.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "eggless-cakes-dates-nuts",
    "name": "Dates & Nuts",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 900,
    "unit": "1 kg",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-dates-nuts.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "eggless-cakes-carrot-dates",
    "name": "Carrot & Dates",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 900,
    "unit": "1 kg",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-carrot-dates.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "eggless-cakes-vancho",
    "name": "Vancho",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 1300,
    "unit": "1 kg",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-vancho.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "eggless-cakes-chocolate-mocha",
    "name": "Chocolate Mocha",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 1300,
    "unit": "1 kg",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-chocolate-mocha.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "eggless-cakes-spanish-delight",
    "name": "Spanish Delight",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 1450,
    "unit": "1 kg",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-spanish-delight.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "eggless-cakes-pure-chocolate-bliss",
    "name": "Pure Chocolate Bliss",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 2000,
    "unit": "1 kg",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-pure-chocolate-bliss.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "eggless-cakes-ragi-banana-walnut",
    "name": "Ragi Banana Walnut",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-ragi-banana-walnut.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "eggless-cakes-wheat-oats-nutty-jaggery",
    "name": "Wheat Oats Nutty Jaggery",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 1600,
    "unit": "1 kg",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-wheat-oats-nutty-jaggery.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "eggless-cakes-snowball-cookies",
    "name": "Snowball Cookies",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 550,
    "unit": "500 g",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-snowball-cookies.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "500 g",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "eggless-cakes-double-choco-brownie",
    "name": "Double Choco Brownie",
    "category": "Eggless Cakes",
    "subcategory": "Made with unbleached, chemical free cake flour",
    "price": 950,
    "unit": "500 g",
    "source": "images/menu-0.webp",
    "image": "images/products/eggless-cakes-double-choco-brownie.webp",
    "description": "Made with unbleached, chemical free cake flour. From Mama’s Oven’s eggless cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "Eggless"
    ],
    "sizes": [
      {
        "label": "500 g",
        "factor": 1
      }
    ],
    "menuSource": 0
  },
  {
    "id": "celebration-cakes-tender-coconut-pineapple",
    "name": "Tender Coconut & Pineapple",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-15.webp",
    "image": "images/products/celebration-cakes-tender-coconut-pineapple.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 15
  },
  {
    "id": "celebration-cakes-tiramisu-cream",
    "name": "Tiramisu Cream",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-15.webp",
    "image": "images/products/celebration-cakes-tiramisu-cream.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 15
  },
  {
    "id": "celebration-cakes-chocolate-hazelnut-praline",
    "name": "Chocolate Hazelnut Praline",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-15.webp",
    "image": "images/products/celebration-cakes-chocolate-hazelnut-praline.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 15
  },
  {
    "id": "celebration-cakes-vanilla-caramel-crunch",
    "name": "Vanilla Caramel Crunch",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-15.webp",
    "image": "images/products/celebration-cakes-vanilla-caramel-crunch.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 15
  },
  {
    "id": "celebration-cakes-mango-passion-fruit-mousse",
    "name": "Mango Passion Fruit Mousse",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-15.webp",
    "image": "images/products/celebration-cakes-mango-passion-fruit-mousse.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 15
  },
  {
    "id": "celebration-cakes-dubai-kubafa-chocolate",
    "name": "Dubai Kubafa Chocolate",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-15.webp",
    "image": "images/products/celebration-cakes-dubai-kubafa-chocolate.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 15
  },
  {
    "id": "celebration-cakes-pistachio-rose",
    "name": "Pistachio Rose",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-15.webp",
    "image": "images/products/celebration-cakes-pistachio-rose.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 15
  },
  {
    "id": "celebration-cakes-fig-honey",
    "name": "Fig & Honey",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-15.webp",
    "image": "images/products/celebration-cakes-fig-honey.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 15
  },
  {
    "id": "celebration-cakes-lemon-cream-blueberry-compote",
    "name": "Lemon Cream Blueberry Compote",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-15.webp",
    "image": "images/products/celebration-cakes-lemon-cream-blueberry-compote.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 15
  },
  {
    "id": "celebration-cakes-double-chocolate-brownie-cake",
    "name": "Double Chocolate Brownie cake",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-15.webp",
    "image": "images/products/celebration-cakes-double-chocolate-brownie-cake.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 15
  },
  {
    "id": "celebration-cakes-kinder-brownie-cake",
    "name": "Kinder Brownie cake",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-15.webp",
    "image": "images/products/celebration-cakes-kinder-brownie-cake.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 15
  },
  {
    "id": "celebration-cakes-matcha-white-chocolate",
    "name": "Matcha & White Chocolate",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-15.webp",
    "image": "images/products/celebration-cakes-matcha-white-chocolate.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 15
  },
  {
    "id": "celebration-cakes-pistachio-rose-variant",
    "name": "Pistachio & Rose",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-15.webp",
    "image": "images/products/celebration-cakes-pistachio-rose-variant.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 15
  },
  {
    "id": "celebration-cakes-vanilla-streusel",
    "name": "Vanilla Streusel",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-15.webp",
    "image": "images/products/celebration-cakes-vanilla-streusel.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 15
  },
  {
    "id": "celebration-cakes-choco-truffle",
    "name": "Choco Truffle",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-16.webp",
    "image": "images/products/celebration-cakes-choco-truffle.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 16
  },
  {
    "id": "celebration-cakes-nutty-butterscotch",
    "name": "Nutty Butterscotch",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-16.webp",
    "image": "images/products/celebration-cakes-nutty-butterscotch.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 16
  },
  {
    "id": "celebration-cakes-white-chocolate-mocha",
    "name": "White Chocolate Mocha",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-16.webp",
    "image": "images/products/celebration-cakes-white-chocolate-mocha.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 16
  },
  {
    "id": "celebration-cakes-spanish-delight",
    "name": "Spanish Delight",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-16.webp",
    "image": "images/products/celebration-cakes-spanish-delight.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 16
  },
  {
    "id": "celebration-cakes-premium-choco-truffle",
    "name": "Premium Choco Truffle",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-16.webp",
    "image": "images/products/celebration-cakes-premium-choco-truffle.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 16
  },
  {
    "id": "celebration-cakes-pineapple",
    "name": "Pineapple",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-16.webp",
    "image": "images/products/celebration-cakes-pineapple.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 16
  },
  {
    "id": "celebration-cakes-red-velvet",
    "name": "Red Velvet",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-16.webp",
    "image": "images/products/celebration-cakes-red-velvet.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 16
  },
  {
    "id": "celebration-cakes-black-forest",
    "name": "Black Forest",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-16.webp",
    "image": "images/products/celebration-cakes-black-forest.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 16
  },
  {
    "id": "celebration-cakes-white-forest",
    "name": "White Forest",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-16.webp",
    "image": "images/products/celebration-cakes-white-forest.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 16
  },
  {
    "id": "celebration-cakes-strawberry",
    "name": "Strawberry",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-16.webp",
    "image": "images/products/celebration-cakes-strawberry.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 16
  },
  {
    "id": "celebration-cakes-blueberry",
    "name": "Blueberry",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-16.webp",
    "image": "images/products/celebration-cakes-blueberry.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 16
  },
  {
    "id": "celebration-cakes-chocolate-mocha",
    "name": "Chocolate Mocha",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-16.webp",
    "image": "images/products/celebration-cakes-chocolate-mocha.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 16
  },
  {
    "id": "celebration-cakes-vancho",
    "name": "Vancho",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-16.webp",
    "image": "images/products/celebration-cakes-vancho.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 16
  },
  {
    "id": "celebration-cakes-red-b",
    "name": "Red B",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-16.webp",
    "image": "images/products/celebration-cakes-red-b.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 16
  },
  {
    "id": "celebration-cakes-caramel-praline",
    "name": "Caramel Praline",
    "category": "Celebration Cakes",
    "subcategory": "Theme Cake Flavours – custom design quoted separately",
    "price": null,
    "unit": "1 kg",
    "source": "images/menu-16.webp",
    "image": "images/products/celebration-cakes-caramel-praline.webp",
    "description": "Theme Cake Flavours – custom design quoted separately. From Mama’s Oven’s celebration cakes menu.",
    "ingredients": "Please ask us for the full ingredients and allergen information.",
    "options": [
      "As listed on menu"
    ],
    "sizes": [
      {
        "label": "1 kg",
        "factor": 1
      }
    ],
    "menuSource": 16
  }
];
