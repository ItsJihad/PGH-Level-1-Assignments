import React from "react";
import { Link, useLoaderData, } from "react-router";

function Products() {
  const plants = useLoaderData();
  
  return (
    <div>
      
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center text-green-700">
          All Plants
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {plants.map((plant) => (
            
            <div
              key={plant.plantId}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
            >
              <Link to={`/plants/${plant.plantId}`}>
                <img
                  src={plant.image}
                  alt={plant.plantName}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
              </Link>

              <div className="">
                <h3 className="text-lg font-semibold text-gray-800">
                  {plant.plantName}
                </h3>

                <p className="text-gray-500 text-sm">{plant.category}</p>

                <p className="text-green-600 font-bold mt-1">${plant.price}</p>

                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-700 ml-1">
                    {plant.rating}
                  </span>
                </div>

                <p
                  className={`text-sm mt-1 ${
                    plant.availableStock > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {plant.availableStock > 0
                    ? `${plant.availableStock} in stock`
                    : "Out of stock"}
                </p>
              </div>

              <button
                disabled={plant.availableStock === 0}
                className={`mt-4 py-2 rounded-lg font-medium transition ${
                  plant.availableStock > 0
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-gray-300 cursor-not-allowed text-gray-600"
                }`}
              >
                Add to Cart
              </button>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
