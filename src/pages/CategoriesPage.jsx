import { useNavigate, useSearchParams } from 'react-router-dom'
import { ChevronLeft, Search, ShoppingBag } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import BottomNav from '../components/BottomNav'
import { useApp } from '../context/AppContext'
import { catalogProducts } from '../data/mockData'

const categories = ['All', 'Men', 'Women', 'Kids', 'Home', 'Beauty', 'Accessories']

function Header() {
  const { bagCount } = useApp()
  const navigate = useNavigate()
  return (
    <header className="sticky top-0 z-20 border-b border-myntra-line bg-white/95 backdrop-blur">
      <div className="flex items-center gap-3 px-4 py-3">
        <button onClick={() => navigate(-1)} className="-ml-1 p-1 text-myntra-dark" aria-label="Back">
          <ChevronLeft size={22} />
        </button>
        <h1 className="flex-1 text-base font-extrabold">Categories</h1>
        <button className="p-1 text-myntra-dark" aria-label="Search">
          <Search size={20} />
        </button>
        <button className="relative p-1 text-myntra-dark" aria-label="Bag" onClick={() => navigate('/cart')}>
          <ShoppingBag size={20} />
          {bagCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-myntra-pink px-1 text-[10px] font-bold text-white">
              {bagCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}

export default function CategoriesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('cat') || 'All'
  const { toggleWishlist, wishlist } = useApp()
  const uniqueCategories = ['Men', 'Women', 'Kids', 'Home', 'Beauty', 'Accessories']

  const productsByCategory = uniqueCategories.map((cat) => ({
    category: cat,
    products: catalogProducts.filter((p) => p.category === cat),
  }))

  const filtered =
    activeCategory === 'All'
      ? catalogProducts
      : catalogProducts.filter((p) => p.category === activeCategory)

  return (
    <div className="mx-auto min-h-screen max-w-md bg-myntra-bg pb-24 shadow-look">
      <Header />

      <div className="no-scrollbar flex gap-2 overflow-x-auto border-b border-myntra-line bg-white px-4 py-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSearchParams(cat === 'All' ? {} : { cat })}
            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold ${
              activeCategory === cat
                ? 'bg-myntra-pink text-white'
                : 'border border-myntra-line bg-white text-myntra-dark'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {activeCategory === 'All' ? (
        <div className="space-y-5 p-4">
          {productsByCategory.map(({ category, products }) => (
            <section key={category}>
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-sm font-extrabold uppercase tracking-wide">{category}</h2>
                <button className="text-xs font-bold text-myntra-pink">View all</button>
              </div>
              <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onToggle={toggleWishlist}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2.5 p-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onToggle={toggleWishlist} />
          ))}
        </div>
      )}

      <BottomNav active="categories" />
    </div>
  )
}
