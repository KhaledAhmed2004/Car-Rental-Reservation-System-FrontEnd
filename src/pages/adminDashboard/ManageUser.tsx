import { Table, Tag, Button, message, Spin } from "antd";
import React from "react";
import {
  useGetAllUsersQuery,
  useUpdateUserMutation,
} from "../../redux/features/user/userApi";

const ManageUser = () => {
  const { data, error, isLoading } = useGetAllUsersQuery(); // Fetching all users
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation(); // Update user mutation

  // Handle loading state
  if (isLoading) {
    return <Spin size="large" />; // Show a loading spinner while fetching data
  }

  // Handle error state
  if (error) {
    message.error("Failed to load users.");
    return null; // Return null or a fallback UI
  }

  // Define columns for the Ant Design Table
  const columns = [
    {
      title: "",
      key: "index",
      render: (text, record, index) => index + 1, // Display the row index (1-based)
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <Tag color={role === "admin" ? "green" : "blue"}>{role}</Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "active" ? "green" : "red"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            type="default"
            onClick={() => handleChangeRole(record.key, record.role)}
            loading={isUpdating} // Show loading state for the button
          >
            {record.role === "user" ? "Make Admin" : "Make User"}
          </Button>
          <Button
            type="default"
            onClick={() => handleChangeStatus(record.key, record.status)}
            loading={isUpdating} // Show loading state for the button
          >
            {record.status === "active" ? "Block" : "Activate"}
          </Button>
        </div>
      ),
    },
  ];

  // Transform data if necessary to match the expected format
  const dataSource = data?.data?.map((user) => ({
    key: user._id, // Assuming _id is the user ID
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
  }));

  // Handle role change
  const handleChangeRole = async (userId, currentRole) => {
    const newRole = currentRole === "user" ? "admin" : "user"; // Toggle the role
    try {
      await updateUser({ id: userId, role: newRole }).unwrap();
      message.success(`User role updated to ${newRole}.`);
    } catch (error) {
      console.error("Error updating user role:", error);
      message.error("Failed to update user role.");
    }
  };

  // Handle status change
  const handleChangeStatus = async (userId, currentStatus) => {
    const newStatus = currentStatus === "active" ? "block" : "active";
    try {
      await updateUser({ id: userId, status: newStatus }).unwrap();
      message.success(`User status updated to ${newStatus}.`);
    } catch (error) {
      message.error("Failed to update user status.");
    }
  };

  return (
    // <div className="bg-white rounded-lg">
    //   <div className="rounded-lg p-4">
    //     <div className="h-full border-2 rounded-lg">
    //       <Table dataSource={dataSource} columns={columns} />
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white rounded-lg overflow-hidden">
      {" "}
      {/* Add overflow-hidden to the outer div */}
      <div className="rounded-lg p-4">
        <div className="h-full border-2 rounded-lg overflow-x-auto">
          {" "}
          {/* Add overflow-x-auto for horizontal scrolling */}
          <Table
            dataSource={dataSource}
            columns={columns}
            className="min-w-full" // Ensure the table takes up full width and is scrollable
          />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
