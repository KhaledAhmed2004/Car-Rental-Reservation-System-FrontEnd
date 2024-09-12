import React from "react";
import { LiaCarSideSolid } from "react-icons/lia";
import { LuClipboardList, LuHistory } from "react-icons/lu";
import { TbCoinTaka } from "react-icons/tb";
import { TbCurrencyTaka } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdCarRental } from "react-icons/md";
import { GiCarKey } from "react-icons/gi";
import { MdOutlineCarRental } from "react-icons/md";

const AdminOverviewPage = () => {
  return (
    <div>
      <div className="flex gap-4 flex-wrap">
        <div className="bg-gray-200 h-[220px] w-[320px] rounded-lg p-4 relative">
          <div className="flex gap-2 items-center">
            <TbCoinTaka className="text-6xl" />
            <h3 className="text-lg font-semibold">Revenue</h3>
          </div>
          <div className="flex items-center gap-2 absolute top-1/2">
            <TbCurrencyTaka className="text-2xl" />
            <h3 className="text-lg font-semibold">10000000</h3>
          </div>
          <div className="flex items-center gap-2 absolute bottom-4">
            <VscGraph className="text-2xl" />
            <h3 className="text-lg font-semibold">25%</h3>
          </div>
        </div>
        <div className="bg-gray-200 h-[220px] w-[320px] rounded-lg p-4 relative">
          <div className="flex gap-2 items-center">
            <LuClipboardList className="text-6xl" />
            <h3 className="text-lg font-semibold">Bookings</h3>
          </div>
          <div className="flex items-center gap-2 absolute top-1/2">
            <LiaCarSideSolid className="text-2xl" />
            <h3 className="text-lg font-semibold">1000</h3>
          </div>
          <div className="flex items-center gap-2 absolute bottom-4">
            <VscGraph className="text-2xl" />
            <h3 className="text-lg font-semibold">45%</h3>
          </div>
        </div>
        <div className="bg-gray-200 h-[220px] w-[320px] rounded-lg p-4 relative">
          <div className="flex gap-2 items-center">
            <LuClipboardList className="text-6xl" />
            <h3 className="text-lg font-semibold">Available Cars</h3>
          </div>
          <div className="flex items-center gap-2 absolute top-1/2">
            <LiaCarSideSolid className="text-2xl" />
            <h3 className="text-lg font-semibold">1000</h3>
          </div>
          <div className="flex items-center gap-2 absolute bottom-4">
            <VscGraph className="text-2xl" />
            <h3 className="text-lg font-semibold">45%</h3>
          </div>
        </div>
        <div className="bg-gray-200 h-[220px] w-[330px] rounded-lg p-4 relative">
          <div className="flex gap-2 items-center">
            <LuClipboardList className="text-6xl" />
            <h3 className="text-lg font-semibold">Active User</h3>
          </div>
          <div className="flex items-center gap-2 absolute top-1/2">
            <HiOutlineUserGroup className="text-2xl" />
            <h3 className="text-lg font-semibold">1000</h3>
          </div>
          <div className="flex items-center gap-2 absolute bottom-4">
            <GiCarKey className="text-2xl" />
            <h3 className="text-lg font-semibold">45%</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverviewPage;
