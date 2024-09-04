import React from "react";

const AboutCompanySection = () => {
  return (
    <div className="flex gap-4">
      <div className="flex-1 bg-gray-400 rounded-lg"></div>
      <div className="flex-1">
        <h2>RENT</h2>
        <h2 className="font-semibold text-3xl">
          We Are More Than A Car Rental Company
        </h2>
        <p>
          Car repair quisque sodales dui ut varius vestibulum drana tortor
          turpis porttiton tellus eu euismod nisl massa nutodio in the miss
          volume place urna lacinia eros nunta urna mauris vehicula rutrum in
          the miss on volume interdum.
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-16 bg-gray-400 h-16 rounded-lg"></div>
            <h2 className="text-xl font-semibold">
              Our customers are our top priority
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-16 bg-gray-400 h-16 rounded-lg"></div>
            <h2 className="text-xl font-semibold">
              Quality is at the heart of everything we do
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-16 bg-gray-400 h-16 rounded-lg"></div>
            <h2 className="text-xl font-semibold">
              every vehicle leaves care looking its absolute best
            </h2>
          </div>
         </div>
      </div>
    </div>
  );
};

export default AboutCompanySection;
