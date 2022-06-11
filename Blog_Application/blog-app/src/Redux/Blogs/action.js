import * as types from "./actionTypes";
import Axios from "axios";

const fetchBlogPostRequest=(payload)=>{
    return{
        type:types.FETCH_BLOG_POSTS_REQUEST,
        payload
    }
}

const fetchBlogPostSuccess=(payload)=>{
    return{
        type:types.FETCH_BLOG_POSTS_SUCCESS,
        payload
    }
}
const fetchBlogPostFailure=(payload)=>{
    return{
        type:types.FETCH_BLOG_POSTS_FAILURE,
        payload
    }
}

const fetchBlogPost=(payload)=>(dispatch)=>{
    dispatch(fetchBlogPostRequest());
    Axios.get(" http://localhost:8080/blogs")
    .then(r=>dispatch(fetchBlogPostSuccess(r.data))
    )
   
    .catch(e=>dispatch(fetchBlogPostFailure(e.data)))


}
export {fetchBlogPost}

