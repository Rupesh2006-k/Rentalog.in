import React from 'react'
import HeroSection from '../components/HeroSection'
import OuerService from '../components/OuerService'
import ServiceAbilable from '../components/ServiceAvailable'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'

const HomePage = () => {
  return (
    <div className='w-full '>
      <HeroSection/>
      <OuerService/>
      <ServiceAbilable/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default HomePage