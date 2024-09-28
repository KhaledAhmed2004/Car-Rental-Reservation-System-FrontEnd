import { Table, Tag, Modal, Button, Spin } from "antd";
import React, { useState, useEffect } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { useAppSelector } from "../../redux/hooks";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "../../redux/features/user/userApi";
import { useGetMyBookingsQuery } from "../../redux/features/booking/bookingApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

// UserOverView component: Displays user data and profile overview
const UserOverView: React.FC = () => {
  const user = useAppSelector((state) => state?.auth?.user);
  const { data, isLoading } = useGetMyBookingsQuery();
  const {
    data: userData,
    isLoading: userLoading,
    refetch,
  } = useGetUserQuery(user?.userId);
  const [updateUser] = useUpdateUserMutation();

  const [isModalVisible, setIsModalVisible] = useState(false);

  // Setting up react-hook-form
  const { register, handleSubmit, reset } = useForm();

  // Show modal with default values
  const showModal = () => {
    if (userData?.data) {
      reset({
        name: userData.data.name,
        email: userData.data.email,
        phone: userData.data.phone || "",
      });
      setIsModalVisible(true);
    }
  };

  // Handle form submission
  const onSubmit = async (data: any) => {
    try {
      await updateUser({
        id: user?.userId,
        ...data,
      }).unwrap();
      setIsModalVisible(false);
      toast.success("Profile updated successfully!");

      // Refetch the user data to get the updated information
      refetch();
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error("Failed to update profile.");
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (isLoading || userLoading)
    return <Spin tip="Loading user data..." size="large" />;

  const dataSource = data?.data.map((booking) => ({
    key: booking.id,
    name: `${booking.carId.brand} ${booking.carId.model}`,
    rentalDates: `${booking.date} ${booking.startTime}`,
    price: `$${booking.carId.pricePerHour}/hour`,
    status: booking.status,
  }));

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
      render: (status: string) => (
        <Tag color={status === "confirmed" ? "blue" : "green"}>{status}</Tag>
      ),
    },
  ];

  return (
    <div className="h-full p-4">
      <div className="w-full flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full md:w-[60%]">
          <Table dataSource={dataSource} columns={columns} />
        </div>

        <div className="bg-white p-4 w-full md:w-[40%] rounded-lg shadow-md">
          <div className="text-center mt-4">
            <h2 className="font-bold text-lg">Name: {userData?.data?.name}</h2>
            <h2 className="text-gray-500">Email: {userData?.data?.email}</h2>
            <h2 className="text-gray-500">Phone: {userData?.data?.phone}</h2>
            <div className="flex justify-center mt-4">
              <button
                className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-1"
                onClick={showModal}
              >
                Edit Profile <RiEdit2Line />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Edit Profile"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="border rounded px-2 py-1 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="border rounded px-2 py-1 w-full"
          />
          <input
            type="tel"
            placeholder="Phone"
            {...register("phone")}
            className="border rounded px-2 py-1 w-full"
          />
          <div className="flex justify-end">
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default UserOverView;
