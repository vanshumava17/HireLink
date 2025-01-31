import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { fields } from "../../data/Profile";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";

const ExperienceInput = (props) => {
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquam nam id reprehenderit velit odit, quas delectus totam? Aliquid officiis vero quisquam cupiditate, iste nobis deleniti repudiandae eius quis ipsa at labore magni hic, quia dolor possimus. Mollitia, reprehenderit accusamus."
  );
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [checked, setChecked] = useState(false);

  const select = fields;
  
  return (
    <div className="flex flex-col gap-3 mt-4">
      <h4 className="text-lg font-semibold">
        {props.add ? "Add" : "Edit"} Experience
      </h4>
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>
      <SelectInput {...select[2]} />

      <Textarea
        value={description}
        onChange={(event) => setDescription(event.currentTarget.value)}
        autosize
        minRows={4}
        placeholder="Description"
        label="Enter Summary"
        withAsterisk
        className="[&_textarea]:!font-semibold"
      />

      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          label="Start Date"
          placeholder="Pick Date"
          value={startDate}
          onChange={setStartDate}
          maxDate={endDate || undefined}
          withAsterisk
          className="[&_button]:!font-semibold"
        />

        <MonthPickerInput
          label="End Date"
          placeholder="Pick Date"
          value={endDate}
          onChange={setEndDate}
          maxDate={new Date()}
          minDate={startDate || undefined}
          withAsterisk
          disabled={checked}
          className="[&_button]:!font-semibold"
        />
      </div>

      <Checkbox
        label="Currently working here"
        autoContrast
        value={checked}
        onChange={(event) => setChecked(event.target.value)}
        className="[&_label]:!font-semibold"
      />

      <div className="flex gap-5 [&>*]:w-1/2">
        <Button
          color="caribbeanGreen.4"
          variant="outline"
          onClick={() => props.setEdit(false)}
        >
          Save
        </Button>
        <Button
          color="red.5"
          variant="light"
          onClick={() => props.setEdit(false)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ExperienceInput;
