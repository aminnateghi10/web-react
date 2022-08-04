import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import Service from '../State/Service/context.jsx'
import {getData} from "../State/Service/actions.jsx";

function Services(){
    let [loading , setloading] = useState(false)
    const {state, dispatch} = useContext(Service)

    useEffect(()=>{
        axios.get('https://api-web.a-nateghi.ir/api/v1/services')
            .then(res => {
                dispatch(getData(res.data))
                setloading(true)
            })
    },[])
    return(
        <>
            {
                !loading ? <p>logading</p>:
                <section id="services">
                    <div className="container">
                        {/* section title */}
                        <h2 className="section-title wow fadeInUp">Services</h2>
                        <div className="row">

                            {
                                state.data.map((item , index) =>(
                                    <div className="col-md-4 mt-5" key={index}>
                                        {/* service box */}
                                        <div className={`service-box rounded data-background padding-30 text-center text-light ${index % 2===0 ?'shadow-blue': 'shadow-pink'}`}
                                             data-color="#6C6CE5">
                                            <img src={`https://api-web.a-nateghi.ir/${item.image}`} alt="UI/UX design" />
                                            <h3 className="mb-3 mt-0">{item.title}</h3>
                                            <p className="mb-0">{item.body}</p>
                                        </div>
                                        <div className="spacer d-md-none d-lg-none" data-height={30} />

                                    </div>
                                ))
                            }
                        </div>
                        <div className="mt-5 text-center">
                            <p className="mb-0">
                                Looking for a custom job? <a href="#contact">Click here</a> to
                                contact me! 👋
                            </p>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Services;