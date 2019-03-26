import React, { Component } from 'react';
import '../feature_app/feature.css';
import bg from '../image/feature-app/bg-feature-app.png';
import icon1 from '../image/feature-app/icon-f2-1.png';
import icon2 from '../image/feature-app/icon-f2-2.png';
import icon3 from '../image/feature-app/icon-f2-3.png';
import icon4 from '../image/feature-app/icon-f2-4.png';
import icon5 from '../image/feature-app/icon-f2-5.png';
import icon6 from '../image/feature-app/icon-f2-6.png';

const wrapContent = [

    {
        img: icon1,
        text: "Easy Customization",
        description: "Innovative solutions with the best.  Incididunt dolor sit amet consec tetur adipiscing elit."
    },

    {
        img: icon2,
        text: "Super Fast",
        description: "Innovative solutions with the best.  Incididunt dolor sit amet consec tetur adipiscing elit."
    },

    {
        img: icon3,
        text: "Cloud Upload",
        description: "Innovative solutions with the best.  Incididunt dolor sit amet consec tetur adipiscing elit."
    },

    {
        img: icon4,
        text: "Multi Control",
        description: "Innovative solutions with the best.  Incididunt dolor sit amet consec tetur adipiscing elit."
    },

    {
        img: icon5,
        text: "Fast Integrations",
        description: "Innovative solutions with the best.  Incididunt dolor sit amet consec tetur adipiscing elit."
    },

    {
        img: icon6,
        text: "100% Secure",
        description: "Innovative solutions with the best.  Incididunt dolor sit amet consec tetur adipiscing elit."
    }
]

const col = wrapContent.map((table) =>

    <div className="col-app">
        <img className="img-fa" src={table.img} alt="icon" />
        <div className="container-ct-ca">
            <div className="col-tx-f">{table.text}</div>
            <div className="col-desc-f">{table.description}</div>
        </div>
    </div>
);

const FeatureApp = () => (
    <div className="feature-bar">
        <div className="background-feature">
            <img src={bg} className="bg" alt="bg" />
        </div>
        <div className="wrap-feature-app">
            <div className="container-context-app">
                <div className="tx-f-a">Why everybody choose this app</div>
                <div className="desct-f-a">Innovative solutions with the best.  Incididunt dolor sit amet,
                consectetur adipiscing elitsed tempor  vel metus scelerisque ante sollicitudin. </div>
            </div>
            <div className="container-features-choose">
                {col}
            </div>
        </div>
    </div>
)

export default FeatureApp;