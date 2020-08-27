import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

class LogoutBtn extends React.Component {
    handleLogout = () =>{
        window.localStorage.clear();

    };

    render() {
        return (
            <Link to ={"Landing"}>
            <button
                type="button"
                class="btn btn-primary"
                id="LogoutBtn"
                onClick={this.handleLogout}>
                Logout
            </button>
            </Link>
        )
    }
};
{/* <button class="btn btn-primary" type="submit" onClick={this.handleFormSubmit}>Create Profile</button> */}

export default LogoutBtn;
