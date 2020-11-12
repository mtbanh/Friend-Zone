import React from "react";
import "./style.css";
import {Link} from "react-router-dom"

class LoginBtn extends React.Component {
    render() {
        return (
            <Link to={"login"}>
                <button
                    type="button"
                    class="btn btn-lg"
                    id="loginBtn">
                    Login
            </button>
            </Link>
        )
    }
};

export default LoginBtn;
