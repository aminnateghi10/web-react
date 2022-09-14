import React, {useContext, useEffect, useState} from "react";
import Experience from '../State/Experience/context.jsx'
import axios from "axios";
import getData from "../State/Experience/actions.jsx";
import {getValue} from '../State/Experience/helpers.jsx'

function Services(){
    let [loading , setloading] = useState(false)
    const {state , dispatch} = useContext(Experience)

    useEffect(()=>{

        axios.get('api/v1/experiences')
            .then(res =>{
                dispatch(getData(res.data))
                setloading(true)
            })
    },[])

    let JobExperiences = getValue(state.data , 'JobExperiences')
    let EducationalExperiences = getValue(state.data , 'EducationalExperiences')

    return(
        <>
            {
                !loading?<a>am</a>:
                    <section id="experience">
                        <div className="container">
                            {/* section title */}
                            <h2 className="section-title wow fadeInUp">Experience</h2>
                            <div className="row">
                                <div className="col-md-6 mt-5">
                                    {/* timeline wrapper */}
                                    <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
                                        {/* timeline item */}

                                        {
                                            EducationalExperiences === null ? null :
                                            EducationalExperiences.map((item , index)=>(
                                            <div className="timeline-container wow fadeInUp" key={index}>
                                            <div className="content">
                                            <span className="time">{item.start}-{item.end}</span>
                                            <h3 className="title">{item.title}</h3>
                                            <p>{item.body}</p>
                                            </div>
                                            </div>
                                            ))
                                        }
                                        {/* main line */}
                                        <span className="line" />
                                    </div>
                                </div>
                                <div className="col-md-6 mt-5">
                                    {/* responsive spacer */}
                                    <div className="spacer d-md-none d-lg-none" data-height={30} />
                                    {/* timeline wrapper */}
                                    <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
                                        {/* timeline item */}
                                        {
                                            JobExperiences === null ? null:
                                                JobExperiences.map((item , index)=>(
                                                    <div className="timeline-container wow fadeInUp" key={index}>
                                                        <div className="content">
                                                            <span className="time">{item.start}-{item.end}</span>
                                                            <h3 className="title">{item.title}</h3>
                                                            <p>{item.body}</p>
                                                        </div>
                                                    </div>
                                                ))
                                        }
                                        {/* main line */}
                                        <span className="line" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            }
        </>
    )
}

export default Services;