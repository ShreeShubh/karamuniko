import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import Title from '../../ui/Title/Title'

const VisitorInfoCard = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <Title
          title="Visit Us"
          subtitle="Find us easily and plan your visit to KaramUniKO"
          cta="Know More"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/visit/img.jpg" // replace with your image
              alt="KaramUniKO Building"
              width={900}
              height={600}
              priority
              className="object-cover w-full h-80 sm:h-[420px] lg:h-[520px]
              transition-transform duration-700 group-hover:scale-105"
            />

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Info Card */}
          <div className="relative p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-gray-900 mb-6">
              Visitor Information
            </h3>

            <div className="space-y-4 text-gray-700 text-sm md:text-base">
              <p>
                <span className="font-semibold text-gray-900">Opened:</span>{' '}
                Monday to Sunday
              </p>
              <p>
                <span className="font-semibold text-gray-900">Hours:</span>{' '}
                11:00 AM – 8:00 PM
              </p>
              <p>
                <span className="font-semibold text-gray-900">Address:</span>{' '}
                KaramUniKO, near Valentine Cinema, Surat, Gujarat 394518
              </p>
              <p>
                <span className="font-semibold text-gray-900">Tel:</span> +91
                8000 414200
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-full text-white bg-obsidian shadow-md hover:brightness-110 transition-all duration-200 cursor-pointer whitespace-nowrap">
                More Info
                <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisitorInfoCard
