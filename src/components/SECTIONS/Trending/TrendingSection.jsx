import React from "react";
import Card from "../../singleComponents/Card";
import { Link } from "react-router";

function TrendingSection({product}) {
  
  return (
    <div>
      <h2 className="font-[montserrat] text-3xl md:text-4xl font-bold p-3 text-center md:text-start">Trending Products</h2>
      <div className="grid grid-cols-4  font-[montserrat]  px-3 mb-4 ">
        <div className="sm:flex col-span-4 justify-between  items-center  ">
          <h3 className="text-sm sm:text-xl  text-center md:text-start ">
            Discover our newest additions from verified exporters
          </h3>
          <div className="flex justify-center-safe sm:justify-end py-3  ">
            <Link to={'/products'} className="btn btn-outline btn-primary w-80  ">View All</Link>
          </div>
        </div>
      </div>

      <div>
        <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-3">
          {product.map(product=> <Card key={product._id} product={product}></Card>)}
        </div>
      </div>
    </div>
  );
}

export default TrendingSection;
