import React, { Component } from 'react';
import '../feature_app/feature.css';
import bg from '../image/feature-app/bg-feature-app.png';

const wrapContent = [

    {
        img: "",
        text: "Easy Customization",
        description: "Innovative solutions with the best.  Incididunt dolor sit amet consec tetur adipiscing elit."
    },

    {
        img: "Super Fast",
        text: "",
        description: "Innovative solutions with the best.  Incididunt dolor sit amet consec tetur adipiscing elit."
    },

    {
        img: "",
        text: "Cloud Upload",
        description: "Innovative solutions with the best.  Incididunt dolor sit amet consec tetur adipiscing elit."
    },

    {
        img: "",
        text: "Multi Control",
        description: "Innovative solutions with the best.  Incididunt dolor sit amet consec tetur adipiscing elit."
    },

    {
        img: "",
        text: "Fast Integrations",
        description: "Innovative solutions with the best.  Incididunt dolor sit amet consec tetur adipiscing elit."
    },

    {
        img: "",
        text: "100% Secure",
        description: "Innovative solutions with the best.  Incididunt dolor sit amet consec tetur adipiscing elit."
    }
]

const col = wrapContent.map((table) =>

    <div className="col-app">
        <img className="img-fa" />
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
            <div className="container-features">
                {col}
            </div>
        </div>
    </div>
)

export default FeatureApp;