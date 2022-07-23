import Image from "next/image";
import logo from "../public/logo.svg"
import Button from "./button";
import Input from "./Input";
const Auth = () => {
    return (
        <div className="w-1/3 mx-auto mt-5 p-8 shadow-lg rounded-lg border-2 border-primary">
            <div className="w-24 mx-auto">
                <Image className="" src={logo} alt='' />
                <h3 className="text-xl font-medium text-gray-600">Lets Talk!</h3>
            </div>
            <form className="mt-5">
                <Input
                    type="text"
                    placeholder='enter your email'
                    required={true}
                />
                <Input
                    type="text"
                    placeholder='enter your password'
                    required={true}
                />
                <Button title='Login' type="submit" />
            </form>
        </div>
    )
}

export default Auth