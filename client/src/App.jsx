import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
    const [isDark, setIsDark] = useState(false);
    return (
        <>
            <Navbar isDark={isDark} setIsDark={setIsDark} />
            <Routes>
                <Route path="/" element={<Home isDark={isDark} />} />
                <Route
                    path="/register"
                    element={<Register isDark={isDark} />}
                />
                <Route path="/login" element={<Login isDark={isDark} />} />
                <Route path="/chat" element={<Chat isDark={isDark} />} />
            </Routes>
        </>
    );
}

export default App;
