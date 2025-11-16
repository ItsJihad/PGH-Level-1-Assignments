import React from "react";

function PopularSection() {
  return (
    <div>
      <div className="text-center">
        <h2 className="font-[montserrat] text-3xl font-bold">
          Popular Categories
        </h2>
        <h2 className="font-[montserrat]">
          Explore thousands of verified products
        </h2>
      </div>

      <div className=" gap-5 grid-cols-2 sm:grid-cols-1  sm: grid sm:flex items-center justify-center  py-4 ">
        <div className="bg-base-100  shadow-sm backdrop-blur-xs shadow-grey-100 dark:shadow-blue-100 hover:shadow-blue-500/20 dark:hover:shadow-blue-900/40 transition-all duration-500 rounded-xl   hover:border-white/40 dark:hover:border-white/20 sm:w-80 ">
          <div className="text-center p-4 ">
            <img className="mx-auto  " src="/assets/l1.png" />
            <h1 className="text-2xl ">Electronics</h1>
            <h1 className=" font-[montserrat] font-light py-1">
              2,400+
            </h1>
          </div>
        </div>
        <div className="bg-base-100  shadow-sm backdrop-blur-xs  shadow-grey-100 dark:shadow-blue-100 hover:shadow-blue-500/20 dark:hover:shadow-blue-900/40 transition-all duration-500 rounded-xl  hover:border-white/40 dark:hover:border-white/20 sm:w-80 ">
          <div className="text-center p-4 ">
            <img className="mx-auto " src="/assets/l2.png" />
            <h1 className="text-2xl ">Textiles</h1>
            <h1 className=" font-[montserrat] font-light py-1">
              2,200+
            </h1>
          </div>
        </div>
        <div className="bg-base-100  shadow-sm backdrop-blur-xs  shadow-grey-100 dark:shadow-blue-100 hover:shadow-blue-500/20 dark:hover:shadow-blue-900/40 transition-all duration-500 rounded-xl  hover:border-white/40 dark:hover:border-white/20 sm:w-80 ">
          <div className="text-center p-4 ">
            <img className="mx-auto " src="/assets/l3.png" />
            <h1 className="text-2xl ">Food</h1>
            <h1 className=" font-[montserrat] font-light py-1">
              900+
            </h1>
          </div>
        </div>
        <div className="bg-base-100  shadow-sm backdrop-blur-xs  shadow-grey-100 dark:shadow-blue-100 hover:shadow-blue-500/20 dark:hover:shadow-blue-900/40 transition-all duration-500 rounded-xl  hover:border-white/40 dark:hover:border-white/20 sm:w-80 ">
          <div className="text-center p-4 ">
            <img className="mx-auto " src="/assets/l4.png" />
            <h1 className="text-2xl ">Industrial Machinery</h1>
            <h1 className=" font-[montserrat] font-light py-1">
              3,400+
            </h1>
          </div>
        </div>
        <div className="bg-base-100  shadow-sm backdrop-blur-xs  shadow-grey-100 dark:shadow-blue-100 hover:shadow-blue-500/20 dark:hover:shadow-blue-900/40 transition-all duration-500 rounded-xl  hover:border-white/40 dark:hover:border-white/20 sm:w-80 ">
          <div className="text-center p-4  ">
            <img className="mx-auto " src="/assets/l5.png" />
            <h1 className="text-2xl ">Automotive Parts</h1>
            <h1 className=" font-[montserrat] font-light py-1">
              400+
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularSection;
