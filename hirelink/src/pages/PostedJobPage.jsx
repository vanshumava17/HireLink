// import {  Divider } from "@mantine/core";
// import React, { useEffect, useState } from "react";
// import PostedJob from "../components/PostedJob/PostedJob";
// import PostedJobDescription from "../components/PostedJob/PostedJobDescription";
// import { useParams } from "react-router";
// import { useSelector } from "react-redux";
// import { getJobsPostedBy } from "../services/JobService";

// const PostedJobPage = () => {
//   const {id} = useParams();
//   const user = useSelector((state)=>state.user);
//   const [jobList, setJobList] = useState([]);
//   const [job, setJob] = useState({})
//   const [loading, setLoading] = useState(true);

//   useEffect(()=>{
//     window.scrollTo(0,0);
//     getJobsPostedBy(user.id)
//     .then((res)=>{
//       setJobList(res);
//       setJob(res.find((item)=>item.id=id));
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
//   },[id])
//   return (
//     <div className="min-h-[100vh] bg-mine-shaft-950 p-4">
//       <Divider size="sm" />
//       <div className="flex gap-5">
//         <PostedJob job={job} jobList={jobList}/>
//         <PostedJobDescription {...job}/>
//       </div>
//     </div>
//   );
// };

// export default PostedJobPage;

import { Divider, LoadingOverlay } from "@mantine/core";
import React, { useEffect, useState } from "react";
import PostedJob from "../components/PostedJob/PostedJob";
import PostedJobDescription from "../components/PostedJob/PostedJobDescription";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { getJobsPostedBy } from "../services/JobService";
// import Loader from "../components/Loader"; // Assuming you have a loader component

const PostedJobPage = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [jobList, setJobList] = useState([]);
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (user?.id) {
      setLoading(true);
      getJobsPostedBy(user.id)
        .then((res) => {
          setJobList(res);
          if (res && res.length > 0 && Number(id) == 0) navigate(`/company-posted-job/${res[0].id}`)
          setJob(res.find((item) => item.id === Number(id)));
        })
        .catch((err) => {
          console.error("Error fetching jobs:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id, user?.id]);

  if (loading)
    return (
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "caribbeanGreen.4", type: "bars" }}
      />
    ); // Show loader while data is loading

  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 p-4">
      <Divider size="sm" />
      <div className="flex gap-5">
        <PostedJob job={job} jobList={jobList} />
        <PostedJobDescription {...job} />
      </div>
    </div>
  );
};

export default PostedJobPage;
