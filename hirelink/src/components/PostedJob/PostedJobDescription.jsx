import { Badge, Tabs } from "@mantine/core";
import React from "react";
import { FaBriefcase, FaUsers } from "react-icons/fa";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import JobDescription from "../JobDescription/JobDescription";
import { talents } from "../../data/Data";
import TalentCard from "../FindTalent/TalentCard";

const PostedJobDescription = () => {
  return (
    <div className="mt-4 w-8/10 px-5">
      <h4 className="text-2xl font-semibold mb-3">
        Software Engineer{" "}
        <Badge variant="light" color="caribbeanGreen.4">
          Badge
        </Badge>
      </h4>
      {/* <div className="text-mine-shaft-300 font-medium mb-3">
        New York, United States
      </div> */}

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
              leftSection={<FaBriefcase size={20} />}
            >
              Applicants
            </Tabs.Tab>
            <Tabs.Tab value="invited" leftSection={<FaUsers size={20} />}>
              Invited
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" className="[&>div]:w-full mt-5">
            <JobDescription edit />
          </Tabs.Panel>

          <Tabs.Panel value="applicants">
            <div className="flex flex-wrap items-center gap-5 py-10 justify-center">
              {talents.map((item, index) => {
                return <TalentCard key={index} {...item} posted />;
              })}
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="invited">
            <div className="flex flex-wrap items-center gap-5 py-10 justify-center">
              {talents.map((item, index) => {
                return <TalentCard key={index} {...item} invited />;
              })}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJobDescription;
