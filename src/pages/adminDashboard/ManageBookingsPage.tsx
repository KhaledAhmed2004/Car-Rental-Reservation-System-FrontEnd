import { Table, Tag, Button, message, Modal } from "antd";
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";

const ManageBookingsPage = () => {
  // State to manage the bookings data
  const [bookings, setBookings] = useState([
    {
      key: "1",
      carModel: "Tesla Model S",
      userName: "Mike",
      returnDate: "2023-09-20",
      bookingDates: "2023-09-10 to 2023-09-15",
      price: "$500",
      status: "Pending",
    },
    {
      key: "2",
      carModel: "Audi A4",
      userName: "John",
      returnDate: "2023-09-22",
      bookingDates: "2023-09-12 to 2023-09-18",
      price: "$300",
      status: "Confirmed",
    },
  ]);

  // Function to handle approving a booking with confirmation
  const handleApprove = (record) => {
    Modal.confirm({
      title: "Are you sure you want to approve this booking?",
      onOk: () => {
        const updatedBookings = bookings.map((booking) =>
          booking.key === record.key
            ? { ...booking, status: "Confirmed" }
            : booking
        );
        setBookings(updatedBookings);
        message.success("Booking approved successfully.");
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
      title: "Booking Dates",
      dataIndex: "bookingDates",
      key: "bookingDates",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
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
            : "orange";
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
            {record.status === "Pending" && (
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
            {record.status !== "Canceled" && record.status !== "Confirmed" && (
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
