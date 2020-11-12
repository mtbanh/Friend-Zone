import React from "react";
import "../loginBtn/style.css";
import {Link} from "react-router-dom";

class SignupBtn extends React.Component {
    
    render() {
        return (
            <Link to ={"register"}>
            <button
                type="button"
                class="btn btn-primary btn-lg"
                id="loginBtn">
                Sign-up
            </button>
            </Link>
        )
    }
};

export default SignupBtn;
