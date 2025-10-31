import React from "react";
import TipsCard from "../all_Cards/TipsCard";

function Tipssec({tips}) {
  return (
    <div className="px-10">

      <div className="text-center mb-12 mt-12">
        <h2 className="text-4xl text-gray-900 font-bold">Plant Care Tips</h2>
        <p className="text-gray-600 text-lg mt-2">
          Simple tips to keep your plants Healthy
        </p>
      </div>
    {
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {tips.map(tip => (
    <TipsCard key={tip.id} tip={tip} />
  ))}
</div>

        
        
    }
        



    </div>
  );
}

export default Tipssec;
