import React, { useEffect, useState } from "react";
import SelectInput from "./SelectInput";
import { fields } from "../../data/Profile";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { useDispatch, useSelector } from "react-redux";
import { useForm, isNotEmpty } from "@mantine/form";
import { changeProfile } from "../../slices/ProfileSlice";
import { successNotification } from "../../services/NotificationService";

const ExperienceInput = (props) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquam nam id reprehenderit velit odit, quas delectus totam? Aliquid officiis vero quisquam cupiditate, iste nobis deleniti repudiandae eius quis ipsa at labore magni hic, quia dolor possimus. Mollitia, reprehenderit accusamus."
  );
  const profile = useSelector((state) => state.profile);
  const select = fields;

  useEffect(() => {
    if(!props.add)form.setValues({
      title: props.title,
      company: props.compnay,
      location: props.location,
      description: props.description,
      startDate: new Date(props.startDate),
      endDate: new Date(props.endDate),
      working: props.working,
    });
  },[]);

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      title: "",
      company: "",
      location: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      working: false,
    },
    validate: {
      title: isNotEmpty("Title is required"),
      company: isNotEmpty("Company is required"),
      location: isNotEmpty("Location is required"),
      description: isNotEmpty("Description is required"),
    },
  });

  const handleSave = () => {
      form.validate();
      if(!form.isValid())return;
      let exp = [...profile.experiences];
      if(props.add) {
        exp.push(form.getValues());
        exp[exp.length-1].startDate=exp[exp.length-1].startDate.toISOString();
        exp[exp.length-1].endDate=exp[exp.length-1].endDate.toISOString();
      }  
      else {
        exp[props.index] = form.getValues();
        exp[props.index].startDate = exp[props.index].startDate.toISOString();
        exp[props.index].endDate = exp[props.index].endDate.toISOString();
      }

      let updateProfile={...profile, experiences:exp};
      props.setEdit(false);
      dispatch(changeProfile(updateProfile));
      successNotification("Success",`Experience ${props.add?"Added": "Updated"} Successfully`);
      
  }

  return (
    <div className="flex flex-col gap-3 mt-4">
      <h4 className="text-lg font-semibold">
        {props.add ? "Add" : "Edit"} Experience
      </h4>
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput form={form} name="title" {...select[0]} />
        <SelectInput form={form} name="company" {...select[1]} />
      </div>
      <SelectInput form={form} name="location" {...select[2]} />

      <Textarea
        {
          ...form.getInputProps("description")
        }
        // value={description}
        // onChange={(event) => setDescription(event.currentTarget.value)}
        autosize
        minRows={4}
        placeholder="Description"
        label="Enter Summary"
        withAsterisk
        className="[&_textarea]:!font-semibold"
      />

      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          {...form.getInputProps('startDate')}
          label="Start Date"
          placeholder="Pick Date"
          // value={startDate}
          // onChange={setStartDate}
          maxDate={form.getValues().endDate || undefined}
          withAsterisk
          className="[&_button]:!font-semibold"
        />

        <MonthPickerInput
          {...form.getInputProps('endDate')}
          label="End Date"
          placeholder="Pick Date"
          // value={endDate}
          // onChange={setEndDate}
          maxDate={new Date()}
          minDate={form.getValues().startDate || undefined}
          withAsterisk
          disabled={form.getValues().working}
          className="[&_button]:!font-semibold"
        />
      </div>

      <Checkbox
        checked={form.getValues().working}
        label="Currently working here"
        autoContrast
        // value={checked}
        onChange={(event) => form.setFieldValue("working", event.currentTarget.checked)}
        className="[&_label]:!font-semibold"
      />

      <div className="flex gap-5 [&>*]:w-1/2">
        <Button
          color="caribbeanGreen.4"
          variant="outline"
          onClick={handleSave}
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
