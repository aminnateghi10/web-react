import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import Container from 'react-bootstrap/Container';
import row from 'react-bootstrap/Row';
import col from 'react-bootstrap/Col';
import './css/simple-line-icons.css'
import './css/bootstrap.min.css'
import Web from "./Component/web.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Admin from "./Component/admin/Component/Admin.jsx";
import Login from './Component/admin/Component/Login.jsx'
import RegisterContext from "./Component/RegisterContext.jsx";


function App() {
    return (
        <RegisterContext>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Web/>} />
                        <Route path='admin/*' element={<Admin/>} />
                        <Route path='admin/login' element={<Login/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </RegisterContext>
    );
}

export default App;
