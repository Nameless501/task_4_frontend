import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiConfig } from '../../utils/configs';
import {
    handleThunkRejected,
    handleThunkPending,
    handleThunkFulfilled,
} from '../../utils/utils';

export const getUsersData = createAsyncThunk(
    'users/getUsersData',
    async (arg, { rejectWithValue }) => {
        try {
            const response = await axios.get(apiConfig.users, {
                withCredentials: true,
            });
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.status);
        }
    }
);

export const toggleUsersBlock = createAsyncThunk(
    'users/toggleUsersBlock',
    async (payload, { rejectWithValue }) => {
        try {
            await axios.patch(apiConfig.block, payload, {
                withCredentials: true,
            });
            return payload;
        } catch (err) {
            return rejectWithValue(err.response.status);
        }
    }
);

export const deleteUsers = createAsyncThunk(
    'users/deleteUsers',
    async (payload, { rejectWithValue }) => {
        try {
            await axios.delete(apiConfig.delete, {
                data: payload,
                withCredentials: true,
            });
            return payload;
        } catch (err) {
            return rejectWithValue(err.response.status);
        }
    }
);

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: 'idle',
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsersData.pending, handleThunkPending)
            .addCase(getUsersData.fulfilled, (state, { payload }) => {
                state.users = payload;
                handleThunkFulfilled(state);
            })
            .addCase(getUsersData.rejected, handleThunkRejected);

        builder
            .addCase(toggleUsersBlock.pending, handleThunkPending)
            .addCase(toggleUsersBlock.fulfilled, (state, { payload }) => {
                const { id, block } = payload;
                state.users = state.users.map((user) =>
                    id.includes(user.id) ? { ...user, block } : user
                );
                handleThunkFulfilled(state);
            })
            .addCase(toggleUsersBlock.rejected, handleThunkRejected);

        builder
            .addCase(deleteUsers.pending, handleThunkPending)
            .addCase(deleteUsers.fulfilled, (state, { payload }) => {
                const { id } = payload;
                state.users = state.users.filter(
                    (user) => !id.includes(user.id)
                );
                handleThunkFulfilled(state);
            })
            .addCase(deleteUsers.rejected, handleThunkRejected);
    },
});

export default usersSlice.reducer;
