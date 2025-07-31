import { useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
const Navbar = ({ isDark, setIsDark }) => {
    const navigate = useNavigate();
    return (
        <div
            className={`min-h-[10vh] flex justify-between px-7 md:px-12 lg:px-24 xl:px-48 items-center ${
                isDark ? "bg-[#10002b]" : "bg-[#f8f7ff]"
            }`}
        >
            <div className="flex gap-3 items-center justify-center">
                <div
                    className={`font-extrabold xl:text-2xl lg:text-xl text-md cursor-pointer ${
                        isDark ? "text-white" : "text-[#6e44ff]"
                    }`}
                    onClick={() => navigate("/")}
                >
                    Captain Jaime
                </div>
            </div>
            <div
                className="cursor-pointer"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsDark((isDark) => !isDark);
                }}
            >
                {isDark ? (
                    <Sun className="w-6 h-6 text-white" />
                ) : (
                    <Moon className="w-6 h-6 text-[#6e44ff]" />
                )}
            </div>
        </div>
    );
};

export default Navbar;
