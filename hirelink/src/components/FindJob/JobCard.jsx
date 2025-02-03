import { Divider, Text } from "@mantine/core";
import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = (props) => {
  console.log(props);

  return (
    <Link
      to={"/jobs"}
      className="bg-mine-shaft-900 p-4 w-80 rounded-lg hover:shadow-[0_0_5px_1px_yellow] !shadow-caribbean-green-400 cursor-pointer min-h-56"
    >
      <div className="flex items-center gap-2">
        <div className="p-2 bg-mine-shaft-700 rounded-md">
          <img src={props?.img} alt="" className="h-7" />
        </div>
        <div className="text-mine-shaft-300">
          <h5 className="font-semibold text-mine-shaft-200">
            {props?.jobTitle}
          </h5>
          {/* <p className="text-sm">
            {props?.company} &#x2022; {props?.applicants} Applicants
          </p> */}
          <p className="text-sm">
            {props?.company}&nbsp;
            &#x2022;
            {props?.applicants != null
              ? ` ${props.applicants.length} Applicants`
              : "No Applicants"}
          </p>
        </div>
        <div className="ml-auto">
          <CiBookmark className="text-2xl cursor-pointer" />
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
          {props?.postedDaysAgo} days ago
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
