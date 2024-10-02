// // // in this code all are right only add car problem
// // // import { Modal, Table, Button, Upload, message, Spin } from "antd";
// // // import React, { useState, useEffect } from "react";
// // // import { AiOutlineDelete } from "react-icons/ai";
// // // import { MdOutlineMode } from "react-icons/md";
// // // import { IoIosAddCircleOutline } from "react-icons/io";
// // // import { UploadOutlined } from "@ant-design/icons";
// // // import { useForm } from "react-hook-form";
// // // import {
// // //   useDeleteCarMutation,
// // //   useGetAllCarsQuery,
// // //   useUpdateCarMutation,
// // //   useAddCarMutation,
// // // } from "../../redux/features/car/carApi";

// // // const ManageCarPage = () => {
// // //   const imgbb_img_hosting_api = `https://api.imgbb.com/1/upload?key=c9694ec1b6ea6c2dc253de13f8806da0`;

// // //   const { data: cars, error, isLoading } = useGetAllCarsQuery();
// // //   const [updateCar] = useUpdateCarMutation();
// // //   const [deleteCar] = useDeleteCarMutation();
// // //   const [addCar] = useAddCarMutation();

// // //   // State management
// // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // //   const [isEditing, setIsEditing] = useState(false);
// // //   const [currentCar, setCurrentCar] = useState(null);
// // //   const [imageList, setImageList] = useState<string[]>([]);
// // //   const [dataSource, setDataSource] = useState([]); // Initialize empty state for fetched data

// // //   // Form hook setup
// // //   const { register, handleSubmit, reset, setValue } = useForm();

// // //   // Effect to update dataSource when cars data is fetched
// // //   useEffect(() => {
// // //     if (cars && !isLoading) {
// // //       const formattedCars = cars.data
// // //         .filter((car) => !car.isDeleted) // Filter out deleted cars
// // //         .map((car, index) => ({
// // //           key: car._id,
// // //           brand: car.brand,
// // //           model: car.model,
// // //           color: car.color,
// // //           description: car.description,
// // //           pricePerHour: car.pricePerHour,
// // //           fuelType: car.fuelType,
// // //           transmission: car.transmission,
// // //           seats: car.seats,
// // //           luggageCapacity: car.luggageCapacity,
// // //           doors: car.doors,
// // //           rating: car.rating,
// // //           status: car.status,
// // //           features: car.features,
// // //           images: car.images,
// // //           mileage: car.mileage,
// // //           isDeleted: car.isDeleted,
// // //         }));
// // //       setDataSource(formattedCars);
// // //     }
// // //   }, [cars, isLoading]);

// // //   // Show modal function
// // //   const showModal = (car) => {
// // //     if (car) {
// // //       setValue("brand", car.brand);
// // //       setValue("model", car.model);
// // //       setValue("color", car.color);
// // //       setValue("description", car.description);
// // //       setValue("pricePerHour", car.pricePerHour);
// // //       setValue("fuelType", car.fuelType);
// // //       setValue("transmission", car.transmission);
// // //       setValue("seats", car.seats);
// // //       setValue("luggageCapacity", car.luggageCapacity);
// // //       setValue("doors", car.doors);
// // //       setValue("rating", car.rating);
// // //       setValue("status", car.status);
// // //       setValue("mileage", car.mileage);
// // //       setImageList(car.images);
// // //     }
// // //     setCurrentCar(car);
// // //     setIsEditing(!!car);
// // //     setIsModalOpen(true);
// // //   };

// // //   // Handle modal cancel
// // //   const handleCancel = () => {
// // //     setIsModalOpen(false);
// // //     setCurrentCar(null);
// // //     reset();
// // //     setImageList([]);
// // //   };

// // //   // Form submission handler
// // //   const onSubmit = async (values) => {
// // //     console.log(values);

// // //     const carData = {
// // //       ...values,
// // //       images: imageList,
// // //     };

// // //     if (isEditing) {
// // //       try {
// // //         // Call the updateCar mutation with the car ID and updated data
// // //         await updateCar({ id: currentCar?.key, carData }).unwrap();
// // //         message.success("Car updated successfully.");

// // //         // Update local state after successful API call
// // //         const updatedCars = dataSource.map((car) =>
// // //           car.key === currentCar.key ? { ...car, ...carData } : car
// // //         );
// // //         setDataSource(updatedCars);
// // //       } catch (error) {
// // //         message.error("Failed to update car.");
// // //       }
// // //     } else {
// // //       try {
// // //         await addCar(carData).unwrap();
// // //         setDataSource([...dataSource, carData]);
// // //         message.success("Car added successfully.");
// // //       } catch (error) {
// // //         message.error("Failed to add car.");
// // //       }
// // //     }
// // //     handleCancel();
// // //   };

// // //   // Handle delete
// // //   const handleDelete = (key) => {
// // //     Modal.confirm({
// // //       title: "Are you sure you want to delete this car?",
// // //       onOk: async () => {
// // //         try {
// // //           await deleteCar(key).unwrap(); // Use the deleteCar mutation
// // //           message.success("Car deleted successfully.");

// // //           // Remove the car from local state
// // //           setDataSource(dataSource.filter((car) => car.key !== key));
// // //         } catch (error) {
// // //           message.error("Failed to delete car.");
// // //         }
// // //       },
// // //     });
// // //   };

// // //   // Define table columns
// // //   const columns = [
// // //     { title: "No.", key: "index", render: (_, __, index) => index + 1 },
// // //     { title: "Brand", dataIndex: "brand", key: "brand" },
// // //     { title: "Model", dataIndex: "model", key: "model" },
// // //     { title: "Color", dataIndex: "color", key: "color" },
// // //     { title: "Description", dataIndex: "description", key: "description" },
// // //     { title: "Price per Hour", dataIndex: "pricePerHour", key: "pricePerHour" },
// // //     { title: "Fuel Type", dataIndex: "fuelType", key: "fuelType" },
// // //     { title: "Transmission", dataIndex: "transmission", key: "transmission" },
// // //     { title: "Seats", dataIndex: "seats", key: "seats" },
// // //     {
// // //       title: "Luggage Capacity",
// // //       dataIndex: "luggageCapacity",
// // //       key: "luggageCapacity",
// // //     },
// // //     { title: "Doors", dataIndex: "doors", key: "doors" },
// // //     { title: "Rating", dataIndex: "rating", key: "rating" },
// // //     { title: "Status", dataIndex: "status", key: "status" },
// // //     {
// // //       title: "Action",
// // //       key: "action",
// // //       render: (_, record) => (
// // //         <div className="flex gap-2">
// // //           <Button
// // //             icon={<AiOutlineDelete />}
// // //             onClick={() => handleDelete(record.key)}
// // //             className="bg-red-500 text-white"
// // //           />
// // //           <Button
// // //             icon={<MdOutlineMode />}
// // //             onClick={() => showModal(record)}
// // //             className="bg-blue-500 text-white"
// // //           />
// // //         </div>
// // //       ),
// // //     },
// // //   ];

