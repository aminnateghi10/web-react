import React, {useContext, useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from "./Navbar.jsx";
import Home from "./Home";
import About from "./About";
import Services from "./Services.jsx";
import Experience from "./Experience";
// import Works from "./Component/Works";
import Testimonials from "./Testimonials.jsx";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import '../css/simple-line-icons.css'
import '../css/style.css'
import Loader from "./Preloader.jsx";
import Preloader from "../State/Preloader/context.jsx";


function Web() {
    let {state, dispatch} = useContext(Preloader)
    return (
        <div className="App">
             {/*Preloader*/}
            {
                !state.loader ? <Loader/> :null
            }


            <Navbar/>
            {/* main layout */}
            <main className="content-3 ">
                {/* section home */}
                <Home/>
                {/* section about */}
                <About/>
                {/* section services */}
                <Services/>
                {/* section experience */}
                <Experience/>
                {/* section works */}
                {/*<Works/>*/}
                {/* section testimonials */}
                {/*<Testimonials/>*/}
                {/* section blog */}
                <Blog/>
                {/* section contact */}
                <Contact/>
                <Footer/>

            </main>
            {/* Go to top button */}
            <a id="return-to-top">
                <i className="fas fa-arrow-up" />
            </a>
        </div>
    );
}

export default Web;
