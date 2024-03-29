import axios from "axios";
import Post from "../domain/post";

const    headers = {'Access-Control-Allow-Origin': '*'};
const BASE_URL="https://jsonplaceholder.typicode.com/posts";

export const add= async (post:Post) => {
    return await axios.post(BASE_URL, post, headers).then(project => {
        return  project.data;
    })

}

export const getAll=  () => {
    return  axios.get(BASE_URL+"?_limit=10", headers);
}


export const deleteService=  (id:number) => {
    return  axios.delete(BASE_URL+"/"+id, headers);
}

export const updateService= (post:Post)=>{
    return axios.put(BASE_URL+"/"+post.id,post,headers);
}

export const getOne= async (id:number) => {
    return await  axios.get(BASE_URL+"/"+id, headers).then(project => {
        return   project.data;
    })

}