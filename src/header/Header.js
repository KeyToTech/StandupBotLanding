import React, { Component } from 'react';
import '../header/header.css';
import logo from '../image/header/logo.png';
import imgHeader from '../image/header/img.png';


class Header extends Component {
    render() {
        return (
            <header className="menu-bar">
                <div className="container">
                    <div className="row">
                        <div className="logo-container">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="menu-container">
                            <nav className="nav-container">
                                <ul className="menu">
                                    <li className="menu-items"><a href="#">Home</a></li>
                                    <li className="menu-items"><a href="#">Features</a></li>
                                    <li className="menu-items"><a href="#">pricing</a></li>
                                    <li className="menu-items"><a href="#">Team</a></li>
                                    <li className="menu-items"><a href="#">Contact</a></li>
                                    <li className="menu-items"><a className="active" href="#">Login</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="caption-container">
                        <div className="caption">
                            <div className="firs-text">Firs ever amazing thing</div>
                            <h1>The app that build for your manegment</h1>
                            <div className="made-text">Made for your everyday work without update&costing</div>
                        </div>
                        <a className="button-caption">Get Started For Free</a>
                    </div>
                    <div className="caption-img-container">
                        <img src={imgHeader} alt="img"/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
