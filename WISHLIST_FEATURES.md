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

## 9. Style Studio — New Wishlist Feature (PM View)

### 9.1 What is Style Studio?
- A wishlist-powered outfit generator that turns one saved item into a complete look.
- Users do not need to browse or match products manually; the app suggests a full outfit in one tap.
- It lives on the `/wishlist` page inside `StyleStudioHero.jsx` and is driven by `buildLooks(wishlist)` in `looksData.js`.

### 9.2 User Problem It Solves
- Wishlists often contain random one-off items (e.g., only a t-shirt or only sneakers), so the user cannot visualise how to wear them.
- Buying a single item does not drive AOV (average order value); a complete look does.
- Manually browsing for matching tops, bottoms, and shoes is time-consuming and leads to drop-off.

### 9.3 Product Value
- **Conversion**: turns a single saved item into a 3-piece bundle the user can add to the bag instantly.
- **Engagement**: gives users a reason to revisit the wishlist beyond price tracking.
- **Personalisation**: the algorithm respects the user’s own saved items first, then falls back to items the user already bought, then to trending basics.

### 9.4 How the Algorithm Works
For every wishlist item, Style Studio acts as the **seed** of a new outfit:

1. **Classify the seed** with `detectCategory(name)`:
   - **Top** — `tee, shirt, polo, blazer, sweater, hoodie, tank, kurta, tunic, top`.
   - **Bottom** — `trouser, pant, jean, short, cargo, chino, jogger, legging, bottom`.
   - **Footwear** — `sneaker, shoe, derby, loafer, boot, sandal, flip`.
   - Defaults to `Top` if no keyword is found.

2. **Detect the style** with `detectStyle(name)`:
   - **formal** — `blazer, linen, chino, derby, formal, oxford`.
   - **sporty** — `dri-fit, training, gym, sport, dry`.
   - Defaults to **casual**.

3. **Find two missing categories** (e.g., if the seed is a Top, the algorithm looks for a Bottom and Footwear).

4. **Pick the best complement** in this order:
   1. Another wishlist item matching the missing category **and** the seed’s style.
   2. An item from the user’s **past purchases** (`boughtItems`) matching the missing category and style.
   3. A **trending basic** from Myntra’s catalog matching the missing category and style.
   4. Any trending basic in the missing category as a final neutral fallback.

### 9.5 Edge Case: Old Purchases Fill the Gaps
- This is the critical fallback: the user may not have enough complementary items in their wishlist.
- If the wishlist cannot complete a full outfit, Style Studio pairs the wishlist item with something the user has already bought (e.g., *“Pair this shirt with the black jeans you bought in June.”*).
- If no relevant past purchase exists, it falls back to high-converting trending basics (e.g., plain white sneakers, blue denim).
- This ensures **every seed produces a complete, wearable look**, regardless of how many items the user has saved.

### 9.6 Example User Flow
- User saves a **Roadster Graphic Print Oversized Tee**.
- Style Studio detects it is a **casual Top**.
- It searches the wishlist for a casual Bottom and Footwear.
- If those are not in the wishlist, it pulls the user’s **bought black jeans** and a **trending white sneaker**.
- The result is a 3-piece look: *Graphic Tee + Black Jeans + White Sneakers*.

### 9.7 Look Theme Copy
Each look gets a human-readable title to make the suggestion feel curated:
- **Footwear as the seed** → `Complete the look for your {style} {brand}`.
- **Past purchase used** → `Styled with something you bought in {month}`.
- **Trending basic used** → `Trending basics picked for you`.
- **Default** → `Styled around your {brand} {category}`.

### 9.8 Outcome
- The look is rendered as a horizontal scrollable card on the wishlist page.
- It contains item thumbnails, brand names, prices, a total look price, and MRP savings.
- Users can add the entire look to the bag with one tap (see Section 10).

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
