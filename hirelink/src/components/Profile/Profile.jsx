import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Info from "./Info";
import { getProfile } from "../../services/ProfileService";
import { changeProfile, setProfile } from "../../slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificate from "./Certificate";
import { Avatar, Divider, FileInput } from "@mantine/core";
import { useHover } from '@mantine/hooks';
import { Button, Overlay, AspectRatio } from '@mantine/core';
import { FaEdit } from "react-icons/fa";
import { successNotification } from "../../services/NotificationService";

const Profile = (props) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const item = props[0];

  const user = useSelector((state) => state.user);
  const profile = useSelector((state) => state.profile);

  

  // const handleEdit = (index) => {
  //   const newEdit = [...edit];
  //   newEdit[index] = !newEdit[index];
  //   setEdit(newEdit);
  // };

  const { hovered, ref } = useHover();
  const handleFileChange = async (image)=>{
    let picture = await getBase64(image);
    let updateProfile={...profile,picture:picture.split(',')[1]};
    dispatch(changeProfile(updateProfile));
    successNotification("Success", "Profile Picture Updated Successfully");
  }

  const getBase64=(file)=>{
    return new Promise((resolve,reject)=>{
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload=()=>resolve(reader.result);
      reader.onerror=error=>reject(error);
    })
  }

 return (
    <div className="w-4/5 mx-auto ">
      <div>
      <div className="relative">
        <img
          src="/Profile/banner.png"
          alt=""
          className="rounded-t-2xl h-44 w-full"
        />
        <div ref={ref} className="absolute flex items-center justify-center -bottom-1/4 left-3">
        <Avatar 
          src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"avatar.webp"}
          alt=""
          className="rounded-full !h-48 !w-48  border-mine-shaft-950 border-8"
        />
        {hovered && <Overlay
        className="!rounded-full"
        color="#000" backgroundOpacity={0.85} />}
        {hovered && <FaEdit className="absolute  z-[300] w-12 h-12"/>}
        {
          hovered && 
          <FileInput 
        className="absolute w-full z-[301] [&_*]:!rounded-full [&_*]:!h-full !h-full  [&_div]:text-transparent"  
          accept="images/png,images/jpeg"
          variant="transparent"
          onChange={handleFileChange}
          />
          
        }
        </div>
      </div>
      {/* <div className="px-3 mt-10 flex flex-col gap-1">
        <div className="text-3xl font-semibold flex justify-between">
          <p>{item?.name}</p>
          <ActionIcon
            variant="subtle"
            size="xl"
            color="caribbeanGreen.4"
            onClick={() => handleEdit(0)}
          >
            {edit[0] ? (
              <IoSaveSharp className="h-3/5 w-3/5" />
            ) : (
              <MdEdit className="h-3/5 w-3/5" />
            )}
          </ActionIcon>
        </div>

        {edit[0] ? (
          <>
            <div className="flex gap-10 [&>*]:w-1/2">
              <SelectInput {...select[0]} />
              <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
          </>
        ) : (
          <>
            <span className="text-xl flex items-center gap-2">
              {" "}
              <BiBriefcase className="h-5 w-5 font-bold" stroke={2} />
              {item?.role} &bull; {item?.company}
            </span>
            <div className="flex items-center gap-1 font-semibold text-mine-shaft-400 text-sm">
              <IoLocationSharp className="h-5 w-5 font-bold" stroke={2} />
              {item?.location}
            </div>
          </>
        )}
      </div> */}
      <Info item={item} />

      <Divider size="sm" my="lg" />

      <About />

      <Divider size="sm" my="lg" />

      <Skills />

      <Divider size="sm" my="lg" />

      <Experience />

      <Divider size="sm" my="lg" />
      <Certificate/>
      </div>
    </div>
  );
};

export default Profile;
