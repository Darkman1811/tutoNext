import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllPostSlice, getAllPostThunk} from "../redux/reducers/posts/getAllPostReducer";
import Post from "../redux/domain/post";
import {getAll} from "../redux/services/postServices";

const Home: NextPage = (props) => {


  return (
      <div  className="container container-fluid">
      <h1>Liste de posts</h1>
        <Link href={"/addPost"}>
            <button className="btn btn-primary">Ajouter</button>
        </Link>
          <div className="row">
        {
            props.myPosts?.map(post=>{

               return (

                   <div className="col-3 m-1"   key={post.id}>
                   <div className="card" style={{height:350}}     >
                       <img className="card-img-top"  src={"https://dummyimage.com/640x360/fff/aaa"}  alt="Card image cap"/>
                           <div className="card-body">
                               <h5 className="card-title">{post.id}:{post.userId}</h5>
                               <p className="card-text">{post.title}</p>

                           </div>
                       <div className={"card-footer"}>
                           <Link href={ {pathname: "/details", query:{id:post.id}}}>Details</Link>
                       </div>
                   </div>
                   </div>
             )
           })

        }
          </div>
    </div>

  )
}

export async function getStaticProps(context) {

    let allPosts = null;

    await getAll().then((value)=>{
        allPosts=value.data;
    });

    return {
        props: {
            testData:"hello",
            myPosts:allPosts,
        },
    }
}
export default Home;
