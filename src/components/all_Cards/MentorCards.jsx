import React from "react";

function MentorCards({ expert }) {
  return (
    <div>
      <div
        key={expert.id}
        className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
      >
        <img
          src={expert.img}
          alt={expert.name}
          className="h-64 w-full object-cover"
        />
        <div className="p-4 flex flex-col gap-2 flex-1">
          <h3 className="text-lg text-gray-900 font-semibold">{expert.name}</h3>
          <p className="text-sm text-gray-600">{expert.specialty}</p>
          <div className="flex justify-between items-center text-sm mt-2">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span>{expert.rating}</span>
            </div>
            <div className="text-gray-500">{expert.reviews} reviews</div>
          </div>
          <button className="mt-4 bg-green-600 text-white text-sm py-2 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default MentorCards;
