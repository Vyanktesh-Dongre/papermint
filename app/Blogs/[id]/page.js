import backImage from 'public/bg.png';
import Image from 'next/image';
import img from 'public/Ellipse.png';
import img2 from 'public/share.png'; 

export default function Page({params}) {
    return (   
    <>
            <div className="relative">
                <Image src={backImage} alt="Background" width={1280} height={233} />
                    <div className="absolute font-poppins text-[#FFFFFF] text-4xl text-center top-[60px] left-[587px]" style={{ width: 154, height: 54 }}>
                    Blogs
                    </div>
                    <div className="absolute w-[6px] h-[59px] top-[90px] left-[665px] bg-[#74CDDB] rounded-tl-[12px] rounded-tr-[0] rounded-br-[0] rounded-bl-[0] transform rotate-[-90deg]">
                    </div>
                    <div className="absolute w-[575px] h-[54px] top-[140px] left-[368px] font-poppins text-[#FFFFFF] text-lg text-center">
                    Drive Productivity and Cleanliness in Manufacturing Facilities with SD45 Gen2: Your Trusted Cleaning Solution
                    </div>
            </div>

            <form>
                <div className='mt-[56px] ml-[70px] '>
                    <div className="absolute items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-14 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" name="search" placeholder='search' className="pl-10 w-[750px] h-[56px] text-[#000000] px-4 py-2 border border-gray-300 rounded-lg  focus:ring-2 focus:ring-blue-500" />
                </div>
            </form>

            <hr className='absolute mt-[29px] h-[1414px] ml-[817px] border-[1px] border-[#E6E6E6]'/>

            <div className=' flex mt-[29px] w-[150px] h-[21px]'>
                <Image className='ml-[70px]' src={img} alt="Background" width={24} height={24} />
                <p  className='absolute ml-[102px] text-[14px] text-[#3B3C4A]'>Posted by - </p>
            </div>

            <div className='mt-[8px] ml-[70px]'>
                <p>Robotic Floor Scrubbers – The Future of Autonomous Cleaning at Airports </p>
            </div>

            <div className='flex justify-around  text-[11px] text-[#141414] w-[425px] h-[23px] ml-[77px] mt-[10px]'>
                <p className='bg-[#F4FBFC] rounded-[15px]'>Peppermint OS</p>
                <p className='bg-[#F4FBFC] rounded-[15px]'>Peppermint Skateboard </p>
                <p className='bg-[#F4FBFC] rounded-[15px]'>Peppermint Dashboard</p>
            </div>

            <div className='w-[642px] h-[21px] ml-[70px] mt-[10px] flex '>
                <p className='text-[14px] text-[#74CDDB] text-[400]'>Posted - 21 June, 2023  |</p>
                <p className=' ml-[8px] text-[14px] text-[#74CDDB] text-[400]'>10 min Read</p>
                <div className='flex w-[226.5px] h-[21px]'>
                    <Image className='ml-[319px]' src={img2} alt="Background" width={20} height={20} />
                    <buton className= 'ml-[8px] text-[14px] text-[#74CDDB] text-[400]' >Share</buton>
                </div>
            </div>
            <hr className='mt-[33.5px] w-[642.04px] ml-[70px] border-[1px] border-[#E6E6E6]'/>

            <div className='w-[642px] h-[96px] ml-[70px] mt-[29.5px]'>
                <p className='text-[14px] text-[500] text-[#3B3C4A]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio tortor, maximus sed nisl sit amet, 
                    convallis iaculis lorem. Integer id maximus turpis. Praesent pretium ultrices lorem ut porttitor. Cras quis 
                    bibendum ante. Vivamus accumsan magna lectus, vitae malesuada dolor vulputate nec. Nunc a enim ac odio 
                    placerat rutrum eu at felis.
                </p>
                
            </div>

        </>
        
    )}




    // <>
    //         <div className="relative">
    //             <Image src={backImage} alt="Background" width={1280} height={233} />
    //                 <div className="absolute font-poppins text-[#FFFFFF] text-4xl text-center top-[60px] left-[587px]" style={{ width: 154, height: 54 }}>
    //                 Blogs
    //                 </div>
    //                 <div className="absolute w-[6px] h-[59px] top-[90px] left-[665px] bg-[#74CDDB] rounded-tl-[12px] rounded-tr-[0] rounded-br-[0] rounded-bl-[0] transform rotate-[-90deg]">
    //                 </div>
    //                 <div className="absolute w-[575px] h-[54px] top-[140px] left-[368px] font-poppins text-[#FFFFFF] text-lg text-center">
    //                 Drive Productivity and Cleanliness in Manufacturing Facilities with SD45 Gen2: Your Trusted Cleaning Solution
    //                 </div>
    //         </div>

    //         <form>
    //             <div className='mt-[56px] ml-[70px] '>
    //                 <div className="absolute items-center pl-3 pointer-events-none">
    //                     <svg className="w-5 h-14 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    //                 </div>
    //                 <input type="search" name="search" placeholder='search' className="pl-10 w-[750px] h-[56px] text-[#000000] px-4 py-2 border border-gray-300 rounded-lg  focus:ring-2 focus:ring-blue-500" />
    //             </div>
    //         </form>

    //         <hr className='absolute mt-[29px] h-[1414px] ml-[817px] border-[1px] border-[#E6E6E6]'/>

    //         <div className=' flex mt-[29px] w-[150px] h-[21px]'>
    //             <Image className='ml-[70px]' src={img} alt="Background" width={24} height={24} />
    //             <p  className='absolute ml-[102px] text-[14px] text-[#3B3C4A]'>Posted by - </p>
    //         </div>

    //         <div className='mt-[8px] ml-[70px]'>
    //             <p>Robotic Floor Scrubbers – The Future of Autonomous Cleaning at Airports </p>
    //         </div>

    //         <div className='flex justify-around  text-[11px] text-[#141414] w-[425px] h-[23px] ml-[77px] mt-[10px]'>
    //             <p className='bg-[#F4FBFC] rounded-[15px]'>Peppermint OS</p>
    //             <p className='bg-[#F4FBFC] rounded-[15px]'>Peppermint Skateboard </p>
    //             <p className='bg-[#F4FBFC] rounded-[15px]'>Peppermint Dashboard</p>
    //         </div>

    //         <div className='w-[642px] h-[21px] ml-[70px] mt-[10px] flex '>
    //             <p className='text-[14px] text-[#74CDDB] text-[400]'>Posted - 21 June, 2023  |</p>
    //             <p className=' ml-[8px] text-[14px] text-[#74CDDB] text-[400]'>10 min Read</p>
    //             <div className='flex w-[226.5px] h-[21px]'>
    //                 <Image className='ml-[319px]' src={img2} alt="Background" width={20} height={20} />
    //                 <buton className= 'ml-[8px] text-[14px] text-[#74CDDB] text-[400]' >Share</buton>
    //             </div>
    //         </div>
    //         <hr className='mt-[33.5px] w-[642.04px] ml-[70px] border-[1px] border-[#E6E6E6]'/>

    //         <div className='w-[642px] h-[96px] ml-[70px] mt-[29.5px]'>
    //             <p className='text-[14px] text-[500] text-[#3B3C4A]'>
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio tortor, maximus sed nisl sit amet, 
    //                 convallis iaculis lorem. Integer id maximus turpis. Praesent pretium ultrices lorem ut porttitor. Cras quis 
    //                 bibendum ante. Vivamus accumsan magna lectus, vitae malesuada dolor vulputate nec. Nunc a enim ac odio 
    //                 placerat rutrum eu at felis.
    //             </p>
                
    //         </div>

    //     </>