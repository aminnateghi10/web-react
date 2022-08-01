import React, {useContext, useEffect, useState} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from "axios";
import Service from '../State/Service/context.jsx'
import {getData} from "../State/Service/actions.jsx";

function Testimonials(){
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
                !loading ?
                    <p>amin</p>

                    :
                        <section id="testimonials">
                            <div className="container">
                                {/* section title */}
                                <h2 className="section-title wow fadeInUp">Clients &amp; Reviews</h2>
                                {/* testimonials wrapper */}
                                <div className="testimonials-wrapper">
                                    {/* testimonial item */}


                                    <OwlCarousel  loop margin={10} items='1'>
                                        {
                                             state.data.map(item =>(
                                                <div className='item'>
                                                    <div className="testimonial-item text-center mx-auto">
                                                        <div className="thumb mb-3 mx-auto">
                                                            <img src={`https://api-web.a-nateghi.ir/${item.image}`} alt="customer-name" />
                                                        </div>
                                                        <h4 className="mt-3 mb-0">{item.title}</h4>
                                                        <span className="subtitle">Product designer at Dribbble</span>
                                                        <div className="bg-white padding-30 shadow-dark rounded triangle-top position-relative mt-4">
                                                            <p className="mb-0">{item.body}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                            // console.log(state.data)
                                        }

                                    </OwlCarousel>
                                    {/* testimonial item */}

                                </div>
                                <div className="row">
                                    <div className="col-md-3 col-6">
                                        {/* client item */}
                                        <div className="client-item">
                                            <div className="inner">
                                                <img src="../image/client-1.svg" alt="client-name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        {/* client item */}
                                        <div className="client-item">
                                            <div className="inner">
                                                <img src="http://a-nateghi.ir/images/client-2.svg" alt="client-name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        {/* client item */}
                                        <div className="client-item">
                                            <div className="inner">
                                                <img src="http://a-nateghi.ir/images/client-3.svg" alt="client-name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        {/* client item */}
                                        <div className="client-item">
                                            <div className="inner">
                                                <img src="http://a-nateghi.ir/images/client-4.svg" alt="client-name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        {/* client item */}
                                        <div className="client-item">
                                            <div className="inner">
                                                <img src="http://a-nateghi.ir/images/client-5.svg" alt="client-name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        {/* client item */}
                                        <div className="client-item">
                                            <div className="inner">
                                                <img src="http://a-nateghi.ir/images/client-6.svg" alt="client-name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        {/* client item */}
                                        <div className="client-item">
                                            <div className="inner">
                                                <img src="http://a-nateghi.ir/images/client-7.svg" alt="client-name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6">
                                        {/* client item */}
                                        <div className="client-item">
                                            <div className="inner">
                                                <img src="http://a-nateghi.ir/images/client-8.svg" alt="client-name" />
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