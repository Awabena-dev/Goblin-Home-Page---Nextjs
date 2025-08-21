"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";

// مكون القائمة للموبايل
const MobileNav = ({ navlinks, close }) => {
  return (
    <ul className="h-auto w-[300px] bg-gray-800 transition-all duration-300 fixed top-[10%] right-0 flex flex-col gap-6 p-6 md:hidden z-40">
      {navlinks.map((link) => (
        <li key={link.id}>
          <Link
            href={link.url}
            onClick={close}
            className="block text-white hover:text-amber-400 transition-colors text-lg"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const Navbar = () => {
  const navlinks = [
    { id: 1, url: "#", label: "Home" },
    { id: 2, url: "#", label: "About" },
    { id: 3, url: "#", label: "Coins" },
    { id: 4, url: "#", label: "Town Hall" },
    { id: 5, url: "#", label: "Troops" },
    { id: 6, url: "#", label: "Contact" },
  ]

  const [shownav, setShownav] = useState(false)

  const open = () => setShownav(true)
  const close = () => setShownav(false)

  return (
    <nav className="w-full py-[20px] px-[9%] flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white">Goblin</h1>

      {/* Links (Desktop) */}
      <ul className="hidden md:flex gap-6">
        {navlinks.map((link) => (
          <li key={link.id}>
            <Link 
              href={link.url} 
              className="text-white hover:text-amber-400 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* menu toggle (Mobile) */}
      <div className="md:hidden text-3xl text-white cursor-pointer z-50">
        {shownav 
          ? <MdClose onClick={close}/> 
          : <CiMenuFries onClick={open}/>}
      </div>

      {/* Mobile Menu */}
      {shownav && <MobileNav navlinks={navlinks} close={close} />}
    </nav>
  )
}

export default Navbar
