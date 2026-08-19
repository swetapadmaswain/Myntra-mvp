# Myntra "Style Studio" Wishlist — MVP Prototype

Mobile-first, interactive prototype that turns the Myntra wishlist from a grid of single
items into a styling surface. See `PROBLEM_STATEMENT.md` for the PM framing, scope, data
contract and success metrics.

## What's built

- **Style Studio hero** (`src/components/StyleStudioHero.jsx`) — "Styled From Your
  Wishlist", a swipeable row of complete looks.
- **Look card** (`src/components/LookCard.jsx`) — 3 paired items with `+` separators,
  a **New match** badge on `catalog_recommendation` items, bundle price + savings, and a
  single-click **Add Look to Bag · ₹3,497** CTA.
- **Wishlist grid** (`src/components/WishlistGrid.jsx`) — standard 2-column saved items
  with brand, price, discount, size and **Move to Bag**.
- **Mock data** (`src/data/mockData.js`) — mirrors the backend AI response contract,
  including the `source` field (`wishlist` vs `catalog_recommendation`).

No backend, no ML, no inventory/size logic — deliberately out of scope for the MVP.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173 and use a mobile viewport (the layout is capped at
`max-w-md`).

## Stack

React 18 · Vite · Tailwind CSS 3 · lucide-react · Unsplash placeholder imagery
