import { Avatar, Button, Indicator, useSafeMantineTheme } from "@mantine/core";
import React, { useEffect } from "react";
import { TbHexagonLetterH } from "react-icons/tb";
import { IoNotifications, IoSettingsOutline } from "react-icons/io5";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router";
import ProfileMenu from "./ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../services/ProfileService";
import { setProfile } from "../../slices/ProfileSlice";
<<<<<<< HEAD

const Header = () => {
  const location = useLocation();
  const user = useSelector((state)=>state.user);
  const dispatch = useDispatch();

  // console.log(user);
  
=======
import NotificationMenu from "./NotificationMenu";

const Header = () => {
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // console.log(user);

>>>>>>> master
  // useEffect(() => {
  //     getProfile(user.id)
  //       .then((data) => {
  //         // console.log(profile);
  //         // console.log(JSON.stringify(profile) )
  //         dispatch(setProfile(data));
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  useEffect(() => {
<<<<<<< HEAD
    if (user) {  // Only fetch profile if user is not null
=======
    if (user) {
      // Only fetch profile if user is not null
>>>>>>> master
      getProfile(user.id)
        .then((data) => {
          dispatch(setProfile(data));
        })
        .catch((error) => {
          console.error("Error fetching profile:", error);
        });
    }
  }, [user]); // Depend on user, so it runs when user state changes
<<<<<<< HEAD
  
=======
>>>>>>> master

  return (
    location.pathname != "/signup" &&
    location.pathname != "/login" && (
      <div className="w-full bg-mine-shaft-950 h-20 text-white flex items-center justify-between px-6">
        <Link
          to={"/"}
          className="flex gap-3 items-center cursor-pointer hover:opacity-80"
        >
          <TbHexagonLetterH className="h-8 w-8 text-caribbean-green-400" />
          <p className="text-3xl font-semibold text-caribbean-green-400">
            HireLink
          </p>
        </Link>
        <NavLinks />
        <div className="flex items-center gap-6 text-xl">
<<<<<<< HEAD
          {user?<ProfileMenu />:<Link to="/login" ><Button variant="outline" color="caribbeanGreen.4">Login</Button></Link>}
=======
          {user ? (
            <ProfileMenu />
          ) : (
            <Link to="/login">
              <Button variant="outline" color="caribbeanGreen.4">
                Login
              </Button>
            </Link>
          )}
>>>>>>> master
          {/* <div className="bg-mine-shaft-900 p-1.5 rounded-full hover:bg-mine-shaft-700 cursor-pointer">
            <IoSettingsOutline />
          </div> */}

<<<<<<< HEAD
          <div className="bg-mine-shaft-900 p-1.5 rounded-full hover:bg-mine-shaft-700 cursor-pointer">
            <Indicator color="caribbeanGreen.4" processing>
              <IoNotifications />
            </Indicator>
          </div>
=======
          <NotificationMenu />
>>>>>>> master
        </div>
      </div>
    )
  );
};

export default Header;
