import React from "react";

import "./style.css"
import {Link} from "react-router-dom"



class Nav extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-dark bg-dark">
                <Link class="navbar-brand" id="brand">
                    <img src="..\src\assets\img\logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
                FriendZone

              </Link>
                <button type="button" class="btn btn-primary btn-lg" id="loginBtn">Log in</button>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" to="#">Home <span class="sr-only">(current)</span></Link>
                        <Link class="nav-link" to="/addFriends">Add a Friend</Link>
                        <Link class="nav-link" to="#">About us</Link>
                        <Link class="nav-link" to="#">About the project</Link>
                        <Link class="nav-link disabled" to="#" tabindex="-1" aria-disabled="true"></Link>
                    </div>
                </div>
            </nav>
        )
    };
}
export default Nav;