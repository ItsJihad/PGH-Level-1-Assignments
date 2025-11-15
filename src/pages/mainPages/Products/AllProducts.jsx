import React from 'react'
import SearchComponent from '../../../components/singleComponents/SearchComponent'
import Card from '../../../components/singleComponents/Card'

function AllProducts() {
  return (
    <div  className="py-5 gap-5">
      <div className=''>
        <h2 className='font-[montserrat] text-5xl py-2'>All Products</h2>
        <div className='grid md:grid-cols-2 '>
          <div><h2 className='font-[montserrat] font-light  py-2'>Browse our complete collection of export products from verified suppliers</h2></div>
          <div className='flex items-center md:justify-end'><SearchComponent  ></SearchComponent></div>
          
        
        </div>
        
      </div>
      
      <h2 className='font-[montserrat] font-light py-2'>Showing <span className='font-bold'>12</span> products :</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  )
}

export default AllProducts
