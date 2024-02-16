import React from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-full xl:w-[220px] w-[160px] bg-white z-10 border-r-2'>
      <div className='flex items-center justify-center mt-20'>
        <Image src='/png.png' width={150} height={100} />
      </div>
      <ul className='mt-20'>
        <li>
          <Link
            href='/'
            className='text-gray-800 font-semibold ml-[20%] text-shadow-black xl:text-lg text-sm hover:text-indigo-800'
          >
            HOME
          </Link>
        </li>
      </ul>
      <ul className='mt-12'>
        <li>
          <Link
            href='/components/About'
            className='text-gray-800 font-semibold ml-[20%] text-shadow-black xl:text-lg text-sm hover:text-indigo-800'
          >
            ARTIKEL
          </Link>
        </li>
        <li>
          <Link
            href='/gallery-photo'
            className='text-gray-800 font-semibold ml-[20%] text-shadow-black xl:text-lg text-sm hover:text-indigo-800'
          >
            EVENT
          </Link>
        </li>
        <li>
          <Link
            href='/client'
            className='text-gray-800 font-semibold ml-[20%] text-shadow-black xl:text-lg text-sm hover:text-indigo-800'
          >
            GALERY FOTO
          </Link>
        </li>
        <li>
          <Link
            href='/client'
            className='text-gray-800 font-semibold ml-[20%] text-shadow-black xl:text-lg text-sm hover:text-indigo-800'
          >
            KLIEN KAMI
          </Link>
        </li>
        <li>
          <Link
            href='/login'
            className='text-gray-800 font-semibold ml-[20%] text-shadow-black xl:text-lg text-sm hover:text-indigo-800'
          >
            LOGIN
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
