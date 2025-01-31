import React from "react";
import { similarCompanies, talents } from "../../data/Data";
import CompanyCard from "./CompanyCard";

const SimilarCompanies = () => {
  return (
    <>
      <h4 className="mx-8 font-bold text-2xl">Similar Companies</h4>
      <div className="flex flex-wrap items-center gap-5 mx-8 py-10 justify-between">
        {similarCompanies.map((item, index) => {
          return <CompanyCard key={index} {...item} />;
        })}
      </div>
    </>
  );
};

export default SimilarCompanies;
