"use client"

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import arr from 'public/arrow.png'; 
import backImage from 'public/bg.png';
import search from 'public/Search.png'; 

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const queryString = buildQueryString();
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
  }, [selectedCategories, searchTerm]);

  useEffect(() => {
    fetchBlogs();
  }, [searchTerm, selectedCategories, fetchBlogs]);

  const buildQueryString = () => {
    const categoryQuery = selectedCategories.length > 0 ? `categories=${selectedCategories.join(',')}` : '';
    const searchQuery = searchTerm ? `title=${encodeURIComponent(searchTerm)}` : '';
    const queryString = `${categoryQuery}${categoryQuery && searchQuery ? '&' : ''}${searchQuery}`;
    return queryString ? `?${queryString}` : '';
  };

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full">
        <Image className="w-full h-[233px]" src={backImage} alt="Background" />
        <div className="absolute inset-0 flex flex-col justify-center items-center ">
          <h1 className="font-poppins text-[#FFFFFF] text-[600] text-4xl">Blogs</h1>
          <div className="w-[6px] h-[59px] bg-[#74CDDB] rounded-[12px] transform -rotate-90 mb-2"></div>
          <p className="hidden sm:block sm:text-left md:w-[575px] font-poppins text-[#FFFFFF] text-lg text-[400] md:flex md:justify-center md:text-center  ">
            Drive Productivity and Cleanliness in Manufacturing Facilities with SD45 Gen2: Your Trusted Cleaning Solution
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-[150px]  mt-8 px-[70px]  xl:mx-auto xl:justify-items-center xl:w-min-[1280px]  ">
        <div className=" w-[194px]">
          <div className="bg-white p-4 rounded-xl ">
            <h2 className=" text-gray-700 font-bold mb-2">Sort by</h2>
            <ul>
              <li className="mb-2">
                <label className="flex items-center">
                  <input type="radio" name="sorting" className="mr-2" />Default sort order
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

          <div className="bg-white p-4 rounded-xl ">
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

          <div className="bg-white p-4 rounded-xl ">
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
          <div className="relative flex justify-start mb-8">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Image className="w-[24px] h-[24px]" src={search} alt="Search Icon" />
            </div>
            <input
              type="search"
              name="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search"
              className="pl-10 w-full max-w-[769px] h-[56px] text-[#000000] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[25px] mb-4">
            {loading ? (
              <p>Loading...</p>
            ) : blogs.length > 0 ? (
              blogs.map(blog => (
                <div
                  key={blog.id}
                  className="w-[240px] h-[389px] bg-white border border-gray-300 rounded-[10px] p-4 hover:shadow-lg transition-shadow duration-300"
                >
                <div className="bg-gray-100 border border-gray-300 rounded-[10px] mb-4 relative">
                  <Image
                    src={blog.image}
                    width={220}
                    height={185}
                    className="rounded-[10px]"
                    alt="Blog Image"
                    layout="responsive"
                  />
                  <div className="absolute -mt-36 bg-[#74CDDB] px-2 py-1 rounded-tr-lg">
                    <p className="text-[#000000] text-xs">{truncateText(blog.category, 15)}...</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#3C3F58] mb-2">{blog.title}</h3>
                <p className="text-sm text-[#3B3C4A] mb-2">{blog.date}</p>
                <p className="text-sm text-[#3B3C4A]">{truncateText(blog.summary, 70)}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-xs text-[#999999]">{blog.readTime}</p>
                  <a
                    href={`/blogs/${blog.id}`}
                    className="text-[#74CDDB] text-sm font-semibold flex items-center"
                  >
                    Read More <Image className="ml-2" src={arr} alt="arrow" width={20} height={20} />
                  </a>
                </div>
              </div>
              ))
            ) : (
              <p>No blogs found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
