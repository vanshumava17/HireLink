import React, { useEffect } from "react";
import SearchBar from "../components/FindJob/SearchBar";
import { Divider } from "@mantine/core";
import Jobs from "../components/FindJob/Jobs";

const FindJobs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950">
      <Divider size="sm" />
      <SearchBar />
      <Divider size="sm" />
      <Jobs />
    </div>
  );
};

export default FindJobs;
