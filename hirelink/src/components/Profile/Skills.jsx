import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../slices/ProfileSlice";
import { successNotification } from "../../services/NotificationService";
import { ActionIcon, TagsInput } from "@mantine/core";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { MdEdit } from "react-icons/md";

const Skills = () => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const profile = useSelector((state) => state.profile);
  const [skills, setSkills] = useState([]);

  const handleClick = () => {
    if (!edit) {
      setEdit(true);
      setSkills(profile.skills);
    } else {
      setEdit(false);
    }

    setEdit(!edit);
  };

  const handleSave = () => {
    setEdit(false);
    let updateProfile = { ...profile, skills: skills };
    dispatch(changeProfile(updateProfile));
    successNotification("Success", "Skills Updated Successfully");
  };

  return (
    <div className="px-3">
      <div className="text-2xl font-semibold mb-3 flex justify-between">
        <h4>Skills</h4>
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
        <TagsInput
          placeholder="Add skills"
          splitChars={[",", "|"]}
          value={skills}
          onChange={setSkills}
          clearable
          className="[&_input]:!font-semibold [&_span]:!font-semibold"
        />
      ) : (
        <div className="flex flex-wrap gap-2">
          {profile?.skills?.map((skill, index) => {
            return (
              <p
                className="bg-mine-shaft-800 rounded-3xl text-caribbean-green-400 px-3 py-1 font-medium"
                key={index}
              >
                {skill}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Skills;
