import { useState, useEffect } from "react";

const Chat = ({ isDark }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth < 768) {
                setIsCollapsed(true);
            }
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <div
            className={`min-h-[90dvh] flex px-10 md:px-0 relative ${
                isDark ? "bg-[#10002b]" : "bg-[#f8f7ff]"
            }`}
        >
            {/* Mobile Overlay */}
            {isMobile && !isCollapsed && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsCollapsed(true)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
                    ${
                        isMobile
                            ? isCollapsed
                                ? "w-0 overflow-hidden"
                                : "fixed left-0 top-0 w-full h-full z-50"
                            : isCollapsed
                            ? "w-[15%]"
                            : "w-[4%]"
                    }
                    ${isMobile ? "h-full" : "h-[90vh]"}
                    transition-all duration-300 ${
                        isDark ? "bg-[#1a0040]" : "bg-[#f8f7ff]"
                    }`}
            >
                <div className="p-4">
                    <div
                        className={`flex ${
                            isMobile
                                ? "justify-start"
                                : isCollapsed
                                ? "justify-end"
                                : "justify-center"
                        } cursor-pointer`}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        <img src="/sidebar.png" className="w-8 h-8" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div
                className={`
                    ${isMobile ? "w-full" : isCollapsed ? "w-[85%]" : "w-[96%]"}
                    h-[90vh] transition-all duration-300 ${
                        isDark ? "bg-[#240055]" : "bg-white"
                    }`}
            >
                {/* Mobile Header */}
                {isMobile && isCollapsed && (
                    <div className="p-4">
                        <div
                            className="cursor-pointer"
                            onClick={() => setIsCollapsed(false)}
                        >
                            <img src="/sidebar.png" className="w-8 h-8" />
                        </div>
                    </div>
                )}
                Main content area
            </div>
        </div>
    );
};

export default Chat;
