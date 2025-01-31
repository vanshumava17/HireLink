import { ActionIcon, Button, Divider } from "@mantine/core";
import React, { useEffect } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBriefcase, FaLocationDot } from "react-icons/fa6";
import { BsCurrencyRupee } from "react-icons/bs";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { Link } from "react-router";
import { description, skills } from "../../data/Data";
import DOMPurify from "dompurify";
import RecommendedJobs from "./RecommendedJobs";
import { FaTrash } from "react-icons/fa";

const JobDescription = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const data = DOMPurify.sanitize(description);
  return (
    <>
      <div className="w-3/5">
        <div className="flex items-center gap-2">
          <div className="p-3 bg-mine-shaft-700 rounded-md">
            <img src="/Icons/Google.png" alt="" className="h-14" />
          </div>
          <div className="text-mine-shaft-300">
            <h5 className="font-semibold text-mine-shaft-200 text-2xl">
              Software Engineer
            </h5>
            <p className="text-md">Google &#x2022; 3 days ago</p>
          </div>
          <div className="ml-auto flex items-center flex-col gap-2">
            <Link to={"/apply-job"}>
              <Button color="caribbeanGreen.4" variant="light">
                {props.edit ? "Edit" : "Apply"}
              </Button>
            </Link>
            {props.edit ? (
              <Button color="red.5" variant="outline">
                <FaTrash stroke={2}/>
              </Button>
            ) : (
              <CiBookmark className="text-2xl cursor-pointer text-caribbean-green-400" />
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
            <p className="font-semibold">Bhopal, India</p>
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
            <p className="font-semibold">Expert</p>
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
            <p className="font-semibold">30 LPA</p>
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
            <p className="font-semibold">Full Time</p>
          </div>
        </div>

        <Divider size="sm" className="my-3" />

        <div>
          <h4 className="font-semibold text-xl">Required Skills</h4>
          <div className="flex items-center my-5 gap-4 flex-wrap">
            {skills.map((item, index) => {
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
              <img src="/Icons/Google.png" alt="" className="h-10" />
            </div>
            <div className="text-mine-shaft-300">
              <h5 className="font-semibold text-mine-shaft-200 text-xl">
                Google
              </h5>
              <p className="text-md">10K+ Employees</p>
            </div>
            <div className="ml-auto flex items-center flex-col gap-2">
              <Link to={"/company"}>
                <Button color="caribbeanGreen.4" variant="light">
                  Company Page
                </Button>
              </Link>
            </div>
          </div>
          <p className="text-mine-shaft-300 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            magnam animi eveniet dolores vel, quos qui vero consequuntur tenetur
            libero modi voluptate iusto nam sit provident a suscipit, sequi
            error quam id. Sed magni odit libero ad eligendi necessitatibus
            laboriosam corrupti assumenda ipsam, aliquid obcaecati nemo maiores
            reiciendis hic sit dolores consequuntur distinctio totam? Ullam
            earum ea est molestias hic, distinctio, saepe alias cumque veniam
            reprehenderit animi eos quam nihil!
          </p>
        </div>
      </div>

      {/* <div className="flex flex-col mx-auto">
        <RecommendedJobs />
      </div> */}
    </>
  );
};

export default JobDescription;
