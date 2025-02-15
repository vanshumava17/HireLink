import React from "react";
import { formatDate } from "../../services/Utilities";

const ExperienceCard = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-mine-shaft-700 rounded-md">
            <img
              src={`/Icons/${props.company}.png` || `/Icons/Company.png`}
              alt="image"
              className="h-7"
              onError={(e) => (e.target.src = "/Icons/Company.png")}
            />
          </div>
          <div className="text-mine-shaft-300">
            <h5 className="font-semibold text-mine-shaft-200">{props.title}</h5>
            <p className="text-sm">
              {props.company} &#x2022; {props.location}
            </p>
          </div>
        </div>
        <div className="ml-12">
          <p className="text-sm text-mine-shaft-300">
            {formatDate(props.startDate)} - {formatDate(props.endDate)}
          </p>
        </div>
      </div>
      <div className="text-sm text-mine-shaft-300 text-justify">
        {props.description}
      </div>
    </div>
  );
};

export default ExperienceCard;
