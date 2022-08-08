import React, {useEffect, useState} from "react";
import axios from "axios";

function Skill(){
    const [state , setstate] = useState()
    const [loading , setloading] = useState(false)
    const [additem , setadditem] = useState({})


    useEffect(()=>{
        axios.get('api/v1/skills')
            .then(res =>{
                setstate(res.data);
                setloading(true)
            })
    })

    let UpdateColor =(e)=>{
    setadditem(prevState => {
        return{
            ...prevState,
            color:e.target.value
        }
    })
    }
    let UpdateName =(e)=>{
    setadditem(prevState => {
        return{
            ...prevState,
            name:e.target.value
        }
    })
    }
    let UpdatePercent =(e)=>{
    setadditem(prevState => {
        return{
            ...prevState,
            percent:e.target.value
        }
    })
    }

    let AddItem = (e)=>{
        e.preventDefault()
        axios.post('api/v1/skills' ,{
            "title": additem.name,
            "percent": additem.percent,
            "meta": {
                "p": additem.color,
                "x": "xdsf"
            }
        },{headers:{
                'x-api-key': localStorage.getItem('token')
            }}).then(res =>{
            axios.get('api/v1/skills')
                .then(res =>{
                    setstate(res.data);
                })
        })
    }

    let DelateITem = (item)=>{
        axios.delete(`api/v1/skills/${item.id}`,{headers:{
                'x-api-key': localStorage.getItem('token')
            }}).then(res =>{
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
                       <form onSubmit={AddItem}>
                           <h3>افزودن</h3>
                           <h4 className='mt-5'>عنوان مهارت و درصد و رنگ</h4>
                           <input className='d-block mt-5' onChange={UpdateName}/>
                           <input className='d-block' type='range' onChange={UpdatePercent}/>
                           <select name='list' onChange={UpdateColor} required >
                               <option value={null} ></option>
                               <option value='blue' >آبی</option>
                               <option value='red' >قرمز</option>
                               <option value='yellow' >زرد</option>
                               <option value='green' >سبز</option>
                           </select>
                           <button>ذخیره</button>
                       </form>

                       <h3>لیست مهارت ها</h3>
                       {
                           state.data.map(item =>(
                               <div key={item.id} className='mt-5'>
                                   <h4>{item.title}</h4>
                                   <h4>{item.percent}</h4>
                                   <h4>{item.meta.p}</h4>
                                   <button onClick={()=>DelateITem(item)}>حذف</button>
                               </div>
                           ))
                       }
                   </>
            }
        </>
    )
}

export default Skill;