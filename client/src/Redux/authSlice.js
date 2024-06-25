import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials) => {
    try {
      const response = await axios.post("http://localhost:7999/api/user/login", credentials);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// Async thunk for logout
export const logout = createAsyncThunk("auth/logout", async () => {
  await axios.post("/api/logout");
});

// Async thunk for loading user from API
export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async () => {
    try {

      // const response = await axios.get("http://localhost:7999/api/check/user");
      const response = await fetch("http://localhost:7999/api/check/user", {
        method: "GET",
        credentials: "include"
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
