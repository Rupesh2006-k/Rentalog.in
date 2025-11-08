import React from 'react'
import HeroSection from '../components/HeroSection'
import OuerService from '../components/OuerService'
import ServiceAbilable from '../components/ServiceAvailable'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='w-full '>
      <HeroSection/>
      <OuerService/>
      <ServiceAbilable/>
      <Footer/>
    </div>
  )
}

export default HomePage