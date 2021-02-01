import React from "react";
// import Violin from "../components/the-violin-front-view-on-blue-wall";

const OurServices = ({ bgColor }) => {

    return (
        <div className={` ${bgColor} services-page mb-3`}>
            <h2>Our Services</h2>
            <div class="container">
                <div className="row g-5">
                    <div className="col-md-6 col-12 mb-3 mb-0-md">
                        <div className="card  p-3">
                            <img src="" class="card-img-top img-thumbnail img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">GRACEWORTHS MUSICAL SCHOOL</h5>
                                <p className="card-text">We understake training for the following instruments: Recorder, trumpet, violin, saxophone, flute, guitar</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 mb-3 mb-0-md">
                        <div className="card  p-3">
                            <img src="" class="card-img-top img-thumbnail img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">GRACEWORTHS VOICE AND ALBUM</h5>
                                <p className="card-text">We undertake sessions on voice training and Album creation...all are certified courses and professional examinations are available.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 mb-3 mb-0-md">
                        <div className="card  p-3">
                            <img src="" class="card-img-top img-thumbnail img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">GRACEWORTHS LOCAL/INTERNATIONAL LANGUAGES</h5>
                                <p className="card-text">title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 mb-3 mb-0-md">
                        <div className="card  p-3">
                            <img src="" class="card-img-top img-thumbnail img-fluid" alt="violin" />
                            <div className="card-body">
                                <h5 className="card-title text-center">VOCATION ASPECT</h5>
                                <p className="card-text">Home Management. Food and Nutrition. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
