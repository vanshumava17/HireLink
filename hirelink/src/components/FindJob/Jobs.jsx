import React, { useEffect, useState } from "react";
import Sort from "./Sort";
import JobCard from "./JobCard";
// import { jobsList } from "../../data/Data";
import { getAllJobs } from "../../services/JobService";

const Jobs = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    getAllJobs()
      .then((res) => {
        console.log(res);
        setJobList(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  // console.log(jobList);

  return (
    <div className="px-5 mt-10">
      <div className="flex justify-between">
        <h4 className="font-bold text-2xl">Recommended Jobs</h4>
        <Sort />
      </div>
      <div className="flex flex-wrap items-center gap-9 mx-10 py-10">
        {jobList.map((item, index) => {
          return <JobCard key={index} index={index} {...item} />;
        })}
        {/* <JobCard {...jobList} />; */}
      </div>
    </div>
  );
};

export default Jobs;
