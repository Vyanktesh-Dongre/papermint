
import Image from 'next/image';
import backImage from 'public/bg.png';
import img from 'public/product.png';
import arr from 'public/arrow.png';

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      category: 'Cleaning',
      title: 'Boosting Robot',
      summary: 'Peppermint Robotics introduces the SD45 Gen2, promising enhanced cleaning efficiency and productivity.',
      date: '29th March 2024',
      readTime: '3 min',
      image: img,
    },
    {
      id: 2,
      category: 'Technology',
      title: 'The Future',
      summary: 'Exploring the latest advancements in robotics and the challenges that lie ahead in the field of automation.',
      date: '5th April 2024',
      readTime: '5 min',
      image: img,
    },
    {
      id: 3,
      category: 'Healthcare',
      title: 'Revolutionizing',
      summary: 'How artificial intelligence and robotics are transforming healthcare practices, improving patient care and efficiency.',
      date: '12th May 2024',
      readTime: '4 min',
      image: img,
    },
    {
      id: 4,
      category: 'Environment',
      title: 'Sustainable',
      summary: 'Exploring the role of robotics in promoting sustainable practices and reducing environmental impact.',
      date: '21st June 2024',
      readTime: '6 min',
      image: img,
    },
    {
      id: 5,
      category: 'Education',
      title: 'Robotics',
      summary: 'How robotics education is shaping the future of learning, empowering students with hands-on skills.',
      date: '8th July 2024',
      readTime: '4 min',
      image: img,
    },
    {
      id: 6,
      category: 'Business',
      title: 'The Economic',
      summary: 'Analyzing the economic benefits of robotics technology and its impact on industries and global markets.',
      date: '19th August 2024',
      readTime: '5 min',
      image: img,
    },
  ];

  return (
    <>
      <div className="relative">
        <Image src={backImage} alt="wait" width={1280} height={233} />
        <div className="absolute font-poppins text-[#FFFFFF] text-4xl text-center top-[60px] left-[587px]" style={{ width: 154, height: 54 }}>
          Blogs
        </div>
        <div className="absolute w-[6px] h-[59px] top-[90px] left-[665px] bg-[#74CDDB] rounded-tl-[12px] rounded-tr-[0] rounded-br-[0] rounded-bl-[0] transform rotate-[-90deg]">
        </div>
        <div className="absolute w-[575px] h-[54px] top-[140px] left-[368px]  font-poppins text-[#FFFFFF] text-lg text-center " >
          Drive Productivity and Cleanliness in Manufacturing Facilities
          with SD45 Gen2: Your Trusted Cleaning Solution
        </div>
      </div>

      <button className="absolute w-[160px] h-[46px] top-[180px] left-[1177px] bg-[#74CDDB] rounded-b-lg border-[1px] border-black text-[14px] text-[#3C3F58] font-[400] transform rotate-90">
        Request a Demo
      </button>

      <button className="absolute w-[160px] h-[46px] top-[360px] left-[1177px] bg-[#FFFFFF] rounded-b-lg border-[1px] border-black text-[14px] text-[#3C3F58] font-[400] transform rotate-90 ">
        Talk to Expert
      </button>

      <form>
        <div className='mt-8 ml-[430px] '>
          <div class="absolute items-center pl-3 pointer-events-none">
            <svg class="w-5 h-14 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
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

      <div className="absolute grid grid-cols-3 gap-6 ">
  {blogs.map(blog => (
    <div key={blog.id} className="relative w-[240px] h-[389px] top-[40px] left-[400px] bg-white border  border-gray-300 rounded-[10px]">
      <div className=" w-[220px] h-[185px] bg-gray-100 border border-gray-300 rounded-[10px] left-[10px] top-[10px]">
        <Image className='rounded-[10px]' src={blog.image} alt="product_image" />
        <div className="absolute w-[98px] h-[25px] bg-[#74CDDB] top-[21px] rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none flex justify-center items-center">
          <p className=' w-[78px] h-[15px] text-[#000000] text-[10px] top-[5px] left-[6px] text-center'> {blog.category}</p>
        </div>
      </div>

      <div className='w-[148px] h-[24px] pt-2 top-[195px] ml-[10px] left-[11px] text-[16px] font-[600] text-[#3C3F58]'>
        <p>{blog.title}</p>
      </div>

      <div className=' w-[104px] h-[18px] pt-4 top-[227px] ml-[10px] left-[11px] text-[12px] font-[500] text-[#3B3C4A] '>
        <p>{blog.date}</p>
      </div>

      <div className='w-[195px] h-[72px] pt-6 ml-[10px] text-[12px] font-[400] text-[#3B3C4A] '>
        <p>{blog.summary}</p>
      </div>

      <div className='absolute flex w-[131px] top-[340px] h-[44px] pt-4 left-[11px] text-[#999999] text-[12px] font-[400] '>
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
};







































// import Image from 'next/image';
// import backImage from 'public/bg.png';
// import img from 'public/product.png';
// import arr from 'public/arrow.png';

// export default function Blogs() {
//     return (
//       <>
//         <div className="relative ">
//           <Image src={backImage} alt="wait" width={1280} height={233} />
//             <div className="absolute font-poppins text-[#FFFFFF] text-4xl text-center top-[60px] left-[587px]" style={{width:154, height:54}}>
//               Blogs
//             </div>
//               <div className="absolute w-[6px] h-[59px] top-[90px] left-[665px] bg-[#74CDDB] rounded-tl-[12px] rounded-tr-[0] rounded-br-[0] rounded-bl-[0] transform rotate-[-90deg]"> 
//               </div>
//                 <div className="absolute w-[575px] h-[54px] top-[140px] left-[368px]  font-poppins text-[#FFFFFF] text-lg text-center " >
//                   Drive Productivity and Cleanliness in Manufacturing Facilities 
//                   with SD45 Gen2: Your Trusted Cleaning Solution
//                 </div>
//         </div>

    
//         <button className="absolute w-[160px] h-[46px] top-[180px] left-[1177px] bg-[#74CDDB] rounded-b-lg border-[1px] border-black text-[14px] text-[#3C3F58] font-[400] transform rotate-90">
//           Request a Demo
//         </button>

//         <button className="absolute w-[160px] h-[46px] top-[360px] left-[1177px] bg-[#FFFFFF] rounded-b-lg border-[1px] border-black text-[14px] text-[#3C3F58] font-[400] transform rotate-90 ">
//           Talk to Expert
//         </button>


//         <form>
//           <div className='mt-8 ml-[410px] '>
//               <div class="absolute items-center pl-3 pointer-events-none">
//                 <svg class="w-5 h-14 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
//               </div>
//             <input type="search" name="search" placeholder='search' className="pl-10 w-[790px] h-[56px] text-[#000000]] px-4 py-2 border border-gray-300 rounded-lg  focus:ring-2 focus:ring-blue-500" />
//           </div>
//         </form>

//       <div className="">
//         <div className="absolute w-[230px] h-[209px] top-[370px] left-[70px] bg-white">
//           <div className="px-4 py-1 rounded-tl-2xl rounded-tr-2xl text-gray-700 font-bold">Sort by</div>
//             <ul className="">
//               <li className="px-4 py-2">
//         <label className="flex items-center">
//           <input type="radio" name="sorting" className="mr-2 form-radio text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-tl-2xl rounded-br-lg" />
//           Default search order
//         </label>
//       </li>
//       <li className="px-4 py-2">
//         <label className="flex items-center">
//           <input type="radio" name="sorting" className="mr-2 form-radio text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
//           Featured
//         </label>
//       </li>
//       <li className="px-4 py-2">
//         <label className="flex items-center">
//           <input type="radio" name="sorting" className="mr-2 form-radio text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
//           Recents
//         </label>
//       </li>
//       <li className="px-4 py-2">
//         <label className="flex items-center">
//           <input type="radio" name="sorting" className="mr-2 form-radio text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-bl-2xl rounded-tr-lg" />
//           Most viewed
//         </label>
//       </li>
//             </ul>
//           </div>
//       </div>

//       <div className="">
//         <div className="absolute w-[230px] h-[209px] top-[580px] left-[70px] bg-white">
//           <div className="px-4 py-1 rounded-tl-2xl rounded-tr-2xl text-gray-700 font-bold">Industries</div>
//             <ul className="">
//             <li className="px-4 py-2">
//         <label className="flex items-center">
//           <input type="checkbox" name="sorting" className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
//           Blogs
//         </label>
//       </li>
//       <li className="px-4 py-2">
//         <label className="flex items-center">
//           <input type="checkbox" name="sorting" className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
//           Case Studies
//         </label>
//       </li>
//       <li className="px-4 py-2">
//         <label className="flex items-center">
//           <input type="checkbox" name="sorting" className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
//           Press
//         </label>
//       </li>
//             </ul>
//           </div>
//       </div>

//       <div className="">
//         <div className="absolute w-[230px] h-[209px] top-[750px] left-[70px] bg-white">
//           <div className="px-4 py-1 rounded-tl-2xl rounded-tr-2xl text-gray-700 font-bold">Topics</div>
//             <ul className="">
//             <li className="px-4 py-2">
//         <label className="flex items-center">
//           <input type="checkbox" name="sorting" className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-tl-2xl rounded-br-lg" />
//           Airport Cleaning (0)
//         </label>
//       </li>
//       <li className="px-4 py-2">
//         <label className="flex items-center">
//           <input type="checkbox" name="sorting" className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
//           AMR (0)
//         </label>
//       </li>
//       <li className="px-4 py-2">
//         <label className="flex items-center">
//           <input type="checkbox" name="sorting" className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
//           Cleaning Robot (3)
//         </label>
//       </li>
//       <li className="px-4 py-2">
//         <label className="flex items-center">
//           <input type="checkbox" name="sorting" className="mr-2 form-checkbox text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300" />
//           GMR Airport (0)
//         </label>
//       </li>
//             </ul>
//           </div>
//       </div>

//       <div className="absolute w-[240px] h-[389px] top-[471px] left-[400px] bg-white border  border-gray-300 rounded-[10px]">
//         <div className="absolute w-[220px] h-[185px] bg-gray-100 border border-gray-300 rounded-[10px] top-[10px] left-[10px]">
//           <Image className='rounded-[10px]' src={img} alt="product_image"/>
//             <div className="absolute w-[98px] h-[25px] bg-[#74CDDB] top-[21px] rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none">
//               <p className='absolute w-[78px] h-[15px] text-[#000000] text-[10px] top-[5px] left-[6px] text-center'>Cleaning Robot</p>
//             </div>
//         </div>

//         <div className='absolute w-[148px] h-[24px] top-[195px] left-[11px] text-[16px] font-[600] text-[#3C3F58]'>
//           <p>New Product SD20</p>
//         </div>

//         <div className='absolute w-[104px] h-[18px] top-[227px] left-[11px] text-[12px] font-[500] text-[#3B3C4A] '>
//           <p>February 13, 2024</p>
//         </div>

//         <div className='absolute w-[195px] h-[72px] top-[255px] left-[11px] text-[12px] font-[400] text-[#3B3C4A] '>
//           <p>peppermint robotics announces release of new scrubber dryer robot sd20 sd-20 is the most compact...</p>
//         </div>

//         <div className='absolute w-[131px] h-[44px] text-[#999999] text-[12px] font-[400] top-[348px] left-[11px]'>
//           <p>3 min Read </p>
//         </div>

//         <div className='absolute flex w-[131px] h-[44px] p-[5px] top-[345px] left-[111px] text-[#74CDDB] text-[16px] text-[600] pt-0 pr-0 pb-0 pl-0'>
//         <a href="#" className=''>Read More</a>
//         <Image className='w-[27px] h-[27px]' src={arr} alt="arrow_image"/>
//         </div>

//       </div>

//       <div className="absolute w-[240px] h-[389px] top-[471px] left-[690px] bg-white border  border-gray-300 rounded-[10px]">
//         <div className="absolute w-[220px] h-[185px] bg-gray-100 border border-gray-300 rounded-[10px] top-[10px] left-[10px]">
//           <Image className='rounded-[10px]' src={img} alt="product_image"/>
//             <div className="absolute w-[98px] h-[25px] bg-[#74CDDB] top-[21px] rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none">
//               <p className='absolute w-[78px] h-[15px] text-[#000000] text-[10px] top-[5px] left-[6px] text-center'>Cleaning Robot</p>
//             </div>

//             <div className='absolute w-[148px] h-[24px] top-[195px] left-[11px] text-[16px] font-[600] text-[#3C3F58]'>
//           <p>New Product SD20</p>
//         </div>

//         <div className='absolute w-[104px] h-[18px] top-[227px] left-[11px] text-[12px] font-[500] text-[#3B3C4A] '>
//           <p>February 13, 2024</p>
//         </div>

//         <div className='absolute w-[195px] h-[72px] top-[255px] left-[11px] text-[12px] font-[400] text-[#3B3C4A] '>
//           <p>peppermint robotics announces release of new scrubber dryer robot sd20 sd-20 is the most compact...</p>
//         </div>

//         <div className='absolute w-[131px] h-[44px] text-[#999999] text-[12px] font-[400] top-[348px] left-[11px]'>
//           <p>3 min Read </p>
//         </div>

//         <div className='absolute flex w-[131px] h-[44px] p-[5px] top-[345px] left-[111px] text-[#74CDDB] text-[16px] text-[600] pt-0 pr-0 pb-0 pl-0'>
//         <a href="#" className=''>Read More</a>
//         <Image className='w-[27px] h-[27px]' src={arr} alt="arrow_image"/>
//         </div>

//         </div>
//       </div>

//       <div className="absolute w-[240px] h-[389px] top-[471px] left-[990px] bg-white border  border-gray-300 rounded-[10px]">
//         <div className="absolute w-[220px] h-[185px] bg-gray-100 border border-gray-300 rounded-[10px] top-[10px] left-[10px]">
//           <Image className='rounded-[10px]' src={img} alt="product_image"/>
//             <div className="absolute w-[98px] h-[25px] bg-[#74CDDB] top-[21px] rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none">
//               <p className='absolute w-[78px] h-[15px] text-[#000000] text-[10px] top-[5px] left-[6px] text-center'>Cleaning Robot</p>
//             </div>

//             <div className='absolute w-[148px] h-[24px] top-[195px] left-[11px] text-[16px] font-[600] text-[#3C3F58]'>
//           <p>New Product SD20</p>
//         </div>

//         <div className='absolute w-[104px] h-[18px] top-[227px] left-[11px] text-[12px] font-[500] text-[#3B3C4A] '>
//           <p>February 13, 2024</p>
//         </div>

//         <div className='absolute w-[195px] h-[72px] top-[255px] left-[11px] text-[12px] font-[400] text-[#3B3C4A] '>
//           <p>peppermint robotics announces release of new scrubber dryer robot sd20 sd-20 is the most compact...</p>
//         </div>

//         <div className='absolute w-[131px] h-[44px] text-[#999999] text-[12px] font-[400] top-[348px] left-[11px]'>
//           <p>3 min Read </p>
//         </div>

//         <div className='absolute flex w-[131px] h-[44px] p-[5px] top-[345px] left-[111px] text-[#74CDDB] text-[16px] text-[600] pt-0 pr-0 pb-0 pl-0'>
//         <a href="#" className=''>Read More</a>
//         <Image className='w-[27px] h-[27px]' src={arr} alt="arrow_image"/>
//         </div>

//         </div>
//       </div>

//       <div className="absolute w-[240px] h-[389px] top-[901px] left-[400px] bg-white border  border-gray-300 rounded-[10px]">
//         <div className="absolute w-[220px] h-[185px] bg-gray-100 border border-gray-300 rounded-[10px] top-[10px] left-[10px]">
//           <Image className='rounded-[10px]' src={img} alt="product_image"/>
//             <div className="absolute w-[98px] h-[25px] bg-[#74CDDB] top-[21px] rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none">
//               <p className='absolute w-[78px] h-[15px] text-[#000000] text-[10px] top-[5px] left-[6px] text-center'>Cleaning Robot</p>
//             </div>

//             <div className='absolute w-[148px] h-[24px] top-[195px] left-[11px] text-[16px] font-[600] text-[#3C3F58]'>
//           <p>New Product SD20</p>
//         </div>

//         <div className='absolute w-[104px] h-[18px] top-[227px] left-[11px] text-[12px] font-[500] text-[#3B3C4A] '>
//           <p>February 13, 2024</p>
//         </div>

//         <div className='absolute w-[195px] h-[72px] top-[255px] left-[11px] text-[12px] font-[400] text-[#3B3C4A] '>
//           <p>peppermint robotics announces release of new scrubber dryer robot sd20 sd-20 is the most compact...</p>
//         </div>

//         <div className='absolute w-[131px] h-[44px] text-[#999999] text-[12px] font-[400] top-[348px] left-[11px]'>
//           <p>3 min Read </p>
//         </div>

//         <div className='absolute flex w-[131px] h-[44px] p-[5px] top-[345px] left-[111px] text-[#74CDDB] text-[16px] text-[600] pt-0 pr-0 pb-0 pl-0'>
//         <a href="#" className=''>Read More</a>
//         <Image className='w-[27px] h-[27px]' src={arr} alt="arrow_image"/>
//         </div>

//         </div>
//       </div>

//       <div className="absolute w-[240px] h-[389px] top-[901px] left-[690px] bg-white border  border-gray-300 rounded-[10px]">
//         <div className="absolute w-[220px] h-[185px] bg-gray-100 border border-gray-300 rounded-[10px] top-[10px] left-[10px]">
//           <Image className='rounded-[10px]' src={img} alt="product_image"/>
//             <div className="absolute w-[98px] h-[25px] bg-[#74CDDB] top-[21px] rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none">
//               <p className='absolute w-[78px] h-[15px] text-[#000000] text-[10px] top-[5px] left-[6px] text-center'>Cleaning Robot</p>
//             </div>

//             <div className='absolute w-[148px] h-[24px] top-[195px] left-[11px] text-[16px] font-[600] text-[#3C3F58]'>
//           <p>New Product SD20</p>
//         </div>

//         <div className='absolute w-[104px] h-[18px] top-[227px] left-[11px] text-[12px] font-[500] text-[#3B3C4A] '>
//           <p>February 13, 2024</p>
//         </div>

//         <div className='absolute w-[195px] h-[72px] top-[255px] left-[11px] text-[12px] font-[400] text-[#3B3C4A] '>
//           <p>peppermint robotics announces release of new scrubber dryer robot sd20 sd-20 is the most compact...</p>
//         </div>

//         <div className='absolute w-[131px] h-[44px] text-[#999999] text-[12px] font-[400] top-[348px] left-[11px]'>
//           <p>3 min Read </p>
//         </div>

//         <div className='absolute flex w-[131px] h-[44px] p-[5px] top-[345px] left-[111px] text-[#74CDDB] text-[16px] text-[600] pt-0 pr-0 pb-0 pl-0'>
//         <a href="#" className=''>Read More</a>
//         <Image className='w-[27px] h-[27px]' src={arr} alt="arrow_image"/>
//         </div>

//         </div>
//       </div>

//       <div className="absolute w-[240px] h-[389px] top-[901px] left-[990px] bg-white border  border-gray-300 rounded-[10px]">
//         <div className="absolute w-[220px] h-[185px] bg-gray-100 border border-gray-300 rounded-[10px] top-[10px] left-[10px]">
//           <Image className='rounded-[10px]' src={img} alt="product_image"/>
//             <div className="absolute w-[98px] h-[25px] bg-[#74CDDB] top-[21px] rounded-tl-none rounded-tr-[8px] rounded-br-[8px] rounded-bl-none">
//               <p className='absolute w-[78px] h-[15px] text-[#000000] text-[10px] top-[5px] left-[6px] text-center'>Cleaning Robot</p>
//             </div>

//             <div className='absolute w-[148px] h-[24px] top-[195px] left-[11px] text-[16px] font-[600] text-[#3C3F58]'>
//           <p>New Product SD20</p>
//         </div>

//         <div className='absolute w-[104px] h-[18px] top-[227px] left-[11px] text-[12px] font-[500] text-[#3B3C4A] '>
//           <p>February 13, 2024</p>
//         </div>

//         <div className='absolute w-[195px] h-[72px] top-[255px] left-[11px] text-[12px] font-[400] text-[#3B3C4A] '>
//           <p>peppermint robotics announces release of new scrubber dryer robot sd20 sd-20 is the most compact...</p>
//         </div>

//         <div className='absolute w-[131px] h-[44px] text-[#999999] text-[12px] font-[400] top-[348px] left-[11px]'>
//           <p>3 min Read </p>
//         </div>

//         <div className='absolute flex w-[131px] h-[44px] p-[5px] top-[345px] left-[111px] text-[#74CDDB] text-[16px] text-[600] pt-0 pr-0 pb-0 pl-0'>
//         <a href="#" className=''>Read More</a>
//         <Image className='w-[27px] h-[27px]' src={arr} alt="arrow_image"/>
//         </div>
//         </div>
//       </div>

//     </>
//       );
//     };
