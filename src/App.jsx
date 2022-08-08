import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import loadable from '@loadable/component'
const Web = loadable(() => import('./Component/web.jsx'))
const Admin = loadable(() => import('./Component/admin/Component/Admin.jsx'))
const Login = loadable(() => import('./Component/admin/Component/Login.jsx'))

import RegisterContext from "./Component/RegisterContext.jsx";

import axios from "axios";
axios.defaults.baseURL="https://api-web.a-nateghi.ir"
function App() {
    return (
        <RegisterContext>
            <div className="App">
                <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Web/>} />
                            <Route path='admin/*' element={<Admin/>} />
                            <Route path='admin/login' element={<Login/>}/>
                            <Route path='*' element={<h1>nod defind</h1>}/>
                        </Routes>
                </BrowserRouter>
            </div>
        </RegisterContext>
    );
}

export default App;
