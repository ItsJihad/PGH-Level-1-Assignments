import React from "react";
import { Link } from "react-router";

function Card({ product }) {
  return (
    <Link
      to={`/products/${product._id}`}
      className="hover:scale-102 transition-all"
    >
      <div className="card bg-base-100  shadow-sm backdrop-blur-xs  shadow-blue-500/30 hover:shadow-blue-500/20 dark:hover:shadow-blue-900/40 transition-all duration-500 flex flex-col h-full hover:border-white/40 dark:hover:border-white/20  ">
        <figure>
          <img
            className="w-[454px] h-[300px] object-cover"
            src={product.photourl}
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title font-[montserrat]">{product.name}</h2>
          <p className="font-[montserrat]">{product.description}</p>
          <div className="card-actions ">
            <div className="grid grid-cols-2 gap-5 p-2  font-[montserrat] ">
              <div className="font-semibold">Price : </div> 
              <div>${product.price}</div>
              <div className="font-semibold">Origin : </div> 
              <div>{product.origin}</div>
              <div className="font-semibold">Rating :</div> 
              <div>{product.rating}</div>
              <div className="font-semibold">InStock:</div> 
              <div>{product.quantity} units</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 font-[montserrat]">
            <button
              className="btn btn-primary text-white hover:cursor-pointer " >
               Details
            </button>
            <button className="btn btn-primary text-white hover:cursor-pointer  ">Import</button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
