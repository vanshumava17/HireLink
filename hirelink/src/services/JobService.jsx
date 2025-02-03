import axios from "axios";
import { base_url } from "./BaseUrl";

const postJob = async (job)=>{
    return axios.post(`${base_url}jobs/post`,job)
    .then(result => result.data)
    .catch(error => {throw error;});
}

const getAllJobs = async () =>{
    return axios.get(`${base_url}jobs/getAll`)
    .then(result => result.data)
    .catch((error)=>{
        throw error;
    })
}


const getJob = async (id) =>{
    return axios.get(`${base_url}jobs/get/${id}`)
    .then(result => result.data)
    .catch((error)=>{
        throw error;
    })
}

export {postJob, getAllJobs, getJob };