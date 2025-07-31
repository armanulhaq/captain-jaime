import { User, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Register = ({ isDark }) => {
    const navigate = useNavigate();

    return (
        <div
            className={`min-h-[90dvh] flex flex-col ${
                isDark ? "bg-[#10002b]" : "bg-[#f8f7ff]"
            }`}
        >
            <div className="flex flex-col lg:flex-row w-full max-w-4xl min-h-[70dvh] mx-auto rounded-xl my-10 shadow-lg overflow-hidden">
                {/* Image Section */}
                <div
                    className={`flex-1 flex items-center justify-center p-4 ${
                        isDark ? "bg-[#1a1333]" : "bg-[#6e44ff]"
                    }`}
                >
                    <img
                        className="rounded-lg max-w-xs w-3/4 md:w-4/5 h-auto drop-shadow-xl"
                        src="https://images.squarespace-cdn.com/content/v1/663f738a89dc02694adb8670/ab586c91-6b0b-4791-aa5a-b60824f92094/OIIA-Website-loop.gif?format=2500w"
                        alt="OIAA CAT Image"
                    />
                </div>
                {/* Form Section */}
                <div
                    className={`flex-1 flex flex-col items-center justify-center p-8 ${
                        isDark ? "bg-[#1a1333]" : "bg-white"
                    }`}
                >
                    <form
                        className="w-full max-w-xs flex flex-col items-center justify-center"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <h2
                            className={`text-3xl md:text-4xl font-bold flex justify-center items-center gap-2 ${
                                isDark ? "text-white" : "text-[#6e44ff]"
                            }`}
                        >
                            Become a Captain!
                        </h2>
                        <p
                            className={`text-sm md:text-base mt-3 mb-5 text-center ${
                                isDark ? "text-gray-200" : "text-gray-700"
                            }`}
                        >
                            Ready to start your adventure? Let’s set sail
                            together!
                        </p>

                        {/* Name Field */}
                        <div
                            className={`flex items-center w-full border-1 border-[#6e44ff] h-12 pl-3 gap-2 rounded-md transition-colors ${
                                isDark ? "bg-[#23144a]" : "bg-white"
                            }`}
                        >
                            <User
                                className={`w-6 h-6 ${
                                    isDark ? "text-[#a9baff]" : "text-[#6e44ff]"
                                }`}
                            />
                            <input
                                type="text"
                                placeholder="What's your pirate name?"
                                className={`bg-transparent outline-none text-sm w-full h-full px-5 ${
                                    isDark
                                        ? "text-gray-100 placeholder-gray-400"
                                        : "text-gray-700 placeholder-gray-400"
                                }`}
                                style={{ background: "transparent" }}
                                required
                                maxLength={20}
                            />
                        </div>

                        {/* Email Field */}
                        <div
                            className={`flex items-center mt-6 w-full border-1 border-[#6e44ff] h-12 rounded-md pl-3 gap-2 transition-colors ${
                                isDark ? "bg-[#23144a]" : "bg-white"
                            }`}
                        >
                            <Mail
                                className={`w-6 h-6 ${
                                    isDark ? "text-[#a9baff]" : "text-[#6e44ff]"
                                }`}
                            />
                            <input
                                type="email"
                                placeholder="Your pirate email"
                                className={`bg-transparent outline-none text-sm w-full h-full px-5 rounded-r-md ${
                                    isDark
                                        ? "text-gray-100 placeholder-gray-400"
                                        : "text-gray-700 placeholder-gray-400"
                                }`}
                                style={{ background: "transparent" }}
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div
                            className={`flex items-center mt-6 w-full border-1 border-[#6e44ff] h-12 rounded-md pl-3 gap-2 transition-colors ${
                                isDark ? "bg-[#23144a]" : "bg-white"
                            }`}
                        >
                            <Lock
                                className={`w-6 h-6 ${
                                    isDark ? "text-[#a9baff]" : "text-[#6e44ff]"
                                }`}
                            />
                            <input
                                type="password"
                                placeholder="Choose your secret code"
                                className={`bg-transparent outline-none text-sm w-full h-full px-5 rounded-r-md ${
                                    isDark
                                        ? "text-gray-100 placeholder-gray-400"
                                        : "text-gray-700 placeholder-gray-400"
                                }`}
                                style={{ background: "transparent" }}
                                required
                                minLength={6}
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="mt-8 w-full h-11 rounded-md text-white bg-[#6e44ff] hover:bg-[#5a36d6] transition-all cursor-pointer text-base font-semibold shadow-md"
                        >
                            Set Sail!
                        </button>

                        <p className="text-gray-500/90 text-sm mt-2 text-center max-w-[280px]">
                            Already part of the crew?{" "}
                            <span
                                onClick={() => navigate("/login")}
                                className="text-[#6e44ff] hover:underline cursor-pointer font-bold"
                            >
                                Sign In
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
