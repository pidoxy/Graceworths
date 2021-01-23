import React from "react";
// import img_1 from "./landing_1";

const LandingPage = ({ bgColor }) => {
  return (
    <div className={` ${bgColor} landing-page`}>
      <div>
        <p>
          Discovering talents. Creativity.
          <br /> Great Quality
        </p>
        {/* <img src={img_1} /> */}
      </div>
    </div>
  );
};

export default LandingPage;
