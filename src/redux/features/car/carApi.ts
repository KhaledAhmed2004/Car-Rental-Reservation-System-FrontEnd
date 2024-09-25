import { baseApi } from "../../api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Add a car
    addCar: builder.mutation({
      query: (carData) => ({
        url: "/cars",
        method: "POST",
        body: carData,
      }),
      invalidatesTags: ["Car"],
    }),

    // Update car
    updateCar: builder.mutation({
      query: ({ id, carData }) => ({
        url: `/cars/${id}`,
        method: "PUT",
        body: carData,
      }),
      invalidatesTags: ["Car"],
    }),

    // delete A car
    deleteCar: builder.mutation({
      query: (id) => ({
        url: `/cars/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Car"],
    }),

    getCarById: builder.query({
      query: (id) => `/cars/${id}`,
      // providesTags: (result, error, id) => [{ type: "Car", id }],
    }),

    // fetching all cars
    // getAllCars: builder.query({
    //   query: () => "/cars",
    //   providesTags: ["Car"],
    // }),
    // getAllCars: builder.query({
    //   query: (carType) => {
    //     const queryParam = carType ? `?carType=${carType}` : "";
    //     return `/cars${queryParam}`;
    //   },
    //   providesTags: ["Car"],
    // }),
    getAllCars: builder.query({
      query: (params) => {
        return {
          url: "/cars",
          method: "GET",
          params,
        };
      },
      providesTags: ["Car"],
    }),
  }),
});

export const {
  useGetAllCarsQuery,
  useUpdateCarMutation,
  useDeleteCarMutation,
  useAddCarMutation,
  useGetCarByIdQuery,
} = carApi;
