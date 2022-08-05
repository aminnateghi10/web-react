import React,{useState} from "react";
import {AiOutlineHome, AiOutlineLeft, AiOutlineMessage, AiOutlineSetting} from "react-icons/ai";
import {Link} from "react-router-dom";

function SideMenu() {
    const [toggle , settoggle] = useState()
    let Toggle = ()=>{
        settoggle(!toggle)
    }
    return (
        <div className="left side-menu">
            <button type="button" className="button-menu-mobile button-menu-mobile-topbar open-left waves-effect">
                <i className="mdi mdi-close"></i>
            </button>

            <div className="left-side-logo d-block d-lg-none">
                <div className="text-center">

                    <a href="index.html" className="logo">
                        <img src="assets/images/logo_dark.png" height="20" alt="logo"/>
                    </a>
                </div>
            </div>

            <div className="sidebar-inner slimscrollleft">

                <div id="sidebar-menu">
                    <ul>

                        <li>
                            <Link to='/admin/comments/dashboard' className="waves-effect">
                                <AiOutlineHome size={20}/>
                                <span> داشبورد</span>
                            </Link>
                        </li>

                        <li  className={`has_sub ${toggle ? 'nav-active' : ''}`}>
                            <a onClick={Toggle}>
                                <span> پیام ها </span>
                                <span className="menu-arrow float-right"><AiOutlineLeft size={18}/></span>
                            </a>
                            <ul className="list-unstyled">
                                <li><Link to='/admin/comments'>صندوق ورودی</Link></li>
                            </ul>
                        </li>
                        <li className={`has_sub ${toggle ? 'nav-active' : ''}`}>
                            <a className="waves-effect"><AiOutlineSetting size={20}/> <span> مدیریت / ویرایش </span>
                                <span className="menu-arrow float-right"><AiOutlineLeft size={18}/> </span></a>
                            <ul className="list-unstyled">
                                <li><Link to='/admin/service'>سرویس ها</Link></li>
                                <li><Link to='/admin/experience'>تجربیات</Link></li>
                                <li><Link to='/admin/experience'>مشتریان و نظرات</Link></li>
                                <li><Link to='/admin/controlpanel/fa'>پنل فارسی</Link></li>
                                <li><Link to='/admin/controlpanel/en'> پنل اینگلیسی</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;