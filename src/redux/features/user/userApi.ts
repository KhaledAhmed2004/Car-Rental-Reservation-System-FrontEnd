import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `/auth/users/${id}`,
      //   providesTags: ["User"],
    }),
    // updateUser: builder.mutation({
    //   query: ({ id, ...userData }) => ({
    //     url: `/auth/users/${id}`,
    //     method: "PUT",
    //     body: userData,
    //     // invalidatesTags: ["User"],
    //   }),
    // }),
    updateUser: builder.mutation({
      query: ({ id, ...userData }) => ({
        url: `/auth/users/${id}`,
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: ["User"], // Use if you're caching users
    }),

    getAllUsers: builder.query({
      query: () => `/auth/users`, // Endpoint to fetch all users
      providesTags: ["User"], // Optionally use tags for cache invalidation
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation, useGetAllUsersQuery } =
  userApi;
