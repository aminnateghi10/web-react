import React, {useContext, useEffect, useState} from "react";
import Client from "../State/Client/context.jsx";
import axios from "axios";
import {getData} from "../State/Client/actions.jsx";
import login from "./admin/Component/Login.jsx";

function About(){
    let [loading , setloading] = useState(false)
    let {state, dispatch} = useContext(Client)

    useEffect(()=>{
        axios.get('https://api-web.a-nateghi.ir/api/v1/clients')
            .then(res =>{
                dispatch(getData(res.data))
                setloading(true)
    })
    },[])

    return(
        <>
            {
                !loading ? <p>amin</p> :
                    <section id="about">
                        <div className="container">
                            {/* section title */}
                            <h2 className="section-title wow fadeInUp">About Me</h2>
                            <div className="spacer" data-height={60} />
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="text-center text-md-left">
                                        {/* avatar image */}
                                        <img src={state.data[0].img} alt="Bolby" />
                                    </div>
                                    <div className="spacer d-md-none d-lg-none" data-height={30} />
                                </div>
                                <div className="col-md-9 triangle-left-md triangle-top-sm">
                                    <div className="rounded bg-white shadow-dark padding-30">
                                        <div className="row">
                                            <div className="col-md-6">
                                                {/* about text */}
                                                {/*<p>{getValue(state.information  , 'biography')}</p>*/}
                                                <div className="mt-3">
                                                    <a href="#" className="btn btn-default">
                                                        Download CV
                                                    </a>
                                                </div>
                                                <div
                                                    className="spacer d-md-none d-lg-none"
                                                    data-height={30}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                {/* skill item */}
                                                <div className="skill-item">
                                                    <div className="skill-info clearfix">
                                                        <h4 className="float-left mb-3 mt-0">HTML</h4>
                                                        <span className="float-right">85%</span>
                                                    </div>
                                                    <div className="progress">
                                                        <div
                                                            className="progress-bar data-background"
                                                            role="progressbar"
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                            aria-valuenow={85}
                                                            data-color="#FFD15C"
                                                        ></div>
                                                    </div>
                                                    <div className="spacer" data-height={20} />
                                                </div>
                                                {/* skill item */}
                                                <div className="skill-item">
                                                    <div className="skill-info clearfix">
                                                        <h4 className="float-left mb-3 mt-0">CSS</h4>
                                                        <span className="float-right">95%</span>
                                                    </div>
                                                    <div className="progress">
                                                        <div
                                                            className="progress-bar data-background"
                                                            role="progressbar"
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                            aria-valuenow={95}
                                                            data-color="#FF4C60"
                                                        ></div>
                                                    </div>
                                                    <div className="spacer" data-height={20} />
                                                </div>
                                                {/* skill item */}
                                                <div className="skill-item">
                                                    <div className="skill-info clearfix">
                                                        <h4 className="float-left mb-3 mt-0">JS</h4>
                                                        <span className="float-right">70%</span>
                                                    </div>
                                                    <div className="progress">
                                                        <div
                                                            className="progress-bar data-background"
                                                            role="progressbar"
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                            aria-valuenow={70}
                                                            data-color="#6C6CE5"
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* row end */}
                            <div className="spacer" data-height={70} />
                            <div className="row mt-5">
                                <div className="col-md-3 col-sm-6">
                                    {/* fact item */}
                                    <div className="fact-item">
                                        <span className="icon icon-fire" />
                                        <div className="details">
                                            <h3 className="mb-0 mt-0 number">
                                                {/*<em className="count">{getValue(state.information  , 'ProjectsCompleted')}</em>*/}
                                            </h3>
                                            <p className="mb-0">Projects completed</p>
                                        </div>
                                    </div>
                                    <div className="spacer d-md-none d-lg-none" data-height={30} />
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    {/* fact item */}
                                    <div className="fact-item">
                                        <span className="icon icon-cup" />
                                        <div className="details">
                                            <h3 className="mb-0 mt-0 number">
                                                {/*<em className="count">{getValue(state.information  , 'CupOfCoffee')}</em>*/}
                                            </h3>
                                            <p className="mb-0">Cup of coffee</p>
                                        </div>
                                    </div>
                                    <div className="spacer d-md-none d-lg-none" data-height={30} />
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    {/* fact item */}
                                    <div className="fact-item">
                                        <span className="icon icon-people" />
                                        <div className="details">
                                            <h3 className="mb-0 mt-0 number">
                                                {/*<em className="count">{getValue(state.information  , 'SatisfiedClients')}</em>*/}
                                            </h3>
                                            <p className="mb-0">Satisfied clients</p>
                                        </div>
                                    </div>
                                    <div className="spacer d-md-none d-lg-none" data-height={30} />
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    {/* fact item */}
                                    <div className="fact-item">
                                        <span className="icon icon-badge" />
                                        <div className="details">
                                            <h3 className="mb-0 mt-0 number">
                                                {/*<em className="count">{getValue(state.information  , 'NomineesWinner')}</em>*/}
                                            </h3>
                                            <p className="mb-0">Nominees winner</p>
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
export default About;