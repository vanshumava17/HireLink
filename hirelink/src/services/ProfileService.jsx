import axios from "axios";
import { BiAlarm } from "react-icons/bi";
import { base_url } from "./BaseUrl";

const getProfile = async (id)=>{
    return axios.get(`${base_url}profiles/get/${id}`)
    .then(result=>result.data)
    .catch(error=>{throw error;});
}

const updateProfile= async (profile)=>{
    return axios.put(`${base_url}profiles/update`,profile,{
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then(result=>result.data)
    .catch(error=>{throw error;});
}

const getAllProfiles = async () => {
    return axios.get(`${base_url}profiles/getAll`)
    .then(result=>result.data)
    .catch(error=>{throw error;});
}

export { getProfile, updateProfile, getAllProfiles};