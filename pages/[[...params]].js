import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Auth from "../components/auth";
import Inbox from "../components/inbox";
import Users from "../components/users";

export default function Home() {
    const route = useRouter();
    const { params = [] } = route.query;
    const [underline, setUnderline] = useState(params[0])
    return (
        <div>
            <main>
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

                {
                    !params.length > 0 &&
                    <Auth />
                }
                {
                    params.length > 0 &&
                    params[0] === 'login' &&
                    <Auth />
                }
                {
                    params.length > 0 &&
                    params[0] === 'message' &&
                    <Inbox />
                }
                {
                    params.length > 0 &&
                    params[0] === 'users' &&
                    <Users />
                }
            </main>
        </div>
    )
}
