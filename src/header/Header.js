import React, { Component } from 'react';
import '../header/header.css';
import logo from '../image/logo.png';


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
                            <nav>
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
            </header>
        );
    }
}

export default Header;
