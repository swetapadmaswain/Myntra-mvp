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
          image: "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/1.webp",
          source: 'wishlist',
        },
        {
          id: 'item_2',
          category: 'Bottom',
          brand: 'Highlander',
          name: 'Loose Fit Cargo Trousers',
          size: '32',
          price: 1299,
          image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cargo%20pants%20001.jpg?width=500",
          source: 'wishlist',
        },
        {
          id: 'item_3',
          category: 'Footwear',
          brand: 'Puma',
          name: 'Court Classic Sneakers',
          size: 'UK 8',
          price: 1299,
          image: "https://commons.wikimedia.org/wiki/Special:FilePath/A%20pair%20of%20white%20shoes.jpg?width=500",
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
          image: "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp",
          source: 'wishlist',
        },
        {
          id: 'item_5',
          category: 'Bottom',
          brand: 'Levis',
          name: 'Tapered Chino Trousers',
          size: '32',
          price: 1799,
          image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jeans%202009.jpg?width=500",
          source: 'catalog_recommendation',
        },
        {
          id: 'item_6',
          category: 'Footwear',
          brand: 'Clarks',
          name: 'Leather Derby Shoes',
          size: 'UK 8',
          price: 899,
          image: "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/1.webp",
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
    image: "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/1.webp",
  },
  {
    id: 'w_2',
    brand: 'Highlander',
    name: 'Loose Fit Cargo Trousers',
    price: 1299,
    mrp: 2199,
    discount: 41,
    size: '32',
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cargo%20pants%20001.jpg?width=500",
  },
  {
    id: 'w_3',
    brand: 'H&M',
    name: 'Slim Fit Linen Shirt',
    price: 1499,
    mrp: 2299,
    discount: 34,
    size: 'M',
    image: "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp",
  },
  {
    id: 'w_4',
    brand: 'Clarks',
    name: 'Leather Derby Shoes',
    price: 899,
    mrp: 1999,
    discount: 55,
    size: 'UK 8',
    image: "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/1.webp",
  },
  {
    id: 'w_5',
    brand: 'Nike',
    name: 'Dri-FIT Training Shorts',
    price: 1195,
    mrp: 1795,
    discount: 33,
    size: 'M',
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jeans%202009.jpg?width=500",
  },
  {
    id: 'w_6',
    brand: 'Zara',
    name: 'Textured Knit Polo',
    price: 1990,
    mrp: 2990,
    discount: 33,
    size: 'M',
    image: "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/1.webp",
  },
]

export const catalogProducts = [
  { id: 'c_1', brand: 'Roadster', name: 'Printed Round Neck T-shirt', price: 599, mrp: 999, discount: 40, size: 'M', category: 'Men', image: 'https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/1.webp' },
  { id: 'c_2', brand: 'Highlander', name: 'Slim Fit Jeans', price: 1199, mrp: 1999, discount: 40, size: '32', category: 'Men', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jeans%202009.jpg?width=500' },
  { id: 'c_3', brand: 'Puma', name: 'Running Shoes', price: 2499, mrp: 3999, discount: 37, size: 'UK 9', category: 'Men', image: 'https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/1.webp' },
  { id: 'c_4', brand: 'H&M', name: 'Cotton Casual Shirt', price: 899, mrp: 1499, discount: 40, size: 'M', category: 'Men', image: 'https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/1.webp' },
  { id: 'c_5', brand: 'Mango', name: 'Floral Wrap Dress', price: 1899, mrp: 2999, discount: 36, size: 'S', category: 'Women', image: 'https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/1.webp' },
  { id: 'c_6', brand: 'Zara', name: 'High Waist Trousers', price: 1599, mrp: 2599, discount: 38, size: 'M', category: 'Women', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cargo%20pants%20002.jpg?width=500' },
  { id: 'c_7', brand: 'Levis', name: 'Denim Jacket', price: 2299, mrp: 3499, discount: 34, size: 'M', category: 'Women', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2002%20Junya%20Watanabe%20for%20Comme%20des%20Gar%C3%A7ons%20jacket%2C%20blue%20denim%20jeans%20patchwork%2001.jpg?width=500' },
  { id: 'c_8', brand: 'Marks & Spencer', name: 'Linen Kurti', price: 1299, mrp: 1999, discount: 35, size: 'M', category: 'Women', image: 'https://cdn.dummyjson.com/product-images/tops/gray-dress/1.webp' },
  { id: 'c_9', brand: 'Nike', name: 'Boys Sports T-shirt', price: 799, mrp: 1299, discount: 38, size: '8-9Y', category: 'Kids', image: 'https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/1.webp' },
  { id: 'c_10', brand: 'Peppermint', name: 'Girls Denim Dungarees', price: 999, mrp: 1599, discount: 37, size: '6-7Y', category: 'Kids', image: 'https://cdn.dummyjson.com/product-images/tops/blue-frock/1.webp' },
  { id: 'c_11', brand: 'Maybelline', name: 'Fit Me Foundation', price: 449, mrp: 699, discount: 35, size: '30ml', category: 'Beauty', image: 'https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp' },
  { id: 'c_12', brand: 'Westside Home', name: 'Decorative Table Lamp', price: 1299, mrp: 2199, discount: 40, size: 'One Size', category: 'Home', image: 'https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/1.webp' },
  { id: 'c_13', brand: 'Fossil', name: 'Minimalist Analog Watch', price: 2499, mrp: 3499, discount: 28, size: 'One Size', category: 'Accessories', image: 'https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/1.webp' },
  { id: 'c_14', brand: 'Ray-Ban', name: 'Classic Aviator Sunglasses', price: 1899, mrp: 2999, discount: 36, size: 'One Size', category: 'Accessories', image: 'https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/1.webp' },
  { id: 'c_15', brand: 'Lavie', name: 'Leather Tote Bag', price: 1599, mrp: 2599, discount: 38, size: 'One Size', category: 'Accessories', image: "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/1.webp" },
]

export const formatINR = (value) => `₹${value.toLocaleString('en-IN')}`