// // //   // Handle image upload
// // //   const handleImageUpload = (file) => {
// // //     setImageList([...imageList, URL.createObjectURL(file)]);
// // //     return false;
// // //   };

// // //   // Show loading state
// // //   if (isLoading) return <Spin tip="Loading cars..." />;
// // //   if (error) return <div>Error fetching cars</div>;

// // //   return (
// // //     <div className="p-4">
// // //       <div className="mb-4">
// // //         <Button
// // //           type="primary"
// // //           onClick={() => showModal(null)}
// // //           icon={<IoIosAddCircleOutline />}
// // //         >
// // //           Add Car
// // //         </Button>
// // //       </div>
// // //       <div className="overflow-x-auto">
// // //         <Table
// // //           dataSource={dataSource}
// // //           columns={columns}
// // //           className="border-2 rounded-lg"
// // //           scroll={{ x: "max-content" }}
// // //         />
// // //       </div>

// // //       <Modal
// // //         title={isEditing ? "Edit Car" : "Add Car"}
// // //         open={isModalOpen}
// // //         onCancel={handleCancel}
// // //         footer={null}
// // //         className="max-w-lg mx-auto"
// // //       >
// // //         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// // //           {/* Brand Input */}
// // //           <label htmlFor="brand">Brand</label>
// // //           <input
// // //             id="brand"
// // //             {...register("brand")}
// // //             placeholder="Brand"
// // //             className="w-full p-2 border rounded"
// // //           />

// // //           {/* Model Input */}
// // //           <label htmlFor="model">Model</label>
// // //           <input
// // //             id="model"
// // //             {...register("model")}
// // //             placeholder="Model"
// // //             className="w-full p-2 border rounded"
// // //           />

// // //           {/* Color Input */}
// // //           <label htmlFor="color">Color</label>
// // //           <input
// // //             id="color"
// // //             {...register("color")}
// // //             placeholder="Color"
// // //             className="w-full p-2 border rounded"
// // //           />

// // //           {/* Description Input */}
// // //           <label htmlFor="description">Description</label>
// // //           <textarea
// // //             id="description"
// // //             {...register("description")}
// // //             placeholder="Description"
// // //             className="w-full p-2 border rounded"
// // //           />

// // //           {/* Price Per Hour Input */}
// // //           <label htmlFor="pricePerHour">Price Per Hour</label>
// // //           <input
// // //             id="pricePerHour"
// // //             {...register("pricePerHour")}
// // //             placeholder="Price Per Hour"
// // //             className="w-full p-2 border rounded"
// // //             type="number"
// // //           />

// // //           {/* Fuel Type Input */}
// // //           <label htmlFor="fuelType">Fuel Type</label>
// // //           <input
// // //             id="fuelType"
// // //             {...register("fuelType")}
// // //             placeholder="Fuel Type"
// // //             className="w-full p-2 border rounded"
// // //           />

// // //           {/* Transmission Input */}
// // //           <label htmlFor="transmission">Transmission</label>
// // //           <input
// // //             id="transmission"
// // //             {...register("transmission")}
// // //             placeholder="Transmission"
// // //             className="w-full p-2 border rounded"
// // //           />

// // //           {/* Seats Input */}
// // //           <label htmlFor="seats">Seats</label>
// // //           <input
// // //             id="seats"
// // //             {...register("seats")}
// // //             placeholder="Seats"
// // //             className="w-full p-2 border rounded"
// // //             type="number"
// // //           />

// // //           {/* Luggage Capacity Input */}
// // //           <label htmlFor="luggageCapacity">Luggage Capacity</label>
// // //           <input
// // //             id="luggageCapacity"
// // //             {...register("luggageCapacity")}
// // //             placeholder="Luggage Capacity"
// // //             className="w-full p-2 border rounded"
// // //             type="number"
// // //           />

// // //           {/* Doors Input */}
// // //           <label htmlFor="doors">Doors</label>
// // //           <input
// // //             id="doors"
// // //             {...register("doors")}
// // //             placeholder="Doors"
// // //             className="w-full p-2 border rounded"
// // //             type="number"
// // //           />

// // //           {/* Rating Input */}
// // //           <label htmlFor="rating">Rating</label>
// // //           <input
// // //             id="rating"
// // //             {...register("rating")}
// // //             placeholder="Rating"
// // //             className="w-full p-2 border rounded"
// // //             type="number"
// // //             step="0.1"
// // //             min="0"
// // //             max="5"
// // //           />

// // //           {/* Status Input */}
// // //           <label htmlFor="status">Status</label>
// // //           <select
// // //             id="status"
// // //             {...register("status")}
// // //             className="w-full p-2 border rounded"
// // //           >
// // //             <option value="available">Available</option>
// // //             <option value="unavailable">Unavailable</option>
// // //           </select>

// // //           {/* Mileage Input */}
// // //           <label htmlFor="mileage">Mileage</label>
// // //           <input
// // //             id="mileage"
// // //             {...register("mileage")}
// // //             placeholder="Mileage"
// // //             className="w-full p-2 border rounded"
// // //             type="number"
// // //           />

// // //           {/* Image Upload */}
// // //           <Upload
// // //             customRequest={({ file, onSuccess }) => {
// // //               handleImageUpload(file);
// // //               onSuccess(file, null);
// // //             }}
// // //             showUploadList={false}
// // //             accept="image/*"
// // //           >
// // //             <Button icon={<UploadOutlined />}>Upload Images</Button>
// // //           </Upload>
// // //           <div className="flex gap-2">
// // //             {imageList.map((image, index) => (
// // //               <img
// // //                 key={index}
// // //                 src={image}
// // //                 alt={`upload-${index}`}
// // //                 className="w-20 h-20 object-cover"
// // //               />
// // //             ))}
// // //           </div>

