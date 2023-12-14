import React from 'react'
import Image from 'next/image'
import data from './stars.json'
import Header from '@/components/header'
import mainImage from './mainstarsImage.jpg'
export default function starsPage() {
  return (
    <main className='h-[8590px]'>
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
        data.map(planet => {
          return (
            <div key={planet.id} className='mr-[60px] mb-[80px] border-[1px]'>
              <Image src={planet.photo} alt='' width={2000} height={2000}  className='rounded-xl w-[700px] h-[430px] '></Image>
              <h1 className='relative text-white text-[18px] uppercase left-[50%] translate-x-[-2%] bottom-0'>{planet.name}</h1>
            </div>
          )
        })
      }
      </div>
    </main>
  )
}
