// import React, { useState, useEffect } from "react";
// import { Table, Tag, Tabs, Modal, message, Button, Form } from "antd";
// import { AiOutlineDelete } from "react-icons/ai";
// import { MdOutlineMode } from "react-icons/md";
// import { useForm } from "react-hook-form";
// import { DatePicker } from "antd";
// import {
//   useGetMyBookingsQuery,
//   useDeleteBookingMutation,
//   useUpdateBookingStatusMutation,
// } from "../../redux/features/booking/bookingApi";
// import { PayCircleOutlined } from "@ant-design/icons";

// const MyBooking = () => {
//   const { data, error, isLoading } = useGetMyBookingsQuery();
//   const [deleteBooking, { isLoading: isDeleting }] = useDeleteBookingMutation();
//   const [updateBookingStatus] = useUpdateBookingStatusMutation();
//   const { RangePicker } = DatePicker;

//   const [bookings, setBookings] = useState([]);
//   const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
//   const [isModifyModalVisible, setIsModifyModalVisible] = useState(false);
//   const [currentBooking, setCurrentBooking] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     reset,
//     formState: { errors },
//   } = useForm();

//   useEffect(() => {
//     if (data && data?.data) {
//       const transformedBookings = data.data.map((booking) => ({
//         key: booking._id,
//         carModel: `${booking.carId.brand} ${booking.carId.model}`,
//         rentalDates: `${booking.date} ${booking.startTime}`,
//         price: `$${booking.carId.pricePerHour}/hour`,
//         status: booking.status,
//         totalCost: booking.totalCost,
//         // additionalOptions: booking.additionalOptions,
//       }));
//       setBookings(transformedBookings);
//     }
//   }, [data]);

//   const upcomingBookings = bookings.filter(
//     (booking) => booking.status !== "completed"
//   );
//   const pastBookings = bookings.filter(
//     (booking) => booking.status === "completed"
//   );

//   const handleCancel = (record) => {
//     Modal.confirm({
//       title: "Are you sure you want to cancel and delete this booking?",
//       onOk: async () => {
//         try {
//           await deleteBooking({ id: record.key });
//           const updatedBookings = bookings.filter(
//             (booking) => booking.key !== record.key
//           );
//           setBookings(updatedBookings);
//           message.success("Booking canceled and deleted.");
//         } catch (error) {
//           message.error("Failed to delete the booking.");
//         }
//       },
//     });
//   };

//   const handleModify = (key) => {
//     const booking = bookings.find((b) => b.key === key);
//     setCurrentBooking(booking);
//     setValue("carModel", booking.carModel);
//     setValue("price", booking.price);
//     setValue("rentalDates", booking.rentalDates); // Set initial date values
//     setIsModifyModalVisible(true);
//   };

//   const handlePayment = (record) => {
//     setCurrentBooking(record);
//     reset(); // Reset the form fields
//     setValue("carDetails", `${record?.carModel}`);
//     setValue("amountDue", `₹${record.totalCost.toFixed(2)}`);
//     setIsPaymentModalVisible(true);
//   };

//   const onFinish = async (values) => {
//     console.log("Payment details:", values);
//     setLoading(true);
//     try {
//       // Simulate payment processing logic
//       setTimeout(async () => {
//         await updateBookingStatus({
//           id: currentBooking?.key,
//           status: "completed",
//         });
//         setLoading(false);
//         message.success(
//           "Payment processed successfully and booking status updated to completed."
//         );
//         setIsModalVisible(false);
//         reset(); // Reset the form after submission
//       }, 2000);
//     } catch (error) {
//       setLoading(false);
//       message.error("Payment processing failed.");
//     }
//   };

//   const onFinishModify = async (values) => {
//     console.log("Updated booking values:", values);
//     // Update booking logic goes here...
//     setIsModifyModalVisible(false);
//     reset(); // Reset the form after submission
//   };

