import React, {useContext, useEffect} from "react";
import axios from 'axios'
import Information from '../State/Information/context.jsx'
import Preloader from "../State/Preloader/context.jsx";
import {getData} from "../State/Information/actions.jsx";
import {getValue} from "../State/Information/helpers.jsx";
import {payload} from "../State/Preloader/actions.jsx";
import Profile from '../image/favicon.png'
import ParallaxLayers from "./ParallaxLayers.jsx";


function Home() {
    let {state, dispatch} = useContext(Information)
    let {state:PreloaderState, dispatch:PreloaderDispatch} = useContext(Preloader)

    useEffect(() => {
        axios.get(`api/v1/information`)
            .then(res => {
                dispatch(getData(res.data.data))
                PreloaderDispatch(payload(true))
            })
    }, []);

    return (<>
        <section className="home light d-flex align-items-center">
            <div className="container">
                {/* intro */}
                <div className="intro">
                    {/* avatar image */}
                    <img src={Profile} className="mb-4"/>
                    {/* info */}
                    <h1 className="mb-2 mt-0">{getValue(state.information  , 'name')}</h1>
                    <span>{getValue(state.information  , 'jab')}</span>
                    {/* social icons */}
                    <ul className="social-icons light list-inline mb-0 mt-4">
                        <li className="list-inline-item">
                            <a href="#">
                                <i className="fab fa-instagram"/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                                <i className="fab fa-twitter"/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                                <i className="fab fa-behance"/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                                <i className="fab fa-dribbble"/>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                                <i className="fab fa-pinterest-p"/>
                            </a>
                        </li>
                    </ul>
                    {/* buttons */}
                    <div className="mt-4">
                        <a href="#contact" className="btn btn-default">Hire me</a>
                    </div>
                </div>
                {/* scroll down mouse wheel */}
                <div className="scroll-down light">
                    <a href="#about" className="mouse-wrapper">
                        <span>Scroll Down</span>
                        <span className="mouse"><span className="wheel"/></span>
                    </a>
                </div>
                {/* parallax layers */}
                <ParallaxLayers/>
            </div>
        </section>
    </>)
}

export default Home;