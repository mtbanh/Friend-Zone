import React from "react";
// import "./LandingStyle.css";
import SignupBtn from "../Components/SignupBtn"
import LoginBtn from "../Components/LoginBtn";

const AboutUs = () => {
    return (
        <div className="bg">
            <div class="container">
                <div class="row">
                    <div class="col s12 m6 l3"><p>Aidan</p>
                        <div class="row">
                            <div class="col">
                                <div class="card">
                                    <div class="card-image">
                                        <img src="" />
                                        <span class="card-title">Aidan Sweeny</span>
                                    </div>
                                    <div class="card-content">
                                        <p>Full stack student UC Berkeley</p>
                                    </div>
                                    <div class="card-action">
                                        <a href="">GitHub</a>
                                        <a href="">Linkedin</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Landing;