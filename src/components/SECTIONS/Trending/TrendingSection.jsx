import React from "react";
import Card from "../../singleComponents/Card";

function TrendingSection() {
  return (
    <div>
      <h2 className="font-[montserrat] text-4xl font-bold p-3">Trending Products</h2>
      <div className="grid grid-cols-4  font-[montserrat]  px-3 mb-4 ">
        <div className="sm:flex col-span-4 justify-between  items-center  ">
          <h3 className="text-sm sm:text-xl  ">
            Discover our newest additions from verified exporters
          </h3>
          <div className="flex justify-center-safe sm:justify-end py-3  ">
            <button className="btn btn-outline btn-primary w-80  ">View All</button>
          </div>
        </div>
      </div>

      <div>
        <div className="grid gap-4 sm:gap-2 sm:grid-cols-3">
          <div className=" grid gap-4 sm:gap-2 sm:col-span-2 sm:p-4 ">
            <Card></Card>
            <div className=" grid sm:grid-cols-3 gap-4 sm:gap-2 sm:p-4  ">
              <div>
                <Card></Card>
              </div>
              <div>
                <Card></Card>
              </div>
              <div>
                <Card></Card>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-2 ">
            <div>
              <Card></Card>
            </div>
            <div>
              <Card></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingSection;
