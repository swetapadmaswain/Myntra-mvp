import { useNavigate, Link } from 'react-router-dom'
import { Sparkles, ChevronRight, Search, Heart, ShoppingBag } from 'lucide-react'
import ProductImage from '../components/ProductImage'
import BottomNav from '../components/BottomNav'
import { useApp } from '../context/AppContext'
import { formatINR } from '../data/mockData'

function Header() {
  const { bagCount } = useApp()
  return (
    <header className="sticky top-0 z-20 border-b border-myntra-line bg-white/95 backdrop-blur">
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="flex flex-1 items-center gap-2 rounded-md border border-myntra-line bg-myntra-bg px-3 py-2">
          <Search size={16} className="text-myntra-grey" />
          <span className="text-sm text-myntra-grey">Search for brands & products</span>
        </div>
        <Link to="/wishlist" className="relative p-1 text-myntra-dark" aria-label="Wishlist">
          <Heart size={22} />
        </Link>
        <Link to="/cart" className="relative p-1 text-myntra-dark" aria-label="Bag">
          <ShoppingBag size={22} />
          {bagCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-myntra-pink px-1 text-[10px] font-bold text-white">
              {bagCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}

function NudgeCard() {
  const navigate = useNavigate()
  const { looks, bagCount } = useApp()
  const featured = looks[0]

  if (!featured) return null

  return (
    <div className="mx-4 mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-[#fff1f4] to-[#f5f5f6] shadow-look">
      <div className="flex items-start gap-3 p-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-myntra-pink text-white">
          <Sparkles size={20} />
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-bold uppercase tracking-wide text-myntra-pink">
            New in Wishlist
          </p>
          <h2 className="text-sm font-extrabold leading-5 text-myntra-dark">
            Style Studio is here
          </h2>
          <p className="mt-0.5 text-xs leading-4 text-myntra-grey">
            Build complete outfits from your saved items. Tap to explore.
          </p>
          <button
            onClick={() => navigate('/wishlist')}
            className="mt-3 inline-flex items-center rounded-lg bg-myntra-pink px-3 py-1.5 text-xs font-bold text-white"
          >
            View your looks
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
      <div className="flex gap-2 border-t border-white/60 px-4 pb-4 pt-3">
        {featured.items.slice(0, 3).map((item) => (
          <div key={item.id} className="w-16 shrink-0">
            <ProductImage
              src={item.image}
              alt={`${item.brand} ${item.name}`}
              className="aspect-[3/4] w-full rounded-lg"
            />
            <p className="mt-1 truncate text-[9px] text-myntra-grey">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function CategoryGrid() {
  const labels = ['Men', 'Women', 'Kids', 'Home', 'Beauty']
  return (
    <div className="grid grid-cols-3 gap-2 px-4 py-4">
      {labels.map((label) => (
        <Link
          key={label}
          to={`/categories?cat=${label}`}
          className="flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-300 text-xs font-bold text-myntra-dark active:scale-95 transition-transform"
        >
          {label}
        </Link>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-myntra-bg pb-24 shadow-look">
      <Header />
      <NudgeCard />
      <CategoryGrid />
      <BottomNav active="myntra" />
    </div>
  )
}
