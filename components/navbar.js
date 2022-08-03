import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
    const [underline, setUnderline] = useState("login");

    return (
        <nav className="mb-6">
            <ul className="w-1/3 mx-auto flex justify-center space-x-5 mt-5 text-md font-medium">
                <li className="hover:text-gray-400" onClick={() => setUnderline("login")}>
                    <Link href="/login">Login</Link>
                    <div className={`h-1 bg-primary opacity-0 ${underline === "login" && "opacity-100"} transition-all duration-500 mt-1`}></div>
                </li>
                <li className="hover:text-gray-400" onClick={() => setUnderline("users")}>
                    <Link href="/users">Users</Link>
                    <div className={`h-1 bg-primary opacity-0 ${underline === "users" && "opacity-100"} transition-all duration-500 mt-1`}></div>
                </li>
                <li className="hover:text-gray-400" onClick={() => setUnderline("inbox")}>
                    <Link href="/message">Inbox</Link>
                    <div className={`h-1 bg-primary opacity-0 ${underline === "inbox" && "opacity-100"} transition-all duration-500 mt-1`}></div>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;