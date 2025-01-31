import React from "react";
import Sort from "../FindJob/Sort";
import TalentCard from "./TalentCard";
import { talents } from "../../data/Data";

const Talents = () => {
  return (
    <div className="px-5 mt-10">
      <div className="flex justify-between">
        <h4 className="font-bold text-2xl">Talents</h4>
        <Sort />
      </div>
      <div className="flex flex-wrap items-center gap-9 mx-8 py-10 justify-between">
        {talents.map((item, index) => {
          return <TalentCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Talents;
