// import { Table, Tag } from "antd";
// import React from "react";
// import { AiOutlineDelete } from "react-icons/ai";
// import { IoIosAddCircleOutline } from "react-icons/io";
// import { MdOutlineMode } from "react-icons/md";
// import { GiCarKey } from "react-icons/gi";

// const ManageUser = () => {
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
//     {
//       key: "2",
//       name: "John",
//       age: 42,
//       address: "10 Downing Street",
//       status: "Complated",
//     },
//     {
//       key: "2",
//       name: "John",
//       age: 42,
//       address: "10 Downing Street",
//       status: "Complated",
//     },
//     {
//       key: "2",
//       name: "John",
//       age: 42,
//       address: "10 Downing Street",
//       status: "Complated",
//     },
//     {
//       key: "2",
//       name: "John",
//       age: 42,
//       address: "10 Downing Street",
//       status: "Complated",
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
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Email",
//       dataIndex: "age",
//       key: "age",
//     },
//     {
//       title: "Role",
//       dataIndex: "address",
//       key: "address",
//     },
//     {
//       title: "Status",
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

// export default ManageUser;

import { Table, Tag, Button, message } from "antd";
import React from "react";

const ManageUser = () => {
  const [dataSource, setDataSource] = React.useState([
    {
      key: "1",
      name: "Mike",
      email: "mike@example.com",
      role: "User",
      status: "Active",
    },
    {
      key: "2",
      name: "John",
      email: "john@example.com",
      role: "Admin",
      status: "Blocked",
    },
  ]);

  // Function to change the role of a user
  const handleChangeRole = (key) => {
    setDataSource((prev) =>
      prev.map((user) => {
        if (user.key === key) {
          return { ...user, role: user.role === "User" ? "Admin" : "User" };
        }
        return user;
      })
    );
    message.success("User role changed successfully.");
  };

  // Function to change the status of a user (block/activate)
  const handleChangeStatus = (key) => {
    setDataSource((prev) =>
      prev.map((user) => {
        if (user.key === key) {
          return {
            ...user,
            status: user.status === "Active" ? "Blocked" : "Active",
          };
        }
        return user;
      })
    );
    message.success("User status updated successfully.");
  };

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
      render: (role) => {
        return <Tag color={role === "Admin" ? "green" : "blue"}>{role}</Tag>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        return (
          <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        return (
          <div className="flex gap-2">
            {/* Button to change the user's role */}
            <Button type="default" onClick={() => handleChangeRole(record.key)}>
              {record.role === "User" ? "Make Admin" : "Make User"}
            </Button>
            {/* Button to change the user's status (block/activate) */}
            <Button
              type="default"
              onClick={() => handleChangeStatus(record.key)}
            >
              {record.status === "Active" ? "Block" : "Activate"}
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="bg-white rounded-lg">
      <div className="rounded-lg p-4 ">
        <div className="h-full border-2 rounded-lg">
          {/* User management table with role and status actions */}
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
