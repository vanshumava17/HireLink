import React from "react";
import { talents } from "../../data/Data";
import TalentCard from "../FindTalent/TalentCard";

const Employee = () => {
  return (
    <div className="flex flex-wrap items-center gap-9 mx-8 py-10">
      {talents.map((item, index) => {
        return <TalentCard key={index} {...item} />;
      })}
    </div>
  );
};

export default Employee;
