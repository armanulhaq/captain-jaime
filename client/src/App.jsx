import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
    const [isDark, setIsDark] = useState(false);
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        try {
            const res = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/api/auth/me`,
                {
                    credentials: "include",
                }
            );
            if (res.status === 401) {
                setUser(null);
            } else if (!res.ok) {
                console.error("User is not currently logged in");
                setUser(null);
            } else {
                const data = await res.json();
                setUser(data.user);
            }
        } catch (error) {
            console.error("Error fetching user:", error);
            setUser(null);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <>
            <Navbar
                isDark={isDark}
                setIsDark={setIsDark}
                user={user}
                setUser={setUser}
                fetchUser={fetchUser}
            />
            <Routes>
                <Route
                    path="/"
                    element={<Home isDark={isDark} user={user} />}
                />
                <Route
                    path="/register"
                    element={<Register isDark={isDark} />}
                />
                <Route
                    path="/login"
                    element={<Login isDark={isDark} fetchUser={fetchUser} />}
                />
                <Route path="/chat" element={<Chat isDark={isDark} />} />
            </Routes>
        </>
    );
}

export default App;
