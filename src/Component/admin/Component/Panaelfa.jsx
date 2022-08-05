import React,{useEffect} from "react";
import axios from "axios";
function Panaelfa(){
    useEffect(()=>{
        axios.get('https://api-web.a-nateghi.ir/api/v1/information')
            .then(res =>{
                
            })
    },[])
    return(
        <div className='container'>
            <div>
                <h3 className='text-center'> نوار بالا</h3>
                <div>
                    <h4>انتخاب عکس سر صفحه</h4>
                    <input type='file'/>
                </div>
            </div>
            <div>
                <h3 className='text-center'>خانه</h3>
                <div>
                    <div>
                        <h4>انتخاب پروفایل</h4>
                        <input type='file'/>
                    </div>
                    <div>
                        <h4>انتخاب نام</h4>
                        <input/>
                    </div>
                    <div>
                        <h4>انتخاب عنوان شغلی</h4>
                        <input/>
                    </div>

                </div>
            </div>
            <div>
                <h3 className='text-center'>درباره من</h3>
                <div>
                    <div>
                        <h4>انتخاب پروفایل</h4>
                        <input type='file'/>
                    </div>
                    <div>
                        <h4>متن بیوگرافی</h4>
                        <input/>
                    </div>
                    <div>
                        <h4>افزودن رزمه</h4>
                        <input type='file'/>
                    </div>
                    <div>
                        <h4>پروژه های تموم شده</h4>
                        <input/>
                    </div>
                    <div>
                        <h4>قهوه های خورده</h4>
                        <input/>
                    </div>
                    <div>
                        <h4>مشتریان راضی</h4>
                        <input/>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>مدال های گرفته شده</h4>
                        <input/>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-center'>کار های اخیر</h3>
            </div>

            <div>
                <h3 className='text-center'>تماس با من</h3>
                <div>
                    <div>
                        <h4>انتخاب آدرس ایمیل</h4>
                        <input />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Panaelfa;