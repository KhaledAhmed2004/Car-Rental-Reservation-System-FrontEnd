import { Table, Tag, Button, message, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import {
  useGetAllBookingsQuery,
  useUpdateBookingStatusMutation,
} from "../../redux/features/booking/bookingApi";

const ManageBookingsPage = () => {
  const { data, error, isLoading } = useGetAllBookingsQuery();
  const [updateBookingStatus] = useUpdateBookingStatusMutation();

  console.log("Booking data:", data?.data);

  // State to manage the bookings data
  const [bookings, setBookings] = useState([]);

  // Effect to set bookings once data is fetched
  useEffect(() => {
    if (data?.data) {
      // Map the booking data to match the required format
      const formattedBookings = data.data.map((booking) => ({
        key: booking._id, // unique key for the table
        carModel: `${booking.carId?.brand || "Unknown"} ${
          booking.carId?.model || "Unknown"
        }`, // Combine brand and model
        userName: booking.userId?.name || "Unknown", // assuming userId has name field
        rentalDates: `${booking.date} in ${booking.startTime}`, // format rental dates
        pricePerHour: `$${booking.carId?.pricePerHour || "0"}`, // format price per hour
        status: booking.status, // Assuming this is a string like 'Pending', 'Confirmed', 'Canceled'
      }));
      setBookings(formattedBookings);
    }
  }, [data]);

  // Function to handle approving a booking with confirmation
  // const handleApprove = (record) => {
  //   Modal.confirm({
  //     title: "Are you sure you want to approve this booking?",
  //     onOk: () => {
  //       const updatedBookings = bookings.map((booking) =>
  //         booking.key === record.key
  //           ? { ...booking, status: "Confirmed" }
  //           : booking
  //       );
  //       setBookings(updatedBookings);
  //       message.success("Booking approved successfully.");
  //     },
  //   });
  // };
  const handleApprove = (record) => {
    Modal.confirm({
      title: "Are you sure you want to approve this booking?",
      onOk: async () => {
        try {
          // Call the backend API to update the booking status
          await updateBookingStatus({ id: record.key, status: "confirmed" });

          const updatedBookings = bookings.map((booking) =>
            booking.key === record.key
              ? { ...booking, status: "Confirmed" }
              : booking
          );
          setBookings(updatedBookings);
          message.success("Booking approved successfully.");
        } catch (error) {
          message.error("Failed to approve the booking.");
        }
      },
    });
  };

  // Function to handle canceling a booking with confirmation
  const handleCancel = (record) => {
    Modal.confirm({
      title: "Are you sure you want to cancel this booking?",
      onOk: () => {
        const updatedBookings = bookings.map((booking) =>
          booking.key === record.key
            ? { ...booking, status: "Canceled" }
            : booking
        );
        setBookings(updatedBookings);
        message.error("Booking canceled.");
      },
    });
  };

  // Define columns for the table
  const columns = [
    {
      title: "",
      key: "index",
      render: (_, __, index) => index + 1, // Render the index, starting from 1
    },
    {
      title: "Car Model",
      dataIndex: "carModel",
      key: "carModel",
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Rental Dates",
      dataIndex: "rentalDates",
      key: "rentalDates",
    },
    {
      title: "Price Per Hour",
      dataIndex: "pricePerHour",
      key: "pricePerHour",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        // Conditional rendering for status
        const color =
          status === "Confirmed"
            ? "green"
            : status === "Canceled"
            ? "red"
            : "orange"; // Assuming "Pending" will fall under orange
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        return (
          <div className="flex gap-2">
            {/* Show approve button only if status is Pending */}
            {record.status === "pending" && (
              <Button
                type="primary"
                onClick={() => handleApprove(record)}
                icon={<TiTickOutline />}
                className="flex items-center gap-1"
              >
                Approve
              </Button>
            )}
            {/* Disable cancel button if the status is Confirmed or already Canceled */}
            {record.status !== "Canceled" && record.status !== "confirmed" && (
              <Button
                type="danger"
                onClick={() => handleCancel(record)}
                icon={<MdOutlineCancel />}
                className="flex items-center gap-1"
              >
                Cancel
              </Button>
            )}
          </div>
        );
      },
    },
  ];

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading bookings</div>;

  return (
    <div>
      <div className="bg-white p-4 rounded-lg">
        <div className="h-full border-2 rounded-lg">
          {/* Render the table with booking data */}
          <Table dataSource={bookings} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default ManageBookingsPage;
