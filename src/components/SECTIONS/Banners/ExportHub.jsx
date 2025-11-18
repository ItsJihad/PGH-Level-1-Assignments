import React from "react";
import Card from "../../singleComponents/Card";

function ExportHub() {
  return (
    <div>
      <div className="  flex items-center justify-center py-10">
        <div className="text-center">
          <h2 className="font-[montserrat] text-3xl font-bold p-2">
            Why Choose Import Export Hub
          </h2>
          <h2 className="font-[montserrat]">
            The most trusted platform for global B2B trade
          </h2>
        </div>
      </div>

      <div className=" gap-5 sm: grid sm:flex  items-center justify-center ">
        <div className="bg-base-100    shadow-sm    shadow-gray-100 dark:shadow-gray-100 hover:shadow-blue-500/20 dark:hover:shadow-blue-900/40 transition-all duration-500 rounded-2xl  h-50 w-90 sm:w-70  hover:border-white/40 dark:hover:border-white/20  ">
          <div className="text-center p-4 ">
            <img className="mx-auto" src="/assets/icon2.png" />
            <h1 className="text-2xl ">Global Reach</h1>
            <h1 className="  py-1">
              Connect with suppliers from over 150 countries worldwide
            </h1>
          </div>
        </div>
        <div className="bg-base-100  shadow-sm backdrop-blur-xs   shadow-grey-100 dark:shadow-blue-100 hover:shadow-blue-500/20 dark:hover:shadow-blue-900/40 transition-all duration-500 rounded-2xl  h-50 w-90 sm:w-70 hover:border-white/40 dark:hover:border-white/20  ">
          <div className="text-center p-4 ">
            <img className="mx-auto" src="/assets/icon3.png" />
            <h1 className="text-2xl ">Market Insights</h1>
            <h1 className="  py-1">
              Real-time market data and trends to make informed decisions
            </h1>
          </div>
        </div>
        <div className="bg-base-100  shadow-sm backdrop-blur-xs   shadow-grey-100 dark:shadow-blue-100 hover:shadow-blue-500/20 dark:hover:shadow-blue-900/40 transition-all duration-500 rounded-2xl  h-50 w-90 sm:w-70 hover:border-white/40 dark:hover:border-white/20  ">
          <div className="text-center p-4 ">
            <img className="mx-auto" src="/assets/icon4.png" />
            <h1 className="text-2xl ">Verified Suppliers</h1>
            <h1 className="  py-1">
              Premium products with guaranteed quality certifications
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 py-8 md:grid-cols-2 lg:grid-cols-3 ">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default ExportHub;
