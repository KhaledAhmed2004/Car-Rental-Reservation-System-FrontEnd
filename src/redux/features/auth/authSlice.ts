import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

type TAuthState = {
  user: null | object;
  token: null | string;
  role: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;

      if (token) {
        const decodedToken: any = jwtDecode(token); // Decode the token
        state.role = decodedToken?.role || null; // Extract and set role
      } else {
        state.role = null; // Reset role if no token
      }
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

// Selectors to get the current token, user, and role
export const useCurrentToken = (state) => state.auth.token;
export const user = (state) => state.auth.user;
export const role = (state) => state.auth.role;
