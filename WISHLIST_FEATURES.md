# Wishlist Features — Detailed Breakdown

## 1. Wishlist Data Source
- The wishlist is initialised from `wishlistItems` inside `src/data/mockData.js`.
- It is stored in React state via `AppContext.jsx` using `useState(wishlistItems)`.
- Every component that needs wishlist data reads it through the `useApp()` hook.

## 2. Viewing the Wishlist
- The `WishlistPage.jsx` route (`/wishlist`) is the main wishlist screen.
- It renders three sections:
  - **TopBar** — shows the wishlist item count and a back/bag shortcut.
  - **StyleStudioHero** — auto-generated outfit suggestions based on the wishlist.
  - **WishlistGrid** — the 2-column product grid of all saved items.

## 3. Wishlist Product Card (`WishlistGrid.jsx`)
Each card displays:
- Product image using `ProductImage.jsx`.
- Brand and product name.
- Price, original MRP, and discount percentage.
- An inline size selector.
- A **Move to Bag** button.
- A remove (×) button in the top-right corner.

## 4. Size Selection
- Every wishlist item has a dropdown with sizes: `XS, S, M, L, XL, 28, 30, 32, 34, UK 6, UK 7, UK 8, UK 9, UK 10`.
- Selecting a new size calls `updateWishlistSize(id, size)` from `AppContext.jsx`.
- The wishlist array is updated immutably: only the matching `id` gets the new `size` value.

## 5. Removing an Item
- The × icon on each card triggers `removeFromWishlist(id)`.
- The item is filtered out of the `wishlist` state.
- A toast notification says *“Removed from wishlist”*.

## 6. Moving an Item to Bag
- The **Move to Bag** button triggers `moveItemToBag(item)`.
- The item is copied into the `bag` state with `source: 'wishlist'`.
- The `movedItemIds` array tracks which wishlist items are already in the bag.
- Once moved, the button text changes to *“Added to Bag”* and is disabled.
- A toast notification says *“Item added to bag”*.

## 7. Adding an Item to the Wishlist
- `addToWishlist(product)` is available in `AppContext.jsx`.
- It checks `wishlist.some(item => item.id === product.id)` to prevent duplicates.
- On success, the product is appended and a toast says *“Added to wishlist”*.

## 8. Toggle Wishlist
- `toggleWishlist(product)` lets a single button add or remove a product.
- If the product already exists, it removes it; otherwise it calls `addToWishlist`.
- Useful for heart icons on product cards.

## 9. Style Studio / Look Generation
- Looks are built automatically from the wishlist using `buildLooks(wishlist)` in `looksData.js`.
- The result is memoised in `AppContext.jsx` with `useMemo`.
- For every wishlist item, the algorithm builds a complete outfit using the rules below.

### 9.1 Category Detection
`detectCategory(name)` in `looksData.js` classifies an item as:
- **Top** — if the name contains `tee, shirt, polo, blazer, sweater, hoodie, tank, kurta, tunic, top`.
- **Bottom** — if it contains `trouser, pant, jean, short, cargo, chino, jogger, legging, bottom`.
- **Footwear** — if it contains `sneaker, shoe, derby, loafer, boot, sandal, flip`.
- Defaults to `Top` if no keyword matches.

### 9.2 Style Detection
`detectStyle(name)` assigns a style:
- **formal** — for `blazer, linen, chino, derby, formal, oxford`.
- **sporty** — for `dri-fit, training, gym, sport, dry`.
- Defaults to **casual**.

### 9.3 Picking Complements
For each look, the algorithm starts with a **seed** wishlist item, then tries to find one item each for the two missing categories among:
1. Other wishlist items with the same category and style.
2. `boughtItems` (user’s past purchases) with the same category and style.
3. `trendingBasics` (popular Myntra basics) with the same category and style.
4. Any `trendingBasics` item in the missing category as a final neutral fallback.

### 9.4 Look Theme
The look title is generated dynamically:
- Footwear seed → `Complete the look for your {style} {brand}`.
- Bought complement used → `Styled with something you bought in {month}`.
- Trending basic used → `Trending basics picked for you`.
- Default → `Styled around your {brand} {category}`.

## 10. Adding a Full Look to the Bag
- Each generated look card has an **Add Look to Bag** button.
- Clicking it calls `addLookToBag(look)` in `AppContext.jsx`.
- All look items are copied into the `bag` state with `lookId` and `theme` attached.
- `addedLookIds` prevents the same look from being added twice.
- A toast shows: *“{n} items added · {theme} · ₹{total}”*.

## 11. Homepage Nudge for the Wishlist
- The `NudgeCard` on `HomePage.jsx` advertises the Style Studio feature.
- It shows the first generated look’s first three items and links to `/wishlist`.

## 12. Toast Notifications
- All wishlist and bag actions show short-lived toast messages.
- The toast is managed in `AppContext.jsx` and auto-dismissed after 2.2 seconds.

## 13. Files Involved
- `src/context/AppContext.jsx` — global wishlist, bag, and look state.
- `src/data/mockData.js` — initial `wishlistItems` and product catalog.
- `src/data/looksData.js` — outfit-generation logic.
- `src/pages/WishlistPage.jsx` — wishlist screen.
- `src/components/WishlistGrid.jsx` — wishlist product grid.
- `src/components/ProductImage.jsx` — image rendering with fallback.
