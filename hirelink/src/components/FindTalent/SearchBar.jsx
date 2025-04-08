import React, { useState } from "react";
import MultiInput from "../FindJob/MultiInput";
import { searchFields } from "../../data/Data";
import { Divider, Input, RangeSlider } from "@mantine/core";
import { FaUser } from "react-icons/fa";
<<<<<<< HEAD

const SearchBar = () => {
  const [value, setValue] = useState([0, 50]);
=======
import { useDispatch } from "react-redux";
import { updateFilter } from "../../slices/FilterSlice";

const SearchBar = () => {
  const [value, setValue] = useState([0, 30]);
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (name, event) => {
    if (name === "experience") dispatch(updateFilter({ experience: event }));
    else {
      setName(event.target.value);
      dispatch(updateFilter({ name: event.target.value }));
    }
  };


  
>>>>>>> master

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
<<<<<<< HEAD
=======
          defaultValue={name}
          onChange={(e) => handleChange("name", e)}
>>>>>>> master
        />
      </div>
      <Divider mr="sm" size="sm" orientation="vertical" />
      {searchFields.map((item, index) => {
<<<<<<< HEAD
        return (
          <>
            <div key={index} className="w-1/5">
=======
          // console.log(item);
        return (
          <React.Fragment key={index}>
            <div className="w-1/5">
>>>>>>> master
              <MultiInput {...item} />
            </div>

            <Divider mr="sm" size="sm" orientation="vertical" />
<<<<<<< HEAD
          </>
=======
          </React.Fragment>
>>>>>>> master
        );
      })}

      <div className="w-1/6">
        <div className="flex items-center justify-between text-sm font-semibold mb-1">
<<<<<<< HEAD
          <span>Salary</span>
          <span>
            ₹{value[0]} LPA - ₹{value[1]}LPA
=======
          <span>Experience (Year)</span>
          <span>
            {value[0]}- {value[1]}
>>>>>>> master
          </span>
        </div>
        <RangeSlider
          value={value}
          onChange={setValue}
          color="caribbeanGreen.4"
          min={0}
<<<<<<< HEAD
          max={50}
=======
          max={30}
          onChangeEnd={(e) => handleChange("experience", e)}
          minRange={2}
>>>>>>> master
        />
      </div>
    </div>
  );
};

export default SearchBar;
