import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const CompanyCard = (props) => {
  return (
    <>
      <div className="flex items-center gap-3 rounded-lg  px-4 py-2 min-w-68 bg-mine-shaft-900">
        <div className="p-2 bg-mine-shaft-700 rounded-md">
          <img src={`/Icons/${props.name}.png`} alt="" className="h-7" />
        </div>
        <div className="text-mine-shaft-300">
          <h5 className="font-semibold text-mine-shaft-200">{props.name}</h5>
          <p className="text-sm">{props.employees} Employees</p>
        </div>
        <div className="ml-auto">
          <FaArrowUpRightFromSquare className="text-xl cursor-pointer text-caribbean-green-400" />
        </div>
      </div>
    </>
  );
};

export default CompanyCard;
