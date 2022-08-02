import React,{useState} from "react";
import axios from "axios";

function Contact(){
    let [state , setstate] = useState({
        name:'',
        email:'',
        subject:'',
        body:''
    })

    let UpdateName = (e)=>{
        setstate(prevState => {
            return{
                ...prevState,
                name:e.target.value
            }
        })
    }
    let UpdateEmail = (e)=>{
        setstate(prevState => {
            return{
                ...prevState,
                email:e.target.value
            }
        })
    }
    let UpdateSubject = (e)=>{
        setstate(prevState => {
            return{
                ...prevState,
                subject:e.target.value
            }
        })
    }
    let UpdateBody = (e)=>{
        setstate(prevState => {
            return{
                ...prevState,
                body:e.target.value
            }
        })
    }
    let Submit = (e)=>{
     e.preventDefault();
     axios.post('https://api.a-nateghi.ir/api/v1/tickets',{
         name: state.name,
         email: state.email,
         subject: state.subject,
         body: state.body
     }).then(res => console.log(res))
    }
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
                        <form onSubmit={Submit} id="contact-form" className="contact-form mt-6" method="post"
                              action="https://jthemes.net/themes/html/bolby/demo/form/contact.php" noValidate="true">

                            <div className="messages"></div>

                            <div className="row">
                                <div className="column col-md-6">
                                    {/*// <!-- Name input -->*/}
                                    <div className="form-group has-error has-danger">
                                        <input type="text" className="form-control" name="InputName" id="InputName"
                                               placeholder="Your name" required="required"
                                               data-error="Name is required."
                                               onChange={UpdateName}
                                        />
                                            <div className="help-block with-errors">
                                                <ul className="list-unstyled">
                                                    <li>Name is required.</li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>

                                <div className="column col-md-6">
                                    {/*// <!-- Email input -->*/}
                                    <div className="form-group has-error has-danger">
                                        <input type="email" className="form-control" id="InputEmail" name="InputEmail"
                                               placeholder="Email address" required="required"
                                               data-error="Email is required. "
                                               onChange={UpdateEmail}
                                               />
                                            <div className="help-block with-errors">
                                                <ul className="list-unstyled">
                                                    <li>Email is required.</li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>

                                <div className="column col-md-12">
                                    {/*// <!-- Email input -->*/}
                                    <div className="form-group has-error has-danger">
                                        <input type="text" className="form-control" id="InputSubject"
                                               name="InputSubject" placeholder="Subject" required="required"
                                               onChange={UpdateSubject}
                                               data-error="Subject is required."/>
                                            <div className="help-block with-errors">
                                                <ul className="list-unstyled">
                                                    <li>Subject is required.</li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>

                                <div className="column col-md-12">
                                    {/*// <!-- Message textarea -->*/}
                                    <div className="form-group has-error has-danger">
                                        <textarea name="InputMessage" onChange={UpdateBody} id="InputMessage" className="form-control"
                                                  rows="5" placeholder="Message" required="required"
                                                  data-error="Message is required."></textarea>
                                        <div className="help-block with-errors">
                                            <ul className="list-unstyled">
                                                <li>Message is required.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" name="submit" id="submit" value="Submit"
                                    className="btn btn-default disabled">Send Message
                            </button>
                            {/*// <!-- Send Button -->*/}

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