//   const columns = [
//     {
//       title: "Car Model",
//       dataIndex: "carModel",
//       key: "carModel",
//     },
//     {
//       title: "Rental Dates",
//       dataIndex: "rentalDates",
//       key: "rentalDates",
//     },
//     {
//       title: "Price Per Hour",
//       dataIndex: "price",
//       key: "price",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status) => {
//         let color = status === "completed" ? "green" : "blue";
//         return <Tag color={color}>{status}</Tag>;
//       },
//     },
//     {
//       title: "Action",
//       dataIndex: "action",
//       key: "action",
//       render: (_, record) => (
//         <div className="flex gap-2">
//           {record.status === "pending" && (
//             <>
//               <div
//                 className="bg-gray-100 p-1 rounded-lg hover:scale-125 transition-all cursor-pointer"
//                 onClick={() => handleCancel(record)}
//               >
//                 <AiOutlineDelete className="text-xl" />
//               </div>
//               <div
//                 className="bg-gray-100 p-1 rounded-lg hover:scale-125 transition-all cursor-pointer"
//                 onClick={() => handleModify(record.key)}
//               >
//                 <MdOutlineMode className="text-xl" />
//               </div>
//             </>
//           )}
//           {record.status === "due-pay" && (
//             <Button type="primary" onClick={() => handlePayment(record)}>
//               Pay Now
//             </Button>
//           )}
//         </div>
//       ),
//     },
//   ];

//   const items = [
//     {
//       key: "1",
//       label: "Upcoming Bookings",
//       children: (
//         <Table
//           dataSource={upcomingBookings}
//           columns={columns}
//           pagination={{ pageSize: 5 }}
//         />
//       ),
//     },
//     {
//       key: "2",
//       label: "Past Bookings",
//       children: (
//         <Table
//           dataSource={pastBookings}
//           columns={columns}
//           pagination={{ pageSize: 5 }}
//         />
//       ),
//     },
//   ];

//   return (
//     <div className="p-4">
//       <div className="bg-white p-4 rounded-lg shadow-md">
//         <Tabs defaultActiveKey="1" items={items} />

//         {/* Payment Modal */}
//         <Modal
//           title="Complete Your Payment"
//           open={isPaymentModalVisible}
//           onCancel={() => setIsPaymentModalVisible(false)}
//           footer={null}
//         >
//           <form onSubmit={handleSubmit(onFinish)}>
//             <div>
//               <label>Car Details</label>
//               <input
//                 type="text"
//                 disabled
//                 {...register("carDetails")}
//                 className="ant-input"
//               />
//             </div>

//             <div>
//               <label>Amount Due</label>
//               <input
//                 type="text"
//                 disabled
//                 {...register("amountDue")}
//                 className="ant-input"
//               />
//             </div>

//             <div>
//               <label>Payment Method</label>
//               <select
//                 {...register("paymentMethod", { required: true })}
//                 className="ant-select"
//               >
//                 <option value="">Select payment method</option>
//                 <option value="creditCard">Credit Card</option>
//                 <option value="paypal">PayPal</option>
//                 <option value="bankTransfer">Bank Transfer</option>
//               </select>
//               {errors.paymentMethod && (
//                 <span className="text-red-600">
//                   Please select a payment method!
//                 </span>
//               )}
//             </div>

//             <div>
//               <label>Payment Details</label>
//               <textarea
//                 rows={4}
//                 placeholder="Enter your payment details"
//                 {...register("paymentDetails", { required: true })}
//                 className="ant-input"
//               />
//               {errors.paymentDetails && (
//                 <span className="text-red-600">
//                   Please enter your payment details!
//                 </span>
//               )}
//             </div>

//             <div>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 icon={<PayCircleOutlined />}
//                 loading={loading}
//               >
//                 Pay Now
//               </Button>
//             </div>
//           </form>
//         </Modal>

//         {/* Modify Booking Modal */}
//         <Modal
//           title="Modify Your Booking"
//           open={isModifyModalVisible}
//           onCancel={() => setIsModifyModalVisible(false)}
//           footer={null}
//         >
//           <form onSubmit={handleSubmit(onFinishModify)}>
//             <div>
//               <label>Car Model</label>
//               <input
//                 type="text"
//                 disabled
//                 {...register("carModel")}
//                 className="ant-input"
//               />
//             </div>
//             <div>
//               <label>Price</label>
//               <input
//                 type="text"
//                 {...register("price")}
//                 className="ant-input"
//                 disabled
//               />
//             </div>
//             <div>
//               <label>Driving License</label>
//               <input
//                 type="text"
//                 {...register("drivingLicense", { required: true })}
//                 className="ant-input"
//               />
//               {errors.drivingLicense && (
//                 <span className="text-red-600">
//                   Driving license is required!
//                 </span>
//               )}
//             </div>

