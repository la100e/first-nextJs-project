"use client"


import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function CarouselComponent() {
  return (
    <>
    <div className='max-w-[1200px] mx-auto'>
      <Carousel showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false}>
          <div>
              <img src="/imgs/banners/1.jpg" />
          </div>
          {/* <div>
              <img src="/imgs/banners/2.jpeg" />
          </div> */}
          <div>
              <img src="/imgs/banners/3.webp" />
          </div>
          <div>
              <img src="/imgs/banners/4.webp" />
          </div>
      </Carousel>
    </div>
  </>
  )
}
