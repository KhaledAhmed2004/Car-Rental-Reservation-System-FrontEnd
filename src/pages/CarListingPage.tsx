// import React, { useState } from "react";
// import { BiSearch } from "react-icons/bi";
// import ShowcaseCard from "../components/common/molecules/ShowcaseCard";
// import { Radio, Slider, Switch, Drawer, Button } from "antd";
// import { RxCross2 } from "react-icons/rx";
// import { useGetAllCarsQuery } from "../redux/features/car/carApi";

// // Constants for filter options
// const carTypes = ["SUV", "Economy", "Luxury", "Electric"];
// const colors = ["Black", "Blue", "Red", "White", "Gray", "Silver"];
// const brands = ["BMW", "Audi", "Toyota", "Mercedes"];
// const transmissions = ["Automatic", "Manual", "Semi-Automatic"];
// const fuelTypes = ["Hybrid", "Diesel", "Electric", "Petrol"];

// const CarListingPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [Type, setType] = useState("All");
//   const [minPrice, setMinprice] = useState<number | "">("");
//   const [maxPrice, setMaxPrice] = useState<number | "">("");
//   const {
//     data: cars,
//     error,
//     isLoading,
//   } = useGetAllCarsQuery({ searchQuery, Type, minPrice, maxPrice });
//   // console.log(cars?.data);
//   // cars?.data?.map((item) => {
//   //   console.log(item.images[0]);
//   // });
//   // State for controlling the drawer visibility
//   const [drawerVisible, setDrawerVisible] = useState(false);

//   // Function to open the drawer
//   const showDrawer = () => {
//     setDrawerVisible(true);
//   };

//   // Function to close the drawer
//   const closeDrawer = () => {
//     setDrawerVisible(false);
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-4 pt-4 px-2 lg:px-0">
//       {/* Filter Drawer Button for small devices */}
//       <div className="lg:hidden my-2">
//         <Button type="primary" onClick={showDrawer}>
//           Open Filters
//         </Button>
//       </div>

//       {/* Drawer for Small Devices */}
//       <Drawer
//         title="Filter"
//         placement="left"
//         onClose={closeDrawer}
//         // visible={drawerVisible}
//         open={drawerVisible}
//         className="lg:hidden"
//       >
//         <FilterSection />
//       </Drawer>

//       {/* Filter Section for larger devices */}
//       <div className="hidden lg:block bg-gray-200 h-fit rounded-lg w-full lg:w-[40%] p-4 sticky top-20 lg:static">
//         <FilterSection />
//       </div>

//       {/* Car Showcase Section */}
//       <div className="w-full rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
//         {cars?.data.map((car) => (
//           <ShowcaseCard
//             carId={car._id}
//             key={car._id}
//             brand={car.brand}
//             model={car.model}
//             status={car.status}
//             mileage={car.mileage}
//             fuelType={car.fuelType}
//             pricePerHour={car.pricePerHour}
//             carType={car.carType}
//             rating={car.rating}
//             doors={car.doors}
//             luggageCapacity={car.luggageCapacity}
//             seats={car.seats}
//             transmission={car.transmission}
//             image={car.images[0]}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Extracted FilterSection component
// const FilterSection = () => (
//   <div>
//     {/* Filter Header */}
//     <div className="flex justify-between mb-4">
//       <p className="font-semibold text-lg">Filter</p>
//       <div className="flex items-center gap-1 text-blue-600 font-medium">
//         <button>Reset all</button>
//         <RxCross2 className="cursor-pointer" />
//       </div>
//     </div>
//     {/* Search Input */}
//     <div className="mt-4">
//       <div className="relative flex items-center">
//         <input
//           className="p-2 rounded-lg w-full bg-gray-50 border-[1px] border-blue-500 outline-none"
//           type="text"
//           placeholder="Search..."
//           // value={searchQuery}
//           // onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button className="absolute right-2">
//           <BiSearch className="text-xl" />
//         </button>
//       </div>
//     </div>
//     {/* Car Type Filter */}
//     <FilterCheckboxGroup title="Type" options={carTypes} />
//     {/* Price Range Slider */}
//     <div className="mt-4">
//       <p className="text-sm text-gray-600 font-semibold mb-2">Price Range</p>
//       <Slider range defaultValue={[20, 50]} />
//     </div>
//     {/* Availability Switch */}
//     <div className="flex gap-2 mt-4">
//       <h3 className="text-sm text-gray-600 font-semibold mb-2">
//         Available now only
//       </h3>
//       <Switch />
//     </div>
//     {/* Color Filter */}
//     <FilterColorGroup />
//     {/* Brand Filter */}
//     <FilterCheckboxGroup title="Brand" options={brands} />
//     {/* Transmission Type */}
//     <FilterRadioGroup title="Transmission" options={transmissions} />
//     {/* Fuel Type */}
//     <FilterRadioGroup title="Fuel Type" options={fuelTypes} />
//   </div>
// );

