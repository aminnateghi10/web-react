import React from "react";
import {AiOutlineBell, AiOutlineDown} from "react-icons/ai";

function Tapbar() {
    return (<div className="topbar">

        <div className="topbar-left	d-none d-lg-block">
            <div className="text-center">
                <a href="index.html" className="logo"><img src="../img/images.png" height="22"
                                                           alt="logo"/></a>
            </div>
        </div>

        <nav className="navbar-custom">
            <ul className="list-inline float-right mb-0">
                <li className="list-inline-item dropdown notification-list">
                    <a className="nav-link waves-effect toggle-search" href="#"
                       data-target="#search-wrap">
                        <i className="mdi mdi-magnify noti-icon"></i>
                    </a>
                </li>

                <li className="list-inline-item dropdown notification-list">
                    <a className="nav-link dropdown-toggle arrow-none waves-effect"
                       data-toggle="dropdown" href="#" role="button"
                       aria-haspopup="false" aria-expanded="false">
                        <AiOutlineBell/>
                        <span className="badge badge-danger badge-pill noti-icon-badge">3</span>
                    </a>
                    <div
                        className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg dropdown-menu-animated">
                        <div className="dropdown-item noti-title">
                            <h5>اعلانات (3)</h5>
                        </div>

                        <div className="slimscroll-noti">
                            <a className="dropdown-item notify-item active">
                                <div className="notify-icon bg-success"><i
                                    className="mdi mdi-cart-outline"></i></div>
                                <p className="notify-details"><b>سفارش شما قرار داده شده است</b><span
                                    className="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
                                </p>
                            </a>

                            <a className="dropdown-item notify-item">
                                <div className="notify-icon bg-danger"><i
                                    className="mdi mdi-message-text-outline"></i></div>
                                <p className="notify-details"><b>پیام جدید دریافت شد</b><span
                                    className="text-muted">شما 87 پیام خوانده نشده دارید</span></p>
                            </a>

                            <a className="dropdown-item notify-item">
                                <div className="notify-icon bg-info"><i
                                    className="mdi mdi-filter-outline"></i></div>
                                <p className="notify-details"><b>مورد شما حمل می شود</b><span
                                    className="text-muted">این یک واقعیت طولانی است که خواننده خواهد بود</span>
                                </p>
                            </a>

                            <a className="dropdown-item notify-item">
                                <div className="notify-icon bg-success"><i
                                    className="mdi mdi-message-text-outline"></i></div>
                                <p className="notify-details"><b>پیام جدید دریافت شد</b><span
                                    className="text-muted">شما 87 پیام خوانده نشده دارید</span></p>
                            </a>

                            <a className="dropdown-item notify-item">
                                <div className="notify-icon bg-warning"><i
                                    className="mdi mdi-cart-outline"></i></div>
                                <p className="notify-details"><b>سفارش شما قرار داده شده است</b><span
                                    className="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
                                </p>
                            </a>

                        </div>


                        <a className="dropdown-item notify-all">
                            مشاهده همه
                        </a>

                    </div>
                </li>


                <li className="list-inline-item dropdown notification-list nav-user">
                    <a className="nav-link dropdown-toggle arrow-none waves-effect"
                       data-toggle="dropdown" href="#" role="button"
                       aria-haspopup="false" aria-expanded="false">
                        <img src="data:image/png;base64,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" alt="user"
                             className="rounded-circle"/>
                        <span className="d-none d-md-inline-block ml-1"> امین ناطقی <AiOutlineDown/> </span>
                    </a>
                    <div
                        className="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown">
                        <a className="dropdown-item" href="#"><i
                            className="dripicons-user text-muted"></i> پروفایل</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#"><i
                            className="dripicons-exit text-muted"></i> خروج</a>
                    </div>
                </li>
            </ul>
        </nav>

    </div>)
}

export default Tapbar;