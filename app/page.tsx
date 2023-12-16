'use client'
import Image from 'next/image'
import Logo from '../public/logo 1.svg'
import mainImage from '../public/earth.jpg'
import astronaut from '../public/astronaut3.jpg'
import choose from '../public/choose.svg'
import close from '../public/close.svg'
import Link from 'next/link'
import Script from 'next/script'
import Header from '@/components/header'
export default function Home() {
  return (
      <main className='spacecursor'>
        <Image src={mainImage} alt='' className='w-[100%] h-[100%] absolute contrast-[1.05]'></Image>
        <div className=' w-[100%] h-[100%] backdrop-blur-[7px] bg-white/[1%] absolute'></div>
        <Header></Header>
        <Image src={astronaut} alt='' className='absolute w-[526px] xl:block h-[526px] right-[200px] lg:block max-lg:hidden'></Image>
        <h1 className='text-white font-medium absolute text-[110px] left-[150px] top-[230px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:top-[178px] max-lg:text-[90px]'>SPACE</h1>
        <p className='absolute top-[422px] left-[150px] text-white max-lg:top-[375px] font-light text-2xl max-md:text-xl max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:pr-4 max-lg:pl-4 max-md:pr-0 max-md:pl-0 tracking-wider max-lg:text-center'>
          We are discovering a large part<br></br>
          of outer space with a high<br></br>
          <span className='text-red-700 font-medium'>technologies </span>
          and
          <span className='text-red-700 font-medium'> astronauts</span>
        </p>
        <Link href='./about'>
        <button className='w-[319px] h-[94px] tracking-wider relative bg-transparent border-[2px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:top-[455px] border-white rounded-[19px] felx justify-center text-center top-[405px] text-white text-3xl font-light left-[150px] duration-[.35s] hover:bg-white hover:text-[#092129]'>Start here</button>
        </Link>
      </main>
  )
}