// // //           {/* Submit Button */}
// // //           <Button type="primary" htmlType="submit">
// // //             {isEditing ? "Update Car" : "Add Car"}
// // //           </Button>
// // //         </form>
// // //       </Modal>
// // //     </div>
// // //   );
// // // };

// // // export default ManageCarPage;

// // import { Modal, Table, Button, Upload, message, Spin } from "antd";
// // import React, { useState, useEffect } from "react";
// // import { AiOutlineDelete } from "react-icons/ai";
// // import { MdOutlineMode } from "react-icons/md";
// // import { IoIosAddCircleOutline } from "react-icons/io";
// // import { UploadOutlined } from "@ant-design/icons";
// // import { useForm } from "react-hook-form";
// // import {
// //   useDeleteCarMutation,
// //   useGetAllCarsQuery,
// //   useUpdateCarMutation,
// // } from "../../redux/features/car/carApi";
// // import { useNavigate } from "react-router-dom"; // Import useNavigate

// // const ManageCarPage = () => {
// //   const imgbb_img_hosting_api = `https://api.imgbb.com/1/upload?key=c9694ec1b6ea6c2dc253de13f8806da0`;

// //   const { data: cars, error, isLoading } = useGetAllCarsQuery();

// //   const [updateCar] = useUpdateCarMutation();
// //   const [deleteCar] = useDeleteCarMutation();

// //   // State management
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [currentCar, setCurrentCar] = useState(null);
// //   const [imageList, setImageList] = useState<string[]>([]);
// //   const [dataSource, setDataSource] = useState([]); // Initialize empty state for fetched data

// //   // Form hook setup
// //   const { register, handleSubmit, reset, setValue } = useForm();

// //   // Initialize navigate
// //   const navigate = useNavigate();
// //   // Effect to update dataSource when cars data is fetched
// //   useEffect(() => {
// //     if (cars && !isLoading) {
// //       const formattedCars = cars.data
// //         .filter((car) => !car.isDeleted) // Filter out deleted cars
// //         .map((car) => ({
// //           key: car._id,
// //           brand: car.brand,
// //           carType: car.carType,
// //           model: car.model,
// //           color: car.color,
// //           description: car.description,
// //           pricePerHour: car.pricePerHour,
// //           fuelType: car.fuelType,
// //           transmission: car.transmission,
// //           seats: car.seats,
// //           luggageCapacity: car.luggageCapacity,
// //           doors: car.doors,
// //           rating: car.rating,
// //           status: car.status,
// //           features: car.features,
// //           images: car.images,
// //           mileage: car.mileage,
// //           isDeleted: car.isDeleted,
// //         }));
// //       setDataSource(formattedCars);
// //     }
// //   }, [cars, isLoading]);

// //   // Show modal for editing car
// //   const showModal = (car) => {
// //     if (car) {
// //       setValue("brand", car.brand);
// //       setValue("model", car.model);
// //       setValue("color", car.color);
// //       setValue("description", car.description);
// //       setValue("pricePerHour", car.pricePerHour);
// //       setValue("fuelType", car.fuelType);
// //       setValue("transmission", car.transmission);
// //       setValue("seats", car.seats);
// //       setValue("luggageCapacity", car.luggageCapacity);
// //       setValue("doors", car.doors);
// //       setValue("rating", car.rating);
// //       setValue("status", car.status);
// //       setValue("mileage", car.mileage);
// //       setValue("carType", car.carType); // Set carType
// //       setValue("features", car.features.join(", ")); // Join features as a comma-separated string
// //       setImageList(car.images);
// //     }
// //     setCurrentCar(car);
// //     setIsModalOpen(true);
// //   };

// //   // Handle modal cancel
// //   const handleCancel = () => {
// //     setIsModalOpen(false);
// //     setCurrentCar(null);
// //     reset();
// //     setImageList([]);
// //   };

// //   // Handle image upload with error handling
// //   const handleImageUpload = async (files) => {
// //     const uploadedUrls = [];

// //     for (let file of files) {
// //       const formData = new FormData();
// //       formData.append("image", file);

// //       try {
// //         const response = await fetch(imgbb_img_hosting_api, {
// //           method: "POST",
// //           body: formData,
// //         });

// //         const data = await response.json();
// //         if (data.success) {
// //           uploadedUrls.push(data.data.url); // Add the uploaded image URL to the list
// //         } else {
// //           message.error(data.message || "Image upload failed.");
// //         }
// //       } catch (error) {
// //         message.error("Error uploading image: " + error.message);
// //       }
// //     }
// //     return uploadedUrls;
// //   };

// //   // Form submission handler for updating car
// //   const onSubmit = async (values) => {
// //     const imageFiles = imageList; // Ensure imageList contains the file objects
// //     const uploadedImageUrls = await handleImageUpload(imageFiles); // This function uploads new files

// //     // If no new images are uploaded, keep the old images
// //     const finalImageUrls =
// //       uploadedImageUrls.length > 0 ? uploadedImageUrls : imageList;

// //     if (!finalImageUrls.length) {
// //       message.error("Please upload at least one image.");
// //       return;
// //     }

// //     const carData = {
// //       ...values,
// //       images: finalImageUrls, // Use the final URLs for the car data
// //       features: values.features.split(",").map((feature) => feature.trim()),
// //       pricePerHour: Number(values.pricePerHour),
// //       seats: Number(values.seats),
// //       luggageCapacity: Number(values.luggageCapacity),
// //       doors: Number(values.doors),
// //       rating: Number(values.rating),
// //       mileage: Number(values.mileage),
// //     };

// //     try {
// //       await updateCar({ id: currentCar?.key, carData }).unwrap();
// //       message.success("Car updated successfully.");
// //       const updatedCars = dataSource.map((car) =>
// //         car.key === currentCar.key ? { ...car, ...carData } : car
// //       );
// //       setDataSource(updatedCars);
// //     } catch (error) {
// //       message.error("Failed to update car.");
// //     }

