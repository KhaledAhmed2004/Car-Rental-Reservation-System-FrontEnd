// import { Table, Tag, Modal, Input, Button } from "antd";
// import React, { useState } from "react";
// import { RiEdit2Line } from "react-icons/ri";
// import { useGetMyBookingsQuery } from "../../redux/features/booking/bookingApi";

// // DataSource: Contains user rental data to be displayed in the table
// const dataSource = [
//   {
//     key: "1",
//     name: "Toyota Prius",
//     rentalDates: "2024-09-10 to 2024-09-15",
//     price: "$200",
//     status: "On-Going",
//   },
//   {
//     key: "2",
//     name: "Tesla Model 3",
//     rentalDates: "2024-08-05 to 2024-08-10",
//     price: "$300",
//     status: "Completed",
//   },
// ];

// // Columns: Defines the table columns, including title, dataIndex, and render for custom content
// const columns = [
//   {
//     title: "Car Model",
//     dataIndex: "name",
//     key: "name",
//   },
//   {
//     title: "Rental Dates",
//     dataIndex: "rentalDates",
//     key: "rentalDates",
//   },
//   {
//     title: "Price",
//     dataIndex: "price",
//     key: "price",
//   },
//   {
//     title: "Status",
//     dataIndex: "status",
//     key: "status",
//     render: (status: string) => {
//       return (
//         <Tag color={status === "On-Going" ? "blue" : "green"}>{status}</Tag>
//       );
//     },
//   },
// ];

// // UserOverView component: Displays user data and profile overview
// const UserOverView: React.FC = () => {
//   const { data, error, isLoading } = useGetMyBookingsQuery();

