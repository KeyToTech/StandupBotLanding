import React from 'react';
import '../section-team/team.css';
import instagram from '../image/icons/instagram.png';
import twitter from '../image/icons/twitter.png';
import facebook from '../image/icons/facebook.png';

const wrapContainerDeveloper = [

    {
        img: "",
        name: "Eiusmod Tempor",
        position: "CEO, Appside"
    },
    {
        img: "",
        name: "Maria Hexa",
        position: "Creative Designer"
    },
    {
        img: "",
        name: "Scotty Hedge",
        position: "Creative Designer"
    },
    {
        img: "",
        name: "Lara Croft",
        position: "Creative Designer"
    }
]

const Social = () => (
    <div className="wrap-social-networks">
        <img src={facebook} alt="icon" />
        <img src={twitter} alt="icon" />
        <img src={instagram} alt="icon" />
    </div>
);

const Developer = wrapContainerDeveloper.map((container) =>
    <div className="container-developer">
        <div className="photo">
            <div className="wrap-social-networks">
                <img src={facebook} alt="icon" className="item-social" />
                <img src={twitter} alt="icon" className="item-social" />
                <img src={instagram} alt="icon" className="item-social" />
            </div>
        </div>
        <div className="developer-date">
            <div className="name-t">
                {container.name}
            </div>
            <div className="position-t">
                {container.position}
            </div>
        </div>
    </div>
);

const Team = (props) => (
    <div className="section-team">
        <div className="container-context-team">
            <div style={props.style.Text.title} className="tx-p">Meet the Team</div>
            <div style={props.style.Text.description} className="desct-p">Innovative solutions with the best.  Incididunt dolor sit amet,
                consectetur adipiscing elitsed tempor  vel metus scelerisque ante sollicitudin.
            </div>
        </div>
        <div className="container-team">
            {Developer}
        </div>
    </div>
);

export default Team;