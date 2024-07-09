
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
        <div className="hidden lg:block md:col-span-1">
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
        <p className="mr-6">Terms Of Use | Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;



