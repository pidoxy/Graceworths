import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export class Carousel extends React.Component {
    
    render() {
        return (
            <div>
                <OwlCarousel items={3}
                    className="owl-theme"
                    loop
                    nav
                    margin={8} >
                    <div ><img className="img" src={'assets/img/img1.jpg'} /></div>
                    <div><img className="img" src={'assets/img/img2.jpg'} /></div>
                    <div><img className="img" src={'assets/img/img4.jpg'} /></div>
                    <div><img className="img" src={'assets/img/img3.jpg'} /></div>
                    <div><img className="img" src={'assets/img/img5.jpg'} /></div>
                    <div><img className="img" src={'assets/img/img6.jpg'} /></div>
                    <div><img className="img" src={'assets/img/img7.jpg'} /></div>
                </OwlCarousel>

            </div >
        );
    };
};

export default Carousel;
