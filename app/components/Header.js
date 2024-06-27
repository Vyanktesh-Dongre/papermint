import Image from 'next/image';
import React from 'react';
import img from 'public/pepper.svg';

const Header = () => {
  return (
    <div className="bg-white flex items-center justify-between px-4" style={{ width: '1280px', height: '86px' }}>
      {/* Company Logo */}
      <div className="flex items-center">
        <Image src={img} alt="company logo"/>
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-4">
        <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
          Home
        </button>
        <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
          About Us
        </button>
        <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
          Solutions
        </button>
        <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
          Products
        </button>
        <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
          Platforms
        </button>
        <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
          Industries
        </button>
        <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
          Resources
        </button>
        <button className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
          Partnerships
        </button>
      </div>

      {/* Contact Us Button */}
      <div className="flex items-center">
        <button className="bg-[#3C3F58] rounded border border-gray-300 py-2 px-4 text-white">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;
