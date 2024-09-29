import React, { useState, useEffect } from "react";
import { Table, Tag, Tabs, Modal, message, Button } from "antd";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineMode } from "react-icons/md";
import { useForm } from "react-hook-form";
import { DatePicker } from "antd";
import {
  useGetMyBookingsQuery,
  useDeleteBookingMutation,
  useUpdateBookingStatusMutation,
  useUpdateBookingMutation, // Import the update booking mutation
} from "../../redux/features/booking/bookingApi"; // Ensure the path is correct
import { PayCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const MyBookingsPage = () => {
  // Fetch data using Redux Toolkit Query
  const { data, error, isLoading } = useGetMyBookingsQuery();
  const [deleteBooking, { isLoading: isDeleting }] = useDeleteBookingMutation();
  const [updateBookingStatus] = useUpdateBookingStatusMutation();
  const [updateBooking] = useUpdateBookingMutation(); // Create update booking mutation
  const { RangePicker } = DatePicker;
  const navigate = useNavigate();

  // State management for bookings and modal visibility
  const [bookings, setBookings] = useState([]);
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
  const [isModifyModalVisible, setIsModifyModalVisible] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  // Log to check if data is fetching correctly
  useEffect(() => {
    console.log("Data from API:", data); // Check if data is fetched correctly
    console.log("API Error:", error); // Log any potential API errors
    if (data && data?.data) {
      // const transformedBookings = data.data.map((booking) => ({
      //   key: booking._id,
      //   carModel: `${booking.carId.brand} ${booking.carId.model}`,
      //   rentalDates: `${booking.date} ${booking.startTime}`,
      //   price: `$${booking.carId.pricePerHour}/hour`,
      //   status: booking.status,
      //   totalCost: booking.totalCost,
      //   drivingLicense: booking.drivingLicense,
      //   nidOrPassport: booking.nidOrPassport,
      //   additionalOptions: [
      //     { name: "Child Seat", selected: booking.additionalOptions.childSeat },
      //     { name: "GPS", selected: booking.additionalOptions.gps },
      //   ],
      // }));
      const transformedBookings = data.data.map((booking) => ({
        key: booking._id,
        carModel: `${booking.carId.brand} ${booking.carId.model}`,
        rentalDates: `${booking.date} ${booking.startTime}`,
        price: `$${booking.carId.pricePerHour}/hour`,
        status: booking.status,
        totalCost: booking.totalCost,
        drivingLicense: booking.drivingLicense,
        nidOrPassport: booking.nidOrPassport,
        // Ensure additionalOptions is always an array
        additionalOptions: [
          {
            name: "Child Seat",
            selected: booking?.additionalOptions?.childSeat || false,
            // selected: booking?.additionalOptions?.childSeat,
          },
          { name: "GPS", selected: booking?.additionalOptions?.gps || false },
          // { name: "GPS", selected: booking?.additionalOptions?.gps },
        ],
      }));

      setBookings(transformedBookings);
    }
  }, [data, error]);

  // Cancel booking function
  const handleCancelBooking = (record) => {
    Modal.confirm({
      title: "Are you sure you want to cancel and delete this booking?",
      onOk: async () => {
        try {
          await deleteBooking({ id: record.key });
          const updatedBookings = bookings.filter(
            (booking) => booking.key !== record.key
          );
          setBookings(updatedBookings);
          message.success("Booking canceled and deleted.");
        } catch (error) {
          message.error("Failed to delete the booking.");
          console.error("Delete booking error:", error); // Log error for debugging
        }
      },
    });
  };

  // Open Modify Modal and populate fields with booking data
  // const openModifyModal = (key) => {
  //   const booking = bookings.find((b) => b.key === key);
  //   console.log("Selected Booking for Modification:", booking); // Log booking details
  //   setCurrentBooking(booking);
  //   setValue("carModel", booking.carModel);
  //   setValue("price", booking.price);
  //   setValue("drivingLicense", booking.drivingLicense);
  //   setValue("nidOrPassport", booking.nidOrPassport);
  //   setValue(
  //     "additionalOptions.childSeat",
  //     booking.additionalOptions.find((option) => option.name === "Child Seat")
  //       .selected
  //   );
  //   setValue(
  //     "additionalOptions.gps",
  //     booking.additionalOptions.find((option) => option.name === "GPS").selected
  //   );
  //   setIsModifyModalVisible(true);
  // };
  const openModifyModal = (key) => {
    const booking = bookings.find((b) => b.key === key);
    console.log("Selected Booking for Modification:", booking); // Log booking details

    if (!booking) return; // Add a guard clause in case booking is not found

    setCurrentBooking(booking);
    setValue("carModel", booking.carModel);
    setValue("price", booking.price);
    setValue("drivingLicense", booking.drivingLicense);
    setValue("nidOrPassport", booking.nidOrPassport);

    // Check if additionalOptions is an array
    if (Array.isArray(booking?.additionalOptions)) {
      setValue(
        "additionalOptions.childSeat",
        booking?.additionalOptions.find((option) => option.name === "Child Seat")
          ?.selected || false // Fallback to false
      );
      setValue(
        "additionalOptions.gps",
        booking?.additionalOptions.find((option) => option.name === "GPS")
          ?.selected || false // Fallback to false
      );
    } else {
      console.error(
        "Expected additionalOptions to be an array but got:",
        booking.additionalOptions
      );
      setValue("additionalOptions.childSeat", false); // Set default values if the structure is incorrect
      setValue("additionalOptions.gps", false);
    }

    setIsModifyModalVisible(true);
  };

  const handlePaymentClick = (booking) => {
    navigate("/dashboard/payment", {
      state: {
        bookingId: booking.key, // Ensure the bookingId is properly passed
        carDetails: booking.carModel,
        amountDue: booking.totalCost,
      },
    });
  };

  // Handle payment submission
  const processPayment = async (values) => {
    setLoading(true);
    try {
      console.log("Processing payment for:", currentBooking); // Log payment details
      // Simulate payment processing
      setTimeout(async () => {
        await updateBookingStatus({
          id: currentBooking?.key,
          status: "completed",
        });
        setLoading(false);
        message.success(
          "Payment successful. Booking status updated to completed."
        );
        setIsPaymentModalVisible(false);
        reset();
      }, 2000);
    } catch (error) {
      setLoading(false);
      message.error("Payment failed.");
      console.error("Payment error:", error); // Log error for debugging
    }
  };

  // Handle modify booking form submission
  const updateBookingDetails = async (values) => {
    try {
      console.log("Updating booking for:", currentBooking); // Log the booking being updated
      await updateBooking({
        bookingId: currentBooking?.key, // Use the booking ID
        updatedData: values, // Pass updated data
      });
      const updatedBookings = bookings.map((booking) =>
        booking.key === currentBooking.key ? { ...booking, ...values } : booking
      );
      setBookings(updatedBookings);
      message.success("Booking updated successfully!");
      setIsModifyModalVisible(false);
      reset();
    } catch (error) {
      message.error("Failed to update the booking.");
      console.error("Update booking error:", error); // Log error for debugging
    }
  };

  // Table columns for displaying bookings
  const columns = [
    {
      title: "Car Model",
      dataIndex: "carModel",
      key: "carModel",
    },
    {
      title: "Rental Dates",
      dataIndex: "rentalDates",
      key: "rentalDates",
    },
    {
      title: "Price Per Hour",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = status === "completed" ? "green" : "blue";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          {record.status === "pending" && (
            <>
              <div
                className="bg-gray-100 p-1 rounded-lg hover:scale-125 transition-all cursor-pointer"
                onClick={() => handleCancelBooking(record)}
              >
                <AiOutlineDelete className="text-xl" />
              </div>
              <div
                className="bg-gray-100 p-1 rounded-lg hover:scale-125 transition-all cursor-pointer"
                onClick={() => openModifyModal(record.key)}
              >
                <MdOutlineMode className="text-xl" />
              </div>
            </>
          )}
          {record.status === "due-pay" && (
            <Button type="primary" onClick={() => handlePaymentClick(record)}>
              Pay Now
            </Button>
          )}
        </div>
      ),
    },
  ];

  const tabItems = [
    {
      key: "1",
      label: "Upcoming Bookings",
      children: (
        <Table
          dataSource={bookings
            .filter((booking) => booking.status !== "completed")
            .sort((a, b) => {
              // Define the priority of statuses: pending first, then approved, then due-pay
              const statusOrder = {
                pending: 1,
                approved: 2,
                "due-pay": 3,
              };
              return statusOrder[a.status] - statusOrder[b.status];
            })}
          columns={columns}
          pagination={{ pageSize: 10 }}
        />
      ),
    },
    {
      key: "2",
      label: "Past Bookings",
      children: (
        <Table
          dataSource={bookings.filter(
            (booking) => booking.status === "completed"
          )}
          columns={columns}
          pagination={{ pageSize: 10 }}
        />
      ),
    },
  ];

  return (
    <div className="px-8">
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
      <Tabs defaultActiveKey="1" items={tabItems} />

      {/* Payment Modal */}
      <Modal
        title="Payment"
        open={isPaymentModalVisible}
        onCancel={() => setIsPaymentModalVisible(false)}
        footer={null}
      >
        {/* Include payment form and logic */}
        {/* ... */}
      </Modal>

      {/* Modify Booking Modal */}
      <Modal
        title="Modify Booking"
        open={isModifyModalVisible}
        onCancel={() => setIsModifyModalVisible(false)}
        footer={null}
      >
        <form onSubmit={handleSubmit(updateBookingDetails)}>
          <div className="mb-4">
            <label className="block mb-1">Car Model</label>
            <input
              className="border rounded p-2 w-full"
              {...register("carModel")}
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Price</label>
            <input
              className="border rounded p-2 w-full"
              {...register("price")}
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Driving License</label>
            <input
              className="border rounded p-2 w-full"
              {...register("drivingLicense", {
                required: "This field is required",
              })}
            />
            {errors.drivingLicense && (
              <span className="text-red-500">
                {errors.drivingLicense.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">NID or Passport</label>
            <input
              className="border rounded p-2 w-full"
              {...register("nidOrPassport", {
                required: "This field is required",
              })}
            />
            {errors.nidOrPassport && (
              <span className="text-red-500">
                {errors.nidOrPassport.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Additional Options</label>
            <label>
              <input
                type="checkbox"
                {...register("additionalOptions.childSeat")}
              />
              Child Seat
            </label>
            <label>
              <input type="checkbox" {...register("additionalOptions.gps")} />
              GPS
            </label>
          </div>
          <Button type="primary" htmlType="submit" loading={loading}>
            Update Booking
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default MyBookingsPage;
