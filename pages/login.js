import { useQuery, useLazyQuery } from "@apollo/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LOGIN_MUTATION } from "../graphql/mutation/userMutation";
import logo from "../public/logo.svg"
import Button from "../components/button";
import Input from "../components/Input";
import Cookies from "js-cookie";
import useAuth from "../context/authContext/useAuth";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router"


const Auth = () => {
    // const { data, loading, error } = useQuery(LOGIN_MUTATION);
    const [signIn, { data, loading, error }] = useLazyQuery(LOGIN_MUTATION, {
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'network-only'
    });
    const { login, setLoading, user } = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const router = useRouter();
    const { redirect } = router.query;

    useEffect(() => {
        if (user) {
            router.push("/message")
        }
    }, [router, user])

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;
        signIn({ variables: { email, password } })
        console.log(data)
        if (data?.signIn?.token) {
            setLoading(true)
            const token = data?.signIn?.token
            Cookies.set("token", token)
            const user = jwt_decode(token)
            login(user);
            setLoading(false)
            // Router.push("/message")
            router.push(redirect || "/message")
        }
        // localStorage.setItem("token", JSON.stringify(data?.signIn?.token))
    }
    return (
        <div className="w-1/3 mx-auto mt-5 p-8 shadow-xl rounded-lg border border-primary">
            <div className="w-20 mx-auto">
                <Image className="" src={logo} alt='' />
                <h3 className="text-md text-center font-medium text-gray-600">Lets Talk!</h3>
            </div>
            <form onSubmit={handleSubmit} className="mt-5">
                <Input
                    type="text"
                    placeholder='enter your email'
                    required={true}
                    title="email"
                    setvalue={setFormData}
                    value={formData}
                />
                <Input
                    type="text"
                    placeholder='enter your password'
                    required={true}
                    title="password"
                    setvalue={setFormData}
                    value={formData}
                />
                <Button title='Login' type="submit" />
            </form>
        </div>
    )
}

export default Auth