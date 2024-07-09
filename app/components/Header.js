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
    <div className="bg-white md:px-6 md:py-4">
      <div className="container px-14 lg:mx-auto flex justify-items-center">
        {/* Company Logo */}
        <div className="flex justify-start">
          <Image src={img} alt="company logo" width={182} height={76} />
        </div>

        {/* Mobile Menu Toggle (for smaller screens) */}
        <div className="flex justify-end md:hidden">
          <button
            className=" w-16 h-14 mt-2 text-gray-700 bg-cyan-200 rounded-xl hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            ---
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-items-center place-items-center space-x-10  ">
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
          <button className="rounded-full bg-[#3C3F58] border border-gray-300 text-white py-2 px-6">
            Contact Us
          </button>
        </nav>
        
        {isMenuOpen && (
          <div className='absolute ml-[268px] top-[20px]'>
              <DropdownMenu
          buttonLabel="Menu"
          items={[
            { href: '/about', text: 'About' },
            { href: '/solutions', text: 'Solutions' },
            { href: '/products', text: 'Products' },
            { href: '/platform', text: 'Platforms' },
            { href: '/industries', text: 'Industries' },
            { href: '/partnerships', text: 'Partnerships' },
            { href: '/case-studies', text: 'Case Studies' },
            { href: '/videos', text: 'Videos' },
            { href: '/product-brochures', text: 'Product Brochures' },
            { href: '/news', text: 'News' },
          ]}
          activeMenu={activeMenu}
          toggleGradient={toggleGradient}
        />
          </div>
  
        )}

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

// MobileNavButton component for individual navigation buttons (mobile dropdown)
const MobileNavButton = ({ href, text, onClick }) => (
  <a
    href={href}
    className={`block py-2 text-gray-700 hover:bg-gray-100`}
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
    <div className="absolute left-0 mt-2 w-[250px] bg-white border border-[#E6E6E6] rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
            activeMenu === item.href ? 'bg-gradient-to-r from-transparent to-blue-500' : ''
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


