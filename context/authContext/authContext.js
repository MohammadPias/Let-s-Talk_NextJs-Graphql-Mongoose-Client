import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { faL } from "@fortawesome/free-solid-svg-icons";

const AuthContext = createContext({
    user: null,
    login: () => { },
    logout: () => { },
});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [admin, setAdmin] = useState(false)


    const token = Cookies.get("token")


    useEffect(() => {
        // setLoading(true)
        console.log("loading true", loading)
        if (token) {
            const decodedUser = jwt_decode(token)
            setUser(decodedUser)
            if (decodedUser?.role === "admin") {
                setAdmin(true)
            }
            console.log("loading false", loading)
            setLoading(false)
        }
    }, [token, loading])


    const login = (loginInfo) => {
        setLoading(true)
        setUser(loginInfo)
        setLoading(false)
    }

    const logout = () => {
        setUser(null)
    }

    const contextValue = {
        user,
        login,
        logout,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;