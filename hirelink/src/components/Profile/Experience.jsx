import { ActionIcon } from "@mantine/core";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoSaveSharp } from "react-icons/io5";
import ExperienceCard from "./ExperienceCard";
import ExperienceInput from "./ExperienceInput";
import { MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";


const Experience = () => {
  const profile = useSelector((state) => state.profile);
  const [edit, setEdit] = useState(false);
  const [addExperience, setAddExperience] = useState(false);
  const handleClick = () => {
    setEdit(!edit);
  };

  return (
    <div className="px-3 flex flex-col">
      <div className="text-2xl font-semibold mb-1 flex justify-between">
        Experience
        <div className="flex gap-2">
          <ActionIcon
            variant="subtle"
            size="xl"
            color="caribbeanGreen.4"
            onClick={() => setAddExperience(true)}
          >
            <FiPlus className="h-3/5 w-3/5" />
          </ActionIcon>

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
        {/* <ActionIcon
              variant="subtle"
              size="xl"
              color="caribbeanGreen.4"
              onClick={() => handleEdit(3)}
            >
              <MdEdit className="h-3/5 w-3/5" />
            </ActionIcon> */}
      </div>

      <div className="flex flex-col gap-8">
        {profile?.experiences?.map((expCard, index) => (
          <ExperienceCard key={index} index={index} {...expCard} edit={edit} />
        ))}

        {addExperience && <ExperienceInput setEdit={setAddExperience} add />}
      </div>
    </div>
  );
};

export default Experience;
