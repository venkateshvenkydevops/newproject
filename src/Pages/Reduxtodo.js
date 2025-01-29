import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addme, deletme,editme } from '../feature/Todoslice'

const Reduxtodo = () => {
const dispatch =useDispatch();
const [isEditing, setIsEditing] = useState(null);
const value=useSelector((state)=>state.Userlist.User)
    const[input,setInput]= useState({
        fname:"",
        email:"",
        age:""
    })
    const handlechange =(e) =>{
        const {name,value}= e.target;
        setInput((prev)=>({...prev,[name]:value}))
    
    }
    const handleclick =() =>{
        if(isEditing){
            dispatch(editme({id:isEditing,updatetodo:input}))
        }
        else{
            dispatch(addme({id:Date.now(),...input}))
        }
        setInput({ fname: "", email: "", age: "" }); // Clear the input fields
    }
    console.log("valllss",value)
    const handledelete =(id)=>{
      dispatch(deletme(id))
    }
    const handleEdit =(val) =>{
        setIsEditing(val.id)
        setInput({
            fname: val.fname,
            email: val.email,
            age: val.age,
          });
    }
  return (
    <div>
  <input type="text" placeholder='enter name' value={input.fname} name="fname" onChange ={handlechange}/>
       <input type="email" placeholder='enter name' value={input.email} name="email" onChange ={handlechange}/>
       <input type="age" placeholder='enter name' value={input.age} name="age" onChange ={handlechange}/>
       <button onClick ={handleclick}>{isEditing?"Udate":"ADD"} me</button>
       <br/>

       <ul>
        {value.map((val)=>
     
  <li key ={val.id}>
          <p>Nmae:{val.fname}</p>
          <p>Email:{val.email}</p>
          <p>Age:{val.age}</p>
          {/* <button onClick={()=>handleedit(val)}>Edit</button> */}
          <button onClick={() => handleEdit(val)}>Edit</button>
          <button onClick ={()=>handledelete(val.id)}>Delete</button>
     
     </li>
        )}
   
       </ul>
    </div>
  )
}

export default Reduxtodo