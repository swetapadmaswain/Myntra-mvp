import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Minus, Plus, Trash2, Tag } from 'lucide-react'
import ProductImage from '../components/ProductImage'
import { useApp } from '../context/AppContext'
import { formatINR } from '../data/mockData'

export default function CartPage() {
  const { bag, removeFromBag, showToast } = useApp()
  const navigate = useNavigate()

  const subtotal = bag.reduce((sum, item) => sum + item.price, 0)
  const discount = Math.round(subtotal * 0.18)
  const delivery = subtotal > 0 ? 0 : 0
  const total = subtotal - discount + delivery
  const itemCount = bag.length

  const groupedByLook = useMemo(() => {
    const map = new Map()
    bag.forEach((item) => {
      const key = item.lookId || 'single'
      if (!map.has(key)) map.set(key, { theme: item.theme || null, items: [] })
      map.get(key).items.push(item)
    })
    return Array.from(map.entries()).map(([_, value]) => value)
  }, [bag])

  if (bag.length === 0) {
    return (
      <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center bg-white px-6 text-center shadow-look">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 rounded-full p-2 text-myntra-dark"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="mb-4 text-6xl">🛍️</div>
        <h2 className="text-lg font-extrabold">Your bag is empty</h2>
        <p className="mt-1 text-sm text-myntra-grey">Add items from the wishlist to get started.</p>
        <button
          onClick={() => navigate('/wishlist')}
          className="mt-6 rounded-xl bg-myntra-pink px-6 py-3 text-sm font-bold text-white"
        >
          Browse wishlist
        </button>
      </div>
    )
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-myntra-bg shadow-look">
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-myntra-line bg-white/95 px-4 py-3 backdrop-blur">
        <button onClick={() => navigate(-1)} className="-ml-1 p-1 text-myntra-dark">
          <ChevronLeft size={22} />
        </button>
        <h1 className="flex-1 text-base font-extrabold">Shopping Bag</h1>
        <span className="text-xs text-myntra-grey">{itemCount} items</span>
      </header>

      <div className="flex-1 overflow-y-auto px-4 pb-40 pt-4">
        <div className="mb-4 flex items-center gap-2 rounded-lg bg-white p-3 text-xs text-myntra-dark shadow-card">
          <Tag size={16} className="text-myntra-pink" />
          <span className="font-semibold">Shop more & get flat ₹100 off</span>
        </div>

        {groupedByLook.map((group, gi) => (
          <div key={gi} className="mb-4 rounded-xl bg-white p-3 shadow-card">
            {group.theme && (
              <div className="mb-3 flex items-center gap-1.5 text-xs font-bold text-myntra-pink">
                <span className="rounded bg-myntra-pink/10 px-1.5 py-0.5">LOOK</span>
                {group.theme}
              </div>
            )}
            <div className="flex flex-col gap-4">
              {group.items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <ProductImage
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-20 rounded-lg"
                  />
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm font-bold">{item.brand}</p>
                    <p className="truncate text-xs text-myntra-grey">{item.name}</p>
                    <p className="mt-1 text-xs text-myntra-grey">Size: {item.size}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-sm font-extrabold">{formatINR(item.price)}</span>
                      <button
                        onClick={() => removeFromBag(item.id)}
                        className="rounded-full p-1.5 text-myntra-grey hover:text-myntra-pink"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-myntra-line bg-white p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]" style={{ maxWidth: '28rem', margin: '0 auto' }}>
        <div className="mb-3 flex items-center justify-between text-sm">
          <span className="text-myntra-grey">Total MRP</span>
          <span className="font-semibold">{formatINR(subtotal + discount)}</span>
        </div>
        <div className="mb-3 flex items-center justify-between text-sm">
          <span className="text-myntra-grey">Discount on MRP</span>
          <span className="font-semibold text-emerald-600">- {formatINR(discount)}</span>
        </div>
        <div className="mb-4 flex items-center justify-between text-sm">
          <span className="text-myntra-grey">Delivery fee</span>
          <span className="font-semibold text-emerald-600">FREE</span>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-base font-extrabold">Total</span>
          <span className="text-lg font-extrabold">{formatINR(total)}</span>
        </div>
        <button
          onClick={() => navigate('/billing')}
          className="w-full rounded-xl bg-myntra-pink py-3.5 text-sm font-extrabold text-white shadow-md"
        >
          Place order
        </button>
      </div>
    </div>
  )
}
