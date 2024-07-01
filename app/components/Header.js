"use client"

import Image from 'next/image';
import img from 'public/pepper.svg';
import React, { useState } from 'react';
import { useRouter } from 'next/router';


const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  // Function to toggle active menu and apply gradien
  const toggleGradient = (href) => {
    setActiveMenu(href);
    
  };

  return (
    <div className="bg-white flex items-center justify-between px-4" style={{ width: '1280px', height: '86px' }}>
      {/* Company Logo */}
      <div className="flex items-center">
        <Image src={img} alt="company logo" style={{ width: '182px', height: '76px' }} />
      </div>

      {/* Navigation Buttons */}
      <div className="relative flex items-center space-x-4 py-1.25"
        style={{ width: '912px', height: '66px', top: '10px', padding: '5px' }}>
        <button className="text-gray-700 hover:text-gray-900 font-medium text-16px leading-24px transition-colors" style={{ width: '48px', height: '24px' }}>
          Home
        </button>
        <button className="text-gray-700 hover:text-gray-900 font-medium text-16px leading-24px transition-colors" style={{ width: '74px', height: '24px' }}>
          About Us
        </button>
        <button className="text-gray-700 hover:text-gray-900 font-medium text-16px leading-24px transition-colors" style={{ width: '73px', height: '24px' }}>
          Solutions
        </button>
        <button className="text-gray-700 hover:text-gray-900 font-medium text-16px leading-24px transition-colors" style={{ width: '72px', height: '24px' }}>
          Products
        </button>
        <button className="text-gray-700 hover:text-gray-900 font-medium text-16px leading-24px transition-colors" style={{ width: '78px', height: '24px' }}>
          Platforms
        </button>
        <button className="text-gray-700 hover:text-gray-900 font-medium text-16px leading-24px transition-colors" style={{ width: '80px', height: '24px' }}>
          Industries
        </button>

        {/* Resources Button with Dropdown */}
        <div className="relative group">
          <button className="text-gray-700 hover:text-gray-900 font-medium text-16px leading-24px transition-colors" style={{ width: '84px', height: '24px' }}>
            Resources
          </button>
          <div className="absolute left-0 mt-2 w-[250px] bg-white border border-[#E6E6E6] rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"style={{ top: '42px', padding: '5px', gap: '0px' }}>
          <a href="#" className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${activeMenu === '/product-brochures' ? 'bg-gradient-to-r from-transparent to-blue-500' : ''}`} onClick={() => toggleGradient('/product-brochures')}>
          Product Brochures
        </a>
        <a href="#" className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${activeMenu === '/case-studies' ? 'bg-gradient-to-r from-transparent to-blue-500' : ''}`} onClick={() => toggleGradient('/case-studies')}>
          Case Studies
        </a>
        <a href="#" className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${activeMenu === '/videos' ? 'bg-gradient-to-r from-transparent to-blue-500' : ''}`} onClick={() => toggleGradient('/videos')}>
          Videos
        </a>
        <a href="/blogs" style={{ backgroundImage: 'linear-gradient(263.3deg, rgba(255, 255, 255, 0) 7.35%, rgba(116, 205, 219, 0.65) 92.32%)' }} className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${activeMenu === '/blogs' ? 'bg-gradient-to-bl from-transparent via-transparent to-[rgba(116, 205, 219, 0.65)]' : ''}`} onClick={() => toggleGradient('/blogs')}>
          Blogs
        </a>
        <a href="#" className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${activeMenu === '/news' ? 'bg-gradient-to-r from-transparent to-blue-500' : ''}`} onClick={() => toggleGradient('/news')}>
          News
        </a>
        <a href="#" className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${activeMenu === '/events' ? 'bg-gradient-to-r from-transparent to-blue-500' : ''}`} onClick={() => toggleGradient('/events')}>
          Events
        </a>
          </div>
        </div>

        <button className="text-gray-700 hover:text-gray-900 font-medium text-16px transition-colors" style={{ width: '102px', height: '24px' }}>
          Partnerships
        </button>
        <button className=" rounded-[10px] bg-[#3C3F58] border border-gray-300 text-white" style={{ width: '126px', height: '56px' }}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;


