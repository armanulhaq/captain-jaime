import { useNavigate } from "react-router-dom";

const Home = ({ isDark, user }) => {
    const navigate = useNavigate();
    return (
        <>
            <div
                className={`min-h-[90vh] flex lg:flex-row flex-col items-center justify-center gap-6 xl:gap-10 xl:px-32 px-12 lg:px-24 ${
                    isDark ? "bg-[#10002b]" : "bg-[#f8f7ff]"
                }`}
            >
                <div className="flex-1 flex items-center justify-center">
                    <img
                        src="/catanimation.gif"
                        alt="Captain Jaime waving"
                        className="rounded-full w-[80%] h-auto"
                    />
                </div>

                <div className="flex-1 flex flex-col gap-3 lg:gap-4 xl:gap-6">
                    <h1 className="font-extrabold text-3xl md:text-3xl xl:text-5xl lg:text-6xl leading-tight text-[#6e44ff]">
                        Hi! I’m Captain Jaime
                    </h1>

                    <p
                        className={`text-md md:text-lg lg:text-xl font-medium ${
                            isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                        I'm your friendly talking buddy who listens to your
                        feelings, tells fun stories, and helps you feel happy
                        and safe 🌈
                    </p>

                    <button
                        onClick={() => user ? navigate("/chat") : navigate("/login") }
                        className={`bg-[#6e44ff] hover:bg-[#6e44ff]/90 px-3 py-2 xl:px-6 xl:py-3 text-md md:text-lg xl:text-xl rounded-lg font-semibold w-fit mt-2 cursor-pointer text-white ${
                            isDark
                                ? "bg-[#6e44ff] hover:bg-[#6e44ff]/90"
                                : "bg-[#6e44ff] hover:bg-[#6e44ff]/90"
                        }`}
                    >
                        Let’s Get Started!
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home;
