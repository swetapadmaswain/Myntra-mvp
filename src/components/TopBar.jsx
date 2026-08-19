import { ChevronLeft, Search, ShoppingBag } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function TopBar({ bagCount, itemCount }) {
  const navigate = useNavigate()
  return (
    <header className="sticky top-0 z-20 border-b border-myntra-line bg-white/95 backdrop-blur">
      <div className="flex items-center gap-3 px-4 py-3">
        <button onClick={() => navigate(-1)} className="-ml-1 p-1 text-myntra-dark" aria-label="Back">
          <ChevronLeft size={22} />
        </button>
        <div className="flex flex-1 items-baseline gap-2">
          <h1 className="text-base font-bold uppercase tracking-wide">Wishlist</h1>
          <span className="text-xs text-myntra-grey">{itemCount} items</span>
        </div>
        <button className="p-1 text-myntra-dark" aria-label="Search">
          <Search size={20} />
        </button>
        <Link to="/cart" className="relative p-1 text-myntra-dark" aria-label="Bag">
          <ShoppingBag size={20} />
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
