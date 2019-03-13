import React, { Component } from 'react';
import '../testimonial/testimonial.css';
import icons from '../image/testimonial/icon.png';

class Testimonial extends Component {
    render() {
        return (
            <div className="section-testimonial">
                <div className="thumbnails">
                    <div className="thumbnail">
                    </div>
                    <div className="thumbnail">
                    </div>
                    <div className="thumbnail">
                    </div>
                </div>
                <div className="decor"></div>
                <div className="quote-box">
                    <div className="icons">
                        <img src={icons} className="icon-q" alt="icon" />
                    </div>
                    <div className="quote">
                        They  provide innovative solutions with the best.
                        Tempor incididunt utla bore et dolor  tempor incididunt.
                    </div>
                    <div className="ar-quote">
                        <div className="name">Jonathon doe</div>
                        <div className="position">Directer, art media</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonial;