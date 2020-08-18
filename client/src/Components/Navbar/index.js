import React from "react";
import "./style.css"


class Nav extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" id="brand">
                    <img src="..\src\assets\img\logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
                FriendZone
              </a>
                <button type="button" class="btn btn-primary btn-lg" id="loginBtn">Log in</button>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-link" href="#">About us</a>
                        <a class="nav-link" href="#">About the project</a>
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
                    </div>
                </div>
            </nav>
        )
    };
}
export default Nav;