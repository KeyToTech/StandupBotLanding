import React from 'react';
import './form.css';

const Form = (props) => (

    <div className="form-container">
        <div className="content-form">
            {props.children}
        </div>
        <form>
            <div className="wrapper">
                <div className="wrap-name">
                    <div className="name">
                        <input
                            type="text"
                            className=""
                            placeholder="Your name"
                            name="Name"
                        ></input>
                    </div>
                    <div className="email">
                        <input
                            type="email"
                            className=""
                            placeholder="Your email"
                            name="email"
                        ></input>
                    </div>
                </div>
                <div className="wrap-subject">
                    <input
                        type="text"
                        className="subject"
                        placeholder="Subject"
                        name="subject"
                    ></input>
                </div>

                <div className="wrap-message">
                    <textarea placeholder="Message" className="message"></textarea>
                </div>

                <div className="createAccount">
                    <button type="submit">Submit Now</button>
                </div>
            </div>
        </form>
    </div>
);

export default Form;