import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiConfig } from '../../utils/configs';
import {
    handleThunkRejected,
    handleThunkPending,
    handleThunkFulfilled,
} from '../../utils/utils';

export const handleAuthentication = createAsyncThunk(
    'currentUser/handleAuthentication',
    async ({ path, payload }, { rejectWithValue }) => {
        try {
            const response = await axios.post(path, payload, {
                withCredentials: true,
            });
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.status);
        }
    }
);

export const handleSignOut = createAsyncThunk(
    'currentUser/handleSignOut',
    async (path, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                path,
                {},
                {
                    withCredentials: true,
                }
            );
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.status);
        }
    }
);

export const handleAuthorization = createAsyncThunk(
    'currentUser/handleAuthorization',
    async (path, { rejectWithValue }) => {
        try {
            const response = await axios.get(path, {
                withCredentials: true,
            });
            return response.data;
        } catch (err) {
            return rejectWithValue();
        }
    }
);

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {
        user: {},
        status: 'idle',
        error: '',
        isAuthorized: false,
    },
    reducers: {
        resetErrors: (state) => {
            state.error = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(handleAuthentication.pending, handleThunkPending)
            .addCase(
                handleAuthentication.fulfilled,
                (state, { meta, payload }) => {
                    if (meta.arg.path === apiConfig.singIn) {
                        state.user = payload;
                        state.isAuthorized = true;
                    }
                    handleThunkFulfilled(state);
                }
            )
            .addCase(handleAuthentication.rejected, handleThunkRejected);

        builder
            .addCase(handleSignOut.pending, handleThunkPending)
            .addCase(handleSignOut.fulfilled, (state) => {
                state.user = {};
                state.isAuthorized = false;
                handleThunkFulfilled(state);
            })
            .addCase(handleSignOut.rejected, (state, { payload }) => {
                handleThunkRejected(state, { payload });
                state.isAuthorized = false;
                state.user = {};
            });

        builder
            .addCase(handleAuthorization.pending, handleThunkPending)
            .addCase(handleAuthorization.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isAuthorized = true;
                handleThunkFulfilled(state);
            })
            .addCase(handleAuthorization.rejected, (state, { payload }) => {
                handleThunkRejected(state, { payload });
                state.isAuthorized = false;
                state.user = {};
            });
    },
});

export const { resetErrors } = currentUserSlice.actions;

export default currentUserSlice.reducer;
