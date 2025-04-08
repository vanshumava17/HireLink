import React from "react";
import DreamJob from "../components/LandingPage/DreamJob";
import Companies from "../components/LandingPage/Companies";
import JobCategory from "../components/LandingPage/JobCategory";
import Working from "../components/LandingPage/Working";
import Testimonial from "../components/LandingPage/Testimonial";
import SubScribe from "../components/LandingPage/SubScribe";

const Home = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950">
      <DreamJob />
      <Companies />
      <JobCategory />
      <Working />
      <Testimonial />
      <SubScribe />
    </div>
  );
};

export default Home;
