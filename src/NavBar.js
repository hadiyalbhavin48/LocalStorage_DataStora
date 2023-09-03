import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [togg, setTogg] = useState(false);
    const [getUser, setGetUser] = useState([]);

    useEffect(() => {
        const getMultipleData = JSON.parse(localStorage.getItem("multipleUserLocalStorage")) || []
        setGetUser(getMultipleData);
    }, [])
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setTogg(!togg)}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    {togg && <div className="navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navA">
                            <li className="nav-item">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/registration">Registration</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user">User</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dask">dask Bord</Link>
                            </li>
                            <li>

                            </li>

                        </ul>
                    </div>}
                </div>
            </nav>

        </>
    )
}

export default NavBar