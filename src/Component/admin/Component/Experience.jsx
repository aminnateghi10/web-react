import React, {useEffect, useState} from "react";
import axios from "axios";

function Experience(){
    const [state , setstate] = useState()
    const [additem , setadditem] = useState()
    const [loading , setloading] = useState(false)

    useEffect(()=>{
      axios.get('https://api-web.a-nateghi.ir/api/v1/experiences')
          .then(res => {
              setstate(res.data)
              setloading(true)
          })
    },[])

    let UpdateType = (e)=>{
        setadditem(prevState => {
            return{
                ...prevState,
                type:e.target.value
            }
        })
    }
    let UpdateStart = (e)=>{
        setadditem(prevState => {
            return{
                ...prevState,
                start:e.target.value
            }
        })
    }
    let UpdateEnd = (e)=>{
        setadditem(prevState => {
            return{
                ...prevState,
                end:e.target.value
            }
        })
    }
    let UpdateTitle = (e)=>{
        setadditem(prevState => {
            return{
                ...prevState,
                title:e.target.value
            }
        })
    }
    let UpdateBody = (e)=>{
        setadditem(prevState => {
            return{
                ...prevState,
                body:e.target.value
            }
        })
    }
    let AddItem = (e)=>{
        e.preventDefault()
        axios.post('https://api-web.a-nateghi.ir/api/v1/experiences',{
            "type": additem.type,
            "title": additem.title,
            "body": additem.body,
            "start": additem.start,
            "end": additem.end
        },{headers:{'x-api-key': localStorage.getItem('token')}})
            .then(res =>{
                axios.get('https://api-web.a-nateghi.ir/api/v1/experiences')
                    .then(res => {
                        setstate(res.data)
                    })
            })
    }
    return(
        <>
            {
                !loading ? null :
                <>
                    <h3 className='text-center'>تجربه</h3>
                    <div>
                        <h4>افزودن</h4>
                        <form onSubmit={AddItem} className='mt-5'>
                            <h4>نوع</h4>
                            <select name='list' onChange={UpdateType} required >
                                <option></option>
                                <option value='JobExperiences' >تجربه کاری</option>
                                <option value='EducationalExperiences' >تجربه آموزشی</option>
                            </select>
                            <h4>انتخاب سال شروع</h4>
                            <input onChange={UpdateStart} required/>
                            <h4>انتخاب سال پایان</h4>
                            <input onChange={UpdateEnd} required/>
                            <h4>عنوان مدرک</h4>
                            <input onChange={UpdateTitle} required/>
                            <h4>شرح مدرک</h4>
                            <input onChange={UpdateBody} required/>
                            <button>ذخیره</button>
                        </form>
                    </div>
                    <h3 className='mt-5'>لیست تجربه ها</h3>
                    {
                        state.data.map((item , index) =>(
                            <div className='mt-5' key={index}>
                                <h5>{index}</h5>
                                <h5>{item.type}</h5>
                                <h5>{item.title}</h5>
                                <h5>{item.body}</h5>
                                <h5>{item.start}</h5>
                                <h5>{item.end}</h5>
                                <button className='p-1'>حذف</button>
                            </div>
                        ))
                    }
                </>
            }
        </>
    )
}

export default Experience;