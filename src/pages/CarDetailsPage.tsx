import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "react-medium-image-zoom/dist/styles.css";
import { IoCarSportOutline } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";
import { useGetCarByIdQuery } from "./../redux/features/car/carApi.ts";
import { useAppDispatch } from "../redux/hooks.ts";
import { setSelectedCar } from "../redux/features/car/carSlice.ts";

const CarDetailsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: carResponse, isLoading, error } = useGetCarByIdQuery(id);

  // Extract the car data from the response
  const car = carResponse?.data;
  console.log(car);

  const [insurance, setInsurance] = useState(false);
  const [gps, setGPS] = useState(false);
  const [childSeat, setChildSeat] = useState(false);

  // State to manage the selected image for the gallery
  const [selectedImage, setSelectedImage] = useState(car?.images?.[0]);

  const handleBooking = () => {
    dispatch(setSelectedCar(car));
    navigate("/booking"); // Replace '/booking' with your booking route
  };

  // Update the selected image when car images change
  React.useEffect(() => {
    if (car?.images?.length) {
      setSelectedImage(car.images[0]);
    }
  }, [car]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading car details.</div>;
  }

  if (!car) {
    return <div>No car details found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Gallery */}
        <div className="md:w-1/2 overflow-hidden">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] overflow-hidden">
            <img
              src={selectedImage}
              alt="Selected Car"
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110 rounded-lg overflow-hidden"
            />
          </div>
          <div className="flex mt-4 space-x-2 overflow-x-auto">
            {car.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Car ${index}`}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover cursor-pointer border-2 border-gray-300 hover:border-blue-500 transition duration-300 hover:scale-105 transform"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Car Details */}
        <div className="md:w-1/2 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">
              {car.brand} {car.model}
            </h2>
            <div className="flex items-center gap-1">
              <TbCurrencyTaka className="text-2xl" />
              <p className="font-semibold">Price :</p>
              {car.pricePerHour}
            </div>
            <div className="flex items-center gap-1">
              <IoCarSportOutline className="text-2xl" />
              <p className="font-semibold">Name :</p>
              {car.brand} {car.model}
            </div>
            <div className="flex items-center gap-1">
              <p className="font-semibold">Availability :</p>
              <span className="text-green-800 font-semibold">{car.status}</span>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-semibold">Color :</p>
              <span className="text-green-800 font-semibold">{car.color}</span>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-semibold">Transmission :</p>
              <span className="text-green-800 font-semibold">
                {car.transmission}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-semibold">Fuel Type :</p>
              <span className="text-green-800 font-semibold">
                {car.fuelType}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-semibold">Bags :</p>
              <span className="text-green-800 font-semibold">
                {car.luggageCapacity}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-semibold">Door :</p>
              <span className="text-green-800 font-semibold">{car.doors}</span>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-semibold">Mileage :</p>
              <span className="text-green-800 font-semibold">
                {car.mileage}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-semibold">Capacity :</p>
              <span className="text-green-800 font-semibold">{car.seats}</span>
            </div>

            <h3 className="text-lg font-semibold mt-4">Features:</h3>
            <ul className="list-disc list-inside space-y-1">
              {car.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-2">Additional Features</h3>
            <div className="space-y-2">
              {[
                {
                  label: "Insurance",
                  checked: insurance,
                  setter: setInsurance,
                },
                { label: "GPS", checked: gps, setter: setGPS },
                {
                  label: "Child Seat",
                  checked: childSeat,
                  setter: setChildSeat,
                },
              ].map((option, index) => (
                <label key={index} className="block flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={option.checked}
                    onChange={() => option.setter(!option.checked)}
                    className="mr-2"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          {/* Booking Button */}
          <button
            onClick={handleBooking}
            className="bg-blue-500 text-white py-2 px-4 w-full rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Book Now
          </button>

          {/* Customer Reviews */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
            <div className="space-y-2">
              {car.reviews?.map((review, index) => (
                <div key={index} className="border-b border-gray-200 py-2">
                  <p className="font-medium">{review.user}</p>
                  <p>{review.review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
