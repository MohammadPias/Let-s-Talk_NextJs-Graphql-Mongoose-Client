import { useState } from "react";
import { AiOutlineUser, AiOutlineUsergroupAdd, AiFillSetting } from "react-icons/ai";

const SquireButton = ({ title, active, setactive }) => {

    return (
        <button
            className={`w-10 h-10 rounded-lg ${active === title && 'bg-primary'} flex justify-center items-center`}>
            {
                title === "user" ?
                    <AiOutlineUser
                        onClick={() => setactive("user")}
                        color={`${active === "user" ? "white" : "black"}`}
                        size="24" />
                    :
                    title === "users" ?
                        <AiOutlineUsergroupAdd
                            onClick={() => setactive("users")}
                            color={`${active === "users" ? "white" : "black"}`}
                            size="24" />
                        :
                        <AiFillSetting
                            onClick={() => setactive("setting")}
                            color={`${active === "setting" ? "white" : "black"}`}
                            size="24" />
            }
        </button>
    )
}

export default SquireButton;