import { Tabs } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import { TbMessage2Bolt } from "react-icons/tb";
import { BiMessageSquareCheck } from "react-icons/bi";
import Card from "./Card";
import { MdOutlineLocalOffer } from "react-icons/md";
import { getAllJobs } from "../../services/JobService";
import { useSelector } from "react-redux";

const JobHistory = () => {

  const profile = useSelector((state)=>state.profile);
  const user = useSelector((state)=>state.user);
  const [activeTab, setActiveTab] = useState('APPLIED');
  const [jobsList, setJobsList] = useState([]);
  const [showList , setShowList] =useState([]);
  useEffect(()=>{
    getAllJobs().then((res)=>{
        setJobsList(res);
        setShowList(res.filter((job)=>{
          let found = false;
          job.applicants?.forEach((applicant) => {
            
            if(applicant.applicantId == user.id && applicant.applicationStatus == "APPLIED"){
              found = true;
            }
  
          });
          return found; 
         }));
      }).catch((err)=>{
        console.log(err);
      })
  },[])

  const handleTabChange =(value)=>{
    setActiveTab(value);
    if(value=="SAVED"){
      setShowList(jobsList.filter((job)=>profile.savedJobs?.includes(job.id)));
    }
    else{
       setShowList(jobsList.filter((job)=>{
        let found = false;
        job.applicants?.forEach((applicant) => {
          
          if(applicant.applicantId == user.id && applicant.applicationStatus == value){
            found = true;
          }

        });
        return found; 
       }));
    }
  }

  return (
    <div>
      <h4 className="text-2xl font-semibold my-3">Posted Jobs</h4>

      <div>
        <Tabs value={activeTab} onChange={handleTabChange} variant="pills" radius="md">
          <Tabs.List className="[&_button]:!text-lg font-semibold">
            <Tabs.Tab
              value="APPLIED"
              leftSection={<BiMessageSquareCheck size={20} />}
            >
              Applied
            </Tabs.Tab>
            <Tabs.Tab value="SAVED" leftSection={<CiBookmarkCheck size={20} />}>
              Saved
            </Tabs.Tab>
            <Tabs.Tab
              value="OFFERED"
              leftSection={<MdOutlineLocalOffer size={20} />}
            >
              Offered
            </Tabs.Tab>
            <Tabs.Tab
              value="INTERVIEWING"
              leftSection={<TbMessage2Bolt size={20} />}
            >
              Interviewing
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value={activeTab} className="[&>div]:w-full">
            <div className="flex flex-wrap items-center gap-5 py-10 justify-center">
              {showList.map((item, index) => {
                return <Card key={index} {...item} {...{[activeTab.toLowerCase()]:true}}/>;
              })}
            </div>
          </Tabs.Panel>

          
        </Tabs>
      </div>
    </div>
  );
};

export default JobHistory;
