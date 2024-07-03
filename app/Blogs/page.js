"use client"

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import arr from 'public/arrow.png'; // Assuming this is your arrow image
import backImage from 'public/bg.png';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const queryString = selectedCategories.length > 0 ? `?categories=${selectedCategories.join(',')}` : '';
      console.log('Fetching blogs with query:', queryString);

      const response = await fetch(`/api/blogs${queryString}`);
      const data = await response.json();
      console.log('Fetched Blogs:', data);
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  }, [selectedCategories]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]); // Refetch blogs whenever selectedCategories change

  const handleCheckboxChange = (category) => {
    setSelectedCategories(prevSelectedCategories => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter(cat => cat !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  return (
    <>
      <div className="relative">
        <Image className='w-[100%] h-[233px]' src={backImage} alt="Background" />
        <button className="absolute w-[160px] h-[46px] top-[180px] left-[1177px] bg-[#74CDDB] rounded-b-lg border-[1px] border-black text-[14px] text-[#3C3F58] font-[400] transform rotate-90">
        Request a Demo
      </button>

      <button className="absolute w-[160px] h-[46px] top-[360px] left-[1177px] bg-[#FFFFFF] rounded-b-lg border-[1px] border-black text-[14px] text-[#3C3F58] font-[400] transform rotate-90">
        Talk to Expert
      </button>
        <div className="absolute font-poppins text-[#FFFFFF] text-4xl text-center top-[60px] left-[587px]" style={{ width: 154, height: 54 }}>
          Blogs
        </div>
        <div className="absolute w-[6px] h-[59px] top-[90px] left-[665px] bg-[#74CDDB] rounded-tl-[12px] rounded-tr-[0] rounded-br-[0] rounded-bl-[0] transform rotate-[-90deg]"></div>
        <div className="absolute w-[575px] h-[54px] top-[140px] left-[368px] font-poppins text-[#FFFFFF] text-lg text-center">
          Drive Productivity and Cleanliness in Manufacturing Facilities with SD45 Gen2: Your Trusted Cleaning Solution
        </div>
      </div>


      <form>
        <div className='mt-8 ml-[430px] '>
          <div class="absolute items-center pl-3 pointer-events-none">
            <svg class="w-5 h-14 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" name="search" placeholder='search' className="pl-10 w-[750px] h-[56px] text-[#000000] px-4 py-2 border border-gray-300 rounded-lg  focus:ring-2 focus:ring-blue-500" />
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
                <input
                  type="checkbox"
                  name="Airport Cleaning"
                  className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-tl-2xl rounded-br-lg"
                  onChange={() => handleCheckboxChange('Airport Cleaning')}
                  checked={selectedCategories['Airport Cleaning']}
                />
                Airport Cleaning (0)
              </label>
            </li>
            <li className="px-4 py-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="AMR"
                  className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  onChange={() => handleCheckboxChange('AMR')}
                  checked={selectedCategories['AMR']}
                />
                AMR (0)
              </label>
            </li>
            <li className="px-4 py-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="Cleaning Robot"
                  className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  onChange={() => handleCheckboxChange('Cleaning Robot')}
                  checked={selectedCategories['Cleaning Robot']}
                />
                Cleaning Robot (3)
              </label>
            </li>
            <li className="px-4 py-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="GMR Airport"
                  className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  onChange={() => handleCheckboxChange('GMR Airport')}
                  checked={selectedCategories['GMR Airport']}
                />
                GMR Airport (0)
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute grid grid-cols-3 gap-6 top-[440px] left-[420px]">
        {blogs.map(blog => (
          <div key={blog.id} className="relative w-[240px] h-[389px] bg-white border border-gray-300 rounded-[10px]">
            <div className="w-[220px] h-[185px] ml-[10px] mt-[10px] bg-gray-100 border border-gray-300 rounded-[10px]">
              <Image src={blog.image} width={220} height={185} className="rounded-[10px]" alt="Blog Image" />
              <div className="absolute w-[98px] h-[25px] bg-[#74CDDB] top-[21px] rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none flex justify-center items-center">
                <p className='w-[78px] h-[15px] text-[#000000] text-[10px] top-[5px] left-[6px] text-center'>{blog.category}</p>
              </div>
            </div>
            <div className="w-[148px] h-[24px] pt-2 ml-[10px] left-[11px] text-[16px] font-[600] text-[#3C3F58]">
              <p>{blog.title}</p>
            </div>
            <div className="w-[115px] h-[18px] pt-4 ml-[10px] left-[11px] text-[12px] font-[500] text-[#3B3C4A]">
              <p>{blog.date}</p>
            </div>
            <div className="w-[195px] h-[72px] pt-6 ml-[10px] text-[12px] font-[400] text-[#3B3C4A]">
              <p>{blog.summary}</p>
            </div>
            <div className="absolute flex w-[131px] top-[340px] h-[44px] pt-4 left-[11px] text-[#999999] text-[12px] font-[400]">
              <p>{blog.readTime}</p>
            </div>
            <div className='flex absolute w-[131px] top-[337px] h-[44px] pt-4 left-[125px] text-[#74CDDB] text-[16px] font-[600]'>
        <a href="#" className=''>Read More</a>
        <Image className='w-[27px] h-[27px]' src={arr} alt="arrow_image" />
      </div>
          </div>
        ))}
      </div>
    </>
  );
}









