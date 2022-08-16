import Cookies from "js-cookie";
import Link from "next/link";
import { useState } from "react";
import useAuth from "../context/authContext/useAuth";

const NavBar = () => {
    const [underline, setUnderline] = useState("login");

    const { logout, user } = useAuth();
    // console.log(user, "user")
    const handleLogOut = () => {
        logout();
        Cookies.remove('token')
    }
    return (
        <nav className="mb-6">
            <ul className="w-1/3 mx-auto flex justify-center space-x-5 mt-5 text-md font-medium">
                {
                    user ?
                        <li>
                            <h3 className="font-medium text-md cursor-pointer hover:text-gray-400 text-gray-700" onClick={() => {
                                setUnderline("logout")
                                handleLogOut()
                            }}>Logout</h3>
                            <div className={`h-1 bg-primary opacity-0 ${underline === "logout" && "opacity-100"} transition-all duration-500 mt-1`}></div>
                        </li>
                        :
                        <li>
                            <Link href="/login">
                                <h3 className="font-medium text-md cursor-pointer hover:text-gray-400 text-gray-700" onClick={() => setUnderline("login")}>Login</h3>
                            </Link>
                            <div className={`h-1 bg-primary opacity-0 ${underline === "login" && "opacity-100"} transition-all duration-500 mt-1`}></div>
                        </li>
                }
                {
                    user && user?.role === "admin" &&
                    <li>
                        <Link href="/users">
                            <h3 className="font-medium text-md cursor-pointer hover:text-gray-400 text-gray-700" onClick={() => setUnderline("users")}>Users</h3>
                        </Link>
                        <div className={`h-1 bg-primary opacity-0 ${underline === "users" && "opacity-100"} transition-all duration-500 mt-1`}></div>
                    </li>
                }
                <li>
                    <Link href="/message">
                        <h3 className="font-medium text-md cursor-pointer hover:text-gray-400 text-gray-700" onClick={() => setUnderline("inbox")}>Inbox</h3>
                    </Link>
                    <div className={`h-1 bg-primary opacity-0 ${underline === "inbox" && "opacity-100"} transition-all duration-500 mt-1`}></div>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;