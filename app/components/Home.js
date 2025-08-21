"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import ScrollReveal from 'scrollreveal';

const Home = () => {

  const sr = ScrollReveal()
  useEffect(() => {

      sr.reveal(".hero",{
        duration: 1000,
        origin: "right",
        easing: "ease-in-out",
        reset: "true"
      });
      sr.reveal(".text",{
        duration: 1000,
        origin: "top",
        easing: "ease-in-out",
        reset: "true"
      });
      sr.reveal(".meadi",{
        duration: 1000,
        origin: "left",
        easing: "ease-in-out",
        reset: "true"
      });
  },[]);

  return (
    <div className=' flex flex-col md:flex-row gap-10 items-center md:justify-center h-[full - 75px]  py-[5rem] relative'>
        {/* Tesxt  */}
        <div className=' text-white  pt-5 text'>
            <p className=' text-white mb-2'>#2 Trending</p>
            <h5>Load SuperCell</h5>
            <h1 className='text-8xl font-semibold mb-6'>Goblin</h1>
            <p className='mb-10'>clash of clans is one of best gameing video ever</p>
            <button className='py-2.5 px-4 bg-[#38703d] rounded-full border-2 border-transparent mr-3 hover:bg-transparent hover:border-white hover:translate-x-1.5 transition-all duration-300 cursor-pointer'>Download</button>
            <button className='py-2.5 px-4 bg-transparent rounded-full border-2 border-white hover:bg-[#38703d] hover:border-transparent hover:translate-x-1.5 transition-all duration-300 cursor-pointer'>Watch GamePlay</button>
        </div>

        {/* Hero */}
        <div className=' w-[52vw] md:w-[32vw] hero'>
            <Image src={"/HeroImage.png"} height={600} width={600} alt=''/>
        </div>

        {/* shacil medai Link */}
        <div className=' hidden md:block text-white absolute top-[30%] left-[5%] meadi'>
            <FaInstagram className='text-3xl'/>
            <FaSquareFacebook className='text-3xl my-3'/>
            <FaGithubSquare className='text-3xl'/>
        </div>

        {/* down arrow */}
        <div>
          <FaCaretDown className=' p-2.5  text-2xl text-black bottom-4 right-4 absolute'/>
        </div>
    </div>
  )
}

export default Home