import { Link } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import homepageimage from '../assets/Images/homepageimage.png'

function HomePage() {
  return (
    <HomeLayout>
        <div className="pt-10 text-black flex items-center justify-center gap-10 mx-16 h-[90vh]">
            <div className="w-1/2 space-y-6">
                <h1 className="text-5xl font-semibold">
                    Find out best  
                    <span className="text-yellow-500 font-bold">
                        Online Courses
                    </span>
                </h1>
                <p className="text-xl text-gray-600">
                PW Skills is your one-stop-shop for upscaling. Get and resources you invest, with job-ready courses.
                </p>

                <div className="space-x-6">
                    <Link to='/courses'>
                        <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg text-gray-100 cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                            Explore Courses
                        </button>
                    </Link>
                    <Link to='/contact'>
                    <button className="border border-yellow-500 bg-black px-5 py-3 rounded-md font-semibold text-lg text-gray-100 cursor-pointer hover:bg-white hover:text-black transition-all ease-in-out duration-300">
                        Contact Us
                    </button>
                </Link>
                </div>
            </div>

            <div className="w-1/2 flex items-center justify-center">
                <img src={homepageimage} />
            </div>
        </div>
    </HomeLayout>
  );
}

export default HomePage