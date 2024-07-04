"use client"

// import { useEffect, useState, useCallback } from 'react';
// import Image from 'next/image';
// import arr from 'public/arrow.png'; // Assuming this is your arrow image
// import backImage from 'public/bg.png';

// export default function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const fetchBlogs = useCallback(async () => {
//     setLoading(true);
//     try {
//       const queryString = selectedCategories.length > 0 ? `?categories=${selectedCategories.join(',')}` : '';
//       console.log('Fetching blogs with query:', queryString);

//       const response = await fetch(`/api/blogs${queryString}`);
//       const data = await response.json();
//       console.log('Fetched Blogs:', data);
//       setBlogs(data);
//     } catch (error) {
//       console.error('Error fetching blogs:', error);
//     } finally {
//       setLoading(false);
//     }
//   }, [selectedCategories]);

//   useEffect(() => {
//     fetchBlogs();
//   }, [fetchBlogs]); // Refetch blogs whenever selectedCategories change

//   const handleCheckboxChange = (category) => {
//     setSelectedCategories(prevSelectedCategories => {
//       if (prevSelectedCategories.includes(category)) {
//         return prevSelectedCategories.filter(cat => cat !== category);
//       } else {
//         return [...prevSelectedCategories, category];
//       }
//     });
//   };

//   return (
//     <>
//       <div className="relative">
//         <Image className='w-[100%] h-[233px]' src={backImage} alt="Background" />
//         <button className="absolute w-[160px] h-[46px] top-[180px] left-[1177px] bg-[#74CDDB] rounded-b-lg border-[1px] border-black text-[14px] text-[#3C3F58] font-[400] transform rotate-90">
//         Request a Demo
//       </button>

//       <button className="absolute w-[160px] h-[46px] top-[360px] left-[1177px] bg-[#FFFFFF] rounded-b-lg border-[1px] border-black text-[14px] text-[#3C3F58] font-[400] transform rotate-90">
//         Talk to Expert
//       </button>
//         <div className="absolute font-poppins text-[#FFFFFF] text-4xl text-center top-[60px] left-[587px]" style={{ width: 154, height: 54 }}>
//           Blogs
//         </div>
//         <div className="absolute w-[6px] h-[59px] top-[90px] left-[665px] bg-[#74CDDB] rounded-tl-[12px] rounded-tr-[0] rounded-br-[0] rounded-bl-[0] transform rotate-[-90deg]"></div>
//         <div className="absolute w-[575px] h-[54px] top-[140px] left-[368px] font-poppins text-[#FFFFFF] text-lg text-center">
//           Drive Productivity and Cleanliness in Manufacturing Facilities with SD45 Gen2: Your Trusted Cleaning Solution
//         </div>
//       </div>


//       <form>
//         <div className='mt-8 ml-[430px] '>
//           <div class="absolute items-center pl-3 pointer-events-none">
//             <svg class="w-5 h-14 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
//           </div>
//           <input type="search" name="search" placeholder='search' className="pl-10 w-[750px] h-[56px] text-[#000000] px-4 py-2 border border-gray-300 rounded-lg  focus:ring-2 focus:ring-blue-500" />
//         </div>
//       </form>

