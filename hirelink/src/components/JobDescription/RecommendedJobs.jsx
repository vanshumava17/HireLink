import React from "react";
import { jobsList } from "../../data/Data";
import JobCard from "../FindJob/JobCard";

const RecommendedJobs = () => {
  return (
    <div className="flex flex-col gap-4">
      {jobsList.slice(0, 4).map((item, index) => {
        return <JobCard key={index} {...item} />;
      })}
    </div>
  );
};

export default RecommendedJobs;
