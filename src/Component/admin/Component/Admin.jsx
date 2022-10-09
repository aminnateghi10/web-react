import React, {useEffect} from "react";
import {BrowserRouter,Routes , Route , useNavigate } from "react-router-dom";
import '../css/style.css'
import loadable from '@loadable/component'
import Dashboard from "./Dashboard";
const SideMenu = loadable(() => import('./SideMenu.jsx'))
const Tapbar = loadable(() => import('./Tapbar.jsx'))
const Comments = loadable(() => import('./Comments.jsx'))
const Contentwrapper = loadable(() => import('./Contentwrapper.jsx'))
const Service = loadable(() => import('./Service.jsx'))
const Experience = loadable(() => import('./Experience.jsx'))
const Clients = loadable(() => import('./Clients.jsx'))
const Skill = loadable(() => import('./Skill.jsx'))
const Information = loadable(() => import('./Information.jsx'))

function Admin(){
    let navigate = useNavigate()
    useEffect(()=>{
    if(localStorage.getItem('token') === null || localStorage.getItem('token').length === 0 ){
        navigate('/admin/login')
    }
    },[])

    return(
        <div className="main">

        <div id="wrapper">
        <SideMenu/>
            <div className="content-page">
                <div className="content">

                    <Tapbar/>
                    <Routes>
                        <Route path='/dashboard'  element={<Dashboard/>} />
                        <Route path='/information'  element={<Information/>} />
                        <Route path='/comments'  element={<Comments/>} />
                        <Route path='/skill'  element={<Skill/>} />
                        <Route path='/service'  element={<Service/>} />
                        <Route path='/experience'  element={<Experience/>} />
                        <Route path='/clients'  element={<Clients/>} />
                        <Route path='/*'  element={<h1>not defind</h1>} />
                    </Routes>



                </div>

            </div>

        </div>


        </div>
    )
}

export default Admin;