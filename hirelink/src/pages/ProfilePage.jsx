import { Button, Divider } from "@mantine/core";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
import Profile from "../components/Profile/Profile";
import { profile } from "../data/Data";

const ProfilePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 p-4">
      <Divider size="sm" />
      {/* <Link to={"/"} className="my-4 inline-block">
        <Button
          variant="light"
          color="caribbeanGreen.4"
          leftSection={<FaArrowLeftLong />}
        >
          Back
        </Button>
      </Link> */}

      {/* {profile.map((item, index) => {
        return <Profile key={index} {...item} />;
      })} */}

      <Profile {...profile} />
    </div>
  );
};

export default ProfilePage;
