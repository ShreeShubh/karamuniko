const HeroBanner = () => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Video */}
      <video
        className="w-full h-full object-cover"
        src="https://bmwebsitestreaming.blob.core.windows.net/bmvideo/Tour_of_the_British_Museum.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/40"></div>

      {/* Optional center text */}
      <div className="absolute inset-0 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-playfair">
          Discover the World of Gemstones
        </h1>
        <button className="px-6 py-3 border border-white text-white text-lg">
          Plan Your Visit
        </button>
      </div>
    </section>
  )
}

export default HeroBanner
