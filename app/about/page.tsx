import React from 'react'
import Image from 'next/image'
import AboutScript from '@/components/aboutScript'
import Header from '@/components/header'
import mainImage from '../../public/astronaut2.jpg'
import logo2 from '../../public/logo2.png'
import spaceman1 from '../../public/spaceman1.png'
import spaceman2 from '../../public/spaceman2.png'
import spaceman3 from '../../public/spaceman3.png'
import data from '../../public/data1.png'
import data2 from '../../public/data2.png'
import data3 from '../../public/data3.png'
import data4 from '../../public/data4.png'
import data5 from '../../public/data5.png'
import contactImage from '../../public/contactimage.png'
import mainPImage from '../../public/mainPImage.png'
import timeline from '../../public/timelineImage.png'
import contactimage from '../../public/contactPImage.png'
export default function aboutPage() {
  return (
    <main className='h-[2800px]'>
      <Image src={mainImage} alt='' className='absolute top-0 max-lg:hidden'></Image>
      <Image src={mainPImage} alt='' className='absolute top-0 hidden max-lg:block w-[100%]'></Image>
      <Header></Header>
      <h1 className='font-bold text-[65px] max-lg: absolute text-white left-[140px] max-lg:left-[40px] max-lg:text-[40px] max-md:text-[50px] top-[180px]'>About us</h1>
      <p className='absolute text-white font-[400] opacity-[67%] max-lg:font-normal max-lg:top-[240px] max-lg:left-[40px] left-[144px] top-[287px] text-[20px] leading-[33px]'>
        In this page you will<br></br>
        know some informations<br></br>
        about us
      </p>
      <section className='relative w-[100%] h-[200px] top-[292px]'>
        <h1 className='font-[500] text-white absolute max-lg:text-center left-[50%] uppercase translate-x-[-50%] text-[45px] max-lg:text-[30px] max-lg:top-[-90px] max-lg:font-normal top-[15px]'>our company</h1>
        <p className='absolute text-white opacity-[67%] text-[20px] top-[100px] left-[126px] max-lg:left-[50%] max-lg:w-[410px] max-lg:translate-x-[-50%] max-lg:text-center max-lg:top-[44px]'>
          Lorem ipsum dolor sit amet, consectetur<br></br>
          adipiscing elit. Morbi interdum ultricies<br></br>
          feugiat.<br></br><br></br>
          Donec laoreet odio orci, nec faucibus enim<br></br>
          lacinia quis. Praesent in orci ullamcorper,<br></br>
          auctor elit a, sagittis sapien.</p>
          <Image src={logo2} alt='' className='absolute right-[100px] top-4 scale-[.8] max-lg:hidden'></Image>
      </section>
      <section className='relative w-[100%] h-[200px] top-[592px]'>
        <h1 className='font-[500] text-white absolute left-[50%] max-lg:text-center max-lg:text-[30px] max-lg:top-[-90px] max-lg:font-normal uppercase translate-x-[-50%] text-[45px] top-[15px]'>Our top astronauts</h1>
        <div className=' w-[100%] h-[420px] max-lg:top-[50px] max-lg:overflow-x-scroll absolute top-[120px] max-lg:w-[430px] flex justify-center max-lg:block'>
          <div className='mr-5 relative mydiv max-lg:mr-0 w-fit max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:mb-32 hover:scale-105 duration-[.4s] hover:mr-[30px]'>
            <Image src={spaceman1} alt='' className=' rounded-[60px] border-white border-[1px] myshadow'></Image>
            <h1 className='text-[#000A25] text-[22px] font-300 pt-[12px] absolute top-[270px] left-[50px] uppercase w-[230px] h-[90px] flex justify-center bg-white rounded-[10px]'>captain medo</h1>
            <h3 className='absolute left-[85px] flex text-white text-[15] w-[156px] h-[60px] items-center rounded-[7px] bg-[#012E65] font-300 justify-center text-center top-[325px]'>Aerospace<br></br> Engineer</h3>
          </div>
          <div className='mr-5 w-fit relative hover:scale-105 max-lg:left-[50%] max-lg:translate-x-[-50%] hover:ml-3 max-lg:mr-0 max-lg:mb-32 hover:mr-[30px] duration-[.4s]'>
            <Image src={spaceman2} alt='' className='rounded-[60px] border-white border-[1px] myshadow'></Image>
            <h1 className='text-[#000A25] text-[22px] font-300 pt-[12px] absolute top-[270px] left-[50px] uppercase w-[230px] h-[90px] flex justify-center bg-white rounded-[10px]'>captain abdo</h1>
            <h3 className='absolute left-[85px] flex text-white text-[15] w-[156px] h-[60px] items-center rounded-[7px] bg-[#012E65] font-300 justify-center text-center top-[325px]'>Electronics<br></br> engineer</h3>
          </div>
          <div className='relative w-fit duration-[.4s] max-lg:left-[50%] max-lg:translate-x-[-50%] hover:scale-105 hover:ml-3'>
            <Image src={spaceman3} alt='' className='rounded-[60px] border-white border-[1px] myshadow'></Image>
            <h1 className='text-[#000A25] text-[22px] font-300 pt-[12px] absolute top-[270px] left-[50px] uppercase w-[230px] h-[90px] flex justify-center bg-white rounded-[10px]'>captain boody</h1>
            <h3 className='absolute left-[85px] flex text-white text-[15] w-[156px] h-[60px] items-center rounded-[7px] bg-[#012E65] font-300 justify-center text-center top-[325px]'>Computer<br></br> Engineer</h3>
          </div>
        </div>
      </section>
      <section className='relative w-[100%] h-[700px] top-[980px]'>
        <h1 className='font-[500] max-lg:text-[30px] max-lg:font-[400] text-center max-lg:top-[-10px] text-white absolute left-[50%] uppercase translate-x-[-50%] text-[45px] top-[15px]'>timeline evolution</h1>
        <Image src={timeline} alt='' className='absolute max-lg:block hidden scale-110 top-[160px] left-[50%] translate-x-[-50%]'></Image>
        <div className='absolute w-[100%] h-[3px] bg-white/100 left-0 top-[430px] max-lg:hidden'></div>
        <div className='flex w-fit relative left-[50%] translate-x-[-50%] top-[470px] max-lg:hidden'>
          <div className='years'>
            <Image src={data} alt='' className='absolute w-[500.5px] h-[268px] left-[40px] bottom-[80px] opacity-0 blur-2xl duration-[.35s]' id='data'></Image>
            <div className='circles' id='circle1'></div>
            <h4>2010</h4>
          </div>
          <div className='years'>
            <Image src={data2} alt='' className='absolute w-[500.5px] h-[268px] left-[335px] bottom-[80px] opacity-0 blur-2xl duration-[.35s]' id='data2'></Image>
            <div className='circles' id='circle2'></div>
            <h4>2017</h4>
          </div>
          <div className='years'>
          <Image src={data3} alt='' className='absolute w-[440.5px] h-[268px] left-[415px] bottom-[140px] blur-xl opacity-0 duration-[.35s]' id='data3'></Image>
            <div className='circles' id='circle3'></div>
            <h4>2020</h4>
          </div>
          <div className='years'>
          <Image src={data4} alt='' className='absolute w-[500.5px] h-[268px] left-[420px] bottom-[140px] opacity-0 blur-2xl duration-[.35s]' id='data4'></Image>
            <div className='circles' id='circle4'></div>
            <h4>2021</h4>
          </div>
          <div className='another'>
          <Image src={data5} alt='' className='absolute w-[500.5px] h-[268px] left-[700px] bottom-[140px] opacity-0 blur-2xl duration-[.35s]' id='data5'></Image>
            <div className='circles' id='circle5'></div>
            <h4>2023</h4>
          </div>
        </div>
      </section>
      <section className='relative w-[100%] max-lg:top-[1200px] top-[918px]'>
        <h1 className='font-[500] text-white max-lg:text-[30px] text-center absolute left-[50%] uppercase translate-x-[-50%] text-[45px] top-[15px]'>contact now!</h1>
        <Image src={contactimage} alt='' className='relative max-lg:block hidden w-[100%] top-[170px]'></Image>
        <Image src={contactImage} alt='' className='relative max-lg:hidden w-[100%] top-[150px]'></Image>
        <div className='w-[1280px] max-md:w-[410px] h-[514px] max-lg:rounded-[30px] max-lg:h-[410px] absolute max-lg:top-[170px] top-[200px] bg-white/510 left-[50%] rounded-[80px] translate-x-[-50%] max-lg:w-[300px] backdrop-blur-xl myshadow'>
          <h3 className='uppercase font-thin text-[21px] absolute text-white pt-[60px] left-[120px] max-lg:text-[16px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:pt-[20px]'>first name</h3>
          <input type="text" className='absolute left-[120px] duration-300 pl-[10px] shadow-xl focus:outline-none focus:border-dotted focus:border-[2px] text-white w-[243px] h-[48px] bg-white/10 rounded-[2px] top-[110px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:top-[60px]' />
          <div className='absolute left-[120px] pl-[10px] w-[243px] h-[5px] bg-[#002147] rounded-tr-none rounded-tl-none rounded-[2px] top-[156px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:top-[106px]'></div>
          <h3 className='uppercase font-thin text-[21px] absolute text-white pt-[60px] left-[420px] max-lg:text-[16px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:pt-[120px]'>last name</h3>
          <input type="text" className='absolute duration-300 left-[420px] shadow-xl pl-[10px] focus:outline-none focus:border-dotted focus:border-[2px] text-white w-[243px] h-[48px] bg-white/10 rounded-[2px] top-[110px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:top-[150px]' />
          <div className='absolute left-[420px] pl-[10px] w-[243px] h-[5px] bg-[#002147] rounded-tr-none rounded-tl-none rounded-[2px] top-[156px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:top-[193px]'></div>
          <h3 className='uppercase font-thin text-[21px]  absolute text-white pt-[60px] left-[720px] max-lg:text-[16px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:pt-[210px]'>phone name</h3>
          <input type="text" className='absolute duration-300 left-[720px] pl-[10px] focus:outline-none focus:border-dotted focus:border-[2px] text-white w-[283px] h-[48px] bg-white/20 shadow-xl rounded-[2px] top-[110px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:top-[240px]' />
          <div className='absolute left-[720px] pl-[10px] w-[283px] h-[5px] bg-[#002147] rounded-tr-none rounded-tl-none rounded-[2px] top-[156px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:top-[283px]'></div>
          <h3 className='uppercase font-thin text-[21px] absolute text-white pt-[60px] left-[120px] top-[135px] max-lg:text-[16px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:pt-[170px]'>message</h3>
          <textarea className='absolute p-[20px] left-[120px] focus:outline-none focus:border-dotted focus:border-[2px] duration-300 text-white w-[703px] h-[248px] max-lg:w-[300px] max-lg:h-[60px] bg-white/20 shadow-xl rounded-[2px] top-[240px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:top-[330px]' />
          <div className='absolute left-[120px] w-[703px] h-[5px] max-lg:w-[300px] max-lg:top-[385px] bg-[#002147] rounded-tr-none rounded-tl-none rounded-[2px] top-[483px] max-lg:left-[50%] max-lg:translate-x-[-50%]'></div>
        </div>
      </section>
      <AboutScript></AboutScript>
    </main>
  )
}
