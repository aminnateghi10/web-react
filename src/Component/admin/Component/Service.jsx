import React, {useEffect, useState} from "react";
import axios from "axios";
function Service(){

    const [state , setstate] = useState()
    const [loading , setloading] = useState(false)
    const [additem , setadditem] = useState({
        image:null,
        title:null,
        body:null
    })

    useEffect(()=>{
      axios.get('/api/v1/services')
          .then(res =>{
              setstate(res.data)
              setloading(true)
          })
    },[])


   let DeleteItem = (item)=>{
        axios.delete(`/api/v1/services/${item.id}`,{headers: {
            'x-api-key': localStorage.getItem('token')
            }
        }).then(res =>{
            console.log(item)
            setstate(prevState => {
                let newlist = prevState.data.filter(element => element!= item);
                console.log(newlist)
                return{
                    data:[...newlist]
                }
            })
        })
    }

    let UpdateImage = (e)=>{
        setadditem(prevState => {
            return{
                ...prevState,
                image: e.target.files[0]
            }
        })
    }
    let UpdateTitle = (e)=>{
        setadditem(prevState => {
            return{
                ...prevState,
                title: e.target.value
            }
        })
    }
    let UpdateBody = (e)=>{
        setadditem(prevState => {
            return{
                ...prevState,
                body: e.target.value
            }
        })
    }
    let AddItem = (e)=>{
        e.preventDefault()
        const data = new FormData()
        data.append('file', additem.image)
        data.append('title', additem.title)
        data.append('body', additem.body)
        axios.post('/api/v1/services',data,
            {headers: {
                'x-api-key': localStorage.getItem('token'),
                    'Content-Type': 'application/x-www-form-urlencoded'
            }}
        ).then(res=>{
            axios.get('/api/v1/services')
                .then(res =>{
                    setstate(res.data)
                })
            })
    }



    return(
        <>
            {
                !loading ? null :
                    <>
                        <div>
                            <h3 className='text-center'>??????????</h3>
                            <div>
                                <form onSubmit={AddItem}>
                                    <h4>???????????? ??????</h4>
                                    <input onChange={UpdateImage} type='file' required/>
                                    <h4>???????????? ??????????</h4>
                                    <input onChange={UpdateTitle} type='text' required/>
                                    <h4 type='text'>?????? ??????????</h4>
                                    <input onChange={UpdateBody} required/>
                                    <button type='submit'>??????????</button>
                                </form>
                            </div>
                        </div>
                        <h3 className='mt-5'>???????? ?????????? ????</h3>
                        {
                            state.data.map((item , index) =>(
                                <div className='mt-5' key={index}>
                                    <h5>{index}</h5>
                                    <img width={100} height={100} src={`https://api-web.a-nateghi.ir/${item.image}`}/>
                                    <h5>{item.title}</h5>
                                    <h5>{item.body}</h5>
                                    <button className='p-1' onClick={()=>DeleteItem(item)}>??????</button>
                                </div>
                            ))
                        }
                    </>
            }
        </>
    )
}
export default Service;