import Image from 'next/image'
import { visitMuseum } from '../../../lib/constants/data'
import Link from 'next/link'
import { IoIosArrowRoundForward } from 'react-icons/io'

const VisitMuseum = ({ heading }) => {
  return (
    <div className="pt-5 pb-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-5xl font-semibold">Visit the Museum</h2>
            <p className="text-2xl mt-3">
              Visit our in-house shop and buy traditional and artistic souvenir
              items
            </p>
          </div>

          <Link
            href="/"
            className="group self-end flex items-center gap-2 text-xl font-semibold hover:opacity-80 transition cursor-pointer"
          >
            KNOW MORE{' '}
            <IoIosArrowRoundForward className="text-4xl transform transition-all duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 mt-2 mb-6"></div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visitMuseum.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              className="
                block bg-smoke text-moon shadow-lg overflow-hidden
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
