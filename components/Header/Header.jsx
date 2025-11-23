import Image from 'next/image'
import Link from 'next/link'
import { navMenu } from '../../lib/constants/data'

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-30">
      {/* Top CTA Buttons */}
      <div className="container mx-auto flex justify-end items-center gap-4 py-3 px-4">
        {topCTAButtons.map((button, index) => (
          <Link key={index} href={button.link}>
            <button className="px-4 py-1 rounded-md text-white bg-obsidian shadow-md hover:brightness-110 transition-all duration-200 cursor-pointer">
              {button.label}
            </button>
          </Link>
        ))}
      </div>

      {/* Navbar */}
      <nav className="bg-obsidian shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo/logo.png"
              width={80}
              height={80}
              alt="KaramUniko Museum Logo"
              className="hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-10">
            <ul className="flex gap-10 text-lg font-medium text-white">
              {navMenu.map((menuItem, index) => (
                <li
                  key={index}
                  className="relative group transition-colors duration-200 hover:text-gold"
                >
                  <Link href={menuItem.link} className="inline-block">
                    {menuItem.label}
                  </Link>

                  {menuItem.children && (
                    <ul
                      className="
                                absolute left-0 top-full mt-2 min-w-[200px] bg-white rounded-md
                                shadow-md py-2 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                transition-all duration-200
                            "
                    >
                      {menuItem.children.map((child, cIndex) => (
                        <li
                          key={cIndex}
                          className="px-4 py-2 hover:bg-gray-100 text-ruby"
                        >
                          <Link href={child.link} className="block">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            {/* <div
              className="
          bg-gradient-to-r from-ruby to-[#7a0f23]
          w-60 text-moon text-center flex items-center justify-center 
          py-3 rounded-md shadow-[0_4px_10px_rgba(228,35,70,0.4)]
          hover:brightness-110 transition-all duration-200
        "
            >
              <span className="text-sm tracking-wide">
                Reach Us:{' '}
                <a
                  href="tel:+918031021400"
                  className="underline underline-offset-2"
                >
                  +91 8031021400
                </a>
              </span>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header

const topCTAButtons = [
  { label: 'Shop', link: '/' },
  { label: 'Buy Tickets', link: '/' },
  { label: 'Make a Donation', link: '/' },
]
