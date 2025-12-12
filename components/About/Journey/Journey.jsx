'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import { useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

import Title from '../../ui/Title/Title'
import Link from 'next/link'
import { journey, testimonials } from '../../../lib/constants/data'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Journey = () => {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
  }

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-8">
        <Title
          title="Our Journey"
          subtitle="Real stories from visitors who felt the energy of nature’s rare creations."
          onPrev={() => sliderRef.current.slickPrev()}
          onNext={() => sliderRef.current.slickNext()}
        />

        <Slider ref={sliderRef} {...settings}>
          {journey.map((item, index) => (
            <div key={index}>
              <div className="rounded-xl overflow-hidden h-[500px] border-4 border-obsidian/20 mx-4">
                <Image
                  src={item.image}
                  alt={`Journey Image ${index + 1}`}
                  width={800}
                  height={500}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Journey

function NextArrow({ onClick }) {
  return (
    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:shadow-lg w-10 h-10 rounded-full flex items-center justify-center z-10"
      onClick={onClick}
    >
      <FaArrowRight className="text-gray-700" />
    </button>
  )
}

function PrevArrow({ onClick }) {
  return (
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:shadow-lg w-10 h-10 rounded-full flex items-center justify-center z-10"
      onClick={onClick}
    >
      <FaArrowLeft className="text-gray-700" />
    </button>
  )
}
