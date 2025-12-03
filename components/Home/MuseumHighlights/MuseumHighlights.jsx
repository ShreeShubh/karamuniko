const MuseumHighlights = () => {
  return (
    <>
      {/* <div className="bg-white py-10"></div> */}
      <section className="py-16">
        <div className="container mx-auto px-8 grid md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div
            className="
          p-8 rounded-2xl shadow-lg border border-gray-200
          bg-linear-to-br from-obsidian/90 to-black/70
          text-white transition-transform duration-300 hover:scale-[1.02]
        "
          >
            <h2 className="text-3xl mb-3">
              World’s First Divine Diamond - Gemstone Museum
            </h2>
            <p className="text-lg text-gray-200">
              Discover rare crystals and gemstones, naturally shaped by nature’s
              divine hand.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
          p-8 rounded-2xl shadow-lg border border-gray-200
          bg-linear-to-br from-white to-gray-50
          transition-transform duration-300 hover:scale-[1.02]
        "
          >
            <h2 className="text-3xl text-obsidian mb-3">
              Nature’s Masterpieces Preserved
            </h2>
            <p className="text-lg text-gray-700">
              Each gemstone here is untouched by humans — crafted only by
              nature’s energy over millions of years.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default MuseumHighlights
