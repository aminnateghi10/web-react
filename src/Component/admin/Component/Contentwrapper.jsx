import React from "react";
function Contentwrapper(){
    return(
        <div className="page-content-wrapper ">

            <div className="container-fluid">

                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h4 className="page-title m-0">داشبورد</h4>
                                </div>
                                <div className="col-md-4">
                                    <div className="float-right d-none d-md-block">
                                        <div className="dropdown">
                                            <button className="btn btn-primary dropdown-toggle"
                                                    type="button" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                <i className="ti-settings mr-1"></i> تنظیمات
                                            </button>
                                            <div
                                                className="dropdown-menu dropdown-menu-right dropdown-menu-animated">
                                                <a className="dropdown-item" href="#">عملیات</a>
                                                <a className="dropdown-item" href="#">اقدام دیگر</a>
                                                <a className="dropdown-item" href="#">چیز های دیگر</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">پیوند جدا شده</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-primary mini-stat text-white">
                            <div className="p-3 mini-stat-desc">
                                <div className="clearfix">
                                    <h6 className="text-uppercase mt-0 float-left text-white-50">سفارشات</h6>
                                    <h4 className="mb-3 mt-0 float-right">1,587</h4>
                                </div>
                                <div>
                                    <span className="badge badge-light text-info"> +11% </span> <span
                                    className="ml-2">از دوره قبلی</span>
                                </div>

                            </div>
                            <div className="p-3">
                                <div className="float-right">
                                    <a href="#" className="text-white-50"><i
                                        className="mdi mdi-cube-outline h5"></i></a>
                                </div>
                                <p className="font-14 m-0">آخر : 1447</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-info mini-stat text-white">
                            <div className="p-3 mini-stat-desc">
                                <div className="clearfix">
                                    <h6 className="text-uppercase mt-0 float-left text-white-50">درآمد</h6>
                                    <h4 className="mb-3 mt-0 float-right">46,785 تومان</h4>
                                </div>
                                <div>
                                    <span className="badge badge-light text-danger"> -29% </span> <span
                                    className="ml-2">از دوره قبلی</span>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="float-right">
                                    <a href="#" className="text-white-50"><i
                                        className="mdi mdi-buffer h5"></i></a>
                                </div>
                                <p className="font-14 m-0">آخر : 46,785 تومان</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-pink mini-stat text-white">
                            <div className="p-3 mini-stat-desc">
                                <div className="clearfix">
                                    <h6 className="text-uppercase mt-0 float-left text-white-50">قیمت
                                        میانگین</h6>
                                    <h4 className="mb-3 mt-0 float-right">15.9</h4>
                                </div>
                                <div>
                                    <span className="badge badge-light text-primary"> 0% </span> <span
                                    className="ml-2">از دوره قبلی</span>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="float-right">
                                    <a href="#" className="text-white-50"><i
                                        className="mdi mdi-tag-text-outline h5"></i></a>
                                </div>
                                <p className="font-14 m-0">آخر : 15.8</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-success mini-stat text-white">
                            <div className="p-3 mini-stat-desc">
                                <div className="clearfix">
                                    <h6 className="text-uppercase mt-0 float-left text-white-50">محصولات
                                        فروخته شده</h6>
                                    <h4 className="mb-3 mt-0 float-right">1890</h4>
                                </div>
                                <div>
                                    <span className="badge badge-light text-info"> +89% </span> <span
                                    className="ml-2">از دوره قبلی</span>
                                </div>
                            </div>
                            <div className="p-3">
                                <div className="float-right">
                                    <a href="#" className="text-white-50"><i
                                        className="mdi mdi-briefcase-check h5"></i></a>
                                </div>
                                <p className="font-14 m-0">آخر : 1776</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-9">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">گزارش فروش ها</h4>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div id="morris-line-example" className="morris-chart"
                                        ></div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div>
                                            <h5 className="font-14 mb-5">گزارش فروش سالانه</h5>

                                            <div>
                                                <h5 className="mb-3">2018 : 19523 تومان</h5>
                                                <p className="text-muted mb-4">لورم ایپسوم متن ساختگی با
                                                    تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                                    گرافیک است.</p>
                                                <a href="#" className="btn btn-primary btn-sm">ادامه مطلب <i
                                                    className="mdi mdi-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">تجزیه و تحلیل فروش</h4>
                                <div id="morris-donut-example" className="morris-chart"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title mb-4">آخرین پیام ها</h4>
                                <div className="latest-massage">
                                    <a href="#" className="latest-message-list">
                                        <div className="border-bottom position-relative">
                                            <div className="float-left user mr-3">
                                                <h5 className="bg-primary text-center rounded-circle text-white mt-0">v</h5>
                                            </div>
                                            <div className="message-time">
                                                <p className="m-0 text-muted">هم اکنون</p>
                                            </div>
                                            <div className="massage-desc">
                                                <h5 className="font-14 mt-0 text-dark">جعفر عباسی</h5>
                                                <p className="text-muted">سلام، من اومدم به پنل
                                                    مدیریت...</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-message-list">
                                        <div className="border-bottom mt-3 position-relative">
                                            <div className="float-left user mr-3">
                                                <h5 className="bg-success text-center rounded-circle text-white mt-0">p</h5>
                                            </div>
                                            <div className="message-time">
                                                <p className="m-0 text-muted">2 دقیقه. پیش</p>
                                            </div>
                                            <div className="massage-desc">
                                                <h5 className="font-14 mt-0 text-dark">مجتبی خان</h5>
                                                <p className="text-muted">دوستان، من پروژه ها رو حل
                                                    کردم!</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-message-list">
                                        <div className="border-bottom mt-3 position-relative">
                                            <div className="float-left user mr-3">
                                                <img src="assets/images/users/avatar-3.jpg" alt=""
                                                     className="rounded-circle mb-3"/>
                                            </div>
                                            <div className="message-time">
                                                <p className="m-0 text-muted">6 دقیقه. پیش</p>
                                            </div>
                                            <div className="massage-desc">
                                                <h5 className="font-14 mt-0 text-dark">رضا</h5>
                                                <p className="text-muted">یک قالب بسیار حرفه ای و زیبا!</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-message-list">
                                        <div className="border-bottom mt-3 position-relative">
                                            <div className="float-left user mr-3">
                                                <h5 className="bg-pink text-center rounded-circle text-white mt-0">b</h5>
                                            </div>
                                            <div className="message-time">
                                                <p className="m-0 text-muted">01:34 بعد ظهر</p>
                                            </div>
                                            <div className="massage-desc">
                                                <h5 className="font-14 mt-0 text-dark">راست چین</h5>
                                                <p className="text-muted">یک قالب مدیریتی چند منظوره
                                                    ریسپانسیو</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="latest-message-list">
                                        <div className="mt-3 position-relative">
                                            <div className="float-left user mr-3">
                                                <img src="assets/images/users/avatar-4.jpg" alt=""
                                                     className="rounded-circle mb-3"/>
                                            </div>
                                            <div className="message-time">
                                                <p className="m-0 text-muted">02:05 بعد از ظهر</p>
                                            </div>
                                            <div className="massage-desc">
                                                <h5 className="font-14 mt-0 text-dark">فرشید خان</h5>
                                                <p className="text-muted">این یک دیدگاه تستی است...</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title mb-4">فعالیت اخیر</h4>
                                <ol className="activity-feed mb-0">
                                    <li className="feed-item">
                                        <div className="feed-item-list">
                                            <span className="date text-white-50">خرداد 10</span>
                                            <span className="activity-text text-white">پاسخ به نیاز "فعالیت های داوطلبانه"</span>
                                        </div>
                                    </li>
                                    <li className="feed-item">
                                        <div className="feed-item-list">
                                            <span className="date text-white-50">خرداد 09</span>
                                            <span className="activity-text text-white">اضافه شده علاقه "فعالیت های داوطلبانه"</span>
                                        </div>
                                    </li>
                                    <li className="feed-item">
                                        <div className="feed-item-list">
                                            <span className="date text-white-50">خرداد 08</span>
                                            <span className="activity-text text-white">در گروه انجمن "تخته سیاه" شرکت کرد</span>
                                        </div>
                                    </li>
                                    <li className="feed-item">
                                        <div className="feed-item-list">
                                            <span className="date text-white-50">خرداد 07</span>
                                            <span className="activity-text text-white">پاسخ به نیاز "فرصت در نوع"</span>
                                        </div>
                                    </li>
                                </ol>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title mb-4">منبع اجتماعی</h4>
                                <div className="text-center">
                                    <div className="social-source-icon lg-icon mb-3">
                                        <i className="mdi mdi-facebook h2 bg-primary text-white"></i>
                                    </div>
                                    <h5 className="font-16"><a href="#" className="text-dark">فیسبوک - <span
                                        className="text-muted">125 فروش</span> </a></h5>
                                    <p className="text-muted">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                        از صنعت چاپ و با استفاده از طراحان گرافیک است..</p>
                                    <a href="#" className="text-primary font-14">مطالعه بیشتر <i
                                        className="mdi mdi-chevron-right"></i></a>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        <div className="social-source text-center mt-3">
                                            <div className="social-source-icon mb-2">
                                                <i className="mdi mdi-facebook h5 bg-primary text-white"></i>
                                            </div>
                                            <p className="font-14 text-muted mb-2">125 فروش</p>
                                            <h6>فیسبوک</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="social-source text-center mt-3">
                                            <div className="social-source-icon mb-2">
                                                <i className="mdi mdi-twitter h5 bg-info text-white"></i>
                                            </div>
                                            <p className="font-14 text-muted mb-2">112 فروش</p>
                                            <h6>توییتر</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="social-source text-center mt-3">
                                            <div className="social-source-icon mb-2">
                                                <i className="mdi mdi-instagram h5 bg-pink text-white"></i>
                                            </div>
                                            <p className="font-14 text-muted mb-2">104 فروش</p>
                                            <h6>اینستاگرام</h6>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-9">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title mb-4">آخرین معامله</h4>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            <th scope="col">آی دی.</th>
                                            <th scope="col">نام</th>
                                            <th scope="col">تارخ</th>
                                            <th scope="col">قیمت</th>
                                            <th scope="col">تعداد</th>
                                            <th scope="col">وضعیت</th>
                                            <th scope="col">میزان</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">#14567</th>
                                            <td>جعفر عباسی</td>
                                            <td>14 خرداد</td>
                                            <td>74 تومان</td>
                                            <td>2</td>
                                            <td>
                                                <div className="progress"
                                                >
                                                    <div className="progress-bar bg-danger"
                                                         role="progressbar"
                                                         aria-valuenow="89" aria-valuemin="0"
                                                         aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </td>
                                            <td>111 تومان</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">#14568</th>
                                            <td>طاهر نصیری</td>
                                            <td>15 خرداد</td>
                                            <td>74 تومان</td>
                                            <td>2</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-warning"
                                                         role="progressbar"
                                                         aria-valuenow="64" aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>111 تومان</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">#14569</th>
                                            <td>طاهر نصیری</td>
                                            <td>16 خرداد</td>
                                            <td>74 تومان</td>
                                            <td>1</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success"
                                                         role="progressbar"
                                                         aria-valuenow="25" aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>111 تومان</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">#14570</th>
                                            <td>طاهر نصیری</td>
                                            <td>17 خرداد</td>
                                            <td>111 تومان</td>
                                            <td>2</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-warning"
                                                         role="progressbar"
                                                         aria-valuenow="64" aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>111 تومان</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">#14571</th>
                                            <td>جعفر عباسی</td>
                                            <td>18 خرداد</td>
                                            <td>111 تومان</td>
                                            <td>2</td>
                                            <td>
                                                <div className="progress" >
                                                    <div className="progress-bar bg-success"
                                                         role="progressbar"
                                                         aria-valuenow="25" aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>111 تومان</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mt-0 header-title mb-4">فایل های سند</h4>
                                <table className="table table-striped mb-0">
                                    <tbody>
                                    <tr>
                                        <td><i className="far fa-file-pdf text-primary h2"></i></td>
                                        <td>
                                            <h6 className="mt-0">2015</h6>
                                            <p className="text-muted mb-0">عنوان سند</p></td>
                                        <td>
                                            <a href="#" className="btn btn-primary btn-sm">
                                                <i className="fas fa-download"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i className="far fa-file-pdf text-primary h2"></i></td>
                                        <td>
                                            <h6 className="mt-0">2016</h6>
                                            <p className="text-muted mb-0">عنوان سند</p></td>
                                        <td>
                                            <a href="#" className="btn btn-primary btn-sm">
                                                <i className="fas fa-download"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i className="far fa-file-pdf text-primary h2"></i></td>
                                        <td>
                                            <h6 className="mt-0">2017</h6>
                                            <p className="text-muted mb-0">عنوان سند</p></td>
                                        <td>
                                            <a href="#" className="btn btn-primary btn-sm">
                                                <i className="fas fa-download"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i className="far fa-file-pdf text-primary h2"></i></td>
                                        <td>
                                            <h6 className="mt-0">2018</h6>
                                            <p className="text-muted mb-0">عنوان سند</p></td>
                                        <td>
                                            <a href="#" className="btn btn-primary btn-sm">
                                                <i className="fas fa-download"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Contentwrapper;