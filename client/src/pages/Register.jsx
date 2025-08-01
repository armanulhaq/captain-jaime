import { User, Mail, Lock, Cake, VenusAndMars } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ isDark }) => {
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/api/auth/register`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name,
                        age,
                        email,
                        password,
                        gender,
                    }),
                }
            );

            const data = await res.json();
            if (!res.ok) {
                setErrorMsg(data.message);
                throw new Error(data.message || "Something went wrong");
            }
            setEmail("");
            setPassword("");
            setName("");
            setAge("");
            setLoading(false);
            navigate("/login");
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
                        src="/OIAA.gif"
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
                        onSubmit={onSubmitHandler}
                        className="w-full max-w-xs flex flex-col items-center justify-center"
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
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder="What's your name?"
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
                        {/* Age Field */}
                        <div
                            className={`flex items-center mt-6 w-full border-1 border-[#6e44ff] h-12 pl-3 gap-2 rounded-md transition-colors ${
                                isDark ? "bg-[#23144a]" : "bg-white"
                            }`}
                        >
                            <Cake
                                className={`w-6 h-6 ${
                                    isDark ? "text-[#a9baff]" : "text-[#6e44ff]"
                                }`}
                            />
                            <input
                                value={age}
                                onChange={(e) => setAge(Number(e.target.value))}
                                type="number"
                                placeholder="What's your age?"
                                className={`bg-transparent outline-none text-sm w-full h-full px-5 ${
                                    isDark
                                        ? "text-gray-100 placeholder-gray-400"
                                        : "text-gray-700 placeholder-gray-400"
                                }`}
                                style={{ background: "transparent" }}
                                required
                                min={4}
                                max={100}
                            />
                        </div>
                        <div
                            className={`flex items-center mt-6 w-full border-1 border-[#6e44ff] h-12 pl-3 gap-2 rounded-md transition-colors ${
                                isDark ? "bg-[#23144a]" : "bg-white"
                            }`}
                        >
                            <VenusAndMars
                                className={`w-6 h-6 ${
                                    isDark ? "text-[#a9baff]" : "text-[#6e44ff]"
                                }`}
                            />
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className={`bg-transparent w-full h-full outline-none text-sm px-5 ${
                                    isDark ? "text-gray-100" : "text-gray-700"
                                }`}
                                required
                            >
                                <option value="" disabled>
                                    Select your gender
                                </option>
                                <option value="boy">Cabin Boy 🧢</option>
                                <option value="girl">Cabin Girl 🎀</option>
                                <option value="other">
                                    Unique Explorer 🧭
                                </option>
                            </select>
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
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Enter your password"
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
                        {errorMsg && (
                            <p className="text-red-500 mt-1 text-xs">
                                {errorMsg}
                            </p>
                        )}

                        {/* Button */}
                        <button
                            disabled={loading}
                            type="submit"
                            className="mt-4 w-full h-11 rounded-md text-white bg-[#6e44ff] hover:bg-[#5a36d6] transition-all cursor-pointer text-base font-semibold shadow-md"
                        >
                            {loading ? "Sailing..." : "Set Sail!"}
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