//             <div>
//               <label>NID or Passport</label>
//               <input
//                 type="text"
//                 {...register("nidOrPassport", { required: true })}
//                 className="ant-input"
//               />
//               {errors.nidOrPassport && (
//                 <span className="text-red-600">
//                   NID or Passport is required!
//                 </span>
//               )}
//             </div>

//             <div>
//               <label>Additional Options</label>
//               <div>
//                 <label>
//                   <input
//                     type="checkbox"
//                     {...register("additionalOptions.childSeat")}
//                   />
//                   Child Seat
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     {...register("additionalOptions.gps")}
//                   />
//                   GPS
//                 </label>
//               </div>
//             </div>

//             <Button type="primary" htmlType="submit" loading={loading}>
//               Modify Booking
//             </Button>
//           </form>
//         </Modal>
//         {/* <Modal
//           title="Modify Booking"
//           open={isModifyModalVisible}
//           onCancel={() => {
//             setIsModifyModalVisible(false);
//             reset();
//           }}
//           onOk={handleSubmit(onFinish)}
//         >
//           <form onSubmit={handleSubmit(onFinish)}>
//             <div className="space-y-4">
//               <div>
//                 <label>Car Model</label>
//                 <input
//                   type="text"
//                   {...register("carModel")}
//                   className="ant-input"
//                   disabled
//                 />
//               </div>

//               <div>
//                 <label>Price</label>
//                 <input
//                   type="text"
//                   {...register("price")}
//                   className="ant-input"
//                   disabled
//                 />
//               </div>
//             </div>
//           </form>
//         </Modal> */}
//       </div>
//     </div>
//   );
// };

// export default MyBooking;

// import React, { useState, useEffect } from "react";
// import { Table, Tag, Tabs, Modal, message, Button, Form } from "antd";
// import { AiOutlineDelete } from "react-icons/ai";
// import { MdOutlineMode } from "react-icons/md";
// import { useForm } from "react-hook-form";
// import { DatePicker } from "antd";
// import {
//   useGetMyBookingsQuery,
//   useDeleteBookingMutation,
//   useUpdateBookingStatusMutation,
// } from "../../redux/features/booking/bookingApi";
// import { PayCircleOutlined } from "@ant-design/icons";

// const MyBooking = () => {
//   const { data, error, isLoading } = useGetMyBookingsQuery();
//   const [deleteBooking, { isLoading: isDeleting }] = useDeleteBookingMutation();
//   const [updateBookingStatus] = useUpdateBookingStatusMutation();
//   const { RangePicker } = DatePicker;

//   const [bookings, setBookings] = useState([]);
//   const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
//   const [isModifyModalVisible, setIsModifyModalVisible] = useState(false);
//   const [currentBooking, setCurrentBooking] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     reset,
//     formState: { errors },
//   } = useForm();

//   // console.log(data?.data);

//   useEffect(() => {
//     if (data && data?.data) {
//       const transformedBookings = data.data.map((booking) => ({
//         key: booking._id,
//         carModel: `${booking.carId.brand} ${booking.carId.model}`,
//         rentalDates: `${booking.date} ${booking.startTime}`,
//         price: `$${booking.carId.pricePerHour}/hour`,
//         status: booking.status,
//         totalCost: booking.totalCost,
//         drivingLicense: booking.drivingLicense,
//         nidOrPassport: booking.nidOrPassport,
//         additionalOptions: [
//           { name: "Child Seat", selected: booking.additionalOptions.childSeat },
//           { name: "GPS", selected: booking.additionalOptions.gps },
//         ], // Convert to array
//       }));
//       setBookings(transformedBookings);
//     }
//   }, [data]);

//   const upcomingBookings = bookings.filter(
//     (booking) => booking.status !== "completed"
//   );
//   const pastBookings = bookings.filter(
//     (booking) => booking.status === "completed"
//   );

//   const handleCancel = (record) => {
//     Modal.confirm({
//       title: "Are you sure you want to cancel and delete this booking?",
//       onOk: async () => {
//         try {
//           await deleteBooking({ id: record.key });
//           const updatedBookings = bookings.filter(
//             (booking) => booking.key !== record.key
//           );
//           setBookings(updatedBookings);
//           message.success("Booking canceled and deleted.");
//         } catch (error) {
//           message.error("Failed to delete the booking.");
//         }
//       },
//     });
//   };

