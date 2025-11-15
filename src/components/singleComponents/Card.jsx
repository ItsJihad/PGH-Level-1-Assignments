import React from 'react'

function Card() {
  return (
    <div>
      <div className="card bg-base-100  shadow-sm backdrop-blur-xs  shadow-gray-500">
  <figure>
    
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
      
  </figure>
  <div className="card-body">
    <h2 className="card-title font-[montserrat]">Organic Cotton Fabric</h2>
    <p className='font-[montserrat]'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions ">
      <div className='grid grid-cols-2 w-screen font-[montserrat] '>
            <div className='font-semibold'>Price  : </div> <div>$1,020</div>
            <div className='font-semibold'>Origin :</div> <div><span>^</span>India</div>
            <div className='font-semibold'>Rating :</div> <div><span>^</span>4.7</div>
            <div className='font-semibold'>InStock:</div> <div>10,000 units</div>
      </div>
            
      
    </div>
    <div className='flex gap-5 justify-start py-4 font-[montserrat]'>
            <button className="btn btn-primary">View Details</button>
            <button className="btn btn-primary ">Buy Now</button>
            </div>
  </div>
</div>

    </div>
  )
}

export default Card
