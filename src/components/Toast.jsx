import { useEffect } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function Toast({ message, onDismiss }) {
  useEffect(() => {
    if (!message) return
    const timer = setTimeout(onDismiss, 2200)
    return () => clearTimeout(timer)
  }, [message, onDismiss])

  if (!message) return null

  return (
    <div className="pointer-events-none fixed bottom-6 left-0 right-0 z-30 flex justify-center px-6">
      <div className="flex items-center gap-2 rounded-xl bg-myntra-dark px-4 py-3 text-xs font-semibold text-white shadow-look">
        <CheckCircle2 size={16} className="text-emerald-400" />
        {message}
      </div>
    </div>
  )
}
