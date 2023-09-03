import React from 'react'

const User = () => {


    return (
        <>
            <h1>Welcome User</h1>
            <h4>
                First Name : {""}
                {localStorage.getItem("fname")}
            </h4>
            <h4>
                Last Name : {""}
                {localStorage.getItem("lname")}
            </h4>
            <h4>
                Mobile No : {""}
                {localStorage.getItem("phoneno")}
            </h4>
            <h4>
                Email : {" "}
                {localStorage.getItem("email")}
            </h4>
        </>
    )
}

export default User