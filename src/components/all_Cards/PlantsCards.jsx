import React from "react";
import { Link } from "react-router";

function PlantCard({ plant }) {
  return (
    <div>
      <Link to={`/plants/${plant.plantId}`}>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {plant.plantName}
            </h3>
            <p className="text-gray-500 text-sm">
              {plant.category} • {plant.providerName}
            </p>
          </div>

          <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-lg font-semibold text-sm flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.431L24 9.753l-6 5.851L19.335 24 12 20.09 4.665 24 6 15.604 0 9.753l8.332-1.735z" />
            </svg>
            {plant.rating}
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-2">{plant.description}</p>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-700">
          <span className="font-semibold">${plant.price}</span>
          <span>Stock: {plant.availableStock}</span>
          <span>Care: {plant.careLevel}</span>
        </div>
      </div>
    </div>
      </Link>
    </div>
  );
}

export default PlantCard;
