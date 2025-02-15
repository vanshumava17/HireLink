import { Button, Divider } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import Profile from "../components/TalentProfile/Profile";
import { profiles } from "../data/TalentProfileData";
import TalentCard from "../components/FindTalent/TalentCard";
import { profile } from "../data/Data";
import { useEditor } from "@tiptap/react";
import { getAllProfiles } from "../services/ProfileService";
import RecommendCard from "../components/TalentProfile/RecommendCard";

const TalentProfile = () => {
  const navigate = useNavigate();
  const [talents, setTalents] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getAllProfiles()
      .then((res) => {
        setTalents(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      {console.log(profile)}
      <div className="flex gap-8">
        <Profile {...profiles} />
        <div className="flex flex-col gap-4">
          {talents.map(
            (item, index) =>
              index < 4 &&
              id != item.id && <RecommendCard key={index} {...item} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TalentProfile;
