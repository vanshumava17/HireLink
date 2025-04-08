import { Button, Divider } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import JobDescription from "../components/JobDescription/JobDescription";
import { getJob } from "../services/JobService";

const JobDescriptionPage = () => {

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
    <div className="min-h-[100vh] bg-mine-shaft-950 p-4">
      <Divider size="sm" />
      <Link to={"/find-jobs"} className="my-4 inline-block">
        <Button
          variant="light"
          color="caribbeanGreen.4"
          leftSection={<FaArrowLeftLong />}
        >
          Back
        </Button>
      </Link>

      <div className="flex gap-5">
        <JobDescription {...job}/>
      </div>
    </div>
  );
};

export default JobDescriptionPage;
