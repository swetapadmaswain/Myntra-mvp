/**
 * Mock payload that mirrors the contract the recommendation service would return.
 * The frontend renders whatever `recommendedLooks` contains — no styling logic lives here.
 *
 * `source` distinguishes items the user already saved ("wishlist") from items pulled in
 * from the catalog to complete the outfit ("catalog_recommendation").
 */
export const styleStudioResponse = {
  userId: 'user_987',
  recommendedLooks: [
    {
      outfitId: 'look_001',
      theme: 'Weekend Casual',
      totalPrice: 3497,
      mrp: 4999,
      items: [
        {
          id: 'item_1',
          category: 'Top',
          brand: 'Roadster',
          name: 'Graphic Print Oversized Tee',
          size: 'M',
          price: 899,
          image:
            'https://picsum.photos/seed/w_1/400/600',
          source: 'wishlist',
        },
        {
          id: 'item_2',
          category: 'Bottom',
          brand: 'Highlander',
          name: 'Loose Fit Cargo Trousers',
          size: '32',
          price: 1299,
          image:
            'https://picsum.photos/seed/w_2/400/600',
          source: 'wishlist',
        },
        {
          id: 'item_3',
          category: 'Footwear',
          brand: 'Puma',
          name: 'Court Classic Sneakers',
          size: 'UK 8',
          price: 1299,
          image:
            'https://picsum.photos/seed/w_3/400/600',
          source: 'catalog_recommendation',
        },
      ],
    },
    {
      outfitId: 'look_002',
      theme: 'Smart Evening',
      totalPrice: 4197,
      mrp: 5999,
      items: [
        {
          id: 'item_4',
          category: 'Top',
          brand: 'H&M',
          name: 'Slim Fit Linen Shirt',
          size: 'M',
          price: 1499,
          image:
            'https://picsum.photos/seed/w_4/400/600',
          source: 'wishlist',
        },
        {
          id: 'item_5',
          category: 'Bottom',
          brand: 'Levis',
          name: 'Tapered Chino Trousers',
          size: '32',
          price: 1799,
          image:
            'https://picsum.photos/seed/w_5/400/600',
          source: 'catalog_recommendation',
        },
        {
          id: 'item_6',
          category: 'Footwear',
          brand: 'Clarks',
          name: 'Leather Derby Shoes',
          size: 'UK 8',
          price: 899,
          image:
            'https://picsum.photos/seed/w_6/400/600',
          source: 'wishlist',
        },
      ],
    },
  ],
}

export const wishlistItems = [
  {
    id: 'w_1',
    brand: 'Roadster',
    name: 'Graphic Print Oversized Tee',
    price: 899,
    mrp: 1499,
    discount: 40,
    size: 'M',
    image:
      'https://picsum.photos/seed/w_7/400/600',
  },
  {
    id: 'w_2',
    brand: 'Highlander',
    name: 'Loose Fit Cargo Trousers',
    price: 1299,
    mrp: 2199,
    discount: 41,
    size: '32',
    image:
      'https://picsum.photos/seed/w_8/400/600',
  },
  {
    id: 'w_3',
    brand: 'H&M',
    name: 'Slim Fit Linen Shirt',
    price: 1499,
    mrp: 2299,
    discount: 34,
    size: 'M',
    image:
      'https://picsum.photos/seed/w_9/400/600',
  },
  {
    id: 'w_4',
    brand: 'Clarks',
    name: 'Leather Derby Shoes',
    price: 899,
    mrp: 1999,
    discount: 55,
    size: 'UK 8',
    image:
      'https://picsum.photos/seed/w_10/400/600',
  },
  {
    id: 'w_5',
    brand: 'Nike',
    name: 'Dri-FIT Training Shorts',
    price: 1195,
    mrp: 1795,
    discount: 33,
    size: 'M',
    image:
      'https://picsum.photos/seed/w_11/400/600',
  },
  {
    id: 'w_6',
    brand: 'Zara',
    name: 'Textured Knit Polo',
    price: 1990,
    mrp: 2990,
    discount: 33,
    size: 'M',
    image:
      'https://picsum.photos/seed/w_12/400/600',
  },
]

export const formatINR = (value) => `₹${value.toLocaleString('en-IN')}`
