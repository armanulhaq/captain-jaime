import { User, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Register = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[100dvh] flex flex-col">
            <Navbar color="#fff" />
            <div className="flex w-[60%] min-h-[70dvh] mx-auto rounded-xl my-10 border border-gray-300/60">
                {/* Image Section */}
                <div className="w-full xl:flex md:items-center md:justify-center bg-orange-400/80 rounded-tl-xl rounded-bl-xl p-4">
                    <img
                        className="rounded-lg max-w-xs w-3/4 md:w-4/5 h-auto drop-shadow-xl"
                        src="https://images.squarespace-cdn.com/content/v1/663f738a89dc02694adb8670/ab586c91-6b0b-4791-aa5a-b60824f92094/OIIA-Website-loop.gif?format=2500w"
                        alt="OIAA CAT Image"
                    />
                </div>
                {/* Form Section */}
                <div className="w-full flex flex-col items-center justify-center rounded-tr-xl rounded-br-xl bg-white p-6">
                    <form
                        className="w-full max-w-xs flex flex-col items-center justify-center"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <h2 className="text-4xl text-gray-900 font-bold">
                            Become a Captain!
                        </h2>
                        <p className="text-sm text-gray-500/90 mt-3 mb-5 text-center">
                            Ready to start your adventure? Let’s set sail
                            together!
                        </p>

                        {/* Name Field */}
                        <div className="flex items-center w-full border border-gray-300/60 h-12 pl-3 gap-2 rounded-md hover:border-orange-400 transition-colors">
                            <User className="w-6 h-6 text-orange-500" />
                            <input
                                type="text"
                                placeholder="What's your pirate name?"
                                className="placeholder-gray-500/80 outline-none text-sm w-full h-full px-5"
                                required
                                maxLength={20}
                            />
                        </div>

                        {/* Email Field */}
                        <div className="flex items-center mt-6 w-full border border-gray-300/60 h-12 rounded-md pl-3 gap-2 hover:border-orange-400 transition-colors">
                            <Mail className="w-6 h-6 text-orange-500" />
                            <input
                                type="email"
                                placeholder="Your pirate email"
                                className="text-gray-500/80 bg-white placeholder-gray-500/80 outline-none text-sm w-full h-full px-5 rounded-r-md"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="flex items-center mt-6 w-full border border-gray-300/60 h-12 rounded-md pl-3 gap-2 hover:border-orange-400 transition-colors">
                            <Lock className="w-6 h-6 text-[#fd9e02]" />
                            <input
                                type="password"
                                placeholder="Choose your secret code"
                                className="text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full px-5 rounded-r-md"
                                required
                                minLength={6}
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="mt-8 w-full h-11 rounded-md text-white bg-[#fd9e02] hover:bg-[#fd9e02]/90 transition-colors cursor-pointer"
                        >
                            Set Sail!
                        </button>

                        <p className="text-gray-500/90 text-sm mt-4 text-center max-w-[280px]">
                            Already part of the crew?{" "}
                            <span
                                onClick={() => navigate("/login")}
                                className="text-[#fd9e02] hover:underline cursor-pointer font-bold"
                            >
                                Sign In
                            </span>
                        </p>

                        <p className="text-xs mt-2 text-gray-400 text-center max-w-[280px]">
                            Your adventure awaits.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
