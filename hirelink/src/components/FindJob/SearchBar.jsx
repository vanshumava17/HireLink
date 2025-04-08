import React, { useState } from "react";
import MultiInput from "./MultiInput";
import { dropDownData } from "../../data/Data";
import { Divider, RangeSlider } from "@mantine/core";
<<<<<<< HEAD
=======
import { useDispatch } from "react-redux";
import { updateFilter } from "../../slices/FilterSlice";
>>>>>>> master

const SearchBar = () => {
  const [value, setValue] = useState([0, 50]);

<<<<<<< HEAD
=======
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(updateFilter({ salary: event }));
  };

>>>>>>> master
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
<<<<<<< HEAD
            ₹{value[0]} LPA - ₹{value[1]}LPA
=======
            ₹{value[0]} LPA - ₹{value[1]} LPA
>>>>>>> master
          </span>
        </div>
        <RangeSlider
          value={value}
          onChange={setValue}
          color="caribbeanGreen.4"
          min={0}
          max={50}
<<<<<<< HEAD
=======
          onChangeEnd={handleChange}
          minRange={1}
>>>>>>> master
        />
      </div>
    </div>
  );
};

export default SearchBar;