// //     handleCancel();
// //   };

// //   // Handle delete
// //   const handleDelete = (key) => {
// //     Modal.confirm({
// //       title: "Are you sure you want to delete this car?",
// //       onOk: async () => {
// //         try {
// //           await deleteCar(key).unwrap(); // Use the deleteCar mutation
// //           message.success("Car deleted successfully.");

// //           // Remove the car from local state
// //           setDataSource(dataSource.filter((car) => car.key !== key));
// //         } catch (error) {
// //           message.error("Failed to delete car.");
// //         }
// //       },
// //     });
// //   };

// //   // Define table columns
// //   const columns = [
// //     { title: "No.", key: "index", render: (_, __, index) => index + 1 },
// //     { title: "Brand", dataIndex: "brand", key: "brand" },
// //     { title: "Model", dataIndex: "model", key: "model" },
// //     { title: "Car Type", dataIndex: "carType", key: "carType" },
// //     { title: "Color", dataIndex: "color", key: "color" },
// //     { title: "Description", dataIndex: "description", key: "description" },
// //     { title: "Price per Hour", dataIndex: "pricePerHour", key: "pricePerHour" },
// //     { title: "Fuel Type", dataIndex: "fuelType", key: "fuelType" },
// //     { title: "Transmission", dataIndex: "transmission", key: "transmission" },
// //     { title: "Seats", dataIndex: "seats", key: "seats" },
// //     { title: "Mileage", dataIndex: "mileage", key: "mileage" },
// //     { title: "Features", dataIndex: "features", key: "features" }, // Add this line

// //     {
// //       title: "Luggage Capacity",
// //       dataIndex: "luggageCapacity",
// //       key: "luggageCapacity",
// //     },
// //     { title: "Doors", dataIndex: "doors", key: "doors" },
// //     { title: "Rating", dataIndex: "rating", key: "rating" },
// //     { title: "Status", dataIndex: "status", key: "status" },
// //     {
// //       title: "Action",
// //       key: "action",
// //       render: (_, record) => (
// //         <div className="flex gap-2">
// //           <Button
// //             icon={<AiOutlineDelete />}
// //             onClick={() => handleDelete(record.key)}
// //             className="bg-red-500 text-white"
// //           />
// //           <Button
// //             icon={<MdOutlineMode />}
// //             onClick={() => showModal(record)}
// //             className="bg-blue-500 text-white"
// //           />
// //         </div>
// //       ),
// //     },
// //   ];

// //   // Show loading state
// //   if (isLoading) return <Spin tip="Loading cars..." />;
// //   if (error) return <div>Error fetching cars</div>;

// //   return (
// //     <div className="p-4">
// //       <div className="mb-4">
// //         <Button
// //           type="primary"
// //           onClick={() => navigate("/dashboard/addcar")} // Navigate to Add Car route
// //           icon={<IoIosAddCircleOutline />}
// //         >
// //           Add Car
// //         </Button>
// //       </div>
// //       <div className="overflow-x-auto">
// //         <Table
// //           dataSource={dataSource}
// //           columns={columns}
// //           className="border-2 rounded-lg"
// //           scroll={{ x: "max-content" }}
// //         />
// //       </div>

// //       <Modal
// //         title="Edit Car"
// //         open={isModalOpen}
// //         onCancel={handleCancel}
// //         footer={null}
// //         className="max-w-lg mx-auto"
// //       >
// //         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// //           {/* Brand Input */}
// //           <label htmlFor="brand">Brand</label>
// //           <input
// //             id="brand"
// //             {...register("brand")}
// //             placeholder="Brand"
// //             className="w-full p-2 border rounded"
// //           />

// //           {/* Model Input */}
// //           <label htmlFor="model">Model</label>
// //           <input
// //             id="model"
// //             {...register("model")}
// //             placeholder="Model"
// //             className="w-full p-2 border rounded"
// //           />

// //           {/* Color Input */}
// //           <label htmlFor="color">Color</label>
// //           <input
// //             id="color"
// //             {...register("color")}
// //             placeholder="Color"
// //             className="w-full p-2 border rounded"
// //           />

// //           {/* Description Input */}
// //           <label htmlFor="description">Description</label>
// //           <textarea
// //             id="description"
// //             {...register("description")}
// //             placeholder="Description"
// //             className="w-full p-2 border rounded"
// //           />

// //           {/* Price Per Hour Input */}
// //           <label htmlFor="pricePerHour">Price Per Hour</label>
// //           <input
// //             id="pricePerHour"
// //             {...register("pricePerHour")}
// //             placeholder="Price Per Hour"
// //             className="w-full p-2 border rounded"
// //             type="number"
// //           />

// //           {/* Fuel Type Input */}
// //           <label htmlFor="fuelType">Fuel Type</label>
// //           <select
// //             id="fuelType"
// //             {...register("fuelType")}
// //             className="w-full p-2 border rounded"
// //           >
// //             <option value="Gasoline">Gasoline</option>
// //             <option value="Diesel">Diesel</option>
// //             <option value="Electric">Electric</option>
// //             <option value="Hybrid">Hybrid</option>
// //           </select>

// //           {/* Transmission Input */}
// //           <label htmlFor="transmission">Transmission</label>
// //           <select
// //             id="transmission"
// //             {...register("transmission")}
// //             className="w-full p-2 border rounded"
// //           >
// //             <option value="Automatic">Automatic</option>
// //             <option value="Manual">Manual</option>
// //           </select>

// //           {/* Seats Input */}
// //           <label htmlFor="seats">Seats</label>
// //           <input
// //             id="seats"
// //             {...register("seats")}
// //             placeholder="Seats"
// //             className="w-full p-2 border rounded"
// //             type="number"
// //           />

// //           {/* Luggage Capacity Input */}
// //           <label htmlFor="luggageCapacity">Luggage Capacity</label>
// //           <input
// //             id="luggageCapacity"
// //             {...register("luggageCapacity")}
// //             placeholder="Luggage Capacity"
// //             className="w-full p-2 border rounded"
// //             type="number"
// //           />

