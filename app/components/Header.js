"use client"

import Image from 'next/image';
import img from 'public/pepper.svg';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  // Function to toggle active menu and apply gradient
  const toggleGradient = (href) => {
    setActiveMenu(href);
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex md:justify-start md:mx-10 xl:mx-auto ">
      <div className="container flex gap-[51px] ">
        {/* Company Logo */}
        <div className="">
          <Image src={img} alt="company logo" width={182} height={76} />
        </div>

        {/* Mobile Menu Toggle (for smaller screens) */}
        <div className=" ml-auto  xl:hidden">
          <button className=" w-16 h-14 mt-2 text-gray-700 rounded-xl hover:text-gray-900 focus:outline-none"
                  onClick={toggleMenu}> ---
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex justify-items-center place-items-center gap-[20px]  ">
          <NavButton href="/" text="Home" onClick={() => toggleGradient('/')} />
          <NavButton href="/about" text="About Us" onClick={() => toggleGradient('/about')} />
          <NavButton href="/solutions" text="Solutions" onClick={() => toggleGradient('/solutions')} />
          <NavButton href="/products" text="Products" onClick={() => toggleGradient('/products')} />
          <NavButton href="/platforms" text="Platforms" onClick={() => toggleGradient('/platforms')} />
          <NavButton href="/industries" text="Industries" onClick={() => toggleGradient('/industries')} />

          {/* Resources Button with Dropdown */}
          <DropdownMenu
            buttonLabel="Resources"
            items={[
              { href: '/product-brochures', text: 'Product Brochures' },
              { href: '/case-studies', text: 'Case Studies' },
              { href: '/videos', text: 'Videos' },
              { href: '/blogs', text: 'Blogs' },
              { href: '/news', text: 'News' },
              { href: '/events', text: 'Events' },
            ]}
            activeMenu={activeMenu}
            toggleGradient={toggleGradient}
          />

          <NavButton href="/partnerships" text="Partnerships" onClick={() => toggleGradient('/partnerships')} />
          <button className="rounded-[10px] w-[126px] h-[56px] bg-[#3C3F58] border border-gray-300 text-white">
            Contact Us
          </button>
        </nav>
      </div>
    </div>
  );
};

// NavButton component for individual navigation buttons (desktop)
const NavButton = ({ href, text, onClick }) => (
  <a
    href={href}
    className={`text-gray-700 hover:text-gray-900 font-medium transition-colors`}
    onClick={onClick}
  >
    {text}
  </a>
);

// DropdownMenu component for the Resources dropdown (desktop)
const DropdownMenu = ({ buttonLabel, items, activeMenu, toggleGradient }) => (
  <div className="relative group">
    <button className={`text-gray-700 hover:text-gray-900 font-medium transition-colors`}>
      {buttonLabel}
    </button>
    <div className="absolute  mt-2 w-[250px] bg-white border border-[#E6E6E6] rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
            activeMenu === item.href ? 'bg-gradient-to-l from-[#FFFFFF00] to-[#74CDDBA6]' : ''
          }`}
          onClick={() => toggleGradient(item.href)}
        >
          {item.text}
        </a>
      ))}
    </div>
  </div>
);

export default Header;

