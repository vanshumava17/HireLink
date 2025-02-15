import { Badge, Tabs } from "@mantine/core";
import React from "react";
import { FaBriefcase, FaUsers } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import JobDescription from "../JobDescription/JobDescription";
import { talents } from "../../data/Data";
import TalentCard from "../FindTalent/TalentCard";
import { PiHandDepositBold } from "react-icons/pi";
import { BiWindowClose } from "react-icons/bi";

const PostedJobDescription = (props) => {
  const applied = (props.applicants || []).filter(
    (x) => x.applicationStatus === "APPLIED"
  );

  const invited = (props.applicants || []).filter(
    (x) => x.applicationStatus === "INTERVIEWING"
  );

  // console.log(applied);

  return (
    <div className="mt-4 w-8/10 px-5">
      {props.jobTitle ? (
        <>
          <h4 className="text-2xl font-semibold mb-3">
            {props.jobTitle}
            <Badge variant="light" color="caribbeanGreen.4">
              {props.jobStatus}
            </Badge>
          </h4>
          <div className="text-mine-shaft-300 font-medium mb-3">
            {props.location}
          </div>

          <div>
            <Tabs variant="pills" radius="md" defaultValue="overview">
              <Tabs.List className="[&_button]:!text-lg font-semibold">
                <Tabs.Tab
                  value="overview"
                  leftSection={<MdOutlineRoundaboutRight size={20} />}
                >
                  Overview
                </Tabs.Tab>
                <Tabs.Tab
                  value="applicants"
                  leftSection={<FaUsers size={20} />}
                >
                  Applicants
                </Tabs.Tab>
                <Tabs.Tab
                  value="invited"
                  leftSection={<MdMarkEmailRead size={20} />}
                >
                  Invited
                </Tabs.Tab>
                <Tabs.Tab
                  value="offered"
                  leftSection={<PiHandDepositBold size={20} />}
                >
                  Offered
                </Tabs.Tab>
                <Tabs.Tab
                  value="rejected"
                  leftSection={<BiWindowClose size={20} />}
                >
                  Rejected
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="overview" className="[&>div]:w-full mt-5">
                <JobDescription {...props} edit />
              </Tabs.Panel>

              <Tabs.Panel value="applicants">
                <div className="flex flex-wrap items-center gap-5 py-10 justify-center">
                  {applied.map((item, index) => {
                    return <TalentCard key={index} {...item} posted />;
                  })}
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="invited">
                <div className="flex flex-wrap items-center gap-5 py-10 justify-center">
                  {(props.applicants || [])
                    .filter((x) => x.applicationStatus === "INTERVIEWING")
                    .map((item, index) => (
                      <TalentCard key={index} {...item} invited />
                    ))}
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="offered">
                <div className="flex flex-wrap items-center gap-5 py-10 justify-center">
                  {(props.applicants || [])
                    .filter((x) => x.applicationStatus == "OFFERED")
                    .map((item, index) => {
                      return <TalentCard key={index} {...item} offerd />;
                    })}
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="rejected">
                <div className="flex flex-wrap items-center gap-5 py-10 justify-center">
                  {(props.applicants || [])
                    .filter((x) => x.applicationStatus == "REJECTED")
                    .map((item, index) => {
                      return <TalentCard key={index} {...item} rejected />;
                    })}
                </div>
              </Tabs.Panel>
            </Tabs>
          </div>
        </>
      ) : (
        <div className="text-3xl font-semibold flex items-center justify-center">
          No Jobs Found
        </div>
      )}
    </div>
  );
};

export default PostedJobDescription;
