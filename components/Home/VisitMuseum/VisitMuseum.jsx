import Image from 'next/image'
import { visitMuseum } from '../../../lib/constants/data'
import Link from 'next/link'
import Title from '../../ui/Title/Title'

const VisitMuseum = ({ heading }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <Title
          title="Visit the Museum"
          subtitle="Visit our in-house shop and buy traditional and artistic souvenir
              items"
          cta="KNOW MORE"
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visitMuseum.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              className="
                block bg-linear-to-br from-obsidian/90 to-black/70 text-moon shadow-lg overflow-hidden
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
    </section>
  )
}

export default VisitMuseum
