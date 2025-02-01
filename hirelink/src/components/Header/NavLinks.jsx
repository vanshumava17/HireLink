import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Post Jobs", url: "/post-job" },
    // { name: "About Us", url: "/about" },
    { name: "Posted Job", url: "/company-posted-job" },
    { name: "Job History", url: "/job-history" },
    // { name: "Sign Up", url: "/signup" },
  ];

  const location = useLocation();

  return (
    <div className="flex gap-8 font-semibold h-full items-center">
      {links?.map((link, index) => (
        <div
          key={index}
          className={`${
            location.pathname === link.url
              ? "border-caribbean-green400 text-caribbean-green-400 transition duration-400 ease-in-out"
              : "border-transparent"
          } border-b-[3px] h-[70%] flex items-center text-lg `}
        >
          <Link
            to={link.url}
            className="hover:!text-mine-shaft-100 transition duration-300 ease-in-out"
          >
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
