import React, {useEffect, useState} from "react";
import axios from "axios";

function Experience(){
    const [state , setstate] = useState()
    const [additem , setadditem] = useState()
    const [loading , setloading] = useState(false)

    useEffect(()=>{
      axios.get('/api/v1/experiences')
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
        axios.post('/api/v1/experiences',{
            "type": additem.type,
            "title": additem.title,
            "body": additem.body,
            "start": additem.start,
            "end": additem.end
        },{headers:{'x-api-key': localStorage.getItem('token')}})
            .then(res =>{
                axios.get('/api/v1/experiences')
                    .then(res => {
                        setstate(res.data)
                    })
            })
    }

    let  DeletaItem = (item)=>{
        axios.delete(`/api/v1/experiences/${item.id}`,
            {headers:{'x-api-key': localStorage.getItem('token')}})
            .then(res => {
                setstate(prevState => {
                  let newlist = prevState.data.filter(element => element.id != item.id)
                    console.log(newlist)
                    return{
                        data:[...newlist]
                    }
                })
            })
    }
    return(
        <>
            {
                !loading ? null :
                <>
                    <h3 className='text-center'>??????????</h3>
                    <div>
                        <h4>????????????</h4>
                        <form onSubmit={AddItem} className='mt-5'>
                            <h4>??????</h4>
                            <select name='list' onChange={UpdateType} required >
                                <option></option>
                                <option value='JobExperiences' >?????????? ????????</option>
                                <option value='EducationalExperiences' >?????????? ????????????</option>
                            </select>
                            <h4>???????????? ?????? ????????</h4>
                            <input onChange={UpdateStart} required/>
                            <h4>???????????? ?????? ??????????</h4>
                            <input onChange={UpdateEnd} required/>
                            <h4>?????????? ????????</h4>
                            <input onChange={UpdateTitle} required/>
                            <h4>?????? ????????</h4>
                            <input onChange={UpdateBody} required/>
                            <button>??????????</button>
                        </form>
                    </div>
                    <h3 className='mt-5'>???????? ?????????? ????</h3>
                    {
                        state.data.map((item , index) =>(
                            <div className='mt-5' key={index}>
                                <h5>{index}</h5>
                                <h5>{item.type}</h5>
                                <h5>{item.title}</h5>
                                <h5>{item.body}</h5>
                                <h5>{item.start}</h5>
                                <h5>{item.end}</h5>
                                <button className='p-1' onClick={()=>DeletaItem(item)}>??????</button>
                            </div>
                        ))
                    }
                </>
            }
        </>
    )
}

export default Experience;