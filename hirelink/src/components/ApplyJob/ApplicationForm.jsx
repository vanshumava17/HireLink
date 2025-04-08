import { Button, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { TbFileCv } from "react-icons/tb";
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { getBase64 } from "../../services/Utilities"
import { useParams } from "react-router";
import {applyJob} from "../../services/JobService";
import {successNotification , errorNotification} from "../../services/NotificationService";
import {useSelector } from "react-redux";
const ApplicationForm =()=> {
  const {id} = useParams();
  const user = useSelector((status)=>status.user);
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handlePreview = () => {
    form.validate();
    if(!form.isValid())return;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPreview(!preview);
  };

  const handleSubmit = async() => {
    setSubmit(true);
    let resume = await getBase64(form.getValues().resume);
    let applicant = {...form.getValues(),applicantId:user.id,resume: resume.split(',')[1]};
    applyJob(id, applicant).then((res)=>{
      setSubmit(false);
      successNotification("Success","Application Submitted Successfully.");
    })
    .catch((err)=>{
      setSubmit(false);
      errorNotification("Error",err.response.data.errorMessage);
    })
  };

  const form = useForm({
    mode: 'controlled',
    validateInputOnChange: true,
    initialValues : {
        name:'',
        email:'',
        phone:'',
        website:'',
        resume:null,
        coverLetter:'',
    },
    validate: {
        name: isNotEmpty('Name is required'),
        email: isNotEmpty('Email is required'),
        phone: isNotEmpty('Phone is required'),
        // website: isNotEmpty('Website is required'),
        resume: isNotEmpty('Resume is required'),
    }
  })

  return (
    <div>
        <LoadingOverlay
          className="!fixed"
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: "md", blur: 2 }}
          loaderProps={{ color: "caribbeanGreen.4", type: "bars" }}
        />
      <p className="text-2xl font-semibold my-3">Submit Your Application</p>

      <div className="flex gap-4 flex-col">
        <div className="flex gap-10 [&>*]:w-1/2">
          <TextInput
            {...form.getInputProps("name")}
            label="Full Name"
            placeholder="Enter Name"
            withAsterisk
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview} ? [&_input]:!text-mine-shaft-300 !font-semibold : ''`}
          />
          <TextInput
            {...form.getInputProps("email")}
            label="Email"
            placeholder="Enter Email"
            withAsterisk
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview} ? [&_input]:!text-mine-shaft-300 !font-semibold : ''`}
          />
        </div>

        <div className="flex gap-10 [&>*]:w-1/2">
          <NumberInput
            {...form.getInputProps("phone")}
            label="Phone Number"
            placeholder="Enter Phone Number"
            withAsterisk
            hideControls
            min={0}
            max={9999999999}
            clampBehavior="strict"
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview} ? [&_input]:!text-mine-shaft-300 !font-semibold : ''`}
          />
          <TextInput
            {...form.getInputProps("website")}
            label="Personal Portfolio"
            placeholder="Enter Url"
            withAsterisk
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview} ? [&_input]:!text-mine-shaft-300 !font-semibold : ''`}
          />
        </div>

        <FileInput
            {...form.getInputProps("resume")}
            accept="application/pdf"
          rightSection={<TbFileCv size={24} stroke={1.5} />}
          label="Attach your Resume"
          placeholder="Upload Your Resume"
          leftSectionPointerEvents="none"
          withAsterisk
          readOnly={preview}
          variant={preview ? "unstyled" : "default"}
          className={`${preview} ? [&_input]:!text-mine-shaft-300 !font-semibold : ''`}
        />

        <Textarea
            {...form.getInputProps("coverLetter")}
          placeholder="Type something about yourself..."
          label="Cover Letter"
          autosize
          minRows={2}
          withAsterisk
          readOnly={preview}
          variant={preview ? "unstyled" : "default"}
          className={`${preview} ? [&_input]:!text-mine-shaft-300 !font-semibold : ''`}
        />

        <div className="flex gap-10">
          {!preview && (
            <Button
              color="caribbeanGreen.4"
              variant="light"
              fullWidth
              onClick={() => handlePreview()}
            >
              Preview
            </Button>
          )}

          {preview && (
            <>
              <Button
                color="caribbeanGreen.4"
                variant="light"
                fullWidth
                onClick={() => handlePreview()}
              >
                Edit
              </Button>

              <Button
                color="caribbeanGreen.4"
                variant="outlined"
                fullWidth
                onClick={() => handleSubmit()}
              >
                Submit
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ApplicationForm;
