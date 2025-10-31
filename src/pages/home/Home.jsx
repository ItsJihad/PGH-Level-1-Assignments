import React from 'react'
import Herosec from '../../components/hero/Herosec'
import Toprated from '../../components/TopratedPlants/Toprated'
import Mentors from '../../components/mentors/Mentors'
import Tipssec from '../../components/Tips/Tipssec'
import { useLoaderData } from 'react-router'

function Home() {
  const {plants, mentors, tips} =useLoaderData()
    
  return (
    <div>
      <Herosec></Herosec>
      <Toprated plants={plants}></Toprated>
      <Tipssec tips={tips}></Tipssec>
      <Mentors mentors={mentors}></Mentors>

    

    </div>
  )
}

export default Home
