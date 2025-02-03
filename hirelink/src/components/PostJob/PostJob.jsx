import React from "react";
import SelectInput from "./SelectInput";
import { content } from "../../data/PostJob";
import { fields } from "../../data/Data"; // need to change to PostJob
import {
  Button,
  NumberInput,
  TagsInput,
  Textarea,
  useMantineSxTransform,
  validateMantineTheme,
} from "@mantine/core";
import TextEditor from "./TextEditor";
import { isNotEmpty, useForm } from "@mantine/form";
import { postJob } from "../../services/JobService";
import { successNotification , errorNotification } from "../../services/NotificationService";
import { useNavigate } from "react-router";


const PostJob = () => {
  const select = fields;
  const navigate = useNavigate();

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      jobTitle: "",
      company: "",
      experience: "",
      jobType: "",
      location: "",
      packageOffered: "",
      skillsRequired: [],
      about: "",
      description: content,
    },
    validate: {
      jobTitle: isNotEmpty("Title is required"),
      company: isNotEmpty("Company name is required"),
      experience: isNotEmpty("Experience is required"),
      jobType: isNotEmpty("Job type is required"),
      location: isNotEmpty("Location is required"),
      packageOffered: isNotEmpty("Package offered is required"),
      skillsRequired: isNotEmpty("At least one skill is required"),
      about: isNotEmpty("About section is required"),
      description: isNotEmpty("Job description is required"),
    },
  });

  const handlePost = ()=>{
    form.validate();
    if(!form.isValid()) return ;
    postJob(form.getValues())
    .then((res)=>{
        successNotification("Success", "Job Posted Successfully");  
        navigate("/company-posted-job");
    })
    .catch((err)=>{
      console.log(err);
      // errorNotification("Error" ,err.response.data.errorMessage);
      errorNotification("Error" ,"something went wrong");

    })
  }

  return (
    <div className="w-4/5 mx-auto py-5">
      <h4 className="text-3xl font-semibold">Post Job</h4>
      <div className="my-4 flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput form={form} name="jobTitle" {...select[0]} />
          <SelectInput form={form} name="company" {...select[1]} />
        </div>

        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput form={form} name="experience" {...select[2]} />
          <SelectInput form={form} name="jobType" {...select[3]} />
        </div>

        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput form={form} name="location" {...select[4]} />
          <NumberInput
            {...form.getInputProps("packageOffered")}
            label="Salary"
            placeholder="Enter Salary"
            hideControls
            withAsterisk
            min={1}
            // max={300}
            // clampBehavior="strict"
          />
        </div>

        <div className="font-medium [&_label]:!text-md">
          <TagsInput
            {...form.getInputProps("skillsRequired")}
            label="Skills"
            withAsterisk
            placeholder="Enter Skills"
            clearable
            acceptValueOnBlur
            splitChars={[",", "|"]}
          />
        </div>

        <Textarea
          {...form.getInputProps("about")}
          // value={description}
          // onChange={(event) => setDescription(event.currentTarget.value)}
          autosize
          minRows={4}
          placeholder="Enter about job..."
          label="About Job"
          withAsterisk
          className="[&_textarea]:!font-semibold"
        />

        <div className="[&_button[data-active='true']]:!text-caribbean-green-400 [&_button[data-active='true']]:!bg-caribbean-green400/20">
          <h4 className="font-semibold">Job Description<span className="text-red-500">*</span></h4>
          <TextEditor form={form}/>
        </div>

        <div className="flex gap-6">
          <Button variant="light" color="caribbeanGreen.4" onClick={handlePost}>
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
