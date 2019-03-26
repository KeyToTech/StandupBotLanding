import React from 'react';
import '../footer/footer.css';
import bgSecond from "../image/footer/bg-footer-second.png";
import bgFirst from "../image/footer/bg-footer.png";
import logo from "../image/header/logo.png";

const Button = (img, link) => (
    <div className="wrap-btn">
        <a href="#" className="btn-social">{img}</a>
    </div>
);

const features = [
    {
        title: "Useful Links",
        features: ['Home', 'About us', 'Service', 'Blog', 'Contact']
    },
    {
        title: "Need Help?",
        features: ["FAQS", "Privacy", "Policy", "Support", "Terms"]
    },
    {
        title: "Download",
        features: ["For IOS", "For Android", "For Macos", "For windows", "For Mac tab"]
    }
]

const Features = features.map((features) =>
    <div className="container-features">
        <div className="title">{features.title}</div>
        <div className="features-footer">
            <a className="feature" href="#">{features.features[0]}</a>
            <a className="feature" href="#">{features.features[1]}</a>
            <a className="feature" href="#">{features.features[2]}</a>
            <a className="feature" href="#">{features.features[3]}</a>
            <a className="feature" href="#">{features.features[4]}</a>
        </div>
    </div>
);

const Footer = () => (
    <div className="footer-section">
        <div className="bg-footer">
            <img src={bgFirst} alt="bg" className="footer-bg-first" />
            <img src={bgSecond} alt="bg" className="footer-bg-second" />
        </div>

        <div className="container-footer">
            <div className="container-social">
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>

                <div className="wrap-social">
                    {Button(<i class="fab fa-facebook-f"></i>, "")}
                    {Button(<i class="fab fa-twitter"></i>, "")}
                    {Button(<i class="fab fa-google-plus-g"></i>, "")}
                    {Button(<i class="fab fa-instagram"></i>, "")}
                </div>
                <div className='develop-block'>
                    <h4>© Copyrights 2019 Buxkit All rights reserved.</h4>
                </div>
            </div>

            <div className="wrap-content-footer">
                {Features}
            </div>
        </div>
    </div>
);

export default Footer;