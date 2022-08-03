import React, { useState } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import Button from './button';
import CheckBox from './checkBox';
import Input from './Input';
import { gql, useMutation, useQuery } from "@apollo/client";
import { CREATE_USER_MUTATION } from '../graphql/mutation/userMutation';

const Modal = ({ setmodal }) => {
    const [check, setCheck] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        role: "",
        avatar: "",
    });

    const [createUser, { data, loading, error }] = useMutation(CREATE_USER_MUTATION)
    const handleSubmit = async (e) => {
        e.preventDefault();
        createUser({ variables: { user: formData } })
        console.log(data, loading, error)
    }
    return (
        <div className='bg-slate-100 bg-opacity-60 h-screen w-screen fixed flex justify-center items-center'>
            <div className='bg-white shadow-xl  max-w-7xl max-h-full p-5 rounded-xl overflow-auto'>
                <div
                    className='h-8 w-8 rounded-full bg-gray-300 flex justify-center items-center fixed'
                    onClick={() => setmodal(false)} >

                    <AiFillCloseCircle size={28} color='gray' />
                </div>
                <div className='mt-12'>
                    <form className='w-96'>
                        <Input
                            title="name"
                            value={formData}
                            setvalue={setFormData}
                            placeholder="Name"
                            required={true} />

                        <Input
                            title="email"
                            value={formData}
                            setvalue={setFormData}
                            placeholder="email"
                            required={true} />

                        <Input
                            title="password"
                            value={formData}
                            setvalue={setFormData}
                            placeholder="Password"
                            required={true} />

                        <Input
                            title="phone"
                            value={formData}
                            setvalue={setFormData}
                            placeholder="Phone" />

                        <input
                            className='mb-3'
                            type="file"
                            name="avatar"
                            onChange={(e) => {
                                setImage(e.target.files[0])
                                setFormData({ ...formData, avatar: e.target.files[0] })
                            }} />

                        <CheckBox
                            title="user"
                            value={formData}
                            setvalue={setFormData}
                            check={check}
                            setcheck={setCheck} />

                        <CheckBox
                            title="admin"
                            value={formData}
                            setvalue={setFormData}
                            check={check}
                            setcheck={setCheck} />
                        <Button handleClick={handleSubmit} type='submit' title="Create User" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;