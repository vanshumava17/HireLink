import { Button, Divider, Text } from "@mantine/core";
import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router";
import { timeAgo } from "../../services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { IoBookmark } from "react-icons/io5";
import { changeProfile } from "../../slices/ProfileSlice";

const JobCard = (props) => {
  // console.log(props);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const handleSaveJob = () => {
    let savedJobs = Array.isArray(profile?.savedJobs) ? [...profile.savedJobs] : [];
  
    if (savedJobs.includes(props.id)) {
      savedJobs = savedJobs.filter((id) => id !== props.id);
    } else {
      savedJobs.push(props.id);
    }
  
    let updatedProfile = { ...profile, savedJobs: savedJobs };
    dispatch(changeProfile(updatedProfile));
  };
  
  return (
    <div className="bg-mine-shaft-900 p-4 w-80 rounded-lg hover:shadow-[0_0_5px_1px_caribbeanGreen.3] !shadow-caribbean-green-400  ">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-mine-shaft-700 rounded-md">
          <img src={`/Icons/${props.company}.png`} alt="" className="h-7" />
        </div>
        <div className="text-mine-shaft-300">
          <h5 className="font-semibold text-mine-shaft-200">
            {props?.jobTitle}
          </h5>
          {/* <p className="text-sm">
            {props?.company} &#x2022; {props?.applicants} Applicants
          </p> */}
          <div className="text-sm">
            <Link
              className="hover:text-caribbean-green-100 "
              to={`/company/${props?.company}`}
            >
              {props?.company}
            </Link>
            &nbsp; &#x2022;
            {props?.applicants != null
              ? ` ${props.applicants.length} Applicants`
              : "No Applicants"}
          </div>
        </div>
        <div className="ml-auto">
          {profile?.savedJobs?.includes(props.id) ? (
            <IoBookmark
              onClick={handleSaveJob}
              className="text-2xl text-caribbean-green-500 cursor-pointer"
            />
          ) : (
            <CiBookmark
              onClick={handleSaveJob}
              className="text-2xl text-caribbean-green-600 cursor-pointer hover:text-caribbean-green-400"
            />
          )}
        </div>
      </div>

      <div className="flex gap-3 items-center justify-center mt-2">
        <p className="py-2 px-2 bg-mine-shaft-800 mt-2 text-caribbean-green-400 rounded-lg text-xs justify-between">
          {props?.experience}
        </p>
        <p className="py-2 px-2 bg-mine-shaft-800 mt-2 text-caribbean-green-400 rounded-lg text-xs justify-between">
          {props?.jobType}
        </p>
        <p className="py-2 px-2 bg-mine-shaft-800 mt-2 text-caribbean-green-400 rounded-lg text-xs justify-between">
          {props?.location}
        </p>
      </div>

      <div className="my-2">
        <Text lineClamp={3} className="!text-sm text-justify">
          {props?.description}
        </Text>
      </div>

      <Divider size="xs" color="mineShaft.3" />
      <div className="flex justify-between items-center my-2">
        <p className="font-bold">₹ {props?.packageOffered} LPA</p>
        <div className="flex items-center gap-1 font-semibold text-mine-shaft-400 text-sm">
          <FaClock className="h-4 w-4 font-bold" stroke={2} />
          {timeAgo(props?.postTime)}
        </div>
      </div>
      <Link to={`/jobs/${props.id}`}>
        <Button className="hover:cursor-pointer min-h-5" fullWidth variant="outline" color="caribbeanGreen.4">
          View
        </Button>
      </Link>
    </div>
  );
};

export default JobCard;
