import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getOnePostThunk} from "../redux/reducers/posts/getOnePostReducer";

function details(){
    const router = useRouter();
    const dispatch=useDispatch();
    const postDetail=useSelector(state => state.getOnepostSliceInfos.entities);
    const {
        query: { id },
    } = router;
    useEffect
    (() => {
        dispatch(getOnePostThunk(id));
    }, []);




    return(
        <div className="row mt-4">
<Link href={"/"} >Retour</Link>
            <div className="col-6 mx-auto">
            <div className={"card"}>
                <div className={"card-header"}>
                    <h1>Id: {postDetail.id}</h1>
                </div>
       <div className={"card-body"}>
            <div>title: {postDetail.title}</div>
            <div>user: {postDetail.userId}</div>
            <div>post: {postDetail.body}</div>
       </div>
         <div className={"card-footer"}>
                    <Link href={{pathname: "/updatePost", query:{id:id}}}>
                        <button className={"btn btn-dark mx-3"}>Update</button>
                    </Link>
                    <Link href={{pathname: "/deletePost", query:{id:id}}}>
                        <button className={"btn btn-danger"}>Delete</button>
                    </Link>
         </div>
            </div>
            </div>
    </div>)


}

export default details;