import { useState } from 'react'
import { Image as ImageIcon } from 'lucide-react'

function placeholder(text) {
  const safe = encodeURIComponent(text.trim().slice(0, 45) || 'Product image')
  return `https://placehold.co/400x600/f5f5f6/333333?text=${safe}`
}

export default function ProductImage({ src, alt, className = '' }) {
  const [currentSrc, setCurrentSrc] = useState(src || placeholder(alt))
  const [failed, setFailed] = useState(false)

  if (failed) {
    const label = (alt || '').split(' ').slice(0, 3).join(' ')
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
      src={currentSrc}
      alt={alt}
      loading="eager"
      onError={() => {
        if (currentSrc !== placeholder(alt)) {
          setCurrentSrc(placeholder(alt))
        } else {
          setFailed(true)
        }
      }}
      className={`object-cover ${className}`}
    />
  )
}
