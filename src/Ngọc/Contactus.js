import React from "react";
import "./cssngoc/ContactUs.css"

export default function ContactUs(){
    return(
        <>
            <section className="contact-us page-contact">
                <div> <img src="./imgs/contactus-banner.jpg" height="100%" width="100%" /></div>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <section className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1786.1959626964056!2d105.78101280850291!3d21.02891668145092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd4c609df%3A0x4d5733435648516e!2sHanoi%20Bethel%20Church!5e0!3m2!1svi!2s!4v1609985456576!5m2!1svi!2s" width="100%" height={600} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </section>
                        </div>
                        <div className="col-md-6 nenbgr">
                            <div className="loginn">
                                <h2 className="title-tt text-tt">SEND INFORMATION</h2>
                                <span className="contact-tt block">
              Please fill in the message content in the form below and send it to us. We will reply to you after receiving it.
            </span>
                                <from method="post" className="contact-block">
                                    <div className="from-up clearfix">
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-12">
                                                <fieldset className="from-group">
                                                    <label>
                                                        Full Name<span className="saored">*</span>
                                                    </label>
                                                    <input placeholder="Enter your first and last name" type="text" name="contact[name]" id="name" className="from-control" />
                                                </fieldset>
                                            </div>
                                            <div className="col-sm-6 col-xs-12">
                                                <fieldset className="from-group">
                                                    <label>
                                                        Email<span className="saored">*</span>
                                                    </label>
                                                    <input placeholder="Enter your email address" type="email" name="contact[email]" id="email" className="from-control" />
                                                </fieldset>
                                            </div>
                                            <div className="col-sm-12 col-xs-12">
                                                <fieldset className="from-group">
                                                    <label>
                                                        Phone<span className="saored">*</span>
                                                    </label>
                                                    <input placeholder="Enter your phone number" type="tel" name="contact[phone]" id="tel" className="from-control" />
                                                </fieldset>
                                            </div>
                                            <div className="col-sm-12 col-xs-12">
                                                <fieldset className="from-group">
                                                    <label>
                                                        Content<span className="saored">*</span>
                                                    </label>
                                                    <input placeholder="
Enter contact text" type="text" name="contact[body]" id="comment" className="from-control" />
                                                </fieldset>
                                                <div className="pull-xs-left col-sm-12 col-xs-12">
                                                    <a href="#"><button type="sumbit" className="btn btn-blues btn-style btn-style-active" style={{backgroundColor: '#1c1c1c', color: 'white'}}>
                                                        Send Message
                                                    </button></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </from>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p></p>
                </div>
            </section>
        </>

    )
}