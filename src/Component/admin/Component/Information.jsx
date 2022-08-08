import React, {useEffect, useState} from "react";
import axios from "axios";

function Information(){
    const [state , setstate] = useState()
    const [loading , setloading] = useState(false)
    const [additem , setadditem] = useState()

    useEffect(()=>{
      axios.get('/api/v1/information')
          .then(res =>{
              setstate(res.data)
              setloading(true)
          })
    },[])

    let EditItem = (item)=>{
        let newlist = state.data.filter(element => item.id != element.id)
        let person = prompt("متن جدید را وارد کنید:", item.value);
        item ={...item , value:person.valueOf()}
        axios.put(`/api/v1/information/${item.id}`,{
            grop:item.grop,
            key:item.key,
            value:person.valueOf()},{headers:{
            'x-api-key': localStorage.getItem('token')
        }}
        ).then(res =>{
        setstate({
            data:[...newlist , item]
        })
        })

    }
    return(
        <>
            {
                !loading ? null :
                    <>

                        {
                            state.data.map(item =>(
                                <div className='mt-5 border p-4' key={item.id}>
                                    <h4>{item.key}</h4>
                                    <h4>{item.value}</h4>
                                    <button className='p-2' onClick={()=>EditItem(item)}>edit</button>
                                </div>
                            ))
                        }
                    </>
            }
        </>
    )
}
export default Information;