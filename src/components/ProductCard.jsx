import { Heart } from 'lucide-react'
import ProductImage from './ProductImage'
import { useApp } from '../context/AppContext'
import { formatINR } from '../data/mockData'

export default function ProductCard({ product, onToggle }) {
  const { isInWishlist } = useApp()
  const saved = isInWishlist(product.id)

  return (
    <article className="w-40 shrink-0 overflow-hidden bg-white shadow-card">
      <div className="relative">
        <ProductImage
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          className="aspect-[3/4] w-full"
        />
        <button
          onClick={() => onToggle(product)}
          aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-myntra-dark shadow-card"
        >
          <Heart
            size={15}
            className={saved ? 'fill-myntra-pink text-myntra-pink' : 'text-myntra-grey'}
            strokeWidth={2.2}
          />
        </button>
      </div>

      <div className="px-2.5 pt-2 pb-2.5">
        <p className="truncate text-[12px] font-bold leading-4">{product.brand}</p>
        <p className="truncate text-[11px] leading-4 text-myntra-grey">{product.name}</p>
        <div className="mt-1 flex flex-wrap items-baseline gap-x-1">
          <span className="text-[12px] font-bold">{formatINR(product.price)}</span>
          <span className="text-[10px] text-myntra-grey line-through">
            {formatINR(product.mrp)}
          </span>
          <span className="text-[10px] font-bold text-myntra-orange">
            ({product.discount}% OFF)
          </span>
        </div>
      </div>
    </article>
  )
}
