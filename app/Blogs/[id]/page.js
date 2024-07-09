"use client"

import { useEffect, useState, useCallback } from 'react';

import backImage from 'public/bg.png';
import Image from 'next/image';
import img from 'public/Ellipse.png';
import img2 from 'public/share.png'; 
import img3 from 'public/rect.png';
import img4 from 'public/hand.png';     

export default function Page({params}) {

    const id = params.id;
    console.log(id);
    const [blog, setBlog] = useState(null); // Initially null to indicate no data loaded
    const [error, setError] = useState(null); // State for handling errors
  
    const fetchBlog = useCallback(async () => {
      try {
        const response = await fetch(`/api/blogs?id=${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched Blog:', data);
        setBlog(data[0]);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError(error.message);
      }
    }, [id]);
  
    useEffect(() => {
      if (id) {
        fetchBlog();
      }
    }, [fetchBlog, id]);
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!blog) {
      return <div>Loading...</div>;
    }


    return (   
    <>  
            <div className='relative flex flex-col items-center'>
              <div className="relative w-full">
                <Image className='hidden lg:block w-full' src={backImage} alt="Background" height={233} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50">
                    <div className="hidden lg:block font-poppins text-white text-4xl text-center mb-8">
                      Blogs
                    </div>
                    <div className="hidden lg:block font-poppins text-white text-lg text-center">
                      Drive Productivity and Cleanliness in Manufacturing Facilities with SD45 Gen2: Your Trusted Cleaning Solution
                    </div>
                  </div>
                </div>
                    <div className='relative px-6 grid grid-cols-2 gap-4 md:ml-0 ml-4'>
                        <div className=" w-full grid row-span-5 px-4 ml-4 md:px-0">
                            <div className='relative gap-4 mt-4'>
                                {/* Search Form */}
                                <form>
                                <div className='flex items-center'>
                                    <div className="absolute left-3 top-3 pointer-events-none">
                                    <svg className="w-5 h-14 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </div>
                                    <input type="search" name="search" placeholder='Search' className=" pl-10 w-full md:w-[750px] h-14 text-gray-900 dark:text-gray-300 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                                </div>
                                </form>

                                    {/* Posted By Section */}
                                    <div className='flex items-center mt-4'>
                                    <Image className='ml-3' src={img} alt="Author Avatar" width={24} height={24} />
                                    <p className='ml-3 text-sm text-[#3B3C4A]'>Posted by - Author </p>
                                    </div>

                                    {/* Blog Title */}
                                    <div className='w-[642px] ml-3 mt-2'>
                                    <p className='text-[16px]'>{blog.title}</p>
                                    </div>

                                    {/* Tags */}
                                    <div className='flex justify-around text-[11px] text-[#141414] w-full md:w-[425px] mt-2'>
                                    <p className='bg-[#F4FBFC] rounded-full px-3 py-1'>Peppermint OS</p>
                                    <p className='bg-[#F4FBFC] rounded-full px-3 py-1'>Peppermint Skateboard</p>
                                    <p className='bg-[#F4FBFC] rounded-full px-3 py-1'>Peppermint Dashboard</p>
                                    </div>

                                    {/* Posted Date and Read Time */}
                                    <div className='flex items-center text-xs md:text-sm mt-2'>
                                    <p className='text-[#74CDDB]'>Posted - {blog.date} |</p>
                                    <p className='ml-2 text-[#74CDDB]'>{blog.readTime}</p>
                                    <div className='flex ml-90'>
                                        <Image className='ml-2' src={img2} alt="Share Icon" width={20} height={20} />
                                        <button className='ml-2 text-[#74CDDB]'>Share</button>
                                    </div>
                                    </div>

                                    {/* Horizontal Line */}
                                    <hr className='mt-2 md:mt-6 w-[85%] ml-4 md:ml-0 border-[1px] border-[#E6E6E6]' />

                                    {/* Blog Content */}
                                    <div className='w-[642px] grid  mt-2 md:mt-4 ml-3 md:ml-0 mb-20'>
                                    <p className='text-sm md:text-base text-[#3B3C4A]'>{blog.content}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mt-[85px] ml-[135px] '>
                                <hr className='hidden lg:block md:mt-6 w-0 h-[1411px] border-[1px] border-[#E6E6E6]' />
                                <div className='hidden lg:block h-auto mt-4 pl-4'>
                                <div className='text-[#74CDDB] mb-2'>Related Topics</div>
                                <ul className=' list-none w-[268px] grid grid-cols-2 gap-x-4 gap-y-4'>
                                    <li><button className="bg-[#F4FBFC] text-[11px] text-left text-[#141414] w-full">Peppermint OS</button></li>
                                    <li><button className="bg-[#F4FBFC] text-[11px] text-left text-[#141414] w-full">Peppermint Skateboard</button></li>
                                    <li><button className="bg-[#F4FBFC] text-[11px] text-left text-[#141414] w-full">Peppermint Dashboard</button></li>
                                    <li><button className="bg-[#F4FBFC] text-[11px] text-left text-[#141414] w-full">Peppermint OS</button></li>
                                    <li><button className="bg-[#F4FBFC] text-[11px] text-left text-[#141414] w-full">Peppermint Skateboard</button></li>
                                    <li><button className="bg-[#F4FBFC] text-[11px] text-left text-[#141414] w-full">Peppermint OS</button></li>
                                    <li><button className="bg-[#F4FBFC] text-[11px] text-left text-[#141414] w-full">Peppermint OS</button></li>
                                    <li><button className="bg-[#F4FBFC] text-[11px] text-left text-[#141414] w-full">Peppermint Dashboard</button></li>
                                </ul>
                                <hr className='hidden lg:block md:mt-11 w-[266px] border-[1px] border-[#E6E6E6] '></hr>

                                <div className='text-[#74CDDB] mt-6 mb-2'>
                                Top Picks
                                </div>
                                <ul className='md:w-[384px] list-none gap-x-2 gap-y-2'>
                                    <li className='flex mt-4 gap-4'>
                                        <Image className=' w-[40px] h-[40px]' src={img3} alt="Background" />
                                        <button className="bg-[#F4FBFC] text-[11px] text-left text-[#141414] w-full">Warehouse cleaning with Peppermint robotics
                                            <h1>posted by </h1>
                                        </button>
                                    </li>
                                    <li className='flex mt-4 gap-4'>
                                        <Image className=' w-[40px] h-[40px]' src={img3} alt="Background" />
                                        <button className="bg-[#F4FBFC] text-[11px] text-left text-[#141414] w-full">Warehouse cleaning with Peppermint robotics
                                            <h1>posted by </h1>
                                        </button>
                                    </li>
                                    <li className='flex mt-4 gap-4'>
                                        <Image className=' w-[40px] h-[40px]' src={img3} alt="Background" />
                                        <button className="bg-[#F4FBFC] text-[11px] text-left text-[#141414] w-full">Warehouse cleaning with Peppermint robotics
                                            <h1>posted by </h1>
                                        </button>
                                    </li>
                                    
                                </ul>
                                <hr className='hidden lg:block md:mt-11 w-[266px] border-[1px] border-[#E6E6E6] '></hr>

                                <div className='text-[#74CDDB] mt-6 mb-2'>
                                    Top Picks
                                </div>
                                <ul className='md:w-[384px] list-none gap-x-2 gap-y-2'>
                                    <li className='flex mt-4 gap-4'>
                                        <Image className=' w-[40px] h-[40px]' src={img3} alt="Background" />
                                        <button className="bg-[#F4FBFC] text-[11px] text-left text-[#141414] w-full">Warehouse cleaning with Peppermint robotics
                                            <h1>posted by </h1>
                                        </button>
                                    </li>
                                    <li className='flex mt-4 gap-4'>
                                        <Image className=' w-[40px] h-[40px]' src={img3} alt="Background" />
                                        <button className="bg-[#F4FBFC] text-[11px] text-left text-[#141414] w-full">Warehouse cleaning with Peppermint robotics
                                            <h1>posted by </h1>
                                        </button>
                                    </li>
                                    <li className='flex mt-4 gap-4'>
                                        <Image className=' w-[40px] h-[40px]' src={img3} alt="Background" />
                                        <button className="bg-[#F4FBFC] text-[11px] text-left text-[#141414] w-full">Warehouse cleaning with Peppermint robotics
                                            <h1>posted by </h1>
                                        </button>
                                    </li>
                                    
                                </ul>
                                <hr className='hidden lg:block md:mt-11 w-[266px] border-[1px] border-[#E6E6E6] '></hr>

                                <div className='mt-10'>
                                    <div className=' w-[395px] h-[457px] border-[1px] border-[#C4C4C4] rounded-lg'>
                                    <Image className=' w-[395px] h-[165px] rounded-lg ' src={img4} alt="Background"  />
                                    <p className='text-[24px] py-4 px-4 text-[600]'>Ready to meet our Multi-speciality bot ?</p>
                                    <p className='text-[16px] text-[400] px-4 py-4 '>Schedule a free consultation with us, to know how you can reduce spend and secure your cloud journey, today!</p>
                                    <button></button>
                                    </div>
                                    
                                </div>

                                </div>
                            </div>

                    </div>  
            </div>

        </>
    )}

