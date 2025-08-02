import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { getUser, setUser } from "../middlewares/auth.js";

const register = async (req, res) => {
    const { name, age, email, password, gender } = req.body;

    // Optional: Validate basic fields
    if (!name || !age || !email || !password || !gender) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds); //Generates a random salt internally. Applies the hashing algorithm to your password + salt. Then repeats the hashing process 2^10 times

        const newUser = await User.create({
            name,
            age,
            email,
            gender,
            password: hashedPassword,
        });

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                gender: newUser.gender,
            },
        });
    } catch (error) {
        console.error("Registration error:", error.message);
        return res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = setUser(user);

        //send a cookie with the respobse
        res.cookie("token", token, {
            httpOnly: true, // Prevents JS access — good for security
            sameSite: "None", // allows us to send from 3000 to 5173
            secure: "Lax",
            maxAge: 1000 * 60 * 60, // 1 hour
        });
        return res.status(200).json({ message: "Successfully logged you in" });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Server error" });
    }
};

const authMe = (req, res) => {
    const token = req.cookies.token;
    const user = getUser(token);
    req.user = user;
    return res.status(200).json({ user: user });
};

const logout = (req, res) => {
    res.cookie("token", "", {
        maxAge: 0,
        httpOnly: true,
        sameSite: "None",
        secure: true,
    });
    return res.status(200).json({ message: "Logged out" });
};

export { register, login, authMe, logout };
