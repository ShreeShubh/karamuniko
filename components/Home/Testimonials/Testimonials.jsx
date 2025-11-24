'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import { testimonials } from '../../../lib/constants/data'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className="mt-16 mb-20 max-w-6xl mx-auto">
      <Slider {...settings}>
        {testimonials.map((item, i) => (
          <div key={i} className="px-4 pt-14 h-full pb-5">
            <div className="border-2 border-primary-red rounded-3xl flex flex-col gap-5 pt-20 pb-5 px-12 h-full w-full relative">
              {/* Quotes Symbol */}
              <div className="absolute -top-12 left-10 bg-white pl-1">
                <Image
                  src="/home/quotes.svg"
                  width={136}
                  height={100}
                  alt="quotes"
                />
              </div>

              <p className="text-primary-gray grow">{item.testimonial}</p>

              <div className="space-y-1 text-primary-gray pt-4">
                <p className="text-lg font-bold">{item.name}</p>
                <p className="">{item.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Testimonials
