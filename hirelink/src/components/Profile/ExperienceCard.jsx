import { Button } from "@mantine/core";
import React, { useState } from "react";
import ExperienceInput from "./ExperienceInput";
import { MdEdit } from "react-icons/md";
import { formatDate } from "../../services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../slices/ProfileSlice";
import { successNotification } from "../../services/NotificationService";

const ExperienceCard = (props) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const profile = useSelector((state)=>state.profile);
  const handleDelete=()=>{
    let exp = [...profile.experiences];
    exp.splice(props.index,1);
    let updateProfile = {...profile,experiences:exp};
    dispatch(changeProfile(updateProfile));
    successNotification("Success","Experience Deleted Successfully");
  }
  return !edit ? (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-mine-shaft-700 rounded-md">
              <img
                src={`/Icons/${props.company}.png`}
                alt="image"
                className="h-7"
              />
            </div>
            <div className="text-mine-shaft-300">
              <h5 className="font-semibold text-mine-shaft-200">
                {props.title}
              </h5>
              <p className="text-sm">
                {props.company} &#x2022; {props.location}
              </p>
            </div>
          </div>
          <div className="ml-12">
            <p className="text-sm text-mine-shaft-300 ">
              {formatDate(props.startDate)} -{props.working?"Present" : formatDate(props.endDate) }
            </p>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300 text-justify" >
          {props.description}
        </div>

        {props.edit && (
          <div className="flex gap-5">
            <Button
              color="caribbeanGreen.4"
              variant="outline"
              onClick={() => setEdit(true)}
              leftSection={<MdEdit />}
            >
              Edit
            </Button>

            <Button color="red.4" variant="light" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        )}
      </div>
    </>
  ) : (
    <ExperienceInput {...props} setEdit={setEdit} />
  );
};

export default ExperienceCard;
