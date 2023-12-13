import React from 'react'
import Script from 'next/script'
export default function PlanetsScript() {
  return (
    <main>
      <Script id=''>
        {
          `
          function showHide(p,d) {
            d.onmouseenter = () => {
              d.style.opacity = '70%'
              p.style.filter = 'blur(10px)'
            }
            d.onclick = () => {
              d.style.opacity = '70%'
              p.style.filter = 'blur(10px)'
            }
            d.onmouseleave = () => {
              d.style.opacity = '0'
              p.style.filter = 'blur(0)'
            }
          }
            image1 = document.getElementById("1")
            image2 = document.getElementById("2")
            image3 = document.getElementById("3")
            image4 = document.getElementById("4")
            image5 = document.getElementById("5")
            image6 = document.getElementById("6")
            image7 = document.getElementById("7")
            image8 = document.getElementById("8")
            image6.style.width = '400px'
            details1 = document.getElementById("1details")
            details2 = document.getElementById("2details")
            details3 = document.getElementById("3details")
            details4 = document.getElementById("4details")
            details5 = document.getElementById("5details")
            details6 = document.getElementById("6details")
            details7 = document.getElementById("7details")
            details8 = document.getElementById("8details")
            images = [image1,image2,image3,image4,image5,image6,image7,image8]
            details = [details1,details2,details3,details4,details5,details6,details7,details8]
            for (let i = 0;i<images.length;i++) {
              showHide(images[i],details[i])
            }
            details2.style.left = '-37px'
            details6.style.left = '30px'
          `
        }
      </Script>
    </main>
  )
}
