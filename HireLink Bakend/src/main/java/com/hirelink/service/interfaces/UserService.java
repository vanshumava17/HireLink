package com.hirelink.service.interfaces;

import com.hirelink.dto.LoginDTO;
import com.hirelink.dto.ResponseDTO;
import com.hirelink.dto.UserDTO;
import com.hirelink.exception.HireLinkException;

public interface UserService {
	public UserDTO registerUser(UserDTO userDTO) throws HireLinkException;
	public UserDTO loginUser(LoginDTO loginDTO) throws HireLinkException;
    public Boolean sendOTP(String email)throws Exception;
	public Boolean verifyOTP(String email, String otp) throws HireLinkException;
    public ResponseDTO changePassword(LoginDTO loginDTO) throws HireLinkException;
}
