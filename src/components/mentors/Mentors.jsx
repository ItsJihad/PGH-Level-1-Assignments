import React from 'react'
import MentorCards from '../all_Cards/MentorCards'

function Mentors({mentors}) {
    
  return (
    <div>
      <div className="px-8 pt-20 mb-12 bg-white">

  <div className="text-center mb-12">
    <h2 className="text-4xl text-gray-900 font-bold">Meet Our Green Experts</h2>
    <p className="text-gray-600 text-lg mt-2">
      Get personalized advice from certified specialists
    </p>
  </div>

 
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

    {mentors.map((expert) => ( <MentorCards key={expert.id} expert={expert}></MentorCards>))}
  </div>
</div>

    </div>
  )
}

export default Mentors
