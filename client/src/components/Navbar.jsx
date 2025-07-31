import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div
            className={`min-h-[10vh] flex justify-between px-7 md:px-12 lg:px-24  cursor-pointer`}
            onClick={() => navigate("/")}
        >
            <div className="flex gap-3 items-center justify-center">
                <div className="font-extrabold xl:text-2xl lg:text-xl text-md">
                    Captain Jaime
                </div>
            </div>
        </div>
    );
};

export default Navbar;
