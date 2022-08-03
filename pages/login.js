import { useQuery, useLazyQuery } from "@apollo/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LOGIN_MUTATION } from "../graphql/mutation/userMutation";
import logo from "../public/logo.svg"
import Button from "../components/button";
import Input from "../components/Input";


const Auth = () => {
    // const { data, loading, error } = useQuery(LOGIN_MUTATION);
    const [signIn, { data, loading, error }] = useLazyQuery(LOGIN_MUTATION)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;
        console.log(email, password)
        signIn({ variables: { email, password } })
        console.log(data?.signIn)
        localStorage.setItem("token", JSON.stringify(data?.signIn?.token))
    }
    return (
        <div className="w-1/3 mx-auto mt-5 p-8 shadow-lg rounded-lg border-2 border-primary">
            <div className="w-24 mx-auto">
                <Image className="" src={logo} alt='' />
                <h3 className="text-xl font-medium text-gray-600">Lets Talk!</h3>
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