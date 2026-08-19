import { useState } from 'react'
import { Image as ImageIcon } from 'lucide-react'

export default function ProductImage({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    const label = (alt || '').split(' ').slice(0, 2).join(' ')
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-neutral-100 to-neutral-200 p-2 text-center text-[10px] font-semibold uppercase tracking-wider text-neutral-500 ${className}`}
      >
        <ImageIcon size={20} strokeWidth={1.5} />
        <span className="line-clamp-2">{label}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  )
}
