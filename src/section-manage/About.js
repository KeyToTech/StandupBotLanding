import React, { Component } from 'react';
import '../section-manage/about.css';
import img from '../image/about-mg/img_manage.png';

class Header extends Component {
    render() {
        return (
            <div className="sn-ab-mg">
                <div className="wrap-content-mg">
                    <div className="mg-t">Manage balance workloads & resource</div>
                    <div className="mg-desc">Innovative solutions with the best.
                     Incididunt dolor sit amet, consectetur adipiscing elit, sed tempor  sit amet nibh libero,
                     in gravida nulla. vel metus scelerisque ante sollicitudin. </div>
                    <a href="#" className="mg-button">Read More</a>
                </div>
                <div className='wrap-img-ab-mg'>
                    <img src={img} alt="img" className="img-ab-mg" />
                </div>
            </div>
        );
    }
}

export default Header;
