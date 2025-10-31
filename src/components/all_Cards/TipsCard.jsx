import React from "react";

function TipsCard({ tip }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col gap-4 w-full max-w-sm mx-auto">
      <div className="flex items-center gap-4">
        <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center">
          <img
            src={tip.icon}
            alt={tip.title}
            className="w-6 h-6 object-contain"
          />
        </div>
        <div>
          <h3 className="text-gray-900 text-xl font-bold">{tip.title}</h3>
          <p className="text-gray-600 text-sm">{tip.description}</p>
        </div>
      </div>

      <ul className="flex flex-col gap-2 mt-2">
        {tip.tips.map((t, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-green-500 font-bold mt-1">•</span>
            <p className="text-gray-700 text-sm">{t}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TipsCard;
