import React, { useState } from "react";
import MultiInput from "../FindJob/MultiInput";
import { searchFields } from "../../data/Data";
import { Divider, Input, RangeSlider } from "@mantine/core";
import { FaUser } from "react-icons/fa";

const SearchBar = () => {
  const [value, setValue] = useState([0, 50]);

  return (
    <div className="py-6 text-mine-shaft-100 flex mx-3">
      <div className="flex items-center">
        <p className="text-caribbean-green-400 bg-mine-shaft-900 rounded-full p-2">
          <FaUser size={15} />
        </p>
        <Input
          variant="unstyled"
          placeholder="Talent Name"
          className="[&_input]:!placeholder-mine-shaft-100 ml-2 font-semibold !text-mine-shaft-100"
        />
      </div>
      <Divider mr="sm" size="sm" orientation="vertical" />
      {searchFields.map((item, index) => {
        return (
          <>
            <div key={index} className="w-1/5">
              <MultiInput {...item} />
            </div>

            <Divider mr="sm" size="sm" orientation="vertical" />
          </>
        );
      })}

      <div className="w-1/6">
        <div className="flex items-center justify-between text-sm font-semibold mb-1">
          <span>Salary</span>
          <span>
            ₹{value[0]} LPA - ₹{value[1]}LPA
          </span>
        </div>
        <RangeSlider
          value={value}
          onChange={setValue}
          color="caribbeanGreen.4"
          min={0}
          max={50}
        />
      </div>
    </div>
  );
};

export default SearchBar;
