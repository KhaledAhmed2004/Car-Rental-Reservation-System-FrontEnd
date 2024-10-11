import React, { useState } from "react";
import { Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { useAddCarMutation } from "../../redux/features/car/carApi";
import toast from "react-hot-toast"; // Import react-hot-toast
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AddCarPage = () => {
  // API endpoint for image upload
  const imgbb_img_hosting_api =
    "https://api.imgbb.com/1/upload?key=c9694ec1b6ea6c2dc253de13f8806da0";

  // Setting up form handling using react-hook-form
  const { register, handleSubmit, reset } = useForm();
  const [imageList, setImageList] = useState([]); // State to hold uploaded images
  const [addCar] = useAddCarMutation(); // Mutation hook for adding a car
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle image upload
  const handleImageUpload = async (files) => {
    const uploadedUrls = []; // Array to store uploaded image URLs

    // Loop through each file for upload
    for (let file of files) {
      const formData = new FormData();
      formData.append("image", file); // Append image to form data

      // Validate file type
      if (!file.type.startsWith("image/")) {
        message.error("Please upload a valid image file.");
        return false; // Exit if file type is invalid
      }

      try {
        // Upload image to imgbb
        const response = await fetch(imgbb_img_hosting_api, {
          method: "POST",
          body: formData,
        });

        const data = await response.json(); // Parse the response
        if (data.success) {
          uploadedUrls.push(data?.data?.url); // Add the uploaded URL to the array
          //   message.success("Image uploaded successfully!");
        } else {
          message.error(data.message || "Image upload failed.");
        }
      } catch (error) {
        message.error("Error uploading image: " + error.message); // Handle errors
      }
    }
    return uploadedUrls; // Return the array of uploaded URLs
  };

  // Function to handle form submission
  const onSubmit = async (values) => {
    // Display loading toast
    const toastId = toast.loading("Adding car, please wait...");
    const uploadedImageUrls = await handleImageUpload(imageList); // Upload images and get URLs

    // Prepare car data for submission
    const carData = {
      ...values,
      images: uploadedImageUrls, // Use the uploaded image URLs
      features: values.features.split(",").map((feature) => feature.trim()), // Split features into an array
      pricePerHour: Number(values.pricePerHour), // Convert price to a number
      seats: Number(values.seats), // Convert seats to a number
      luggageCapacity: Number(values.luggageCapacity), // Convert luggage capacity to a number
      doors: Number(values.doors), // Convert doors to a number
      rating: Number(values.rating), // Convert rating to a number
      mileage: Number(values.mileage), // Convert mileage to a number
    };

    try {
      await addCar(carData).unwrap();
      toast.success("Car added successfully!", { id: toastId });
      reset(); // Reset form after successful submission
      setImageList([]); // Clear the uploaded image list
      navigate("/dashboard/manageCar"); // Redirect after successful submission
    } catch (error) {
      toast.error("Failed to add car.", { id: toastId });
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Car</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
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
          <option value="Gasoline">Gasoline</option>
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

        {/* Image Upload */}
        <label>Images</label>
        <Upload
          listType="picture"
          multiple
          beforeUpload={(file) => {
            setImageList((prevList) => [...prevList, file]); // Add file to the image list
            return false; // Prevent automatic upload, handle it manually
          }}
          onRemove={(file) => {
            // Remove file from the image list
            setImageList((prevList) =>
              prevList.filter((imgFile) => imgFile !== file)
            );
          }}
        >
          <Button icon={<UploadOutlined />}>Upload Images</Button>
        </Upload>

        {/* Display Uploaded Images */}
        <div>
          <h3>Uploaded Images:</h3>
          {imageList.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)} // Create a temporary URL for the uploaded image
              alt={`Uploaded car image ${index + 1}`}
              style={{ width: "100px", height: "100px", margin: "5px" }}
            />
          ))}
        </div>

        {/* Submit Button */}
        <Button type="primary" htmlType="submit">
          Add Car
        </Button>
      </form>
    </div>
  );
};

export default AddCarPage;

