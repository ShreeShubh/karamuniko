import Image from 'next/image'
import Title from '../../ui/Title/Title'

const Shop = () => {
  return (
    <section className="w-full py-10 bg-white">
      {/* Heading */}
      <div className="container mx-auto px-8">
        <Title
          title="Shop"
          subtitle="Visit our in-house shop and buy traditional and artistic souvenir
            items"
          cta="Enter Shop"
        />

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
              <p className="text-center text-lg mt-3 font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
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
