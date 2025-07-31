import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar color="#ffeaae" />
            <div className="min-h-[90vh] lg:flex lg:flex-row flex-col items-center justify-center gap-10 px-32 bg-[#ffeaae]">
                {/* Left side: Animated Cat */}
                <div className="flex-1 flex items-center justify-center">
                    <img
                        src="/catanimation.gif"
                        alt="Captain Jaime waving"
                        className="rounded-full w-[80%] h-auto"
                    />
                </div>

                {/* Right side: Text Content */}
                <div className="flex-1 flex flex-col gap-6">
                    <h1 className="font-extrabold text-5xl lg:text-6xl leading-tight text-orange-500">
                        Hi! I’m Captain Jaime 🐱
                    </h1>

                    <p className="text-xl lg:text-2xl font-extrabold text-gray-800">
                        I'm your friendly talking buddy who listens to your
                        feelings, tells fun stories, and helps you feel happy
                        and safe 🌈
                    </p>

                    <button
                        onClick={() => navigate("/register")}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 text-xl rounded-2xl font-semibold w-fit mt-4 cursor-pointer"
                    >
                        🎉 Let’s Get Started!
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home;
