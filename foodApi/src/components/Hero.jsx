import React from 'react'
import heroImg from '../assets/heroImg.png'
import Cards from './Cards'

const Hero = () => {
  return (
    <>
    <div className='hero-background'>
    <div className="container overflow-hidden text-center">
  <div className="row gx-5">
    <div className="col">
     <div className="p-5" id='heroheading'>Are You Straving?</div>
     <p id='heroPara'>Within a few clicks, find meals that are accesible near you</p>
    </div>
    <div className="col">
      <div className="p-5"><img src={heroImg} alt="" /></div>
    </div>
  </div>
</div>
    </div>
    <Cards/>
    </>
  )
}

export default Hero
