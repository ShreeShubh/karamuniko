import Image from 'next/image'
import { visitMuseum } from '../../../lib/constants/data'
import Link from 'next/link'

const VisitMuseum = ({ heading }) => {
  return (
    <div className="pt-5 pb-16 bg-obsidian">
      <div className="container mx-auto p-4">
        {/* Heading */}
        <h2 className="text-5xl font-semibold mb-10 text-white">{heading}</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visitMuseum.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              className="
                block bg-gray-700 text-moon shadow-lg overflow-hidden
                hover:scale-[1.03] hover:shadow-xl transition-all duration-300 p-2
              "
            >
              {/* Image */}
              <div className="h-48 w-full relative">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VisitMuseum
