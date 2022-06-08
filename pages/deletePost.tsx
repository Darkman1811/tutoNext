import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getOnePostThunk} from "../redux/reducers/posts/getOnePostReducer";
import {useForm} from "react-hook-form";
import {addPostThunk} from "../redux/reducers/posts/addPostReducer";
import {updatePostThunk} from "../redux/reducers/posts/updatePostReducer";
import Post from "../redux/domain/post";
import {deletePostThunk} from "../redux/reducers/posts/deletePostReducer";

function deletePost(){
    const router = useRouter();
    const dispatch=useDispatch();
    const {register,handleSubmit} =useForm();

    const postDetail=useSelector(state => state.getOnepostSliceInfos.entities);
    const {
        query: { id },
    } = router;
    useEffect
    (() => {
        dispatch(getOnePostThunk(id));
    }, []);



    const onSubmit=(data:Post)=>{
        dispatch(deletePostThunk(data));
    }

    return(<div>


        <div>
            <Link href={"/"} >Retour</Link>

            <h2>Delete a post</h2>
    Do you realy want to delete this post:
            <h1>Id: {postDetail.id}</h1>
            <div>title: {postDetail.title}</div>
            <div>user: {postDetail.userId}</div>
            <div>post: {postDetail.body}</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                  <button type="submit">Delete</button>
            </form>
        </div>
    </div>)
}

export default deletePost;