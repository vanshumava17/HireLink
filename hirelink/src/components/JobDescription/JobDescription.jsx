import { ActionIcon, Button, Divider } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBriefcase, FaLocationDot } from "react-icons/fa6";
import { BsCurrencyRupee } from "react-icons/bs";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { Link } from "react-router";
import { description, skills } from "../../data/Data";
import DOMPurify from "dompurify";
import RecommendedJobs from "./RecommendedJobs";
import { FaTrash } from "react-icons/fa";
import { timeAgo } from "../../services/Utilities";
import { IoBookmark } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../slices/ProfileSlice";

const JobDescription = (props) => {
  // console.log(props);
  const dispatch = useDispatch();
  const [applied, setApplied] = useState(false);
  const profile = useSelector((state) => state.profile);
  const user = useSelector((state)=>state.user);


  const handleSaveJob = () => {
  let savedJobs = Array.isArray(profile?.savedJobs)
      ? [...profile.savedJobs]
      : [];

    if (savedJobs.includes(props.id)) {
      savedJobs = savedJobs.filter((id) => id !== props.id);
    } else {
      savedJobs.push(props.id);
    }

    let updatedProfile = { ...profile, savedJobs: savedJobs };
    dispatch(changeProfile(updatedProfile));
  };

  useEffect(() => {
    if(props.applicants?.filter((applicant)=>applicant.applicantId==user.id).length > 0){
      setApplied(true);
    }
    else {
      setApplied(false); 
    }
  }, [props]);
  const data = DOMPurify.sanitize(props?.description);
  return (
    <>
      <div className="w-3/5">
        <div className="flex items-center gap-2">
          <div className="p-3 bg-mine-shaft-700 rounded-md">
            <img src={`/Icons/${props?.company}.png`} alt="" className="h-14" />
          </div>
          <div className="text-mine-shaft-300">
            <h5 className="font-semibold text-mine-shaft-200 text-2xl">
              {props?.jobTitle}
            </h5>
            <p className="text-md">
              {props?.company} &#x2022; {timeAgo(props?.postTime)} &bull;
              {props?.applicants ? props.applicants.length : " 0 "} Applicants
            </p>
          </div>
          <div className="ml-auto flex items-center flex-col gap-2">
          { props.edit || !applied &&
              <Link to={`/apply-job/${props.id}`}>
                <Button color="caribbeanGreen.4" variant="light">
                  {props.edit ? "Edit" : "Apply"}
                </Button>
              </Link>
            }
            { !props.edit && applied &&
              <Button color="green.8" variant="light">
                Applied
              </Button>
            }
            { props.edit && applied &&
              <Button color="caribbeanGreen.4" variant="outline">
                Edit
              </Button>
            }
            {props.edit ? (
              <Button color="red.5" variant="outline">
                <FaTrash stroke={2} />
              </Button>
            ) : profile?.savedJobs?.includes(props.id) ? (
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
        <Divider size="sm" className="my-3" />

        <div className="flex items-center justify-between my-5">
          <div className="flex items-center flex-col">
            <ActionIcon
              variant="light"
              size="xl"
              radius="xl"
              aria-label="Settings"
              color="caribbeanGreen.4"
            >
              <FaLocationDot
                style={{ width: "70%", height: "70%" }}
                stroke={2}
              />
            </ActionIcon>
            <p className="text-mine-shaft-300">Location</p>
            <p className="font-semibold">{props.location}</p>
          </div>

          <div className="flex items-center flex-col">
            <ActionIcon
              variant="light"
              size="xl"
              radius="xl"
              aria-label="Settings"
              color="caribbeanGreen.4"
            >
              <FaBriefcase style={{ width: "70%", height: "70%" }} stroke={2} />
            </ActionIcon>
            <p className="text-mine-shaft-300">Experience</p>
            <p className="font-semibold">{props?.experience}</p>
          </div>

          <div className="flex items-center flex-col">
            <ActionIcon
              variant="light"
              size="xl"
              radius="xl"
              aria-label="Settings"
              color="caribbeanGreen.4"
            >
              <BsCurrencyRupee
                style={{ width: "70%", height: "70%" }}
                stroke={2}
              />
            </ActionIcon>
            <p className="text-mine-shaft-300">Salary</p>
            <p className="font-semibold">{props.packageOffered} LPA</p>
          </div>

          <div className="flex items-center flex-col">
            <ActionIcon
              variant="light"
              size="xl"
              radius="xl"
              aria-label="Settings"
              color="caribbeanGreen.4"
            >
              <MdOutlineEnergySavingsLeaf
                style={{ width: "70%", height: "70%" }}
                stroke={2}
              />
            </ActionIcon>
            <p className="text-mine-shaft-300">Job Type</p>
            <p className="font-semibold">{props?.jobType}</p>
          </div>
        </div>

        <Divider size="sm" className="my-3" />

        <div>
          <h4 className="font-semibold text-xl">Required Skills</h4>
          <div className="flex items-center my-5 gap-4 flex-wrap">
            {props?.skillsRequired?.map((item, index) => {
              return (
                <ActionIcon
                  variant="light"
                  size="md"
                  radius="xl"
                  aria-label="Settings"
                  color="caribbeanGreen.4"
                  className="!h-fit !w-fit !font-medium !py-2 !px-4 !text-md"
                  key={index}
                >
                  {item}
                </ActionIcon>
              );
            })}
          </div>
        </div>

        <Divider size="sm" className="my-3" />

        <div
          dangerouslySetInnerHTML={{ __html: data }}
          className="[&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-mine-shaft-100 [&_h4]:mt-3 [&_*]:text-justify [&_*]:text-mine-shaft-300"
        ></div>

        <Divider size="sm" className="my-3" />

        <div>
          <h4 className="font-semibold text-xl">About Company</h4>
          <div className="flex items-center gap-2 my-2">
            <div className="p-3 bg-mine-shaft-700 rounded-md">
              <img
                src={`/Icons/${props.company}.png`}
                alt=""
                className="h-10"
              />
            </div>
            <div className="text-mine-shaft-300">
              <h5 className="font-semibold text-mine-shaft-200 text-xl">
                {props.company}
              </h5>
              <p className="text-md">10K+ Employees</p>
            </div>
            <div className="ml-auto flex items-center flex-col gap-2">
              <Link to={`/company/${props.company}`}>
                <Button color="caribbeanGreen.4" variant="light">
                  Company Page
                </Button>
              </Link>
            </div>
          </div>
          <p className="text-mine-shaft-300 text-justify">
            {props.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col mx-auto">
        <RecommendedJobs />
      </div>
    </>
  );
};

export default JobDescription;
