// import React from "react";
// import { LiaCarSideSolid } from "react-icons/lia";
// import { LuClipboardList } from "react-icons/lu";
// import { TbCoinTaka, TbCurrencyTaka } from "react-icons/tb";
// import { VscGraph } from "react-icons/vsc";
// import { HiOutlineUserGroup } from "react-icons/hi2";
// import { GiCarKey } from "react-icons/gi";

// const AdminOverviewPage = () => {
//   return (
//     <div className="p-4">
//       {/* scend */}
//       <div className="flex gap-4 flex-wrap">
//         {/* Revenue Card */}
//         <div className="bg-white shadow-md h-[220px] w-[320px] rounded-lg p-4 relative">
//           <div className="flex gap-2 items-center mb-4">
//             <TbCoinTaka className="text-6xl text-blue-500" />
//             <h3 className="text-lg font-semibold">Revenue</h3>
//           </div>
//           <div className="flex flex-col items-center">
//             <h3 className="text-2xl font-bold text-gray-800">৳10,000,000</h3>
//             <div className="flex items-center gap-2 mt-2">
//               <TbCurrencyTaka className="text-xl text-gray-500" />
//               <span className="text-sm text-gray-500">Total Revenue</span>
//             </div>
//             <div className="flex items-center gap-2 mt-4">
//               <VscGraph className="text-xl text-green-500" />
//               <span className="text-sm text-gray-500">25% Growth</span>
//             </div>
//           </div>
//         </div>

//         {/* Total Bookings Card */}
//         <div className="bg-white shadow-md h-[220px] w-[320px] rounded-lg p-4 relative">
//           <div className="flex gap-2 items-center mb-4">
//             <LuClipboardList className="text-6xl text-green-500" />
//             <h3 className="text-lg font-semibold">Total Bookings</h3>
//           </div>
//           <div className="flex flex-col items-center">
//             <h3 className="text-2xl font-bold text-gray-800">1,000</h3>
//             <div className="flex items-center gap-2 mt-2">
//               <LiaCarSideSolid className="text-xl text-gray-500" />
//               <span className="text-sm text-gray-500">Total Bookings</span>
//             </div>
//             <div className="flex items-center gap-2 mt-4">
//               <VscGraph className="text-xl text-blue-500" />
//               <span className="text-sm text-gray-500">45% Increase</span>
//             </div>
//           </div>
//         </div>

//         {/* Available Cars Card */}
//         <div className="bg-white shadow-md h-[220px] w-[320px] rounded-lg p-4 relative">
//           <div className="flex gap-2 items-center mb-4">
//             <LiaCarSideSolid className="text-6xl text-yellow-500" />
//             <h3 className="text-lg font-semibold">Available Cars</h3>
//           </div>
//           <div className="flex flex-col items-center">
//             <h3 className="text-2xl font-bold text-gray-800">150</h3>
//             <div className="flex items-center gap-2 mt-2">
//               <LiaCarSideSolid className="text-xl text-gray-500" />
//               <span className="text-sm text-gray-500">Cars Available</span>
//             </div>
//             <div className="flex items-center gap-2 mt-4">
//               <VscGraph className="text-xl text-orange-500" />
//               <span className="text-sm text-gray-500">10% Increase</span>
//             </div>
//           </div>
//         </div>

//         {/* Active Users Card */}
//         <div className="bg-white shadow-md h-[220px] w-[320px] rounded-lg p-4 relative">
//           <div className="flex gap-2 items-center mb-4">
//             <HiOutlineUserGroup className="text-6xl text-purple-500" />
//             <h3 className="text-lg font-semibold">Active Users</h3>
//           </div>
//           <div className="flex flex-col items-center">
//             <h3 className="text-2xl font-bold text-gray-800">2,500</h3>
//             <div className="flex items-center gap-2 mt-2">
//               <GiCarKey className="text-xl text-gray-500" />
//               <span className="text-sm text-gray-500">Users Active</span>
//             </div>
//             <div className="flex items-center gap-2 mt-4">
//               <VscGraph className="text-xl text-red-500" />
//               <span className="text-sm text-gray-500">5% Decrease</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* 4th */}
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {/* Revenue Card */}
//           <div className="bg-gray-200 h-[220px] w-full rounded-lg p-4 relative flex flex-col justify-between">
//             <div className="flex items-center gap-2">
//               <TbCoinTaka className="text-6xl text-blue-500" />
//               <div>
//                 <h3 className="text-lg font-semibold">Revenue</h3>
//                 <p className="text-2xl font-bold">$10,000,000</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <VscGraph className="text-2xl text-green-500" />
//               <p className="text-sm text-gray-600">+25% Growth</p>
//             </div>
//           </div>

//           {/* Total Bookings Card */}
//           <div className="bg-gray-200 h-[220px] w-full rounded-lg p-4 relative flex flex-col justify-between">
//             <div className="flex items-center gap-2">
//               <LuClipboardList className="text-6xl text-blue-500" />
//               <div>
//                 <h3 className="text-lg font-semibold">Total Bookings</h3>
//                 <p className="text-2xl font-bold">1,000</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <VscGraph className="text-2xl text-green-500" />
//               <p className="text-sm text-gray-600">+45% Increase</p>
//             </div>
//           </div>

