import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <section className="contact container section" id="Contact">
            <h2 className="section-title">Get In Touch</h2>

            <div className="contact-container grid">
                <form action="" className="contact-form">
                    <div className="contact-form-group">
                        <div className="contact-form-div">
                            <input type="text" className="contact-form-input" placeholder='Name' />
                        </div>
                        <div className="contact-form-div">
                            <input type="email" className="contact-form-input" placeholder='Email' />
                        </div>
                    </div>
                    <div className="contact-form-div">
                        <input type="text" className="contact-form-input" placeholder='Subject Line' />
                    </div>
                    <div className="contact-form-div area">
                        <textarea name="" id="" cols="30" rows="10" className="contact-form-input" placeholder='Message'></textarea>
                    </div>
                    <button className="btn">Send</button>
                </form>
            </div>
        </section>
    )
}
