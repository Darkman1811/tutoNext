
//=======================================  TO ADD A  PROJECT  =======================================================



// Fonction d'appel asyncrone au service
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {add} from "../../services/postServices";
import Post from "../../domain/post";

export const addPostThunk = createAsyncThunk(
    'projects/add',
    async (post:Post, thunkAPI) => {
        let response = initialAdd;

        await add(post).then((value)=>{
            response=value.data;
            console.log("addPostThunk:===>",value);
        });
        return response;
    }
);

// Modéle du DTO de retour
interface addPost {
    entities: Post,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error:null
};

// Valeur initial du DTO de retour
const initialAdd:addPost= {
    entities: {id:0,userId:0,title:"",body:""},
    loading: 'idle',
    error:null
};

// le reducer en question
export const addPostSlice= createSlice({
    name:"addPost",
    initialState:initialAdd ,
    reducers:{
        resetAdd:(state)=> {
            state.loading="idle";
        }
    },
    extraReducers: {
        [addPostThunk.fulfilled]:(state,{payload})=>{
            state.loading="succeeded"
            state.entities=payload
        }
    }
})



export const {resetAdd}=addPostSlice.actions;