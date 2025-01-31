import { Button, Divider } from "@mantine/core";
import React from "react";
import { BiBriefcase } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import ExperienceCard from "./ExperienceCard";
import CertificationCard from "./CertificationCard";

const Profile = (props) => {
  const item = props[14];

  return (
    <div className="w-2/3">
      <div className="relative">
        <img
          src="/Profile/banner.png"
          alt=""
          className="rounded-t-2xl h-44 w-full"
        />
        <img
          src="avatar.webp"
          alt=""
          className="rounded-full h-40 w-40 -bottom-1/5 absolute left-3 border-mine-shaft-950 border-8"
        />
      </div>
      <div className="px-3 mt-10 flex flex-col gap-1">
        <div className="text-3xl font-semibold flex justify-between">
          <p>{item.name}</p>
          <Button variant="light" color="caribbeanGreen.4">
            Message
          </Button>
        </div>
        <span className="text-xl flex items-center gap-2">
          {" "}
          <BiBriefcase className="h-5 w-5 font-bold" stroke={2} />
          {item.role} &bull; {item.company}
        </span>
        <div className="flex items-center gap-1 font-semibold text-mine-shaft-400 text-sm">
          <IoLocationSharp className="h-5 w-5 font-bold" stroke={2} />
          {item.location}
        </div>
      </div>

      <Divider size="sm" my="lg" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">About</div>
        <p className="text-md text-mine-shaft-200 text-justify">{item.about}</p>
      </div>

      <Divider size="sm" my="lg" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-2">
          {item.skills.map((skill, index) => {
            return (
              <p
                className="bg-mine-shaft-800 rounded-3xl text-caribbean-green-400 px-3 py-1 font-medium"
                key={index}
              >
                {skill}
              </p>
            );
          })}
        </div>
      </div>

      <Divider size="sm" my="lg" />
      <div className="px-3 flex flex-col gap-5">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        {item.experience.map((expCard, index) => {
          return <ExperienceCard key={index} {...expCard} />;
        })}
      </div>

      <Divider size="sm" my="lg" />
      <div className="px-3 flex flex-col gap-5">
        <div className="text-2xl font-semibold mb-5">Certifications</div>
        {item.certifications.map((certCard, index) => {
          return <CertificationCard key={index} {...certCard} />;
        })}
      </div>
    </div>
  );
};

export default Profile;
