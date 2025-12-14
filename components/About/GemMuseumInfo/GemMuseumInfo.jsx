import About from './About'
import Title from '../../ui/Title/Title'

const GemMuseumInfo = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-linear-to-b from-white to-neutral-50">
      {/* Soft Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-220 h-220 bg-purple-200/20 blur-3xl rounded-full opacity-50 pointer-events-none"
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <Title
          title="Naturally Divine. World’s First."
          subtitle="World’s First Museum of Naturally Occurring Divine - Shaped Diamonds & Gemstones"
          cta="Visit Museum"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* --- TEXT BLOCK --- */}
          <div className="space-y-8">
            <p className="text-lg text-neutral-600 leading-relaxed">
              It is a unique space where the timeless beauty of gemstones meets
              science, heritage, and spirituality. Each exhibit showcases
              nature’s untouched creations — rare crystals and stones preserved
              in their original form. More than just a display of gems, the
              museum offers visitors an inspiring journey into Earth’s artistry,
              revealing how every stone tells a story of creation, energy, and
              wonder.
            </p>

            {/* Optional button */}
            <button
              className="px-8 py-3 rounded-xl border border-purple-600 text-purple-700 
                           hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-md"
            >
              Explore the Museum
            </button>
          </div>

          {/* --- JOURNEY COMPONENT (IMAGES) --- */}
          <div className="relative flex justify-center lg:justify-end w-full">
            {/* Purple glow behind image */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300/30 blur-xl rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-300/20 blur-xl rounded-full"></div>

            <div className="w-[320px] h-80 md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
              <About />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GemMuseumInfo
