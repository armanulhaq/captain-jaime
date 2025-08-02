import { useNavigate } from "react-router-dom";
import { LogIn, LogOut, Moon, Sun } from "lucide-react";

const Navbar = ({ isDark, setIsDark, user, setUser }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const res = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`,
                {
                    method: "POST",
                    credentials: "include",
                }
            );

            setUser(null);
            navigate("/");

            if (!res.ok) {
                console.error("Logout failed: Server returned non-ok status");
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const toggleTheme = () => setIsDark((prev) => !prev);

    return (
        <div
            className={`min-h-[10vh] flex justify-between px-7 md:px-12 lg:px-24 xl:px-48 items-center ${
                isDark ? "bg-[#10002b]" : "bg-[#f8f7ff]"
            }`}
        >
            <div
                className={`font-extrabold xl:text-2xl lg:text-xl text-md cursor-pointer ${
                    isDark ? "text-white" : "text-[#6e44ff]"
                }`}
                onClick={() => navigate("/")}
            >
                Captain Jaime
            </div>
            <div className="cursor-pointer flex gap-6 items-center">
                {user && (
                    <span className={isDark ? "text-white" : "text-[#6e44ff]"}>
                        Hey, {user.name}
                    </span>
                )}
                {isDark ? (
                    <Sun
                        onClick={toggleTheme}
                        className="w-6 h-6 text-white hover:text-yellow-300 transition-colors"
                        title="Light mode"
                    />
                ) : (
                    <Moon
                        onClick={toggleTheme}
                        className="w-6 h-6 text-[#6e44ff] hover:text-[#5a38d9] transition-colors"
                        title="Dark mode"
                    />
                )}
                {user ? (
                    <LogOut
                        onClick={handleLogout}
                        className={`w-6 h-6 transition-colors ${
                            isDark
                                ? "text-white hover:text-red-300"
                                : "text-[#6e44ff] hover:text-[#5a38d9]"
                        }`}
                        title="Logout"
                    />
                ) : (
                    <LogIn
                        onClick={() => navigate("/login")}
                        className={`w-6 h-6 transition-colors ${
                            isDark
                                ? "text-white"
                                : "text-[#6e44ff] hover:text-[#5a38d9]"
                        }`}
                        title="Login"
                    />
                )}
            </div>
        </div>
    );
};

export default Navbar;
