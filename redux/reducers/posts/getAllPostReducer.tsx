
//=======================================  TO GET A  POST  =======================================================



// Fonction d'appel asyncrone au service
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getOne} from "../../services/postServices";
import Post from "../../domain/post";

export const getOnePostThunk = createAsyncThunk(
    'post/getOne',
    async (postId:number, thunkAPI) => {
        let response = initialGetOne;

        await getOne(postId).then((value)=>{
            response=value;
        });
        return response;
    }
);

// Modéle du DTO de retour
interface getOnePost {
    entities: Post,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error:null
};

// Valeur initial du DTO de retour
const initialGetOne:getOnePost= {
    entities: {id:0,userId:0,title:"",body:""},
    loading: 'idle',
    error:null
};

// le reducer en question
export const getOnePostSlice= createSlice({
    name:"getOnePost",
    initialState:initialGetOne ,
    reducers:{
        resetGetOne:(state)=> {
            state.loading="idle";
        }
    },
    extraReducers: {
        [getOnePostThunk.fulfilled]:(state,{payload})=>{
            state.loading="succeeded"
            state.entities=payload
        }
    }
})



export const {resetGetOne}=getOnePostSlice.actions;