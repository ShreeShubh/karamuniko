'use client'

import Image from 'next/image'
import Link from 'next/link'
import { navMenu } from '../../lib/constants/data'
import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  Dropdown,
  DropdownItem,
} from 'flowbite-react'
import { useEffect, useState } from 'react'

const Header = () => {
  const [showTopCTA, setShowTopCTA] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScrollY) {
        // scrolling down → hide CTA
        setShowTopCTA(false)
      } else {
        // scrolling up → show CTA
        setShowTopCTA(true)
      }

      lastScrollY = currentScroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-30">
      {/* 🔹 Top CTA Buttons */}
      <div
        className={`
    container mx-auto justify-end items-center gap-4 px-4 hidden md:flex
    overflow-hidden transition-all duration-500 ease-out
    ${showTopCTA ? 'opacity-100 max-h-24 py-3' : 'opacity-0 max-h-0 py-0'}
  `}
      >
        {topCTAButtons.map((button, index) => (
          <Link key={index} href={button.link}>
            <button className="px-4 py-1 rounded-md text-white bg-obsidian shadow-md hover:brightness-110 transition-all duration-200 cursor-pointer whitespace-nowrap">
              {button.label}
            </button>
          </Link>
        ))}
      </div>

      {/* 🔸 Navbar */}
      <div className="bg-obsidian">
        <Navbar fluid className="bg-obsidian! py-3 container mx-auto">
          {/* Logo */}
          <NavbarBrand as={Link} href="/">
            <Image
              src="/logo/logo.png"
              width={70}
              height={70}
              alt="KaramUniko Museum Logo"
              className=""
            />
          </NavbarBrand>

          <NavbarToggle />

          {/* 🔹 Navigation Links */}
          <NavbarCollapse className="text-white gap-6">
            {navMenu.map((menuItem, index) => {
              const isForcedNormal =
                menuItem.label === 'Exhibitions & Events' ||
                menuItem.label === 'Plan Your Visit' ||
                menuItem.label === 'Auction' ||
                menuItem.label === 'Home'

              const hoverUnderline =
                'relative after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[2px] after:w-full after:scale-x-0 after:origin-center after:bg-amber-400 after:transition-transform after:duration-300 hover:after:scale-x-100'

              return (
                <div
                  key={index}
                  className={`text-base hover:text-amber-400 transition-colors duration-200`}
                >
                  {/* 🔹 Forced Normal Link */}
                  {isForcedNormal ? (
                    <Link href={menuItem.link} className={`${hoverUnderline}`}>
                      {menuItem.label}
                    </Link>
                  ) : !menuItem.children ? (
                    /* Normal Link */
                    <Link href={menuItem.link} className="">
                      {menuItem.label}
                    </Link>
                  ) : (
                    /* Dropdown */
                    <Dropdown
                      inline
                      label={menuItem.label}
                      className="bg-obsidian!"
                    >
                      {menuItem.children.map((child, cIdx) => (
                        <DropdownItem key={cIdx}>
                          <Link
                            href={child.link}
                            className="text-white hover:text-amber-400 transition-colors duration-200 text-base"
                          >
                            {child.label}
                          </Link>
                        </DropdownItem>
                      ))}
                    </Dropdown>
                  )}
                </div>
              )
            })}
          </NavbarCollapse>
        </Navbar>
      </div>
    </div>
  )
}

export default Header

const topCTAButtons = [
  { label: 'Shop', link: '/' },
  { label: 'Buy Tickets', link: '/' },
  { label: 'Make a Donation', link: '/' },
]
