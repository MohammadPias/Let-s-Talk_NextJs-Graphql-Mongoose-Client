import Image from "next/image";
import Input from "../components/Input";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { AiOutlineSend, AiOutlineUser, AiOutlineUsergroupAdd, AiFillSetting, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import TextBox from "../components/textBox";
import SquireButton from "../components/squireButton";
import { useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Button from "../components/button";
import Modal from "../components/Modal";
import useAuth from "../context/authContext/useAuth";
import { useRouter } from "next/router";

const Inbox = () => {
    const [active, setActive] = useState("user");
    const [modalOpen, setModalOpen] = useState(false);
    const router = useRouter();
    const userInfo = useAuth()
    // console.log(userInfo?.user)

    useEffect(() => {
        if (!userInfo.user) {
            router.push("/login?redirect=/message")
        }
    }, [userInfo.user, router, userInfo.loading])
    return (
        <>
            {
                userInfo.user &&

                <div className="w-4/5 mx-auto grid grid-cols-4 gap-5 overflow-auto">
                    {/* Left sidebar */}
                    <div className="bg-gray-50 shadow-lg rounded-xl p-5 flex flex-col justify-between">
                        <div>
                            <Input
                                bg="bg-slate-100"
                                placeholder="Search people or messages"
                            />

                            <div className="flex justify-between mt-5">
                                <SquireButton
                                    active={active}
                                    setactive={setActive}
                                    title="user" />
                                <SquireButton
                                    active={active}
                                    setactive={setActive}
                                    title="users" />
                                <SquireButton
                                    active={active}
                                    setactive={setActive}
                                    title="setting" />
                            </div>

                            <div className="mt-8 bg-gray-100 p-3 rounded-lg">
                                <div className="flex space-x-2 items-center">
                                    <div className="h-12 w-12 rounded-full bg-secondary">
                                        {/* <Image src={""} alt="" /> */}
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between space-x-3 items-center">
                                            <div>
                                                <small className="text-md font-medium text-gray-600 mr-1">User Name</small>

                                                <small className="p-1 rounded-full bg-red-700 text-white">12</small>
                                            </div>
                                            <div>
                                                <small className="text-gray-400">9:55 pm</small>
                                            </div>
                                        </div>
                                        <div>
                                            <small className="text-gray-400">A new message from Akash Chowdhury.</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button
                                title="Add User" />
                        </div>
                    </div>

                    {/* Message container */}
                    <div className=" col-span-2 rounded-lg flex flex-col justify-between">
                        <div className="px-3 h-16 rounded-lg bg-gray-50 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-red-200">

                                </div>
                                <div>
                                    <h4 className="text-sm font-medium">Name here</h4>
                                    <div className="flex space-x-1 items-center">
                                        <GoPrimitiveDot color="green" />
                                        <small>Online</small>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-md font-medium text-gray-600">Messages</h3>
                            <div>
                                <BsThreeDotsVertical />
                            </div>
                        </div>
                        <div className="flex flex-col items-end mb-5">
                            <TextBox
                                placeholder="enter your message"
                            />
                            <div className="flex space-x-3">
                                <div className="flex justify-center items-center bg-gray-50 border border-gray-300 p-1.5 h-10 w-10 rounded-full shadow-lg">
                                    <GrAttachment color="white" />
                                </div>
                                <div className="flex justify-center items-center bg-primary border border-gray-300 p-1.5 h-10 w-10 rounded-full shadow-lg">
                                    <AiOutlineSend color="white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right sidebar */}
                    <div className="bg-gray-50 shadow-lg rounded-xl p-5">
                        {/* Right Side Header */}
                        <div>
                            <div className="h-20 w-20 rounded-full bg-primary mx-auto">

                            </div>
                            <div>
                                <h3 className="text-md font-medium text-gray-600 text-center mt-3">User Name</h3>
                                <h3 className="text-sm font-medium text-gray-600 text-center">Company Name</h3>
                                <h3 className="text-sm font-medium text-gray-400 text-center">Address, Location</h3>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-8 border-t border-gray-300">
                            <h3 className="text-sm font-medium text-gray-600 mt-1">Contact Information</h3>
                            <div className="flex justify-between items-center text-gray-600 mt-3">
                                <div className="bg-slate-300 h-8 w-8 rounded-full flex justify-center items-center">
                                    <AiOutlineMail />
                                </div>
                                <span>example@gmail.com</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-600 mt-3">
                                <div className="bg-slate-300 h-8 w-8 rounded-full flex justify-center items-center">
                                    <AiOutlinePhone />
                                </div>
                                <span>(+880) 1854000000</span>
                            </div>
                            <div className="flex justify-between items-center text-gray-600 mt-3">
                                <div className="bg-slate-300 h-8 w-8 rounded-full flex justify-center items-center">
                                    <AiOutlineUser />
                                </div>
                                <span>User Name</span>
                            </div>
                        </div>
                        {/* Attachments */}
                        <div className="border-t border-gray-300 mt-8">
                            <h1 className="text-sm font-medium text-gray-600 mt-1">Attachments</h1>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Inbox;