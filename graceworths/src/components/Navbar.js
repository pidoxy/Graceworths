import React from "react";

const Navbar = ({ bgColor }) => {
    return (
        <div className={` ${bgColor} navbar_page`}>
            <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <a class="navbar-brand" href="#">Graceworths</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Our Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">....</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    );
};

export default Navbar;
