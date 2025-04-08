import { notifications } from "@mantine/notifications";
import React from "react";
import { BsX } from "react-icons/bs";
import { PiCheckFatFill } from "react-icons/pi";

const successNotification = (title, message) => {
  notifications.show({
    title: title,
    message: message,
    icon: <PiCheckFatFill style={{ width: "90%", height: "90%" }} />,
    color: "teal",
    withBorder: true,
    className: "!border-green-500",
    withCloseButton: true,
  });
};


const errorNotification = (title,message)=>{
    notifications.show({
                title: title,
                message: message,
                withCloseButton: true,
                icon: <BsX style={{ width: "90%", height: "90%" }} />,
                color: "red",
                withBorder: true,
                className: "!border-red-500",
                styles: {
                  description: { color: "mineShaft.4" }, // Change message text color
                },
              });
}

export {successNotification , errorNotification};