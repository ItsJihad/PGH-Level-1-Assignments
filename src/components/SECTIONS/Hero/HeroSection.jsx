import React from 'react'

function HeroSection() {
  return (
    <div className='pb-5'>
      <div className='grid grid-cols-1 md:grid-cols-3 font-[montserrat]'>
            <div className='col-span-2 '>
               <div>
                <div className="hover-3d">
                          {/* content */}
                          <figure className="rounded-2xl min-h-60 md:hidden">
                            <img src="https://img.freepik.com/3d-models/v2/O/0/V/Y/0/Z/D/O0VY0ZDL/caiman-character-poster-2.png?t=st=1763378412~exp=1763382012~hmac=cc417d6147daa2dd2218bd8de3930bc781561bdb76b6462b953ef0c1f99abbc4&w=1000"  />
                          </figure>
                          {/* 8 empty divs needed for the 3D effect */}
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
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
                <div className=' flex sm:py-2 gap-15 text-center  '>
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
            <div className='   '>
                   <div>
                    <div className="hover-3d ">
                        
                          <figure className=" hidden md:block rounded-2xl w-63 lg:w-80 ">
                            <img src="https://img.freepik.com/3d-models/v2/O/0/V/Y/0/Z/D/O0VY0ZDL/caiman-character-poster-2.png?t=st=1763378412~exp=1763382012~hmac=cc417d6147daa2dd2218bd8de3930bc781561bdb76b6462b953ef0c1f99abbc4&w=1000"   />
                          </figure>
                         
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                    </div>
                   </div>
            </div>
      </div>
    </div>
  )
}

export default HeroSection
