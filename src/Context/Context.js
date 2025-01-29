import { createContext, useState } from "react";

export const ContextProvider = createContext();


const Contxtchild = ({children}) =>{

    const[edit,setedit]= useState(null)
const[input,setInput]= useState({
    fname:"",
    email:"",
    age:""
})
const[user,setUser]= useState([])
const handlechange =(e) =>{
    const {name,value}= e.target;
    setInput((prev)=>({...prev,[name]:value}))

}
const handleclick =() =>{
    if(edit){
        setUser((prev) => prev.map((value) => (value.id == edit ? { ...value, ...input } : value)))
        setedit(null); 
    }
    else{
        setUser((prev)=>([...prev,{id:Date.now(),...input}]))
    }
     
}
const handledelete =(id) =>{

    setUser((prev)=>prev.filter((value)=>value.id!==id))

}
const handleedit =(value) =>{
    setedit(value.id);
    setInput({
        fname:value.fname,
        email:value.email,
        age:value.age
    })


}
   return(
<ContextProvider.Provider value={{input,handlechange,handleclick,user,handledelete,handleedit}}>
        {children}
    </ContextProvider.Provider>
   )
    
}

export default Contxtchild;