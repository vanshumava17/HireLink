import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
import { TbHexagonLetterH } from "react-icons/tb";
import { useLocation } from "react-router";

const Footer = () => {
  const location = useLocation();
  return (
    location.pathname != "/signup" &&
    location.pathname != "/login" && (
      <>
        <div className="pt-15 text-mine-shaft-100 flex items-center justify-between px-20 p-5 bg-mine-shaft-950">
          <div className="w-[30%] mr-96">
            <div className="flex items-center gap-3">
              <TbHexagonLetterH className="h-6 w-6 text-caribbean-green-400" />
              <p className="text-xl font-semibold text-caribbean-green-400">
                HireLink
              </p>
            </div>
            <p className="text-mine-shaft-300 text-justify">
              Job portal with user profiles, skill updates, certifications, work
              experience and admin job postings.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <FaInstagram className="text-caribbean-green-300 bg-mine-shaft-800 p-2 text-4xl rounded-full cursor-pointer transition ease-out hover:bg-mine-shaft-500" />
              <RiTelegram2Line className="text-caribbean-green-300 bg-mine-shaft-800 p-2 text-4xl rounded-full cursor-pointer transition ease-out hover:bg-mine-shaft-500" />
              <CiLinkedin className="text-caribbean-green-300 bg-mine-shaft-800 p-2 text-4xl rounded-full cursor-pointer transition ease-out hover:bg-mine-shaft-500" />
            </div>
          </div>

          <div className="w-[20%] text-mine-shaft-300">
            <span className="font-semibold text-caribbean-green300 text-lg">
              Products
            </span>
            <ul className="mt-5 [&_li]:font-medium cursor-pointer transition-all  duration-200 ease-in-out [&_li]:hover:text-caribbean-green-400 [&_li]:hover:translate-x-2 [&_li]:!list-none [&_li]:!ml-0">
              <li>Find Job</li>
              <li>Find Company</li>
              <li>Find Employee</li>
            </ul>
          </div>
          <div className="w-[20%] text-mine-shaft-300">
            <span className="font-semibold text-caribbean-green300 text-lg">
              Company
            </span>
            <ul className="mt-5 [&_li]:font-medium cursor-pointer transition-all  duration-200 ease-in-out [&_li]:hover:text-caribbean-green-400 [&_li]:hover:translate-x-2 [&_li]:!list-none [&_li]:!ml-0">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
          <div className="w-[20%] text-mine-shaft-300">
            <span className="font-semibold text-caribbean-green300 text-lg">
              Support
            </span>
            <ul className="mt-5 [&_li]:font-medium cursor-pointer transition-all  duration-200 ease-in-out [&_li]:hover:text-caribbean-green-400 [&_li]:hover:translate-x-2 [&_li]:!list-none [&_li]:!ml-0">
              <li>Help & Support</li>
              <li>Feedback</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <hr className="h-px bg-caribbean-green-300 border-0 dark:bg-caribbean-green-300" />

        <div className="text-mine-shaft-100 py-5 bg-mine-shaft-950">
          <p className="font-semibold text-center text-xl">
            Designed & Developed By{" "}
            <span className="text-caribbean-green-300">Vansh Umava</span>
          </p>
        </div>
      </>
    )
  );
};

export default Footer;
