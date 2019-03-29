import React, { Component } from 'react';
import '../about-connect/about.css';
import img from '../image/about-ct/img.png';

class Header extends Component {
    render() {
        return (
            <div className="sn-ab-ct">
                <div className='wrap-img-ab-ct'>
                    <img src={img} alt="img" className="img-ab-ct" />
                </div>
                <div className="wrap-content-ct">
                    <div className="ct-text">Best way to connect customers & lead them</div>
                    <div className="ct-desc">Innovative solutions with the best.
                     Incididunt dolor sit amet, consectetur adipiscing elit, sed tempor  sit amet nibh libero,
                     in gravida nulla. vel metus scelerisque ante sollicitudin. </div>
                     <a href="#" className="ct-button">Read More</a>
                </div>
            </div>
        );
    }
}

export default Header;
