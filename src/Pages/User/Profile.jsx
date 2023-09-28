import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layouts/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { cancleCourseBundle } from "../../Redux/Slices/RazorpaySlice";
import { getUserData } from "../../Redux/Slices/AuthSlice";
import toast from "react-hot-toast";

function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = useSelector((state) => state?.auth?.data);

    async function handleCancellation() {
        toast("Initiating Cancellation")
        await dispatch(cancleCourseBundle());
        await dispatch(getUserData());
        toast.success("Cancellation Completed");
        navigate("/")
    }

    return (
        <HomeLayout>
            <div className="min-h-[90vh] flex items-center justify-center">
                <div className="my-10 flex flex-col gap-4 rounded-lg p-4 text-black w-[60vh] shadow-[0_0_10px_black]">
                    <img 
                        src={userData?.avatar?.secure_url}
                        className="w-40 m-auto rounded-full border border-black"
                    />

                    <h3 className="text-xl font-semibold text-center capitalize">
                        {userData?.fullName}
                    </h3>

                    <div className="grid grid-cols-2">
                        <p>Email: </p><p>{userData?.email}</p>
                        <p>Role: </p><p>{userData?.role}</p>
                        <p>Subscription: </p><p>{userData?.subscription?.status === "active" ? "Action" : "Inactive"}</p>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <Link 
                            to="/user/changepassword" 
                            className="w-1/2 bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 px-6 cursor-pointer"
                            >
                                <button>Change Password</button>
                        </Link>
                        <Link 
                            to="/user/editprofile" 
                            className="w-1/2 bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 px-12 cursor-pointer"
                            >
                                <button>Edit Profile</button>
                        </Link>
                    </div>

                    {userData?.subscription?.status === "active" && (
                        <button onClick={handleCancellation} className="w-full bg-red-500 py-2 font-semibold hover:bg-red-600 transition-all ease-in-out duration-300">
                            Cancel Subscription
                        </button>
                    )}
                </div>
            </div>
        </HomeLayout>
    )
}

export default Profile;