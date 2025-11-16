import React from 'react'

import AllProducts from '../Products/AllProducts'
import HeroSection from '../../../components/SECTIONS/Hero/HeroSection'
import TrendingSection from '../../../components/SECTIONS/Trending/TrendingSection'
import ExportHub from '../../../components/SECTIONS/Banners/ExportHub'
import PopularSection from '../../../components/SECTIONS/Banners/PopularSection'
import TrustSection from '../../../components/SECTIONS/Banners/TrustSection'

function HomePage() {
  return (
    <div>
      
      <div className='p-5'>
        <HeroSection></HeroSection>
        <PopularSection></PopularSection>
        <TrendingSection></TrendingSection>
        <ExportHub></ExportHub>
        <TrustSection></TrustSection>
        
      </div>
      
    </div>
  )
}

export default HomePage
