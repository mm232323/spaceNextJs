import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Logo from '../public/logo 1.svg'
import choose from '../public/choose.svg'
import close from '../public/close.svg'
export default function Header() {
  return (
    <main>
    <div className=' w-[100%] h-[100%] bg-gradient-to-t from-transparent to-[#00000088] absolute top-0 left-0'></div>
    <header>
      <Link href='./'>
      <Image id='logo' src={Logo} alt='' className='relative left-[243px] max-lg:left-[50%] max-lg:translate-x-[-50%] top-[20px]'></Image>
      </Link>
      <div id='options' className='text-3xl max-lg:text-[15px] duration-[.45s] text-white spacecursor relative top-[-60px] max-lg:top-[-95px]  max-lg:left-[40px] z-10 flex left-[520px] max-w-fit max-lg:opacity-0 max-lg:blur-lg'>
        <Link href='./about'>
        <h1 className='linksGroup pr-[40px] max-md:pr-[15px]'>About</h1>
        </Link>
        <Link href='./planets'>
        <h1 className='linksGroup pr-[40px] max-md:pr-[15px]'>Planets</h1>
        </Link>
        <Link href='./stars'>
        <h1 className='linksGroup pr-[40px] max-md:pr-[15px]'>Stars</h1>
        </Link>
        <Link href='./contact'>
        <h1 className='linksGroup'>Contact</h1>
        </Link>
      </div>
      <Image id='choose' src={choose} alt='' className='absolute right-10 shadow-xl pointer top-[70px] hidden cursor-pointer max-lg:block'></Image>
      <div id='settings'  className='bg-white/30 absolute top-0 w-[100%] h-0 backdrop-blur-md duration-[.45s] timingfunction xl:hidden'></div>
      <Image id='close' src={close} alt='' className='absolute cursor-pointer right-[30px] xl:hidden rotate-[180deg] opacity-0 blur-md top-[40px] duration-[.45s] z-10'></Image>
    </header>
    <Script id=''>
          {
            `
              var choose = document.getElementById("choose")
              var settings = document.getElementById("settings")
              var close = document.getElementById("close")
              var options = document.getElementById("options")
              choose.onclick = () => {
                settings.style.height = '87px'
                close.style.cssText = 'opacity:100%;filter:blur(0);transform:rotate(0)'
                options.style.cssText = 'opacity:100%;filter:blur(0);transition-duration:.45s;'
              }
              close.onclick = () => {
                settings.style.height = '0'
                close.style.cssText = 'opacity:0;filter:blur(12px);transform:rotate(180deg);'
                options.style.cssText = 'opacity:0%;filter:blur(12px);transition-duration:.45s;'
              }
            `
          }
        </Script>
    </main>
  )
}