// //           {/* Doors Input */}
// //           <label htmlFor="doors">Doors</label>
// //           <input
// //             id="doors"
// //             {...register("doors")}
// //             placeholder="Doors"
// //             className="w-full p-2 border rounded"
// //             type="number"
// //           />

// //           {/* Rating Input */}
// //           <label htmlFor="rating">Rating</label>
// //           <input
// //             id="rating"
// //             {...register("rating")}
// //             placeholder="Rating"
// //             className="w-full p-2 border rounded"
// //             type="number"
// //             step="0.1"
// //             min="0"
// //             max="5"
// //           />

// //           {/* Status Input */}
// //           <label htmlFor="status">Status</label>
// //           <select
// //             id="status"
// //             {...register("status")}
// //             className="w-full p-2 border rounded"
// //           >
// //             <option value="available">Available</option>
// //             <option value="unavailable">Unavailable</option>
// //           </select>

// //           {/* Features Input */}
// //           <label htmlFor="features">Features</label>
// //           <input
// //             id="features"
// //             {...register("features")}
// //             placeholder="Features (separate with commas)"
// //             className="w-full p-2 border rounded"
// //           />

// //           {/* Mileage Input */}
// //           <label htmlFor="mileage">Mileage</label>
// //           <input
// //             id="mileage"
// //             {...register("mileage")}
// //             placeholder="Mileage"
// //             className="w-full p-2 border rounded"
// //             type="number"
// //           />

// //           {/* Car Type Input */}
// //           <label htmlFor="carType">Car Type</label>
// //           <select
// //             id="carType"
// //             {...register("carType")}
// //             className="w-full p-2 border rounded"
// //           >
// //             <option value="SUV">SUV</option>
// //             <option value="Economy">Economy</option>
// //             <option value="Luxury">Luxury</option>
// //             <option value="Electric">Electric</option>
// //           </select>

// //           {/* Image Upload */}
// //           <label>Images</label>
// //           <Upload
// //             listType="picture"
// //             multiple
// //             beforeUpload={(file) => {
// //               setImageList((prevList) => [...prevList, file]);
// //               return false; // Prevent automatic upload, handle it manually
// //             }}
// //             onRemove={(file) => {
// //               setImageList((prevList) =>
// //                 prevList.filter((imgFile) => imgFile !== file)
// //               );
// //             }}
// //           >
// //             <Button icon={<UploadOutlined />}>Upload Images</Button>
// //           </Upload>

// //           <div>
// //             <h3>Uploaded Images:</h3>
// //             {imageList.map((imageUrl, index) => (
// //               <img
// //                 key={index}
// //                 src={imageUrl}
// //                 alt={`Uploaded car image ${index + 1}`}
// //                 style={{ width: "100px", height: "100px", margin: "5px" }}
// //               />
// //             ))}
// //           </div>

// //           {/* Submit Button */}
// //           <Button type="primary" htmlType="submit">
// //             Update Car
// //           </Button>
// //         </form>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default ManageCarPage;

// import { Modal, Table, Button, Upload, message, Spin } from "antd";
// import React, { useState, useEffect } from "react";
// import { AiOutlineDelete } from "react-icons/ai";
// import { MdOutlineMode } from "react-icons/md";
// import { IoIosAddCircleOutline } from "react-icons/io";
// import { UploadOutlined } from "@ant-design/icons";
// import { useForm } from "react-hook-form";
// import {
//   useDeleteCarMutation,
//   useGetAllCarsQuery,
//   useUpdateCarMutation,
// } from "../../redux/features/car/carApi";
// import { useNavigate } from "react-router-dom";

// const ManageCarPage = () => {
//   const imgbb_img_hosting_api = `https://api.imgbb.com/1/upload?key=c9694ec1b6ea6c2dc253de13f8806da0`;

//   const { data: cars, error, isLoading } = useGetAllCarsQuery();

//   const [updateCar] = useUpdateCarMutation();
//   const [deleteCar] = useDeleteCarMutation();

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentCar, setCurrentCar] = useState(null);
//   const [imageList, setImageList] = useState([]); // Local state for managing images
//   const [dataSource, setDataSource] = useState([]);
//   const [newImages, setNewImages] = useState([]); // For new uploaded images (File objects)
//   const [existingImages, setExistingImages] = useState([]); // For images from the database (URLs)

//   const { register, handleSubmit, reset, setValue } = useForm();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (cars && !isLoading) {
//       const formattedCars = cars.data
//         .filter((car) => !car.isDeleted)
//         .map((car) => ({
//           key: car._id,
//           brand: car.brand,
//           carType: car.carType,
//           model: car.model,
//           color: car.color,
//           description: car.description,
//           pricePerHour: car.pricePerHour,
//           fuelType: car.fuelType,
//           transmission: car.transmission,
//           seats: car.seats,
//           luggageCapacity: car.luggageCapacity,
//           doors: car.doors,
//           rating: car.rating,
//           status: car.status,
//           features: car.features,
//           images: car.images,
//           mileage: car.mileage,
//           isDeleted: car.isDeleted,
//         }));
//       setDataSource(formattedCars);
//     }
//   }, [cars, isLoading]);

//   const showModal = (car) => {
//     if (car) {
//       setValue("brand", car.brand);
//       setValue("model", car.model);
//       setValue("color", car.color);
//       setValue("description", car.description);
//       setValue("pricePerHour", car.pricePerHour);
//       setValue("fuelType", car.fuelType);
//       setValue("transmission", car.transmission);
//       setValue("seats", car.seats);
//       setValue("luggageCapacity", car.luggageCapacity);
//       setValue("doors", car.doors);
//       setValue("rating", car.rating);
//       setValue("status", car.status);
//       setValue("mileage", car.mileage);
//       setValue("carType", car.carType);
//       setValue("features", car.features.join(", "));
//       // setImageList(car.images);
//       setExistingImages(car.images); // Load existing images (URLs) from car
//     }
//     setCurrentCar(car);
//     setIsModalOpen(true);
//   };

//   // Clear state on modal close
//   const handleCancel = () => {
//     reset();
//     setImageList([]);
//     setNewImages([]);
//     setExistingImages([]);
//     setCurrentCar(null);
//     setIsModalOpen(false);
//   };

//   const handleImageUpload = async (files) => {
//     setNewImages([...newImages, ...files]); // Append new files to newImages

