import { Divider } from "@mantine/core";
import React from "react";
import JobHistory from "../components/JobHistory/JobHistory";

const JobHistoryPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 p-4">
      <Divider size="sm" />
      <div className="flex gap-5">
        <JobHistory />
      </div>
    </div>
  );
};

export default JobHistoryPage;
