import React, { useEffect, useState } from "react";
import Sort from "./Sort";
import JobCard from "./JobCard";
// import { jobsList } from "../../data/Data";
import { getAllJobs } from "../../services/JobService";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../slices/FilterSlice";
import { resetSort } from "../../slices/SortSlice";

const Jobs = () => {
  const [jobList, setJobList] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const filter = useSelector((state) => state.filter);
  const sort = useSelector((state) => state.sort);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilter());
    dispatch(resetSort());
    getAllJobs()
      .then((res) => {
        // console.log(res);
        setJobList(res.filter((job) => job.jobStatus === "ACTIVE"));
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  // console.log(jobList);

  useEffect(() => {
    let filterJob = jobList;

    // console.log(filterJob);

    if (filter["Job Title"] && filter["Job Title"].length > 0) {
      filterJob = filterJob.filter((job) =>
        filter["Job Title"].some(
          (title) =>
            job.jobTitle &&
            job.jobTitle.toLowerCase().includes(title.toLowerCase())
        )
      );
    }

    if (filter["Location"] && filter["Location"].length > 0) {
      filterJob = filterJob.filter((job) =>
        filter["Location"]?.some(
          (location) =>
            job.location &&
            job.location.toLowerCase().includes(location.toLowerCase())
        )
      );
    }

    if (filter["Experience"] && filter["Experience"].length > 0) {
      filterJob = filterJob.filter((job) =>
        filter["Experience"]?.some(
          (experience) =>
            job.experience &&
            job.experience.toLowerCase().includes(experience.toLowerCase())
        )
      );
    }

    if (filter["Job Type"] && filter["Job Type"].length > 0) {
      filterJob = filterJob.filter((job) =>
        filter["Job Type"]?.some(
          (jobType) =>
            job.jobType &&
            job.jobType.toLowerCase().includes(jobType.toLowerCase())
        )
      );
    }

    if (filter.salary && filter.salary.length > 0) {
      filterJob = filterJob.filter(
        (job) =>
          filter.salary[0] <= job.packageOffered &&
          job.packageOffered <= filter.salary[1]
      );
    }

    setFilteredJobs(filterJob);
  }, [filter, jobList]);

  useEffect(() => {
    if (sort === "Most Recent") {
      setJobList(
        [...jobList].sort(
          (a, b) =>
            new Date(b.postTime).getTime() - new Date(a.postTime).getTime()
        )
      );
    } else if (sort === "Salary (Low to High)") {
      setJobList(
        [...jobList].sort((a, b) => a.packageOffered - b.packageOffered)
      );
    } else if (sort === "Salary (High to Low)") {
      setJobList(
        [...jobList].sort((a, b) => b.packageOffered - a.packageOffered)
      );
    }
  }, [sort]);

  return (
    <div className="px-5 mt-10">
      <div className="flex justify-between">
        {filteredJobs.length ? (
          <h4 className="font-bold text-2xl">Jobs</h4>
        ) : (
          <p></p>
        )}
        <Sort sort="job" />
      </div>
      <div className="flex flex-wrap items-center gap-9 mx-10 py-10 justify-center">
        {filteredJobs.length ? (
          filteredJobs.map((item, index) => (
            <JobCard key={index} index={index} {...item} />
          ))
        ) : (
          <p className="text-center text-xl font-semibold">No Jobs</p>
        )}

        {/* <JobCard {...jobList} />; */}
      </div>
    </div>
  );
};

export default Jobs;
