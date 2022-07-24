import BBApi from "../api"

export const getCharectorList = ()=>{
    return async (dispatch)=>{
        const response = await BBApi.get("characters")

        dispatch({type:"LIST",
    payload:response.data})
    dispatch(isFetchCompleted(true))
    }
}

export const getCharector = (id)=>{
    return async (dispatch)=>{
        const response = await BBApi.get(`characters/${id}`)
        dispatch({type:"DETAILS",
    payload:response.data})
        dispatch(isFetchCompleted(true))
    }
}

export const isFetchCompleted = (data)=>{
    return {type:"FETCHCOMPLETED",payload:data}
}