//           {/* Available Cars Card */}
//           <div className="bg-gray-200 h-[220px] w-full rounded-lg p-4 relative flex flex-col justify-between">
//             <div className="flex items-center gap-2">
//               <LiaCarSideSolid className="text-6xl text-blue-500" />
//               <div>
//                 <h3 className="text-lg font-semibold">Available Cars</h3>
//                 <p className="text-2xl font-bold">1,000</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <VscGraph className="text-2xl text-green-500" />
//               <p className="text-sm text-gray-600">+45% Availability</p>
//             </div>
//           </div>

//           {/* Active Users Card */}
//           <div className="bg-gray-200 h-[220px] w-full rounded-lg p-4 relative flex flex-col justify-between">
//             <div className="flex items-center gap-2">
//               <HiOutlineUserGroup className="text-6xl text-blue-500" />
//               <div>
//                 <h3 className="text-lg font-semibold">Active Users</h3>
//                 <p className="text-2xl font-bold">1,000</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <GiCarKey className="text-2xl text-green-500" />
//               <p className="text-sm text-gray-600">+20% Growth</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminOverviewPage;

import React from "react";
import { LiaCarSideSolid } from "react-icons/lia";
import { LuClipboardList } from "react-icons/lu";
import { TbCoinTaka, TbCurrencyTaka } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GiCarKey } from "react-icons/gi";

const AdminOverviewPage = () => {
  return (
    <div className="p-4">
      {/* First Section */}
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Revenue Card */}
        <div className="bg-white shadow-md h-[220px] w-full sm:w-[320px] rounded-lg p-4">
          <div className="flex gap-2 items-center mb-4">
            <TbCoinTaka className="text-6xl text-blue-500" />
            <h3 className="text-lg font-semibold">Revenue</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-800">৳10,000,000</h3>
            <div className="flex items-center gap-2 mt-2">
              <TbCurrencyTaka className="text-xl text-gray-500" />
              <span className="text-sm text-gray-500">Total Revenue</span>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <VscGraph className="text-xl text-green-500" />
              <span className="text-sm text-gray-500">25% Growth</span>
            </div>
          </div>
        </div>

        {/* Total Bookings Card */}
        <div className="bg-white shadow-md h-[220px] w-full sm:w-[320px] rounded-lg p-4">
          <div className="flex gap-2 items-center mb-4">
            <LuClipboardList className="text-6xl text-green-500" />
            <h3 className="text-lg font-semibold">Total Bookings</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-800">1,000</h3>
            <div className="flex items-center gap-2 mt-2">
              <LiaCarSideSolid className="text-xl text-gray-500" />
              <span className="text-sm text-gray-500">Total Bookings</span>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <VscGraph className="text-xl text-blue-500" />
              <span className="text-sm text-gray-500">45% Increase</span>
            </div>
          </div>
        </div>

        {/* Available Cars Card */}
        <div className="bg-white shadow-md h-[220px] w-full sm:w-[320px] rounded-lg p-4">
          <div className="flex gap-2 items-center mb-4">
            <LiaCarSideSolid className="text-6xl text-yellow-500" />
            <h3 className="text-lg font-semibold">Available Cars</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-800">150</h3>
            <div className="flex items-center gap-2 mt-2">
              <LiaCarSideSolid className="text-xl text-gray-500" />
              <span className="text-sm text-gray-500">Cars Available</span>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <VscGraph className="text-xl text-orange-500" />
              <span className="text-sm text-gray-500">10% Increase</span>
            </div>
          </div>
        </div>

        {/* Active Users Card */}
        <div className="bg-white shadow-md h-[220px] w-full sm:w-[320px] rounded-lg p-4">
          <div className="flex gap-2 items-center mb-4">
            <HiOutlineUserGroup className="text-6xl text-purple-500" />
            <h3 className="text-lg font-semibold">Active Users</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-800">2,500</h3>
            <div className="flex items-center gap-2 mt-2">
              <GiCarKey className="text-xl text-gray-500" />
              <span className="text-sm text-gray-500">Users Active</span>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <VscGraph className="text-xl text-red-500" />
              <span className="text-sm text-gray-500">5% Decrease</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      {/* <div className="p-6 mt-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-200 h-[220px] w-full rounded-lg p-4 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <TbCoinTaka className="text-6xl text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold">Revenue</h3>
                <p className="text-2xl font-bold">$10,000,000</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <VscGraph className="text-2xl text-green-500" />
              <p className="text-sm text-gray-600">+25% Growth</p>
            </div>
          </div>

          <div className="bg-gray-200 h-[220px] w-full rounded-lg p-4 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <LuClipboardList className="text-6xl text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold">Total Bookings</h3>
                <p className="text-2xl font-bold">1,000</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <VscGraph className="text-2xl text-green-500" />
              <p className="text-sm text-gray-600">+45% Increase</p>
            </div>
          </div>

          <div className="bg-gray-200 h-[220px] w-full rounded-lg p-4 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <LiaCarSideSolid className="text-6xl text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold">Available Cars</h3>
                <p className="text-2xl font-bold">1,000</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <VscGraph className="text-2xl text-green-500" />
              <p className="text-sm text-gray-600">+45% Availability</p>
            </div>
          </div>

          <div className="bg-gray-200 h-[220px] w-full rounded-lg p-4 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <HiOutlineUserGroup className="text-6xl text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold">Active Users</h3>
                <p className="text-2xl font-bold">1,000</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <GiCarKey className="text-2xl text-green-500" />
              <p className="text-sm text-gray-600">+20% Growth</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AdminOverviewPage;
