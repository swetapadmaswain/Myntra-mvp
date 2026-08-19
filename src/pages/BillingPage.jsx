import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, MapPin, CreditCard, ShieldCheck, CircleCheck } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { formatINR } from '../data/mockData'

const addresses = [
  { id: 1, type: 'HOME', name: 'Rahul Sharma', line: '14B, Koramangala 5th Block', city: 'Bengaluru, Karnataka - 560034', phone: '9876543210' },
  { id: 2, type: 'WORK', name: 'Rahul Sharma', line: 'Indiranagar 100ft Road', city: 'Bengaluru, Karnataka - 560038', phone: '9876543210' },
]

const paymentMethods = [
  { id: 'card', label: 'Credit / Debit Card' },
  { id: 'upi', label: 'UPI' },
  { id: 'cod', label: 'Cash on Delivery' },
]

export default function BillingPage() {
  const navigate = useNavigate()
  const { bag, showToast } = useApp()
  const [selectedAddress, setSelectedAddress] = useState(1)
  const [selectedPayment, setSelectedPayment] = useState('upi')
  const [placed, setPlaced] = useState(false)

  const subtotal = bag.reduce((sum, item) => sum + item.price, 0)
  const discount = Math.round(subtotal * 0.18)
  const total = subtotal - discount

  const handlePlaceOrder = () => {
    setPlaced(true)
    showToast('Order placed successfully!')
  }

  if (placed) {
    return (
      <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center bg-white px-8 text-center shadow-look">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CircleCheck size={40} strokeWidth={2.5} />
        </div>
        <h2 className="text-xl font-extrabold text-myntra-dark">Order placed!</h2>
        <p className="mt-2 text-sm text-myntra-grey">
          Your order worth <span className="font-bold text-myntra-dark">{formatINR(total)}</span> has been confirmed.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-8 rounded-xl bg-myntra-pink px-8 py-3 text-sm font-bold text-white"
        >
          Continue shopping
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
        <h1 className="flex-1 text-base font-extrabold">Checkout</h1>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto p-4 pb-40">
        <section className="rounded-xl bg-white p-4 shadow-card">
          <div className="mb-3 flex items-center gap-2">
            <MapPin size={18} className="text-myntra-pink" />
            <h2 className="text-sm font-extrabold">Deliver to</h2>
          </div>
          <div className="space-y-3">
            {addresses.map((addr) => (
              <label
                key={addr.id}
                className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 ${
                  selectedAddress === addr.id ? 'border-myntra-pink bg-pink-50/50' : 'border-myntra-line'
                }`}
              >
                <input
                  type="radio"
                  name="address"
                  checked={selectedAddress === addr.id}
                  onChange={() => setSelectedAddress(addr.id)}
                  className="mt-1 accent-myntra-pink"
                />
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-[10px] font-bold text-myntra-pink">{addr.type}</span>
                    <span className="text-sm font-bold">{addr.name}</span>
                  </div>
                  <p className="text-xs text-myntra-grey">{addr.line}</p>
                  <p className="text-xs text-myntra-grey">{addr.city}</p>
                  <p className="text-xs text-myntra-grey">+91 {addr.phone}</p>
                </div>
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-xl bg-white p-4 shadow-card">
          <div className="mb-3 flex items-center gap-2">
            <CreditCard size={18} className="text-myntra-pink" />
            <h2 className="text-sm font-extrabold">Payment method</h2>
          </div>
          <div className="space-y-2">
            {paymentMethods.map((method) => (
              <label
                key={method.id}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 ${
                  selectedPayment === method.id ? 'border-myntra-pink bg-pink-50/50' : 'border-myntra-line'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPayment === method.id}
                  onChange={() => setSelectedPayment(method.id)}
                  className="accent-myntra-pink"
                />
                <span className="text-sm font-semibold">{method.label}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-xl bg-white p-4 shadow-card">
          <div className="mb-3 flex items-center gap-2">
            <ShieldCheck size={18} className="text-myntra-pink" />
            <h2 className="text-sm font-extrabold">Price details</h2>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-myntra-grey">
              <span>Total MRP</span>
              <span>{formatINR(subtotal + discount)}</span>
            </div>
            <div className="flex justify-between text-myntra-grey">
              <span>Discount on MRP</span>
              <span className="text-emerald-600">- {formatINR(discount)}</span>
            </div>
            <div className="flex justify-between text-myntra-grey">
              <span>Delivery</span>
              <span className="text-emerald-600">FREE</span>
            </div>
            <div className="mt-2 flex justify-between border-t border-myntra-line pt-2 text-base font-extrabold">
              <span>Total</span>
              <span>{formatINR(total)}</span>
            </div>
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-myntra-line bg-white p-4" style={{ maxWidth: '28rem', margin: '0 auto' }}>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-bold text-myntra-grey">Total payable</span>
          <span className="text-lg font-extrabold">{formatINR(total)}</span>
        </div>
        <button
          onClick={handlePlaceOrder}
          className="w-full rounded-xl bg-myntra-pink py-3.5 text-sm font-extrabold text-white shadow-md"
        >
          Pay {formatINR(total)}
        </button>
      </div>
    </div>
  )
}