//   const handleModify = (key) => {
//     const booking = bookings.find((b) => b.key === key);
//     if (booking) {
//       console.log("Booking to modify:", booking);
//       setCurrentBooking(booking);
//       setValue("carModel", booking.carModel);
//       setValue("price", booking.price);
//       setValue("drivingLicense", booking.drivingLicense);
//       setValue("nidOrPassport", booking.nidOrPassport);
//       setValue(
//         "additionalOptions.childSeat",
//         booking.additionalOptions.childSeat
//       ); // Set nested option
//       setValue("additionalOptions.gps", booking.additionalOptions.gps); // Set nested option
//       setIsModifyModalVisible(true);
//     }
//   };

//   const handlePayment = (record) => {
//     setCurrentBooking(record);
//     reset(); // Reset the form fields
//     setValue("carDetails", `${record?.carModel}`);
//     setValue("amountDue", `₹${record.totalCost.toFixed(2)}`);
//     setIsPaymentModalVisible(true);
//   };

//   const onFinish = async (values) => {
//     console.log("Payment details:", values);
//     setLoading(true);
//     try {
//       // Simulate payment processing logic
//       setTimeout(async () => {
//         await updateBookingStatus({
//           id: currentBooking?.key,
//           status: "completed",
//         });
//         setLoading(false);
//         message.success(
//           "Payment processed successfully and booking status updated to completed."
//         );
//         setIsModalVisible(false);
//         reset(); // Reset the form after submission
//       }, 2000);
//     } catch (error) {
//       setLoading(false);
//       message.error("Payment processing failed.");
//     }
//   };
//   // const handlePayment = (record) => {
//   //   setCurrentBooking(record);
//   //   reset(); // Reset the form fields
//   //   setValue("carDetails", `${record?.carModel}`);
//   //   setValue("amountDue", `₹${record.totalCost.toFixed(2)}`);
//   //   setIsPaymentModalVisible(true);
//   // };

//   // const onFinish = async (values) => {
//   //   console.log("Payment details:", values);
//   //   setLoading(true);
//   //   try {
//   //     // Simulate payment processing logic
//   //     setTimeout(async () => {
//   //       await updateBookingStatus({
//   //         id: currentBooking?.key,
//   //         status: "completed",
//   //       });
//   //       setLoading(false);
//   //       message.success(
//   //         "Payment processed successfully and booking status updated to completed."
//   //       );
//   //       setIsModalVisible(false);
//   //       reset(); // Reset the form after submission
//   //     }, 2000);
//   //   } catch (error) {
//   //     setLoading(false);
//   //     message.error("Payment processing failed.");
//   //   }
//   // };

//   // const onFinishModify = async (values) => {
//   //   console.log("Updated booking values:", values);

//   //   // Assuming you have a mutation to update the booking
//   //   // try {
//   //   //   await updateBookingStatus({
//   //   //     id: currentBooking?.key,
//   //   //     rentalDates: values.rentalDates,
//   //   //     additionalOptions: values.additionalOptions, // Include updated additionalOptions
//   //   //     drivingLicense: values.drivingLicense, // Include driving license
//   //   //     nidOrPassport: values.nidOrPassport, // Include NID or passport
//   //   //   });

//   //   //   message.success("Booking modified successfully.");
//   //   //   setIsModifyModalVisible(false);
//   //   //   reset(); // Reset the form after submission
//   //   // } catch (error) {
//   //   //   message.error("Failed to modify the booking.");
//   //   // }
//   // };
//   const onFinishModify = async (values) => {
//     console.log("Updated booking values:", values); // Should log modified values
//     try {
//       await updateBookingStatus({
//         id: currentBooking?.key,
//         rentalDates: values.rentalDates,
//         additionalOptions: values.additionalOptions,
//         drivingLicense: values.drivingLicense,
//         nidOrPassport: values.nidOrPassport,
//       });
//       message.success("Booking modified successfully.");
//       setIsModifyModalVisible(false);
//       reset(); // Reset form fields
//     } catch (error) {
//       message.error("Failed to modify the booking.");
//     }
//   };
//   const columns = [
//     {
//       title: "Car Model",
//       dataIndex: "carModel",
//       key: "carModel",
//     },
//     {
//       title: "Rental Dates",
//       dataIndex: "rentalDates",
//       key: "rentalDates",
//     },
//     {
//       title: "Price Per Hour",
//       dataIndex: "price",
//       key: "price",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status) => {
//         let color = status === "completed" ? "green" : "blue";
//         return <Tag color={color}>{status}</Tag>;
//       },
//     },
//     {
//       title: "Action",
//       dataIndex: "action",
//       key: "action",
//       render: (_, record) => (
//         <div className="flex gap-2">
//           {record.status === "pending" && (
//             <>
//               <div
//                 className="bg-gray-100 p-1 rounded-lg hover:scale-125 transition-all cursor-pointer"
//                 onClick={() => handleCancel(record)}
//               >
//                 <AiOutlineDelete className="text-xl" />
//               </div>
//               <div
//                 className="bg-gray-100 p-1 rounded-lg hover:scale-125 transition-all cursor-pointer"
//                 onClick={() => handleModify(record.key)}
//               >
//                 <MdOutlineMode className="text-xl" />
//               </div>
//             </>
//           )}
//           {record.status === "due-pay" && (
//             <Button type="primary" onClick={() => handlePayment(record)}>
//               Pay Now
//             </Button>
//           )}
//         </div>
//       ),
//     },
//   ];

