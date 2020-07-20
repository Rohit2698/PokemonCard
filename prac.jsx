import React, { useState,useEffect } from 'react'
import Axios from 'axios';
const Prac=()=>{
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [pass,setPass]=useState();
    const [value,setData]=useState([{}]);
    const [selected,setSelected]=useState();

    
    const url="http://localhost:3000/user";
    useEffect(()=>{
        async function getData(){
            const res=await Axios.get(url);
            res.data.map((item)=>{
                setData((prevItem)=>{
                    return [...prevItem,{"name":item.name,"email":item.email,"pass":item.pass}]
                })
            })
        }
        getData();
        
    },[])

    
    async function setValue(){
        const url="http://localhost:3000/user";
        try{
        Axios.post(url,{"name":name,"email":email,"pass":pass});
        
    }catch(e){}
    window.location.reload(false);    
}

    const deleteItem=(e)=>{
        Axios.delete(url+"/"+selected);
        window.location.reload(false);
    }
    return(
        <>
        Insert:
            User: <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            Email: <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            password: <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <button onClick={setValue}>Click to update</button>
        delete:
        <select onChange={(e)=>setSelected(e.currentTarget.value)}>
            {value.map((item,index)=>{
                return(
                    <>
                    <option key={index} value={index}>{item.name}</option>
                    </>
                )
            })}
            </select>
            <button onClick={deleteItem} >Click to delte</button>
        </>
    )
}
export default Prac;