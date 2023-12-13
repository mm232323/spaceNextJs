import React from 'react'
import Script from 'next/script'
export default function AboutScript() {
  return (
    <main>
      <Script id=''>
        {
          `
            circle1 = document.getElementById('circle1')
            circle2 = document.getElementById('circle2')
            circle3 = document.getElementById('circle3')
            circle4 = document.getElementById('circle4')
            circle5 = document.getElementById('circle5')
            data1 = document.getElementById("data")
            data2 = document.getElementById("data2")
            data3 = document.getElementById("data3")
            data4 = document.getElementById("data4")
            data5 = document.getElementById("data5")
            circle1.onmouseenter = () => {
              circle1.style.cssText = 'background-color:#061B44;'
              data1.style.cssText = 'opacity:100%;filter:blur(0);bottom:120px;'
            }
            circle1.onmouseleave = () => {
              circle1.style.cssText = 'background-color:white;'
              data1.style.cssText = 'opacity:0%;filter:blur(40px);bottom:80px;'
            }
            circle2.onmouseenter = () => {
              circle2.style.cssText = 'background-color:#061B44;'
              data2.style.cssText = 'opacity:100%;filter:blur(0);bottom:120px;'
            }
            circle2.onmouseleave = () => {
              circle2.style.cssText = 'background-color:white;'
              data2.style.cssText = 'opacity:0%;filter:blur(40px);bottom:80px;'
            }           
            circle3.onmouseenter = () => {
              circle3.style.cssText = 'background-color:#061B44;'
              data3.style.cssText = 'opacity:100%;filter:blur(0);bottom:105px;'
            }
            circle3.onmouseleave = () => {
              circle3.style.cssText = 'background-color:white;'
              data3.style.cssText = 'opacity:0%;filter:blur(40px);bottom:140px;'
            }            
            circle4.onmouseenter = () => {
              circle4.style.cssText = 'background-color:#061B44;'
              data4.style.cssText = 'opacity:100%;filter:blur(0);bottom:120px;'
            }
            circle4.onmouseleave = () => {
              circle4.style.cssText = 'background-color:white;'
              data4.style.cssText = 'opacity:0%;filter:blur(40px);bottom:140px;'
            }            
            circle5.onmouseenter = () => {
              circle5.style.cssText = 'background-color:#061B44;'
              data5.style.cssText = 'opacity:100%;filter:blur(0);bottom:120px;'
            }
            circle5.onmouseleave = () => {
              circle5.style.cssText = 'background-color:white;'
              data5.style.cssText = 'opacity:0%;filter:blur(40px);bottom:140px;'
            }
          `
        }
      </Script>
    </main>
  )
}