//   const items = [
//     {
//       key: "1",
//       label: "Upcoming Bookings",
//       children: (
//         <Table
//           dataSource={upcomingBookings}
//           columns={columns}
//           pagination={{ pageSize: 5 }}
//         />
//       ),
//     },
//     {
//       key: "2",
//       label: "Past Bookings",
//       children: (
//         <Table
//           dataSource={pastBookings}
//           columns={columns}
//           pagination={{ pageSize: 5 }}
//         />
//       ),
//     },
//   ];

//   return (
//     <div className="p-4">
//       <div className="bg-white p-4 rounded-lg shadow-md">
//         <Tabs defaultActiveKey="1" items={items} />

//         {/* Payment Modal */}

//         <Modal
//           title="Complete Your Payment"
//           open={isPaymentModalVisible}
//           onCancel={() => setIsPaymentModalVisible(false)}
//           footer={null}
//         >
//           <form onSubmit={handleSubmit(onFinish)}>
//             <div>
//               <label>Car Details</label>
//               <input
//                 type="text"
//                 disabled
//                 {...register("carDetails")}
//                 className="ant-input"
//               />
//             </div>

//             <div>
//               <label>Amount Due</label>
//               <input
//                 type="text"
//                 disabled
//                 {...register("amountDue")}
//                 className="ant-input"
//               />
//             </div>

//             <div>
//               <label>Payment Method</label>
//               <select
//                 {...register("paymentMethod", { required: true })}
//                 className="ant-select"
//               >
//                 <option value="">Select payment method</option>
//                 <option value="creditCard">Credit Card</option>
//                 <option value="paypal">PayPal</option>
//                 <option value="bankTransfer">Bank Transfer</option>
//               </select>
//               {errors.paymentMethod && (
//                 <span className="text-red-600">
//                   Please select a payment method!
//                 </span>
//               )}
//             </div>

//             <div>
//               <label>Payment Details</label>
//               <textarea
//                 rows={4}
//                 placeholder="Enter your payment details"
//                 {...register("paymentDetails", { required: true })}
//                 className="ant-input"
//               />
//               {errors.paymentDetails && (
//                 <span className="text-red-600">
//                   Please enter your payment details!
//                 </span>
//               )}
//             </div>

//             <div>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 icon={<PayCircleOutlined />}
//                 loading={loading}
//               >
//                 Pay Now
//               </Button>
//             </div>
//           </form>
//         </Modal>

//         {/* Modify Booking Modal */}
//         <Modal
//           title="Modify Your Booking"
//           open={isModifyModalVisible}
//           onCancel={() => setIsModifyModalVisible(false)}
//           footer={null}
//         >
//           <form onSubmit={handleSubmit(onFinishModify)}>
//             <div>
//               <label>Car Model</label>
//               <input
//                 type="text"
//                 disabled
//                 {...register("carModel")}
//                 className="ant-input"
//               />
//             </div>
//             <div>
//               <label>Price</label>
//               <input
//                 type="text"
//                 {...register("price")}
//                 className="ant-input"
//                 disabled
//               />
//             </div>
//             <div>
//               <label>Driving License</label>
//               <input
//                 type="text"
//                 {...register("drivingLicense", { required: true })}
//                 className="ant-input"
//               />
//               {errors.drivingLicense && (
//                 <span className="text-red-600">
//                   Driving license is required!
//                 </span>
//               )}
//             </div>

