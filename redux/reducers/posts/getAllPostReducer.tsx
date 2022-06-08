
//=======================================  TO GET A  POST  =======================================================



// Fonction d'appel asyncrone au service
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAll, getOne} from "../../services/postServices";
import Post from "../../domain/post";

export const getAllPostThunk = createAsyncThunk(
    'post/getAll',
    async ( thunkAPI) => {
        let response = initialGetAll;

        await getAll().then((value)=>{
            response=value.data;
        });
        return response;
    }
);

// Modéle du DTO de retour
interface getAllPost {
    entities: Post,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error:null
};

// Valeur initial du DTO de retour
const initialGetAll:getAllPost= {
    entities: null,
    loading: 'idle',
    error:null
};

// le reducer en question
export const getAllPostSlice= createSlice({
    name:"getAllPost",
    initialState:initialGetAll ,
    reducers:{
        resetGetall:(state)=> {
            state.loading="idle";
        }
    },
    extraReducers: {
        [getAllPostThunk.fulfilled]:(state,{payload})=>{
            state.loading="succeeded"
            state.entities=payload
        }
    }
})



export const {resetGetall}=getAllPostSlice.actions;