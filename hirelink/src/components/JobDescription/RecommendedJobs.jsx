import React, { useEffect, useState } from "react";
import { jobsList } from "../../data/Data";
import JobCard from "../FindJob/JobCard";
import { useParams } from "react-router";
import { getAllJobs } from "../../services/JobService";

const RecommendedJobs = () => {
  const { id } = useParams();
  const [jobList, setJobList] = useState(null);

  useEffect(() => {
    getAllJobs()
      .then((res) => {
        // console.log(res);
        setJobList(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl font-semibold mb-5">Recommended Jobs</div>
      <div className="flex flex-col flex-wrap gap-5 justify-between">
        Recommended Jobs
      </div>
      {
        jobList?.map((job,index)=> index<6 && id!=job.id && <JobCard key={index} {...job}/>)
      }
    </div>
  );
};

export default RecommendedJobs;
