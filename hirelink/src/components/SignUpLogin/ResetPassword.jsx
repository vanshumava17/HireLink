import React, { useState } from "react";
import { Button, Modal, PasswordInput, PinInput } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { MdOutlineEmail } from "react-icons/md";
import { changePassword, sendOTP, verifyOTP } from "../../services/UserService";
import { GoLock } from "react-icons/go";
import { signupValidation } from "../../services/FormValidation";
import {
  errorNotification,
  successNotification,
} from "../../services/NotificationService";
import { useInterval } from "@mantine/hooks";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [OTPSent, setOTPSent] = useState(false);
  const [OTPSending, setOTPSending] = useState(false);
  const [verified, setVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [resendLoader, setResendLoader] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const interval = useInterval(() => {
    if (seconds == 0) {
      setResendLoader(false);
      setSeconds(60);
      interval.stop();
    } else setSeconds((s) => s - 1);
  }, 1000);

  const handleSendOTP = () => {
    setOTPSending(true);
    sendOTP(email)
      .then((res) => {
        console.log(res);
        successNotification(
          "OTP sent successfully",
          "Check your mail for OTP."
        );
        setOTPSent(true);
        setOTPSending(false);
        setResendLoader(true);
        interval.start();
      })
      .catch((err) => {
        console.log(err);
        setOTPSending(false);
        errorNotification("OTP sending failed", err.response.data.errorMessage);
      });
  };

  const handleVerifyOTP = (otp) => {
    verifyOTP(email, otp)
      .then((res) => {
        console.log(res);
        successNotification("OTP Verified", "Enter new password.");
        setVerified(true);
      })
      .catch((err) => {
        console.log(err);
        errorNotification(
          "OTP Verification Failed",
          err.response.data.errorMessage
        );
      });
  };

  const resendOTP = () => {
    if (resendLoader) return;
    handleSendOTP();
  };

  const changeEmail = () => {
    setOTPSent(false);
    setResendLoader(false);
    setSeconds(60);
    setVerified(false);
    interval.stop();
  };

  const handleResetPassword = () => {
    changePassword(email, password)
      .then((res) => {
        console.log(res);
        successNotification("Password Changed", "Login with new password.");
        props.close();
      })
      .catch((err) => {
        console.log(err);
        errorNotification(
          "Password Reset Failed",
          err.response.data.errorMessage
        );
      });
  };

  return (
    <Modal opened={props.opened} onClose={props.close} title="Reset Password">
      <div className="flex flex-col gap-6">
        <TextInput
          leftSection={<MdOutlineEmail size={20} />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          label="Email"
          placeholder="Your email"
          withAsterisk
          size="md"
          rightSection={
            <Button
              loading={OTPSending && !OTPSent}
              size="xs"
              className="mr-1"
              disabled={email === "" || OTPSent}
              onClick={handleSendOTP}
              variant="filled"
              autoContrast
            >
              Send OTP
            </Button>
          }
          rightSectionWidth="xl"
        />
        {OTPSent && (
          <PinInput
            onComplete={handleVerifyOTP}
            length={6}
            className="mx-auto "
            size="md"
            gap="lg"
            type="number"
          />
        )}

        {OTPSent && !verified && (
          <div className="flex gap-2">
            <Button
              fullWidth
              color="caribbeanGreen.4"
              loading={OTPSending}
              onClick={resendOTP}
              variant="filled"
              autoContrast
            >
              {resendLoader ? `Resend After (${seconds})` : "Resend"}
            </Button>

            <Button
              fullWidth
              onClick={changeEmail}
              variant="filled"
              autoContrast
            >
              Change Email
            </Button>
          </div>
        )}
        {verified && (
          <PasswordInput
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(signupValidation("password", e.target.value));
            }}
            value={password}
            error={passwordError}
            name="password"
            label="Password"
            placeholder="Your password"
            leftSection={<GoLock size={20} />}
            withAsterisk
            size="md"
          />
        )}
        {verified && (
          <Button
            onClick={() => {
              handleResetPassword();
            }}
            autoContrast
            variant="filled"
          >
            Change Password
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default ResetPassword;
