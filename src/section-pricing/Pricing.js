import React from 'react';
import '../section-pricing/pricing.css';
import bg from '../image/section-pricing/bg_.png';

const wrapContent = [
    {
        pList: "Primary",
        price: "$150",
        space: "10 Gb Space",
        support: "24/7 Support",
        color: "Color Availabel",
        account: "Unlimited Account"
    },

    {
        pList: "Professional",
        price: "$350",
        space: "10 Gb Space",
        support: "24/7 Support",
        color: "Color Availabel",
        account: "Unlimited Account"
    },

    {
        pList: "Business",
        price: "$450",
        space: "10 Gb Space",
        support: "24/7 Support",
        color: "Color Availabel",
        account: "Unlimited Account"
    }
]

const col = wrapContent.map((table) =>
    <div className="table-pricing">
        <div className="wrap-price-list">
            <div className="price-list">{table.pList}</div>
            <div className="price-container">
                <div className="price">{table.price}</div>/Month
            </div>
            <div className="space">{table.space}</div>
            <div className="support">{table.support}</div>
            <div className="color">{table.color}</div>
            <div className="account">{table.account}</div>
        </div>
        <a href="#" className="button-pricing">Purchace</a>
    </div>
)

const Pricing = (props) => (
    <div className="section-pricing">
        <div className="background-pricing">
            <img src={bg} className="bg" alt="bg" />
        </div>
        <div className="wrap-pricing">
            <div className="container-context-pricing">
                <div style={props.style.Text.title} className="tx-p">Exclusive pricing plans</div>
                <div style={props.style.Text.description} className="desct-p">Innovative solutions with the best.  Incididunt dolor sit amet,
                consectetur adipiscing elitsed tempor  vel metus scelerisque ante sollicitudin. </div>
            </div>
            <div className="container-pricing">
                {col}
            </div>
        </div>
    </div>
)

export default Pricing;
