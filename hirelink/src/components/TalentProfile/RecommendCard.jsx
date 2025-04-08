import {
  Avatar,
  Button,
  Divider,
  Text,
  Modal,
  ActionIcon,
} from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link, useParams } from "react-router";
import { useDisclosure } from "@mantine/hooks";
import { DateInput, TimeInput } from "@mantine/dates";
import { getProfile } from "../../services/ProfileService";
import { changeApplicationStatus } from "../../services/JobService";
import {
  errorNotification,
  successNotification,
} from "../../services/NotificationService";
import {
  formatInterviewTime,
  openBase64PDFINNewTab,
} from "../../services/Utilities";

const RecommendCard = (props) => {
  //   console.log(props);

  const [profile, setProfile] = useState({});

  // console.log(props);

  useEffect(() => {
    setProfile(props);
  }, [props]);

  //   console.log(profile);

  return (
    <div className="bg-mine-shaft-900 p-4 w-108 rounded-lg hover:shadow-[0_0_5px_1px_yellow] !shadow-caribbean-green-400 cursor-pointer min-h-56">
      <div className="flex items-center gap-2">
        <div className=" bg-mine-shaft-700 rounded-full">
          <Avatar src={props.image} alt="" size="lg" />
        </div>
        <div className="text-mine-shaft-300">
          <h5 className="font-semibold text-mine-shaft-200 text-lg">
            {profile.name}
          </h5>
          <p className="text-sm">
            {profile.jobTitle} &#x2022; {profile.company}
          </p>
        </div>
        <div className="ml-auto">
          <CiHeart className="text-2xl cursor-pointer" />
        </div>
      </div>

      <div className="flex gap-3 items-center justify-center mt-2">
        {profile.skills?.length > 0 && (
          <p className="py-2 px-2 bg-mine-shaft-800 mt-2 text-caribbean-green-400 rounded-lg text-xs justify-between">
            {profile.skills[0]}
          </p>
        )}
        {profile.skills?.length > 1 && (
          <p className="py-2 px-2 bg-mine-shaft-800 mt-2 text-caribbean-green-400 rounded-lg text-xs justify-between">
            {profile.skills[1]}
          </p>
        )}
        {profile.skills?.length > 2 && (
          <p className="py-2 px-2 bg-mine-shaft-800 mt-2 text-caribbean-green-400 rounded-lg text-xs justify-between">
            {profile.skills[2]}
          </p>
        )}
      </div>

      <div className="my-2">
        <Text lineClamp={3} className="!text-sm text-justify">
          {profile.about}
        </Text>
      </div>

      <Divider size="xs" color="mineShaft.3" />
      {props.invited ? (
        <>
          <div className="flex gap-2 items-center my-2">
            <FaCalendarAlt />
            <p className="font-semibold text-mine-shaft-300">
              Interview:{" "}
              <span className="text-mine-shaft-400">
                {formatInterviewTime(props.interviewTime)}
              </span>
            </p>
          </div>
        </>
      ) : (
        <div className="flex justify-between items-center my-2">
          <p className="font-bold">₹ 23 LPA</p>
          <div className="flex items-center gap-1 font-semibold text-mine-shaft-400 text-sm">
            <IoLocationSharp className="h-4 w-4 font-bold" stroke={2} />
            {profile.location}
          </div>
        </div>
      )}

      <div className="flex items-center [&>*]:w-1/2 [&>*]:p-2">
        <Link to={`/talent-profile/${profile?.id}`}>
          <Button variant="outline" color="caribbeanGreen.4" fullWidth>
            Profile
          </Button>
        </Link>
        <div>
          <Button variant="light" color="caribbeanGreen.4" fullWidth>
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
