// import { Table, Tag } from "antd";
// import React from "react";
// import { AiOutlineDelete } from "react-icons/ai";
// import { IoIosAddCircleOutline } from "react-icons/io";
// import { MdOutlineMode } from "react-icons/md";
// import { GiCarKey } from "react-icons/gi";

// const ManageReturnCarPage = () => {
//   const dataSource = [
//     {
//       key: "1",
//       name: "Mike",
//       age: 32,
//       address: "10 Downing Street",
//       status: "On-Going",
//     },
//     {
//       key: "2",
//       name: "John",
//       age: 42,
//       address: "10 Downing Street",
//       status: "Complated",
//     },
//   ];

//   const columns = [
//     {
//       title: "Car Mode",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Rental Dates",
//       dataIndex: "age",
//       key: "age",
//     },
//     {
//       title: "Price",
//       dataIndex: "address",
//       key: "address",
//     },
//     {
//       title: "Availability",
//       dataIndex: "availability",
//       key: "address",
//       render: () => {
//         return (
//           <div>
//             <Tag color="blue" className="">
//               Panding
//             </Tag>
//             <Tag color="blue-inverse" className="">
//               Confirmed
//             </Tag>
//           </div>
//         );
//       },
//     },
//     {
//       title: "Action",
//       dataIndex: "action",
//       key: "action",
//       render: () => {
//         return (
//           <div className="bg-gray-100 p-1 rounded-lg hover:scale-125 transition-all w-fit">
//             <GiCarKey className="text-xl" />
//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <div>
//       <div className="bg-gray-200 p-4 space-y-4 rounded-lg  ">
//         <div className="h-full">
//           <Table dataSource={dataSource} columns={columns} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageReturnCarPage;

import { Table, Tag, Button } from "antd"; // Import Button for return option
import React, { useState } from "react"; // Import useState for managing state
import { GiCarKey } from "react-icons/gi"; // Import icon for return action

const ManageReturnCarPage = () => {
  // State to manage the booked cars data
  const [cars, setCars] = useState([
    {
      key: "1",
      name: "Mike",
      rentalDates: "2023-09-01 to 2023-09-10",
      price: "$200",
      status: "On-Going",
      availability: "Pending",
    },
    {
      key: "2",
      name: "John",
      rentalDates: "2023-09-05 to 2023-09-15",
      price: "$300",
      status: "Completed",
      availability: "Confirmed",
    },
  ]);

  // Function to handle car return
  const handleReturnCar = (record) => {
    // Update the status and availability of the returned car
    const updatedCars = cars.map((car) =>
      car.key === record.key
        ? { ...car, status: "Completed", availability: "Available" }
        : car
    );
    setCars(updatedCars);
  };

  // Define columns for the table
  const columns = [
    {
      title: "",
      key: "index",
      render: (_, __, index) => index + 1, // Display row index (1-based)
    },
    {
      title: "Car Model",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Rental Dates",
      dataIndex: "rentalDates",
      key: "rentalDates",
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
        const color = status === "Completed" ? "green" : "blue";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
      render: (availability) => {
        // Render the availability status
        const color = availability === "Available" ? "green" : "orange";
        return <Tag color={color}>{availability}</Tag>;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        // Render the return button only if the car is "On-Going"
        return record.status === "On-Going" ? (
          <Button
            type="primary"
            onClick={() => handleReturnCar(record)}
            icon={<GiCarKey />}
          >
            Return Car
          </Button>
        ) : (
          <span>Returned</span>
        );
      },
    },
  ];

  return (
    <div>
      <div className="bg-white p-4 rounded-lg">
        <div className="h-full border-2 rounded-lg">
          {/* Render the table with car data */}
          <Table dataSource={cars} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default ManageReturnCarPage;
