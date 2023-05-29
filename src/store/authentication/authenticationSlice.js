import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiConfig } from "../../utils/configs";

export const handleAuthentication = createAsyncThunk(
    "authentication/handleAuthentication",
    async ({path, payload}, { rejectWithValue }) => {
        try {
            const response = await axios.post(path, payload, { withCredentials: true });
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.status);
        }
    }
);

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState: {
        user: {},
        status: "idle",
        statusCode: null,
        isAuthorized: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(handleAuthentication.pending, (state) => {
                state.status = "pending";
            })
            .addCase(handleAuthentication.fulfilled, (state, {meta, payload}) => {
                if(meta.arg.path === apiConfig.singIn) {
                    state.user = payload;
                    state.isAuthorized = true;
                }
                state.statusCode = 204;
                state.status = "fulfilled";
            })
            .addCase(handleAuthentication.rejected, (state, { payload }) => {
                state.statusCode = payload;
                state.status = "rejected";
            });
    },
});

export default authenticationSlice.reducer;