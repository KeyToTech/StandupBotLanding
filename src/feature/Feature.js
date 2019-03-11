import React, { Component } from 'react';
import '../feature/feature.css';
import icon1 from '../image/feature/icon-1.png';
import icon2 from '../image/feature/icon-2.png';
import icon3 from '../image/feature/icon-3.png';


class Header extends Component {
    render() {
        return (
            <div className="section-feature">
                <div className="wrap-col-items">
                    <div className="col">
                        <img src={icon1} alt="icon" className="icon" />
                    </div>
                    <div className="col">
                        <img src={icon2} alt="icon" className="icon" />
                    </div>
                    <div className="col">
                        <img src={icon3} alt="icon" className="icon" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
