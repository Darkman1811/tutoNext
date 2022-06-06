import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPostThunk} from "../redux/reducers/posts/addPostReducer";
import Post from "../redux/domain/post";
import {useRouter} from "next/router"
import {useForm} from "react-hook-form";
import Link from "next/link";


const  addPost=()=>{

    const {register,handleSubmit} =useForm();
    const postAdded=useSelector(state=>state.addPostSliceInfos.entities);
    const dispatch=useDispatch();
   // const [post, setPost] = useState<Post>({id:0,userId:0,title:"",body:""});
    const onSubmit=(data)=>{
        dispatch(addPostThunk(data));
    }

    useEffect(() => {
     //  router.push
    }, [postAdded]);


    return (<div>
        <Link href={"/"} >Retour</Link>

        <h2>Adding a post</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Id:</label>
            <input type="text" id="id" name="id" {...register("id")}/>
            <label htmlFor="title">UserId:</label>
            <input type="text" id="userId" name="userId" {...register("userId")}/>
            <label htmlFor="title">First name:</label>
            <input type="text" id="title" name="title" {...register("title")}/>
            <label htmlFor="last">Last name:</label>
            <input type="text" id="body" name="body" {...register("body")}/>
            <button type="submit">Submit</button>
        </form>
    </div>)
}

export default addPost;