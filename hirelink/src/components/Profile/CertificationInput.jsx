import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { fields } from "../../data/Profile";
import { Button, Checkbox, Textarea, TextInput } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../slices/ProfileSlice";
import { successNotification } from "../../services/NotificationService";

const CertificationInput = (props) => {
  const dispatch = useDispatch();
  const select = fields;
  const profile = useSelector((state)=>state.profile);
  const form = useForm({
      mode: "controlled",
      validateInputOnChange: true,
      initialValues: {
        name: "",
        issuer: "",
        issueDate: new Date(),
        certificateId: "" 
      },
      validate: {
        name: isNotEmpty("Name is required"),
        issuer: isNotEmpty("Issuer is required"),
        issueDate: isNotEmpty("Issue Date is required"),
        certificateId: isNotEmpty("Certificate ID is required"),
      },
    });

    const handleSave = ()=>{
      form.validate();
      if(!form.isValid()) return;
      let certi=[...profile.certifications];
      certi.push(form.getValues());
      certi[certi.length-1].issueDate=certi[certi.length-1].issueDate.toISOString();
      let updatedProfile={...profile,certifications:certi};
      props.setEdit(false);
      dispatch(changeProfile(updatedProfile));
      successNotification("Success","Certificate Added Successfully");
    }

  const [issueDate, setIssueDate] = useState(new Date());

  return (
    // <div className="flex flex-col gap-3 mt-4">
    <div>
      <h4 className="text-lg font-semibold">Add Certificate</h4>

      <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput
          {
            ...form.getInputProps("name")
          }
          label="Title"
          placeholder="Enter title"
          withAsterisk
          className="[&_input]:!font-semibold"
        />
        <SelectInput form={form} name="issuer" {...select[1]} />
      </div>

      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
        {
          ...form.getInputProps("issueDate")
        }
          label="Issue Date"
          placeholder="Pick Date"
          maxDate={new Date()}
          withAsterisk
          className="[&_button]:!font-semibold"
        />

        <TextInput
        {
          ...form.getInputProps("certificateId")
        }
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

export default CertificationInput;
