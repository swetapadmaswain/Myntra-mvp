import { Check, Plus, Sparkles, ShoppingBag, TrendingUp } from 'lucide-react'
import ProductImage from './ProductImage'
import { formatINR } from '../data/mockData'

function badgeFor(item) {
  if (item.source === 'trending_basic')
    return { text: 'Trending basic', Icon: TrendingUp, className: 'bg-emerald-600' }
  if (item.source === 'bought')
    return {
      text: `Bought in ${item.boughtWhen || 'past'}`,
      Icon: ShoppingBag,
      className: 'bg-myntra-dark/90',
    }
  return null
}

function ItemThumb({ item }) {
  const badge = badgeFor(item)

  return (
    <div className="flex-1">
      <div className="relative overflow-hidden rounded-xl bg-neutral-100 shadow-card">
        <ProductImage
          src={item.image}
          alt={`${item.brand} ${item.name}`}
          className="h-28 w-full"
        />
        {badge && (
          <span
            className={`absolute left-1 top-1 flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white ${badge.className}`}
          >
            <badge.Icon size={10} />
            {badge.text}
          </span>
        )}
      </div>
      <p className="mt-2 truncate text-[11px] font-bold">{item.brand}</p>
      <p className="truncate text-[10px] text-myntra-grey">{item.category}</p>
      <p className="text-[11px] font-semibold">{formatINR(item.price)}</p>
    </div>
  )
}

export default function LookCard({ look, added, onAdd }) {
  const savings = look.mrp - look.totalPrice
  const hasFallback = look.fallback

  return (
    <article className="w-[19rem] shrink-0 snap-center rounded-2xl border border-myntra-line/60 bg-white p-4 shadow-look">
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-1 rounded-full bg-myntra-pink/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-myntra-pink">
          <Sparkles size={11} />
          {look.theme}
        </span>
        <span className="text-[10px] font-semibold text-myntra-grey">{look.items.length} pieces</span>
      </div>
      {hasFallback && (
        <p className="mb-2 text-[10px] leading-4 text-myntra-pink">
          We paired a wishlist item with basics so the look always works.
        </p>
      )}

      <div className="flex items-start gap-1">
        {look.items.map((item, index) => (
          <div key={item.id} className="flex min-w-0 flex-1 items-start gap-1">
            <ItemThumb item={item} />
            {index < look.items.length - 1 && (
              <div className="flex h-28 w-4 shrink-0 items-center justify-center">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-myntra-line text-myntra-dark">
                  <Plus size={10} strokeWidth={3} />
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-base font-bold">{formatINR(look.totalPrice)}</span>
        <span className="text-xs text-myntra-grey line-through">{formatINR(look.mrp)}</span>
        <span className="text-xs font-semibold text-emerald-600">
          Save {formatINR(savings)}
        </span>
      </div>
      <p className="mt-0.5 text-[10px] text-myntra-grey">
        Sizes pre-selected from your profile · {look.items.map((i) => i.size).join(' · ')}
      </p>

      <button
        onClick={() => onAdd(look)}
        disabled={added}
        className={`mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-colors ${
          added
            ? 'bg-emerald-600 text-white'
            : 'bg-myntra-pink text-white active:bg-[#e0355d]'
        }`}
      >
        {added ? (
          <>
            <Check size={16} strokeWidth={3} /> Look Added to Bag
          </>
        ) : (
          <>Add Look to Bag · {formatINR(look.totalPrice)}</>
        )}
      </button>
    </article>
  )
}
