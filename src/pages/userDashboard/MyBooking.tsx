import React, { useState, useEffect } from "react";
import { Table, Tag, Tabs, Modal, message } from "antd";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineMode } from "react-icons/md";
import { useForm } from "react-hook-form";
import { DatePicker } from "antd";
import { useGetMyBookingsQuery } from "../../redux/features/booking/bookingApi";

const MyBooking = () => {
  const { data, error, isLoading } = useGetMyBookingsQuery();
  const { RangePicker } = DatePicker;

  // State for the bookings fetched from the backend
  const [bookings, setBookings] = useState([]);

  // Update bookings state with data from the backend when available
  useEffect(() => {
    if (data && data.data) {
      const transformedBookings = data.data.map((booking) => ({
        key: booking._id,
        carModel: `${booking.carId.brand} ${booking.carId.model}`,
        rentalDates: `${booking.date} ${booking.startTime}`,
        price: `$${booking.carId.pricePerHour}/hour`,
        status: booking.status,
      }));
      setBookings(transformedBookings);
    }
  }, [data]);

  // State for the modal visibility and current booking
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);

  // react-hook-form instance
  const { register, handleSubmit, setValue, reset } = useForm();

  // Handle modifying a booking
  const handleModify = (key) => {
    const booking = bookings.find((b) => b.key === key);
    setCurrentBooking(booking);
    // Set the form fields with current booking values
    setValue("carModel", booking.carModel);
    setValue("rentalDates", booking.rentalDates);
    setValue("price", booking.price);
    setIsModalVisible(true);
  };

  // Handle canceling a booking
  const handleCancel = (key) => {
    Modal.confirm({
      title: "Are you sure you want to cancel this booking?",
      onOk: () => {
        setBookings((prev) => prev.filter((booking) => booking.key !== key));
        message.success("Booking canceled successfully.");
      },
    });
  };

  // Handle form submission to update the booking
  const onSubmit = (values) => {
    const updatedBookings = bookings.map((booking) =>
      booking.key === currentBooking.key ? { ...booking, ...values } : booking
    );
    setBookings(updatedBookings);
    setIsModalVisible(false);
    message.success("Booking updated successfully.");
    reset(); // Reset the form after submission
  };

  // Columns for the table
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
        let color = status === "confirmed" ? "green" : "blue";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    // {
    //   title: "Action",
    //   dataIndex: "action",
    //   key: "action",
    //   render: (_, record) => {
    //     return (
    //       <div className="flex gap-2">
    //         {record.status !== "Confirmed" && (
    //           <div
    //             className="bg-gray-100 p-1 rounded-lg hover:scale-125 transition-all cursor-pointer"
    //             onClick={() => handleCancel(record.key)}
    //           >
    //             <AiOutlineDelete className="text-xl" />
    //           </div>
    //         )}
    //         {record.status !== "Confirmed" && (
    //           <div
    //             className="bg-gray-100 p-1 rounded-lg hover:scale-125 transition-all cursor-pointer"
    //             onClick={() => handleModify(record.key)}
    //           >
    //             <MdOutlineMode className="text-xl" />
    //           </div>
    //         )}
    //       </div>
    //     );
    //   },
    // },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        return (
          <div className="flex gap-2">
            {/* Only show delete and modify buttons if the status is not 'Confirmed' */}
            {record.status !== "confirmed" && (
              <>
                <div
                  className="bg-gray-100 p-1 rounded-lg hover:scale-125 transition-all cursor-pointer"
                  onClick={() => handleCancel(record.key)}
                >
                  <AiOutlineDelete className="text-xl" />
                </div>
                <div
                  className="bg-gray-100 p-1 rounded-lg hover:scale-125 transition-all cursor-pointer"
                  onClick={() => handleModify(record.key)}
                >
                  <MdOutlineMode className="text-xl" />
                </div>
              </>
            )}
          </div>
        );
      },
    },
  ];

  // Tabs for booking management
  const items = [
    {
      key: "1",
      label: "Upcoming Bookings",
      children: (
        <Table
          dataSource={bookings}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      ),
    },
    {
      key: "2",
      label: "Past Bookings",
      children: (
        <Table dataSource={[]} columns={columns} pagination={{ pageSize: 5 }} />
      ),
    },
  ];

  return (
    <div className="p-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Tabs for Upcoming and Past Bookings */}
        <Tabs defaultActiveKey="1" items={items} />

        {/* Modal for modifying a booking */}
        <Modal
          title="Modify Booking"
          visible={isModalVisible}
          onCancel={() => {
            setIsModalVisible(false);
            reset(); // Reset the form when modal is closed
          }}
          onOk={handleSubmit(onSubmit)} // Use handleSubmit for react-hook-form
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div>
                <label>Car Model</label>
                <input
                  disabled
                  type="text"
                  {...register("carModel", {
                    required: "Please enter the car model",
                  })}
                  className="p-1 pl-2 outline-none border w-full rounded-md hover:border-blue-500"
                />
              </div>
              <div>
                <label>Price</label>
                <input
                  disabled
                  type="text"
                  {...register("price", { required: "Please enter the price" })}
                  className="p-1 pl-2 outline-none border w-full rounded-md hover:border-blue-500"
                />
              </div>
              <div>
                <label>Rental Dates</label>
                <RangePicker />
              </div>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default MyBooking;
