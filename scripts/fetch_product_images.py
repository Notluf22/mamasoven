import os
import json
import io
import time
import urllib.request
from PIL import Image

PRODUCTS_DIR = os.path.join(os.path.dirname(__file__), '..', 'images', 'products')
CATALOG_PATH = os.path.join(os.path.dirname(__file__), '..', 'catalog.js')

os.makedirs(PRODUCTS_DIR, exist_ok=True)

archetypes = {
    'red_velvet': 'photo-1586788680434-30d324b2d46f',
    'black_forest': 'photo-1606890737304-57a1ca8a5b62',
    'white_forest': 'photo-1562440499-64c9a111f713',
    'strawberry': 'photo-1464349095431-e9a21285b5f3',
    'blueberry': 'photo-1565958011703-44f9829ba187',
    'pineapple': 'photo-1571115177098-24ec42ed204d',
    'butterscotch': 'photo-1571115177098-24ec42ed204d',
    'caramel': 'photo-1542826438-bd32f43d626f',
    'carrot': 'photo-1621303837174-89787a7d4729',
    'dates_nuts': 'photo-1607958996333-41aef7caefaa',
    'plum': 'photo-1541781774459-bb2af2f05b55',
    'tea_cake': 'photo-1586985289688-ca3cf47d3e6e',
    'tiramisu': 'photo-1571877227200-a0d98ea607e9',
    'mocha': 'photo-1588195538326-c5b1e9f80a1b',
    'hazelnut': 'photo-1579372786545-d24232daf58c',
    'matcha': 'photo-1536256263959-770b48d82b0a',
    'rose_milk': 'photo-1587314168485-3236d6710814',
    'tender_coconut': 'photo-1562440499-64c9a111f713',
    'vancho': 'photo-1588195538326-c5b1e9f80a1b',
    'cheesecake_berry': 'photo-1533134242443-d4fd215305ad',
    'cheesecake_chocolate': 'photo-1558326567-98ae2405596b',
    'cheesecake_ny': 'photo-1524351199678-941a58a3df50',
    'sourdough_white': 'photo-1589367920969-ab8e050bbb04',
    'sourdough_multigrain': 'photo-1509440159596-0249088772ff',
    'sourdough_cheese': 'photo-1549931319-a545dcf3bc73',
    'pizza_cheese': 'photo-1513104890138-7c749659a591',
    'pizza_veggie': 'photo-1565299624946-b28f40a0ae38',
    'pizza_chicken': 'photo-1604382354936-07c5d9983bd3',
    'cookies_oats': 'photo-1558961363-fa8fdf82db35',
    'cookies_butter': 'photo-1499636136210-6f4ee915583e',
    'chocolate': 'photo-1578985545062-69928b1d9587',
    'vanilla': 'photo-1562440499-64c9a111f713',
    'ragi_wholesome': 'photo-1606313564200-e75d5e30476c'
}

def download_and_crop(photo_id, target_size=(800, 800)):
    url = f'https://images.unsplash.com/{photo_id}?w=1000&auto=format&fit=crop&q=85'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    with urllib.request.urlopen(req, timeout=15) as resp:
        data = resp.read()
    
    img = Image.open(io.BytesIO(data)).convert('RGB')
    w, h = img.size
    min_dim = min(w, h)
    
    # Center crop to square
    left = (w - min_dim) // 2
    top = (h - min_dim) // 2
    right = left + min_dim
    bottom = top + min_dim
    
    cropped = img.crop((left, top, right, bottom))
    resized = cropped.resize(target_size, Image.Resampling.LANCZOS)
    return resized

