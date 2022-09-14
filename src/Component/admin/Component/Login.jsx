import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import '../css/style.css'
import axios from "axios";

function Login() {
    let navigate = useNavigate()
    let [state, setstate] = useState({
        username: '',
        password: ''
    })
    let PasswordUpdate = (e) => {
        setstate(prevState => {
            return {
                ...prevState,
                password: e.target.value
            }
        })
    }
    let UsernameUpdate = (e) => {

        setstate(prevState => {
            return {
                ...prevState,
                username: e.target.value
            }
        })
    }
    let SendRequest = (e) => {
        e.preventDefault();
        axios.post('api/v1/login', {
            email: state.username,
            password: state.password
        }).then(res => {
            localStorage.setItem('token', res.data.token)
            navigate('/admin')
        })
    }
    return (
        <>
            <>
                <div className="home-btn d-none d-sm-block">
                    <a href="index.html" className="text-dark">
                        <i className="mdi mdi-home h1"/>
                    </a>
                </div>
                <div className="account-pages" dir='rtl'>
                    <div className="container">
                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-5">
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <div className="p-2">
                                            <form
                                                className="form-horizontal m-t-20"
                                                onSubmit={SendRequest}
                                            >
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <input className="form-control" onChange={UsernameUpdate}
                                                               type="text" placeholder="نام کاربری"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <input
                                                            className="form-control"
                                                            type="password"
                                                            onChange={PasswordUpdate}
                                                            placeholder="رمز عبور"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group text-center row m-t-20">
                                                    <div className="col-12">
                                                        <button
                                                            className="btn btn-primary btn-block waves-effect waves-light"
                                                            type="submit">
                                                            ورود
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="form-group m-t-10 mb-0 row">
                                                    <div className="col-sm-7 m-t-20">
                                                        <a href="pages-recoverpw.html" className="text-muted">
                                                            <i className="mdi mdi-lock"/> فراموشی رمز عبور؟
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-5 m-t-20">
                                                        <a href="pages-register.html" className="text-muted">
                                                            <i className="mdi mdi-account-circle"/> ایجاد حساب جدید
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end row */}
                    </div>
                </div>
            </>

        </>
    )
}

export default Login;