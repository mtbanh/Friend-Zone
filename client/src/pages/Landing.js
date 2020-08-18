import React, { useState, useEffect } from "react";
import "./landingStyle.css";


const Landing = () => {
    return (
        <div className="bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft" data-wow-delay="0.3s">
                        <h1 class="h1-responsive font-weight-bold mt-sm-5">Match  .  Chat  .  FriendZoned </h1>
                        <hr class="hr-light" />
                    </div>
                </div>
                <div class="row">
                    <button type="button" class="btn btn-primary btn-lg" id="SignupBtn">Sign up</button>

                </div>
            </div>
        </div >
    );
}

export default Landing;