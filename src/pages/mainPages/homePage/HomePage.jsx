import React from 'react'

import AllProducts from '../Products/AllProducts'
import HeroSection from '../../../components/SECTIONS/Hero/HeroSection'
import TrendingSection from '../../../components/SECTIONS/Trending/TrendingSection'

function HomePage() {
  return (
    <div>
      
      <div className='p-5'>
        <HeroSection></HeroSection>
        <TrendingSection></TrendingSection>
        {/* <AllProducts></AllProducts> */}
      </div>
      
    </div>
  )
}

export default HomePage
