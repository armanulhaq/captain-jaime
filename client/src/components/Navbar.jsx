import { useLocation, useNavigate } from "react-router-dom";
import { Moon, Sun, User } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
const Navbar = ({ isDark, setIsDark }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/api/auth/me`,
                {
                    credentials: "include",
                }
            );
            if (res.status === 401) {
                setUser(null);
            } else if (!res.ok) {
                console.error(`Unexpected error: ${res.status}`);
                setUser(null);
            } else {
                const data = await res.json();
                setUser(data);
            }
        };
        fetchUser();
    }, [location]); // fetch user info when URL changes
    console.log(user?.user?.name);
    console.log(user);
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
                className="cursor-pointer flex gap-6 w-fit"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsDark((isDark) => !isDark);
                }}
            >
                {user && <div className="">Hey, {user.user.name}</div>}
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
