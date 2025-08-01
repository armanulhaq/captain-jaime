import User from "../models/user.model.js";
import bcrypt from "bcrypt";

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

const login = (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    res.json(200, { message: "Success" });
};

const authMe = () => {};

const logout = () => {};

export { register, login, authMe, logout };
