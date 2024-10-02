import { Table, Tag, Button, message, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import {
  useDeleteBookingMutation,
  useGetAllBookingsQuery,
  useUpdateBookingStatusMutation,
} from "../../redux/features/booking/bookingApi";

const ManageBookingsPage = () => {
  // Fetching bookings data using Redux Toolkit Query
  const { data, error, isLoading } = useGetAllBookingsQuery();
  const [updateBookingStatus] = useUpdateBookingStatusMutation();
  const [deleteBooking] = useDeleteBookingMutation();

  // State to store the formatted bookings
  const [bookings, setBookings] = useState([]);

  // Effect hook to format and store the bookings once fetched
  useEffect(() => {
    if (data?.data) {
      const formattedBookings = data?.data?.map((booking) => ({
        key: booking?._id,
        carModel: `${booking?.carId?.brand || "Unknown"} ${
          booking?.carId?.model || "Unknown"
        }`,
        userName: booking.userId?.name || "Unknown",
        rentalDates: `${booking?.date} at ${booking?.startTime}`,
        pricePerHour: `$${booking?.carId?.pricePerHour || "0"}`,
        status: booking?.status,
      }));

      // Define a priority map for statuses
      const statusPriority = {
        pending: 1,
        approved: 2,
        "due-pay": 3,
        completed: 4,
        canceled: 5,
      };

      // Sort bookings based on the defined priority
      const sortedBookings = formattedBookings.sort((a, b) => {
        return statusPriority[a.status] - statusPriority[b.status];
      });

      setBookings(sortedBookings); // Set sorted bookings to state
    }
  }, [data]);

  // Function to confirm and approve a booking
  const confirmBookingApproval = (record) => {
    Modal.confirm({
      title: "Are you sure you want to approve this booking?",
      onOk: async () => {
        try {
          await updateBookingStatus({ id: record.key, status: "approved" });
          const updatedBookings = bookings.map((booking) =>
            booking.key === record.key
              ? { ...booking, status: "approved" }
              : booking
          );
          setBookings(updatedBookings); // Update the state with the new status
          message.success("Booking approved successfully.");
        } catch (error) {
          message.error("Failed to approve the booking.");
        }
      },
    });
  };

  // Function to confirm and cancel/delete a booking
  const confirmBookingCancellation = (record) => {
    Modal.confirm({
      title: "Are you sure you want to cancel and delete this booking?",
      onOk: async () => {
        try {
          await deleteBooking({ id: record.key });
          const updatedBookings = bookings.filter(
            (booking) => booking.key !== record.key
          );
          setBookings(updatedBookings); // Remove the canceled booking from the state
          message.error("Booking canceled and deleted.");
        } catch (error) {
          message.error("Failed to delete the booking.");
        }
      },
    });
  };

  // Columns definition for the bookings table
  const columns = [
    {
      title: "",
      key: "index",
      render: (_, __, index) => index + 1, // Index of the booking
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
        // Conditional tag color based on booking status
        const color =
          status === "approved"
            ? "green" // Green for approved
            : status === "due-pay"
            ? "red" // Red for due-pay
            : status === "completed"
            ? "blue" // Blue for completed
            : status === "pending"
            ? "orange" // Orange for pending
            : status === "canceled"
            ? "grey" // Grey for canceled
            : "default";

        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        // Only show action buttons if status is "pending"
        return (
          record.status === "pending" && (
            <div className="flex gap-2">
              <Button
                type="primary"
                onClick={() => confirmBookingApproval(record)}
                icon={<TiTickOutline />}
                className="flex items-center gap-1"
              >
                Approve
              </Button>
              <Button
                type="danger"
                onClick={() => confirmBookingCancellation(record)}
                icon={<MdOutlineCancel />}
                className="flex items-center gap-1"
              >
                Cancel
              </Button>
            </div>
          )
        );
      },
    },
  ];

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading bookings</div>;

  return (
    <div>
      {/* <div className="bg-white p-4 rounded-lg">
        <div className="h-full border-2 rounded-lg">
          <Table dataSource={bookings} columns={columns} />
        </div>
      </div> */}
      <div className="bg-white rounded-lg overflow-hidden">
        {" "}
        {/* Add overflow-hidden to the outer div */}
        <div className="rounded-lg p-4">
          <div className="h-full border-2 rounded-lg overflow-x-auto">
            {" "}
            {/* Add overflow-x-auto for horizontal scrolling */}
            <Table
              dataSource={bookings}
              columns={columns}
              className="min-w-full" // Ensure the table takes up full width and is scrollable
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBookingsPage;
