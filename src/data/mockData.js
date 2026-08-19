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
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
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
            'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80',
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
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80',
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
            'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80',
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
            'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80',
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
            'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=600&q=80',
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
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
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
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80',
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
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80',
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
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=600&q=80',
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
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=600&q=80',
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
      'https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=600&q=80',
  },
]

export const formatINR = (value) => `₹${value.toLocaleString('en-IN')}`
