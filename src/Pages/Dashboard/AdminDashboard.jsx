import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layouts/HomeLayout";
import { Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { deleteCourses, getAllCourses } from "../../Redux/Slices/CourseSlice";
import { getStateData } from "../../Redux/Slices/StatSlice";
import { getPaymentRecord } from "../../Redux/Slices/RazorpaySlice";
import { Bar, Pie } from "react-chartjs-2";
import {FaUsers} from "react-icons/fa";
import {FcSalesPerformance} from "react-icons/fc";
import {GiMoneyStack} from "react-icons/gi";
import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";

Chart.register(ArcElement, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip);

function AdminDashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { allUserCount, subscribeCount } = useSelector((state) => state.stat);
    const { allPayments, finalMonths, monthlySalesRecord } = useSelector((state) => state.razorpay);

    const userData = {
        labels: ["Registered User", "Enrolled User", "Demo"],
        fontColor: "black",
        datasets: [
            {
                label: "User Details",
                data: [allUserCount, subscribeCount, 3],
                backgroundColor: ["yellow", "green", "red"],
                borderWidth: 1,
                borderColor: ["yellow", "green", "red"]
            }
        ]
    };

    const salesData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        fontColor: "black",
        datasets: [
            {
                label: "Sales / Month",
                data: monthlySalesRecord,
                backgroundColor: ["rgb(255, 99, 132"],
                borderColor: ["white"],
                borderWidth: 2
            }
        ]
    }

    const myCourses = useSelector((state) => state?.course?.courseData);  // doubt

    async function onCourseDelete(id) {
        if(window.confirm("Are you sure you want to delete the course ?")) {
            const res = await dispatch(deleteCourses(id));
            if(res?.payload?.success) {
                await dispatch(getAllCourses());
            }
        }
    }

    useEffect(() => {
        (
            async () => {
                await dispatch(getAllCourses());
                // await dispatch(getStateData());   // backend route/controller/model not created
                // await dispatch(getPaymentRecord());
            }
        )()
    }, [])

    return (
        <HomeLayout>
            <div className="min-h-[90vh] mt-5 flex flex-wrap flex-col gap-10 text-black">
                <h1 className="text-center text-5xl font-semibold text-yellow-500">
                    Admin Dashboard
                </h1>

                <div className="grid grid-cols-2 gap-5 m-auto mx-10">
                    <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
                        <div className="w-80 h-80">
                            <Pie data={userData} />
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex items-center justify-center gap-5 p-5 rounded-md shadow-lg">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold">Registered User</p>
                                    <h3 className="text-4xl font-bold">{allUserCount}</h3>
                                </div>
                                <FaUsers className="text-yellow-500 text-5xl" />
                            </div>

                            <div className="flex items-center justify-center gap-5 p-5 rounded-md shadow-lg">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold">Subscribed User</p>
                                    <h3 className="text-4xl font-bold">{allUserCount}</h3>
                                </div>
                                <FaUsers className="text-green-500 text-5xl" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
                        <div className="h-80 w-full relative">
                            <Bar className="absolute bottom-0 h-80 w-full" data={salesData} />
                        </div>

                        
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex items-center justify-center gap-5 p-5 rounded-md shadow-lg">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold">subscription Count</p>
                                    <h3 className="text-4xl font-bold">{allPayments?.count}</h3>
                                </div>
                                <FcSalesPerformance className="text-yellow-500 text-5xl" />
                            </div>

                            <div className="flex items-center justify-center gap-5 p-5 rounded-md shadow-lg">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold">Total Revenue</p>
                                    <h3 className="text-4xl font-bold">{allPayments?.count * 499}</h3>
                                </div>
                                <GiMoneyStack className="text-green-500 text-5xl" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m-[5%] w-[80%] self-center flex flex-col items-center justify-center gap-10">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-center text-3xl font-semibold">
                            Course Overview
                        </h1>

                        <button
                            onClick={() => {
                                navigate("/course/create")
                            }}
                            className="w-fit bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded py-2 px-4 font-semibold text-lg"
                        >
                            Create New Course
                        </button>
                    </div>

                    <table className="table overflow-x-scroll">
                        <thead>
                            <tr>
                                <th>S. No.</th>
                                <th>Course Title</th>
                                <th>Course Category</th>
                                <th>Instructor</th>
                                <th>Total Lecture</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myCourses?.map((course, idx) => {
                                return (
                                    <tr key={course._id}>
                                        <td>{idx + 1}</td>
                                        <td>
                                            <textarea readOnly value={course?.title} className="w-40 h-auto bg-transparent resize-none"></textarea>
                                        </td>
                                        <td>{course?.category}</td>
                                        <td>{course?.createdBy}</td>
                                        <td>{course?.numbersOfLectures}</td>
                                        <td className="max-w-28 overflow-hidden text-ellipsis whitespace-nowrap">
                                            <textarea
                                                value={course?.description}
                                                readOnly
                                                className="w-80 h-auto bg-transparent resize-none"
                                            >
                                            
                                            </textarea>
                                        </td>
                                        <td className="flex items-center gap-4">
                                            <button
                                                className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                                                onClick={() => navigate("/course/displaylectures", {state: {...course}})}
                                            >
                                                <BsCollectionPlayFill />
                                            </button>
                                            <button
                                                className="bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                                                onClick={() => onCourseDelete(course?._id)}
                                            >
                                                <BsTrash />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </HomeLayout>
    )
}

export default AdminDashboard;