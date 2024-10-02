import React from "react";
import { LiaCarSideSolid } from "react-icons/lia";
import { LuClipboardList } from "react-icons/lu";
import { TbCoinTaka } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { useGetAllUsersQuery } from "../../redux/features/user/userApi";
import { useGetAllCarsQuery } from "../../redux/features/car/carApi";
import { useGetAllBookingsQuery } from "../../redux/features/booking/bookingApi";
import { Statistic } from "antd";
import CountUp from "react-countup";

const AdminOverviewPage = () => {
  // Fetching data using custom hooks
  const {
    data: usersData,
    error: usersError,
    isLoading: usersLoading,
  } = useGetAllUsersQuery();
  const { data: carData } = useGetAllCarsQuery();
  const {
    data: bookingsData,
    error: bookingsError,
    isLoading: bookingsLoading,
  } = useGetAllBookingsQuery();

  // Handle loading state
  if (usersLoading || bookingsLoading) return <p>Loading...</p>;

  // Handle error state
  if (usersError || bookingsError)
    return <p>Something went wrong. Please try again later.</p>;

  // Calculate total revenue from bookings
  const totalRevenue =
    bookingsData?.data.reduce((acc, booking) => acc + booking.totalCost, 0) ||
    0;

  // Get active users count
  const activeUsers = usersData ? usersData?.data?.length : 0;

  // Get total cars count
  const totalCars = carData ? carData?.data?.length : 0;

  // Get total bookings count
  const totalBookings = bookingsData ? bookingsData?.data?.length : 0;

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
            <Statistic
              className="text-2xl"
              valueRender={() => (
                <CountUp
                  end={totalRevenue}
                  duration={2.75} // Animation duration
                  decimals={2} // Number of decimal points
                  prefix="৳"
                />
              )}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
            />
          </div>
        </div>

        {/* Total Bookings Card */}
        <div className="bg-white shadow-md h-[220px] w-full sm:w-[320px] rounded-lg p-4">
          <div className="flex gap-2 items-center mb-4">
            <LuClipboardList className="text-6xl text-green-500" />
            <h3 className="text-lg font-semibold">Total Bookings</h3>
          </div>
          <div className="flex flex-col items-center">
            <Statistic
              valueRender={() => (
                <CountUp end={totalBookings} duration={2.75} />
              )}
            />
          </div>
        </div>

        {/* Available Cars Card */}
        <div className="bg-white shadow-md h-[220px] w-full sm:w-[320px] rounded-lg p-4">
          <div className="flex gap-2 items-center mb-4">
            <LiaCarSideSolid className="text-6xl text-yellow-500" />
            <h3 className="text-lg font-semibold">Total Cars</h3>
          </div>
          <div className="flex flex-col items-center">
            <Statistic
              valueRender={() => <CountUp end={totalCars} duration={2.75} />}
            />
          </div>
        </div>

        {/* Active Users Card */}
        <div className="bg-white shadow-md h-[220px] w-full sm:w-[320px] rounded-lg p-4">
          <div className="flex gap-2 items-center mb-4">
            <HiOutlineUserGroup className="text-6xl text-purple-500" />
            <h3 className="text-lg font-semibold">Active Users</h3>
          </div>
          <div className="flex flex-col items-center">
            <Statistic
              valueRender={() => <CountUp end={activeUsers} duration={2.75} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverviewPage;
