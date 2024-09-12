import { Table, Tag } from "antd";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineMode } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

const ManageCarPage = () => {
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
      title: "Car Mode",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Rental Dates",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Price",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Availability",
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
          <div className="flex gap-2">
            <div className="bg-gray-100 p-1 rounded-lg hover:scale-125 transition-all">
              <AiOutlineDelete className="text-xl" />
            </div>
            <div className="bg-gray-100 p-1 rounded-lg hover:scale-125 transition-all">
              <MdOutlineMode className="text-xl" />
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <div className="bg-gray-200 p-4 space-y-4 rounded-lg  ">
        <div className="flex justify-end">
          <button className="flex gap-2 bg-gray-600 p-2 rounded-lg font-semibold text-white">
            <IoIosAddCircleOutline className="text-2xl" />
            Add New Car
          </button>
        </div>
        <div className="h-full">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default ManageCarPage;
