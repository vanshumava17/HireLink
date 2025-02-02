import { ActionIcon } from "@mantine/core";
import React from "react";
import { FaTrash, FaTrashAlt } from "react-icons/fa";
import { formatDate } from "../../services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../slices/ProfileSlice";
import { successNotification } from "../../services/NotificationService";

const CertificationCard = (props) => {
  // console.log(props);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const handleDelete = () => {
    let certis = [...profile.certifications];
    certis.splice(props.index, 1);
    let updateProfile = { ...profile, certifications: certis };
    dispatch(changeProfile(updateProfile));
    successNotification("Success", "Certificate Deleted Successfully");
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-mine-shaft-700 rounded-md">
            <img
              src={`/Icons/${props.issuer}.png`}
              alt="image"
              className="h-7"
            />
          </div>
          <div className="text-mine-shaft-300">
            <h5 className="font-semibold text-mine-shaft-200">{props.name}</h5>
            <p className="text-sm">{props.issuer}</p>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="flex flex-col items-end">
            <p className="text-sm text-mine-shaft-300">
              {formatDate(props.issueDate)}
            </p>
            <p className="text-sm text-mine-shaft-300">
              ID - {props.certificateId}
            </p>
          </div>

          {props.edit && (
            <ActionIcon
              onClick={handleDelete}
              variant="subtle"
              size="lg"
              color="red.4"
            >
              <FaTrashAlt className="h-3/5 w-3/5" />
            </ActionIcon>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
