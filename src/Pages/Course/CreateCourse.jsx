import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createNewCourse } from "../../Redux/Slices/CourseSlice";
import HomeLayout from "./../../Layouts/HomeLayout";
import { AiOutlineArrowLeft } from "react-icons/ai";

function CreateCourse() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        title: "",
        category: "",
        createdBy: "",
        description: "",
        thumbnail: null,
        previewImage: ""
    });

    function handleImageUpload(e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if(uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);    // immediately photo ko show karne ke liye ye use kiya hai
            fileReader.addEventListener("load", function() {
                setUserInput({
                    ...userInput,
                    previewImage: this.result,   // for immediadetly show
                    thumbnail: uploadedImage     // fo  r store this photo in DB
                })
            })
        }
    }

    function handleUserInput(e) {
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();

        if(!userInput.title || !userInput.description || !userInput.category || !userInput.createdBy || !userInput.thumbnail) {
            toast.error("All fields are mendatory");
            return;
        }

        const response = await dispatch(createNewCourse(userInput));
        if(response?.payload?.success) {
            setUserInput({
                title: "",
                category: "",
                createdBy: "",
                description: "",
                thumbnail: null,
                previewImage: ""
            })
            navigate("/courses");
        }

    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[90vh]">
                <form
                    onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-black w-[700px] my-10 shadow-[0_0_10px_black] relative"
                >
                    <Link to={-1} className="absolute top-8 text-2xl link text-accent cursor-pointer">
                        <AiOutlineArrowLeft />
                    </Link>
                    

                    <h1 className="text-center text-2xl font-bold">
                        Create New Course
                    </h1>

                    <main className="grid grid-cols-2 gap-x-10">
                        <div className="gap-y-6">
                            <div>
                                <label htmlFor="image_uploads" className="cursor-pointer">
                                    { userInput.previewImage ? (
                                        <img
                                            className="w-full h-44 m-auto border"
                                            src={userInput.previewImage} 
                                        />
                                    ) : (
                                        <div className="w-full h-44 m-auto flex items-center justify-center border">
                                            <h1 className="font-bold text-lg">Upload your course thumbnail</h1>
                                        </div>
                                    )}
                                </label>
                                <input 
                                    className="hidden"
                                    type="file"
                                    id="image_uploads"
                                    name="image_uploads"
                                    accept=".jpg, .jpeg, .png"
                                    onChange={handleImageUpload}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="title">
                                    Course Title
                                </label>
                                <input 
                                    required
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Enter Course Title"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.title}
                                    onChange={handleUserInput}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="createdBy">
                                    Course Instructure
                                </label>
                                <input 
                                    required
                                    type="text"
                                    name="createdBy"
                                    id="createdBy"
                                    placeholder="Enter Course Instructure"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.createdBy}
                                    onChange={handleUserInput}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="category">
                                    Course Category
                                </label>
                                <input 
                                    required
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder="Enter Course Category"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.category}
                                    onChange={handleUserInput}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="description">
                                    Course Description
                                </label>
                                <input 
                                    required
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Enter Course Description"
                                    className="bg-transparent px-2 py-1 h-24 overflow-Y-scroll resize-none border"
                                    value={userInput.description}
                                    onChange={handleUserInput}
                                />
                            </div>
                        </div>
                    </main>  
                    
                    <button type="submit" className="w-full py-1 rounded-sm text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300">
                        Create Course
                    </button>
                </form>
            </div>
        </HomeLayout>
    )
}

export default CreateCourse;