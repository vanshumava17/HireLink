import React, { useState } from "react";
import MultiInput from "./MultiInput";
import { dropDownData } from "../../data/Data";
import { Divider, RangeSlider } from "@mantine/core";

const SearchBar = () => {
  const [value, setValue] = useState([0, 50]);

  return (
    <div className="py-6 text-mine-shaft-100 flex mx-3">
      {dropDownData.map((item, index) => {
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
