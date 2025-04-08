import React, { useEffect, useState } from "react";
import { Menu, Indicator, Notification } from "@mantine/core";
import { FaCheck } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { getNotification, readNotification } from "../../services/NotiService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NotificationMenu = () => {
  const [opened, setOpened] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const user = useSelector((state) => state.user);

  const navigation = useNavigate();

  useEffect(() => {
    if (user && user.id) {
      getNotification(user.id)
        .then((res) => {
          setNotifications(res);
        })
        .catch((error) => console.log(error));
    }
  }, [user]);

  const unread = (index) => {
    let notification = [...notifications];
    notification.filter((item, i) => i !== index);
    setNotifications(notification);
    readNotification(notifications[index].id).then((res) =>
      console.log(res).catch((error) => console.log(error))
    );
  };

  return (
    <Menu
      shadow="md"
      width={400}
      transitionProps={{ transition: "rotate-right", duration: 150 }}
      onChange={setOpened}
      opened={opened}
    >
      <Menu.Target>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full hover:bg-mine-shaft-700 cursor-pointer">
          <Indicator
            color="caribbeanGreen.4"
            processing
            disabled={notifications.length <= 0}
          >
            <IoNotifications />
          </Indicator>
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={() => setOpened(true)}>
        <div className="flex flex-col">
          {notifications.length > 0 ? (
            notifications.map((item, index) => (
              <React.Fragment key={index}>
                <Notification
                  icon={<FaCheck />}
                  className="hover:!bg-mine-shaft-900 cursor-pointer"
                  onClose={() => unread(index)}
                  onClick={() => {
                    navigation(item.route);
                    setOpened(false);
                    unread(index);
                  }}
                >
                  {item.message}
                </Notification>
                <Menu.Divider />
              </React.Fragment>
            ))
          ) : (
            <div className="text-center text-sm text-gray-400 py-4">
              No notifications
            </div>
          )}
        </div>
      </Menu.Dropdown>
    </Menu>
  );
};

export default NotificationMenu;
