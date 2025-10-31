import React from "react";

function Herosec() {
  return (
    <section className="hero min-h-[90vh] px-6 md:px-10 py-10 bg-base-100">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
        
        {/* Image */}
        <img
          src="/assets/plant.png"
          alt="Beautiful indoor plant"
          className="w-4/5 sm:w-1/3 md:w-1/2 lg:w-[420px] rounded-2xl shadow-2xl object-contain"
        />

        {/* Text content */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-gray-900">
            Nurture Your Space with <span className="text-green-600">Beautiful Plants</span>
          </h1>

          <p className="py-5 text-gray-600 text-base sm:text-lg">
            Discover the perfect indoor plants for your home, learn expert care tips, 
            and book personalized consultations to create your green sanctuary.
          </p>

          <button className="btn bg-green-600 hover:bg-green-700 text-white px-8 mt-2">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Herosec;
