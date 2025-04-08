import { Button, Divider, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { timeAgo } from "../../services/Utilities";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../slices/ProfileSlice"


const Card = (props) => {
 
 const  dispatch = useDispatch();
  const profile = useSelector((state)=>state.profile);

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
    <Link to={`/jobs/${props.id}`} className="bg-mine-shaft-900 p-4 w-80 rounded-lg hover:shadow-[0_0_5px_1px_yellow] !shadow-caribbean-green-400 cursor-pointer min-h-56">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-mine-shaft-700 rounded-md">
          <img src={`/Icons/${props?.company}.png`} alt="" className="h-7" />
        </div>
        <div className="text-mine-shaft-300">
          <h5 className="font-semibold text-mine-shaft-200">
            {props.jobTitle}
          </h5>
          <p className="text-sm">
            {props.company} &#x2022; {props.applicants ? props.applicants.length : 0  } Applicants
          </p>
        </div>
        <div className="ml-12">
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
          {props.experience}
        </p>
        <p className="py-2 px-2 bg-mine-shaft-800 mt-2 text-caribbean-green-400 rounded-lg text-xs justify-between">
          {props.jobType}
        </p>
        <p className="py-2 px-2 bg-mine-shaft-800 mt-2 text-caribbean-green-400 rounded-lg text-xs justify-between">
          {props.location}
        </p>
      </div>

      <div className="my-2">
        <Text lineClamp={3} className="!text-sm text-justify">
          {props.description}
        </Text>
      </div>

      <Divider size="xs" color="mineShaft.3" />
      <div className="flex justify-between items-center my-2">
        <p className="font-bold">₹ {props.packageOffered} LPA</p>

        <div className="flex items-center gap-1 font-semibold text-mine-shaft-400 text-sm">
          <FaClock className="h-4 w-4 font-bold" stroke={2} />
          {props.applied || props.interviewing? "Applied " : props.offerd? "Interviewed":"Posted"}
          {timeAgo(props.postTime)}
        </div>
       </div>

      {(props.offered || props.interviewing) && (
        <Divider size="xs" color="mineShaft.3" />
      )}
      {props.offered ? (
        <div className="flex gap-3 mt-2">
          <Button variant="outline" color="caribbeanGreen.4" fullWidth>
            Accept
          </Button>

          <Button variant="light" color="caribbeanGreen.4" fullWidth>
            Reject
          </Button>
        </div>
      ) : (
        <></>
      )}

      {props.interviewing ? (
        <div className="flex gap-2 items-center my-2">
          <FaCalendarAlt className="text-caribbean-green-400 !h-5 !w-5" />
          <p className="font-semibold text-mine-shaft-300">
            <span className="text-mine-shaft-200">
              Sun, 25 August &bull;{" "}
              <span className="!text-mine-shaft-400"> 10:00 AM </span>
            </span>
          </p>
        </div>
      ) : (
        <></>
      )}
    </Link>
  );
};

export default Card;
