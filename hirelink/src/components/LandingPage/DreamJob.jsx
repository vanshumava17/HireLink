import { Avatar, TextInput } from "@mantine/core";
import React from "react";
import { FaSearch } from "react-icons/fa";

const DreamJob = () => {
  return (
    <div className="flex items-center px-20 justify-between">
      <div className="flex flex-col w-[55%] gap-10">
        <div className="text-7xl font-extrabold text-mine-shaft-100 leading-24">
          Find your dream job with
          <span className="text-caribbean-green-400"> HireLink</span>
        </div>
        <div className="text-2xl text-mine-shaft-200">
          Good life begins with a good company. Start explore thousands of jobs
          in one place.
        </div>
        <div className="flex items-center justify-around gap-3">
          <TextInput
            label="Job Title"
            size="md"
            radius="md"
            placeholder="Software Engineer"
            className="text-mine-shaft-100 w-[40%] bg-mine-shaft-900 p-2 rounded-lg"
            variant="unstyled"
            styles={{
              input: { color: "#f6f6f6", fontSize: "18px" },
              label: { fontSize: "18px" },
            }}
          />
          <TextInput
            label="Job Type"
            size="md"
            radius="md"
            placeholder="Fulltime"
            className="text-mine-shaft-100 w-[40%] bg-mine-shaft-900 rounded-lg p-2"
            variant="unstyled"
            styles={{
              input: { color: "#f6f6f6", fontSize: "18px" },
              label: { fontSize: "18px" },
            }}
          />

          <div className="flex items-center justify-center w-20 h-20 bg-caribbean-green-400 text-mine-shaft-100 rounded-md hover:bg-caribbean-green-500 cursor-pointer">
            <FaSearch className="h-[45%] w-[45%]" />
          </div>
        </div>
      </div>
      <div className="w-[40%] flex items-center justify-center">
        <div className="w-[30rem] relative">
          <img src="Boy.png" alt="boy" />
          <div className="absolute -right-8 top-[50%] w-fit border-caribbean-green400 border rounded-lg p-2 backdrop-blur-md">
            <div className="text-center text-mine-shaft-100 mb-1 text-lg">
              10K+ got job
              <Avatar.Group>
                <Avatar src="avatar.webp" />
                <Avatar src="avatar.webp" />
                <Avatar src="avatar.webp" />
                <Avatar>+9K</Avatar>
              </Avatar.Group>
            </div>
          </div>

          <div className="absolute -left-20 top-[25%] w-fit border-caribbean-green400 border rounded-lg p-2 backdrop-blur-md">
            <div className="flex gap-2 items-center  rounded-lg">
              <div className="w-16 h-16 p-1">
                <img src="google.webp" alt="google" />
              </div>
              <div className="text-md text-mine-shaft-100">
                <div>Software Engineer</div>
                <div className="text-mine-shaft-300">New York</div>
              </div>
            </div>

            <div className="flex items-center justify-around gap-2 text-mine-shaft-200">
              <span>1 day ago</span>
              <span>120 Applicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
