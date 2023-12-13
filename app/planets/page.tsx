import React from 'react'
import Image from 'next/image'
import PlanetsScript from '@/components/planetsScript'
import mainImage from '../../public/mainplanetsImage.png'
import Header from '@/components/header'
import data from './planets.json'
import playIcon from '../../public/playIcon.png'
import Link from 'next/link'
export default function planetsPage() {
  return (
    <main className='h-[4500px]'>
      <Image src={mainImage} alt='' className='absolute left-0'></Image>
      <Header></Header>
      <h1 className='text-white uppercase text-[56px] font-bold absolute left-[140px] top-[180px] max-lg:text-[34px] max-lg:left-[35px]'>planets discovery</h1>
      <p className='absolute text-white opacity-[67%] w-fit  max-lg:top-[240px] max-lg:text-[11.5px] font-thin max-lg:left-[40px] left-[144px] top-[287px] text-[20px] leading-[33px] max-lg:leading-[19px]'>
        On this page, we'll discover some of<br></br>
        our hard work
        About the field<br></br>
        of the planet in our galaxy
      </p>
      <section className='relative w-[100%] h-[2500px] top-[327px]'>
      <h1 className='font-[500] text-white absolute max-lg:text-center left-[50%] uppercase translate-x-[-50%] text-[45px] max-lg:text-[30px] max-lg:top-[-90px] max-lg:font-normal top-[15px]'>copernican system</h1>
      <Link href='/planets/solar'>
      <Image src={playIcon} alt='' className='absolute right-[340px] top-[23px]'></Image>
      </Link>
      <div className='relative flex flex-wrap justify-center max-w-fit top-[150px]'>
      {
        data.filter(p=> p.solarName == 'copernican system').map(planet => {
          return (
            <div key={planet.id} className='mr-[140px] relative mb-[120px] left-[60px]'>
              <h1 className='text-white absolute text-[30px] font-light uppercase bottom-[-70px] left-[50%] translate-x-[-54%]'>{planet.name}</h1>
              <Image src={planet.photo} alt='' width={2000} height={2000} className='w-[272px] h-[272px] duration-[.4s]' id={String(planet.id)}></Image>
              <div className='bg-black opacity-0 z-2 absolute top-[-10px] left-[-20px] backdrop-blur-3xl shadow-2xl w-[320px] duration-[.4s] h-[320px] rounded-md' id={String(planet.id) +'details'}>
                <h1 className='relative text-white cursor-default text-[20px] uppercase left-[50%] translate-x-[-50%] p-[10px] text-center leading-8'>solar-name: <br></br>{planet.solarName}</h1>
                <h1 className='relative cursor-default text-white text-[20px] uppercase left-[50%] translate-x-[-50%] p-[10px] text-center leading-8'>size: {planet.size}</h1>
                <h1 className='relative cursor-default text-white text-[20px] uppercase left-[50%] translate-x-[-50%] p-[10px] text-center leading-8'>temperature: {planet.temperature}</h1>
                <h1 className='relative cursor-default text-white text-[20px] uppercase left-[50%] translate-x-[-50%] p-[10px] text-center leading-8'>desnity: {planet.desnity}</h1>
                <h1 className='relative cursor-default text-white text-[20px] uppercase left-[50%] translate-x-[-50%] p-[10px] text-center leading-8'>ranking: {planet.ranking}</h1>
              </div>
            </div>
          )
        })
      }
      </div>
      </section>
      <PlanetsScript></PlanetsScript>
    </main>
  )
}
