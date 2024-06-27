// import Image from 'next/image';
// import React from 'react';
// import img from 'public/pepper.svg';

// const Header = () => {
//   return (
//     <div className="bg-[background: #FFFFFF] flex items-center justify-between px-4" style={{ width: '1280px', height: '86px' }}>
//       {/* Company Logo */}
//       <div className="flex items-center ">
//         <Image src={img} alt="company logo" style={{width: '182', height: '76'}} />
//       </div>

//       {/* Navigation Buttons */}
//       <div className="absolute flex items-center space-x-4 py-1.25 gap-5"
//         style={{ width: '907px',height: '66px',top: '10px',left: '303px',padding:'5px' }}>
//         <button className="text-gray-700 hover:text-gray-900 font-medium text-16px leading-24px transition-colors"style={{ width: '48px', height: '24px' }}>
//           Home
//         </button>
//         <button className="text-gray-700 hover:text-gray-900 font-medium text-16px leading-24px transition-colors"style={{ width: '74px', height: '24px' }}>
//          AboutUs
//         </button>
//         <button className="text-gray-700 hover:text-gray-900 font-medium text-16px leading-24px transition-colors"style={{ width: '73px', height: '24px' }}>
//           Solutions
//         </button>
//         <button className="text-gray-700 hover:text-gray-900 font-medium text-16px leading-24px transition-colors"style={{ width: '72px', height: '24px' }}>
//           Products
//         </button>
//         <button className="text-gray-700 hover:text-gray-900 font-medium text-16px leading-24px transition-colors"style={{ width: '78px', height: '24px' }}>
//           Platforms
//         </button>
//         <button className="text-gray-700 hover:text-gray-900 font-medium text-16px leading-24px transition-colors"style={{ width: '80px', height: '24px' }}>
//           Industries
//         </button>
//         <button className="text-gray-700 hover:text-gray-900 font-medium text-16px leading-24px transition-colors"style={{ width: '84px', height: '24px' }}>
//           Resources
//         </button>
//         <button className="text-gray-700 hover:text-gray-900 font-medium text-16px leading-24px transition-colors"style={{ width: '102px', height: '24px' }}>
//           Partnerships
//         </button>
//         <button className="w-[126px] h-[56px] px-[18px] py-[16px] gap-[10px] rounded-[10px] bg-[#3C3F58] border border-gray-300 text-white"style={{ width: '126px', height: '56px' }}>
//           ContactUs
//         </button>
//       </div>

//     </div>
//   );
// };

// export default Header;

import Image from 'next/image';
import React from 'react';
import img from 'public/pepper.svg';

const Header = () => {
  return (
    <div className="bg-white flex items-center justify-between px-4" style={{ width: '1280px', height: '86px' }}>
      {/* Company Logo */}
      <div className="flex items-center">
        <Image src={img} alt="company logo" style={{ width: '182px', height: '76px' }} />
      </div>

      {/* Navigation Buttons */}
      <div className="relative flex items-center space-x-4 py-1.25"
        style={{ width: '907px', height: '66px', top: '10px', padding: '5px' }}>
        <button className="text-gray-700 hover:text-gray-900 font-medium text-16px leading-24px transition-colors" style={{ width: '48px', height: '24px' }}>
          Home
        </button>
        <button className="text-gray-700 hover:text-gray-900 font-medium text-16px leading-24px transition-colors" style={{ width: '74px', height: '24px' }}>
          AboutUs
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
          <div className="absolute left-0 mt-2 w-[250px] bg-white border border-gray-300 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            style={{ top: '42px', padding: '5px', gap: '0px' }}>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product Brochures</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Case Studies</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Videos</a>
            <a href="/Blogs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Blogs</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">News</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Events</a>
          </div>
        </div>

        <button className="text-gray-700 hover:text-gray-900 font-medium text-16px transition-colors" style={{ width: '102px', height: '24px' }}>
          Partnerships
        </button>
        <button className=" rounded-[10px] bg-[#3C3F58] border border-gray-300 text-white" style={{ width: '126px', height: '56px' }}>
          ContactUs
        </button>
      </div>
    </div>
  );
};

export default Header;


