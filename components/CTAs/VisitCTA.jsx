import { FaArrowRight } from 'react-icons/fa6'

const VisitCTA = () => {
  return (
    <section className="p-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-white p-10">
        {/* LEFT TITLE */}
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          Want to Visit Us?
        </h2>

        {/* RIGHT CONTENT */}
        <div className="space-y-6 max-w-xl">
          <p className="text-[18px] leading-relaxed text-neutral-700">
            Explore our rare collections in person and experience the natural
            beauty of Earth’s creations up close. Plan your visit and discover
            the wonders we preserve.
          </p>

          <button className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-full text-white bg-obsidian shadow-md hover:brightness-110 transition-all duration-200 cursor-pointer whitespace-nowrap">
            Plan your visit
            <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default VisitCTA
