import { Button, Divider } from "@mantine/core";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
import ApplyJob from "../components/ApplyJob/ApplyJob";

const ApplyJobPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 px-2">
      <Divider size="sm" />

      <Link to={"/jobs"} className="my-4 inline-block">
        <Button
          variant="light"
          color="caribbeanGreen.4"
          leftSection={<FaArrowLeftLong />}
        >
          Back
        </Button>
      </Link>

      <ApplyJob />
    </div>
  );
};

export default ApplyJobPage;
