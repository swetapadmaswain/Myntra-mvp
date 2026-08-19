import { wishlistItems } from './mockData'

export const boughtItems = [
  {
    id: 'b_1',
    brand: 'Levis',
    name: 'Black Slim Jeans',
    price: 1799,
    mrp: 2499,
    size: '32',
    category: 'Bottom',
    style: 'casual',
    boughtWhen: 'June',
    image: "https://loremflickr.com/400/600/black,jeans",
    source: 'bought',
  },
  {
    id: 'b_2',
    brand: 'H&M',
    name: 'White Crew Neck Tee',
    price: 499,
    mrp: 799,
    size: 'M',
    category: 'Top',
    style: 'casual',
    boughtWhen: 'May',
    image: "https://loremflickr.com/400/600/white,tshirt",
    source: 'bought',
  },
  {
    id: 'b_3',
    brand: 'Arrow',
    name: 'Navy Formal Trousers',
    price: 1899,
    mrp: 2999,
    size: '32',
    category: 'Bottom',
    style: 'formal',
    boughtWhen: 'April',
    image: "https://loremflickr.com/400/600/formal,trousers",
    source: 'bought',
  },
]

export const trendingBasics = [
  {
    id: 't_1',
    brand: 'Roadster',
    name: 'Plain White Sneakers',
    price: 1299,
    mrp: 1999,
    size: 'UK 8',
    category: 'Footwear',
    style: 'casual',
    image: "https://loremflickr.com/400/600/white,sneakers",
    source: 'trending_basic',
  },
  {
    id: 't_2',
    brand: 'Highlander',
    name: 'Standard Blue Denim',
    price: 1199,
    mrp: 1999,
    size: '32',
    category: 'Bottom',
    style: 'casual',
    image: "https://loremflickr.com/400/600/blue,denim",
    source: 'trending_basic',
  },
  {
    id: 't_3',
    brand: 'Van Heusen',
    name: 'Oxford Leather Shoes',
    price: 2499,
    mrp: 3999,
    size: 'UK 8',
    category: 'Footwear',
    style: 'formal',
    image: "https://loremflickr.com/400/600/oxford,shoes",
    source: 'trending_basic',
  },
  {
    id: 't_4',
    brand: 'Marks & Spencer',
    name: 'Beige Chino Trousers',
    price: 1599,
    mrp: 2499,
    size: '32',
    category: 'Bottom',
    style: 'formal',
    image: "https://loremflickr.com/400/600/beige,chino",
    source: 'trending_basic',
  },
  {
    id: 't_5',
    brand: 'Nike',
    name: 'Basic Dry-Fit Tee',
    price: 799,
    mrp: 1299,
    size: 'M',
    category: 'Top',
    style: 'sporty',
    image: "https://loremflickr.com/400/600/sports,tshirt",
    source: 'trending_basic',
  },
]

function detectCategory(name) {
  const lower = name.toLowerCase()
  if (/tee|shirt|polo|blazer|sweater|hoodie|tank|kurta|tunic|top/.test(lower)) return 'Top'
  if (/trouser|pant|jean|short|cargo|chino|jogger|legging|bottom/.test(lower)) return 'Bottom'
  if (/sneaker|shoe|derby|loafer|boot|sandal|flip/.test(lower)) return 'Footwear'
  return 'Top'
}

function detectStyle(name) {
  const lower = name.toLowerCase()
  if (/blazer|linen|chino|derby|formal|oxford/.test(lower)) return 'formal'
  if (/dri-fit|training|gym|sport|dry/.test(lower)) return 'sporty'
  return 'casual'
}

function pickComplement(category, style, usedIds, wishlist) {
  const fromWishlist = wishlist
    .filter((i) => !usedIds.has(i.id) && detectCategory(i.name) === category && detectStyle(i.name) === style)
    .slice(0, 1)[0]
  if (fromWishlist) return { ...fromWishlist, category: detectCategory(fromWishlist.name), source: 'wishlist' }

  const fromBought = boughtItems
    .filter((i) => i.category === category && i.style === style && !usedIds.has(i.id))
    .slice(0, 1)[0]
  if (fromBought) return fromBought

  const fromTrending = trendingBasics
    .filter((i) => i.category === category && i.style === style)
    .slice(0, 1)[0]
  if (fromTrending) return fromTrending

  // ultimate neutral fallback
  return trendingBasics.find((i) => i.category === category) || null
}

function themeFor(seed, style, usedBought, usedTrending) {
  if (seed.category === 'Footwear') return `Complete the look for your ${style} ${seed.brand}`
  if (usedBought) return `Styled with something you bought in ${usedBought}`
  if (usedTrending) return 'Trending basics picked for you'
  return `Styled around your ${seed.brand} ${seed.category.toLowerCase()}`
}

export function buildLooks(wishlist) {
  if (!wishlist.length) return []

  const looks = []
  const maxLooks = 3

  for (let idx = 0; idx < Math.min(wishlist.length, maxLooks); idx++) {
    const seedRaw = wishlist[idx]
    const seed = {
      ...seedRaw,
      category: detectCategory(seedRaw.name),
      style: detectStyle(seedRaw.name),
      source: 'wishlist',
    }

    const used = new Set([seed.id])
    const lookItems = [seed]
    const categories = ['Top', 'Bottom', 'Footwear'].filter((c) => c !== seed.category)

    for (const cat of categories) {
      const item = pickComplement(cat, seed.style, used, wishlist)
      if (item) {
        used.add(item.id)
        lookItems.push(item)
      }
    }

    const bought = lookItems.find((i) => i.source === 'bought')
    const trending = lookItems.find((i) => i.source === 'trending_basic')
    const mrp = lookItems.reduce((sum, i) => sum + (i.mrp || i.price), 0)
    const total = lookItems.reduce((sum, i) => sum + i.price, 0)

    looks.push({
      outfitId: `look_${seed.id}`,
      theme: themeFor(seed, seed.style, bought?.boughtWhen, !!trending),
      totalPrice: total,
      mrp,
      fallback: bought || trending,
      items: lookItems,
    })
  }

  return looks
}
