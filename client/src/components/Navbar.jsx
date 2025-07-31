import { useNavigate } from "react-router-dom";

const Navbar = ({ color }) => {
    const navigate = useNavigate();
    return (
        <div
            className={`min-h-[10vh] flex justify-between px-7 md:px-12 lg:px-24 bg-[${color}] cursor-pointer`}
            onClick={() => navigate("/")}
        >
            <div className="flex gap-3 items-center justify-center">
                <div className="font-extrabold text-2xl">Captain Jaime</div>
            </div>
        </div>
    );
};

export default Navbar;
