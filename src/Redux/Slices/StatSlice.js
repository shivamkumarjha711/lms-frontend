import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
    allUserCount: 5,
    subscribeCount: 8
}

export const getStateData = createAsyncThunk("/stats/get", async () => {
    try {
        const response = axiosInstance.get("/admin/stats/users");
        toast.promise(response, {
            loading: "Getting the stats",
            success: (data) => {
                return data?.data?.message
            },
            error: "Failed to load state data"
        });
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

const statSlice = createSlice({
    name: "state",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStateData.fulfilled, (state, action) => {
            state.allUserCount = action?.payload?.allUserCount;
            state.subscribeCount = action?.payload?.subscribeCount;
        })
    }
})

export default statSlice.reducer;