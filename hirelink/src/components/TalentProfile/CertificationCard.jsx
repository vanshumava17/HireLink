import React from "react";
import { formatDate } from "../../services/Utilities";

const CertificationCard = (props) => {
    // console.log(props);
    
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-mine-shaft-700 rounded-md">
            <img
              src={`/Icons/${props.issuer}.png`}
              alt="image"
              className="h-7"
            />
          </div>
          <div className="text-mine-shaft-300">
            <h5 className="font-semibold text-mine-shaft-200">{props.title}</h5>
            <p className="text-sm">{props.issuer}</p>
          </div>
        </div>
        <div className="ml-12">
          <div className="flex flex-col items-end">
            <p className="text-sm text-mine-shaft-300">Issued {formatDate(props.issueDate)}</p>
            <p className="text-sm text-mine-shaft-300">
              ID - {props.certificateId}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
