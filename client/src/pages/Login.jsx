import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ isDark }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                }
            );
            const data = await res.json();
            if (!res.ok) {
                setErrorMsg(data.message);
                throw new Error(data.message || "Something went wrong");
            }
            console.log("Success:", data);
            setEmail("");
            setPassword("");
            setLoading(false);
            navigate("/chat");
        } catch (err) {
            console.error("Registration error:", err.message);
            setErrorMsg(err.message);
            setLoading(false);
        }
    };

    return (
        <div
            className={`min-h-[90dvh] flex flex-col px-10 md:px-0 ${
                isDark ? "bg-[#10002b]" : "bg-[#f8f7ff]"
            }`}
        >
            <div className="flex flex-col lg:flex-row w-full max-w-4xl min-h-[70dvh] mx-auto rounded-xl my-10 shadow-lg overflow-hidden">
                {/* Image Section */}
                <div
                    className={`flex-1 flex items-center justify-center px-4 ${
                        isDark ? "bg-[#1a1333]" : "bg-[#6e44ff]"
                    }`}
                >
                    <img
                        className="rounded-lg max-w-xs w-3/4 md:w-4/5 h-auto drop-shadow-xl"
                        src="/catbounce.gif"
                        alt="CAT Bounce GIF"
                    />
                </div>

                {/* Form Section */}
                <div
                    className={`flex-1 flex flex-col items-center justify-center p-8 ${
                        isDark ? "bg-[#1a1333]" : "bg-white"
                    }`}
                >
                    <form
                        onSubmit={loginHandler}
                        className="md:w-96 w-80 flex flex-col items-center justify-center"
                    >
                        <h2
                            className={`text-3xl md:text-4xl font-bold flex justify-center items-center gap-2 ${
                                isDark ? "text-white" : "text-[#6e44ff]"
                            }`}
                        >
                            Welcome Back, Captain!
                        </h2>
                        <p
                            className={`w-full text-sm md:text-base mt-3 mb-5 ${
                                isDark ? "text-gray-200" : "text-gray-700"
                            }`}
                        >
                            Ready for your next adventure? Log in below!
                        </p>

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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Your secret code"
                                className={`bg-transparent outline-none text-sm w-full h-full px-5 rounded-r-md ${
                                    isDark
                                        ? "text-gray-100 placeholder-gray-400"
                                        : "text-gray-700 placeholder-gray-400"
                                }`}
                                style={{ background: "transparent" }}
                                required
                            />
                        </div>
                        {errorMsg && (
                            <p className="text-red-500 mt-1 text-xs">
                                {errorMsg}
                            </p>
                        )}

                        <button
                            disabled={loading}
                            type="submit"
                            className="mt-4 w-full h-11 rounded-md text-white bg-[#6e44ff] hover:bg-[#5a36d6] transition-all cursor-pointer text-base font-semibold shadow-md"
                        >
                            {loading ? "Sailing..." : "Set Sail!"}
                        </button>
                        <p
                            className={`text-gray-500/90 text-sm mt-2 ${
                                isDark ? "text-white" : "text-gray-900"
                            }`}
                        >
                            New here?{" "}
                            <span
                                onClick={() => navigate("/register")}
                                className="hover:underline cursor-pointer font-bold text-[#6e44ff]"
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
