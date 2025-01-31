import { Avatar, Divider, Tabs } from "@mantine/core";
import React from "react";
import { FaBriefcase, FaUsers } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import About from "./About";
import Job from "./Job";
import Employee from "./Employee";
import SimilarCompanies from "./SimilarCompanies";

const CompanyProfile = (props) => {
  return (
    <>
      <div className="w-3/4">
        <div className="relative">
          <img
            src="/Profile/banner.png"
            alt=""
            className="rounded-t-2xl h-44 w-full"
          />
          <img
            src="/Icons/Google.png"
            alt=""
            className="rounded-3xl h-36 w-36 -bottom-1/5 absolute left-3 border-mine-shaft-800 border-6 bg-mine-shaft-950 p-2"
          />
        </div>
        <div className="px-3 mt-10 flex flex-col gap-1">
          <div className="text-3xl font-semibold flex justify-between">
            <p>Google</p>
            <Avatar.Group>
              <Avatar src="avatar.webp" />
              <Avatar src="avatar.webp" />
              <Avatar src="avatar.webp" />
              <Avatar className="[&_span]:!text-[10px]">+10K</Avatar>
            </Avatar.Group>
          </div>

          <div className="flex items-center gap-1 font-semibold text-mine-shaft-400 text-sm">
            <IoLocationSharp className="h-5 w-5 font-bold" stroke={2} />
            Delhi, India
          </div>
        </div>

        <Divider size="sm" my="lg" />

        <div>
          <Tabs variant="pills" radius="md" defaultValue="about">
            <Tabs.List className="[&_button]:!text-lg font-semibold">
              <Tabs.Tab
                value="about"
                leftSection={<MdOutlineRoundaboutRight size={16} />}
              >
                About
              </Tabs.Tab>
              <Tabs.Tab value="job" leftSection={<FaBriefcase size={16} />}>
                Jobs
              </Tabs.Tab>
              <Tabs.Tab value="employees" leftSection={<FaUsers size={16} />}>
                Employees
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="about">
              <About />
            </Tabs.Panel>

            <Tabs.Panel value="job">
              <Job />
            </Tabs.Panel>

            <Tabs.Panel value="employees">
              <Employee />
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>

      <div className="w-1/4">
        <SimilarCompanies />
      </div>
    </>
  );
};

export default CompanyProfile;
