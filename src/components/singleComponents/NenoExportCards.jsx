import React from 'react'

function NenoExportCards({product ,handleRemove}) {
  return (
    <div>
      <div className="card bg-base-100  shadow-sm backdrop-blur-xs  shadow-blue-500/30 hover:shadow-blue-500/20 dark:hover:shadow-blue-900/40 transition-all duration-500 flex flex-col h-full hover:border-white/40 dark:hover:border-white/20  ">
        <figure>
          <img
            className="w-[454px] h-[300px] object-cover"
            src={product.photourl}
          />
        </figure>
        <div className="card-body ">
          <div className="card-actions ">
            <h2 className="card-title font-[montserrat] text-center">
              {product.name}
            </h2>
            <div className="grid grid-cols-2 gap-5 p-2  font-[montserrat] ">
              <div className="font-semibold w-full">
                Quantity: {product.quantity}
                {""} units
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 font-[montserrat]">
            <button
              onClick={() => handleUpdate(product._id)}
              className="btn btn-primary text-white "
            >
              View Details
            </button>
            <button
              onClick={() => handleRemove(product._id)}
              className="btn btn-primary text-white  "
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NenoExportCards
