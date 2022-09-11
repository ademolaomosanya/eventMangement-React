import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <div class="mainBody">
                <div class="text--container">
                    <div class="centered">Welcome To DeluxeEvent
                        Your World Of Great Event Awaits
                        We are so glad you are here! You are now part of a growing community of DeluxeEvent, collaborating, and
                        connecting across the globe via our website.
                        Whether you have joined to create something of your own or just to make enquiries, we have got something for
                        you.
                        Let's go!</div>
                </div>
                <div class="works">
                    <h1 style={{ color: "rgb(250, 150, 186)", textAlign: "center" }}>How Deluxe works </h1>
                    <p style={{}}>
                        Deluxe Event is a platform that gives the best and affordable services
                        to its customer
                    </p>
                </div>
                <div class="icons">

                    <div>
                        <span class="material-icons"> perm_identity </span>
                        <NavLink className="icons--link" to="/signin">
                            <p> Login into your Deluxe Account</p>
                        </NavLink>

                    </div>

                    <div>
                        <span class="material-icons"> featured_play_list </span>
                        <NavLink className="icons--link" to="/signup">
                            <p>Check out our amazing Facilities</p>
                        </NavLink>
                    </div>
                    <div>
                        <span class="material-icons"> event </span>
                        <NavLink className="icons--link" to="/CreateEventPage">
                            <p>  Create an Event to get started</p>
                        </NavLink>
                    </div>
                </div>
                <div class="facilities">
                    <h1 style={{ color: "rgb(250, 150, 186)", textAlign: "center" }}>Our Facilities</h1>
                    <div class="row">
                        <div class="column">
                            <img src="./images/images.jpg" alt="sometext" />
                            <p>Events Hall(250 capacity)</p>
                        </div>
                        <div class="column">
                            <img src="./images/download1.jpg" alt="sometext" />
                            <p>Hall(1000 capacity)</p>
                        </div>
                        <div class="column">
                            <img src="./images/images1.jpg" alt="sometext" />
                            <p>Field Events</p>
                        </div>
                        <div class="column">
                            <img src="./images/download2.jpg" alt="sometext" />
                            <p>Hall with projectors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}