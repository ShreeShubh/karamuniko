import Link from 'next/link'
import Title from '../../ui/Title/Title'
import { IoIosArrowRoundForward } from 'react-icons/io'

const SacredSculpture = () => {
  return (
    <section className="py-16 px-6 bg-obsidian/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* <Title
          title="Sacred Wooden Sculpture"
          subtitle="Visit our in-house shop and buy traditional and artistic souvenir
              items"
          cta="Know More"
        /> */}

        <div className="flex justify-between items-center text-white">
          <div>
            <h2 className="text-5xl font-semibold">Sacred Wooden Sculpture</h2>
            <p className="text-2xl mt-3">
              Visit our in-house shop and buy traditional and artistic souvenir
              items
            </p>
          </div>

          <Link
            href="/"
            className="group self-end flex items-center gap-2 text-2xl uppercase font-semibold hover:opacity-80 transition cursor-pointer"
          >
            Know More{' '}
            <IoIosArrowRoundForward className="text-4xl transform transition-all duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 mt-2 mb-6"></div>

        <p className="max-w-5xl mx-auto my-14 text-lg text-center text-white font-medium leading-relaxed">
          A single-log sculpture embodying the divine unity of Hindu Sanatan
          Dharma — showing how every deity, force of nature, and life energy
          emerges from the same cosmic root.
        </p>

        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row justify-center gap-10 relative">
          {/* LEFT BRANCH CARDS */}
          <div className="flex flex-col self-center gap-6 lg:w-1/2">
            {leftCards.map((card, i) => (
              <div
                key={i}
                className="bg-[#f6efe6] shadow-md rounded-xl p-4 transform lg:-translate-x-10"
              >
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-700">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* CENTER SCULPTURE */}
          <div className="flex justify-center items-center lg:w-1/2">
            <img
              src="/sacred-sculpture/img01.png"
              alt="Sacred Sculpture"
              className="w-[320px] lg:w-[380px] drop-shadow-2xl"
            />
          </div>

          {/* RIGHT BRANCH CARDS */}
          <div className="flex flex-col self-center gap-6 lg:w-1/2">
            {rightCards.map((card, i) => (
              <div
                key={i}
                className="bg-[#f6efe6] shadow-md rounded-xl p-4 transform lg:translate-x-10"
              >
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 text-lg text-center text-white leading-relaxed font-bold italic">
          “From one root arises all life — gods, sages, nature, and energy — all
          returning to the same source of divinity”
        </p>

        <p className="mt-3 max-w-5xl mx-auto text-lg text-center text-white leading-relaxed">
          A creation like this can only exist when the artist’s soul aligns with
          the rhythm of nature and divinity. It stands as a living reminder that
          the universe is one great family —{' '}
          <span className="font-bold">Vasudhaiva Kutumbakam</span>
        </p>
      </div>
    </section>
  )
}

export default SacredSculpture

const leftCards = [
  //   {
  //     title: 'Sacred Wooden Sculpture',
  //     desc: 'A single-log sculpture embodying the divine unity of Hindu Sanatan Dharma — showing how every deity, force of nature, and life energy emerges from the same cosmic root.',
  //   },
  {
    title: 'Nagdevta (Serpent Deity)',
    desc: 'The guardian of the Earth’s energy, balance, and cosmic protection.',
  },
  {
    title: 'Lord Shiva',
    desc: 'Supreme consciousness — symbolizing creation, destruction, and transformation.',
  },
]

const rightCards = [
  {
    title: 'Surya Devta (Sun God)',
    desc: 'The eternal giver of light, life, and spiritual awakening.',
  },
  {
    title: 'Peacock',
    desc: 'Symbol of purity, grace, beauty, and divine presence.',
  },
  {
    title: 'Rushi Muni (Sage)',
    desc: 'Seeker of truth, carrying divine wisdom for humanity.',
  },
]
