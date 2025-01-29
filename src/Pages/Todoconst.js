import React, { useContext } from 'react'
import { ContextProvider } from '../Context/Context'

const Todoconst = () => {
  const {handlechange,input,handleclick,user,handledelete,handleedit}=  useContext(ContextProvider);

  return (
    <div>
       <input type="text" placeholder='enter name' value={input.fname} name="fname" onChange ={handlechange}/>
       <input type="email" placeholder='enter name' value={input.email} name="email" onChange ={handlechange}/>
       <input type="age" placeholder='enter name' value={input.age} name="age" onChange ={handlechange}/>
       <button onClick ={handleclick}>Click me</button>
<br/>

<ul>
    {user.map((val)=>
      <li key ={val.id}>
          <p>Nmae:{val.fname}</p>
          <p>Email:{val.email}</p>
          <p>Age:{val.ag}</p>
          <button onClick={()=>handleedit(val)}>Edit</button>
          <button onClick ={()=>handledelete(val.id)}>Delete</button>
      </li>
    )}
  
</ul>
    </div>
  )
}

export default Todoconst