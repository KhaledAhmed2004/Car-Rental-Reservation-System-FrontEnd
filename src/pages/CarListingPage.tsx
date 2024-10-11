import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import ShowcaseCard from "../components/common/molecules/ShowcaseCard";
import { Radio, Slider, Switch, Drawer, Button } from "antd";
import { RxCross2 } from "react-icons/rx";
import { useGetAllCarsQuery } from "../redux/features/car/carApi";

// Constants for filter options
const carTypes = ["SUV", "Economy", "Luxury", "Electric"];
const colors = ["Black", "Blue", "Red", "White", "Gray", "Silver"];
const brands = ["BMW", "Audi", "Toyota", "Mercedes"];
const transmissions = ["Automatic", "Manual", "Semi-Automatic"];
const fuelTypes = ["Hybrid", "Diesel", "Electric", "Gasoline"];

const CarListingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [availableNow, setAvailableNow] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [selectedFuelType, setSelectedFuelType] = useState("");

  console.log(
    searchQuery,
    type,
    minPrice,
    maxPrice,
    availableNow,
    selectedBrands,
    selectedColors,
    selectedTransmission,
    selectedFuelType
  );

  const {
    data: cars,
    error,
    isLoading,
  } = useGetAllCarsQuery({
    searchQuery,
    type,
    minPrice,
    maxPrice,
    availableNow,
    selectedBrands,
    selectedColors,
    selectedTransmission,
    selectedFuelType,
  });

  // Filter out cars where isDeleted is true
  const filteredCars = cars?.data?.filter((car) => !car.isDeleted);
  // console.log("filter data", filteredCars);

  const handleForClear = () => {
    setSearchQuery("");
    setType([]);
    setMinPrice("");
    setMaxPrice("");
    setAvailableNow(false);
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedTransmission("");
    setSelectedFuelType("");
  };

  // State for controlling the drawer visibility
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Function to open the drawer
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 pt-4 px-2 lg:px-0">
      {/* Filter Drawer Button for small devices */}
      <div className="lg:hidden my-2">
        <Button type="primary" onClick={showDrawer}>
          Open Filters
        </Button>
      </div>

      {/* Drawer for Small Devices */}
      <Drawer
        title="Filter"
        placement="left"
        onClose={closeDrawer}
        open={drawerVisible}
        className="lg:hidden"
      >
        <div>
          {/* Filter Header */}
          <div className="flex justify-between mb-4">
            <p className="font-semibold text-lg">Filter</p>
            <div className="flex items-center gap-1 text-blue-600 font-medium">
              <button onClick={() => handleForClear()}>Reset all</button>
              <RxCross2 className="cursor-pointer" />
            </div>
          </div>
          {/* Search Input */}
          <div className="mt-4">
            <div className="relative flex items-center">
              <input
                className="p-2 rounded-lg w-full bg-gray-50 border-[1px] border-blue-500 outline-none"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2">
                <BiSearch className="text-xl" />
              </button>
            </div>
          </div>
          {/* Car Type Filter */}
          <div className="mt-4 font-medium">
            <p className="text-sm text-gray-600 font-semibold mb-2">Type</p>
            <div className="grid grid-cols-2 gap-y-2">
              {carTypes.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-5 w-5"
                    onChange={() => {
                      setType((prev) =>
                        prev.includes(option)
                          ? prev.filter((item) => item !== option)
                          : [...prev, option]
                      );
                    }}
                  />
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Price Range Slider */}
          <div className="mt-4">
            <p className="text-sm text-gray-600 font-semibold mb-2">
              Price Range
            </p>
            <Slider range defaultValue={[20, 50]} />
          </div>
          {/* Availability Switch */}
          <div className="flex gap-2 mt-4">
            <h3 className="text-sm text-gray-600 font-semibold mb-2">
              Available now only
            </h3>
            <Switch
              checked={availableNow}
              onChange={() => setAvailableNow(!availableNow)}
            />
          </div>
          {/* Color Filter */}
          <div className="mt-4 font-medium">
            <p className="text-sm text-gray-600 font-semibold mb-2">Color</p>
            <div className="grid grid-cols-3 gap-2">
              {colors.map((color, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <button
                    onClick={() =>
                      setSelectedColors((prev) =>
                        prev.includes(color)
                          ? prev.filter((c) => c !== color)
                          : [...prev, color]
                      )
                    }
                    className={`h-8 w-8 drop-shadow-xl bg-${color.toLowerCase()}-600 rounded-full`}
                  />
                  <p>{color}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Brand Filter */}
          <div className="mt-4 font-medium">
            <p className="text-sm text-gray-600 font-semibold mb-2">Brand</p>
            <div className="grid grid-cols-2 gap-y-2">
              {brands.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-5 w-5"
                    onChange={() => {
                      setSelectedBrands((prev) =>
                        prev.includes(option)
                          ? prev.filter((item) => item !== option)
                          : [...prev, option]
                      );
                    }}
                  />
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Transmission Type */}
          <div className="mt-4 font-medium">
            <p className="text-sm text-gray-600 font-semibold mb-2">
              Transmission
            </p>
            <Radio.Group
              onChange={(e) => setSelectedTransmission(e.target.value)}
            >
              <div className="grid grid-cols-2 gap-y-2">
                {transmissions.map((option, index) => (
                  <Radio key={index} value={option}>
                    {option}
                  </Radio>
                ))}
              </div>
            </Radio.Group>
          </div>
          {/* Fuel Type */}
          <div className="mt-4 font-medium">
            <p className="text-sm text-gray-600 font-semibold mb-2">
              Fuel Type
            </p>
            <Radio.Group onChange={(e) => setSelectedFuelType(e.target.value)}>
              <div className="grid grid-cols-2 gap-y-2">
                {fuelTypes.map((option, index) => (
                  <Radio key={index} value={option}>
                    {option}
                  </Radio>
                ))}
              </div>
            </Radio.Group>
          </div>
        </div>
      </Drawer>

      {/* Filter Section for larger devices */}
      <div className="hidden lg:block bg-gray-200 h-fit rounded-lg w-full lg:w-[40%] p-4 sticky top-20 lg:static">
        <div>
          {/* Filter Header */}
          <div className="flex justify-between mb-4">
            <p className="font-semibold text-lg">Filter</p>
            <div className="flex items-center gap-1 text-blue-600 font-medium">
              <button onClick={() => handleForClear()}>Reset all</button>
              <RxCross2 className="cursor-pointer" />
            </div>
          </div>
          {/* Search Input */}
          <div className="mt-4">
            <div className="relative flex items-center">
              <input
                className="p-2 rounded-lg w-full bg-gray-50 border-[1px] border-blue-500 outline-none"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2">
                <BiSearch className="text-xl" />
              </button>
            </div>
          </div>
          {/* Car Type Filter */}
          <div className="mt-4 font-medium">
            <p className="text-sm text-gray-600 font-semibold mb-2">Type</p>
            <div className="grid grid-cols-2 gap-y-2">
              {carTypes.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-5 w-5"
                    onChange={() => {
                      setType((prev) =>
                        prev.includes(option)
                          ? prev.filter((item) => item !== option)
                          : [...prev, option]
                      );
                    }}
                  />
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Price Range Slider */}

          <div className="mt-4">
            <p className="text-sm text-gray-600 font-semibold mb-2">
              Price Range
            </p>
            <Slider
              range
              min={0}
              max={200}
              defaultValue={[minPrice || 0, maxPrice || 200]} // Set the slider range
              onChange={(value) => {
                setMinPrice(value[0]);
                setMaxPrice(value[1]);
              }}
            />
            <div className="flex justify-between text-xs mt-1">
              <span>${minPrice || 0}</span>
              <span>${maxPrice || 200}</span>
            </div>
          </div>
          {/* Availability Switch */}
          <div className="flex gap-2 mt-4">
            <h3 className="text-sm text-gray-600 font-semibold mb-2">
              Available now only
            </h3>
            <Switch
              checked={availableNow}
              onChange={() => setAvailableNow(!availableNow)}
            />
          </div>

          {/* Color Filter */}
          <div className="mt-4 font-medium">
            <p className="text-sm text-gray-600 font-semibold mb-2">Color</p>
            <div className="grid grid-cols-3 gap-2">
              {colors.map((color, index) => {
                // Define hex color codes for each color
                const colorHex = {
                  Black: "#000000",
                  Blue: "#0000FF",
                  Red: "#FF0000",
                  White: "#FFFFFF",
                  Gray: "#808080",
                  Silver: "#C0C0C0",
                }[color]; // You can expand this with more colors if needed

                return (
                  <div key={index} className="flex gap-2 items-center">
                    <button
                      onClick={() =>
                        setSelectedColors((prev) =>
                          prev.includes(color)
                            ? prev.filter((c) => c !== color)
                            : [...prev, color]
                        )
                      }
                      className={`h-8 w-8 rounded-full shadow-lg ${
                        selectedColors.includes(color)
                          ? "ring-4 ring-gray-500"
                          : ""
                      }`}
                      style={{ backgroundColor: colorHex }}
                      // style={{
                      //   backgroundColor: colorHex, // Use hex code for the background color
                      //   height: "2rem",
                      //   width: "2rem",
                      //   borderRadius: "50%",
                      //   boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      // }}
                      // className={`drop-shadow-xl ${
                      //   selectedColors.includes(color)
                      //     ? "ring-4 ring-gray-900"
                      //     : ""
                      // }`}
                    />
                    <p>{color}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="mt-4 font-medium">
            <p className="text-sm text-gray-600 font-semibold mb-2">Brand</p>
            <div className="grid grid-cols-2 gap-y-2">
              {brands.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-5 w-5"
                    onChange={() => {
                      setSelectedBrands((prev) =>
                        prev.includes(option)
                          ? prev.filter((item) => item !== option)
                          : [...prev, option]
                      );
                    }}
                  />
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Transmission Type */}
          <div className="mt-4 font-medium">
            <p className="text-sm text-gray-600 font-semibold mb-2">
              Transmission
            </p>
            <Radio.Group
              onChange={(e) => setSelectedTransmission(e.target.value)}
            >
              <div className="grid grid-cols-2 gap-y-2">
                {transmissions.map((option, index) => (
                  <Radio key={index} value={option}>
                    {option}
                  </Radio>
                ))}
              </div>
            </Radio.Group>
          </div>
          {/* Fuel Type */}
          <div className="mt-4 font-medium">
            <p className="text-sm text-gray-600 font-semibold mb-2">
              Fuel Type
            </p>
            <Radio.Group onChange={(e) => setSelectedFuelType(e.target.value)}>
              <div className="grid grid-cols-2 gap-y-2">
                {fuelTypes.map((option, index) => (
                  <Radio key={index} value={option}>
                    {option}
                  </Radio>
                ))}
              </div>
            </Radio.Group>
          </div>
        </div>
      </div>

      {/* Car Showcase Section */}
      <div
        // className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-[60%]"
        className="w-full rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit"
      >
        {isLoading
          ? "Loading..."
          : filteredCars.map((car) => (
              <ShowcaseCard
                carId={car._id}
                key={car._id}
                brand={car.brand}
                model={car.model}
                status={car.status}
                mileage={car.mileage}
                fuelType={car.fuelType}
                pricePerHour={car.pricePerHour}
                carType={car.carType}
                rating={car.rating}
                doors={car.doors}
                luggageCapacity={car.luggageCapacity}
                seats={car.seats}
                transmission={car.transmission}
                image={car.images[0]}
              />
            ))}
      </div>
    </div>
  );
};

export default CarListingPage;
