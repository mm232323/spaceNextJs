import React from 'react'
import Image from 'next/image'
import data from './stars.json'
import Header from '@/components/header'
import mainImage from './mainstarsImage.jpg'
export default function starsPage() {
  return (
    <main className='h-[8300px]'>
      <Image src={mainImage} alt='' className='absolute'></Image>
      <Header></Header>
      <h1 className='text-white uppercase text-[56px] font-bold absolute left-[140px] top-[180px] max-lg:text-[34px] max-lg:left-[35px]'>stars discovery</h1>
      <p className='absolute text-white opacity-[67%] w-fit max-lg:top-[240px] max-lg:text-[11.5px] font-thin max-lg:left-[40px] left-[144px] top-[287px] text-[20px] leading-[33px] max-lg:leading-[19px]'>
        On this page, well discover some of <br></br>
        our hard work
        About the field<br></br>
        of the stars in our galaxy
      </p>
      <div className='flex top-[350px] justify-center relative left-[50%] translate-x-[-50%] flex-wrap'>
      {
        data.map(star => {
          return (
            <div key={star.id} className='mr-[60px] hoverer relative w-[48%] max-md:bg-blue-800 max-md:z-2 timingfunction mb-[80px] border-[1px] rounded-xl hover:scale-95 duration-500 hover:w-[100%] left-0'>
              <Image src={star.photo} alt='' width={2000} height={2000}  className='image rounded-xl w-[700px] h-[434px] '></Image>
              <h1 className='absolute text-white text-[18px] uppercase left-[50%] translate-x-[-50%] p-4'>{star.name}</h1>
              <div className='w-[1px] breaker h-[431px] duration-[.4s] opacity-0 blur-[30px] bg-white absolute top-0 left-[51.4%]'></div>
              <div className='opacity-0 details timingfunction absolute top-[60px] left-[58%] blur-[30px] duration-500'>
                <h1 className='text-white font-bold text-[50px] uppercase absolute '>Details</h1>
                <div className='absolute h-[1.5px] w-[500px] top-[80px] rounded-[100px] bg-white'></div>
                <h2 className='text-white text-[34px] relative top-[110px] pb-2'>Name: {star.name.toUpperCase()}</h2>
                <h2 className='text-white text-[34px] relative top-[110px] pb-2'>Size: {star.size.toUpperCase()}</h2>
                <h2 className='text-white text-[34px] relative top-[110px] pb-2'>Temp: {star.temp.toUpperCase()}</h2>
                <h2 className='text-white text-[34px] relative top-[110px] pb-2'>Type: {star.type.toUpperCase()}</h2>
                <h2 className='text-white text-[34px] relative top-[110px] pb-2'>Age: {star.age.toUpperCase()}</h2>
              </div>
            </div>
          )
        })
      }
      </div>
    </main>
  )
}
