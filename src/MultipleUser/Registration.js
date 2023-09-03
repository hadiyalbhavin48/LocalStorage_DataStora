
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Registration = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [id, setId] = useState(0);

    const navigate = useNavigate();

    // console.log(id, "iddsd")


    const formSubmit = (e) => {
        e.preventDefault();
        const useData = {
            firstName: firstName,
            lastName: lastName,
            phoneno: phoneno,
            email: email,
            pass: pass,
            id: localStorage.getItem("id")
        }
        const existingData = JSON.parse(localStorage.getItem('multipleUserLocalStorage')) || [];;
        existingData.push(useData);
        localStorage.setItem("multipleUserLocalStorage", JSON.stringify(existingData));
        console.log(existingData.id);
        localStorage.setItem("id", localStorage.getItem("id") ? Number(localStorage.getItem("id")) + 1 : 1)
        navigate("/login");
    }

    const login = () => {
        navigate("/login")
    }

    // auto icreament id

    // jyare id na hoy tyre a useEffect call thase and id hase tyre call nahi thay
    useEffect(() => {
        !localStorage.getItem("id") && localStorage.setItem("id", 1);
    }, [])

    return (
        <>
            <div className='registBody'>
                <div className="container">
                    <h2>Registration Form</h2>
                    <form action="" onSubmit={formSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstname">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputfirstname"
                                name="firstname"
                                onChange={(e) => { setfirstName(e.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputlastname"
                                name="lastname"
                                onChange={(e) => { setlastName(e.target.value) }}
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
                                required
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                onChange={(e) => { setPass(e.target.value) }}
                                id="exampleInputPassword"

                                name="password"

                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary mt-5"
                            name="create"
                        >
                            Sign up
                        </button>
                        <button
                            type='button'
                            className="btn btn-primary mt-5"
                            style={{ marginLeft: 5 }}
                            onClick={login}>Login</button>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Registration