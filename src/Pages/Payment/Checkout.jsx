import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRezorPayTd, purchaseCourseBundle, verifyUserPayment } from "../../Redux/Slices/RazorpaySlice";
import toast from "react-hot-toast";
import HomeLayout from "../../Layouts/HomeLayout";
import { BiRupee } from "react-icons/bi"

function Checkout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const razorpayKey = useSelector((state) => state?.razorpay?.key);
    const subscription_id = useSelector((state) => state?.razorpay?.subscription_id);
    const isPaymentVarified = useSelector((state) => state?.razorpay?.isPaymentVarified);
    const userData = useSelector((state) => state?.auth?.data);
    const paymentDetails = {
        razorpay_payment_id: "",
        razorpay_subscription_id: "",
        razorpay_signature: ""
    }

    async function handleSubscription(e) {
        e.preventDefault();
        if(!razorpayKey || !subscription_id) {
            toast.error("Something went wrong");
            return;
        }
        const options = {
            key: razorpayKey,
            subscription_id: subscription_id,
            name: "Coursify Pvt. Ltd.",
            description: "Subscription",
            theme: {
                color: '#F37254'
            },
            prefill: {
                email: userData.email,
                name: userData.name
            },
            handler: async function(response) {
                paymentDetails.razorpay_payment_id = response.razorpay_subscription_id;       // subscription_id not found
                paymentDetails.razorpay_signature = response.razorpay_signature;
                paymentDetails.razorpay_subscription_id = response.razorpay_subscription_id;

                toast.success("Payment Successfull");

                const res = await dispatch(verifyUserPayment(paymentDetails));
                
                res?.payload?.success ? navigate("/checkout/success") : navigate("/checkout/fail");
            }
        }

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    async function load() {
        await dispatch(getRezorPayTd());
        await dispatch(purchaseCourseBundle());
    }

    useEffect(() => {
        load();
    }, [])

    return (
        <HomeLayout>
            <form 
                onSubmit={handleSubscription}
                className="min-h-[90vh] flex items-center justify-center text-black"
            >
                <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative">
                    <h1 className="bg-yellow-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">Subscription Bundle</h1>

                    <div className="px-4 space-y-5 text-center">
                        <p className="text-[17px]">
                            This product will allow you to access all available courses
                            <span className="text-yellow-500 font-bold">
                                <br />
                                    1 Year duration 
                            </span> {" "}
                            All the existing and new launched courses also avialable
                        </p>

                        <p className="flex items-center justify-center gap-1 text-2xl font-bold text-yellow-500">
                            <BiRupee /><span>499</span> Only
                        </p>

                        <div className="text-gray-500">
                            <p>100% refund on cancellation</p>
                            <p>* Term and Condition applied *</p>
                        </div>

                        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full left-0 py-2 text-lg font-bold rounded-bl-lg rounded-br-lg">
                            Buy Now
                        </button>
                    </div>
                </div>
            </form>
        </HomeLayout>
    )
}

export default Checkout;