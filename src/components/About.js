import React from "react";

const AboutPage = ({ bgColor }) => {
    return (
        <div className={` ${bgColor} about-page mb-3`}>
            <h2>About Us</h2>

            <p>Graceworths Institute loves to discover the innermost potentials in your creative world in terms of music, arts and vocation. The institute runs various sessions targeted at prepping children and adults.

                Graceworths delights in engaging people to showcase their hidden strengths. The institute has planned programs for all ages that individuals can fit into as preffered

                We specially have programs for young kids...give your kids the best start to a world of fulfilled total education in creativity and expressivity through music art.
            </p>
        </div>
    );
};

export default AboutPage;
