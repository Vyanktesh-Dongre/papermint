
import Image from 'next/image';
import backImage from 'public/bg.png';

export default function Blogs() {
    return (
      <>
        <div className="relative ">
          <Image src={backImage} alt="wait" width={1279} height={233} />
            <div className="absolute font-poppins text-[#FFFFFF] text-4xl text-center top-[60px] left-[587px]" style={{width:154, height:54}}>
              Blogs
            </div>
              <div className="absolute w-[6px] h-[59px] top-[90px] left-[665px] bg-[#74CDDB] rounded-tl-[12px] rounded-tr-[0] rounded-br-[0] rounded-bl-[0] transform rotate-[-90deg]"></div>
                <div className="absolute w-[575px] h-[54px] top-[140px] left-[368px]  font-poppins text-[#FFFFFF] text-lg text-center " >
                  Drive Productivity and Cleanliness in Manufacturing Facilities 
                  with SD45 Gen2: Your Trusted Cleaning Solution
                </div>
        </div>
        
        <form>
          <div className='mt-8 ml-[410px] '>
              <div class="absolute items-center pl-3 pointer-events-none">
                <svg class="w-5 h-14 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
            <input type="search" name="search" placeholder='search' className="pl-10 w-[790px] h-[56px] text-[#000000]] px-4 py-2 border border-gray-300 rounded-lg  focus:ring-2 focus:ring-blue-500" />
          </div>
        </form>

      <div className="">
        <div className="absolute w-[230px] h-[209px] top-[370px] left-[70px] bg-white">
          <div className="px-4 py-1 rounded-tl-2xl rounded-tr-2xl text-gray-700 font-bold">Sort by</div>
            <ul className="">
              <li className="px-4 py-2">
        <label className="flex items-center">
          <input type="radio" name="sorting" className="mr-2 form-radio text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-tl-2xl rounded-br-lg" />
          Default search order
        </label>
      </li>
      <li className="px-4 py-2">
        <label className="flex items-center">
          <input type="radio" name="sorting" className="mr-2 form-radio text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          Featured
        </label>
      </li>
      <li className="px-4 py-2">
        <label className="flex items-center">
          <input type="radio" name="sorting" className="mr-2 form-radio text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          Recents
        </label>
      </li>
      <li className="px-4 py-2">
        <label className="flex items-center">
          <input type="radio" name="sorting" className="mr-2 form-radio text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-bl-2xl rounded-tr-lg" />
          Most viewed
        </label>
      </li>
            </ul>
          </div>
      </div>

      <div className="">
        <div className="absolute w-[230px] h-[209px] top-[580px] left-[70px] bg-white">
          <div className="px-4 py-1 rounded-tl-2xl rounded-tr-2xl text-gray-700 font-bold">Industries</div>
            <ul className="">
            <li className="px-4 py-2">
        <label className="flex items-center">
          <input type="checkbox" name="sorting" className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          Blogs
        </label>
      </li>
      <li className="px-4 py-2">
        <label className="flex items-center">
          <input type="checkbox" name="sorting" className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          Case Studies
        </label>
      </li>
      <li className="px-4 py-2">
        <label className="flex items-center">
          <input type="checkbox" name="sorting" className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          Press
        </label>
      </li>
            </ul>
          </div>
      </div>

      <div className="">
        <div className="absolute w-[230px] h-[209px] top-[750px] left-[70px] bg-white">
          <div className="px-4 py-1 rounded-tl-2xl rounded-tr-2xl text-gray-700 font-bold">Topics</div>
            <ul className="">
            <li className="px-4 py-2">
        <label className="flex items-center">
          <input type="checkbox" name="sorting" className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-tl-2xl rounded-br-lg" />
          Airport Cleaning (0)
        </label>
      </li>
      <li className="px-4 py-2">
        <label className="flex items-center">
          <input type="checkbox" name="sorting" className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          AMR (0)
        </label>
      </li>
      <li className="px-4 py-2">
        <label className="flex items-center">
          <input type="checkbox" name="sorting" className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          Cleaning Robot (3)
        </label>
      </li>
      <li className="px-4 py-2">
        <label className="flex items-center">
          <input type="checkbox" name="sorting" className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          GMR Airport (0)
        </label>
      </li>
            </ul>
          </div>
      </div>

      <div className="absolute w-[240px] h-[389px] top-[471px] left-[400px] bg-white border  border-gray-300 rounded-[10px]">
        outer
        <div className="absolute w-[220px] h-[185px] bg-gray-100 border border-gray-300 rounded-[10px] top-[10px] left-[10px]">
         inner
        </div>
      </div>

      <div className="absolute w-[240px] h-[389px] top-[471px] left-[690px] bg-white border  border-gray-300 rounded-[10px]">
        outer
        <div className="absolute w-[220px] h-[185px] bg-gray-100 border border-gray-300 rounded-[10px] top-[10px] left-[10px]">
         inner
        </div>
      </div>

      <div className="absolute w-[240px] h-[389px] top-[471px] left-[990px] bg-white border  border-gray-300 rounded-[10px]">
        outer
        <div className="absolute w-[220px] h-[185px] bg-gray-100 border border-gray-300 rounded-[10px] top-[10px] left-[10px]">
         inner
        </div>
      </div>

      <div className="absolute w-[240px] h-[389px] top-[901px] left-[400px] bg-white border  border-gray-300 rounded-[10px]">
        outer
        <div className="absolute w-[220px] h-[185px] bg-gray-100 border border-gray-300 rounded-[10px] top-[10px] left-[10px]">
         inner
        </div>
      </div>

      <div className="absolute w-[240px] h-[389px] top-[901px] left-[690px] bg-white border  border-gray-300 rounded-[10px]">
        outer
        <div className="absolute w-[220px] h-[185px] bg-gray-100 border border-gray-300 rounded-[10px] top-[10px] left-[10px]">
         inner
        </div>
      </div>

      <div className="absolute w-[240px] h-[389px] top-[901px] left-[990px] bg-white border  border-gray-300 rounded-[10px]">
        outer
        <div className="absolute w-[220px] h-[185px] bg-gray-100 border border-gray-300 rounded-[10px] top-[10px] left-[10px]">
         inner
        </div>
      </div>
    </>
      );
    };