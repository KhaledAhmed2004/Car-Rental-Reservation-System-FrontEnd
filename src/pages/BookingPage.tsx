import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Select,
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
import { IoSpeedometerOutline } from "react-icons/io5";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { MdOutlineLuggage } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { useCreateBookingMutation } from "../redux/features/booking/bookingApi";
import { useForm } from "react-hook-form";
import { useGetAllCarsQuery } from "../redux/features/car/carApi";

const { Title, Text } = Typography;
const { Option } = Select;

const BookingPage = () => {
  // const { data: cars } = useGetAllCarsQuery();

  // console.log(cars);
  const { register, handleSubmit } = useForm();
  const [createBooking, { isSuccess, error }] = useCreateBookingMutation();
  // console.log(error);

  const selectedCarFromViewDetiels = useAppSelector(
    (state) => state.car.selectedCar
  );
  const carId = selectedCarFromViewDetiels?._id;
  const [carType, setCarType] = useState("");
  console.log(carType);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const [additionalOptions, setAdditionalOptions] = useState({
    gps: false,
    childSeat: false,
  });
  const { data: cars } = useGetAllCarsQuery(carType); // Fetch cars based on carType
  console.log(cars);

  useEffect(() => {
    if (selectedCarFromViewDetiels) {
      setSelectedCar(selectedCarFromViewDetiels);
    }
  }, [selectedCarFromViewDetiels]);

  // const handleSearch = async (values) => {
  //   console.log("Search Values:", values);
  //   // Simulate searching for cars
  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  //   // Mock car data for search results
  //   setBookingDetails([
  //     {
  //       id: 1,
  //       image:
  //         "https://i.ibb.co/JsYVGCv/Download-Hyundai-PNG-Image-for-Free.jpg",
  //       description: "A comfortable SUV with leather seats and GPS.",
  //       price: 50,
  //     },
  //     {
  //       id: 2,
  //       image: "https://via.placeholder.com/300",
  //       description: "A compact sedan with good fuel efficiency.",
  //       price: 30,
  //     },
  //   ]);
  // };

  const handleBookNow = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleModalOk = async (data) => {
    const bookingData = {
      carId: selectedCar?._id,
      additionalOptions: additionalOptions,
      ...data,
    };
    console.log(data);
    // await useCreateBookingMutation(data);
    await createBooking(data);
    message.success("Booking confirmed!");
    setIsBookingConfirmed(true);
    setIsModalOpen(false);
    setIsConfirmationModalOpen(true);
  };
  const [filteredCars, setFilteredCars] = useState([]);

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleConfirmationModalClose = () => {
    setIsConfirmationModalOpen(false);
    message.success("Enjoy your ride!");
  };
  const topContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
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
        staggerChildren: 0.3, // Delay between children
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
  // const { register, handleSubmit } = useForm();

  // const handleSearch = (data) => {
  //   const { pickupLocation, dropOffLocation, carType } = data;
  //   console.log(carType);
  //   const filtered = cars?.filter((car) => {
  //     const matchesCarType = carType ? car.carType === carType : true;
  //     return matchesCarType; // Add other conditions if required
  //   });
  //   setFilteredCars(filtered || []); // Store the filtered cars
  //   console.log(filtered);
  // };
  const handleSearch = (data) => {
    // setCarType(data.carType);
    console.log(data.carType);

    // Set car type based on search
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
                  {...register("pickupLocation", { required: true })}
                  placeholder="Enter location"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </Col>
            <Col span={12}>
              <div>
                <label>Drop-Off Location</label>
                <input
                  {...register("dropOffLocation", { required: true })}
                  placeholder="Enter location"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </Col>
          </Row>
          <div>
            <label>Car Type</label>
            <select
              {...register("carType", { required: true })} // Correct usage
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select car type</option>
              <option value="suv">SUV</option>
              <option value="sedan">Sedan</option>
              <option value="hatchback">Hatchback</option>
            </select>
          </div>
          <div>
            <label>Additional Features</label>
            <input
              {...register("additionalFeatures")}
              placeholder="Enter features (e.g., GPS, child seat)"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
            Search
          </Button>
        </form>
      </div>

      {/* If there's a selected car from Redux, show it as a default */}
      {selectedCar && (
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
                <span className="font-semibold">{selectedCar?.rating}</span>
                {/* <span className="text-gray-400 ">({ratingCount})</span> */}
              </div>
            </motion.div>
            <motion.span
              variants={topItemVariants}
              className={`p-1 px-2 ${
                status
                  ? "bg-green-200 text-green-600 border-green-600"
                  : "bg-red-200 text-red-600 border-red-600"
              } font-medium rounded-lg text-xs`}
            >
              {status ? "Available" : "Not Available"}
            </motion.span>
          </motion.div>
          <div className="h-[185px]">
            <div
              className="h-full bg-contain bg-no-repeat bg-center rounded-lg"
              style={{ backgroundImage: `url(${selectedCar?.images[0]})` }}
            ></div>
          </div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="px-2"
          >
            <h3 className="font-semibold text-xs text-gray-500">
              {selectedCar?.carType}
            </h3>
            <h4 className="font-semibold text-lg">
              {selectedCar?.brand} {selectedCar?.model}
            </h4>
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
              <p className="font-medium">{selectedCar?.seats} Persons</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-1 text-blue-500 justify-center"
            >
              <TbEngine />
              <p className="font-medium">{selectedCar?.transmission}</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-1 text-blue-500"
            >
              <MdOutlineLuggage />
              <p className="font-medium">{selectedCar?.luggageCapacity} Bags</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-1 text-blue-500"
            >
              <BsFuelPumpDiesel />
              <p className="font-medium">{selectedCar?.fuelType}</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-1 text-blue-500 justify-center"
            >
              <IoSpeedometerOutline />
              <p className="font-medium">{selectedCar?.mileage} km/h</p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-1 justify-center text-blue-500"
            >
              <GiCarDoor />
              <p className="font-medium">{selectedCar?.doors} Doors</p>
            </motion.div>
          </motion.div>
          <motion.div
            variants={bottomContainerVariants}
            initial="hidden"
            animate="show"
            className="flex justify-between border-t-2 bg-green-70 pt-2 px-2"
          >
            <motion.div
              variants={bottomItemVariants}
              className="flex items-center"
            >
              <TbCurrencyTaka className="text-2xl" />
              <h3 className="font-semibold">
                {selectedCar?.pricePerHour}/{" "}
                <span className="text-gray-400 font-medium">hour</span>
              </h3>
            </motion.div>
            <motion.div className="pt-2" variants={bottomItemVariants}>
              {/* <PrimaryButton label="View Details" onClick={handleViewDetails} /> */}
              <PrimaryButton
                label="Book Now"
                onClick={() => handleBookNow(selectedCar)}
              />
            </motion.div>
          </motion.div>
        </div>
      )}

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
          title="Complete Your Booking"
          visible={isModalOpen}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
          footer={null}
        >
          <Title level={4} className="text-green-600 mb-4">
            Booking Details
          </Title>
          <Card
            cover={<Image alt="Selected Car" src={selectedCar?.images[0]} />}
          >
            <Card.Meta
              title={`$${selectedCar?.pricePerHour} / day`}
              description={selectedCar?.description}
            />
          </Card>
          <Divider />
          <form
            onSubmit={handleSubmit(handleModalOk)}
            className="bg-white p-6 rounded-lg shadow-md space-y-4"
          >
            <Title level={4} className="text-green-600">
              Complete Your Booking
            </Title>

            <div>
              <input
                {...(register("nidOrPassport"), { required: true })}
                placeholder="Enter your NID or Passport Number"
                className="ant-input border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <input
                {...(register("drivingLicense"), { required: true })}
                placeholder="Enter your Driving License"
                className="ant-input border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* <div>
              <input
                {...register("paymentInformation")}
                placeholder="Enter payment details"
                className="ant-input border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div> */}

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
              Confirm Booking
            </Button>
          </form>
        </Modal>
      )}

      {/* Booking Confirmation Modal */}
      <Modal
        title="Booking Confirmed!"
        visible={isConfirmationModalOpen}
        onOk={handleConfirmationModalClose}
        onCancel={handleConfirmationModalClose}
        footer={null}
      >
        <div className="mt-8 bg-green-100 p-6 rounded-lg shadow-lg">
          <Title level={4} className="text-green-600 mb-4">
            Booking Details
          </Title>
          {selectedCar && (
            <Card
              cover={<Image alt="Confirmed Car" src={selectedCar?.images[0]} />}
            >
              <Card.Meta
                title={`$${selectedCar?.pricePerHour} / day`}
                description={selectedCar?.description}
              />
            </Card>
          )}
          <Divider />
          <div className="mb-4">
            <Text strong>Selected Options:</Text>
            <List>
              <List.Item>GPS: {additionalOptions.gps ? "Yes" : "No"}</List.Item>
              <List.Item>
                Child Seat: {additionalOptions.childSeat ? "Yes" : "No"}
              </List.Item>
            </List>
          </div>
          <Button type="primary" block onClick={handleConfirmationModalClose}>
            Done
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default BookingPage;
