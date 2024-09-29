import { Table, Tag, Button, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { GiCarKey } from "react-icons/gi";
import {
  useGetAllBookingsQuery,
  useUpdateBookingStatusMutation,
} from "../../redux/features/booking/bookingApi";
import { useReturnCarMutation } from "../../redux/features/car/carApi";

const ManageReturnCarPage = () => {
  // Fetch all bookings data using the Redux query
  const { data: bookingData, isLoading } = useGetAllBookingsQuery();

  // State to store the mapped car data for the table
  const [carList, setCarList] = useState([]);

  // Initialize mutation hooks for updating booking status and returning the car
  const [updateBookingStatus] = useUpdateBookingStatusMutation();
  const [returnCar] = useReturnCarMutation();

  // Map bookings to car data when bookingData changes
  useEffect(() => {
    if (bookingData) {
      // Map each booking to a simplified car object for the table
      const mappedCars = bookingData?.data.map((booking) => ({
        key: booking._id,
        carModel: `${booking.carId.brand} ${booking.carId.model}`,
        userName: booking.userId?.name || "Unknown",
        rentalDetails: `${booking.date} ${booking.startTime}`,
        hourlyRate: `$${booking.carId.pricePerHour}/hour`,
        status: booking.status,
      }));
      // Sort bookings by status (pending, due-pay, completed, etc.)
      const statusPriority = {
        approved: 1,
        "due-pay": 2,
      };

      const sortedBookings = mappedCars.sort(
        (a, b) => statusPriority[a.status] - statusPriority[b.status]
      );

      setCarList(sortedBookings);
    }
  }, [bookingData]);

  // Function to handle the return of a car
  const handleCarReturn = async (carRecord) => {
    try {
      // Step 1: Update the booking status to "due-pay"
      await updateBookingStatus({ id: carRecord.key, status: "due-pay" });

      // Step 2: Create a formatted endTime (current time in HH:mm format)
      const currentTime = new Date();
      const formattedEndTime = `${currentTime
        .getHours()
        .toString()
        .padStart(2, "0")}:${currentTime
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;

      // Step 3: Call returnCar mutation to mark the car as returned
      await returnCar({
        bookingId: carRecord.key,
        endTime: formattedEndTime,
      });

      // Step 4: Update the local state to reflect the car's return status
      const updatedCarList = carList.map((car) =>
        car.key === carRecord.key
          ? { ...car, status: "due-pay" } // Change status to "due-pay" after return
          : car
      );
      setCarList(updatedCarList);
    } catch (error) {
      console.error("Error processing the car return:", error);
    }
  };

  // Define columns for the table
  const tableColumns = [
    {
      title: "No.", // Column title for row index
      key: "index",
      render: (_, __, index) => index + 1, // Display the row index starting from 1
    },
    {
      title: "Car Model", // Car model column
      dataIndex: "carModel",
      key: "carModel",
    },
    {
      title: "Rental Details", // Rental date and time column
      dataIndex: "rentalDetails",
      key: "rentalDetails",
    },
    {
      title: "Price per Hour", // Hourly rate column
      dataIndex: "hourlyRate",
      key: "hourlyRate",
    },
    {
      title: "Status", // Status column to display booking status with color coding
      dataIndex: "status",
      key: "status",
      render: (status) => {
        // Conditional rendering based on the booking status
        let statusColor;
        if (status === "approved") {
          statusColor = "blue"; // Blue for approved
        } else if (status === "due-pay") {
          statusColor = "red"; // Red for due-pay
        } else {
          statusColor = "green"; // Green for others
        }
        return <Tag color={statusColor}>{status}</Tag>;
      },
    },
    {
      title: "Action", // Action column to handle car return
      key: "action",
      render: (_, carRecord) => {
        // Show "Return Car" button only if the status is "approved"
        if (carRecord.status === "approved") {
          return (
            <Button
              type="primary"
              onClick={() => handleCarReturn(carRecord)} // Trigger return process
              icon={<GiCarKey />} // Display car key icon
            >
              Return Car
            </Button>
          );
        }

        // Do not show any tag or button for statuses other than "approved"
        return null;
      },
    },
  ];

  // Display a loading spinner while bookings are being fetched
  if (isLoading) {
    return <Spin size="large" />;
  }

  // Filter out cars that are already returned (completed) or pending approval
  const carsToDisplay = carList.filter(
    (car) => car.status !== "completed" && car.status !== "pending"
  );

  // Render the table with the filtered car data
  return (
    <div>
      <div className="bg-white p-4 rounded-lg">
        <div className="h-full border-2 rounded-lg">
          {/* Table component from Ant Design to display the car data */}
          <Table dataSource={carsToDisplay} columns={tableColumns} />
        </div>
      </div>
    </div>
  );
};

export default ManageReturnCarPage;
