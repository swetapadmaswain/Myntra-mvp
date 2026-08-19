import { useParams, useNavigate } from 'react-router-dom'
import { ChevronLeft, Search, Heart, ShoppingBag, SlidersHorizontal, ArrowUpDown } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { catalogProducts } from '../data/mockData'
import { useApp } from '../context/AppContext'

function Header({ bagCount, navigate }) {
  return (
    <header className="sticky top-0 z-20 border-b border-myntra-line bg-white">
      <div className="flex items-center gap-3 px-4 py-3">
        <button onClick={() => navigate(-1)} className="-ml-1 p-1 text-myntra-dark">
          <ChevronLeft size={22} />
        </button>
        <span className="text-2xl font-black tracking-tighter text-myntra-pink">M</span>
        <div className="flex-1" />
        <button className="p-1 text-myntra-dark">
          <Search size={20} />
        </button>
        <button className="relative p-1 text-myntra-dark" onClick={() => navigate('/wishlist')}>
          <Heart size={20} />
        </button>
        <button className="relative p-1 text-myntra-dark" onClick={() => navigate('/cart')}>
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

export default function ProductList() {
  const { category } = useParams()
  const navigate = useNavigate()
  const { bagCount, toggleWishlist } = useApp()
  const products = catalogProducts.filter((p) => p.category === category)
  const title = category === 'Men' ? 'Men Tshirts' : category

  return (
    <div className="mx-auto min-h-screen max-w-md bg-myntra-bg pb-28 shadow-look">
      <Header bagCount={bagCount} navigate={navigate} />

      <div className="flex items-center justify-between border-b border-myntra-line bg-white px-4 py-2.5">
        <h1 className="text-sm font-extrabold">{title}</h1>
        <span className="text-xs text-myntra-grey">48/{products.length * 100}</span>
      </div>

      <div className="grid grid-cols-2 gap-0.5 bg-myntra-line p-0.5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => navigate(`/product/${product.id}`)}
            onToggle={toggleWishlist}
          />
        ))}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-20 mx-auto flex max-w-md justify-between border-t border-myntra-line bg-white px-6 py-3">
        <button className="flex items-center gap-2 text-xs font-bold uppercase text-myntra-dark">
          <ArrowUpDown size={14} /> SORT
        </button>
        <button className="flex items-center gap-2 text-xs font-bold uppercase text-myntra-dark">
          <SlidersHorizontal size={14} /> FILTER
        </button>
      </div>
    </div>
  )
}
