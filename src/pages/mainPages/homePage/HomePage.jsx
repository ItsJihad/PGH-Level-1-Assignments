import React from 'react'
import HeroSection from '../../../components/Hero/HeroSection'
import AllProducts from '../Products/AllProducts'

function HomePage() {
  return (
    <div>
      
      <div className='p-5'>
        {/* <HeroSection></HeroSection> */}
        <AllProducts></AllProducts>
      </div>
      
    </div>
  )
}

export default HomePage
