import React from "react";
import { TbHexagonLetterH } from "react-icons/tb";
import SignUp from "../components/SignUpLogin/SignUp";
import Login from "../components/SignUpLogin/Login";
import { useLocation, useNavigate } from "react-router";
import { Button } from "@mantine/core";
import { FaArrowLeftLong } from "react-icons/fa6";

const SignUpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 overflow-hidden !relative">
      <Button
        size="sm"
        my="lg"
        className="!absolute left-5 z-10" 
        variant="light"
        color="caribbeanGreen.4"
        leftSection={<FaArrowLeftLong />}
        onClick={() => navigate("/")}
      >
        Home
      </Button>
      <div
        className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 ease-in-out duration-1000 transition-all ${
          location.pathname == "/signup" ? "-translate-x-1/2" : "translate-x-0"
        }`}
      >
        <Login />
        <div
          className={`w-1/2 h-full bg-mine-shaft-900 transition-all duration-1000 ease-in-out flex justify-center items-center flex-col gap-3 ${
            location.pathname == "/signup"
              ? "rounded-r-[200px]"
              : "rounded-l-[200px]"
          }`}
        >
          <div className="flex gap-3 items-center">
            <TbHexagonLetterH className="h-20 w-20 text-caribbean-green-400" />
            <p className="text-8xl font-semibold text-caribbean-green-400">
              HireLink
            </p>
          </div>
          <h4 className="text-3xl text-mine-shaft-200 font-semibold">
            Find the job made for you
          </h4>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
