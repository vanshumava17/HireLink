import {  Divider } from "@mantine/core";
import React from "react";
import PostedJob from "../components/PostedJob/PostedJob";
import PostedJobDescription from "../components/PostedJob/PostedJobDescription";

const PostedJobPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 p-4">
      <Divider size="sm" />
      <div className="flex gap-5">
        <PostedJob />
        <PostedJobDescription />
      </div>
    </div>
  );
};

export default PostedJobPage;
