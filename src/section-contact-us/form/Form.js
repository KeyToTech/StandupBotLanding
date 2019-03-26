import React from 'react';
import './form.css';

const Form = (props) => (

    <div className="form-container">
        {props.children}
        <form>
            <div className="wrap-name">
                <div className="name">
                    <input
                        type="text"
                        className=""
                        placeholder="Name"
                        name="Name"
                    ></input>
                </div>
                <div className="email">
                    <input
                        type="email"
                        className=""
                        placeholder="Email"
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
                <input
                    type="text"
                    className="message"
                    placeholder="Messege"
                    name="messege"
                ></input>
            </div>

            <div className="createAccount">
                <button type="submit">Submit Now</button>
            </div>
        </form>
    </div>

);

export default Form;