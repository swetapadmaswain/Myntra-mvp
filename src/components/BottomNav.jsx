import { Heart, LayoutGrid, ShoppingBag, User } from 'lucide-react'
import { Link } from 'react-router-dom'

const tabs = [
  { key: 'myntra', label: 'Myntra', to: '/', icon: null },
  { key: 'categories', label: 'Categories', to: '/categories', icon: LayoutGrid },
  { key: 'wishlist', label: 'Wishlist', to: '/wishlist', icon: Heart },
  { key: 'cart', label: 'Bag', to: '/cart', icon: ShoppingBag },
]

export default function BottomNav({ active = 'wishlist' }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto max-w-md border-t border-myntra-line bg-white">
      <ul className="flex items-stretch justify-between px-2 pb-1 pt-2">
        {tabs.map(({ key, label, to, icon: Icon }) => {
          const isActive = key === active
          return (
            <li key={key} className="flex-1">
              <Link
                to={to}
                className={`flex w-full flex-col items-center gap-1 py-1 ${
                  isActive ? 'text-myntra-pink' : 'text-myntra-grey'
                }`}
              >
                {Icon ? (
                  <Icon size={20} strokeWidth={isActive ? 2.4 : 1.8} fill={isActive && (key === 'wishlist' || key === 'cart') ? 'currentColor' : 'none'} />
                ) : (
                  <span className="text-[15px] font-black leading-5 tracking-tight">M</span>
                )}
                <span className={`text-[10px] leading-3 ${isActive ? 'font-bold' : 'font-medium'}`}>
                  {label}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
