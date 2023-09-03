// import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const User = () => {
    // debugger;
    const [getUser, setGetUser] = useState([]);
    const [open, setOpen] = useState(false);

    const [getData, setData] = useState({});   // get current data
    const [updateIndex, setUpdateIndex] = useState(null);  // get current index   // To track the index of the user being updated

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => {
        setOpen(false);
        setData({});      // Clear data when closing the modal
        setUpdateIndex(null);   // Reset the update index
    };


    const getUpdateData = (data, index) => {
        // debugger;
        // console.log(data);
        // console.log(index);
        setOpen(true);
        setData(data);
        setUpdateIndex(index);   // Set the index of the user being updated
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const updateUser = {
            id: getData.id,
            firstName: getData.firstName,
            lastName: getData.lastName,
            phoneno: getData.phoneno,
            email: getData.email,
            password: getData.password

        }
        // debugger;

        const updateUsers = [...getUser];
        updateUsers[updateIndex] = updateUser;   // Update the user at the specified index

        // debugger;

        setGetUser(updateUsers);
        localStorage.setItem("multipleUserLocalStorage", JSON.stringify(updateUsers));
        onCloseModal();  // Close the modal after updating
    }

    const removeUser = (id) => {
        const updatedUsers = getUser.filter(user => user.id !== id);
        console.log(updatedUsers, "delete");
        setGetUser(updatedUsers);
        localStorage.setItem('multipleUserLocalStorage', JSON.stringify(updatedUsers));
    };

    useEffect(() => {
        const getMultipleData = JSON.parse(localStorage.getItem("multipleUserLocalStorage")) || []
        setGetUser(getMultipleData);
    }, [])
    return (
        <div>
            <h1>WelCome User</h1>

            <Table striped bordered hover>
                <thead>

                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile</th>
                        <th>Email</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        getUser.map((currElm, index) => (
                            <tr key={index}>
                                <td>{currElm.id}</td>
                                <td>{currElm.firstName}</td>
                                <td>{currElm.lastName}</td>
                                <td>{currElm.phoneno}</td>
                                <td>{currElm.email}</td>
                                <td>
                                    <button onClick={() => getUpdateData(currElm, index)}>Update</button>
                                </td>
                                <td>
                                    <button onClick={() => removeUser(currElm.id)}>Delete</button>
                                </td>
                            </tr>


                        ))
                    }

                </tbody>
            </Table>

            <Modal open={open} onClose={onCloseModal} center>
                <div className='registBody'>
                    <div className="container">
                        <h2>Registration Form</h2>
                        <form onSubmit={handleSubmit} >
                            <div className="form-group">
                                <label htmlFor="firstname">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputfirstname"
                                    name="firstname"
                                    value={getData.firstName || ''}
                                    onChange={(e) => setData({ ...getData, firstName: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputlastname"
                                    name="lastname"
                                    value={getData.lastName || ''}
                                    onChange={(e) => setData({ ...getData, lastName: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneno">Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputphoneno"
                                    name="phoneno"
                                    value={getData.phoneno}
                                    onChange={(e) => setData({ ...getData, phoneno: e.target.value })}
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
                                    value={getData.email || ''}
                                    onChange={(e) => setData({ ...getData, email: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mt-5"
                                name="create"
                            >
                                Update User
                            </button>
                        </form>
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default User




