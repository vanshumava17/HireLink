import React from "react";
import Sort from "./Sort";
import JobCard from "./JobCard";
import { jobsList } from "../../data/Data";

const Jobs = () => {
  return (
    <div className="px-5 mt-10">
      <div className="flex justify-between">
        <h4 className="font-bold text-2xl">Recommended Jobs</h4>
        <Sort />
      </div>
      <div className="flex flex-wrap items-center gap-9 mx-10 py-10">
        {jobsList.map((item, index) => {
          return <JobCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Jobs;
