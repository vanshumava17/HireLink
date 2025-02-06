import {
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import { Notification as MantineNotification } from "@mantine/core";
import { useNavigate, useParams } from "react-router";
import { TbFileCv } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import ApplicationForm from "./ApplicationForm";
import { timeAgo } from "../../services/Utilities";

const ApplyJob = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [job, setJob] = useState(null);
  return (
      <div className="w-2/3 mx-auto">

        <div className="flex items-center gap-2">
          <div className="p-3 bg-mine-shaft-700 rounded-md">
            <img src="/Icons/Google.png" alt="" className="h-14" />
          </div>
          <div className="text-mine-shaft-300">
            <h5 className="font-semibold text-mine-shaft-200 text-2xl">
              {props.jobTitle}
            </h5>
            <p className="text-md">{props.company} &#x2022; {timeAgo(props.postTime)} &#x2022; {props.applicants?props.applicants.length:0} Applicants</p>
          </div>
        </div>
        <Divider size="sm" className="my-3" />

        <ApplicationForm {...job}/>
      </div>
  );
};

export default ApplyJob;
