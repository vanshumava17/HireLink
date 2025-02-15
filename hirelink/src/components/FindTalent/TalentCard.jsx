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

const TalentCard = (props) => {
  // console.log(props);
  
  const [opened, { open, close }] = useDisclosure(false);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [timeValue, setTimeValue] = useState("");
  const [application, { open: openApplication, close: closeApplication }] =
    useDisclosure(false);
  const [profile, setProfile] = useState({});
  const ref = useRef(null);

  const { id } = useParams();

  // console.log(props);

  useEffect(() => {
    if (props.applicantId)
      getProfile(props.applicantId)
        .then((res) => {
          setProfile(res);
        })
        .catch((err) => {
          console.log(err);
        });
    else {
      setProfile(props);
    }

    // console.log(props.interviewTime);
  }, [props]);

  // console.log(profile);

  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="gray"
      onClick={() => ref.current?.showPicker()}
    >
      <FaRegClock size={16} stroke={1.5} />
    </ActionIcon>
  );

  const handleOffer = (status) => {
    let interview = {
      id,
      applicantId: profile?.id,
      applicationStatus: status,
    };

    if (status === "INTERVIEWING") {
      const [hours, minutes] = time.split(":").map(Number);
      date?.setHours(hours, minutes);
      interview = { ...interview, interviewTime: date };
    }

    changeApplicationStatus(interview)
      .then((res) => {
        if (status === "INTERVIEWING")
          successNotification(
            "Interview Scheduled",
            "Interview Scheduled Succesfully"
          );
        else if (status === "OFFERED")
          successNotification("Offered", "Offer send successfully");
        else successNotification("Rejected", "Applicant had been Rejected");

        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        errorNotification("Error", error.response.data.errorMessage);
      });
  };

  return (
    <div className="bg-mine-shaft-900 p-4 w-108 rounded-lg hover:shadow-[0_0_5px_1px_yellow] !shadow-caribbean-green-400 cursor-pointer min-h-56">
      <div className="flex items-center gap-2">
        <div className=" bg-mine-shaft-700 rounded-full">
          <Avatar src={props.image} alt="" size="lg" />
        </div>
        <div className="text-mine-shaft-300">
          <h5 className="font-semibold text-mine-shaft-200 text-lg">
            {props.name}
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

      {props.invited ? (
        <div className="flex justify-between gap-4">
          <Button
            variant="outline"
            color="caribbeanGreen.4"
            fullWidth
            onClick={() => handleOffer("OFFERED")}
          >
            Accept
          </Button>

          <Button
            variant="light"
            color="caribbeanGreen.4"
            fullWidth
            onClick={() => handleOffer("REJECTED")}
          >
            Reject
          </Button>
        </div>
      ) : (
        <>
          <div className="flex items-center [&>*]:w-1/2 [&>*]:p-2">
            <Link to={`/talent-profile/${profile?.id}`}>
              <Button variant="outline" color="caribbeanGreen.4" fullWidth>
                Profile
              </Button>
            </Link>
            <div>
              {props.posted ? (
                <Button
                  variant="light"
                  color="caribbeanGreen.4"
                  fullWidth
                  rightSection={<FaCalendarAlt />}
                  onClick={open}
                >
                  Schedule
                </Button>
              ) : (
                <Button variant="light" color="caribbeanGreen.4" fullWidth>
                  Message
                </Button>
              )}
            </div>
          </div>
        </>
      )}

      {(props.invited || props.posted) && (
        <Button
          variant="filled"
          color="caribbeanGreen.4"
          fullWidth
          className="mt-4"
          onClick={openApplication}
        >
          View Application
        </Button>
      )}

      <Modal
        opened={opened}
        onClose={close}
        title="Schedule Interview"
        centered
      >
        <div className="flex flex-col gap-4">
          <DateInput
            value={date}
            onChange={setDate}
            label="Date"
            placeholder="Choose Date"
            minDate={new Date()}
          />

          <TimeInput
            label="Time"
            ref={ref}
            rightSection={pickerControl}
            value={time}
            onChange={(e) => setTime(e.currentTarget.value)}
          />
          <Button
            variant="light"
            color="caribbeanGreen.4"
            fullWidth
            onClick={() => handleOffer("INTERVIEWING")}
          >
            Schedule
          </Button>
        </div>
      </Modal>

      <Modal
        opened={application}
        onClose={closeApplication}
        title="Applicant Details"
        centered
      >
        <div className="flex flex-col gap-4">
          <div>
            Email: &emsp;{" "}
            <a
              className="text-caribbean-green-400 hover:underline cursor-pointer text-center"
              href={`mailto:${props.email}`}
            >
              {props.email}
            </a>
          </div>

          <div>
            Website: &emsp;{" "}
            <a
              className="text-caribbean-green-400 hover:underline cursor-pointer text-center"
              href={`${props.website}`}
              target="_blank"
            >
              {props.website}
            </a>
          </div>

          <div>
            Resume: &emsp;{" "}
            <span
              className="text-caribbean-green-400 hover:underline cursor-pointer text-center"
              onClick={() => openBase64PDFINNewTab(props.resume)}
            >
              {props.name}
            </span>
          </div>

          <div>
            CoverLetter: &emsp;{" "}
            <span className="text-caribbean-green-400 text-justify">
              {props.coverLetter}
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
