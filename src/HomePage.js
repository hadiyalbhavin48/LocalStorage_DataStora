// HomePage.js

import React from 'react'

const HomePage = () => {
    return (
        <>
            <div>HomePage</div>
            <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                    User Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                />
            </div>
        </>

    )
}

export default HomePage