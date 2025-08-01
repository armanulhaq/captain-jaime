const register = (req, res) => {
    const { name, age, email, password } = req.body;
    console.log(name);
    console.log(age);
    console.log(email);
    console.log(password);
    res.json(200, { message: "Success" });
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
