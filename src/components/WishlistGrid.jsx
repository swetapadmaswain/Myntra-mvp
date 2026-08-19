import { X } from 'lucide-react'
import ProductImage from './ProductImage'
import { useApp } from '../context/AppContext'
import { formatINR } from '../data/mockData'

const sizes = ['XS','S','M','L','XL','28','30','32','34','UK 6','UK 7','UK 8','UK 9','UK 10']

function WishlistCard({ item, moved, onMove, onRemove }) {
  const { updateWishlistSize } = useApp()
  return (
    <article className="flex flex-col overflow-hidden bg-white shadow-card">
      <div className="relative">
        <ProductImage
          src={item.image}
          alt={`${item.brand} ${item.name}`}
          className="aspect-[3/4] w-full"
        />
        <button
          onClick={() => onRemove(item.id)}
          aria-label="Remove from wishlist"
          className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-myntra-dark shadow-card"
        >
          <X size={13} strokeWidth={2.5} />
        </button>
        <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 rounded-sm bg-white/95 px-1.5 py-0.5">
          <span className="text-[10px] font-semibold text-myntra-dark">Size:</span>
          <select
            value={item.size}
            onChange={(e) => updateWishlistSize(item.id, e.target.value)}
            className="max-w-[4.2rem] appearance-none bg-transparent text-[10px] font-semibold text-myntra-dark outline-none"
          >
            {sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex-1 px-2.5 pt-2">
        <p className="truncate text-[13px] font-bold leading-4">{item.brand}</p>
        <p className="truncate text-[12px] leading-4 text-myntra-grey">{item.name}</p>
        <div className="mt-1 flex flex-wrap items-baseline gap-x-1.5">
          <span className="text-[13px] font-bold">{formatINR(item.price)}</span>
          <span className="text-[11px] text-myntra-grey line-through">
            {formatINR(item.mrp)}
          </span>
          <span className="text-[11px] font-bold text-myntra-orange">
            ({item.discount}% OFF)
          </span>
        </div>
      </div>

      <button
        onClick={() => onMove(item.id)}
        disabled={moved}
        className={`mt-2 w-full border-t border-myntra-line py-2.5 text-[13px] font-bold uppercase tracking-[0.04em] ${
          moved ? 'text-emerald-600' : 'text-myntra-pink'
        }`}
      >
        {moved ? 'Added to Bag' : 'Move to Bag'}
      </button>
    </article>
  )
}

export default function WishlistGrid({ items, movedItems, onMove, onRemove }) {
  return (
    <section className="px-2.5 pb-28">
      <h3 className="px-1.5 py-3 text-[13px] font-bold uppercase tracking-[0.04em]">
        All Items <span className="font-normal text-myntra-grey">({items.length})</span>
      </h3>
      <div className="grid grid-cols-2 gap-2.5">
        {items.map((item) => (
          <WishlistCard
            key={item.id}
            item={item}
            moved={movedItems.includes(item.id)}
            onMove={onMove}
            onRemove={onRemove}
          />
        ))}
      </div>
    </section>
  )
}
