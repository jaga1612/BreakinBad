import { combineReducers } from "redux";



const charectorList = (state=[],action) =>{
    if(action.type==="LIST"){
        return [...action.payload]
    }else if (action.type==="DETAILS"){
        return [...action.payload]
    } else return state
}

const isFetchCompleted = (state=false,action)=>{
    return action.type==='FETCHCOMPLETED'?action.payload:state;
}

export default combineReducers({charector:charectorList,isFetchCompleted})


