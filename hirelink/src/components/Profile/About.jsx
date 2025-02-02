import { Divider, ActionIcon, TagsInput, Textarea } from "@mantine/core";
import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { IoSaveSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../slices/ProfileSlice";
import { successNotification } from "../../services/NotificationService";

const About = () => {
    const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const profile = useSelector((state)=>state.profile);
  const [about, setAbout] = useState("");

  const handleClick = () => {
    if (!edit) {
      setEdit(true);
      setAbout(profile.about);

    } else {
      setEdit(false);
    }

    setEdit(!edit);
  };

  const handleSave=()=>{
    setEdit(false);
    let updateProfile = { ...profile, about:about };
    dispatch(changeProfile(updateProfile));
    successNotification("Success", "About Updated Successfully");
  }


  return (
    <div className="px-3">
      <div className="text-2xl font-semibold mb-3 flex justify-between">
        <h4>About</h4>
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
        <Textarea
          value={about}
          onChange={(event) => setAbout(event.currentTarget.value)}
          autosize
          minRows={4}
          placeholder="About your self"
        />
      ) : (
        <p className="text-md text-mine-shaft-200 text-justify">
          {profile?.about}
        </p>
      )}
    </div>
  );
};

export default About;
