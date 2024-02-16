"use client";
import { useState } from "react";
import MultipleItems from "@/components/Carousel";
import Link from "next/link";
import Image from "next/image";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";
import Visi from "@/components/Visi";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import AboutUs from "@/components/About";

const HomePage = () => {
  const [active, setActive] = useState("profile");

  return (
    <div className=''>
      <div id='videotron' className='h-1/2 relative '>
        <div className='w-full h-52 flex justify-center items-center bg-white'>
          <p className='text-black text-6xl'>NEUE GRADE MOTOCLUB</p>
        </div>

        <div className='border-b-2 bg-black mt-10'>
          <div className='h-auto w-[80%] mx-auto flex justify-center flex-wrap items-center xl:gap-20'>
            <p
              className='xl:py-3 text-white py-2 xl:px-4 px-5 block font-medium xl:text-lg text-sm hover:bg-zinc-600'
              href='#company-overview'
              onClick={() => setActive("profile")}
            >
              PROFILE
            </p>
            <p
              className='xl:py-3 text-white py-2 xl:px-4 px-5 block font-medium xl:text-lg text-sm hover:bg-zinc-600'
              href='#signature'
              onClick={() => setActive("visi")}
            >
              VISI & MISI
            </p>

            <p
              className='xl:py-3 text-white py-2 xl:px-4 px-5 block font-medium xl:text-lg text-sm hover:bg-zinc-600'
              href='#products'
              onClick={() => setActive("products")}
            >
              PRODUK KAMI
            </p>
            <p
              className='xl:py-3 text-white py-2 xl:px-4 px-5 block font-medium xl:text-lg text-sm hover:bg-zinc-600'
              href='#contact'
              onClick={() => setActive("contact")}
            >
              KONTAK KAMI
            </p>

            <p
              className='xl:py-3 text-white py-2 xl:px-4 px-5 block font-medium xl:text-lg text-sm hover:bg-zinc-600'
              href='#contact'
              onClick={() => setActive("about")}
            >
              ABOUT US
            </p>
          </div>
        </div>
      </div>
      {active === "profile" && <Profile />}
      {active === "visi" && <Visi />}
      {active === "products" && <Products />}
      {active === "contact" && <Contact />}
      {active === "about" && <AboutUs />}
    </div>
  );
};

export default HomePage;
