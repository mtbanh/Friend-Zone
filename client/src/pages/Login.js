import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API"
import "./login.css";
import UserContext from "../utils/UserContext/userContext";


const Login = (props) => {

    const [userSigninObj, setUserSigninObj] = useState({})
    // const   { setUser }  = useContext(UserContext)
    const   { setUser }  = props;
    // console.log(props.setUser)
    // console.log(props)
    const   ctx  = useContext(UserContext)
    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserSigninObj({ ...userSigninObj, [name]: value })
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(userSigninObj);
        if (userSigninObj.email && userSigninObj.password) {
            API.findUser(userSigninObj)
                .then(({data: userData}) => {
                    console.log(`data passed to route`)
                    console.log(userData)
                    // console.log(ctx)      
                    const loggedInUser = {
                        id: userData.id,
                        name: userData.name
                    }
                    console.log(loggedInUser)
                    setUser(loggedInUser);
                    window.localStorage.setItem('user', JSON.stringify(loggedInUser))
                    window.location.replace("/profile")
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div class="container-fluid">
            <div class="row no-gutter">
                <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                <div class="col-md-8 col-lg-6">
                    <div class="login d-flex align-items-center py-5">
                        <div class="container">
                            <div class="row no-gutter">
                                <div class="col-md-9 col-lg-8 mx-auto">
                                    <h3 class="login-heading mb-4">Welcome back!</h3>
                                    {/* <h4>Error</h4> */}
                                    <form>
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

                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">Remember password</label>
                                        </div>
                                        <button
                                            class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold coderatings-button mb-2"
                                            type="submit"
                                            onClick={handleFormSubmit}>
                                            Sign in
                                            </button>
                                        <div class="text-center">
                                            <a class="small" href="#">Forgot password?</a> <a class="small" href="/register">Create an account?</a></div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;