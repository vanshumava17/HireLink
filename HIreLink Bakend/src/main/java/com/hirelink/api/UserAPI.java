package com.hirelink.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hirelink.dto.LoginDTO;
import com.hirelink.dto.ResponseDTO;
import com.hirelink.dto.UserDTO;
import com.hirelink.exception.HireLinkException;
import com.hirelink.service.interfaces.UserService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;


@RestController
@CrossOrigin	// will be remoed later
@Validated
@RequestMapping("/users")
public class UserAPI {
	
	@Autowired
	private UserService userService;
	
	@PostMapping(path="/register")
	public ResponseEntity<UserDTO> registerUser(@Valid @RequestBody UserDTO userDTO) throws HireLinkException{
		userDTO = userService.registerUser(userDTO);
		return new ResponseEntity<>(userDTO,HttpStatus.CREATED);
	}

	@PostMapping(path="/login")
	public ResponseEntity<UserDTO> loginUser(@Valid @RequestBody LoginDTO loginDTO) throws HireLinkException{
		return new ResponseEntity<>(userService.loginUser(loginDTO),HttpStatus.OK);
	}

	@PostMapping(path="/changePassword")
	public ResponseEntity<ResponseDTO> changePassword(@Valid @RequestBody LoginDTO loginDTO) throws HireLinkException{
		return new ResponseEntity<>(userService.changePassword(loginDTO),HttpStatus.OK);
	}
	
	@PostMapping(path="/sendOTP/{email}")
	public ResponseEntity<ResponseDTO> sendOTP(@PathVariable @Email(message="{user.email.invalid}") String email) throws Exception{
		userService.sendOTP(email);
		return new ResponseEntity<>(new ResponseDTO("OTP send successfully."),HttpStatus.OK);
	}
	@GetMapping(path="/verifyOTP/{email}/{otp}")
	public ResponseEntity<ResponseDTO> verifyOTP(@PathVariable @Email(message="{user.email.invalid}") String email, @PathVariable @Pattern(regexp="^[0-9]{6}$",message = "{otp.invalid}") String otp ) throws Exception{
		userService.verifyOTP(email,otp);
		return new ResponseEntity<>(new ResponseDTO("OTP verified successfully."),HttpStatus.OK);
	}
}
