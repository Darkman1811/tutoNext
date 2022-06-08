
//=======================================  TO UPDATE A  POST  =======================================================



// Fonction d'appel asyncrone au service
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { deleteService} from "../../services/postServices";
import Post from "../../domain/post";
import {addPostSlice} from "./updatePostReducer";

export const deletePostThunk = createAsyncThunk(
    'posts/delete',
    async (post:Post, thunkAPI) => {
        let response = initialDelete;

        await deleteService(post.id).then((value)=>{
            response=value.data;
            console.log("Detete project reducer : ====>",value)
        });
        return response;
    }
);

// Modéle du DTO de retour
interface deletePostDTO {
    entities: Post,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error:null
};

// Valeur initial du DTO de retour
const initialDelete:deletePostDTO= {
    entities: {id:0,userId:0,title:"",body:""},
    loading: 'idle',
    error:null
};

// le reducer en question
export const deletePostSlice= createSlice({
    name:"deletePost",
    initialState:initialDelete ,
    reducers:{
        resetDelete:(state)=> {
            state.loading="idle";
        }
    },
    extraReducers: {
        [deletePostThunk.fulfilled]:(state,{payload})=>{
            state.loading="succeeded"
            state.entities=payload
        }
    }
})



export const {resetDelete}=deletePostSlice.actions;