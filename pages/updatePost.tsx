import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getOnePostThunk} from "../redux/reducers/posts/getOnePostReducer";
import {useForm} from "react-hook-form";
import {addPostThunk} from "../redux/reducers/posts/addPostReducer";
import {resetUpdate, updatePostThunk} from "../redux/reducers/posts/updatePostReducer";
import Post from "../redux/domain/post";

function updatePost(){
    const router = useRouter();
    const dispatch=useDispatch();
    const {register,handleSubmit} =useForm();

    const postDetail=useSelector(state => state.getOnepostSliceInfos.entities);
    const postUpdated=useSelector(state => state.updatePostSliceInfos);
    const {
        query: { id },
    } = router;
    useEffect
    (() => {
        dispatch(getOnePostThunk(id));
    }, []);


    useEffect(()=>{
     if(postUpdated.loading==="succeeded"){
         dispatch(resetUpdate());
         router.push('/');
     }
        console.log(postUpdated);
    },[postUpdated])

    const onSubmit=(data:Post)=>{
        dispatch(updatePostThunk(data));
    }

    return(<div>


        <div className={"container"}>
            <Link href={"/"} >Retour</Link>

            <h2>Update a post</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form form-group">
                <label htmlFor="title">Id:</label>
                <input className="form-control"  type="text" id="id" defaultValue={postDetail.id} name="id" {...register("id")}/>
                <label htmlFor="title">UserId:</label>
                <input className="form-control"  type="text" id="userId" defaultValue={postDetail.userId}  name="userId" {...register("userId")}/>
                <label htmlFor="title">First name:</label>
                <input className="form-control"  type="text" id="title" defaultValue={postDetail.title}  name="title" {...register("title")}/>
                <label htmlFor="last">Last name:</label>
                <input className="form-control"  type="text" id="body" name="body" defaultValue={postDetail.body}  {...register("body")}/>
                <button  className={"btn btn-dark mt-1"} type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>)
}

export default updatePost;