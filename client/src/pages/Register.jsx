import { User, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Register = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[100dvh]">
            <Navbar color="#fff" />
            <div className="flex w-[60%] min-h-[70dvh] mx-auto rounded-xl my-10 shadow-xl">
                <div className="w-full xl:flex md:items-center md:justify-center bg-[#ffd670] rounded-tl-xl rounded-bl-xl">
                    <img
                        className="rounded-lg"
                        src="https://images.squarespace-cdn.com/content/v1/663f738a89dc02694adb8670/ab586c91-6b0b-4791-aa5a-b60824f92094/OIIA-Website-loop.gif?format=2500w"
                        alt="OIAA CAT Image"
                    />
                </div>

                <div className="w-full flex flex-col items-center justify-center rounded-rt-xl rounded-br-xl bg-white">
                    <form className="md:w-96 w-80 flex flex-col items-center justify-center">
                        <h2 className="text-4xl text-gray-900 font-medium">
                            Sign up
                        </h2>
                        <p className="text-sm text-gray-500/90 mt-3 mb-5">
                            Create an account to continue
                        </p>
                        <div className="flex items-center w-full border border-gray-300/60 h-12 pl-3 gap-2 rounded-2xl">
                            <User className="w-6 h-6" />
                            <input
                                type="name"
                                placeholder="Name"
                                className=" placeholder-gray-500/80 outline-none text-sm w-full h-full px-5"
                                required
                            />
                        </div>
                        <div className="flex items-center mt-6 w-full border border-gray-300/60 h-12 rounded-2xl pl-3 gap-2">
                            <Mail className="w-6 h-6" />
                            <input
                                type="email"
                                placeholder="Email ID"
                                className=" text-gray-500/80 bg-white placeholder-gray-500/80 outline-none text-sm w-full h-full px-5 rounded-r-2xl"
                                required
                            />
                        </div>

                        <div className="flex items-center mt-6 w-full border border-gray-300/60 h-12 rounded-2xl pl-3 gap-2">
                            <Lock className="w-6 h-6" />
                            <input
                                type="password"
                                placeholder="Password"
                                className=" text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full px-5 rounded-r-2xl"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-8 w-full h-11 rounded-md text-white bg-[#432507] hover:opacity-90 transition-opacity cursor-pointer"
                        >
                            Sign up
                        </button>
                        <p className="text-gray-500/90 text-sm mt-4">
                            Already have an account?{" "}
                            <span
                                onClick={() => navigate("/login")}
                                className="text-[#432507] hover:underline cursor-pointer"
                            >
                                Sign in
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
