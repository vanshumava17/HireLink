import {
  ActionIcon,
  Button,
  Divider,
  TagsInput,
  Textarea,
} from "@mantine/core";
import React, { useState } from "react";
import { BiBriefcase } from "react-icons/bi";
import { IoLocationSharp, IoSaveSharp } from "react-icons/io5";
import ExperienceCard from "./ExperienceCard";
import CertificationCard from "./CertificationCard";
import { FaEdit, FaPlus, FaRegEdit } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import SelectInput from "./SelectInput";
import { fields } from "../../data/Profile";
import { FiPlus } from "react-icons/fi";
import ExperienceInput from "./ExperienceInput";
import CertificationInput from "./CertificationInput";

const Profile = (props) => {
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [about, setAbout] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In non eius labore sed quas velit reprehenderit repellat ipsam dicta et ratione alias magni, quisquam magnam rerum quidem. Repellendus esse amet soluta, neque magnam accusamus consectetur numquam inventore quasi ex laudantium. Laborum, beatae dicta molestiae veniam deleniti eos labore impedit asperiores."
  );
  const [skillsValue, setSkillsValue] = useState([
    "React",
    "SpringBoot",
    "MongoDB",
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Java",
    "SQL",
  ]);
  const [addExperience, setAddExperience] = useState(false);
  const [addCertificate, setAddCertificate] = useState(false);

  const item = props[0];

  const select = fields;

  const handleEdit = (index) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  return (
    <div className="w-4/5 mx-auto my-5">
      <div className="relative">
        <img
          src="/Profile/banner.png"
          alt=""
          className="rounded-t-2xl h-44 w-full"
        />
        <img
          src="avatar.webp"
          alt=""
          className="rounded-full h-40 w-40 -bottom-1/5 absolute left-3 border-mine-shaft-950 border-8"
        />
      </div>
      <div className="px-3 mt-10 flex flex-col gap-1">
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
      </div>

      <Divider size="sm" my="lg" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          <h4>About</h4>
          <ActionIcon
            variant="subtle"
            size="xl"
            color="caribbeanGreen.4"
            onClick={() => handleEdit(1)}
          >
            {edit[1] ? (
              <IoSaveSharp className="h-3/5 w-3/5" />
            ) : (
              <MdEdit className="h-3/5 w-3/5" />
            )}
          </ActionIcon>
        </div>

        {edit[1] ? (
          <Textarea
            value={about}
            onChange={(event) => setAbout(event.currentTarget.value)}
            autosize
            minRows={4}
            placeholder="About your self"
          />
        ) : (
          <p className="text-md text-mine-shaft-200 text-justify">
            {item?.about}
          </p>
        )}
      </div>

      <Divider size="sm" my="lg" />

      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          <h4>Skills</h4>
          <ActionIcon
            variant="subtle"
            size="xl"
            color="caribbeanGreen.4"
            onClick={() => handleEdit(2)}
          >
            {edit[2] ? (
              <IoSaveSharp className="h-3/5 w-3/5" />
            ) : (
              <MdEdit className="h-3/5 w-3/5" />
            )}
          </ActionIcon>
        </div>

        {edit[2] ? (
          <TagsInput
            placeholder="Enter tag"
            splitChars={[",", "|"]}
            value={skillsValue}
            onChange={setSkillsValue}
            clearable
            className="[&_input]:!font-semibold [&_span]:!font-semibold"
          />
        ) : (
          <div className="flex flex-wrap gap-2">
            {item?.skills.map((skill, index) => {
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

      <Divider size="sm" my="lg" />
      <div className="px-3 flex flex-col">
        <div className="text-2xl font-semibold mb-1 flex justify-between">
          Experience
          {edit[3] ? (
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
                color="caribbeanGreen.4"
                onClick={() => handleEdit(3)}
              >
                <IoSaveSharp className="h-3/5 w-3/5" />
              </ActionIcon>
            </div>
          ) : (
            <ActionIcon
              variant="subtle"
              size="xl"
              color="caribbeanGreen.4"
              onClick={() => handleEdit(3)}
            >
              <MdEdit className="h-3/5 w-3/5" />
            </ActionIcon>
          )}
        </div>
        {item?.experience.map((expCard, index) => {
          return <ExperienceCard key={index} {...expCard} edit={edit[3]} />;
        })}

        {addExperience ? (
          <ExperienceInput setEdit={setAddExperience} add />
        ) : (
          <></>
        )}
      </div>

      <Divider size="sm" my="lg" />
      <div className="px-3 flex flex-col">
        <div className="text-2xl font-semibold mb-1 flex justify-between">
          Certifications
          {edit[4] ? (
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
                color="caribbeanGreen.4"
                onClick={() => handleEdit(4)}
              >
                <IoSaveSharp className="h-3/5 w-3/5" />
              </ActionIcon>
            </div>
          ) : (
            <ActionIcon
              variant="subtle"
              size="xl"
              color="caribbeanGreen.4"
              onClick={() => handleEdit(4)}
            >
              <MdEdit className="h-3/5 w-3/5" />
            </ActionIcon>
          )}
        </div>
        {item?.certifications.map((certCard, index) => {
          return <CertificationCard key={index} {...certCard} edit={edit[4]} />;
        })}
        {addCertificate && <CertificationInput setEdit={setAddCertificate} />}
      </div>
    </div>
  );
};

export default Profile;