//             <div>
//               <label>NID or Passport</label>
//               <input
//                 type="text"
//                 {...register("nidOrPassport", { required: true })}
//                 className="ant-input"
//               />
//               {errors.nidOrPassport && (
//                 <span className="text-red-600">
//                   NID or Passport is required!
//                 </span>
//               )}
//             </div>

//             <div>
//               <label>Additional Options</label>
//               <div>
//                 <label>
//                   <input
//                     type="checkbox"
//                     {...register("additionalOptions.childSeat")}
//                   />
//                   Child Seat
//                 </label>
//                 <label>
//                   <input
//                     type="checkbox"
//                     {...register("additionalOptions.gps")}
//                   />
//                   GPS
//                 </label>
//               </div>
//             </div>

//             <Button type="primary" htmlType="submit" loading={loading}>
//               Modify Booking
//             </Button>
//           </form>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default MyBooking;

import React, { useState, useEffect } from "react";
import { Table, Tag, Tabs, Modal, message, Button, Form } from "antd";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineMode } from "react-icons/md";
import { useForm } from "react-hook-form";
import { DatePicker } from "antd";
import {
  useGetMyBookingsQuery,
  useDeleteBookingMutation,
  useUpdateBookingStatusMutation,
} from "../../redux/features/booking/bookingApi";
import { PayCircleOutlined } from "@ant-design/icons";

