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
