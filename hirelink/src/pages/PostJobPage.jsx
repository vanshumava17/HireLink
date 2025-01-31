import React from "react";
import { Divider } from "@mantine/core";
import PostJob from "../components/PostJob/PostJob";

const PostJobPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950">
      <Divider size="sm" />
      <PostJob />
    </div>
  );
};

export default PostJobPage;