//       <div className="">
//         <div className="absolute w-[230px] h-[209px] top-[370px] left-[70px] bg-white">
//           <div className="px-4 py-1 rounded-tl-2xl rounded-tr-2xl text-gray-700 font-bold">Sort by</div>
//           <ul className="">
//             <li className="px-4 py-2">
//               <label className="flex items-center">
//                 <input type="radio" name="sorting" className="mr-2 form-radio text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-tl-2xl rounded-br-lg" />
//                 Default search order
//               </label>
//             </li>
//             <li className="px-4 py-2">
//               <label className="flex items-center">
//                 <input type="radio" name="sorting" className="mr-2 form-radio text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
//                 Featured
//               </label>
//             </li>
//             <li className="px-4 py-2">
//               <label className="flex items-center">
//                 <input type="radio" name="sorting" className="mr-2 form-radio text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
//                 Recents
//               </label>
//             </li>
//             <li className="px-4 py-2">
//               <label className="flex items-center">
//                 <input type="radio" name="sorting" className="mr-2 form-radio text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-bl-2xl rounded-tr-lg" />
//                 Most viewed
//               </label>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="">
//         <div className="absolute w-[230px] h-[209px] top-[580px] left-[70px] bg-white">
//           <div className="px-4 py-1 rounded-tl-2xl rounded-tr-2xl text-gray-700 font-bold">Industries</div>
//           <ul className="">
//             <li className="px-4 py-2">
//               <label className="flex items-center">
//                 <input type="checkbox" name="sorting" className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
//                 Blogs
//               </label>
//             </li>
//             <li className="px-4 py-2">
//               <label className="flex items-center">
//                 <input type="checkbox" name="sorting" className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
//                 Case Studies
//               </label>
//             </li>
//             <li className="px-4 py-2">
//               <label className="flex items-center">
//                 <input type="checkbox" name="sorting" className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
//                 Press
//               </label>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="">
//         <div className="absolute w-[230px] h-[209px] top-[750px] left-[70px] bg-white">
//           <div className="px-4 py-1 rounded-tl-2xl rounded-tr-2xl text-gray-700 font-bold">Topics</div>
//           <ul className="">
//             <li className="px-4 py-2">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="Airport Cleaning"
//                   className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-tl-2xl rounded-br-lg"
//                   onChange={() => handleCheckboxChange('Airport Cleaning')}
//                   checked={selectedCategories['Airport Cleaning']}
//                 />
//                 Airport Cleaning (0)
//               </label>
//             </li>
//             <li className="px-4 py-2">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="AMR"
//                   className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
//                   onChange={() => handleCheckboxChange('AMR')}
//                   checked={selectedCategories['AMR']}
//                 />
//                 AMR (0)
//               </label>
//             </li>
//             <li className="px-4 py-2">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="Cleaning Robot"
//                   className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
//                   onChange={() => handleCheckboxChange('Cleaning Robot')}
//                   checked={selectedCategories['Cleaning Robot']}
//                 />
//                 Cleaning Robot (3)
//               </label>
//             </li>
//             <li className="px-4 py-2">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="GMR Airport"
//                   className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
//                   onChange={() => handleCheckboxChange('GMR Airport')}
//                   checked={selectedCategories['GMR Airport']}
//                 />
//                 GMR Airport (0)
//               </label>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="absolute grid grid-cols-3 gap-6 top-[440px] left-[420px]">
//         {blogs.map(blog => (
//           <div key={blog.id} className="relative w-[240px] h-[389px] bg-white border border-gray-300 rounded-[10px]">
//             <div className="w-[220px] h-[185px] ml-[10px] mt-[10px] bg-gray-100 border border-gray-300 rounded-[10px]">
//               <Image src={blog.image} width={220} height={185} className="rounded-[10px]" alt="Blog Image" />
//               <div className="absolute w-[98px] h-[25px] bg-[#74CDDB] top-[21px] rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none flex justify-center items-center">
//                 <p className='w-[78px] h-[15px] text-[#000000] text-[10px] top-[5px] left-[6px] text-center'>{blog.category}</p>
//               </div>
//             </div>
//             <div className="w-[148px] h-[24px] pt-2 ml-[10px] left-[11px] text-[16px] font-[600] text-[#3C3F58]">
//               <p>{blog.title}</p>
//             </div>
//             <div className="w-[115px] h-[18px] pt-4 ml-[10px] left-[11px] text-[12px] font-[500] text-[#3B3C4A]">
//               <p>{blog.date}</p>
//             </div>
//             <div className="w-[195px] h-[72px] pt-6 ml-[10px] text-[12px] font-[400] text-[#3B3C4A]">
//               <p>{blog.summary}</p>
//             </div>
//             <div className="absolute flex w-[131px] top-[340px] h-[44px] pt-4 left-[11px] text-[#999999] text-[12px] font-[400]">
//               <p>{blog.readTime}</p>
//             </div>
//             <div className='flex absolute w-[131px] top-[337px] h-[44px] pt-4 left-[125px] text-[#74CDDB] text-[16px] font-[600]'>
//         <a href="#" className=''>Read More</a>
//         <Image className='w-[27px] h-[27px]' src={arr} alt="arrow_image" />
//       </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

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
          <p className="sm:text-left md:w-[575px] font-poppins text-[#FFFFFF] text-lg text-center">
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
                  Airport Cleaning (0)
                </label>
              </li>
              <li className="mb-2">
                <label className="flex items-center">
                  <input type="checkbox" name="AMR" className="mr-2" onChange={() => handleCheckboxChange('AMR')} checked={selectedCategories.includes('AMR')}/>
                  AMR (0)
                </label>
              </li>
              <li className="mb-2">
                <label className="flex items-center">
                  <input type="checkbox" name="Cleaning Robot" className="mr-2" onChange={() => handleCheckboxChange('Cleaning Robot')} checked={selectedCategories.includes('Cleaning Robot')}/>
                  Cleaning Robot (3)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" name="GMR Airport" className="mr-2" onChange={() => handleCheckboxChange('GMR Airport')} checked={selectedCategories.includes('GMR Airport')}/>
                  GMR Airport (0)
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="flex justify-center mb-8">
            <input type="search" name="search" placeholder="Search" className="pl-10 w-full max-w-[750px] h-[56px] text-[#000000] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
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