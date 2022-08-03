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
                <div className="row mt-5">
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
                        <form onSubmit={Submit} className="contact-form mt-6">
                            <div className="messages"></div>
                            <div className="row">
                                <div className="column col-md-6">
                                    {/* <!-- Name input -->*/}
                                    <div className="form-group has-error has-danger">
                                        <input type="text" className="form-control" placeholder="Your name" onChange={UpdateName}/>
                                    </div>
                                </div>

                                <div className="column col-md-6">
                                    {/*<!-- Email input -->*/}
                                    <div className="form-group has-error has-danger">
                                        <input type="email" className="form-control" placeholder="Email address" onChange={UpdateEmail}/>
                                    </div>
                                </div>

                                <div className="column col-md-12">
                                    {/* <!-- Subject input -->*/}
                                    <div className="form-group has-error has-danger">
                                        <input type="text" className="form-control" placeholder="Subject" onChange={UpdateSubject} />
                                    </div>
                                </div>
                                <div className="column col-md-12">
                                    {/*<!-- Message textarea -->*/}
                                    <div className="form-group has-error has-danger">
                                        <textarea onChange={UpdateBody} className="form-control" placeholder="Message" rows="5"></textarea>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Send Button -->*/}
                            <button type="submit" className="btn btn-default disabled">Send Message</button>
                        {/* Contact Form end */}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Contact;