import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
    key: "",
    subscription_id: "",
    isPaymentVarified: false,
    allPayments: {},
    finalMonths: {},
    monthlySalesRecord: []
}

export const getRezorPayTd = createAsyncThunk("/razorpay/getId", async () => {
    try {
        const response = await axiosInstance.get("/payments/razorpay-key");
        console.log("key", response.data);
        return response.data;
    } catch (error) {
        toast.error("Failed to fetch rezorpay id")
    }
})

export const purchaseCourseBundle = createAsyncThunk("/purchaseCourse", async () => {
    try {
        const response = await axiosInstance.post("/payments/subscribe");
        console.log("subscri id", response.data);
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const verifyUserPayment = createAsyncThunk("/payments/verify", async (data) => {
    try {
        const response = await axiosInstance.post("/payments/verify", {
            razorpay_payment_id: data.razorpay_payment_id,
            razorpay_subscription_id: data.razorpay_subscription_id,
            razorpay_signature: data.razorpay_signature
        });
        console.log("Verify user payment", response.data);
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const getPaymentRecord = createAsyncThunk("/payments/record", async () => {
    try {
        const response = axiosInstance.get("/payments?count=100");
        toast.promise(response, {
            loading: "Getting the payment records",
            success: (data) => {
                // console.log("get payment reco", data?.data?.message)
                return data?.data?.message
            },
            error: "Failed to get payment records"
        })
        // console.log("get rocord payment", response.data);
        return (await response).data;
    } catch (error) {
        toast.error("Operation Failed")
    }
})

export const cancleCourseBundle = createAsyncThunk("/payments/cancel", async () => {
    try {
        const response = axiosInstance.post("/payments/unsubscribe");
        toast.promise(response, {
            loading: "Unsubscribing the bundle",
            success: (data) => {
                // console.log("get payment reco", data?.data?.message)
                return data?.data?.message
            },
            error: "Failed to unsubscribe"
        })
        // console.log("get rocord payment", response.data);
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

const razorpaySlice = createSlice({
    name: "razorpay",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getRezorPayTd.fulfilled, (state, action) => {
            state.key = action?.payload?.key;
            console.log(state.key);
        })
        .addCase(purchaseCourseBundle.fulfilled, (state, action) => {
            state.subscription_id = action?.payload?.subscription_id;
        })
        .addCase(verifyUserPayment.fulfilled, (state, action) => {
            toast.success(action?.payload?.message)
            state.isPaymentVarified = action?.payload?.success;
        })
        .addCase(verifyUserPayment.rejected, (state, action) => {
            toast.success(action?.payload?.message)
            state.isPaymentVarified = action?.payload?.success;
        })
        .addCase(verifyUserPayment.fulfilled, (state, action) => {
            state.allPayments = action?.payload?.allPayments;
            state.finalMonths = action?.payload?.finalMonths;
            state.monthlySalesRecord = action?.payload?.monthlySalesRecord;
        })
    }
})

export default razorpaySlice.reducer;