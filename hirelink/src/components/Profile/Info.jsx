import { ActionIcon, NumberInput } from "@mantine/core";
import React, { useState } from "react";
import { IoLocationSharp, IoSaveSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import SelectInput from "./SelectInput";
import { BiBriefcase } from "react-icons/bi";
import { fields } from "../../data/Profile";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../slices/ProfileSlice";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { SiExpensify } from "react-icons/si";

import {
  successNotification,
  errorNotification,
} from "../../services/NotificationService";

const Info = ({ item }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const select = fields;
  const profile = useSelector((state) => state.profile);
  const [edit, setEdit] = useState(false);

  // console.log(profile);
  const handleClick = () => {
    if (!edit) {
      setEdit(true);
      form.setValues({
        jobTitle: profile.jobTitle,
        company: profile.company,
        location: profile.location,
        totalExp: profile.totalExp,
      });
    } else {
      setEdit(false);
    }

    setEdit(!edit);
  };

  const handleSave = () => {
    setEdit(false);
    let updateProfile = { ...profile, ...form.getValues() };
    dispatch(changeProfile(updateProfile));
    successNotification("Success", "Profile Updated Successfully");
  };

  const form = useForm({
    mode: "controlled",
    initialValues: {
      name: user.name,
      jobTitle: "",
      company: "",
      location: "",
      totalExp: 0,
    },
  });
  return (
    <div className="px-3 mt-10 flex flex-col gap-1">
      <div className="text-3xl font-semibold flex justify-between">
        <p>{user.name}</p>
        <div>
          {edit && (
            <ActionIcon
              variant="subtle"
              size="xl"
              color="caribbeanGreen.4"
              //   color="green.8"
              onClick={handleSave}
            >
              <IoMdCheckmark className="h-3/5 w-3/5" />
            </ActionIcon>
          )}
          <ActionIcon
            variant="subtle"
            size="xl"
            color={edit ? "red.8" : "caribbeanGreen.4"}
            onClick={handleClick}
          >
            {edit ? (
              <RxCross2 className="h-3/5 w-3/5" />
            ) : (
              <MdEdit className="h-3/5 w-3/5" />
            )}
          </ActionIcon>
        </div>
      </div>

      {edit ? (
        <>
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput {...select[0]} form={form} name="jobTitle" />
            <SelectInput {...select[1]} form={form} name="company" />
          </div>

          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput {...select[2]} form={form} name="location" />
            <NumberInput
              {...select[3]}
              {...form.getInputProps("totalExp")}
              name="totalExp"
              label="Experience"
              hideControls
              leftSection={<SiExpensify />}
            />
          </div>
        </>
      ) : (
        <>
          <span className="text-xl flex items-center gap-2">
            {" "}
            <BiBriefcase className="h-5 w-5 font-bold" stroke={2} />
            {profile.jobTitle} &bull; {profile.company}
          </span>
          <div className="flex items-center gap-1 font-semibold text-mine-shaft-400 text-sm">
            <IoLocationSharp className="h-5 w-5 font-bold" stroke={2} />
            {profile.location}
          </div>

          <div className="flex items-center gap-1 font-semibold text-mine-shaft-400 text-sm mt-2">
            <SiExpensify className="h-5 w-5 font-bold" stroke={2} />
            <p className="text-white text-md">
              {profile.totalExp ? `${profile.totalExp} Years` : "Fresher"}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Info;
