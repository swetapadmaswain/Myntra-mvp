import { useNavigate, Link } from 'react-router-dom'
import { Menu, Search, Heart, ShoppingBag } from 'lucide-react'
import ProductImage from '../components/ProductImage'
import BottomNav from '../components/BottomNav'
import { useApp } from '../context/AppContext'

function Header() {
  const { bagCount } = useApp()
  return (
    <header className="sticky top-0 z-20 bg-white">
      <div className="flex items-center gap-3 px-4 py-3">
        <button className="p-1 text-myntra-dark">
          <Menu size={22} />
        </button>
        <span className="text-2xl font-black tracking-tighter text-myntra-pink">M</span>
        <div className="flex-1" />
        <button className="p-1 text-myntra-dark">
          <Search size={20} />
        </button>
        <Link to="/wishlist" className="relative p-1 text-myntra-dark">
          <Heart size={20} />
        </Link>
        <Link to="/cart" className="relative p-1 text-myntra-dark">
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

const stories = [
  { key: 'Men', label: 'MEN', img: 'https://picsum.photos/seed/men/100/100' },
  { key: 'Women', label: 'WOMEN', img: 'https://picsum.photos/seed/women/100/100' },
  { key: 'Kids', label: 'KIDS', img: 'https://picsum.photos/seed/kids/100/100' },
  { key: 'Home', label: 'HOME', img: 'https://picsum.photos/seed/home/100/100' },
]

function CategoryStories() {
  const navigate = useNavigate()
  return (
    <div className="no-scrollbar flex gap-5 overflow-x-auto bg-white px-4 py-4">
      {stories.map((s) => (
        <button
          key={s.key}
          onClick={() => navigate(`/category/${s.key}`)}
          className="flex flex-col items-center gap-2"
        >
          <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-myntra-pink/20">
            <ProductImage src={s.img} alt={s.label} className="h-full w-full" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wide text-myntra-dark">{s.label}</span>
        </button>
      ))}
    </div>
  )
}

function OfferBanner() {
  return (
    <div className="mx-4 mb-3 overflow-hidden rounded-xl bg-gradient-to-r from-sky-400 to-sky-600 p-4 text-white shadow-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-lg font-black italic">FLAT ₹300 OFF</p>
          <p className="text-xs font-medium">And free delivery on first order!</p>
        </div>
        <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold">SHOP NOW</span>
      </div>
    </div>
  )
}

function FreeShippingBanner() {
  return (
    <div className="mx-4 mb-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 p-3 text-white shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-black">FREE SHIPPING</p>
          <p className="text-[10px]">ON ALL ORDERS</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-black">TRY & BUY AT</p>
          <p className="text-lg font-black leading-4">₹1</p>
        </div>
      </div>
    </div>
  )
}

function SaleBanner() {
  return (
    <div className="mx-4 mb-3 rounded-xl bg-gradient-to-br from-violet-900 to-fuchsia-900 p-4 text-white shadow-card">
      <div className="flex items-center gap-3">
        <div className="rounded-lg border-2 border-white/30 p-2 text-center">
          <p className="text-[10px] font-bold leading-3">END OF</p>
          <p className="text-sm font-black leading-4">REASON</p>
          <p className="text-[10px] font-bold leading-3">SALE</p>
        </div>
        <div>
          <p className="text-xs font-bold">22nd - 25th DEC</p>
          <p className="text-lg font-black">50-80% OFF</p>
          <p className="text-[10px]">INDIA'S BIGGEST FASHION SALE IS BACK</p>
        </div>
      </div>
    </div>
  )
}

function SavingsBanner() {
  return (
    <div className="mx-4 mb-3 rounded-xl bg-gradient-to-r from-rose-200 to-amber-100 p-4 text-myntra-dark shadow-card">
      <p className="text-lg font-black uppercase leading-5">Double the Savings</p>
      <p className="mt-1 text-xs font-bold">22nd - 25th DEC | Extra 20% OFF</p>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-myntra-bg pb-24 shadow-look">
      <Header />
      <CategoryStories />
      <OfferBanner />
      <FreeShippingBanner />
      <SaleBanner />
      <SavingsBanner />
      <BottomNav active="myntra" />
    </div>
  )
}
