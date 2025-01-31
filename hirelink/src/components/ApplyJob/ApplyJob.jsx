import {
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import { Notification as MantineNotification } from "@mantine/core";
import { useNavigate } from "react-router";
import { TbFileCv } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";

const ApplyJob = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [second, setSecond] = useState(5);

  const navigate = useNavigate();

  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = () => {
    setSubmit(true);

    let x = 5;
    setInterval(() => {
      x--;
      setSecond(x);

      if (x == 0) {
        navigate("/find-jobs");
      }
    }, 1000);
  };

  return (
    <>
      <div className="w-2/3 mx-auto">
        <LoadingOverlay
          className="!fixed"
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: "md", blur: 2 }}
          loaderProps={{ color: "caribbeanGreen.4", type: "bars" }}
        />

        <div className="flex items-center gap-2">
          <div className="p-3 bg-mine-shaft-700 rounded-md">
            <img src="/Icons/Google.png" alt="" className="h-14" />
          </div>
          <div className="text-mine-shaft-300">
            <h5 className="font-semibold text-mine-shaft-200 text-2xl">
              Software Engineer
            </h5>
            <p className="text-md">Google &#x2022; 3 days ago</p>
          </div>
        </div>
        <Divider size="sm" className="my-3" />

        <p className="text-2xl font-semibold my-3">Submit Your Application</p>

        <div className="flex gap-4 flex-col">
          <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput
              label="Full Name"
              placeholder="Enter Name"
              withAsterisk
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview} ? [&_input]:!text-mine-shaft-300 !font-semibold : ''`}
            />
            <TextInput
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
              label="Personal Portfolio"
              placeholder="Enter Url"
              withAsterisk
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={`${preview} ? [&_input]:!text-mine-shaft-300 !font-semibold : ''`}
            />
          </div>

          <FileInput
            rightSection={<TbFileCv size={24} stroke={1.5} />}
            label="Attach your CV"
            placeholder="Upload Your CV"
            leftSectionPointerEvents="none"
            withAsterisk
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview} ? [&_input]:!text-mine-shaft-300 !font-semibold : ''`}
          />

          <Textarea
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

      <MantineNotification
        icon={<FaCheck size={20} />}
        color="teal"
        title="Application Submitted"
        mt="md"
        withCloseButton={false}
        withBorder
        className={`!border !border-caribbean-green500 !fixed top-0 left-[35%]  transition duration-300 ease-in-out z-[10001] ${
          submit ? "translate-y-0" : "-translate-y-20"
        }`}
      >
        Redirecting to find Jobs in {second} seconds...
      </MantineNotification>
    </>
  );
};

export default ApplyJob;
