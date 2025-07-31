import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="min-h-[90vh] flex lg:flex-row flex-col items-center justify-center gap-6 xl:gap-10 xl:px-32 px-12 lg:px-24">
                <div className="flex-1 flex items-center justify-center">
                    <img
                        src="/catanimation.gif"
                        alt="Captain Jaime waving"
                        className="rounded-full w-[80%] h-auto"
                    />
                </div>

                <div className="flex-1 flex flex-col gap-6">
                    <h1 className="font-extrabold text-3xl md:text-3xl xl:text-5xl lg:text-6xl leading-tight text-orange-500">
                        Hi! I’m Captain Jaime
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-2xl font-medium">
                        I'm your friendly talking buddy who listens to your
                        feelings, tells fun stories, and helps you feel happy
                        and safe 🌈
                    </p>

                    <button
                        onClick={() => navigate("/register")}
                        className="bg-orange-500 hover:bg-orange-600 px-6 py-4 text-xl rounded-lg font-semibold w-fit mt-4 cursor-pointer text-white"
                    >
                        Let’s Get Started!
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home;
