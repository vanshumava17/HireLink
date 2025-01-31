import React from "react";

const PosteJobCard = (props) => {
  return (
    <div className="bg-mine-shaft-900 rounded-xl p-2 border-l-caribbean-green-400 border-l-3">
      <p className="font-semibold">{props.jobTitle}</p>
      <p className="text-mine-shaft-300 font-medium">{props.location}</p>
      <p className="text-mine-shaft-300">{props.posted}</p>
    </div>
  );
};

export default PosteJobCard;
