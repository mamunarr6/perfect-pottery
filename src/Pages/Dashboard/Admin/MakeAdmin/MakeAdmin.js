import React from 'react';
import { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://vast-fjord-76006.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    setSuccess(true)
                }
            })

        e.preventDefault()
    }
    const handleOnReset = () => {
        setSuccess(false)
    }
    return (
        <div>
            <h1 className="text-3xl text-center text-gray-600 my-5 font-semibold">Make an Admin</h1>
            <div className="flex justify-center my-5 items-center">
                <div className="w-full text-center">
                    <form onSubmit={handleAdminSubmit} onReset={handleOnReset}>
                        <input onBlur={handleOnBlur} className="outline-none py-3 px-3 rounded-l  bg-gray-100 w-6/12 text-lg" type="email" placeholder="Make Admin by Email" />
                        <input className="common-bg py-3 px-5 text-white rounded-r font-medium text-lg" type="submit" value="Submit" /> <br />
                        <input className="common-bg py-3 px-10 text-white rounded font-medium text-lg my-5" type="reset" value="Reset" />
                    </form>
                    {
                        success &&
                        <h1 className=" bg-green-400 text-white py-3 px-5 text-lg font-medium mt-10"> Admin Made Successfully</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;