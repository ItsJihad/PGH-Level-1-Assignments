import React from 'react'

function HeroSection() {
  return (
    <div >
      <div className='grid grid-cols-1 sm:grid-cols-3 font-[montserrat] '>
            <div className='col-span-2 '>
              <div className='relative -z-30 sm:hidden'>
                <div className='grid sm:grid-cols-3  order-1 items-center justify-center mt-15 mb-10 sm:mt-0 sm:mb-0'>
              <img className='rounded-2xl relative  ' src="/assets/image1.png"  />
              <img className='rounded-full sm:rounded-2xl absolute ml-62 mb-60 sm:ml-25 sm:mt-30 sm:mb-0 w-30 h-30 sm:w-60  sm:h-45' src="/assets/image2.png"  />
              <img className='rounded-full sm:rounded-2xl absolute mt-40 -ml-3 sm:ml-60 sm:mt-5 w-30 h-30 sm:w-60  sm:h-45' src="/assets/image3.png"  />
              
            </div>
              </div>
                <div className='bg-blue-400 w-60 rounded-3xl p-2'>🌍 Global B2B Marketplace</div>
                
                <div className='  py-5'>
                  <h2 className='text-3xl font-bold'>Connect with Verified Exporters Worldwide</h2>
                  <h2 className='text-lg font-light'>Access thousands of premium products from trusted suppliers in over 150 countries. Secure transactions, verified quality.</h2>
                  <div className='flex py-4 gap-5'>
                    <button className='btn btn-outline btn-primary'>Browse Products</button>
                    <button className='btn  btn-primary'>Start Selling</button>
                  </div>
                </div>
                <div className=' flex sm:py-2 gap-15  '>
                  <div >
                    <div className='font-bold'>12K+</div>
                    <div>Products</div>
                  </div>
                  <div>
                    <div className='font-bold'>150+</div>
                    <div>Countries</div>
                  </div>
                  <div>
                    <div className='font-bold'>5K+</div>
                    <div>Suppliers</div>
                  </div>
                </div>
            </div>
            <div className='hidden sm:block'>
              <div className='grid sm:grid-cols-3  order-1 items-center justify-center mt-20 mb-10 sm:mt-0 sm:mb-0'>
              <img className='rounded-2xl relative  ' src="/assets/image1.png"  />
              <img className='rounded-full sm:rounded-2xl absolute ml-62 mb-60 sm:ml-25 sm:mt-30 sm:mb-0 w-30 h-30 sm:w-60  sm:h-45' src="/assets/image2.png"  />
              <img className='rounded-full sm:rounded-2xl absolute mt-40 -ml-3 sm:ml-60 sm:mt-5 w-30 h-30 sm:w-60  sm:h-45' src="/assets/image3.png"  />
              
            </div>
            </div>
      </div>
    </div>
  )
}

export default HeroSection
