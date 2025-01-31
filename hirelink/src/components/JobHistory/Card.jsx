import { Button, Divider, Text } from "@mantine/core";
import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";
import { Link } from "react-router";

const Card = (props) => {
  return (
    <div className="bg-mine-shaft-900 p-4 w-80 rounded-lg hover:shadow-[0_0_5px_1px_yellow] !shadow-caribbean-green-400 cursor-pointer min-h-56">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-mine-shaft-700 rounded-md">
          <img src={props.img} alt="" className="h-7" />
        </div>
        <div className="text-mine-shaft-300">
          <h5 className="font-semibold text-mine-shaft-200">
            {props.jobTitle}
          </h5>
          <p className="text-sm">
            {props.company} &#x2022; {props.applicants} Applicants
          </p>
        </div>
        <div className="ml-12">
          {props.saved ? (
            <IoBookmark className="text-2xl cursor-pointer text-caribbean-green-400" />
          ) : (
            <CiBookmark className="text-2xl cursor-pointer" />
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
        <p className="font-bold">₹ {props.package}</p>
        <div className="flex items-center gap-1 font-semibold text-mine-shaft-400 text-sm">
          <FaClock className="h-4 w-4 font-bold" stroke={2} />
          {props.offered
            ? `Interviewed ${props.postedDaysAgo} days ago`
            : `Applied ${props.postedDaysAgo} days ago`}
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
    </div>
  );
};

export default Card;
