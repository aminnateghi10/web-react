import React, {useEffect, useState} from "react";
import axios from "axios";

function Comments(){
    let [state , setstate] = useState()
    let [show , setshow] = useState(true)
    let [loading , setloading] = useState(false)
    let  massage = ()=> {
        setshow(!show)
    }

    useEffect(()=>{
     axios.get('https://api.a-nateghi.ir/api/v1/tickets')
         .then(res =>{
             setstate(res.data)
             setloading(true)
         })
    },[])
    return(
        <>
            {
                !loading ? null :
                    <div className='m-5 p-3 bg-light'>
                        <h4 className='text-center'>لیست پیام ها</h4>
                        <div className='row mt-5'>
                            <h5 className='col-1'>ردیف</h5>
                            <h5 className='col-2'>نام</h5>
                            <h5 className='col-3'>ایمیل</h5>
                            <h5 className='col-3'>موضوع</h5>
                            <h5 className='col-3'>عملیات</h5>
                        </div>
                        {
                            state.data.map((item , index) =>(
                            <div className='d-flex'>
                                <h5 className='col-1'>{index}</h5>
                                <h5 className='col-2'>{item.name}</h5>
                                <h5 className='col-3'>{item.email}</h5>
                                <h5 className='col-3'>{item.subject}</h5>
                                <h5 className='col-3'>
                                    <button className='p-1' onClick={massage} >نمایش متن</button>
                                    <div className={`position-fixed ${show ? 'd-felx' : 'd-none'}`}>erter</div>
                                </h5>
                            </div>
                            ))
                        }
                    </div>
            }
        </>
    )
}

export default Comments;