import React from 'react'
import slicer from '/public/slicer.png'
import Image from 'next/image'
import Link from 'next/link'
export default function solraPage() {
  return (
    <main className='relative top-0 radial h-[768px] w-[100%]'>
      <Link href='../planets'><button className='bg-white w-[120px] h-[60px] hover:bg-[#181536] hover:text-white absolute left-[20px] top-[20px] duration-300 rounded-xl flex justify-center items-center uppercase text-[#181536]'>go back</button></Link>
      <Image src={slicer} alt='' className='absolute left-[33%] w-[470px] top-[20%]'></Image>
      <div className='rounded-full w-[140px] h-[140px] yellowradial absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'></div>
      <div className='rounded-full w-[72px] h-[72px] bg-[#ffd231] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center'>
        <h1 className='text-white text-[10px] duration-300 uppercase opacity-0 hover:opacity-[100%]'>sun</h1>
      </div>
      <div className='rounded-full planetspin1 absolute w-[17px] h-[17px] bg-gradient-to-br from-[#DADCDD] to-[#51585E] left-[620px] top-[378px] flex justify-center items-center'>
        <h1 className='text-white text-[10px] rotate-0 duration-300 uppercase opacity-0 hover:opacity-[100%] cursor-default'>mercury</h1>
      </div>
      <div className='rounded-full planetspin2 absolute w-[21px] h-[21px] bg-gradient-to-br from-[#E28800] to-[#FFCC90] left-[586px] top-[378px] flex justify-center items-center'>
        <h1 className='text-white text-[10px] duration-300 uppercase opacity-0 hover:opacity-[100%] cursor-default'>venus</h1>
      </div>
      <div className='rounded-full planetspin3 absolute w-[28px] h-[28px] bg-gradient-to-br from-[#260076] to-[#3B29FF] left-[552px] top-[378px] flex justify-center items-center'>
        <h1 className='text-white text-[10px] absolute duration-300 uppercase opacity-0 hover:opacity-[100%] cursor-default'>earth</h1>
      </div>
      <div className='rounded-full planetspin4 absolute w-[26.5px] h-[26.5px] bg-gradient-to-br from-[#761C00] to-[#FF8329] left-[518px] top-[378px] flex justify-center items-center'>
        <h1 className='text-white text-[10px] duration-300 uppercase opacity-0 hover:opacity-[100%] cursor-default'>mars</h1>
      </div>
      <div className='rounded-full planetspin5 absolute w-[51px] h-[51px] bg-gradient-to-br from-[#A14807] to-[#FFDB5E] left-[416px] top-[378px] flex justify-center items-center'>
        <h1 className='text-white text-[10px] duration-300 uppercase opacity-0 hover:opacity-[100%] cursor-default'>jupiter</h1>
      </div>
      <div className='rounded-full planetspin6 absolute w-[32px] h-[32px] bg-gradient-to-br from-[#8D7537] to-[#FFDB5E] left-[382px] top-[378px] flex justify-center items-center'>
        <h1 className='text-white text-[10px] duration-300 uppercase opacity-0 hover:opacity-[100%] cursor-default'>saturn</h1>
      </div>
      <div className='rounded-full planetspin7 absolute w-[35px] h-[35px] bg-gradient-to-br from-[#086CC9] to-[#1e7eb6] left-[348px] top-[378px] flex justify-center items-center'>
        <h1 className='text-white text-[10px] duration-300 uppercase opacity-0 hover:opacity-[100%] cursor-default'>uranus</h1>
      </div>
      <div className='rounded-full planetspin8 absolute w-[29px] h-[29px] bg-gradient-to-br from-[#3AB8FF] to-[#297FFF] left-[322px] top-[378px] flex justify-center items-center'>
        <h1 className='text-white text-[10px] duration-300 uppercase opacity-0 hover:opacity-[100%] cursor-default'>neptune</h1>
      </div>
    </main>
  )
}
