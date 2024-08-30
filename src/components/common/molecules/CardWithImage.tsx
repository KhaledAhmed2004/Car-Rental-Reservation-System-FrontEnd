import React from "react";

const CardWithImage = () => {
  return (
    <div className="bg-gray-200 rounded-lg w-fit items-center justify-center text-center p-10 space-y-2 flex flex-col  ">
      <div className="h-20 w-20 bg-gray-400 rounded-lg"></div>
      <h2 className="font-semibold">Fast & Easy Booking</h2>
      <p>
        Book your car online or offline. Follow the easy process to book you car
        online. Or just call us any time from anywhere.
      </p>
    </div>
  );
};

export default CardWithImage;
