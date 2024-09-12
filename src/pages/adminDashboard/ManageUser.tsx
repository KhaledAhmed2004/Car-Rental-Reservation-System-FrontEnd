import { Table, Tag } from "antd";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineMode } from "react-icons/md";
import { GiCarKey } from "react-icons/gi";

const ManageUser = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      status: "On-Going",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      status: "Complated",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Role",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      dataIndex: "availability",
      key: "address",
      render: () => {
        return (
          <div>
            <Tag color="blue" className="">
              Panding
            </Tag>
            <Tag color="blue-inverse" className="">
              Confirmed
            </Tag>
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => {
        return (
          <div className="bg-gray-100 p-1 rounded-lg hover:scale-125 transition-all w-fit">
            <GiCarKey className="text-xl" />
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <div className="bg-gray-200 p-4 space-y-4 rounded-lg  ">
        <div className="h-full">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
