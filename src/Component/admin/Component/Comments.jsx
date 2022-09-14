import React, {useEffect, useState} from "react";
import axios from "axios";

function Comments(){
    let [state , setstate] = useState()
    let [loading , setloading] = useState(false)

    let ShowMassage = (item)=>{
        console.log(item)
        alert(item.body);
    }
    let DeleteMassage = (item)=>{
        console.log(item)
        axios.delete(`https://api.a-nateghi.ir/api/v1/tickets/${item.id}`)
            .then(res => {
                 let newlist = state.data.filter(element=> element.id != item.id)
                setstate({data: newlist})
            })
            .catch(err => alert(err.message) )        // alert(item.body);
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
                            <div className='d-flex' key={index}>
                                <h5 className='col-1'>{index}</h5>
                                <h5 className='col-2'>{item.name}</h5>
                                <h5 className='col-3'>{item.email}</h5>
                                <h5 className='col-3'>{item.subject}</h5>
                                <h5 className='col-3'>
                                    <button className='p-1 h6' onClick={()=>ShowMassage(item)} >نمایش متن</button>
                                    <button className='p-1 h6 mx-1' onClick={()=>DeleteMassage(item)} >حذف پیام</button>
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