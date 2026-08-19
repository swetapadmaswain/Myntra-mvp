import { useParams, useNavigate } from 'react-router-dom'
import { ChevronLeft, Search, Heart, ShoppingBag, Info, ShoppingCart, Bookmark } from 'lucide-react'
import { useState } from 'react'
import ProductImage from '../components/ProductImage'
import { catalogProducts, formatINR } from '../data/mockData'
import { useApp } from '../context/AppContext'

function Header({ bagCount, navigate }) {
  return (
    <header className="sticky top-0 z-20 bg-white">
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

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = catalogProducts.find((p) => p.id === id)
  const { bagCount, toggleWishlist, isInWishlist, addToBag } = useApp()
  const [activeDot, setActiveDot] = useState(0)

  if (!product) {
    return (
      <div className="mx-auto flex min-h-screen max-w-md items-center justify-center bg-myntra-bg">
        <p className="text-sm text-myntra-grey">Product not found</p>
      </div>
    )
  }

  const saved = isInWishlist(product.id)

  return (
    <div className="mx-auto min-h-screen max-w-md bg-white pb-28 shadow-look">
      <Header bagCount={bagCount} navigate={navigate} />

      <div className="relative bg-neutral-50">
        <ProductImage src={product.image} alt={product.name} className="aspect-[3/4] w-full" />
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => setActiveDot(i)}
              className={`h-1.5 w-1.5 rounded-full ${i === activeDot ? 'bg-myntra-pink' : 'bg-neutral-300'}`}
            />
          ))}
        </div>
      </div>

      <div className="px-4 pt-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h1 className="text-sm font-bold text-myntra-dark">{product.brand}</h1>
            <p className="text-sm text-myntra-grey">{product.name}</p>
          </div>
          <button className="flex shrink-0 items-center gap-1 text-[10px] font-bold text-myntra-pink">
            <Info size={12} /> + INFO
          </button>
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-bold">{formatINR(product.price)}</span>
          <span className="text-sm text-myntra-grey line-through">{formatINR(product.mrp)}</span>
          <span className="text-sm font-bold text-myntra-orange">({product.discount}% OFF)</span>
        </div>
        <p className="mt-1 text-[10px] text-myntra-grey">Additional tax may apply, charged at checkout</p>

        <div className="mt-4 rounded-lg bg-neutral-50 p-3">
          <p className="text-xs font-bold text-myntra-dark">Delivery by 2-3 days</p>
          <p className="text-[10px] text-myntra-grey">Free delivery on first order</p>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-20 mx-auto max-w-md border-t border-myntra-line bg-white px-4 py-3">
        <div className="flex gap-3">
          <button
            onClick={() => toggleWishlist(product)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-md border py-3 text-sm font-bold ${
              saved ? 'border-myntra-pink bg-pink-50 text-myntra-pink' : 'border-myntra-line text-myntra-dark'
            }`}
          >
            <Bookmark size={16} className={saved ? 'fill-myntra-pink text-myntra-pink' : ''} />
            {saved ? 'SAVED' : 'SAVE'}
          </button>
          <button
            onClick={() => {
              addToBag(product)
              navigate('/cart')
            }}
            className="flex-[2] flex items-center justify-center gap-2 rounded-md bg-myntra-pink py-3 text-sm font-bold text-white"
          >
            <ShoppingCart size={16} /> ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  )
}
