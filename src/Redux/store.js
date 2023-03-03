import {configureStore} from "@reduxjs/toolkit"
import PostReducer from './FetchApis/postSlice' 

export default configureStore({
    reducer:{
        post: PostReducer,
    },
});