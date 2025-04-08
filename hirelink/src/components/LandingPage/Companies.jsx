import React from "react";
import Marquee from "react-fast-marquee";
import { companies } from "../../data/Data";

const Companies = () => {
  return (
    <div className="mt-20 text-mine-shaft-100">
      <div className="font-semibold text-4xl text-center mb-14">
        Trusted By <span className="text-caribbean-green-400">1000+</span> Companies
      </div>
      <Marquee pauseOnHover={true}>
        {companies.map((item, index) => {
          return (
            <div
              key={index}
              className="mx-8 px-2 py-1 hover:bg-mine-shaft-900 rounded-2xl cursor-pointer mb-14"
            >
              <img src={`Companies/${item}.png`} alt={item} className="h-14" />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Companies;
