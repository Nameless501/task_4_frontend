import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiConfig, apiErrorsConfig } from '../../utils/configs';

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
            .addCase(handleAuthentication.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(
                handleAuthentication.fulfilled,
                (state, { meta, payload }) => {
                    if (meta.arg.path === apiConfig.singIn) {
                        state.user = payload;
                        state.isAuthorized = true;
                    }
                    state.error = '';
                    state.status = 'fulfilled';
                }
            )
            .addCase(handleAuthentication.rejected, (state, { payload }) => {
                state.error = apiErrorsConfig[payload];
                state.status = 'rejected';
            });

        builder
            .addCase(handleSignOut.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(handleSignOut.fulfilled, (state) => {
                state.user = {};
                state.isAuthorized = false;
                state.error = '';
                state.status = 'fulfilled';
            })
            .addCase(handleSignOut.rejected, (state, { payload }) => {
                state.error = apiErrorsConfig[payload];
                state.status = 'rejected';
            });

        builder
            .addCase(handleAuthorization.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(handleAuthorization.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isAuthorized = true;
                state.error = '';
                state.status = 'fulfilled';
            })
            .addCase(handleAuthorization.rejected, (state) => {
                state.isAuthorized = false;
                state.status = 'rejected';
            });
    },
});

export const { resetErrors } = currentUserSlice.actions;

export default currentUserSlice.reducer;
