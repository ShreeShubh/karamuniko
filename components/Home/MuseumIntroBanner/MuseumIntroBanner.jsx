import { MdLocalOffer, MdAccessTime } from 'react-icons/md'

const MuseumIntroBanner = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-8 flex flex-col lg:flex-row justify-between gap-10">
        {/* LEFT TEXT */}
        <div className="lg:w-2/3">
          <h1 className="text-5xl font-medium leading-tight">
            Explore the World’s First Museum of Naturally Divine Gemstones
          </h1>
        </div>

        {/* RIGHT INFO */}
        <div className="lg:w-1/4 flex flex-col gap-6 text-lg">
          {/* Ticket Info */}
          <div className="flex items-center gap-3">
            <MdLocalOffer className="text-2xl" />
            <p>
              <span className="font-semibold underline cursor-pointer">
                Free Entry — Book Online
              </span>
            </p>
          </div>

          {/* Open Timing */}
          <div className="flex items-center gap-3">
            <MdAccessTime className="text-2xl" />
            <p>
              Open today: <span className="font-semibold">10.00–17.00</span>
            </p>
          </div>

          {/* Last Entry */}
          <div className="flex items-center gap-3">
            <MdAccessTime className="text-2xl" />
            <p>
              Last entry: <span className="font-semibold">16.45</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MuseumIntroBanner
