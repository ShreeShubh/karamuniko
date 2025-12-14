import Link from 'next/link'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io'

const Title = ({ title, subtitle, cta, ctaLink = '/', onPrev, onNext }) => {
  return (
    <>
      <div className="flex justify-between items-end">
        {/* Left side */}
        <div>
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900">
            {title}
          </h2>
          <p className="text-2xl mt-3 text-gray-600">{subtitle}</p>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Case 1: CTA Button */}
          {cta && (
            <Link
              href={ctaLink}
              className="group flex items-center gap-2 text-2xl uppercase font-semibold hover:opacity-80 transition cursor-pointer"
            >
              {cta}
              <IoIosArrowRoundForward className="text-4xl transform transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          )}

          {/* Case 2: Arrow Buttons */}
          {!cta && onPrev && onNext && (
            <div className="flex items-center gap-4">
              {/* Prev */}
              <button
                onClick={onPrev}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center
                           hover:shadow-xl hover:-translate-x-1 transition-all duration-300 cursor-pointer"
              >
                <IoIosArrowRoundBack className="text-4xl text-gray-700" />
              </button>

              {/* Next */}
              <button
                onClick={onNext}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center
                           hover:shadow-xl hover:translate-x-1 transition-all duration-300 cursor-pointer"
              >
                <IoIosArrowRoundForward className="text-4xl text-gray-700" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400 mt-4 mb-10"></div>
    </>
  )
}

export default Title
