import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Modal from "../components/Modal";
import useAuth from "../context/authContext/useAuth";
import { GET_ALL_USERS } from "../graphql/query/userQuery";

const Users = (props) => {
    const { data, loading, error } = useQuery(GET_ALL_USERS);
    const [users, setUsers] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const { user } = useAuth();

    const router = useRouter();

    const handleOnClick = () => {
        setModalOpen(true)
    }

    useEffect(() => {
        if (user?.role !== "admin") {
            router.push('/message')
        }
        setUsers(data?.getAllUsers)
    }, [data?.getAllUsers, user?.role, router])

    if (error) {
        return <div className="text-center"><h1 className="text-primary font-bold text-xl">{error.message}</h1></div>
    }

    return (
        <>
            {
                modalOpen && <Modal setmodal={setModalOpen} />
            }
            <div className="w-4/5 h-screen mx-auto bg-white rounded-lg shadow-sm p-5">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-600 text-center">Manage Users</h1>
                    <div className="flex space-x-3 items-center">
                        <h2 className="text-sm font-medium text-gray-600">Add User</h2>
                        <div onClick={handleOnClick} className="h-10 w-10 bg-gray-200 rounded-full cursor-pointer flex justify-center items-center">
                            <AiFillPlusCircle
                                size={36}
                                color="gray" />
                        </div>
                    </div>
                </div>
                {
                    loading &&
                    <div className="text-center"><h1 className="text-primary font-bold text-xl">Loading...</h1></div>
                }
                <div className="mt-5">
                    <table className="w-full">
                        <tbody>
                            <tr className="bg-primary-light h-14 text-gray-700 rounded-xl">
                                <th>User</th>
                                <th>Email</th>
                                <th>role</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                            {
                                users?.length > 0 &&
                                users.map(item => <tr key={item.id} className="border-b border-b-gray-100 text-gray-600 text-center h-10" >
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>{item.phone}</td>
                                    <td>Name</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}

export default Users;