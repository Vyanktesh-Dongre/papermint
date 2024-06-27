
import Image from 'next/image';
import backImage from 'public/back.png';

export default function Blogs() {
    return (
        <>
        <div className="w-[100%] h-[100%] ">
          <Image src={backImage} alt="wait" width={1279} height={233}  />
        </div>
        <div className='absolute mt-2'>
            <h1>Text </h1>
        </div>
        </>
      );
    };