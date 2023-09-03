import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function DaskBord() {

    const navigat = useNavigate();

    const logOut = () => {
        alert("Log Out")
        const log = localStorage.removeItem("isLogin");
        if (!log) {
            navigat("/login");
        }
    }

    useEffect(() => {
        if (!localStorage.getItem("isLogin")) {
            navigat("/login")
        }
    }, []);

    return (
        <div>
            <h1>DaskBord</h1>
            <button onClick={logOut} className='bg-primary'>Log Out</button>
        </div>
    )
}

export default DaskBord