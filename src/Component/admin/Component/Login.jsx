import React from "react";
import '../css/style.css'
function Login(){
    return(
        <>
            <>
                {/* Loader */}
                {/*<div id="preloader">*/}
                {/*    <div id="status">*/}
                {/*        <div className="spinner">*/}
                {/*            <div className="rect1" />*/}
                {/*            <div className="rect2" />*/}
                {/*            <div className="rect3" />*/}
                {/*            <div className="rect4" />*/}
                {/*            <div className="rect5" />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/* Begin page */}
                <div className="home-btn d-none d-sm-block">
                    <a href="index.html" className="text-dark">
                        <i className="mdi mdi-home h1" />
                    </a>
                </div>
                <div className="account-pages">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <div className="p-2">
                                            <h4 className="text-muted float-right font-18 mt-4">ورود</h4>
                                            <div>
                                                <a href="index.html" className="logo logo-admin">
                                                    <img
                                                        src="assets/images/logo_dark.png"
                                                        height={28}
                                                        alt="logo"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="p-2">
                                            <form
                                                className="form-horizontal m-t-20"
                                                action="https://themesdesign.in/zinzer_1/vertical-rtl/index.html"
                                            >
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            required=""
                                                            placeholder="نام کاربری"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <input
                                                            className="form-control"
                                                            type="password"
                                                            required=""
                                                            placeholder="رمز عبور"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-12">
                                                        <div className="custom-control custom-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customCheck1"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="customCheck1"
                                                            >
                                                                مرا به خاطر داشته باش
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group text-center row m-t-20">
                                                    <div className="col-12">
                                                        <button
                                                            className="btn btn-primary btn-block waves-effect waves-light"
                                                            type="submit"
                                                        >
                                                            ورود
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="form-group m-t-10 mb-0 row">
                                                    <div className="col-sm-7 m-t-20">
                                                        <a href="pages-recoverpw.html" className="text-muted">
                                                            <i className="mdi mdi-lock" /> فراموشی رمز عبور؟
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-5 m-t-20">
                                                        <a href="pages-register.html" className="text-muted">
                                                            <i className="mdi mdi-account-circle" /> ایجاد حساب جدید
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