//     const uploadedUrls = [];
//     for (let file of files) {
//       const formData = new FormData();
//       formData.append("image", file);
//       try {
//         const response = await fetch(imgbb_img_hosting_api, {
//           method: "POST",
//           body: formData,
//         });
//         const data = await response.json();
//         if (data.success) {
//           uploadedUrls.push(data.data.url);
//         } else {
//           message.error(data.message || "Image upload failed.");
//         }
//       } catch (error) {
//         message.error("Error uploading image: " + error.message);
//       }
//     }
//     return uploadedUrls;
//   };

//   const onSubmit = async (values) => {
//     const uploadedImageUrls = await handleImageUpload(imageList); // Get uploaded image URLs
//     const finalImageUrls =
//       uploadedImageUrls.length > 0 ? uploadedImageUrls : imageList;

//     if (!finalImageUrls.length) {
//       message.error("Please upload at least one image.");
//       return;
//     }

//     const carData = {
//       ...values,
//       images: finalImageUrls,
//       features: values.features.split(",").map((feature) => feature.trim()),
//       pricePerHour: Number(values.pricePerHour),
//       seats: Number(values.seats),
//       luggageCapacity: Number(values.luggageCapacity),
//       doors: Number(values.doors),
//       rating: Number(values.rating),
//       mileage: Number(values.mileage),
//     };

//     try {
//       await updateCar({ id: currentCar?.key, carData }).unwrap();
//       message.success("Car updated successfully.");
//       const updatedCars = dataSource.map((car) =>
//         car.key === currentCar.key ? { ...car, ...carData } : car
//       );
//       setDataSource(updatedCars);
//     } catch (error) {
//       message.error("Failed to update car.");
//     }

//     handleCancel();
//   };

//   const handleDelete = (key) => {
//     Modal.confirm({
//       title: "Are you sure you want to delete this car?",
//       onOk: async () => {
//         try {
//           await deleteCar(key).unwrap();
//           message.success("Car deleted successfully.");
//           setDataSource(dataSource.filter((car) => car.key !== key));
//         } catch (error) {
//           message.error("Failed to delete car.");
//         }
//       },
//     });
//   };

//   const handleImageDelete = (url) => {
//     setImageList(imageList.filter((image) => image !== url)); // Remove the image from the list
//   };

//   const columns = [
//     { title: "No.", key: "index", render: (_, __, index) => index + 1 },
//     { title: "Brand", dataIndex: "brand", key: "brand" },
//     { title: "Model", dataIndex: "model", key: "model" },
//     { title: "Car Type", dataIndex: "carType", key: "carType" },
//     { title: "Color", dataIndex: "color", key: "color" },
//     { title: "Description", dataIndex: "description", key: "description" },
//     { title: "Price per Hour", dataIndex: "pricePerHour", key: "pricePerHour" },
//     { title: "Fuel Type", dataIndex: "fuelType", key: "fuelType" },
//     { title: "Transmission", dataIndex: "transmission", key: "transmission" },
//     { title: "Seats", dataIndex: "seats", key: "seats" },
//     { title: "Mileage", dataIndex: "mileage", key: "mileage" },
//     { title: "Features", dataIndex: "features", key: "features" },
//     {
//       title: "Luggage Capacity",
//       dataIndex: "luggageCapacity",
//       key: "luggageCapacity",
//     },
//     { title: "Doors", dataIndex: "doors", key: "doors" },
//     { title: "Rating", dataIndex: "rating", key: "rating" },
//     { title: "Status", dataIndex: "status", key: "status" },
//     {
//       title: "Action",
//       key: "action",
//       render: (_, record) => (
//         <div className="flex gap-2">
//           <Button
//             icon={<AiOutlineDelete />}
//             onClick={() => handleDelete(record.key)}
//             className="bg-red-500 text-white"
//           />
//           <Button
//             icon={<MdOutlineMode />}
//             onClick={() => showModal(record)}
//             className="bg-blue-500 text-white"
//           />
//         </div>
//       ),
//     },
//   ];

//   if (isLoading) return <Spin tip="Loading cars..." />;
//   if (error) return <div>Error fetching cars</div>;

//   return (
//     <div className="p-4">
//       <div className="mb-4">
//         <Button
//           type="primary"
//           onClick={() => navigate("/dashboard/addcar")}
//           icon={<IoIosAddCircleOutline />}
//         >
//           Add Car
//         </Button>
//       </div>
//       <div className="overflow-x-auto">
//         <Table
//           dataSource={dataSource}
//           columns={columns}
//           className="border-2 rounded-lg"
//           scroll={{ x: "max-content" }}
//         />
//       </div>

//       <Modal
//         title="Edit Car"
//         open={isModalOpen}
//         onCancel={handleCancel}
//         footer={null}
//         className="max-w-lg mx-auto"
//       >
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <label htmlFor="brand">Brand</label>
//           <input {...register("brand")} className="input-field" />

//           <label htmlFor="model">Model</label>
//           <input {...register("model")} className="input-field" />

//           <label htmlFor="color">Color</label>
//           <input {...register("color")} className="input-field" />

//           <label htmlFor="description">Description</label>
//           <textarea {...register("description")} className="input-field" />

//           <label htmlFor="pricePerHour">Price per Hour</label>
//           <input
//             type="number"
//             {...register("pricePerHour")}
//             className="input-field"
//           />

//           <label htmlFor="fuelType">Fuel Type</label>
//           <input {...register("fuelType")} className="input-field" />

//           <label htmlFor="transmission">Transmission</label>
//           <input {...register("transmission")} className="input-field" />

//           <label htmlFor="seats">Seats</label>
//           <input type="number" {...register("seats")} className="input-field" />

//           <label htmlFor="luggageCapacity">Luggage Capacity</label>
//           <input
//             type="number"
//             {...register("luggageCapacity")}
//             className="input-field"
//           />

//           <label htmlFor="doors">Doors</label>
//           <input type="number" {...register("doors")} className="input-field" />

//           <label htmlFor="rating">Rating</label>
//           <input
//             type="number"
//             {...register("rating")}
//             className="input-field"
//           />

//           <label htmlFor="mileage">Mileage</label>
//           <input
//             type="number"
//             {...register("mileage")}
//             className="input-field"
//           />

