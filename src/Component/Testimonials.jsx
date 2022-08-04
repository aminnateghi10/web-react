import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import clients from '../State/Client/context.jsx'
import {getData} from "../State/Client/actions.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
function Testimonials(){
     let [loading , setloading] = useState(false)
    const {state, dispatch} = useContext(clients)

    useEffect(()=>{
        axios.get('https://api-web.a-nateghi.ir/api/v1/clients')
            .then(res => {
                dispatch(getData(res.data))
                setloading(true)
            })
    },[])

    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return(
        <>
            {
                !loading ?
                    <p>amin</p>

                    :
                        <section id="testimonials">
                            <div className="container">
                                {/* section title */}
                                <h2 className="section-title wow fadeInUp">Clients & Reviews</h2>
                                {/* testimonials wrapper */}
                                <div className="testimonials-wrapper">
                                    {/* testimonial item */}

                                    <Slider className='text-center' {...settings}>
                                            {
                                                state.data.map(item =>(
                                                    <div className='item' key={item.id}>
                                                        <div className="testimonial-item text-center mx-auto">
                                                            <div className="thumb mb-3 mx-auto">
                                                                <img src={`https://api-web.a-nateghi.ir/${item.img}`} alt="customer-name" />
                                                            </div>
                                                            <h4 className="mt-3 mb-0">{item.name}</h4>
                                                            <span className="subtitle">{item.job}</span>
                                                            <div className="bg-white padding-30 shadow-dark rounded triangle-top position-relative mt-4">
                                                                <p className="mb-0">{item.body}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                    </Slider>
                                    {/* testimonial item */}

                                </div>
                                <div className="row">
                                    <div className="col-md-3 col-6">
                                        {/* client item */}
                                        <div className="client-item">
                                            <div className="inner">
                                                <img src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/client-1-1.svg" alt="client-name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        {/* client item */}
                                        <div className="client-item">
                                            <div className="inner">
                                                <img src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/client-2-1.svg" alt="client-name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        {/* client item */}
                                        <div className="client-item">
                                            <div className="inner">
                                                <img src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/client-3-1.svg" alt="client-name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        {/* client item */}
                                        <div className="client-item">
                                            <div className="inner">
                                                <img src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/client-4-1.svg" alt="client-name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        {/* client item */}
                                        <div className="client-item">
                                            <div className="inner">
                                                <img src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/client-5-1.svg" alt="client-name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        {/* client item */}
                                        <div className="client-item">
                                            <div className="inner">
                                                <img src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/client-6-1.svg" alt="client-name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        {/* client item */}
                                        <div className="client-item">
                                            <div className="inner">
                                                <img src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/client-7-1.svg" alt="client-name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        {/* client item */}
                                        <div className="client-item">
                                            <div className="inner">
                                                <img src="https://jthemes.net/themes/wp/bolby/bolby5/wp-content/uploads/sites/5/2021/01/client-8-1.svg" alt="client-name" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

            }
        </>
    )
}

export default Testimonials;