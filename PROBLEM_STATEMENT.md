# Problem Statement — Myntra "Style Studio" Wishlist MVP

## 1. Context

Myntra users save dozens of individual products to their wishlist, but the wishlist is a
flat, unordered grid of *single* items. Users are left to mentally assemble outfits on
their own, which creates friction between "I like this" and "I'll buy this".

The wishlist is therefore a high-intent surface with low conversion: items are saved,
revisited, and abandoned one at a time.

## 2. Problem

**Wishlisted items are shown as isolated products, not as wearable outfits, so users
cannot see how their saved items work together and must repeat the add-to-bag flow
item by item.**

Consequences:

- **Low basket size** — users buy one product instead of a coordinated look.
- **Decision fatigue** — no styling guidance on an already-curated list.
- **Wasted intent** — saved items decay without ever becoming purchases.

## 3. Opportunity

Turn the wishlist from a *storage* surface into a *styling* surface: pair saved items
into a complete look, top the look up with catalog items when something is missing, and
let the user buy the whole outfit in one tap.

## 4. Proposed Solution (MVP)

A mobile-first wishlist page with a **"Style Studio" hero section** at the top titled
**"Styled From Your Wishlist"**, which displays 2–3 items paired into one outfit
(e.g. top + bottom + footwear) and a single high-contrast CTA:
**"Add Look to Bag — ₹3,497"**.

Below the hero, the standard 2-column wishlist grid is preserved so nothing is taken
away from the existing experience.

## 5. MVP Scope

### In-scope

- Myntra-style mobile wishlist UI (React + Tailwind CSS).
- "Style Studio" hero section above the saved-items grid.
- Visual card showing 2–3 paired items with a `+` separator between them.
- Frictionless single-click **Add Look to Bag** with the combined price.
- Standard 2-column grid of wishlisted items with brand, price, and **Move to Bag**.

### Out-of-scope (explicitly deferred)

- The machine-learning outfit-matching algorithm — outfits are **hardcoded mock data**
  for the demo.
- Inventory checks and size selection — sizes are assumed pre-selected from the user
  profile.
- Payments, auth, real catalog integration, personalization loop.

## 6. Data Contract (backend AI → frontend)

The frontend is intentionally dumb: it renders whatever look the recommendation service
returns. Contract used by the MVP:

```json
{
  "userId": "user_987",
  "recommendedLook": {
    "outfitId": "look_001",
    "theme": "Weekend Casual",
    "totalPrice": 3497,
    "items": [
      {
        "id": "item_1",
        "category": "Top",
        "brand": "Roadster",
        "price": 899,
        "image": "url_to_tee.jpg",
        "source": "wishlist"
      },
      {
        "id": "item_2",
        "category": "Bottom",
        "brand": "Highlander",
        "price": 1299,
        "image": "url_to_cargo.jpg",
        "source": "wishlist"
      },
      {
        "id": "item_3",
        "category": "Footwear",
        "brand": "Puma",
        "price": 1299,
        "image": "url_to_sneaker.jpg",
        "source": "catalog_recommendation"
      }
    ]
  }
}
```

### Why the `source` field matters

`source` distinguishes items the user already saved (`wishlist`) from items pulled in to
finish the outfit (`catalog_recommendation`). This handles the core edge case: a wishlist
rarely contains a *complete* outfit, so the system must top it up from the catalog — and
the UI must be honest about which items are new discoveries.

## 7. Success Metrics

| Metric | Why |
| --- | --- |
| Look CTA click-through rate | Does outfit framing beat single-item framing? |
| Average order value from wishlist sessions | Primary commercial outcome. |
| Items per order | Proves multi-item bundling works. |
| Wishlist → bag conversion rate | Reduced friction. |
| Attach rate of `catalog_recommendation` items | Value of catalog top-up / new discovery. |

## 8. Key Assumptions & Risks

- Users trust algorithmic styling enough to buy a bundle — mitigate by allowing item
  removal from the look (post-MVP).
- Sizes can be inferred reliably; wrong sizes would inflate returns.
- Recommendation quality gates everything; a bad pairing damages trust faster than no
  pairing.

## 9. Demo Flow (case study)

1. Open the wishlist → the "Styled From Your Wishlist" hero is the first thing seen.
2. Point out the `+` separators and the `catalog_recommendation` badge on the sneakers.
3. Tap **Add Look to Bag — ₹3,497** → all three items land in the bag in one action.
4. Show the JSON contract above to explain how the backend AI drives the UI.
