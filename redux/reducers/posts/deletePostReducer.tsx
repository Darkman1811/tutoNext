
//=======================================  TO UPDATE A  POST  =======================================================



// Fonction d'appel asyncrone au service
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {add, updateService} from "../../services/postServices";
import Post from "../../domain/post";
import {upd} from "../../services/postServices"
import updatePost from "../../../pages/updatePost";

export const updatePostThunk = createAsyncThunk(
    'posts/update',
    async (post:Post, thunkAPI) => {
        let response = initial;
        console.log("updatePostThunk:===>",post);

        await updateService(post).then((value)=>{
            response=value.data;
            console.log("updatePostThunk:===>",value);
        });
        return response;
    }
);

// Modéle du DTO de retour
interface postDTO {
    entities: Post,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error:null
};

// Valeur initial du DTO de retour
const initial:postDTO= {
    entities: {id:0,userId:0,title:"",body:""},
    loading: 'idle',
    error:null
};

// le reducer en question
export const addPostSlice= createSlice({
    name:"updatePost",
    initialState:initial ,
    reducers:{
        resetAdd:(state)=> {
            state.loading="idle";
        }
    },
    extraReducers: {
        [updatePostThunk.fulfilled]:(state,{payload})=>{
            state.loading="succeeded"
            state.entities=payload
        }
    }
})



export const {resetAdd}=addPostSlice.actions;