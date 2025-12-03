'use client'

import React from 'react'
import Title from '../../ui/Title/Title'

const CrystalShowcase = () => {
  const items = [
    {
      img: '/home/crystal-showcase/img01.jpg',
      title: 'White Desert Garden',
      orientation: 'horizontal',
      desc: `The "White Desert Garden" — a breathtaking 43.045 kg natural crystal masterpiece sculpted slowly by Earth itself. At first glance, it resembles delicate frozen petals, but every layer is a story written by nature over countless years. A silent creation — calm, timeless, extraordinary.`,
    },
    {
      img: '/home/crystal-showcase/img02.png',
      title: 'Amethyst Crystal Cave Tower',
      orientation: 'vertical',
      desc: `A naturally sculpted Amethyst Cave Tower revealing shimmering violet crystals inside its hidden geode chamber. Symbolizing inner consciousness and upward energy flow — it radiates peace, clarity, and a mystical glow when touched by light. A true marvel of Earth’s quiet artistry.`,
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white text-neutral-900 py-24 px-6 md:px-8">
      <div className="flex flex-col gap-10 container mx-auto">
        <div>
          <Title
            title="Nature’s Masterpieces"
            subtitle="A curated showcase of crystals shaped in silence over millions of years."
            cta="Know More"
          />
        </div>
        {items.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* IMAGE BLOCK WITH MUSEUM STYLE FRAME */}
            <div
              className={`flex justify-center ${
                index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
              }`}
            >
              <div className="relative p-3 rounded-3xl bg-white/70 backdrop-blur-xl border border-purple-300 shadow-lg shadow-purple-300/30">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className={`transition-all duration-700 mx-auto rounded-2xl
${
  item.orientation === 'vertical'
    ? 'h-[500px] w-auto object-contain'
    : 'w-full h-[360px] object-cover'
}
`}
                  />
                </div>
              </div>
            </div>

            {/* CONTENT BLOCK */}
            <div
              className={`space-y-6 ${
                index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
              }`}
            >
              <h2 className="text-4xl font-semibold tracking-wide">
                {item.title}
              </h2>
              <p className="text-neutral-600 text-[17px] leading-relaxed max-w-lg">
                {item.desc}
              </p>
              <div className="w-24 h-1 bg-purple-400 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CrystalShowcase
