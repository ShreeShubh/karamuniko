import Link from 'next/link'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Title = ({ title, subtitle, cta }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-5xl font-semibold">{title}</h2>
          <p className="text-2xl mt-3">{subtitle}</p>
        </div>

        <Link
          href="/"
          className="group self-end flex items-center gap-2 text-2xl uppercase font-semibold hover:opacity-80 transition cursor-pointer"
        >
          {cta}{' '}
          <IoIosArrowRoundForward className="text-4xl transform transition-all duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400 mt-2 mb-6"></div>
    </>
  )
}

export default Title
