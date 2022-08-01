import React from "react";

function Contact(){
    return(
    <>
        <section id="contact">
            <div className="container">
                {/* section title */}
                <h2 className="section-title wow fadeInUp">Get In Touch</h2>
                <div className="spacer" data-height={60} />
                <div className="row">
                    <div className="col-md-4">
                        {/* contact info */}
                        <div className="contact-info">
                            <h3 className="wow fadeInUp">Let's talk about everything!</h3>
                            <p className="wow fadeInUp">
                                Don't like forms? Send me an{" "}
                                <a href="mailto:name@example.com">email</a>. 👋
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        {/* Contact Form */}
                        <form
                            id="contact-form"
                            className="contact-form mt-6"
                            method="post"
                            action="https://jthemes.net/themes/html/bolby/demo/form/contact.php"
                        >
                            <div className="messages" />
                            <div className="row">
                                <div className="column col-md-6">
                                    {/* Name input */}
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="InputName"
                                            id="InputName"
                                            placeholder="Your name"
                                            required="required"
                                            data-error="Name is required."
                                        />
                                        <div className="help-block with-errors" />
                                    </div>
                                </div>
                                <div className="column col-md-6">
                                    {/* Email input */}
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="InputEmail"
                                            name="InputEmail"
                                            placeholder="Email address"
                                            required="required"
                                            data-error="Email is required."
                                        />
                                        <div className="help-block with-errors" />
                                    </div>
                                </div>
                                <div className="column col-md-12">
                                    {/* Email input */}
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="InputSubject"
                                            name="InputSubject"
                                            placeholder="Subject"
                                            required="required"
                                            data-error="Subject is required."
                                        />
                                        <div className="help-block with-errors" />
                                    </div>
                                </div>
                                <div className="column col-md-12">
                                    {/* Message textarea */}
                                    <div className="form-group">
                    <textarea
                        name="InputMessage"
                        id="InputMessage"
                        className="form-control"
                        rows={5}
                        placeholder="Message"
                        required="required"
                        data-error="Message is required."
                        defaultValue={""}
                    />
                                        <div className="help-block with-errors" />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                name="submit"
                                id="submit"
                                value="Submit"
                                className="btn btn-default"
                            >
                                Send Message
                            </button>
                            {/* Send Button */}
                            <span className="btn" id="answer-request">
                sdfsdfsd
              </span>
                        </form>
                        {/* Contact Form end */}
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Contact;