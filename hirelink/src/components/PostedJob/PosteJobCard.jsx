// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { timeAgo } from "../../services/Utilities";

// const PosteJobCard = (props) => {
//   const { id } = useParams();
//   console.log(id);
//   console.log(props.id);
//   console.log(props);

//   return (
//     <Link
//       to={`/company-posted-job/${props.id}`}
//       className={`bg-mine-shaft-900 rounded-xl p-2 border-l-caribbean-green-400 border-l-3 ${
//         props.id === id
//           ? "bg-caribbean-green-500 text-black"
//           : "bg-mine-shaft-900 text-mine-shaft-300"
//       }`}
//     >
//       <p className="font-semibold">{props.jobTitle}</p>
//       <p className="font-medium">{props.location}</p>
//       <p className="">{timeAgo(props.postTime)}</p>
//     </Link>
//   );
// };

// export default PosteJobCard;

import React from "react";
import { Link, useParams } from "react-router-dom";
import { timeAgo } from "../../services/Utilities";

const PosteJobCard = (props) => {
  const { id } = useParams();
  const isActive = props.id.toString() === id;


  return (
    <Link
      to={`/company-posted-job/${props.id}`}
      className={`rounded-xl p-2 border-l-[3px] transition-all ${
        isActive
          ? "bg-caribbean-green-500 !text-mine-shaft-50 border-l-caribbean-green-400"
          : "bg-mine-shaft-900 text-mine-shaft-300 border-l-transparent"
      }`}
    >
      <p className="font-semibold">{props.jobTitle}</p>
      <p className="font-medium">{props.location}</p>
      <p>{timeAgo(props.postTime)}</p>
    </Link>
  );
};

export default PosteJobCard;
