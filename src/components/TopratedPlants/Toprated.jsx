import React from "react";
import PlantCard from "../all_Cards/PlantsCards";

function Toprated({ plants }) {
  return (
    <div className="px-4">
      <div className="bg[#DCFCE7]">
        <div className="pt-10">
          <h2 className="text-4xl font-bold text-center text-green-500 flex justify-center gap-3">
            Top Rated Plants
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-600"
              height="48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          </h2>
          <p className="text-center text-gray-500">
            Explore All Toprated plants on the Market
          </p>
        </div>

        <div className="px-4 md:px-8 lg:px-16 py-8">
          <div
            className="grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-4"
          >
            {plants.slice(0, 4).map((plant) => (
              <PlantCard key={plant.plantId} plant={plant} />
            ))}
          </div>
        </div>

        {/* <div className="text-center mt-10">
          <a
            className="btn btn-wide text-white hover:shadow-xl bg-green-600"
            href="/apps"
            data-discover="true"
          >
            Show All
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Toprated;