// // Reusable checkbox group component
// const FilterCheckboxGroup = ({ title, options }) => (
//   <div className="mt-4 font-medium">
//     <p className="text-sm text-gray-600 font-semibold mb-2">{title}</p>
//     <div className="grid grid-cols-2 gap-y-2">
//       {options.map((option, index) => (
//         <div key={index} className="flex items-center gap-2">
//           <input type="checkbox" className="h-5 w-5 bg-red-600" />
//           <span>{option}</span>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // Reusable color group component
// const FilterColorGroup = () => (
//   <div className="mt-4 font-medium">
//     <p className="text-sm text-gray-600 font-semibold mb-2">Color</p>
//     <div className="grid grid-cols-3 gap-2">
//       {colors.map((color, index) => (
//         <div key={index} className="flex gap-2 items-center">
//           <button
//             className={`h-8 w-8 drop-shadow-xl bg-${color.toLowerCase()}-600 rounded-full`}
//           />
//           <p>{color}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // Reusable radio group component
// const FilterRadioGroup = ({ title, options }) => (
//   <div className="mt-4 font-medium">
//     <p className="text-sm text-gray-600 font-semibold mb-2">{title}</p>
//     <Radio.Group>
//       <div>
//         {options.map((option, index) => (
//           <Radio key={index} value={index + 1} className="text-lg">
//             {option}
//           </Radio>
//         ))}
//       </div>
//     </Radio.Group>
//   </div>
// );

// export default CarListingPage;

// import React, { useState } from "react";
// import { BiSearch } from "react-icons/bi";
// import ShowcaseCard from "../components/common/molecules/ShowcaseCard";
// import { Radio, Slider, Switch, Drawer, Button } from "antd";
// import { RxCross2 } from "react-icons/rx";
// import { useGetAllCarsQuery } from "../redux/features/car/carApi";

// // Constants for filter options
// const carTypes = ["SUV", "Economy", "Luxury", "Electric"];
// const colors = ["Black", "Blue", "Red", "White", "Gray", "Silver"];
// const brands = ["BMW", "Audi", "Toyota", "Mercedes"];
// const transmissions = ["Automatic", "Manual", "Semi-Automatic"];
// const fuelTypes = ["Hybrid", "Diesel", "Electric", "Petrol"];

// const CarListingPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [type, setType] = useState("All");
//   const [minPrice, setMinPrice] = useState<number | "">("");
//   const [maxPrice, setMaxPrice] = useState<number | "">("");
//   const [availableNow, setAvailableNow] = useState(false);
//   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
//   const [selectedColors, setSelectedColors] = useState<string[]>([]);
//   const [selectedTransmission, setSelectedTransmission] = useState("");
//   const [selectedFuelType, setSelectedFuelType] = useState("");

