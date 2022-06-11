import * as types from "./actionTypes";


const initialState={
    blogs:[],
    loading:false,
    error:""

}
const blogreducer=(state=initialState,action)=>{
    const{type,payload}=action;
    switch(type){
        case types.FETCH_BLOG_POSTS_REQUEST:
        return{
            ...state,
            loading:true,
            error:""
        }
        case types.FETCH_BLOG_POSTS_SUCCESS:
        return{
            ...state,
            loading:true,
            error:""
        }
        case types.FETCH_BLOG_POSTS_FAILURE:
        return{
            ...state,
            loading:true,
            error:""
        }
        default:
            return state;
    }
}
export default blogreducer;