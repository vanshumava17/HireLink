import React from "react";
import SelectInput from "./SelectInput";
import { fields } from "../../data/Data";
import { Button, TagsInput } from "@mantine/core";
import TextEditor from "./TextEditor";

const PostJob = () => {
  const select = fields;

  return (
    <div className="w-4/5 mx-auto py-5">
      <h4 className="text-3xl font-semibold">Post Job</h4>
      <div className="my-4 flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[0]} />
          <SelectInput {...select[1]} />
        </div>

        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[2]} />
          <SelectInput {...select[3]} />
        </div>

        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[4]} />
          <SelectInput {...select[5]} />
        </div>

        <div className="font-medium [&_label]:!text-md">
          <TagsInput
            label="Skills"
            withAsterisk
            placeholder="Enter Skills"
            clearable
            acceptValueOnBlur
            splitChars={[",", "|"]}
          />
        </div>

        <div className="[&_button[data-active='true']]:!text-caribbean-green-400 [&_button[data-active='true']]:!bg-caribbean-green400/20">
          <h4 className="font-semibold">Job Description</h4>
          <TextEditor />
        </div>

        <div className="flex gap-6">
          <Button variant="light" color="caribbeanGreen.4">
            Publish Job
          </Button>
          <Button variant="outline" color="caribbeanGreen.4">
            Save as Draft
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
