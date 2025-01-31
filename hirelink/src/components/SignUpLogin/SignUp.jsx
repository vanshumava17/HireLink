import React from "react";
import { Group, Radio } from "@mantine/core";
import { useState } from "react";
import {
  Anchor,
  Button,
  Checkbox,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import {
  MdOutlineDriveFileRenameOutline,
  MdOutlineEmail,
} from "react-icons/md";
import { GoLock } from "react-icons/go";
import { Link, useNavigate } from "react-router";
import { registerUser } from "../../services/UserService";
import { signupValidation } from "../../services/FormValidation";
import { notifications } from "@mantine/notifications";
import { PiCheckFatFill } from "react-icons/pi";
import { BsX } from "react-icons/bs";

const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "APPLICANT",
};

const SignUp = () => {
  const [data, setData] = useState(form);
  const [formError, setFormError] = useState(form);
  const navigate = useNavigate();

  const handleChange = (event) => {
    if (typeof event == "string") {
      setData({ ...data, accountType: event });
      return;
    }
    let name = event.target.name,
      value = event.target.value;
    setData({ ...data, [event.target.name]: event.target.value });
    setFormError({ ...formError, [name]: signupValidation(name, value) });
    if (name == "password" && (data.confirmPassword !== "")) {
      let err = "";
      if (data.password !== value) err = "Password not match"
      setFormError({ ...formError, [name]: signupValidation(name, value),confirmPassword:err }); 
    }
    if (name === "confirmPassword") {
      if (data.password !== value)
        setFormError({ ...formError, [name]: "Password not match" });
      else setFormError({ ...formError, confirmPassword: "" });
      
    }
  };

  const handleSubmit = () => {
    let valid=true,newFormError={}
    for(let key in data) {
      if(key==="accountType")continue;
      if(key!=="confirmPassword")newFormError[key]=signupValidation(key,data[key]);
      else if(data[key]!==data["password"])newFormError[key]="Password not match.";
      if(newFormError[key])valid = false;
    }
    setFormError(newFormError);
    
    if(valid === true) {
      
      registerUser(data)
      .then((res) => {
        console.log(res);
        setData(form);
        notifications.show({
          title: 'Registered Successfully',
          message: 'Redirecting to login page...',
          withCloseButton: true,
          icon:<PiCheckFatFill  style={{width:"90%",height:"90%"}}/>,
          color:"teal",
          withBorder:true,
          className: "!border-green-500",
        })
        setTimeout(()=>{
          navigate("/login");
        },4000)
        setData(form);
      })
      .catch((err) => {
        console.log(err);
        notifications.show({
          title: 'Registeration Failed',
          message: err.response.data.errorMessage,
          withCloseButton: true,
          icon:<BsX  style={{width:"90%",height:"90%"}}/>,
          color:"red",
          withBorder:true,
          className: "!border-red-500",
          styles: {
            description: { color: "white" }, // Change message text color
          },
        })
      })
    }
  };

  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <h4 className="font-semibold text-3xl text-mine-shaft-200">
        Create Account
      </h4>

      <TextInput
        value={data.name}
        error={formError.name}
        onChange={handleChange}
        name="name"
        leftSection={<MdOutlineDriveFileRenameOutline size={20} />}
        label="Full Name"
        placeholder="Your name"
        withAsterisk
        size="md"
      />
      <TextInput
        value={data.email}
        error={formError.email}
        onChange={handleChange}
        name="email"
        leftSection={<MdOutlineEmail size={20} />}
        label="Email"
        placeholder="Your email"
        withAsterisk
        size="md"
      />

      <PasswordInput
        onChange={handleChange}
        error={formError.password}
        value={data.password}
        name="password"
        label="Password"
        placeholder="Your password"
        leftSection={<GoLock size={20} />}
        withAsterisk
        size="md"
      />
      <PasswordInput
        value={data.confirmPassword}
        error={formError.confirmPassword}
        onChange={handleChange}
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm password"
        leftSection={<GoLock size={20} />}
        withAsterisk
        size="md"
      />

      <Radio.Group
        value={data.accountType}
        onChange={handleChange}
        name="favoriteFramework"
        label="You are ?"
        description="This is anonymous"
        withAsterisk
      >
        <Group mt="xs">
          <Radio
            className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:bg-caribbean-green-400/5 has-[:checked]:border-caribbean-green-400 border-mine-shaf rounded-lg"
            autoContrast
            value="APPLICANT"
            label="Applicant"
          />
          <Radio
            className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:bg-caribbean-green-400/5 has-[:checked]:border-caribbean-green-400 border-mine-shaft-800 rounded-lg"
            autoContrast
            value="EMPLOYER"
            label="Employer"
          />
        </Group>
      </Radio.Group>

      <Checkbox
        label={
          <>
            I accept{" "}
            <Anchor className="!text-caribbean-green-400">
              terms & conditions
            </Anchor>
          </>
        }
        autoContrast
      />

      <Button onClick={handleSubmit} variant="filled">
        Sign up
      </Button>

      <p className="mx-auto">
        Have an account?{" "}
        <span
          onClick={()=>{
            navigate("/login");
            setFormError(form)
            setData(form)
          }}
          className="hover:!cursor-pointer hover:!underline !text-caribbean-green-400"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default SignUp;
