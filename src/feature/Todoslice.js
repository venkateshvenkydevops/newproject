import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    User:[]
}

const Todoslice = createSlice({
    name:"Userlist",
    initialState,
    reducers:{
        addme:(state,action)=>{
            state.User.push(action.payload)
        },
        deletme:(state,action)=>{
            state.User = state.User.filter((value)=>value.id!==action.payload)

        },
        editme:(state,action)=>{
            const { id, updatetodo } = action.payload;
            const index = state.User.findIndex((val)=>val.id==id);
            if(index!==-1){
        
            state.User[index]={...state.User[index],...updatetodo}
            }
        }

        
    }
})
export const {addme,deletme,editme}= Todoslice.actions
export default Todoslice.reducer