import React from "react";

const Footer = ({ bgColor }) => {
    return (
        <div className={` ${bgColor} services-page`}>
            <div className={`row text-center`}>
                <div className={`col`}>
                    <div>
                        <a href="https://discord.com/invite/J3Hcfdc">About</a>
                    </div>
                    <div>
                        <a href="https://discord.com/invite/J3Hcfdc">About</a>
                    </div>
                    <div>
                        <a href="https://discord.com/invite/J3Hcfdc">About</a>
                    </div>
                </div>
                <div className={`col`}>
                    <div>
                        <a href="https://discord.com/invite/J3Hcfdc">Our services</a>
                    </div>
                    <div>
                        <a href="https://discord.com/invite/J3Hcfdc">FAQ</a>
                    </div>
                    <div>
                        <a href="https://discord.com/invite/J3Hcfdc">About</a>
                    </div>
                </div>
                <div className={`col`}>
                    <div>
                        <p>Contact Us</p>
                    </div>
                    <div>
                        <a href="https://discord.com/invite/J3Hcfdc">Email</a>
                    </div>
                    <div>
                        <a href="https://discord.com/invite/J3Hcfdc">TEL:</a>
                    </div>
                </div>
            </div>
            <div class="col-12 p-none white container-fluid">
                <p className="text-center">©2020&nbsp;Graceworths</p>
            </div>
        </div>
    );
};

export default Footer;
