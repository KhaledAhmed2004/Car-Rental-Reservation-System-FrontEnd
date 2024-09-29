import React, { useState } from "react";
import { message, Card } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TbCurrencyTaka } from "react-icons/tb";
import { useUpdateBookingStatusMutation } from "../../redux/features/booking/bookingApi";

const PaymentManagementPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const [updateBookingStatus] = useUpdateBookingStatusMutation();
  const {
    carDetails = "Unknown Car",
    amountDue = "0",
    bookingId,
  } = state || {};

  if (!bookingId) {
    console.error("Booking ID is missing.");
  }

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      // Simulate API call for payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));
      message.success("Payment successful!");

      const result = await updateBookingStatus({
        id: bookingId,
        status: "completed",
      }).unwrap();
      message.success("Booking status updated to 'completed'");
      console.log("Booking status update response: ", result);

      // Reset the form fields
      reset();

      // Redirect to MyBooking page after successful payment and form reset
      // navigate("myBookings");
      navigate("/dashboard/myBookings");
    } catch (error) {
      message.error("Failed to update booking status");
      console.error("Error updating booking status: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      {/* <h1 className="text-2xl font-semibold mb-4">Payment Management</h1> */}
      <Card className="shadow-md" title="Complete Your Payment">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-2">Car Details</label>
            <input
              {...register("carDetails")}
              defaultValue={carDetails}
              disabled
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Amount Due</label>
            <div className="flex items-center border rounded px-3 py-2 w-full">
              <TbCurrencyTaka className="mr-2" />
              <input
                {...register("amountDue")}
                defaultValue={amountDue}
                disabled
                className="w-full border-none outline-none"
              />
            </div>
            {amountDue === "0" && (
              <p className="text-red-500 mt-1">
                No payment required for this booking.
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Payment Method</label>
            <select
              {...register("paymentMethod", {
                required: "Please select a payment method",
              })}
              className="border rounded px-3 py-2 w-full"
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="debitCard">Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>
            {errors.paymentMethod && (
              <p className="text-red-500">{errors.paymentMethod.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            disabled={loading}
          >
            {loading ? "Processing..." : "Complete Payment"}
          </button>
        </form>
      </Card>
    </div>
  );
};

export default PaymentManagementPage;
