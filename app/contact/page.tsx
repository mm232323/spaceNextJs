import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import mainImage from '../../public/maincontactImage.png'
import mainPImage from '../../public/maincontactPImage.png'
import Header from '@/components/header'
import ContactScript from '@/components/contactScript'
import astronaut from '../../public/astronaut.png'
import companycard from '../../public/companycard.png'
import companycardP from '../../public/companycardP.png'
export default function contactPage() {
  return (
    <main className='h-[1900px] w-[100%] max-md:h-[1600px]'>
      <Image src={mainImage} alt='' className='absolute top-0 max-md:hidden'></Image>
      <Image src={mainPImage} alt='' className='w-[100%] hidden max-md:block absolute top-0'></Image>
      <Header></Header>
      <h1 className='text-white uppercase text-[56px] font-bold absolute left-[140px] top-[180px] max-lg:text-[34px] max-lg:left-[35px]'>contact</h1>
      <p className='absolute text-white opacity-[67%] w-fit  max-lg:top-[240px] max-lg:text-[11.5px] font-thin max-lg:left-[40px] left-[144px] top-[287px] text-[20px] leading-[33px] max-lg:leading-[19px]'>
        in this page, we will give you<br></br>
        some informations about<br></br>
        how to contactus
      </p>
      <section className=' w-[100%] relative top-[285px] h-[700px]'>
        <h1 className='font-[500] text-white left-[115px] absolute max-lg:text-center max-lg:left-[50%] uppercase max-lg:translate-x-[-50%] text-[45px] max-lg:text-[30px] max-lg:top-[-90px] max-lg:font-normal top-[62px] max-lg:w-[300px]'>connect now!</h1>
        <p className='absolute text-white w-fit opacity-[67%] max-lg:text-center max-lg:leading-[23px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:text-[10.4px] max-lg:w-[100%] max-lg:top-[-40px] max-lg:font-normal font-thin left-[115px] top-[160px] text-[20px] leading-[33px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing<br></br>
          elit. Donec non justo commodo, interdum tortor<br></br>
          non, dignissim lectus. Aenean sodales eros nec <br></br>
          risus faucibus, ut maximus massa pulvinar
        </p>
      <Image src={astronaut} alt='' className='absolute right-10 max-lg:hidden top-[170px]'></Image>
      <div className='relative max-lg:top-[-250px]'>
        <h3 className='uppercase font-thin text-white relative left-[115px] w-fit top-[340px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:text-[14px]'>first name</h3>
        <input type="text" className='border-[1px] top-[350px] left-[115px] border-white rounded-[40px] w-[441px] h-[56px] relative bg-white/30 pl-4 text-white focus:border-dashed focus:outline-none focus:shadow-2xl  duration-300 max-lg:h-[30px] max-lg:w-[201px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:border-[.2px]' />
      </div>
      <div className='relative max-lg:top-[-220px] top-[40px]'>
        <h3 className='uppercase font-thin text-white relative left-[115px] w-fit top-[340px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:text-[14px]'>last name</h3>
        <input type="text" className='border-[1px] top-[350px] left-[115px] border-white rounded-[40px] w-[441px] h-[56px] relative bg-white/30 pl-4 text-white focus:border-dashed focus:outline-none focus:shadow-2xl  duration-300 max-lg:h-[30px] max-lg:w-[201px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:border-[.2px]' />
      </div>
      <div className='relative max-lg:top-[-195px] top-[80px]'>
        <h3 className='uppercase font-thin text-white relative left-[115px] w-fit top-[340px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:text-[14px]'>message</h3>
        <textarea  className='border-[1px] top-[350px] left-[115px] border-white rounded-[40px] w-[441px] h-[135px] max-h-[155px] min-h-[135px] relative bg-white/30 pl-4 text-white focus:border-dashed focus:outline-none focus:shadow-2xl  duration-300 max-lg:h-[71px] max-lg:w-[201px] max-lg:left-[50%] max-lg:rounded-[14px] max-lg:translate-x-[-50%] max-lg:border-[.2px] p-3' />
      </div>
      <div className='relative max-lg:top-[-170px] top-[120px]'>
        <h3 className='uppercase font-thin text-white relative left-[115px] w-fit top-[340px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:text-[14px]'>email</h3>
        <input type="text" className='border-[1px] top-[350px] left-[115px] border-white rounded-[40px] w-[441px] h-[56px] relative bg-white/30 pl-4 text-white focus:border-dashed focus:outline-none focus:shadow-2xl  duration-300 max-lg:h-[30px] max-lg:w-[201px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:border-[.2px]' />
      </div>
      <button className='bg-white text-[#021E44] rounded-[40px] flex justify-center items-center font-light text-[19px] w-[212px] h-[56px] uppercase relative left-[115px] top-[505px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-md:w-[111px] max-md:h-[29px] max-md:text-[14px] max-lg:top-[210px] max-md: hover:bg-[#021e33] hover:text-white duration-300 whiteshadow'>submit</button>
      </section>
      <Image src={companycard} alt='' className='w-[100%] max-md:hidden relative top-[600px]'></Image>
      <Image src={companycardP} alt='' className='w-[100%] max-md:block hidden relative left-0 top-[200px]'></Image>
      <ContactScript></ContactScript>
    </main>
  )
}
