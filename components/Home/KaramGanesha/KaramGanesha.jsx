import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

const KaramGanesha = () => {
  return (
    <section className="relative w-full bg-linear-to-br from-white to-gray-100 py-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          {/* Title */}
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
            <span>KARAM Amethyst Ganesha</span>
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed">
            The Karam Amethyst Ganesha is a breathtaking creation of nature,
            discovered and preserved by KaramUniKO. Formed naturally from pure
            amethyst crystal, this divine idol embodies the spiritual essence of
            Lord Ganesha — the remover of obstacles and the harbinger of wisdom,
            success, and peace.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            With a majestic weight of{' '}
            <span className="font-semibold text-gray-900">
              136,000 carats (27.030 kilograms)
            </span>
            , this naturally formed masterpiece radiates deep violet hues that
            symbolize calm, transformation, and divine protection. Each
            reflection reveals not human craftsmanship, but the mysterious
            artistry of Mother Nature herself — making the Karam Amethyst
            Ganesha a one-of-a-kind global wonder.
          </p>

          {/* Divider */}
          <div className="border-t border-gray-300 w-full"></div>

          <button className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-full text-white bg-obsidian shadow-md hover:brightness-110 transition-all duration-200 cursor-pointer whitespace-nowrap">
            Own a Piece of Nature’s Art
            <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative group">
          <div className="absolute inset-0 bg-purple-200 blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-300"></div>

          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/home/karam-ganesha/img01.jpg"
              alt="Karam Amethyst Ganesha"
              width={800}
              height={600}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default KaramGanesha
