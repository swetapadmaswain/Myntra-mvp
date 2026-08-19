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

export const catalogProducts = [
  { id: 'c_1', brand: 'Roadster', name: 'Printed Round Neck T-shirt', price: 599, mrp: 999, discount: 40, size: 'M', category: 'Men', image: 'https://picsum.photos/seed/c_1/400/600' },
  { id: 'c_2', brand: 'Highlander', name: 'Slim Fit Jeans', price: 1199, mrp: 1999, discount: 40, size: '32', category: 'Men', image: 'https://picsum.photos/seed/c_2/400/600' },
  { id: 'c_3', brand: 'Puma', name: 'Running Shoes', price: 2499, mrp: 3999, discount: 37, size: 'UK 9', category: 'Men', image: 'https://picsum.photos/seed/c_3/400/600' },
  { id: 'c_4', brand: 'H&M', name: 'Cotton Casual Shirt', price: 899, mrp: 1499, discount: 40, size: 'M', category: 'Men', image: 'https://picsum.photos/seed/c_4/400/600' },
  { id: 'c_5', brand: 'Mango', name: 'Floral Wrap Dress', price: 1899, mrp: 2999, discount: 36, size: 'S', category: 'Women', image: 'https://picsum.photos/seed/c_5/400/600' },
  { id: 'c_6', brand: 'Zara', name: 'High Waist Trousers', price: 1599, mrp: 2599, discount: 38, size: 'M', category: 'Women', image: 'https://picsum.photos/seed/c_6/400/600' },
  { id: 'c_7', brand: 'Levis', name: 'Denim Jacket', price: 2299, mrp: 3499, discount: 34, size: 'M', category: 'Women', image: 'https://picsum.photos/seed/c_7/400/600' },
  { id: 'c_8', brand: 'Marks & Spencer', name: 'Linen Kurti', price: 1299, mrp: 1999, discount: 35, size: 'M', category: 'Women', image: 'https://picsum.photos/seed/c_8/400/600' },
  { id: 'c_9', brand: 'Nike', name: 'Boys Sports T-shirt', price: 799, mrp: 1299, discount: 38, size: '8-9Y', category: 'Kids', image: 'https://picsum.photos/seed/c_9/400/600' },
  { id: 'c_10', brand: 'Peppermint', name: 'Girls Denim Dungarees', price: 999, mrp: 1599, discount: 37, size: '6-7Y', category: 'Kids', image: 'https://picsum.photos/seed/c_10/400/600' },
  { id: 'c_11', brand: 'Maybelline', name: 'Fit Me Foundation', price: 449, mrp: 699, discount: 35, size: '30ml', category: 'Beauty', image: 'https://picsum.photos/seed/c_11/400/600' },
  { id: 'c_12', brand: 'Westside Home', name: 'Cotton Bedsheet Set', price: 1299, mrp: 2199, discount: 40, size: 'King', category: 'Home', image: 'https://picsum.photos/seed/c_12/400/600' },
]

export const formatINR = (value) => `₹${value.toLocaleString('en-IN')}`
