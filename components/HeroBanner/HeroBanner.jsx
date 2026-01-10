import Image from 'next/image'

const HeroBanner = ({
  url,
  title = 'Discover the World of Gemstones',
  cta = 'Plan Your Visit',
}) => {
  const isVideo = /\.(mp4|webm|ogg)$/i.test(url)

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Media */}
      {isVideo ? (
        <video
          className="w-full h-full object-cover"
          src={url}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <Image
          src={url}
          alt="Hero Banner"
          fill
          priority
          className="object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-playfair mt-16 text-center">
          {title}
        </h1>

        <button
          className="px-6 py-3 border border-white text-white text-lg 
          transition-all duration-300 ease-in-out 
          hover:bg-white hover:text-black"
        >
          {cta}
        </button>
      </div>
    </section>
  )
}

export default HeroBanner
