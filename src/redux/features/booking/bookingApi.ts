import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/bookings",
        method: "POST",
        body: bookingData,
      }),
      invalidatesTags: ["Booking", "Car"],
    }),

    getMyBookings: builder.query({
      query: () => "/bookings/my-bookings",
      providesTags: ["Booking"],
    }),
    getAllBookings: builder.query({
      query: () => "/bookings",
      providesTags: ["Booking"],
    }),
    updateBookingStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/bookings/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["Booking"],
    }),
    updateBooking: builder.mutation({
      query: ({ bookingId, updatedData }) => ({
        url: `/bookings/${bookingId}/details`,
        method: "PATCH",
        body: updatedData,
      }),
    }),
    deleteBooking: builder.mutation({
      query: ({ id }) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Booking"],
    }),
  }),
});

export const {
  useUpdateBookingMutation,
  useCreateBookingMutation,
  useGetMyBookingsQuery,
  useGetAllBookingsQuery,
  useUpdateBookingStatusMutation,
  useDeleteBookingMutation,
} = bookingApi;