//   // State for editing modal
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [userInfo, setUserInfo] = useState({
//     name: "Khaled Ahmed Nayeem",
//     email: "john@example.com",
//     phone: "+1234567890",
//     preferences: "Economy class, Non-smoking",
//   });

//   // Handle input change
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setUserInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   // Show and hide modal
//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     // TODO: Save the updated profile details to server
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <div className="h-full p-4">
//       {/* Main container for table and profile card */}
//       <div className="w-full flex flex-col md:flex-row justify-between gap-4">
//         {/* Table displaying rental data */}
//         <div className="w-full md:w-[60%]">
//           <Table dataSource={dataSource} columns={columns} />
//         </div>

//         {/* Profile card section */}
//         <div className="bg-white p-4 w-full md:w-[40%] rounded-lg shadow-md">
//           {/* Profile Image */}
//           <div className="h-28 w-28 rounded-full bg-[url(./assets/me.png)] bg-no-repeat bg-cover bg-center mx-auto"></div>

//           {/* User Information */}
//           <div className="text-center mt-4">
//             <h2 className="font-bold text-lg">Name: {userInfo.name}</h2>
//             <h2 className="text-gray-500">Email: {userInfo.email}</h2>
//             <h2 className="text-gray-500">Phone: {userInfo.phone}</h2>
//             <h2 className="text-gray-500">
//               Preferences: {userInfo.preferences}
//             </h2>
//             <div className="flex justify-center mt-4">
//               <button
//                 className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-1"
//                 onClick={showModal}
//               >
//                 Edit Profile <RiEdit2Line />
//               </button>
//             </div>
//           </div>

//           {/* User Stats */}
//           <div className="mt-6 flex flex-col md:flex-row justify-between gap-4">
//             <div className="bg-white border-blue-500 border-2 rounded-lg p-2 text-center w-full md:w-1/3">
//               <p className="text-sm font-semibold text-gray-700">
//                 Payments:{" "}
//                 <span className="text-lg font-bold text-blue-600">$0000</span>
//               </p>
//             </div>
//             <div className="bg-white border-blue-500 border-2 rounded-lg p-2 text-center w-full md:w-1/3">
//               <p className="text-sm font-semibold text-gray-700">
//                 Total Rent:{" "}
//                 <span className="text-lg font-bold text-blue-600">02</span>
//               </p>
//             </div>
//             <div className="bg-white border-blue-500 border-2 rounded-lg p-2 text-center w-full md:w-1/3">
//               <p className="text-sm font-semibold text-gray-700">
//                 Upcoming:{" "}
//                 <span className="text-lg font-bold text-blue-600">02</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Edit Profile Modal */}
//       <Modal
//         title="Edit Profile"
//         visible={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//       >
//         <div className="space-y-4">
//           <Input
//             placeholder="Name"
//             name="name"
//             value={userInfo.name}
//             onChange={handleInputChange}
//           />
//           <Input
//             placeholder="Email"
//             name="email"
//             value={userInfo.email}
//             onChange={handleInputChange}
//           />
//           <Input
//             placeholder="Phone"
//             name="phone"
//             value={userInfo.phone}
//             onChange={handleInputChange}
//           />
//           <Input
//             placeholder="Preferences"
//             name="preferences"
//             value={userInfo.preferences}
//             onChange={handleInputChange}
//           />
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default UserOverView;

import { Table, Tag, Modal, Input, Button, Spin } from "antd";
import React, { useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { useGetMyBookingsQuery } from "../../redux/features/booking/bookingApi";

// UserOverView component: Displays user data and profile overview
const UserOverView: React.FC = () => {
  const { data, error, isLoading } = useGetMyBookingsQuery();

  // State for editing modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Khaled Ahmed Nayeem",
    email: "john@example.com",
    phone: "+1234567890",
    preferences: "Economy class, Non-smoking",
  });

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Show and hide modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // TODO: Save the updated profile details to server
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Loading and error handling
  if (isLoading) return <Spin size="large" />;
  if (error) return <div>Error loading bookings: {error.message}</div>;

  // Map the data to the structure needed for the Table
  const dataSource = data?.data.map((booking) => ({
    key: booking.id, // Assuming booking has a unique id
    // name: booking.carModel, // Adjust based on your data structure
    name: `${booking.carId.brand} ${booking.carId.model}`,
    rentalDates: `${booking.date} ${booking.startTime}`, // Adjust accordingly
    price: `$${booking.carId.pricePerHour}/hour`, // Adjust accordingly
    status: booking.status, // Adjust accordingly
  }));

  // Columns: Defines the table columns, including title, dataIndex, and render for custom content
  const columns = [
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
      render: (status: string) => {
        return (
          <Tag color={status === "confirmed" ? "blue" : "green"}>{status}</Tag>
        );
      },
    },
  ];

  return (
    <div className="h-full p-4">
      {/* Main container for table and profile card */}
      <div className="w-full flex flex-col md:flex-row justify-between gap-4">
        {/* Table displaying rental data */}
        <div className="w-full md:w-[60%]">
          <Table dataSource={dataSource} columns={columns} />
        </div>

        {/* Profile card section */}
        <div className="bg-white p-4 w-full md:w-[40%] rounded-lg shadow-md">
          {/* Profile Image */}
          <div className="h-28 w-28 rounded-full bg-[url(./assets/me.png)] bg-no-repeat bg-cover bg-center mx-auto"></div>

          {/* User Information */}
          <div className="text-center mt-4">
            <h2 className="font-bold text-lg">Name: {userInfo.name}</h2>
            <h2 className="text-gray-500">Email: {userInfo.email}</h2>
            <h2 className="text-gray-500">Phone: {userInfo.phone}</h2>
            <h2 className="text-gray-500">
              Preferences: {userInfo.preferences}
            </h2>
            <div className="flex justify-center mt-4">
              <button
                className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-1"
                onClick={showModal}
              >
                Edit Profile <RiEdit2Line />
              </button>
            </div>
          </div>

          {/* User Stats */}
          <div className="mt-6 flex flex-col md:flex-row justify-between gap-4">
            <div className="bg-white border-blue-500 border-2 rounded-lg p-2 text-center w-full md:w-1/3">
              <p className="text-sm font-semibold text-gray-700">
                Payments:{" "}
                <span className="text-lg font-bold text-blue-600">$0000</span>
              </p>
            </div>
            <div className="bg-white border-blue-500 border-2 rounded-lg p-2 text-center w-full md:w-1/3">
              <p className="text-sm font-semibold text-gray-700">
                Total Rent:{" "}
                <span className="text-lg font-bold text-blue-600">02</span>
              </p>
            </div>
            <div className="bg-white border-blue-500 border-2 rounded-lg p-2 text-center w-full md:w-1/3">
              <p className="text-sm font-semibold text-gray-700">
                Upcoming:{" "}
                <span className="text-lg font-bold text-blue-600">02</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal
        title="Edit Profile"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="space-y-4">
          <Input
            placeholder="Name"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Phone"
            name="phone"
            value={userInfo.phone}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Preferences"
            name="preferences"
            value={userInfo.preferences}
            onChange={handleInputChange}
          />
        </div>
      </Modal>
    </div>
  );
};

export default UserOverView;
