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
  }, [fetchBlogs]);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

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
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full">
        <Image className="w-full h-[233px]" src={backImage} alt="Background" />
        <div className="flex justify-center items-center flex-col absolute top-[20%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
          <h1 className="font-poppins text-[#FFFFFF] text-4xl text-center mt-32 ">Blogs</h1>
          <div className="w-[6px] h-[59px] bg-[#74CDDB] rounded-tl-[12px] transform -rotate-90 mb-2"></div>
          <p className="hidden sm:block sm:text-left md:w-[575px] font-poppins text-[#FFFFFF] text-lg text-center">
  Drive Productivity and Cleanliness in Manufacturing Facilities with SD45 Gen2: Your Trusted Cleaning Solution
</p>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-8 mt-8 px-8">
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-gray-700 font-bold mb-2">Sort by</h2>
            <ul>
              <li className="mb-2">
                <label className="flex items-center">
                  <input type="radio" name="sorting" className="mr-2" />Default search order
                </label>
              </li>
              <li className="mb-2">
                <label className="flex items-center">
                  <input type="radio" name="sorting" className="mr-2" />Featured
                </label>
              </li>
              <li className="mb-2">
                <label className="flex items-center">
                  <input type="radio" name="sorting" className="mr-2" />Recents
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="radio" name="sorting" className="mr-2" />Most viewed
                </label>
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-gray-700 font-bold mb-2">Industries</h2>
            <ul>
              <li className="mb-2">
                <label className="flex items-center">
                  <input type="checkbox" name="sorting" className="mr-2" />
                  Blogs
                </label>
              </li>
              <li className="mb-2">
                <label className="flex items-center">
                  <input type="checkbox" name="sorting" className="mr-2" />
                  Case Studies
                </label>
              </li>
              <li className="mb-2">
                <label className="flex items-center">
                  <input type="checkbox" name="sorting" className="mr-2" />
                  Press
                </label>
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-gray-700 font-bold mb-2">Topics</h2>
            <ul>
              <li className="mb-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Airport Cleaning"
                    className="mr-2"
                    onChange={() => handleCheckboxChange('Airport Cleaning')}
                    checked={selectedCategories.includes('Airport Cleaning')}
                  />
                  Airport Cleaning
                </label>
              </li>
              <li className="mb-2">
                <label className="flex items-center">
                  <input type="checkbox" name="AMR" className="mr-2" onChange={() => handleCheckboxChange('AMR')} checked={selectedCategories.includes('AMR')}/>
                  AMR 
                </label>
              </li>
              <li className="mb-2">
                <label className="flex items-center">
                  <input type="checkbox" name="Cleaning Robot" className="mr-2" onChange={() => handleCheckboxChange('Cleaning Robot')} checked={selectedCategories.includes('Cleaning Robot')}/>
                  Cleaning Robot
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" name="GMR Airport" className="mr-2" onChange={() => handleCheckboxChange('GMR Airport')} checked={selectedCategories.includes('GMR Airport')}/>
                  GMR Airport
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="flex justify-center mb-8">
            <input type="search" name="search" placeholder="Search" className="pl-10 w-full max-w-[750px] h-[56px] text-[#000000] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 ">
            {blogs.map(blog => (
              <div key={blog.id} className=" w-[240px] h-[389px] bg-white border border-gray-300 rounded-[10px] p-4 shadow-md">
                <div className="bg-gray-100 border border-gray-300 rounded-[10px] mb-4">
                  <Image src={blog.image} width={220} height={185} className="rounded-[10px]" alt="Blog Image" layout="responsive"/>
                  <div className="absolute -mt-36 bg-[#74CDDB] px-2 py-1 rounded-tr-lg">
                    <p className=" text-[#000000] text-xs">{truncateText(blog.category, 15)}...</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#3C3F58] mb-2">{blog.title}</h3>
                <p className="text-sm text-[#3B3C4A] mb-2">{blog.date}</p>
                <p className="text-sm text-[#3B3C4A]">{truncateText(blog.summary, 70)}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-xs text-[#999999]">{blog.readTime}</p>
                  <a href="#" className="text-[#74CDDB] text-sm font-semibold flex items-center">
                    Read More <Image className="ml-2" src={arr} alt="arrow" width={20} height={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}