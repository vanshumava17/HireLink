import { Avatar, Rating } from "@mantine/core";
import React, { useRef } from "react";
import { testimonials } from "../../data/Data";
import { Carousel } from "@mantine/carousel";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Testimonial = () => {
  return (
    <div className="mt-5 text-mine-shaft-100 pb-8">
      <div className="font-semibold text-4xl text-center">
        What <span className="text-caribbean-green-400">User </span>says about us?
      </div>

      <Carousel
        slideSize={{ base: "25%" }}
        align="start"
        nextControlIcon={
          <MdKeyboardArrowRight className="w-10 h-10 rounded-full bg-caribbean-green-400" />
        }
        previousControlIcon={
          <MdKeyboardArrowLeft className="w-10 h-10 rounded-full bg-caribbean-green-400" />
        }
        className="[&_button]:!border-none mt-10"
      >
        {testimonials.map((item, index) => {
          return (
            <Carousel.Slide
              className="w-[24%] border-caribbean-green-400 border p-4 rounded-xl mx-5"
              key={index}
            >
              <div className="flex items-center gap-3">
                <Avatar className="!h-16 !w-16" src={item.img} alt="userImg" />
                <div>
                  <span className="text-lg font-semibold">{item.name}</span>
                  <Rating value={item.rating} fractions={2} readOnly />
                </div>
              </div>
              <p className="text-mine-shaft-300 mt-2 text-sm">{item.desc}</p>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Testimonial;
