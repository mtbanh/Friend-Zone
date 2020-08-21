import React, { useEffect, useState } from "react";
import API from "../utils/API"

import "./registration.css";

const Register = () => {
    const [userProfileObj, setUserProfileObj] = useState({})

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserProfileObj({ ...userProfileObj, [name]: value })
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(userProfileObj);
        if (userProfileObj.name && userProfileObj.email && userProfileObj.password) {
            API.createUser({
                name: userProfileObj.name,
                email: userProfileObj.email,
                password: userProfileObj.password
            })
                .then(() => {
                    console.log(`data passed to route`)
                    window.location.replace("/Profile")
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div class="container-fluid">
            <div class="row no-gutter">
                <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image-reg"></div>
                <div class="col-md-8 col-lg-6">
                    <div class="login d-flex align-items-center py-5">
                        <div class="container">
                            <div class="row no-gutter">
                                <div class="col-md-9 col-lg-8 mx-auto">
                                    <h3 class="login-heading mb-4">Ready to be in the Friend Zone?</h3>
                                    <form >

                                        <div class="form-label-group">
                                            <input
                                                type="text"
                                                name="name"
                                                id="inputName"
                                                class="form-control"
                                                placeholder="First and Last name"
                                                onChange={handleInputChange}
                                                required autofocus />
                                            <label for="inputName">Full Name</label>
                                        </div>

                                        <div class="form-label-group">
                                            <input
                                                type="email"
                                                name="email"
                                                id="inputEmail"
                                                class="form-control"
                                                placeholder="Email address"
                                                onChange={handleInputChange}
                                                required autofocus />
                                            <label for="inputEmail">Email address</label>
                                        </div>

                                        <div class="form-label-group">
                                            <input
                                                name="password"
                                                type="password"
                                                onChange={handleInputChange}
                                                id="inputPassword"
                                                class="form-control"
                                                placeholder="Password"
                                                required />
                                            <label for="inputPassword">Password</label>
                                        </div>
                                        {/* 
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">Remember password</label>
                                        </div> */}
                                        <button
                                            class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold coderatings-button mb-2"
                                            type="submit"
                                            disabled={!(userProfileObj.name && userProfileObj.email && userProfileObj.password)}
                                            onClick={handleFormSubmit}

                                        >
                                            Register
                                        </button>
                                        <div class="text-center">
                                            <a class="medium" href="/login">Log in?</a> </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;