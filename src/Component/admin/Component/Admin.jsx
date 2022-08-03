import React from "react";
import {BrowserRouter,Routes , Route } from "react-router-dom";
import '../css/style.css'
import SideMenu from "./SideMenu.jsx";
import Tapbar from "./Tapbar.jsx";
import Comments from './Comments.jsx'
// import 'react-bootstrap-icons/dist/icons/bootstrap'
import Contentwrapper from "./Contentwrapper.jsx";
import Panaelfa from "./Panaelfa.jsx";
function Admin(){
    return(
        <div className="main fixed-left">

        <div id="wrapper">
        <SideMenu/>
            <div className="content-page">
                <div className="content">

                    <Tapbar/>
                    <Routes>
                        <Route path='/dashboard'  element={<Contentwrapper/>} />
                        <Route path='/comments'  element={<Comments/>} />
                        <Route path='/controlpanel/fa'  element={<Panaelfa/>} />
                        <Route path='/controlpanel/en'  element={<Contentwrapper/>} />
                    </Routes>



                </div>

                <footer className="footer">
                    © 1398 زینزر <span className="d-none d-md-inline-block"> - طراحی با <i
                    className="mdi mdi-heart text-danger"></i> فارسی سازی توسط جعفر عباسی.</span>
                </footer>

            </div>

        </div>


        </div>
    )
}

export default Admin;