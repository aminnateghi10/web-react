// import React from "react";
// import {AiOutlineHome} from "react-icons/ai";
// // import HomeIcon from "@material-ui/icons/Home";
// // import ReceiptIcon from "@material-ui/icons/Receipt";
// // import NotificationsIcon from "@material-ui/icons/Notifications";
// // import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
// // import SettingsIcon from "@material-ui/icons/Settings";
// import Sidebar from "./Sidebar";
//
// // function onClick(e, item) {
// //     window.alert(JSON.stringify(item, null, 2));
// // }
//
// const items = [
//     { name: "home", label: "Home", Icon: AiOutlineHome },
//     {
//         name: "billing",
//         label: "Billing",
//         Icon: AiOutlineHome,
//         items: [
//             { name: "statements", label: "Statements" },
//             { name: "reports", label: "Reports" }
//         ]
//     },
//     "divider",
//     {
//         name: "settings",
//         label: "Settings",
//         Icon: AiOutlineHome,
//         items: [
//             { name: "profile", label: "Profile" },
//             { name: "insurance", label: "Insurance" },
//             "divider",
//             {
//                 name: "notifications",
//                 label: "Notifications",
//                 Icon: AiOutlineHome,
//                 items: [
//                     { name: "email", label: "Email" },
//                     {
//                         name: "desktop",
//                         label: "Desktop",
//                         Icon: AiOutlineHome,
//                         items: [
//                             { name: "schedule", label: "Schedule" },
//                             { name: "frequency", label: "Frequency" }
//                         ]
//                     },
//                     { name: "sms", label: "SMS" }
//                 ]
//             }
//         ]
//     }
// ];
//
// function SideMenu() {
//     return (
//         <div>
//             <Sidebar items={items} />
//         </div>
//     );
// }
//
// export default SideMenu;



import React,{useState} from "react";
import { AiOutlineLeft, AiOutlineMessage, AiOutlineSetting} from "react-icons/ai";
import {Link} from "react-router-dom";

function SideMenu() {
    function sow(e){
     let element = e.target.closest('.has_sub')
        element.classList.toggle("nav-active");
    }
    return (

        <div className="left side-menu">
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

                        <li  className='has_sub'>
                            <a onClick={sow} className='d-flex justify-content-between'>
                                <span>
                                    <AiOutlineMessage size={20}/>
                                    <span className='p-1'>پیام ها</span>
                                </span>
                                <span className="menu-arrow"><AiOutlineLeft size={18}/></span>
                            </a>
                            <ul className="list-unstyled">
                                <li><Link to='/admin/comments'>صندوق ورودی</Link></li>
                            </ul>
                        </li>
                        <li className='has_sub'>
                            <a onClick={sow} className="waves-effect" className='d-flex justify-content-between'>
                                <span>
                                    <AiOutlineSetting size={20}/>
                                    <span className='p-1'>مدیریت / ویرایش</span>
                                </span>
                                <span className="menu-arrow"><AiOutlineLeft size={18}/></span>
                            </a>
                            <ul className="list-unstyled">
                                <li><Link to='/admin/information'>اطلاعات</Link></li>
                                <li><Link to='/admin/skill'>مهارت ها</Link></li>
                                <li><Link to='/admin/service'>سرویس ها</Link></li>
                                <li><Link to='/admin/experience'>تجربیات</Link></li>
                                <li><Link to='/admin/clients'>مشتریان و نظرات</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;