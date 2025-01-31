import { Button, Divider } from "@mantine/core";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import CompanyProfile from "../components/Company/CompanyProfile";
import { profiles } from "../data/TalentProfileData";

const CompanyPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 p-4">
      <Divider size="sm" />
      <div className="my-4 inline-block">
        <Button
          variant="light"
          color="caribbeanGreen.4"
          leftSection={<FaArrowLeftLong />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>

      <div className="flex gap-8">
        <CompanyProfile {...profiles} />
      </div>
    </div>
  );
};

export default CompanyPage;
