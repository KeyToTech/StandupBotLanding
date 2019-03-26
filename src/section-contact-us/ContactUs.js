import React from 'react';
import '../section-contact-us/contact.css';
import bg from '../image/section-contact-us/bg_form.png';
import Form from '../section-contact-us/form/Form';

const ContactUs = () => (

    <div className="section-contact">
        <div className="bg-contact">
            <img src={bg} alt="bg" className="bg-con-img" />
        </div>
        <Form />
    </div>
);

export default ContactUs;