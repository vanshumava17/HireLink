import { Button, Divider } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router";
import ApplyJob from "../components/ApplyJob/ApplyJob";
import { getJob } from "../services/JobService";

const ApplyJobPage = () => {

  const navigate = useNavigate();
  const {id} = useParams();
  const [job, setJob] = useState(null);
  useEffect(()=>{
    window.scrollTo(0,0);
    getJob(id)
    .then((res)=>{
      setJob(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[id])

  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 px-2">
      <Divider size="sm" />

        <Button
          my="md"
          onClick={()=>navigate(-1)}
          variant="light"
          color="caribbeanGreen.4"
          leftSection={<FaArrowLeftLong />}
        >
          Back
        </Button>

      <ApplyJob {...job}/>
    </div> 
  );
};

export default ApplyJobPage;
