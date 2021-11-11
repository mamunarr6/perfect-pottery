import React from 'react';
import { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState();
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
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
    return (
        <div>
            <h1 className="text-3xl text-center text-gray-600 my-5 font-semibold">Make an Admin</h1>
            <div className="flex justify-center my-5 items-center">
                <div className="w-full text-center">
                    <form onSubmit={handleAdminSubmit}>
                        <input onBlur={handleOnBlur} className="outline-none py-3 px-3 rounded-l  bg-gray-100 w-6/12 text-lg" type="email" placeholder="Make Admin by Email" />
                        <input className="common-bg py-3 px-5 text-white rounded-r font-medium text-lg" type="submit" value="Submit" />
                    </form>
                    {
                        success &&
                        <h1 className=" bg-green-600 text-white py-3 px-5">Made Admin Successfully</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;