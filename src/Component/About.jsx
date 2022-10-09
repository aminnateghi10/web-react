import React, {useContext, useEffect, useState} from "react";
import {getValue} from "../State/Information/helpers.jsx";
import Information from '../State/Information/context.jsx'
import Skill from '../State/Skill/context.jsx'
import getData from "../State/Skill/actions.jsx";
import axios from "axios";
function About(){
    let {state, dispatch} = useContext(Information)
    let {state:SkillState, dispatch:SkillDispatch} = useContext(Skill)
    let [loading , setloading ] = useState(false)

    useEffect(()=>{
        axios.get('api/v1/skills')
            .then(res =>{
                res.data
                SkillDispatch(getData(res.data))
                setloading(true)
            })
    },[])

    return(
        <>
            {
                !loading ? null:

                    <section id="about">
                        <div className="container">
                            {/* section title */}
                            <h2 className="section-title wow fadeInUp">About Me</h2>
                            <div className="row mt-5">
                                <div className="col-md-3">
                                    <div className="text-center text-md-left">
                                        {/* avatar image */}
                                        <img src='https://jthemes.net/themes/wp/bolby/bolby7/wp-content/uploads/sites/7/2021/01/avatar-2-1.svg' alt="Bolby" />
                                    </div>
                                    <div className="spacer d-md-none d-lg-none" data-height={30} />
                                </div>
                                <div className="col-md-9 triangle-left-md triangle-top-sm">
                                    <div className="rounded bg-white shadow-dark padding-30">
                                        <div className="row">
                                            <div className="col-md-6">
                                                {/* about text */}
                                                <p>{getValue(state.information  , 'biography')}</p>
                                                <div className="mt-3">
                                                    <a href="#" className="btn btn-default">Download CV</a>
                                                </div>
                                                <div className="spacer d-md-none d-lg-none"/>
                                            </div>
                                            <div className="col-md-6">
                                                {/* skill item */}
                                                {
                                                    SkillState.data.map(item =>(
                                                        <div className="skill-item mt-3" key={item.id}>
                                                            <div className="skill-info clearfix">
                                                                <h4 className="float-right mb-3 mt-0">{item.title}</h4>
                                                                <span className="float-left">{item.percent}%</span>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar data-background" style={{backgroundColor:`${item.meta.p}`,width:`${item.percent}%` }}></div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* row end */}
                            <div className="spacer" data-height={70} />
                            <div className="row mt-5">
                                <div className="col-md-3 col-sm-6 mt-2">
                                    {/* fact item */}
                                    <div className="fact-item">
                                        <span className="icon icon-fire" />
                                        <div className="details">
                                            <h3 className="mb-0 mt-0 number">
                                                <em className="count">{getValue(state.information  , 'ProjectsCompleted')}</em>
                                            </h3>
                                            <p className="mb-0">Projects completed</p>
                                        </div>
                                    </div>
                                    <div className="spacer d-md-none d-lg-none" data-height={30} />
                                </div>
                                <div className="col-md-3 col-sm-6 mt-2">
                                    {/* fact item */}
                                    <div className="fact-item">
                                        <span className="icon icon-cup" />
                                        <div className="details">
                                            <h3 className="mb-0 mt-0 number">
                                                <em className="count">{getValue(state.information  , 'CupOfCoffee')}</em>
                                            </h3>
                                            <p className="mb-0">Cup of coffee</p>
                                        </div>
                                    </div>
                                    <div className="spacer d-md-none d-lg-none" data-height={30} />
                                </div>
                                <div className="col-md-3 col-sm-6 mt-2">
                                    {/* fact item */}
                                    <div className="fact-item">
                                        <span className="icon icon-people" />
                                        <div className="details">
                                            <h3 className="mb-0 mt-0 number">
                                                <em className="count">{getValue(state.information  , 'SatisfiedClients')}</em>
                                            </h3>
                                            <p className="mb-0">Satisfied clients</p>
                                        </div>
                                    </div>
                                    <div className="spacer d-md-none d-lg-none" data-height={30} />
                                </div>
                                <div className="col-md-3 col-sm-6 mt-2">
                                    {/* fact item */}
                                    <div className="fact-item">
                                        <span className="icon icon-badge" />
                                        <div className="details">
                                            <h3 className="mb-0 mt-0 number">
                                                <em className="count">{getValue(state.information  , 'NomineesWinner')}</em>
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