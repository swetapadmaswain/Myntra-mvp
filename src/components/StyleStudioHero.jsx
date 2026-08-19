import LookCard from './LookCard'

export default function StyleStudioHero({ looks, addedLooks, onAddLook }) {
  return (
    <section className="bg-gradient-to-b from-[#fff1f4] to-neutral-100 px-4 pb-5 pt-4">
      <div className="mb-3">
        <h2 className="text-lg font-extrabold tracking-tight">Styled From Your Wishlist</h2>
        <p className="text-xs text-myntra-grey">
          Complete looks built around the items you saved. One tap to shop all.
        </p>
      </div>

      <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1">
        {looks.map((look) => (
          <LookCard
            key={look.outfitId}
            look={look}
            added={addedLooks.includes(look.outfitId)}
            onAdd={onAddLook}
          />
        ))}
      </div>
    </section>
  )
}
