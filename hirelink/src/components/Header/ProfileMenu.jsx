import React, { useState } from "react";
import { Menu, Button, Text, Avatar, Switch } from "@mantine/core";
import { CgProfile } from "react-icons/cg";
import { RiMessage2Line } from "react-icons/ri";
import { FaRegFileCode } from "react-icons/fa";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { TbSun } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router";

const ProfileMenu = () => {
  const [checked, setChecked] = useState(false);
  const [opened, setOpened] = useState(false);
  return (
    <Menu
      shadow="md"
      width={200}
      transitionProps={{ transition: "rotate-right", duration: 150 }}
      onChange={setOpened}
      opened={opened}
    >
      <Menu.Target>
        <div className="flex items-center gap-3">
          <p>Prashant</p>
          <Avatar
            src="avatar.webp"
            alt="it's me"
            className="cursor-pointer hover:opacity-70"
          />
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={() => setOpened(true)}>
        <Link to={"/profile"}>
          <Menu.Item leftSection={<CgProfile size={14} />}>Profile</Menu.Item>
        </Link>
        <Menu.Item leftSection={<RiMessage2Line size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<FaRegFileCode size={14} />}>Resume</Menu.Item>
        <Menu.Item
          leftSection={<IoMoonOutline size={14} />}
          rightSection={
            <Switch
              size="md"
              color="dark.4"
              onLabel={<IoSunny size={16} stroke={2.5} color="yellow" />}
              offLabel={
                <BsFillMoonStarsFill size={12} stroke={2.5} color="cyan" />
              }
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
            />
          }
        >
          Dark Mode
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          leftSection={<CiLogout size={18} />}
          className="!text-red-500 !font-semibold"
        >
          LogOut
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
