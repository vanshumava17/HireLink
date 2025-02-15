// import { Tabs } from "@mantine/core";
// import React, { useEffect, useState } from "react";
// import { GiNotebook } from "react-icons/gi";
// import { VscLayersActive } from "react-icons/vsc";
// import PosteJobCard from "./PosteJobCard";
// import { activeJobs } from "../../data/Data";

// const PostedJob = (props) => {
//   const [activeTab, setActiveTab] = useState("ACTIVE");

//   useEffect(() => {
//     if (props?.job?.jobStatus) {
//       setActiveTab(props.job.jobStatus); // Update only when a valid jobStatus is available
//     }
//   }, [props.job?.jobStatus]); // Only trigger when jobStatus changes

//   return (
//     <>
//       <div className="w-1/5">
//         <h4 className="text-2xl font-semibold my-3">Posted Jobs</h4>
//         <div>
//           <Tabs variant="pills" radius="md" defaultValue={activeTab}>
//             <Tabs.List className="[&_button]:!text-lg font-semibold">
//               <Tabs.Tab
//                 value="ACTIVE"
//                 leftSection={<VscLayersActive size={20} />}
//               >
//                 Active [4]
//               </Tabs.Tab>
//               <Tabs.Tab value="DRAFT" leftSection={<GiNotebook size={20} />}>
//                 Draft [4]
//               </Tabs.Tab>
//             </Tabs.List>

//             <Tabs.Panel value="ACTIVE">
//               <div className="flex flex-col gap-5 mt-3">
//                 {activeJobs.map((item, index) => {
//                   return <PosteJobCard key={index} {...item} />;
//                 })}
//               </div>
//             </Tabs.Panel>

//             <Tabs.Panel value="DRAFT">{/* <Job /> */}</Tabs.Panel>
//           </Tabs>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PostedJob;

import { Tabs } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { GiNotebook } from "react-icons/gi";
import { VscLayersActive } from "react-icons/vsc";
import PosteJobCard from "./PosteJobCard";
import { activeJobs } from "../../data/Data";

const PostedJob = (props) => {
  const [activeTab, setActiveTab] = useState("APPLIED");


  useEffect(() => {
    if (props?.job?.jobStatus) {
      setActiveTab(props.job.jobStatus); // Update when jobStatus is available
    }
  }, [props.job?.jobStatus]);

  

  // Filter jobs dynamically based on status
  const activeJobs =
    props.jobList?.filter((job) => job.jobStatus === "ACTIVE") || [];
  const draftJobs =
    props.jobList?.filter((job) => job.jobStatus === "DRAFT") || [];

  return (
    <div className="w-1/5">
      <h4 className="text-2xl font-semibold my-3">Posted Jobs</h4>
      <div>
        <Tabs
          variant="pills"
          radius="md"
          value={activeTab} // Make `Tabs` controlled
          onChange={setActiveTab} // Handle tab switching
        >
          <Tabs.List className="[&_button]:!text-lg font-semibold">
            <Tabs.Tab
              value="ACTIVE"
              leftSection={<VscLayersActive size={20} />}
            >
              Active [{activeJobs.length}]
            </Tabs.Tab>
            <Tabs.Tab value="DRAFT" leftSection={<GiNotebook size={20} />}>
              Draft [{draftJobs.length}]
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="ACTIVE">
            <div className="flex flex-col gap-5 mt-3">
              {activeJobs.length > 0 ? (
                activeJobs.map((item, index) => (
                  <PosteJobCard key={index} {...item} />
                ))
              ) : (
                <p className="text-gray-400 mt-3">No active jobs found.</p>
              )}
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="DRAFT">
            <div className="flex flex-col gap-5 mt-3">
              {draftJobs.length > 0 ? (
                draftJobs.map((item, index) => (
                  <PosteJobCard key={index} {...item} />
                ))
              ) : (
                <p className="text-gray-400 mt-3">No draft jobs found.</p>
              )}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJob;
