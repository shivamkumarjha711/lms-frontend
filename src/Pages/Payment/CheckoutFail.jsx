import { RxCrossCircled } from "react-icons/rx";
import HomeLayout from "../../Layouts/HomeLayout";
import { Link } from "react-router-dom";

function CheckoutFail() {
    return (
        <HomeLayout>
            <div className="min-h-[90vh] flex items-center justify-center text-black">
                <div className="w-80 h-[26rem] flex flex-col justify-center items-center rounded-lg relative shadow-[0_0_10px_black]">
                    <h1 className="bg-red-600 absolute top-0 w-full text-white py-4 text-2xl text-center font-bold rounded-tl-lg  rounded-tr-lg">Payment Failed</h1>

                    <div className="px-4 flex flex-col items-center justify-center space-y-2">
                        <div className="text-center space-y-2">
                            <h2 className="text-lg font-semibold text-center">
                                Oops ! Your Payment Failed
                            </h2>
                            <p className="text-center">
                                Please try again leter
                            </p>
                        </div>
                    </div>
                    <br />
                    <RxCrossCircled className="text-red-600 text-5xl" />
                    
                    <Link to="/checkout" className="bg-red-600 hover:bg-red-500 transition-all ease-in-out duration-300 absolute bottom-0 w-full py-2 text-xl font-semibold text-center rounded-br-lg rounded-bl-lg">
                    <button>Try Again</button>
                </Link>
                </div>
            </div>
        </HomeLayout>
    )
}

export default CheckoutFail;