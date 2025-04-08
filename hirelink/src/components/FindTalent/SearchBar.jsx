import React, { useState } from "react";
import MultiInput from "../FindJob/MultiInput";
import { searchFields } from "../../data/Data";
import { Divider, Input, RangeSlider } from "@mantine/core";
import { FaUser } from "react-icons/fa";
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
          defaultValue={name}
          onChange={(e) => handleChange("name", e)}
        />
      </div>
      <Divider mr="sm" size="sm" orientation="vertical" />
      {searchFields.map((item, index) => {
          // console.log(item);
        return (
          <React.Fragment key={index}>
            <div className="w-1/5">
              <MultiInput {...item} />
            </div>

            <Divider mr="sm" size="sm" orientation="vertical" />
          </React.Fragment>
        );
      })}

      <div className="w-1/6">
        <div className="flex items-center justify-between text-sm font-semibold mb-1">
          <span>Experience (Year)</span>
          <span>
            {value[0]}- {value[1]}
          </span>
        </div>
        <RangeSlider
          value={value}
          onChange={setValue}
          color="caribbeanGreen.4"
          min={0}
          max={30}
          onChangeEnd={(e) => handleChange("experience", e)}
          minRange={2}
        />
      </div>
    </div>
  );
};

export default SearchBar;
