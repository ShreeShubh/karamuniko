import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Shop = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-5xl font-semibold">Shop</h2>
          <p className="text-xl mt-3">
            Visit our in-house shop and buy traditional and artistic souvenir
            items
          </p>
        </div>

        <Link
          href="/"
          className="
    group self-end flex items-center gap-2 text-2xl font-semibold 
    hover:opacity-80 transition cursor-pointer
  "
        >
          ENTER SHOP{' '}
          <IoIosArrowRoundForward
            className="
      text-4xl transform transition-all duration-300
      group-hover:translate-x-1
    "
          />
        </Link>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400 mt-2 mb-6"></div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div
              className={`relative w-full h-64 ${item.bg} flex items-end justify-center`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-lg mt-3 font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Shop

const items = [
  {
    title: 'Amazonite Bracelet',
    image: '/shop/shop01.png',
    bg: 'bg-[#c4c78a]',
  },
  {
    title: 'Amethyst Bracelet',
    image: '/shop/shop02.png',
    bg: 'bg-[#b44b27]',
  },
  {
    title: 'Amazonite Bracelet',
    image: '/shop/shop01.png',
    bg: 'bg-[#c9a27c]',
  },
  {
    title: 'Amethyst Bracelet',
    image: '/shop/shop02.png',
    bg: 'bg-[#78492a]',
  },
  {
    title: 'Amazonite Bracelet',
    image: '/shop/shop01.png',
    bg: 'bg-[#0d6b63]',
  },
  {
    title: 'Amethyst Bracelet',
    image: '/shop/shop02.png',
    bg: 'bg-[#a52b2b]',
  },
]
