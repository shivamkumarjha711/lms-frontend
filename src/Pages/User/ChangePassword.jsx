import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../Redux/Slices/AuthSlice";
import HomeLayout from "../../Layouts/HomeLayout";

function ChangePassword() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [password, setPassword] = useState({
        oldPassword: "",
        newPassword: ""
    })

    function inputChangeHandle(e) {
        const {name, value} = e.target;
        setPassword({
            ...password,
            [name]: value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();

        if (!password.oldPassword || !password.newPassword) {
            toast.error("All fields are required");
        }

        await dispatch(changePassword(password));

        navigate("/user/profile")
    }


    return (
        <HomeLayout>
        <div className="flex items-center justify-center h-[90vh]">
            <form
                onSubmit={onFormSubmit}
                className="flex flex-col justify-center gap-5 rounded-lg p-4 text-black w-80 min-h-[26rem] shadow-[0_0_10px_black]"
            >
                <h1 className="text-center text-2xl font-semibold ">Change Password</h1>

                <div className="flex flex-col gap-1">
                    <label htmlFor="oldPassword" className="text-xl font-semibold"> Old Password</label>
                    <input 
                        required
                        type="text"
                        name="oldPassword"
                        id="oldPassword"
                        placeholder="Old Password"
                        className="bg-transparent py-2 px-1 border"
                        value={password.oldPassword}
                        onChange={inputChangeHandle}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="newPassword" className="text-xl font-semibold"> New Password</label>
                    <input 
                        required
                        type="text"
                        name="newPassword"
                        id="newPassword"
                        placeholder="New Password"
                        className="bg-transparent py-2 px-1 border"
                        value={password.newPassword}
                        onChange={inputChangeHandle}
                    />
                </div>

                <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded-md py-2 font-bold">
                        Change Password
                </button>
            </form>
        </div>
        </HomeLayout>
    )
};

export default ChangePassword;