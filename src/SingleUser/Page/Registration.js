import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const formSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("fname", fname)
        localStorage.setItem("lname", lname)
        localStorage.setItem("phoneno", phoneno)
        localStorage.setItem("email", email)
        // alert("data save");

        navigate("/user")

    }
    return (
        <>
            <div className='registBody'>
                <div className="container">
                    <h2>Registration Form</h2>
                    <form action="" >
                        <div className="form-group">
                            <label htmlFor="firstname">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputfirstname"
                                name="firstname"
                                onChange={(e) => { setFname(e.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputlastname"
                                name="lastname"
                                onChange={(e) => { setLname(e.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneno">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputphoneno"
                                name="phoneno"
                                onChange={(e) => { setPhoneno(e.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="email"
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword"
                                name="password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary mt-5"
                            name="create"
                            onClick={formSubmit}>
                            Sign up
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Registration