import Image from "next/image";
import img from 'public/logo.png';
import img2 from 'public/X.png';
import img3 from 'public/Linkedin.png';
import img4 from 'public/fb_2.png';
import img5 from 'public/copy.png';
import img6 from 'public/Up.png';

const Footer = () => {
    return(
        <div className="absolute w-[100%]  h-[287px] top-[1356px]  bg-[#3B3C4A]  ">
            <div className="absolute w-[285px] h-[249.67px] bg-[#3B3C4A] left-[69.25px] top-[17.33px]">
                <Image src={img} alt="company logo" style={{ width: '184px', height: '76px' }} />
                <p className="text-[14px] font-small text-[#FFFFFF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div className="py-10 flex ">
                    <Image className="" src={img3} alt="company logo" style={{ width: '28px', height: '28px'}} />
                    <Image className="ml-3" src={img2} alt="company logo" style={{ width: '28px', height: '28px'}} />
                    <Image className="ml-3" src={img4} alt="company logo" style={{ width: '28px', height: '28px'}} />
                </div>
                <div className="flex text-[12px]">
                    <Image src={img5} alt="company logo" style={{ width:'16px', height:'16px'}} />
                    <p  className="text-[#FFFFFF] ml-2">2023 peppermint. all rights reserved.</p>
                </div>

                <div class="absolute w-[92px] h-[164px] top-[11px] left-[410px]">
                    <h1 className="mb-4 text-[#FFFFFF] font-bold " >Company</h1>
                    <button class=" w-full text-left  py-2 text-[#FFFFFF] ">About</button>
                    <button class=" w-full text-left py-2 text-[#FFFFFF] ">Blog</button>
                    <button class=" w-full text-left py-2 text-[#FFFFFF] ">Events</button>
                    <button class=" w-full text-left py-2 text-[#FFFFFF] ">Careers</button>
                </div>

                <div class="absolute w-[108px] h-[135px] top-[11px] left-[590px]">
                    <h1 className="mb-4 text-[#FFFFFF] font-bold " >Need Help ?</h1>
                    <button class=" w-full text-left  py-2 text-[#FFFFFF] ">Contact Us</button>
                    <button class=" w-full text-left py-2 text-[#FFFFFF] ">FAQ</button>
                    <button class=" w-full text-left py-2 text-[#FFFFFF] ">All Links</button>
                </div>

                <div class="absolute w-[277px] h-[90px] top-[11px] left-[780px]">
                    <p className="text-[#FFFFFF] font-bold">Subscribe to Our Newsletter</p>
                    <div class="relative mt-3">
                        <input type="email" class="w-[277px] h-[48px] px-5 py-2 bg-[#3B3C4A] border border-[#ffffff] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email Address" />
                    </div>
                </div>

                <div className="absolute w-[32px] h-[32] top-[11px] left-[1125px]">
                    <Image src={img6} alt="company logo" />
                </div>

                <div className="absolute w-[173px] h-[18] top-[210px] left-[965px]">
                    <p className="text-[12px] text-[#FFFFFF]">Terms Of Use | Privacy Policy </p>
                </div>

            </div>
        </div>
    )
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
//         <div className="flex justify-between">
//             <div className=" w-[100%]  h-[287px] bg-[#3B3C4A]  ">
//             <div className=" w-[285px] h-[249.67px] bg-[#3B3C4A]">
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

//                 <div className="flex justify-center ml-[100]">
//                     <div class="w-[92px] h-[164px]">
//                         <h1 className="mb-4 text-[#FFFFFF] font-bold " >Company</h1>
//                         <button class=" w-full text-left  py-2 text-[#FFFFFF] ">About</button>
//                         <button class=" w-full text-left py-2 text-[#FFFFFF] ">Blog</button>
//                         <button class=" w-full text-left py-2 text-[#FFFFFF] ">Events</button>
//                         <button class=" w-full text-left py-2 text-[#FFFFFF] ">Careers</button>
//                     </div>

//                     <div class="w-[108px] h-[135px]">
//                         <h1 className="mb-4 text-[#FFFFFF] font-bold " >Need Help ?</h1>
//                         <button class=" w-full text-left  py-2 text-[#FFFFFF] ">Contact Us</button>
//                         <button class=" w-full text-left py-2 text-[#FFFFFF] ">FAQ</button>
//                         <button class=" w-full text-left py-2 text-[#FFFFFF] ">All Links</button>
//                     </div>
//                 </div>
//         </div>  

//                 <div class=" w-[277px] h-[90px]">
//                     <p className="text-[#FFFFFF] font-bold">Subscribe to Our Newsletter</p>
//                     <div class="relative mt-3">
//                         <input type="email" class="w-[277px] h-[48px] px-5 py-2 bg-[#3B3C4A] border border-[#ffffff] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email Address" />
//                     </div>
//                 </div>

//                 <div className=" w-[32px] h-[32px] top-[11px] left-[1125px]">
//                     <Image src={img6} alt="company logo" />
//                 </div>

//                 <div className=" w-[173px] h-[18px]">
//                     <p className="text-[12px] text-[#FFFFFF]">Terms Of Use | Privacy Policy </p>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Footer;



