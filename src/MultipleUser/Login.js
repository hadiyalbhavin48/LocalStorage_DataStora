import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [getUser, setGetUser] = useState(JSON.parse(localStorage.getItem("multipleUserLocalStorage")) || []);

    const navigat = useNavigate();


    const handleSubmit = () => {

        const user = getUser.find((user) => user.email === email && user.pass === pass);
        console.log(user, "------user---------");
        // debugger;
        // const arrOfObj = Object.keys(user).length;

        if (typeof user === "object" && Object.keys(user).length > 0) {
            // console.log(Object.keys(user).length, "length");
            alert("Login SuccessFully")
            localStorage.setItem("isLogin", true);
            // debugger;
            navigat("/dask")
        }
        else {
            alert("Email and Password Invalid");
            // debugger;
            navigat("/registration")
        }

    }
    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div
                                className="card bg-dark text-white"
                                style={{ borderRadius: "1rem" }}
                            >
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">
                                            Please enter your login and password!
                                        </p>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="email"
                                                onChange={(e) => setEmail(e.target.value)}
                                                id="typeEmailX"
                                                className="form-control form-control-lg"
                                            />
                                            <label className="form-label" htmlFor="typeEmailX">
                                                Email
                                            </label>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="password"
                                                onChange={(e) => setPass(e.target.value)}
                                                id="typePasswordX"
                                                className="form-control form-control-lg"
                                            />
                                            <label className="form-label" htmlFor="typePasswordX">
                                                Password
                                            </label>
                                        </div>
                                        <p className="small mb-5 pb-lg-2">
                                            <a className="text-white-50" href="#!">
                                                Forgot password?
                                            </a>
                                        </p>
                                        <button
                                            className="btn btn-outline-light btn-lg px-5"
                                            type="submit"
                                            onClick={handleSubmit}
                                        >
                                            Login
                                        </button>
                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-facebook-f fa-lg" />
                                            </a>
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-twitter fa-lg mx-4 px-2" />
                                            </a>
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-google fa-lg" />
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-0">
                                            Don't have an account?{" "}
                                            <a href="#!"
                                                className="text-white-50 fw-bold"
                                            >
                                                Sign Up
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Login