import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Typography,
  Row,
  Col,
  message,
  Divider,
  List,
  Image,
  Modal,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useAppSelector } from "../redux/hooks";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { TbCurrencyTaka, TbEngine } from "react-icons/tb";
import PrimaryButton from "../components/common/atoms/PrimaryButton";
import { IoCarSportOutline, IoSpeedometerOutline } from "react-icons/io5";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { MdOutlineLuggage } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { useCreateBookingMutation } from "../redux/features/booking/bookingApi";
import { useForm } from "react-hook-form";
import { useGetAllCarsQuery } from "../redux/features/car/carApi";
import { user } from "../redux/features/auth/authSlice";

const { Title, Text } = Typography;

const BookingPage = () => {
  // Options for additional features like GPS, Child Seat, and Insurance
  const additionalFeaturesOptions = [
    { id: "gps", label: "GPS" },
    { id: "childSeat", label: "Child Seat" },
    { id: "insurance", label: "Insurance" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Mutation hook for creating a booking
  const [createBooking, { isSuccess, error }] = useCreateBookingMutation();

  // Selecting the car details from the Redux store
  const selectedCarFromViewDetiels = useAppSelector(
    (state) => state.car.selectedCar
  );

  // Local state management
  const [type, setType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [filteredCars, setFilteredCars] = useState([]);
  const [additionalOptions, setAdditionalOptions] = useState({
    gps: false,
    childSeat: false,
  });

  // Fetching car data based on selected type
  const { data: cars } = useGetAllCarsQuery({ type });

  // Effect to update selected car when it changes in the Redux store
  useEffect(() => {
    if (selectedCarFromViewDetiels) {
      setSelectedCar(selectedCarFromViewDetiels);
    }
  }, [selectedCarFromViewDetiels]);

  // Handler for the "Book Now" button
  const handleBookNow = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };
  const [bookingData, setBookingData] = useState("");

  const handleModalOk = async (data) => {
    const { nidOrPassport, drivingLicense, gps, childSeat } = data;
    // Get the current date in YYYY-MM-DD format
    const today = new Date();
    const currentDate = today.toISOString().split("T")[0]; // Format as YYYY-MM-DD

    // Get current time in HH:mm format
    const currentTime = today.toTimeString().split(" ")[0].substring(0, 5); // Format as HH:mm

    // Combine current date and startTime into a single string
    const dateTimeString = `${currentDate}T${currentTime}:00`; // Add seconds for complete ISO format

    setBookingData({
      // userId: "66e9931e666dc64d5068f950",
      // endTime: null,
      // totalCost: 0,
      date: currentDate, // Automatically provided date
      carId: selectedCar?._id,
      startTime: currentTime,
      nidOrPassport,
      drivingLicense,
      additionalOptions: {
        gps,
        childSeat,
      },
    });
    setIsBookingConfirmed(true);
    setIsModalOpen(false);
    setIsConfirmationModalOpen(true);
  };

  // Function to close the booking modal
  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  // Function to close the confirmation modal and show success message
  const handleConfirmationModalClose = async () => {
    setIsConfirmationModalOpen(false);
    console.log(bookingData);
    await createBooking(bookingData);
    message.success("Booking confirmed! Enjoy your ride!");
  };

  // Fetching car data based on selected type, with skip if type is not set
  const { data, isFetching } = useGetAllCarsQuery({ type }, { skip: !type });

  // Function to handle search by car type
  const handleSearch = (data) => {
    setType(data.type);
  };
  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen">
      {/* Search Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <Title level={4} className="text-green-600 mb-4 text-center">
          Search for Cars
        </Title>
        <form onSubmit={handleSubmit(handleSearch)} className="space-y-4">
          <Row gutter={16}>
            <Col span={12}>
              <div>
                <label>Pick-Up Location</label>
                <input
                  {...register("pickupLocation", {
                    required: "Pick-Up Location is required",
                  })}
                  placeholder="Enter location"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.pickupLocation && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.pickupLocation.message}
                  </p>
                )}
              </div>
            </Col>
            <Col span={12}>
              <div>
                <label>Drop-Off Location</label>
                <input
                  {...register("dropOffLocation", {
                    required: "Drop-Off Location is required",
                  })}
                  placeholder="Enter location"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.dropOffLocation && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors?.dropOffLocation?.message}
                  </p>
                )}
              </div>
            </Col>
          </Row>
          <div>
            <label>Car Type</label>
            <select
              {...register("type", { required: "Car Type is required" })}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select car type</option>
              <option value="SUV">SUV</option>
              <option value="sedan">Sedan</option>
              <option value="hatchback">Hatchback</option>
            </select>
            {errors.carType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.carType.message}
              </p>
            )}
          </div>
          <div>
            <label>Additional Features</label>
            <div className="space-y-2">
              {additionalFeaturesOptions.map((feature) => (
                <div key={feature.id}>
                  <label>
                    <input
                      type="checkbox"
                      value={feature.id}
                      {...register("additionalFeatures")}
                    />
                    {feature.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
            Search
          </Button>
        </form>
      </div>

      {/* If there's a selected car from Redux, show it as a default */}
      {selectedCar && <CarCard car={selectedCar} onBookNow={handleBookNow} />}

      {/* Search Results */}
      {bookingDetails && (
        <div>
          <Title level={4} className="text-green-600 mb-4">
            Available Cars
          </Title>
          <Row gutter={16}>
            {bookingDetails.map((car) => (
              <Col span={12} md={8} key={car.id}>
                <Card
                  cover={<Image alt="Car" src={car.image} />}
                  actions={[
                    <Button type="primary" onClick={() => handleBookNow(car)}>
                      Book Now
                    </Button>,
                  ]}
                >
                  <Card.Meta
                    title={`$${car.price} / day`}
                    description={car.description}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}

      {/* Booking Modal */}
      {selectedCar && (
        <Modal
          title="Booking Form"
          open={isModalOpen}
          onCancel={handleModalCancel}
          footer={null}
        >
          <form
            onSubmit={handleSubmit(handleModalOk)}
            className="bg-white p-6 space-y-4"
          >
            <div>
              <input
                {...register("nidOrPassport", { required: true })}
                placeholder="Enter your NID or Passport Number"
                className="ant-input border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.nidOrPassport && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div>
              <input
                {...register("drivingLicense", { required: true })}
                placeholder="Enter your Driving License"
                className="ant-input border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.drivingLicense && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Options
              </label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register("gps")}
                  className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <span className="text-sm">GPS</span>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  {...register("childSeat")}
                  className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <span className="text-sm">Child Seat</span>
              </div>
            </div>

            <Button type="primary" htmlType="submit" className="w-full">
              Go Next
            </Button>
          </form>
        </Modal>
      )}
      {/* Display cars */}
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        cars && (
          <div className="grid grid-cols-3 gap-2 ">
            {data?.data?.map((car) => (
              <CarCard key={car._id} car={car} onBookNow={handleBookNow} />
            ))}
          </div>
        )
      )}

      {/* Booking Confirmation Modal */}
      <Modal
        title="Booking Confirmed!"
        open={isConfirmationModalOpen}
        onOk={handleConfirmationModalClose}
        onCancel={handleConfirmationModalClose}
        footer={null}
        className="custom-modal" // Optional: Add a custom class for additional styling
      >
        <div className="bg-white p- rounded-lg">
          <Title level={4} className="text-green-600 text-center mb-4">
            Booking Details
          </Title>

          {selectedCar && (
            <Card
              cover={
                <Image
                  alt="Selected Car"
                  src={selectedCar.images[0]}
                  className="rounded-lg"
                />
              }
              className="mb-4"
            >
              <div className="p-4 space-y-2">
                <h2 className="text-2xl font-semibold text-center">
                  {selectedCar.brand} {selectedCar.model}
                </h2>
                <div className="flex justify-between">
                  <p className="font-semibold">Price:</p>
                  <p className="text-green-800">
                    ${selectedCar.pricePerHour}/hour
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Availability:</p>
                  <p className="text-green-800">{selectedCar.status}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Color:</p>
                  <p className="text-green-800">{selectedCar.color}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Transmission:</p>
                  <p className="text-green-800">{selectedCar.transmission}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Fuel Type:</p>
                  <p className="text-green-800">{selectedCar.fuelType}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Bags:</p>
                  <p className="text-green-800">
                    {selectedCar.luggageCapacity}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Doors:</p>
                  <p className="text-green-800">{selectedCar.doors}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Mileage:</p>
                  <p className="text-green-800">{selectedCar.mileage}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Capacity:</p>
                  <p className="text-green-800">{selectedCar.seats}</p>
                </div>
                <h3 className="text-lg font-semibold mt-4">Features:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {selectedCar.features?.map((feature, index) => (
                    <li key={index} className="text-left">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          )}

          <Divider />

          <div className="mb-4">
            <Text strong>Selected Options:</Text>
            <List size="small">
              <List.Item>GPS: {additionalOptions.gps ? "Yes" : "No"}</List.Item>
              <List.Item>
                Child Seat: {additionalOptions.childSeat ? "Yes" : "No"}
              </List.Item>
            </List>
          </div>

          <Button
            type="primary"
            block
            onClick={handleConfirmationModalClose}
            className="transition-colors duration-300"
          >
            Confirm Booking
          </Button>
        </div>
      </Modal>
    </div>
  );
};

const CarCard = ({ car, onBookNow }) => {
  // Animation variants for the top container
  const topContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const topItemVariants = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const bottomContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3, // Stagger effect for children
      },
    },
  };

  const bottomItemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
  };
  const {
    rating,
    images,
    carType,
    brand,
    model,
    seats,
    transmission,
    luggageCapacity,
    fuelType,
    mileage,
    doors,
    pricePerHour,
    status,
  } = car;

  return (
    <div className="bg-white h-fit rounded-lg overflow-hidden p-4">
      <motion.div
        variants={topContainerVariants}
        initial="hidden"
        animate="show"
        className="flex items-center gap-2"
      >
        <motion.div
          variants={topItemVariants}
          className="flex items-center gap-1 border-[2px] px-2 py-1 w-fit rounded-lg"
        >
          <FaStar className="text-yellow-500" />
          <div className="flex text-xs">
            <span className="font-semibold">{rating}</span>
          </div>
        </motion.div>
        <motion.span
          variants={topItemVariants}
          className={`p-1 px-2 ${
            status === "available"
              ? "bg-green-200 text-green-600 border-green-600"
              : "bg-red-200 text-red-600 border-red-600"
          } font-medium rounded-lg text-xs`}
        >
          {status}
        </motion.span>
      </motion.div>
      <div className="h-[185px]">
        <div
          className="h-full bg-contain bg-no-repeat bg-center rounded-lg"
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>
      </div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-2"
      >
        <h3 className="font-semibold text-xs text-gray-500">{carType}</h3>
        <h4 className="font-semibold text-lg">{`${brand} ${model}`}</h4>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 items-center justify-center p-2"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-1 text-blue-500"
        >
          <LuUsers />
          <p className="font-medium">{seats} Persons</p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-1 text-blue-500 justify-center"
        >
          <TbEngine />
          <p className="font-medium">{transmission}</p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-1 text-blue-500"
        >
          <MdOutlineLuggage />
          <p className="font-medium">{luggageCapacity} Bags</p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-1 text-blue-500"
        >
          <BsFuelPumpDiesel />
          <p className="font-medium">{fuelType}</p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-1 text-blue-500 justify-center"
        >
          <IoSpeedometerOutline />
          <p className="font-medium">{mileage} km/h</p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-1 justify-center text-blue-500"
        >
          <GiCarDoor />
          <p className="font-medium">{doors} Doors</p>
        </motion.div>
      </motion.div>
      <motion.div
        variants={bottomContainerVariants}
        initial="hidden"
        animate="show"
        className="flex justify-between border-t-2 bg-green-70 pt-2 px-2"
      >
        <motion.div variants={bottomItemVariants} className="flex items-center">
          <TbCurrencyTaka className="text-2xl" />
          <h3 className="font-semibold">
            {pricePerHour}/
            <span className="text-gray-400 font-medium">hour</span>
          </h3>
        </motion.div>
        <motion.div className="pt-2" variants={bottomItemVariants}>
          <PrimaryButton label="Book Now" onClick={() => onBookNow(car)} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BookingPage;
