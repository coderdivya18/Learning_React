import React from 'react';

const ContactUs = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <form className="contact-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" required/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email" required/>

                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;
