import React from "react";
import { Link, useLoaderData, } from "react-router";
import MentorCards from "../../components/all_Cards/MentorCards";

function Services() {
  const mentors = useLoaderData();
  
  return (
    <div>
      
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center text-green-700">
          Our Services
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mentors.map((expert) => ( <MentorCards key={expert.id} expert={expert}></MentorCards>))}
        </div>
      </div>
    </div>
  );
}

export default Services;
