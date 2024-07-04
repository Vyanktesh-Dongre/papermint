// import Image from "next/image";
// import img from 'public/logo.png';
// import img2 from 'public/X.png';
// import img3 from 'public/Linkedin.png';
// import img4 from 'public/fb_2.png';
// import img5 from 'public/copy.png';
// import img6 from 'public/Up.png';

// const Footer = () => {
//     return(
//         <div className="absolute w-[100%]  h-[287px] top-[1356px]  bg-[#3B3C4A]  ">
//             <div className="absolute w-[285px] h-[249.67px] bg-[#3B3C4A] left-[69.25px] top-[17.33px]">
//                 <Image src={img} alt="company logo" style={{ width: '184px', height: '76px' }} />
//                 <p className="text-[14px] font-small text-[#FFFFFF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
//                 <div className="py-10 flex ">
//                     <Image className="" src={img3} alt="company logo" style={{ width: '28px', height: '28px'}} />
//                     <Image className="ml-3" src={img2} alt="company logo" style={{ width: '28px', height: '28px'}} />
//                     <Image className="ml-3" src={img4} alt="company logo" style={{ width: '28px', height: '28px'}} />
//                 </div>
//                 <div className="flex text-[12px]">
//                     <Image src={img5} alt="company logo" style={{ width:'16px', height:'16px'}} />
//                     <p  className="text-[#FFFFFF] ml-2">2023 peppermint. all rights reserved.</p>
//                 </div>

//                 <div class="absolute w-[92px] h-[164px] top-[11px] left-[410px]">
//                     <h1 className="mb-4 text-[#FFFFFF] font-bold " >Company</h1>
//                     <button class=" w-full text-left  py-2 text-[#FFFFFF] ">About</button>
//                     <button class=" w-full text-left py-2 text-[#FFFFFF] ">Blog</button>
//                     <button class=" w-full text-left py-2 text-[#FFFFFF] ">Events</button>
//                     <button class=" w-full text-left py-2 text-[#FFFFFF] ">Careers</button>
//                 </div>

//                 <div class="absolute w-[108px] h-[135px] top-[11px] left-[590px]">
//                     <h1 className="mb-4 text-[#FFFFFF] font-bold " >Need Help ?</h1>
//                     <button class=" w-full text-left  py-2 text-[#FFFFFF] ">Contact Us</button>
//                     <button class=" w-full text-left py-2 text-[#FFFFFF] ">FAQ</button>
//                     <button class=" w-full text-left py-2 text-[#FFFFFF] ">All Links</button>
//                 </div>

//                 <div class="absolute w-[277px] h-[90px] top-[11px] left-[780px]">
//                     <p className="text-[#FFFFFF] font-bold">Subscribe to Our Newsletter</p>
//                     <div class="relative mt-3">
//                         <input type="email" class="w-[277px] h-[48px] px-5 py-2 bg-[#3B3C4A] border border-[#ffffff] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email Address" />
//                     </div>
//                 </div>

//                 <div className="absolute w-[32px] h-[32] top-[11px] left-[1125px]">
//                     <Image src={img6} alt="company logo" />
//                 </div>

//                 <div className="absolute w-[173px] h-[18] top-[210px] left-[965px]">
//                     <p className="text-[12px] text-[#FFFFFF]">Terms Of Use | Privacy Policy </p>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Footer;

import Image from "next/image";
import img from 'public/logo.png';
import img2 from 'public/X.png';
import img3 from 'public/Linkedin.png';
import img4 from 'public/fb_2.png';
import img5 from 'public/copy.png';
import img6 from 'public/Up.png';

const Footer = () => {
  return (
    <div className="w-full bg-[#3B3C4A] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Column 1 */}
        <div className="md:col-span-1">
          <Image src={img} alt="company logo" width={184} height={76} />
          <p className="text-white text-sm mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <div className="flex mt-6 space-x-4">
            <Image src={img3} alt="LinkedIn" width={28} height={28} />
            <Image src={img2} alt="X" width={28} height={28} />
            <Image src={img4} alt="Facebook" width={28} height={28} />
          </div>
          <div className="flex items-center text-white text-xs mt-6">
            <Image src={img5} alt="Copyright" width={16} height={16} />
            <p className="ml-2">2023 peppermint. all rights reserved.</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="md:col-span-1">
          <h1 className="text-white font-bold mb-4">Company</h1>
          <ul>
            <li><button className="text-left text-white py-2 w-full">About</button></li>
            <li><button className="text-left text-white py-2 w-full">Blog</button></li>
            <li><button className="text-left text-white py-2 w-full">Events</button></li>
            <li><button className="text-left text-white py-2 w-full">Careers</button></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="md:col-span-1">
          <h1 className="text-white font-bold mb-4">Need Help?</h1>
          <ul>
            <li><button className="text-left text-white py-2 w-full">Contact Us</button></li>
            <li><button className="text-left text-white py-2 w-full">FAQ</button></li>
            <li><button className="text-left text-white py-2 w-full">All Links</button></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="md:col-span-1">
          <h1 className="text-white font-bold mb-4">Subscribe to Our Newsletter</h1>
          <input 
            type="email" 
            className="w-full h-12 px-5 py-2 bg-[#3B3C4A] border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Email Address" 
          />
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center text-white text-xs">
        <div className="flex items-center">
          <Image src={img6} alt="Back to Top" width={32} height={32} />
        </div>
        <p className="text-center">Terms Of Use | Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;



// import Image from "next/image";
// import img from 'public/logo.png';
// import img2 from 'public/X.png';
// import img3 from 'public/Linkedin.png';
// import img4 from 'public/fb_2.png';
// import img5 from 'public/copy.png';
// import img6 from 'public/Up.png';

// const Footer = () => {
//     return(
//         <div className="w-[100%] h-[287px] mx-auto bg-[#3B3C4A] "  >
//             <div className="">

//             </div>

//         </div>
//     )
// }

// export default Footer;