// import React, { useState } from "react";
// import { Button, Upload, message } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
// import { useForm } from "react-hook-form";
// import { useAddCarMutation } from "../../redux/features/car/carApi";
// import toast from "react-hot-toast"; // Import react-hot-toast
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const AddCarPage = () => {
//   // API endpoint for image upload
//   const imgbb_img_hosting_api =
//     "https://api.imgbb.com/1/upload?key=c9694ec1b6ea6c2dc253de13f8806da0";

//   // Setting up form handling using react-hook-form
//   const { register, handleSubmit, reset } = useForm();
//   const [imageList, setImageList] = useState([]); // State to hold uploaded images
//   const [addCar] = useAddCarMutation(); // Mutation hook for adding a car
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Function to handle image upload
//   const handleImageUpload = async (files) => {
//     const uploadedUrls = []; // Array to store uploaded image URLs

//     // Loop through each file for upload
//     for (let file of files) {
//       const formData = new FormData();
//       formData.append("image", file); // Append image to form data

//       // Validate file type
//       if (!file.type.startsWith("image/")) {
//         message.error("Please upload a valid image file.");
//         return false; // Exit if file type is invalid
//       }

//       try {
//         // Upload image to imgbb
//         const response = await fetch(imgbb_img_hosting_api, {
//           method: "POST",
//           body: formData,
//         });

//         const data = await response.json(); // Parse the response
//         if (data.success) {
//           uploadedUrls.push(data?.data?.url); // Add the uploaded URL to the array
//           //   message.success("Image uploaded successfully!");
//         } else {
//           message.error(data.message || "Image upload failed.");
//         }
//       } catch (error) {
//         message.error("Error uploading image: " + error.message); // Handle errors
//       }
//     }
//     return uploadedUrls; // Return the array of uploaded URLs
//   };

//   // Function to handle form submission
//   const onSubmit = async (values) => {
//     // Display loading toast
//     const toastId = toast.loading("Adding car, please wait...");
//     const uploadedImageUrls = await handleImageUpload(imageList); // Upload images and get URLs

//     // Prepare car data for submission
//     const carData = {
//       ...values,
//       images: uploadedImageUrls, // Use the uploaded image URLs
//       features: values.features.split(",").map((feature) => feature.trim()), // Split features into an array
//       pricePerHour: Number(values.pricePerHour), // Convert price to a number
//       seats: Number(values.seats), // Convert seats to a number
//       luggageCapacity: Number(values.luggageCapacity), // Convert luggage capacity to a number
//       doors: Number(values.doors), // Convert doors to a number
//       rating: Number(values.rating), // Convert rating to a number
//       mileage: Number(values.mileage), // Convert mileage to a number
//     };

//     try {
//       await addCar(carData).unwrap();
//       toast.success("Car added successfully!", { id: toastId });
//       reset(); // Reset form after successful submission
//       setImageList([]); // Clear the uploaded image list
//       navigate("/dashboard/manageCar"); // Redirect after successful submission
//     } catch (error) {
//       toast.error("Failed to add car.", { id: toastId });
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Car</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
//         {/* Brand Input */}
//         <label htmlFor="brand">Brand</label>
//         <input
//           id="brand"
//           {...(register("brand"), { required: true })}
//           placeholder="Brand"
//           className="w-full p-2 border rounded"
//         />

//         {/* Model Input */}
//         <label htmlFor="model">Model</label>
//         <input
//           id="model"
//           {...(register("model"), { required: true })}
//           placeholder="Model"
//           className="w-full p-2 border rounded"
//         />

//         {/* Color Input */}
//         <label htmlFor="color">Color</label>
//         <input
//           id="color"
//           {...register("color")}
//           placeholder="Color"
//           className="w-full p-2 border rounded"
//         />

//         {/* Description Input */}
//         <label htmlFor="description">Description</label>
//         <textarea
//           id="description"
//           {...(register("description"), { required: true })}
//           placeholder="Description"
//           className="w-full p-2 border rounded"
//         />

//         {/* Price Per Hour Input */}
//         <label htmlFor="pricePerHour">Price Per Hour</label>
//         <input
//           id="pricePerHour"
//           {...(register("pricePerHour"), { required: true })}
//           placeholder="Price Per Hour"
//           className="w-full p-2 border rounded"
//           type="number"
//         />

//         {/* Fuel Type Input */}
//         <label htmlFor="fuelType">Fuel Type</label>
//         <select
//           id="fuelType"
//           {...register("fuelType")}
//           className="w-full p-2 border rounded"
//         >
//           <option value="Gasoline">Gasoline</option>
//           <option value="Diesel">Diesel</option>
//           <option value="Electric">Electric</option>
//           <option value="Hybrid">Hybrid</option>
//         </select>

//         {/* Transmission Input */}
//         <label htmlFor="transmission">Transmission</label>
//         <select
//           id="transmission"
//           {...register("transmission")}
//           className="w-full p-2 border rounded"
//         >
//           <option value="Automatic">Automatic</option>
//           <option value="Manual">Manual</option>
//         </select>

//         {/* Seats Input */}
//         <label htmlFor="seats">Seats</label>
//         <input
//           id="seats"
//           {...(register("seats"), { required: true })}
//           placeholder="Seats"
//           className="w-full p-2 border rounded"
//           type="number"
//         />

//         {/* Luggage Capacity Input */}
//         <label htmlFor="luggageCapacity">Luggage Capacity</label>
//         <input
//           id="luggageCapacity"
//           {...(register("luggageCapacity"), { required: true })}
//           placeholder="Luggage Capacity"
//           className="w-full p-2 border rounded"
//           type="number"
//         />

//         {/* Doors Input */}
//         <label htmlFor="doors">Doors</label>
//         <input
//           id="doors"
//           {...(register("doors"), { required: true })}
//           placeholder="Doors"
//           className="w-full p-2 border rounded"
//           type="number"
//         />

//         {/* Rating Input */}
//         <label htmlFor="rating">Rating</label>
//         <input
//           id="rating"
//           {...(register("rating"), { required: true })}
//           placeholder="Rating"
//           className="w-full p-2 border rounded"
//           type="number"
//           step="0.1"
//           min="0"
//           max="5"
//         />

//         {/* Status Input */}
//         <label htmlFor="status">Status</label>
//         <select
//           id="status"
//           {...register("status")}
//           className="w-full p-2 border rounded"
//         >
//           <option value="available">Available</option>
//           <option value="unavailable">Unavailable</option>
//         </select>

//         {/* Features Input */}
//         <label htmlFor="features">Features</label>
//         <input
//           id="features"
//           {...(register("features"), { required: true })}
//           placeholder="Features (separate with commas)"
//           className="w-full p-2 border rounded"
//         />

//         {/* Mileage Input */}
//         <label htmlFor="mileage">Mileage</label>
//         <input
//           id="mileage"
//           {...(register("mileage"), { required: true })}
//           placeholder="Mileage"
//           className="w-full p-2 border rounded"
//           type="number"
//         />

//         {/* Car Type Input */}
//         <label htmlFor="carType">Car Type</label>
//         <select
//           id="carType"
//           {...register("carType")}
//           className="w-full p-2 border rounded"
//         >
//           <option value="SUV">SUV</option>
//           <option value="Economy">Economy</option>
//           <option value="Luxury">Luxury</option>
//           <option value="Electric">Electric</option>
//         </select>

//         {/* Image Upload */}
//         <label>Images</label>
//         <Upload
//           listType="picture"
//           multiple
//           beforeUpload={(file) => {
//             setImageList((prevList) => [...prevList, file]); // Add file to the image list
//             return false; // Prevent automatic upload, handle it manually
//           }}
//           onRemove={(file) => {
//             // Remove file from the image list
//             setImageList((prevList) =>
//               prevList.filter((imgFile) => imgFile !== file)
//             );
//           }}
//         >
//           <Button icon={<UploadOutlined />}>Upload Images</Button>
//         </Upload>

//         {/* Display Uploaded Images */}
//         <div>
//           <h3>Uploaded Images:</h3>
//           {imageList.map((image, index) => (
//             <img
//               key={index}
//               src={URL.createObjectURL(image)} // Create a temporary URL for the uploaded image
//               alt={`Uploaded car image ${index + 1}`}
//               style={{ width: "100px", height: "100px", margin: "5px" }}
//             />
//           ))}
//         </div>

//         {/* Submit Button */}
//         <Button type="primary" htmlType="submit">
//           Add Car
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default AddCarPage;
