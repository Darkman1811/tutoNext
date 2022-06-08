import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPostThunk, resetAdd} from "../redux/reducers/posts/addPostReducer";
import Post from "../redux/domain/post";
import {useRouter} from "next/router"
import {useForm} from "react-hook-form";
import Link from "next/link";


const  addPost=(props)=>{

    const {register,handleSubmit} =useForm();
    const postAdded=useSelector(state=>state.addPostSliceInfos);
    const dispatch=useDispatch();
    const router=useRouter();


    const onSubmit=(data)=>{
        dispatch(addPostThunk(data));
    }

    useEffect(() => {
        if(postAdded.loading==="succeeded"){
            dispatch(resetAdd());
            router.push("/")
        }
        console.log(postAdded);
    }, [postAdded]);


    return (<div className="container">
        {console.log("props:=====>", props)}
        <Link href={"/"} >Retour</Link>

        <h2>Adding a post</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div  className="form-group">
            <label htmlFor="title">Id:</label>
            <input className="form-control" type="text" id="id" name="id" {...register("id")}/>
            <label htmlFor="title">UserId:</label>
            <input className="form-control" type="text" id="userId" name="userId" {...register("userId")}/>
            <label htmlFor="title">First name:</label>
            <input className="form-control" type="text" id="title" name="title" {...register("title")}/>
            <label htmlFor="last">Last name:</label>
            <input className="form-control" type="text" id="body" name="body" {...register("body")}/>
            <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    </div>)
}

export default addPost;