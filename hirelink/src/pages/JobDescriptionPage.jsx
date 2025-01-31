import { Button, Divider } from "@mantine/core";
import React from "react";
import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import JobDescription from "../components/JobDescription/JobDescription";

const JobDescriptionPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 p-4">
      <Divider size="sm" />
      <Link to={"/find-jobs"} className="my-4 inline-block">
        <Button
          variant="light"
          color="caribbeanGreen.4"
          leftSection={<FaArrowLeftLong />}
        >
          Back
        </Button>
      </Link>

      <div className="flex gap-5">
        <JobDescription />
      </div>
    </div>
  );
};

export default JobDescriptionPage;
