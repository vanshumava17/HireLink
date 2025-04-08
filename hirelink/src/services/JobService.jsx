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

const applyJob = async (id,applicant) =>{
    return axios.post(`${base_url}jobs/apply/${id}`,applicant)
    .then(result => result.data)
    .catch((err)=>{
        throw err;
    })
}

const getJobsPostedBy = async (postedBy) =>{
    return axios.get(`${base_url}jobs/postedBy/${postedBy}`)
    .then(result => result.data)
    .catch((err)=>{
        throw err;  
    })
}

const changeApplicationStatus = async (application) =>{
    return axios.post(`${base_url}jobs/changeApplicationStatus`, application)
    .then(result => result.data)
    .catch((err)=>{
        throw err;
    })
}

export {postJob, getAllJobs, getJob, applyJob, getJobsPostedBy, changeApplicationStatus };