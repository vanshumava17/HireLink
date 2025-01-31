import { Avatar, Button, Divider, Text, Modal, ActionIcon } from "@mantine/core";
import React, { useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router";
import { useDisclosure } from "@mantine/hooks";
import { DateInput, TimeInput } from "@mantine/dates";

const TalentCard = (props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState(null);
  const [timeValue, setTimeValue] = useState("");
  const ref = useRef(null);

  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="gray"
      onClick={() => ref.current?.showPicker()}
    >
      <FaRegClock size={16} stroke={1.5} />
    </ActionIcon>
  );

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
            {props.role} &#x2022; {props.company}
          </p>
        </div>
        <div className="ml-auto">
          <CiHeart className="text-2xl cursor-pointer" />
        </div>
      </div>

      <div className="flex gap-3 items-center justify-center mt-2">
        <p className="py-2 px-2 bg-mine-shaft-800 mt-2 text-caribbean-green-400 rounded-lg text-xs justify-between">
          {props.topSkills[0]}
        </p>
        <p className="py-2 px-2 bg-mine-shaft-800 mt-2 text-caribbean-green-400 rounded-lg text-xs justify-between">
          {props.topSkills[1]}
        </p>
        <p className="py-2 px-2 bg-mine-shaft-800 mt-2 text-caribbean-green-400 rounded-lg text-xs justify-between">
          {props.topSkills[2]}
        </p>
      </div>

      <div className="my-2">
        <Text lineClamp={3} className="!text-sm text-justify">
          {props.about}
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
                August 27,2024 10:00 AM
              </span>
            </p>
          </div>
        </>
      ) : (
        <div className="flex justify-between items-center my-2">
          <p className="font-bold">₹{props.expectedCTC}</p>
          <div className="flex items-center gap-1 font-semibold text-mine-shaft-400 text-sm">
            <IoLocationSharp className="h-4 w-4 font-bold" stroke={2} />
            {props.location}
          </div>
        </div>
      )}

      {props.invited ? (
        <div className="flex justify-between gap-4">
          <Button variant="outline" color="caribbeanGreen.4" fullWidth>
            Accept
          </Button>

          <Button variant="light" color="caribbeanGreen.4" fullWidth>
            Reject
          </Button>
        </div>
      ) : (
        <>
          <div className="flex items-center [&>*]:w-1/2 [&>*]:p-2">
            <Link to={"/talent-profile"}>
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

      <Modal
        opened={opened}
        onClose={close}
        title="Schedule Interview"
        centered
      >
        <div className="flex flex-col gap-4">
          <DateInput
            value={value}
            onChange={setValue}
            label="Date"
            placeholder="Choose Date"
            minDate={new Date()}
          />

          <TimeInput
            label="Time"
            ref={ref}
            rightSection={pickerControl}
          />
          <Button variant="light" color="caribbeanGreen.4" fullWidth>
            Schedule
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
