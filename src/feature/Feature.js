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
                    <div className="col-item">
                        <img src={icon1} alt="icon" className="icon" />
                        <div className="col-t"> Fast & Optimized</div>
                        <div className="col-desc">
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt  tempor incididunt
                        </div>
                    </div>
                    <div className="col-item">
                        <img src={icon2} alt="icon" className="icon" />
                        <div className="col-t">Clean Code</div>
                        <div className="col-desc">
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt  tempor incididunt
                        </div>
                    </div>
                    <div className="col-item">
                        <img src={icon3} alt="icon" className="icon" />
                        <div className="col-t">Easy Optimsation</div>
                        <div className="col-desc">
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt  tempor incididunt
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
