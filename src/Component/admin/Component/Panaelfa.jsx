import React from "react";
function Panaelfa(){
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
                        <h4>عنوان مهارت و درصد</h4>
                        <input/>
                        <input type='range'/>
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
                <h3 className='text-center'>خدمات</h3>
                <div>
                    <div>
                        <h4>انتخاب عکس</h4>
                        <input type='file'/>
                        <h4>انتخاب عنوان</h4>
                        <input/>
                        <h4>شرح عنوان</h4>
                        <input/>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-center'>تجربه</h3>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h4>انتخاب سال شروع</h4>
                        <input/>
                        <h4>انتخاب سال پایان</h4>
                        <input/>
                        <h4>عنوان مدرک</h4>
                        <input/>
                        <h4>شرح مدرک</h4>
                        <input/>
                    </div>
                    <div>
                        <h4>انتخاب سال شروع</h4>
                        <input/>
                        <h4>انتخاب سال پایان</h4>
                        <input/>
                        <h4>عنوان شغلی</h4>
                        <input/>
                        <h4>شرح شغل</h4>
                        <input/>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-center'>کار های اخیر</h3>
            </div>
            <div>
                <h3 className='text-center'>دوستان و نظرات</h3>
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
                    <div>
                        <h4>انتخاب توصیف</h4>
                        <input/>
                    </div>

                </div>
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