//           <label htmlFor="features">Features (comma separated)</label>
//           <input {...register("features")} className="input-field" />

//           <label htmlFor="images">Upload Images</label>
//           <Upload
//             multiple
//             beforeUpload={(file) => {
//               setImageList((prev) => [...prev, file]);
//               return false; // Prevent automatic upload
//             }}
//           >
//             <Button icon={<UploadOutlined />}>Upload</Button>
//           </Upload>

//           {/* Display image previews with delete option */}

//           <div className="image-preview-grid">
//             {[...existingImages, ...newImages].map((image, index) => (
//               <div key={index} className="relative">
//                 <img
//                   src={
//                     image instanceof File ? URL.createObjectURL(image) : image
//                   } // File or URL logic
//                   alt="Preview"
//                   className="w-32 h-32 object-cover"
//                 />
//                 <Button
//                   onClick={() => handleImageDelete(image)}
//                   className="absolute top-0 right-0 bg-red-500 text-white"
//                 >
//                   <AiOutlineDelete />
//                 </Button>
//               </div>
//             ))}
//           </div>

//           <Button type="primary" htmlType="submit">
//             Update Car
//           </Button>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default ManageCarPage;

import { Modal, Table, Button, Upload, message, Spin } from "antd";
import React, { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineMode } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { UploadOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import {
  useDeleteCarMutation,
  useGetAllCarsQuery,
  useUpdateCarMutation,
} from "../../redux/features/car/carApi";
import { useNavigate } from "react-router-dom";

const ManageCarPage = () => {
  const imgbb_img_hosting_api = `https://api.imgbb.com/1/upload?key=c9694ec1b6ea6c2dc253de13f8806da0`;

  const { data: cars, error, isLoading } = useGetAllCarsQuery();
  const [updateCar] = useUpdateCarMutation();
  const [deleteCar] = useDeleteCarMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState(null);
  const [imageList, setImageList] = useState([]); // Local state for managing images
  const [dataSource, setDataSource] = useState([]);
  const [newImages, setNewImages] = useState([]); // For new uploaded images (File objects)
  const [existingImages, setExistingImages] = useState([]); // For images from the database (URLs)

  const { register, handleSubmit, reset, setValue } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (cars && !isLoading) {
      const formattedCars = cars.data
        .filter((car) => !car.isDeleted)
        .map((car) => ({
          key: car._id,
          brand: car.brand,
          carType: car.carType,
          model: car.model,
          color: car.color,
          description: car.description,
          pricePerHour: car.pricePerHour,
          fuelType: car.fuelType,
          transmission: car.transmission,
          seats: car.seats,
          luggageCapacity: car.luggageCapacity,
          doors: car.doors,
          rating: car.rating,
          status: car.status,
          features: car.features,
          images: car.images,
          mileage: car.mileage,
          isDeleted: car.isDeleted,
        }));
      setDataSource(formattedCars);
    }
  }, [cars, isLoading]);

  const showModal = (car) => {
    if (car) {
      setValue("brand", car.brand);
      setValue("model", car.model);
      setValue("color", car.color);
      setValue("description", car.description);
      setValue("pricePerHour", car.pricePerHour);
      setValue("fuelType", car.fuelType);
      setValue("transmission", car.transmission);
      setValue("seats", car.seats);
      setValue("luggageCapacity", car.luggageCapacity);
      setValue("doors", car.doors);
      setValue("rating", car.rating);
      setValue("status", car.status);
      setValue("mileage", car.mileage);
      setValue("carType", car.carType);
      setValue("features", car.features.join(", "));
      setExistingImages(car.images); // Load existing images (URLs) from car
    }
    setCurrentCar(car);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    reset();
    setImageList([]);
    setNewImages([]);
    setExistingImages([]);
    setCurrentCar(null);
    setIsModalOpen(false);
  };

  const handleImageUpload = async (files) => {
    const uploadedUrls = [];
    for (let file of files) {
      const formData = new FormData();
      formData.append("image", file);
      try {
        const response = await fetch(imgbb_img_hosting_api, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (data.success) {
          uploadedUrls.push(data.data.url);
        } else {
          message.error(data.message || "Image upload failed.");
        }
      } catch (error) {
        message.error("Error uploading image: " + error.message);
      }
    }
    return uploadedUrls;
  };

  const onSubmit = async (values) => {
    // Show loading toast
    const loadingToast = message.loading("Updating car...");

    const uploadedImageUrls = await handleImageUpload(newImages); // Get uploaded image URLs
    const finalImageUrls = [...existingImages, ...uploadedImageUrls]; // Keep existing and new images

    if (!finalImageUrls.length) {
      message.error("Please upload at least one image.");
      return;
    }

    const carData = {
      ...values,
      images: finalImageUrls,
      features: values.features.split(",").map((feature) => feature.trim()),
      pricePerHour: Number(values.pricePerHour),
      seats: Number(values.seats),
      luggageCapacity: Number(values.luggageCapacity),
      doors: Number(values.doors),
      rating: Number(values.rating),
      mileage: Number(values.mileage),
    };

    try {
      await updateCar({ id: currentCar?.key, carData }).unwrap();
      message.success("Car updated successfully.", loadingToast);
      const updatedCars = dataSource.map((car) =>
        car.key === currentCar.key ? { ...car, ...carData } : car
      );
      setDataSource(updatedCars);
    } catch (error) {
      message.error("Failed to update car.");
    } finally {
      message.destroy(loadingToast); // Remove loading toast
    }

    handleCancel();
  };

  const handleDelete = (key) => {
    Modal.confirm({
      title: "Are you sure you want to delete this car?",
      onOk: async () => {
        try {
          await deleteCar(key).unwrap();
          message.success("Car deleted successfully.");
          setDataSource(dataSource.filter((car) => car.key !== key));
        } catch (error) {
          message.error("Failed to delete car.");
        }
      },
    });
  };

  const handleImageDelete = (url) => {
    setExistingImages(existingImages.filter((image) => image !== url)); // Remove from existing images
  };

  const columns = [
    { title: "No.", key: "index", render: (_, __, index) => index + 1 },
    { title: "Brand", dataIndex: "brand", key: "brand" },
    { title: "Model", dataIndex: "model", key: "model" },
    { title: "Car Type", dataIndex: "carType", key: "carType" },
    { title: "Color", dataIndex: "color", key: "color" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Price per Hour", dataIndex: "pricePerHour", key: "pricePerHour" },
    { title: "Fuel Type", dataIndex: "fuelType", key: "fuelType" },
    { title: "Transmission", dataIndex: "transmission", key: "transmission" },
    { title: "Seats", dataIndex: "seats", key: "seats" },
    { title: "Mileage", dataIndex: "mileage", key: "mileage" },
    { title: "Features", dataIndex: "features", key: "features" },
    {
      title: "Luggage Capacity",
      dataIndex: "luggageCapacity",
      key: "luggageCapacity",
    },
    { title: "Doors", dataIndex: "doors", key: "doors" },
    { title: "Rating", dataIndex: "rating", key: "rating" },
    { title: "Status", dataIndex: "status", key: "status" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<AiOutlineDelete />}
            onClick={() => handleDelete(record.key)}
            className="bg-red-500 text-white"
          />
          <Button
            icon={<MdOutlineMode />}
            onClick={() => showModal(record)}
            className="bg-blue-500 text-white"
          />
        </div>
      ),
    },
  ];

  if (isLoading) return <Spin tip="Loading cars..." />;
  if (error) return <div>Error fetching cars</div>;

  return (
    <div className="p-4">
      <div className="mb-4">
        <Button
          type="primary"
          onClick={() => navigate("/dashboard/addcar")}
          icon={<IoIosAddCircleOutline />}
        >
          Add Car
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table
          dataSource={dataSource}
          columns={columns}
          className="border-2 rounded-lg"
          scroll={{ x: "max-content" }}
        />
      </div>

      <Modal
        title="Update Car"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Brand Input */}
          <label htmlFor="brand">Brand</label>
          <input
            id="brand"
            {...register("brand")}
            placeholder="Brand"
            className="w-full p-2 border rounded"
          />

          {/* Model Input */}
          <label htmlFor="model">Model</label>
          <input
            id="model"
            {...register("model")}
            placeholder="Model"
            className="w-full p-2 border rounded"
          />

          {/* Color Input */}
          <label htmlFor="color">Color</label>
          <input
            id="color"
            {...register("color")}
            placeholder="Color"
            className="w-full p-2 border rounded"
          />

          {/* Description Input */}
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            {...register("description")}
            placeholder="Description"
            className="w-full p-2 border rounded"
          />

          {/* Price Per Hour Input */}
          <label htmlFor="pricePerHour">Price Per Hour</label>
          <input
            id="pricePerHour"
            {...register("pricePerHour")}
            placeholder="Price Per Hour"
            className="w-full p-2 border rounded"
            type="number"
          />

          {/* Fuel Type Input */}
          <label htmlFor="fuelType">Fuel Type</label>
          <select
            id="fuelType"
            {...register("fuelType")}
            className="w-full p-2 border rounded"
          >
            <option value="Gasoline">Gasoline</option>{" "}
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          {/* Transmission Input */}
          <label htmlFor="transmission">Transmission</label>
          <select
            id="transmission"
            {...register("transmission")}
            className="w-full p-2 border rounded"
          >
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>

          {/* Seats Input */}
          <label htmlFor="seats">Seats</label>
          <input
            id="seats"
            {...register("seats")}
            placeholder="Seats"
            className="w-full p-2 border rounded"
            type="number"
          />

          {/* Luggage Capacity Input */}
          <label htmlFor="luggageCapacity">Luggage Capacity</label>
          <input
            id="luggageCapacity"
            {...register("luggageCapacity")}
            placeholder="Luggage Capacity"
            className="w-full p-2 border rounded"
            type="number"
          />

          {/* Doors Input */}
          <label htmlFor="doors">Doors</label>
          <input
            id="doors"
            {...register("doors")}
            placeholder="Doors"
            className="w-full p-2 border rounded"
            type="number"
          />

          {/* Rating Input */}
          <label htmlFor="rating">Rating</label>
          <input
            id="rating"
            {...register("rating")}
            placeholder="Rating"
            className="w-full p-2 border rounded"
            type="number"
            step="0.1"
            min="0"
            max="5"
          />

          {/* Status Input */}
          <label htmlFor="status">Status</label>
          <select
            id="status"
            {...register("status")}
            className="w-full p-2 border rounded"
          >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>

          {/* Features Input */}
          <label htmlFor="features">Features</label>
          <input
            id="features"
            {...register("features")}
            placeholder="Features (separate with commas)"
            className="w-full p-2 border rounded"
          />

          {/* Mileage Input */}
          <label htmlFor="mileage">Mileage</label>
          <input
            id="mileage"
            {...register("mileage")}
            placeholder="Mileage"
            className="w-full p-2 border rounded"
            type="number"
          />

          {/* Car Type Input */}
          <label htmlFor="carType">Car Type</label>
          <select
            id="carType"
            {...register("carType")}
            className="w-full p-2 border rounded"
          >
            <option value="SUV">SUV</option>
            <option value="Economy">Economy</option>
            <option value="Luxury">Luxury</option>
            <option value="Electric">Electric</option>
          </select>
          <div className="mb-4">
            <Upload
              fileList={newImages}
              onRemove={(file) =>
                setNewImages(newImages.filter((f) => f.uid !== file.uid))
              }
              beforeUpload={(file) => {
                setNewImages([...newImages, file]);
                return false; // Prevent upload, we'll handle it manually
              }}
              listType="picture"
              multiple
            >
              <Button icon={<UploadOutlined />}>Upload New Images</Button>
            </Upload>
            {existingImages.length > 0 && (
              <div>
                <h3>Existing Images:</h3>
                <div className="flex flex-wrap gap-2">
                  {existingImages.map((url, idx) => (
                    <div key={idx} className="relative">
                      <img
                        src={url}
                        alt={`car-img-${idx}`}
                        className="w-24 h-24 object-cover"
                      />
                      <Button
                        icon={<AiOutlineDelete />}
                        onClick={() => handleImageDelete(url)}
                        className="absolute top-0 right-0 bg-red-500 text-white"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Button type="primary" htmlType="submit">
            Update Car
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default ManageCarPage;