def match_product(p):
    name = p['name'].lower()
    cat = p['category'].lower()
    sub = (p.get('subcategory') or '').lower()
    text = f'{name} {cat} {sub}'
    
    if 'pizza' in cat:
        if 'chicken' in text: return 'pizza_chicken'
        if 'veggie' in text or 'paneer' in text or 'capsicum' in text: return 'pizza_veggie'
        return 'pizza_cheese'
        
    if 'bread' in cat or 'sourdough' in cat:
        if 'cheese' in text or 'cheddar' in text: return 'sourdough_cheese'
        if 'seeds' in text or 'multigrain' in text: return 'sourdough_multigrain'
        if 'chocolate' in text: return 'chocolate'
        return 'sourdough_white'
        
    if 'cookie' in text:
        if 'oats' in text or 'wheat' in text: return 'cookies_oats'
        return 'cookies_butter'
        
    if 'cheesecake' in text or 'cheese cake' in text:
        if 'blueberr' in text or 'fruit' in text: return 'cheesecake_berry'
        if 'chocolate' in text or 'brownie' in text or 'oreo' in text: return 'cheesecake_chocolate'
        if 'caramel' in text or 'pecan' in text: return 'caramel'
        if 'strawberry' in text: return 'strawberry'
        return 'cheesecake_ny'
        
    if 'red velvet' in text: return 'red_velvet'
    if 'black forest' in text: return 'black_forest'
    if 'white forest' in text: return 'white_forest'
    if 'strawberry' in text: return 'strawberry'
    if 'blueberry' in text: return 'blueberry'
    if 'pineapple' in text: return 'pineapple'
    if 'butterscotch' in text or 'butter scotch' in text: return 'butterscotch'
    if 'caramel' in text or 'praline' in text or 'crunch' in text: return 'caramel'
    if 'tiramisu' in text: return 'tiramisu'
    if 'carrot' in text: return 'carrot'
    if 'dates' in text or 'fig' in text or 'honey' in text: return 'dates_nuts'
    if 'plum' in text: return 'plum'
    if 'tea cake' in cat or 'ghee cake' in text or 'butter cake' in text: return 'tea_cake'
    if 'mocha' in text or 'coffee' in text: return 'mocha'
    if 'hazelnut' in text or 'ferrero' in text or 'nutella' in text or 'kinder' in text or 'kubafa' in text: return 'hazelnut'
    if 'matcha' in text: return 'matcha'
    if 'rose' in text or 'rasamalai' in text: return 'rose_milk'
    if 'tender coconut' in text or 'coconut' in text: return 'tender_coconut'
    if 'vancho' in text or 'spanish' in text or 'red b' in text: return 'vancho'
    if 'biscoff' in text: return 'caramel'
    if 'chocolate' in text or 'truffle' in text or 'ganache' in text or 'brownie' in text or 'bliss' in text: return 'chocolate'
    if 'ragi' in text or 'bajra' in text or 'millet' in text or 'wholesome' in text: return 'ragi_wholesome'
    if 'vanilla' in text: return 'vanilla'
    return 'vanilla'

def main():
    print("Loading catalog.js...")
    with open(CATALOG_PATH, 'r', encoding='utf-8') as f:
        text = f.read()

    start = text.find('const PRODUCTS = [') + len('const PRODUCTS = ')
    end = text.rfind('];') + 1
    products = json.loads(text[start:end])

    missing = [p for p in products if not p.get('image')]
    print(f"Products missing images: {len(missing)}")

    # 1. Download unique archetypes needed
    archetypes_needed = set(match_product(p) for p in missing)
    print(f"Unique photo archetypes to download: {len(archetypes_needed)}")

    cached_images = {}
    for arch in sorted(archetypes_needed):
        pid = archetypes[arch]
        print(f"  Fetching archetype '{arch}' ({pid})...")
        try:
            cached_images[arch] = download_and_crop(pid)
        except Exception as e:
            print(f"    Failed {arch}: {e}")

    # 2. Save image for each missing product
    saved_count = 0
    for p in missing:
        out_path = os.path.join(PRODUCTS_DIR, f"{p['id']}.webp")
        if os.path.exists(out_path):
            continue

        arch = match_product(p)
        if arch in cached_images:
            cached_images[arch].save(out_path, 'WEBP', quality=88)
            saved_count += 1

    print(f"\nDone! Successfully created {saved_count} new product images in images/products/!")

if __name__ == '__main__':
    main()