//   console.log(
//     searchQuery,
//     type,
//     minPrice,
//     maxPrice,
//     availableNow,
//     selectedBrands,
//     selectedColors,
//     selectedTransmission,
//     selectedFuelType
//   );
//   const {
//     data: cars,
//     error,
//     isLoading,
//   } = useGetAllCarsQuery({
//     searchQuery,
//     type,
//     minPrice,
//     maxPrice,
//     availableNow,
//     selectedBrands,
//     selectedColors,
//     selectedTransmission,
//     selectedFuelType,
//   });

//   // State for controlling the drawer visibility
//   const [drawerVisible, setDrawerVisible] = useState(false);

//   // Function to open the drawer
//   const showDrawer = () => {
//     setDrawerVisible(true);
//   };

//   // Function to close the drawer
//   const closeDrawer = () => {
//     setDrawerVisible(false);
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-4 pt-4 px-2 lg:px-0">
//       {/* Filter Drawer Button for small devices */}
//       <div className="lg:hidden my-2">
//         <Button type="primary" onClick={showDrawer}>
//           Open Filters
//         </Button>
//       </div>

//       {/* Drawer for Small Devices */}
//       <Drawer
//         title="Filter"
//         placement="left"
//         onClose={closeDrawer}
//         open={drawerVisible}
//         className="lg:hidden"
//       >
//         <FilterSection
//           searchQuery={searchQuery}
//           setSearchQuery={setSearchQuery}
//           availableNow={availableNow}
//           setAvailableNow={setAvailableNow}
//           setSelectedBrands={setSelectedBrands}
//           setSelectedColors={setSelectedColors}
//           setSelectedTransmission={setSelectedTransmission}
//           setSelectedFuelType={setSelectedFuelType}
//           setType={setType}
//         />
//       </Drawer>

//       {/* Filter Section for larger devices */}
//       <div className="hidden lg:block bg-gray-200 h-fit rounded-lg w-full lg:w-[40%] p-4 sticky top-20 lg:static">
//         <FilterSection
//           searchQuery={searchQuery}
//           setSearchQuery={setSearchQuery}
//           availableNow={availableNow}
//           setAvailableNow={setAvailableNow}
//           setSelectedBrands={setSelectedBrands}
//           setSelectedColors={setSelectedColors}
//           setSelectedTransmission={setSelectedTransmission}
//           setSelectedFuelType={setSelectedFuelType}
//           setType={setType}
//         />
//       </div>

//       {/* Car Showcase Section */}
//       <div className="w-full rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
//         {cars?.data?.map((car) => (
//           <ShowcaseCard
//             carId={car._id}
//             key={car._id}
//             brand={car.brand}
//             model={car.model}
//             status={car.status}
//             mileage={car.mileage}
//             fuelType={car.fuelType}
//             pricePerHour={car.pricePerHour}
//             carType={car.carType}
//             rating={car.rating}
//             doors={car.doors}
//             luggageCapacity={car.luggageCapacity}
//             seats={car.seats}
//             transmission={car.transmission}
//             image={car.images[0]}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Extracted FilterSection component
// const FilterSection = ({
//   searchQuery,
//   setSearchQuery,
//   availableNow,
//   setAvailableNow,
//   setSelectedBrands,
//   setSelectedColors,
//   setSelectedTransmission,
//   setSelectedFuelType,
//   setType,
// }) => (
//   <div>
//     {/* Filter Header */}
//     <div className="flex justify-between mb-4">
//       <p className="font-semibold text-lg">Filter</p>
//       <div className="flex items-center gap-1 text-blue-600 font-medium">
//         <button>Reset all</button>
//         <RxCross2 className="cursor-pointer" />
//       </div>
//     </div>
//     {/* Search Input */}
//     <div className="mt-4">
//       <div className="relative flex items-center">
//         <input
//           className="p-2 rounded-lg w-full bg-gray-50 border-[1px] border-blue-500 outline-none"
//           type="text"
//           placeholder="Search..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button className="absolute right-2">
//           <BiSearch className="text-xl" />
//         </button>
//       </div>
//     </div>
//     {/* Car Type Filter */}
//     {/* <FilterCheckboxGroup title="Type" options={carTypes} /> */}
//     <FilterCheckboxGroup
//       title="Type"
//       options={carTypes}
//       setSelectedBrands={setType}
//     />
//     {/* Price Range Slider */}
//     <div className="mt-4">
//       <p className="text-sm text-gray-600 font-semibold mb-2">Price Range</p>
//       <Slider range defaultValue={[20, 50]} />
//     </div>
//     {/* Availability Switch */}
//     <div className="flex gap-2 mt-4">
//       <h3 className="text-sm text-gray-600 font-semibold mb-2">
//         Available now only
//       </h3>
//       <Switch
//         checked={availableNow}
//         onChange={() => setAvailableNow(!availableNow)}
//       />
//     </div>
//     {/* Color Filter */}
//     <FilterColorGroup setSelectedColors={setSelectedColors} />
//     {/* Brand Filter */}
//     <FilterCheckboxGroup title="Brand" options={brands} />
//     {/* Transmission Type */}
//     <FilterRadioGroup
//       title="Transmission"
//       options={transmissions}
//       onChange={(value) => setSelectedTransmission(value)}
//     />
//     {/* Fuel Type */}
//     <FilterRadioGroup
//       title="Fuel Type"
//       options={fuelTypes}
//       onChange={(value) => setSelectedFuelType(value)}
//     />
//   </div>
// );

