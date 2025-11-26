'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import { useRef } from 'react'
import { testimonials } from '../../../lib/constants/data'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Title from '../../ui/Title/Title'
import Link from 'next/link'

const Testimonials = () => {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <Title
          title="Testimonials"
          subtitle="Real stories from visitors who felt the energy of nature’s rare creations."
          onPrev={() => sliderRef.current.slickPrev()}
          onNext={() => sliderRef.current.slickNext()}
        />

        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item) => (
            <div key={item.id}>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* VIDEO */}
                <div className="rounded-xl overflow-hidden">
                  <iframe
                    src={item.videoUrl}
                    title={item.title}
                    className="w-full h-72 md:h-96 rounded-xl"
                    allowFullScreen
                  />
                </div>

                {/* TEXT */}
                <div className="space-y-6 pr-6">
                  <h3 className="text-3xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.description}
                  </p>

                  <Link
                    href={item.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-black transition"
                  >
                    {item.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials

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
