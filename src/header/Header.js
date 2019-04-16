import React, { Component } from 'react';
import '../header/header.css';
import logo from '../image/header/logo.png';
import bg_first from '../image/header/bg.png';
import bg_second from '../image/header/bg_second.png';
import imgHeader from '../image/header/img.png';

class Header extends Component {
    render() {
        return (
            <header id="home" className="menu-bar">
                <div className="background-header">
                    <img src={bg_first} alt="bg" className="bg-first" />
                    <img src={bg_second} alt="bg" className="bg-second" />
                </div>
                <div className="container-header-nav">
                    <nav className="nav-container">
                        <div className="logo-container">
                            <img src={logo} alt="logo" className="logo-header" />
                        </div>
                        <ul className="menu">
                            <li className="menu-items"><a className="item-nav" href="#home">Home</a></li>
                            <li className="menu-items"><a className="item-nav" href="#features">Features</a></li>
                            <li className="menu-items"><a className="item-nav" href="#pricing">pricing</a></li>
                            <li className="menu-items"><a className="item-nav" href="#team">Team</a></li>
                            <li className="menu-items"><a className="item-nav" href="#contact-us">Contact</a></li>
                            <li className="menu-items"><a className="active" href="#">Login</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="banner">
                    <div className="caption-container">
                        <div className="caption">
                            <div className="caption-tf">Firs ever amazing thing</div>
                            <h1 className="caption-tt">The app that build for your manegment</h1>
                            <div className="caption-tm">Made for your everyday work without update&costing</div>
                        </div>
                        <div className="wrap-button-header">
                            <a href="#" className="button-caption">Get Started For Free</a>
                        </div>
                    </div>
                    <div className="caption-img-container">
                        <img src={imgHeader} alt="img" className="img-header" />
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;
