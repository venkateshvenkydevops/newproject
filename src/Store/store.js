import {configureStore} from "@reduxjs/toolkit";
import Todoreducer from "../feature/Todoslice"
const Store = configureStore({
    reducer:{
        Userlist:Todoreducer
    }
})
export default Store;