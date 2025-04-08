import { Avatar } from "@mantine/core";
import React from "react";

const Working = () => {
  return (
    <div className="mt-5 text-mine-shaft-100 pb-8">
      <div className="font-semibold text-4xl text-center">
        How it <span className="text-caribbean-green-400">Works </span>
      </div>
      <p className="text-center text-mine-shaft-300 mt-3 w-1/2 mx-auto font-semibold text-xl mb-10">
        Effortlessly navigate through the process and land your dream job.
      </p>

      <div className="flex items-center justify-between px-20 relative">
        <div>
          <img src="/Girl.png" alt="girl" className="w-[30rem]" />
          <div className="absolute left-[420px] top-[16%] w-36 text-center border-caribbean-green400 border rounded-lg p-2 backdrop-blur-md m-auto flex items-center flex-col">
            <Avatar src="avatar.webp" className="h-16 w-16" />
            <p className="font-semibold text-lg">Complete your profile</p>
            <p className="font-bold">70% completed</p>
          </div>
        </div>

        <div className="flex flex-col gap-12 pr-28">
          <div className="flex items-center gap-5">
            <div>
              <img
                src="/avatar.webp"
                alt=""
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="text-mine-shaft-100">
              <span className="font-semibold text-2xl">Build Your Resume</span>
              <p className="text-mine-shaft-300 text-xl">
                Create a standout resume with your skills.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="relative">
              <img
                src="/avatar.webp"
                alt=""
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="text-mine-shaft-100">
              <span className="font-semibold text-2xl">Apply for Job</span>
              <p className="text-mine-shaft-300 text-xl">
                Find and apply for jobs that match your skills.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div>
              <img
                src="/avatar.webp"
                alt=""
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="text-mine-shaft-100">
              <span className="font-semibold text-2xl">Get Hired</span>
              <p className="text-mine-shaft-300 text-xl">
                Connect with employers and start your new job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
