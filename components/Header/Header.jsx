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

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-30">
      {/* 🔹 Top CTA Buttons */}
      <div className="container mx-auto justify-end items-center gap-4 py-3 px-4 hidden md:flex">
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
              className="hover:scale-105 transition-transform duration-200"
            />
          </NavbarBrand>

          <NavbarToggle />

          {/* 🔹 Navigation Links */}
          <NavbarCollapse className="text-white gap-6">
            {navMenu.map((menuItem, index) => {
              const isForcedNormal = menuItem.label === 'Exhibitions & Events'

              return (
                <div key={index}>
                  {/* 🔹 Forced Normal Link */}
                  {isForcedNormal ? (
                    <Link
                      href={menuItem.link}
                      className="hover:text-amber-400 transition-colors duration-200"
                    >
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
                            className="text-white hover:text-amber-400 transition-colors duration-200"
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
