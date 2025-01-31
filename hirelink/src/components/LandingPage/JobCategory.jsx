import { Carousel } from "@mantine/carousel";
import React from "react";
import { jobCategory } from "../../data/Data";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const JobCategory = () => {
  return (
    <div className="mt-5 text-mine-shaft-100 pb-8">
      <div className="font-semibold text-4xl text-center">
        Browse <span className="text-caribbean-green-400">Job </span>Category
      </div>
      <p className="text-center text-mine-shaft-300 mt-3 w-1/3 mx-auto font-semibold text-xl mb-10">
        Explore diverse job opportunities tailored to your skills. Start your
        career journey today!
      </p>

      <Carousel
        slideSize={{ base: "22%" }}
        loop
        align="center"
        nextControlIcon={
          <MdKeyboardArrowRight className="w-10 h-10 rounded-full bg-caribbean-green-400" />
        }
        previousControlIcon={
          <MdKeyboardArrowLeft className="w-10 h-10 rounded-full bg-caribbean-green-400" />
        }
        className="[&_button]:!border-none"
      >
        {jobCategory.map((item, index) => {
          return (
            <Carousel.Slide key={index}>
              <div className="flex flex-col items-center w-80 border-caribbean-green300 border h-52 p-5 cursor-pointer rounded-xl hover:shadow-[0_0_5px_2px_black] !shadow-caribbean-green-300 my-5 transition duration-300 ease-in-out">
                <div className="p-2 bg-caribbean-green-300 rounded-full">
                  <img
                    src={item.img}
                    alt="Customer Support"
                    className="w-10 h-10"
                  />
                </div>
                <span className="text-mine-shaft-100 font-semibold mt-2 text-2xl">
                  {item.name}
                </span>
                <p className="text-mine-shaft-300 text-center text-lg">
                  {item.desc}
                </p>
                <span className="text-caribbean-green300 text-xl font-semibold">
                  {item.jobs}+ New Job Posted
                </span>
              </div>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  );
};

export default JobCategory;
