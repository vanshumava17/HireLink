import { Tabs } from "@mantine/core";
import React from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import { TbMessage2Bolt } from "react-icons/tb";
import { BiMessageSquareCheck } from "react-icons/bi";
import { jobsList } from "../../data/Data";
import Card from "./Card";
import { MdOutlineLocalOffer } from "react-icons/md";

const JobHistory = () => {
  return (
    <div>
      <h4 className="text-2xl font-semibold my-3">Posted Jobs</h4>

      <div>
        <Tabs variant="pills" radius="md" defaultValue="applied">
          <Tabs.List className="[&_button]:!text-lg font-semibold">
            <Tabs.Tab
              value="applied"
              leftSection={<BiMessageSquareCheck size={20} />}
            >
              Applied
            </Tabs.Tab>
            <Tabs.Tab value="saved" leftSection={<CiBookmarkCheck size={20} />}>
              Saved
            </Tabs.Tab>
            <Tabs.Tab
              value="offered"
              leftSection={<MdOutlineLocalOffer size={20} />}
            >
              Offered
            </Tabs.Tab>
            <Tabs.Tab
              value="interviewing"
              leftSection={<TbMessage2Bolt size={20} />}
            >
              Interviewing
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="applied" className="[&>div]:w-full">
            <div className="flex flex-wrap items-center gap-5 py-10 justify-center">
              {jobsList.map((item, index) => {
                return <Card key={index} {...item} applied/>;
              })}
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="saved">
            <div className="flex flex-wrap items-center gap-5 py-10 justify-center">
              {jobsList.map((item, index) => {
                return <Card key={index} {...item} saved/>;
              })}
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="offered">
            <div className="flex flex-wrap items-center gap-5 py-10 justify-center">
              {jobsList.map((item, index) => {
                return <Card key={index} {...item} offered/>;
              })}
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="interviewing">
            <div className="flex flex-wrap items-center gap-5 py-10 justify-center">
              {jobsList.map((item, index) => {
                return <Card key={index} {...item} interviewing/>;
              })}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default JobHistory;
