import { ActionIcon } from "@mantine/core";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import CertificationCard from "./CertificationCard";
import CertificationInput from "./CertificationInput";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";


const Certificate = () => {
  const [edit, setEdit] = useState(false);
  const [addCertificate, setAddCertificate] = useState(false);
  const profile = useSelector((state) => state.profile);
  // console.log("IN certi")
  // console.log(profile.certifications);
  const handleClick=()=>{
    setEdit(!edit);
  }
  return (
    <div className="px-3 flex flex-col">
      <div className="text-2xl font-semibold mb-1 flex justify-between">
        Certifications
        <div className="flex gap-2">
          <ActionIcon
            variant="subtle"
            size="xl"
            color="caribbeanGreen.4"
            onClick={() => setAddCertificate(true)}
          >
            <FiPlus className="h-3/5 w-3/5" />
          </ActionIcon>

          <ActionIcon
            variant="subtle"
            size="xl"
            color={edit?"red.8": "caribbeanGreen.4"}
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
      <div className="flex flex-col gap-8">
        {profile?.certifications?.map((certi, index) => {
          return <CertificationCard key={index} index={index} {...certi} edit={edit} />;
        })}
        {addCertificate && <CertificationInput setEdit={setAddCertificate} />}
      </div>
    </div>
  );
};

export default Certificate;
