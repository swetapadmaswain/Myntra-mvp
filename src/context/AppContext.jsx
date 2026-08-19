import { createContext, useContext, useState, useMemo } from 'react'
import { wishlistItems, formatINR } from '../data/mockData'
import { buildLooks } from '../data/looksData'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [wishlist, setWishlist] = useState(wishlistItems)
  const looks = useMemo(() => buildLooks(wishlist), [wishlist])
  const [addedLookIds, setAddedLookIds] = useState([])
  const [movedItemIds, setMovedItemIds] = useState([])
  const [bag, setBag] = useState([])
  const [toast, setToast] = useState('')

  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(''), 2200)
  }

  const addLookToBag = (look) => {
    if (addedLookIds.includes(look.outfitId)) return
    const bagItems = look.items.map((item) => ({
      ...item,
      lookId: look.outfitId,
      theme: look.theme,
    }))
    setBag((prev) => [...prev, ...bagItems])
    setAddedLookIds((prev) => [...prev, look.outfitId])
    showToast(`${look.items.length} items added · ${look.theme} · ${formatINR(look.totalPrice)}`)
  }

  const moveItemToBag = (item) => {
    if (movedItemIds.includes(item.id)) return
    if (bag.some((b) => b.id === item.id)) return
    setBag((prev) => [...prev, { ...item, source: 'wishlist' }])
    setMovedItemIds((prev) => [...prev, item.id])
    showToast('Item added to bag')
  }

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id))
    showToast('Removed from wishlist')
  }

  const updateWishlistSize = (id, size) => {
    setWishlist((prev) => prev.map((item) => (item.id === id ? { ...item, size } : item)))
  }

  const removeFromBag = (id) => {
    setBag((prev) => prev.filter((item) => item.id !== id))
  }

  const bagCount = bag.length
  const bagTotal = bag.reduce((sum, item) => sum + item.price, 0)

  const value = useMemo(
    () => ({
      wishlist,
      looks,
      bag,
      bagCount,
      bagTotal,
      addedLookIds,
      movedItemIds,
      toast,
      addLookToBag,
      moveItemToBag,
      removeFromWishlist,
      updateWishlistSize,
      removeFromBag,
      showToast,
      setToast,
    }),
    [wishlist, looks, bag, addedLookIds, movedItemIds, toast]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
