import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[100dvh]">
            <Navbar color="#fff" />
            <div className="flex w-[60%] min-h-[70dvh] mx-auto rounded-xl my-10 border-1 border-gray-300/60">
                <div className="w-full xl:flex md:items-center md:justify-center bg-orange-400/80 rounded-tl-xl rounded-bl-xl">
                    <img
                        className="rounded-lg"
                        src="/catbounce.gif"
                        alt="CAT Bounce GIF"
                    />
                </div>

                <div className="w-full flex flex-col items-center justify-center rounded-tr-xl rounded-br-xl bg-white">
                    <form className="md:w-96 w-80 flex flex-col items-center justify-center">
                        <h2 className="text-3xl text-gray-900 font-bold flex justify-center items-center gap-2">
                            Welcome Back, Captain!
                        </h2>
                        <p className="text-sm text-gray-500/90 mt-3 mb-5">
                            Ready for your next adventure? Log in below!
                        </p>

                        <div className="flex items-center mt-6 w-full border border-gray-300/60 h-12 rounded-md pl-3 gap-2">
                            <Mail className="w-6 h-6" />
                            <input
                                type="email"
                                placeholder="Your pirate email"
                                className="text-gray-500/80 bg-white placeholder-gray-500/80 outline-none text-sm w-full h-full px-5 rounded-r-md"
                                required
                            />
                        </div>

                        <div className="flex items-center mt-6 w-full border border-gray-300/60 h-12 rounded-md pl-3 gap-2">
                            <Lock className="w-6 h-6" />
                            <input
                                type="password"
                                placeholder="Your secret code"
                                className="text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full px-5 rounded-r-md"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-8 w-full h-11 rounded-md text-white bg-[#fd9e02] hover:bg-[#fd9e02]/90 transition-all cursor-pointer "
                        >
                            Set Sail!
                        </button>
                        <p className="text-gray-500/90 text-sm mt-4">
                            New here?{" "}
                            <span
                                onClick={() => navigate("/register")}
                                className="text-[#fd9e02] hover:underline cursor-pointer font-bold"
                            >
                                Join the Crew!
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
