import React, {useEffect, useState} from "react";
import axios from "axios";

function Clients(){
    const [state , setstate] = useState({})
    const [loading , setloading] = useState(false)
    const [additem , setadditem] = useState({})

    useEffect(()=>{
      axios.get('https://api-web.a-nateghi.ir/api/v1/clients')
          .then(res =>{
              setstate(res.data)
              setloading(true)
          })
    },[])

   let UpdateImg =(e)=>{
        setadditem(prevState => {
            return {
                ...prevState,
                img:e.target.files[0]
            }
        })
    }
    let UpdateName =(e)=>{
        setadditem(prevState => {
           return {
               ...prevState,
               name:e.target.value
           }
        })
    }
    let UpdateJob =(e)=>{
        setadditem(prevState => {
           return {
               ...prevState,
               job:e.target.value
           }
        })
    }
    let UpdateBody =(e)=>{
        setadditem(prevState => {
           return {
               ...prevState,
               body:e.target.value
           }
        })
    }

    let AddItem = (e)=>{
        e.preventDefault();
        const data = new FormData()
        data.append('file', additem.img)
        data.append('name', additem.name)
        data.append('job', additem.job)
        data.append('body', additem.body)

        axios.post('https://api-web.a-nateghi.ir/api/v1/clients', data ,
        {headers: {
            'x-api-key': localStorage.getItem('token'),
                'Content-Type': 'application/x-www-form-urlencoded'
        }}).then(res => {
            axios.get('https://api-web.a-nateghi.ir/api/v1/clients')
                .then(res =>{
                    setstate(res.data)
                })
        })
    }

    let DeleteIem = (item)=>{
        axios.delete(`https://api-web.a-nateghi.ir/api/v1/clients/${item.id}`,{headers:{
                'x-api-key': localStorage.getItem('token')
            }}).then(res => {
                let newlist = state.data.filter(element => element.id != item.id)
            setstate({
                data:[...newlist]
            })
        })
    }

    return(
        <>
            {
                !loading ? null :
                    <>
                        <div>
                            <h3 className='text-center'>دوستان و نظرات</h3>
                            <form onSubmit={AddItem}>
                                <div>
                                    <h4>انتخاب پروفایل</h4>
                                    <input type='file' onChange={UpdateImg} required/>
                                </div>
                                <div>
                                    <h4>انتخاب نام</h4>
                                    <input onChange={UpdateName} required/>
                                </div>
                                <div>
                                    <h4>انتخاب عنوان شغلی</h4>
                                    <input onChange={UpdateJob} required/>
                                </div>
                                <div>
                                    <h4>انتخاب توصیف</h4>
                                    <input onChange={UpdateBody} required/>
                                </div>
                                <button className='mt-5 p-1'>ذخیره</button>

                            </form>
                        </div>

                        <h3 className='mt-5'>لیست نظرات</h3>
                        {
                            state.data.map(item =>(
                                <div key={item.id} className='mt-5'>
                                    <img width={100} height={100} src={`https://api-web.a-nateghi.ir/${item.img}`}/>
                                    <h4>{item.name}</h4>
                                    <h4>{item.job}</h4>
                                    <h4>{item.body}</h4>
                                    <button onClick={()=>DeleteIem(item)}>حذف</button>
                                </div>
                            ))
                        }

                    </>
            }
        </>
    )
}

export default Clients;