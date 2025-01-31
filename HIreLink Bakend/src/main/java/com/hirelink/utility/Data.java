package com.hirelink.utility;

public class Data {
    public static String getMessage(String otp,String name ){
        String htmlContent = "<!DOCTYPE html>"
        + "<html>"
        + "<head>"
        + "<meta charset='UTF-8'>"
        + "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"
        + "<title>HireLink OTP Verification</title>"
        + "<style>"
        + "body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }"
        + ".container { max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 10px; "
        + "box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); text-align: center; }"
        + ".logo { width: 120px; margin-bottom: 20px; }"
        + ".otp { font-size: 24px; font-weight: bold; color: #25e2ac; background: #f0f0f0; padding: 10px; "
        + "display: inline-block; border-radius: 5px; margin: 20px 0; }"
        + ".footer { margin-top: 20px; font-size: 12px; color: #666; }"
        + ".btn { display: inline-block; background: #25e2ac; color: #ffffff; text-decoration: none; "
        + "padding: 10px 20px; border-radius: 5px; font-size: 16px; margin-top: 10px; }"
        + "</style>"
        + "</head>"
        + "<body>"
        + "<div class='container'>"
        + "<img src='https://drive.google.com/uc?export=view&id=1gKiOvQNpkSFRFqBFuQ3QKCbdki3-9eVP' alt='HireLink Logo' class='logo'>"
        + "<h2>OTP Verification</h2>"
        + "<p>Dear <strong>" + name + "</strong>,</p>"
        + "<p>Your One-Time Password (OTP) to change password. is:</p>"
        + "<div class='otp'>" + otp + "</div>"
        + "<p>This OTP is valid for the next 5 minutes. Do not share it with anyone.</p>"
        + "<p>If you did not request this, please ignore this email.</p>"
        // + "<a href='" + "" + "' class='btn'>Go to HireLink</a>"
        // + "<p class='footer'>Developed by <span style='color:#25e2ac'  >Vansh Umava</span></p>"
        + "<p class='footer'>&copy; 2025 HireLink. All rights reserved.</p>"
        + "</div>"
        + "</body>"
        + "</html>";

        return htmlContent;
    }
}