// // Reusable checkbox group component
// // const FilterCheckboxGroup = ({ title, options, setSelectedBrands }) => (
// //   <div className="mt-4 font-medium">
// //     <p className="text-sm text-gray-600 font-semibold mb-2">{title}</p>
// //     <div className="grid grid-cols-2 gap-y-2">
// //       {options.map((option, index) => (
// //         <div key={index} className="flex items-center gap-2">
// //           <input type="checkbox" className="h-5 w-5 bg-red-600" />
// //           <span>{option}</span>
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // );
// const FilterCheckboxGroup = ({ title, options, setSelectedBrands }) => {
//   const handleCheckboxChange = (option) => {
//     setSelectedBrands((prev) =>
//       prev.includes(option)
//         ? prev.filter((item) => item !== option)
//         : [...prev, option]
//     );
//   };

//   return (
//     <div className="mt-4 font-medium">
//       <p className="text-sm text-gray-600 font-semibold mb-2">{title}</p>
//       <div className="grid grid-cols-2 gap-y-2">
//         {options.map((option, index) => (
//           <div key={index} className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               className="h-5 w-5"
//               onChange={() => handleCheckboxChange(option)}
//             />
//             <span>{option}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Reusable color group component
// const FilterColorGroup = ({ setSelectedColors }) => (
//   <div className="mt-4 font-medium">
//     <p className="text-sm text-gray-600 font-semibold mb-2">Color</p>
//     <div className="grid grid-cols-3 gap-2">
//       {colors.map((color, index) => (
//         <div key={index} className="flex gap-2 items-center">
//           <button
//             onClick={() =>
//               setSelectedColors((prev) =>
//                 prev.includes(color)
//                   ? prev.filter((c) => c !== color)
//                   : [...prev, color]
//               )
//             }
//             className={`h-8 w-8 drop-shadow-xl bg-${color.toLowerCase()}-600 rounded-full`}
//           />
//           <p>{color}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // Reusable radio group component
// const FilterRadioGroup = ({ title, options, onChange }) => (
//   <div className="mt-4 font-medium">
//     <p className="text-sm text-gray-600 font-semibold mb-2">{title}</p>
//     <Radio.Group onChange={(e) => onChange(e.target.value)}>
//       <div className="grid grid-cols-2 gap-y-2">
//         {options.map((option, index) => (
//           <Radio key={index} value={option}>
//             {option}
//           </Radio>
//         ))}
//       </div>
//     </Radio.Group>
//   </div>
// );

// export default CarListingPage;

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
      </div>

      {/* Car Showcase Section */}
      <div
        // className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-[60%]"
        className="w-full rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit"
      >
        {isLoading
          ? "Loading..."
          : cars?.data?.map((car) => (
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
