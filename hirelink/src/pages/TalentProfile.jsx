import { Button, Divider } from "@mantine/core";
import React from "react";
import { Link, useNavigate } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import Profile from "../components/TalentProfile/Profile";
import { profiles } from "../data/TalentProfileData";
import TalentCard from "../components/FindTalent/TalentCard";
import { talents } from "../data/Data";

const TalentProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 p-4">
      <Divider size="sm" />
      <Link to={"/find-talent"} className="my-4 inline-block">
        <Button
          variant="light"
          color="caribbeanGreen.4"
          leftSection={<FaArrowLeftLong />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Link>

      <div className="flex gap-8">
        <Profile {...profiles} />
        <div className="flex flex-col gap-4">
          {talents.slice(0, 4).map((item, index) => {
            return <TalentCard key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TalentProfile;
