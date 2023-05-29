import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiConfig } from '../../utils/configs';

export const getUsersData = createAsyncThunk(
  "users/getUsersData",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(apiConfig.users, { withCredentials: true });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.status);
    }
  }
);

export const toggleUsersBlock = createAsyncThunk(
  "users/toggleUsersBlock",
  async (payload, { rejectWithValue }) => {
    try {
      await axios.patch(apiConfig.block, payload, { withCredentials: true });
      return payload;
    } catch (err) {
      return rejectWithValue(err.response.status);
    }
  }
);

export const deleteUsers = createAsyncThunk(
  "users/deleteUsers",
  async (payload, { rejectWithValue }) => {
    try {
      await axios.delete(apiConfig.delete, { data: payload, withCredentials: true });
      return payload;
    } catch (err) {
      return rejectWithValue(err.response.status);
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle",
    statusCode: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getUsersData.fulfilled, (state, { payload }) => {
        state.users = payload
        state.statusCode = 204;
        state.status = "fulfilled";
      })
      .addCase(getUsersData.rejected, (state, { payload }) => {
        state.statusCode = payload;
        state.status = "rejected";
      });

    builder
      .addCase(toggleUsersBlock.pending, (state) => {
        state.status = "pending";
      })
      .addCase(toggleUsersBlock.fulfilled, (state, { payload }) => {
        const { id, block } = payload;
        state.users = state.users.map(user => id.includes(user.id) ? { ...user, block } : user);
        state.statusCode = 204;
        state.status = "fulfilled";
      })
      .addCase(toggleUsersBlock.rejected, (state, { payload }) => {
        state.statusCode = payload;
        state.status = "rejected";
      });

    builder
      .addCase(deleteUsers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteUsers.fulfilled, (state, { payload }) => {
        const { id } = payload;
        state.users = state.users.filter(user => !id.includes(user.id));
        state.statusCode = 204;
        state.status = "fulfilled";
      })
      .addCase(deleteUsers.rejected, (state, { payload }) => {
        state.statusCode = payload;
        state.status = "rejected";
      });
  },
});

export default usersSlice.reducer;
