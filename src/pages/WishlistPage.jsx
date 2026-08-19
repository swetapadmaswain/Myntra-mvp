import TopBar from '../components/TopBar'
import StyleStudioHero from '../components/StyleStudioHero'
import WishlistGrid from '../components/WishlistGrid'
import Toast from '../components/Toast'
import BottomNav from '../components/BottomNav'
import { useApp } from '../context/AppContext'

export default function WishlistPage() {
  const {
    wishlist,
    looks,
    bag,
    addedLookIds,
    movedItemIds,
    toast,
    addLookToBag,
    moveItemToBag,
    removeFromWishlist,
    setToast,
  } = useApp()

  return (
    <div className="mx-auto min-h-screen max-w-md bg-myntra-bg pb-24 shadow-look">
      <TopBar bagCount={bag.length} itemCount={wishlist.length} />
      <StyleStudioHero
        looks={looks}
        addedLooks={addedLookIds}
        onAddLook={addLookToBag}
      />
      <WishlistGrid
        items={wishlist}
        movedItems={movedItemIds}
        onMove={moveItemToBag}
        onRemove={removeFromWishlist}
      />
      <Toast message={toast} onDismiss={() => setToast('')} />
      <BottomNav active="wishlist" />
    </div>
  )
}
