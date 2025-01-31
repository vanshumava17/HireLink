import React from "react";
import { companyProfile } from "../../data/Data";
import { Link } from "react-router";
import { IoLocationSharp } from "react-icons/io5";

const About = () => {
  const obj = companyProfile;
  return (
    <div className="flex gap-3 flex-wrap flex-col mt-4 [&_h4]:text-xl font-semibold [&_h4]:!text-mine-shaft-50">
      <div>
        <h4>{obj.name}</h4>

        <p className="text-mine-shaft-200 text-justify">{obj.overview}</p>
      </div>
      <div>
        <h4>Website</h4>
        <a
          href={`${obj.website}`}
          className="!text-caribbean-green-400"
          target="_blank"
        >
          {obj.website}
        </a>
      </div>
      <div>
        <h4>Headquarters</h4>
        <p className="flex items-center gap-1 mx-2">
          <IoLocationSharp />
          {obj.headquarters}
        </p>
      </div>

      <div>
        <h4>Specialties</h4>
        <p>
          {obj.specialties.map((item, index) => {
            return (
              <span key={index} className="mx-1 text-justify">
                {" "}
                &#9679; {item}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default About;