const MyBooking = () => {
  const { data, error, isLoading } = useGetMyBookingsQuery();
  const [deleteBooking, { isLoading: isDeleting }] = useDeleteBookingMutation();
  const [updateBookingStatus] = useUpdateBookingStatusMutation();
  const { RangePicker } = DatePicker;

  const [bookings, setBookings] = useState([]);
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
  const [isModifyModalVisible, setIsModifyModalVisible] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (data && data?.data) {
      const transformedBookings = data.data.map((booking) => ({
        key: booking._id,
        carModel: `${booking.carId.brand} ${booking.carId.model}`,
        rentalDates: `${booking.date} ${booking.startTime}`,
        price: `$${booking.carId.pricePerHour}/hour`,
        status: booking.status,
        totalCost: booking.totalCost,
        drivingLicense: booking.drivingLicense,
        nidOrPassport: booking.nidOrPassport,
        additionalOptions: [
          { name: "Child Seat", selected: booking.additionalOptions.childSeat },
          { name: "GPS", selected: booking.additionalOptions.gps },
        ],
      }));
      setBookings(transformedBookings);
    }
  }, [data]);

  const upcomingBookings = bookings.filter(
    (booking) => booking.status !== "completed"
  );
  const pastBookings = bookings.filter(
    (booking) => booking.status === "completed"
  );

  const handleCancel = (record) => {
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
        }
      },
    });
  };

  const handleModify = (key) => {
    const booking = bookings.find((b) => b.key === key);
    setCurrentBooking(booking);
    setValue("carModel", booking.carModel);
    setValue("price", booking.price);
    setValue("drivingLicense", booking.drivingLicense);
    setValue("nidOrPassport", booking.nidOrPassport);
    setValue(
      "additionalOptions.childSeat",
      booking.additionalOptions.find((option) => option.name === "Child Seat")
        .selected
    );
    setValue(
      "additionalOptions.gps",
      booking.additionalOptions.find((option) => option.name === "GPS").selected
    );

    setIsModifyModalVisible(true);
  };

  const handlePayment = (record) => {
    setCurrentBooking(record);
    reset(); // Reset the form fields
    setValue("carDetails", `${record?.carModel}`);
    setValue("amountDue", `₹${record.totalCost.toFixed(2)}`);
    setIsPaymentModalVisible(true);
  };

  const onFinish = async (values) => {
    console.log("Payment details:", values);
    setLoading(true);
    try {
      // Simulate payment processing logic
      setTimeout(async () => {
        await updateBookingStatus({
          id: currentBooking?.key,
          status: "completed",
        });
        setLoading(false);
        message.success(
          "Payment processed successfully and booking status updated to completed."
        );
        setIsModalVisible(false);
        reset(); // Reset the form after submission
      }, 2000);
    } catch (error) {
      setLoading(false);
      message.error("Payment processing failed.");
    }
  };

  const onFinishModify = async (values) => {
    console.log("Updated booking values:", values);

    // Logic to update the booking in the backend or state
    try {
      // Assuming you have a function or API call to update the booking
      await updateBookingStatus({
        id: currentBooking?.key,
        updatedData: values,
      });

      // Optionally, you can update the bookings state to reflect the changes
      const updatedBookings = bookings.map((booking) =>
        booking.key === currentBooking.key ? { ...booking, ...values } : booking
      );

      setBookings(updatedBookings);
      message.success("Booking updated successfully!");
    } catch (error) {
      message.error("Failed to update the booking.");
    }

    setIsModifyModalVisible(false); // Close the modal
    reset(); // Reset the form after submission
  };

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
                onClick={() => handleCancel(record)}
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
          {record.status === "due-pay" && (
            <Button type="primary" onClick={() => handlePayment(record)}>
              Pay Now
            </Button>
          )}
        </div>
      ),
    },
  ];

  const items = [
    {
      key: "1",
      label: "Upcoming Bookings",
      children: (
        <Table
          dataSource={upcomingBookings}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      ),
    },
    {
      key: "2",
      label: "Past Bookings",
      children: (
        <Table
          dataSource={pastBookings}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      ),
    },
  ];

  return (
    <div className="p-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Tabs defaultActiveKey="1" items={items} />

        {/* Payment Modal */}
        <Modal
          title="Complete Your Payment"
          open={isPaymentModalVisible}
          onCancel={() => setIsPaymentModalVisible(false)}
          footer={null}
        >
          <form onSubmit={handleSubmit(onFinish)}>
            <div>
              <label>Car Details</label>
              <input
                type="text"
                disabled
                {...register("carDetails")}
                className="ant-input"
              />
            </div>

            <div>
              <label>Amount Due</label>
              <input
                type="text"
                disabled
                {...register("amountDue")}
                className="ant-input"
              />
            </div>

            <div>
              <label>Payment Method</label>
              <select
                {...register("paymentMethod", { required: true })}
                className="ant-select"
              >
                <option value="">Select payment method</option>
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bankTransfer">Bank Transfer</option>
              </select>
              {errors.paymentMethod && (
                <span className="text-red-600">
                  Please select a payment method!
                </span>
              )}
            </div>

            <div>
              <label>Payment Details</label>
              <textarea
                rows={4}
                placeholder="Enter your payment details"
                {...register("paymentDetails", { required: true })}
                className="ant-input"
              />
              {errors.paymentDetails && (
                <span className="text-red-600">
                  Please enter your payment details!
                </span>
              )}
            </div>

            <div>
              <Button
                type="primary"
                htmlType="submit"
                icon={<PayCircleOutlined />}
                loading={loading}
              >
                Pay Now
              </Button>
            </div>
          </form>
        </Modal>

        {/* Modify Booking Modal */}
        <Modal
          title="Modify Your Booking"
          open={isModifyModalVisible}
          onCancel={() => setIsModifyModalVisible(false)}
          footer={null}
        >
          <form onSubmit={handleSubmit(onFinishModify)}>
            <div>
              <label>Car Model</label>
              <input
                type="text"
                disabled
                {...register("carModel")}
                className="ant-input"
              />
            </div>
            <div>
              <label>Price</label>
              <input
                type="text"
                {...register("price")}
                className="ant-input"
                disabled
              />
            </div>
            <div>
              <label>Driving License</label>
              <input
                type="text"
                {...register("drivingLicense", { required: true })}
                className="ant-input"
              />
              {errors.drivingLicense && (
                <span className="text-red-600">
                  Driving license is required!
                </span>
              )}
            </div>

            <div>
              <label>NID or Passport</label>
              <input
                type="text"
                {...register("nidOrPassport", { required: true })}
                className="ant-input"
              />
              {errors.nidOrPassport && (
                <span className="text-red-600">
                  NID or Passport is required!
                </span>
              )}
            </div>

            <div>
              <label>Additional Options</label>
              <div>
                <label>
                  <input
                    type="checkbox"
                    {...register("additionalOptions.childSeat")}
                  />
                  Child Seat
                </label>
                <label>
                  <input
                    type="checkbox"
                    {...register("additionalOptions.gps")}
                  />
                  GPS
                </label>
              </div>
            </div>

            <Button type="primary" htmlType="submit" loading={loading}>
              Modify Booking
            </Button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default MyBooking;
