import { Divider } from "@mantine/core";
import React from "react";
import SearchBar from "../components/FindTalent/SearchBar";
import Talents from "../components/FindTalent/Talents";

const FindTalent = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950">
      <Divider size="sm" />
      <SearchBar />
      <Divider size="sm" />
      <Talents />
    </div>
  );
};

export default FindTalent;
