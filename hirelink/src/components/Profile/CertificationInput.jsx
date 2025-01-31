import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { fields } from "../../data/Profile";
import { Button, Checkbox, Textarea, TextInput } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";

const CertificationInput = (props) => {
  const select = fields;
  const [issueDate, setIssueDate] = useState(new Date());

  return (
    <div className="flex flex-col gap-3 mt-4">
      <h4 className="text-lg font-semibold">Add Certificate</h4>

      <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput
          label="Title"
          placeholder="Enter title"
          withAsterisk
          className="[&_input]:!font-semibold"
        />
        <SelectInput {...select[1]} />
      </div>

      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          label="Issue Date"
          placeholder="Pick Date"
          value={issueDate}
          onChange={setIssueDate}
          maxDate={new Date()}
          withAsterisk
          className="[&_button]:!font-semibold"
        />

        <TextInput
          label="Certificate Id"
          placeholder="Enter Certificate Id"
          withAsterisk
          className="[&_input]:!font-semibold"
        />
      </div>

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

export default CertificationInput;
