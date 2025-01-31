import { Tabs } from "@mantine/core";
import React from "react";
import { GiNotebook } from "react-icons/gi";
import { VscLayersActive } from "react-icons/vsc";
import PosteJobCard from "./PosteJobCard";
import { activeJobs } from "../../data/Data";

const PostedJob = () => {
  return (
    <>
      <div className="w-1/5">
        <h4 className="text-2xl font-semibold my-3">Posted Jobs</h4>
        <div>
          <Tabs variant="pills" radius="md" defaultValue="active">
            <Tabs.List className="[&_button]:!text-lg font-semibold">
              <Tabs.Tab
                value="active"
                leftSection={<VscLayersActive size={20} />}
              >
                Active [4]
              </Tabs.Tab>
              <Tabs.Tab value="draft" leftSection={<GiNotebook size={20} />}>
                Draft [4]
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="active">
              <div className="flex flex-col gap-5 mt-3">
                {activeJobs.map((item, index) => {
                  return <PosteJobCard key={index} {...item} />;
                })}
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="draft">{/* <Job /> */}</Tabs.Panel>
          </Tabs>
        </div>
      </div>

      
    </>
  );
};

export default PostedJob;
