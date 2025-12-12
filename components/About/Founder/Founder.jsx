import Image from 'next/image'

const Founder = () => {
  return (
    <section className="w-full py-24 bg-neutral-50 relative overflow-hidden">
      {/* Soft Background Gradients */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            Meet the Visionary Behind the Museum
          </h2>
          <p className="text-neutral-600 mt-2 text-lg">
            The heart and mind shaping the world of gemstones
          </p>
        </div>

        {/* Founder Card */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center 
          bg-white rounded-3xl shadow-xl p-10 md:p-14 relative overflow-hidden"
        >
          {/* Floating glow */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-purple-300/20 blur-2xl rounded-full"></div>
          <div className="absolute bottom-0 -left-10 w-52 h-52 bg-indigo-300/20 blur-2xl rounded-full"></div>

          {/* Founder Image */}
          <div className="flex justify-center">
            <Image
              src="/founder.jpg"
              width={420}
              height={500}
              alt="Founder"
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-neutral-900">
              Mr. Kanu R. Asodaria
            </h3>

            <p className="text-neutral-700 leading-relaxed">
              Kanu R. Asodaria is a global visionary, gem explorer, and
              humanitarian whose life’s work reveals the sacred artistry hidden
              within the Earth. He is the founder of KaramUniKO and the creator
              of the KaramUniKO Museum, where naturally formed stones and
              crystals are preserved as symbols of divine intelligence and
              natural wonder.
            </p>

            <p className="text-neutral-700 leading-relaxed">
              On 18 July 2024, he was honored at the British Parliament, London,
              by Parliamentarian Joy Morrissey, for discovering the Karam
              Diamond Ganesha — now officially declared by the World Book of
              Records (London) as “The Unique Diamond of the World.”
            </p>

            <p className="text-neutral-700 leading-relaxed">
              With over three decades in the diamond and gemstone industry, he
              has built a reputation for integrity, creativity, and global
              collaboration. He serves in multiple leadership roles across
              diamond associations in India and abroad.
            </p>

            <blockquote className="border-l-4 border-purple-500 pl-4 italic text-neutral-800">
              “I am not an owner of these wonders — I am their custodian. Nature
              creates; I simply preserve and share her miracles.”
            </blockquote>

            {/* Small badge */}
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
              Founder • Visionary • Explorer
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder
