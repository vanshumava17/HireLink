import React from "react";
import { jobsList } from "../../data/Data";
import JobCard from "../FindJob/JobCard";

const Job = () => {
  return (
    <div className="flex flex-wrap items-center gap-5 mx-5 py-10">
      {jobsList.map((item, index) => {
        return <JobCard key={index} {...item} />;
      })}
    </div>
  );
};

export default Job;
