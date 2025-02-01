import {
  Button,
  LoadingOverlay,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import React from "react";
import { GoLock } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router";
import { loginUser } from "../../services/UserService";
import { useState } from "react";
import { notifications } from "@mantine/notifications";
import { BsX } from "react-icons/bs";
import { PiCheckFatFill } from "react-icons/pi";
import { useNavigate } from "react-router";
import { loginValidation } from "../../services/FormValidation";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/UserSlice";
const form = {
  email: "",
  password: "",
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState(form);
  const [formError, setFormError] = useState(form);
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

  const handleChange = (event) => {
    setFormError({ ...formError, [event.target.name]: "" });
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    let valid = true,
      newFormError = {};
    for (let key in data) {
      newFormError[key] = loginValidation(key, data[key]);
      if (newFormError[key]) valid = false;
    }
    setFormError(newFormError);
    if (valid) {
      setLoading(true);
      loginUser(data)
        .then((res) => {
          console.log(res);
          notifications.show({
            title: "Login Successfull",
            message: "Redirecting to home page...",
            withCloseButton: true,
            icon: <PiCheckFatFill style={{ width: "90%", height: "90%" }} />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500",
          });
          setTimeout(() => {
            setLoading(false);
            dispatch(setUser(res));
            navigate("/");
          }, 2000);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
          notifications.show({
            title: "Login Failed",
            message: err.response.data.errorMessage,
            withCloseButton: true,
            icon: <BsX style={{ width: "90%", height: "90%" }} />,
            color: "red",
            withBorder: true,
            className: "!border-red-500",
            styles: {
              description: { color: "mineShaft.4" }, // Change message text color
            },
          });
        });
    }
  };

  return (
    <>
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "caribbeanGreen.4", type: "bars" }}
      />
      <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <h4 className="font-semibold text-3xl text-mine-shaft-200">
          LogIn Account
        </h4>

        <TextInput
          leftSection={<MdOutlineEmail size={20} />}
          value={data.email}
          onChange={handleChange}
          error={formError.email}
          name="email"
          label="Email"
          placeholder="Your email"
          withAsterisk
          size="md"
        />

        <PasswordInput
          onChange={handleChange}
          value={data.password}
          error={formError.password}
          name="password"
          label="Password"
          placeholder="Your password"
          leftSection={<GoLock size={20} />}
          withAsterisk
          size="md"
        />

        <Button onClick={handleSubmit} variant="filled" loading={loading}>
          Log In
        </Button>

        <p className="mx-auto">
          Don't have an account?{" "}
          <span
            onClick={() => {
              navigate("/signup");
              setFormError(form);
              setData(form);
            }}
            className="hover:!cursor-pointer hover:!underline !text-caribbean-green-400"
          >
            SignUp
          </span>
        </p>
        <p
          onClick={open}
          className="text-caribbean-green-400 hover:underline cursor-pointer text-center"
        >
          Forget Password?
        </p>
      </div>
      <ResetPassword opened={opened} close={close} />
    </>
  );
};

export default Login;
