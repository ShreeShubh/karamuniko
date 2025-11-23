import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const images = [
  '/home/media/image01.jpg',
  '/home/media/image02.jpg',
  '/home/media/image03.jpg',
  '/home/media/image01.jpg',
  '/home/media/image02.jpg',
  '/home/media/image03.jpg',
]

const MediaCoverage = () => {
  return (
    <div className="w-full py-16">
      {/* Heading */}
      {/* <h2 className="text-3xl md:text-7xl font-semibold text-center mb-8">
        Media <span className="text-gold">Coverage</span>
      </h2> */}
      <h2 className="text-5xl font-semibold mb-10 text-center">
        Media Coverage
      </h2>

      {/* Marquee */}
      <div className="container mx-auto">
        <Marquee speed={40} gradient={false}>
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Media Coverage ${i + 1}`}
              width={300}
              height={175}
              className="mx-4 h-48 rounded-xl"
            />
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default MediaCoverage
