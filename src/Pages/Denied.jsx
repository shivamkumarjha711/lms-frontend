import { useNavigate } from "react-router-dom";

function Denied() {
  const navigate = useNavigate();
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-9xl font-extrabold text-black tracking-widest">
            403
        </h1>
        <div className="bg-black text-white px-2 text-lg rounded rotate-12 absolute">
            Access Denied
        </div>
        <button onClick={() => navigate(-1)} className="mt-5">
            <span className="relative block px-8 py-3 text-white bg-gray-900 border border-e-current">
                 Go Back
            </span>
        </button>
    </main>
  )
}

export default Denied;