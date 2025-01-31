package com.hirelink.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hirelink.dto.LoginDTO;
import com.hirelink.dto.ResponseDTO;
import com.hirelink.dto.UserDTO;
import com.hirelink.entity.OTP;
import com.hirelink.entity.User;
import com.hirelink.exception.HireLinkException;
import com.hirelink.repository.OTPRepository;
import com.hirelink.repository.UserRepository;
import com.hirelink.service.interfaces.UserService;
import com.hirelink.utility.Data;
import com.hirelink.utility.Utilities;

import jakarta.mail.internet.MimeMessage;

@Service(value="userService")
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;	

	@Autowired
	private PasswordEncoder passwordEncoder;	

	@Autowired
	private JavaMailSender mailSender;

	@Autowired
	private OTPRepository otpRepository;
	
	@Override
	public UserDTO registerUser(UserDTO userDTO) throws HireLinkException {
		Optional<User> optional = userRepository.findByEmail(userDTO.getEmail());
		if(optional.isPresent()) throw new HireLinkException("USER_FOUND");
		userDTO.setId(Utilities.getNextSequence("users"));
		userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
		User user = userDTO.toEntity();
		user = userRepository.save(user);
		return user.toDTO();
	}

	@Override
	public UserDTO loginUser(LoginDTO loginDTO) throws HireLinkException {
		User user = userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(()->new HireLinkException("USER_NOT_FOUND"));
		if(!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword()))throw new HireLinkException("INVALID_CREDENTIALS");
		return user.toDTO();		
	}

	@Override
	public Boolean sendOTP(String email) throws Exception {
		User user = userRepository.findByEmail(email).orElseThrow(()->new HireLinkException("USER_NOT_FOUND"));

		MimeMessage mm =  mailSender.createMimeMessage();
		MimeMessageHelper messageHelper = new MimeMessageHelper(mm,true);
		messageHelper.setTo(email);
		messageHelper.setSubject("Your OTP Code ");
		String genOTP = Utilities.generateOTP();
		OTP otp = new OTP(email, genOTP, LocalDateTime.now());
		otpRepository.save(otp);
		messageHelper.setText(Data.getMessage(genOTP,user.getName()),true);
		mailSender.send(mm);
		return true;
	}

	@Override
	public Boolean verifyOTP(String email, String otp) throws HireLinkException {
		OTP otpEntity = otpRepository.findById(email).orElseThrow(()-> new HireLinkException("OTP_NOT_FOUND"));
		if(!otpEntity.getOtpCode().equals(otp)) throw new HireLinkException("OTP_INCORRECT");
		return true;
	}

	@Override
	public ResponseDTO changePassword(LoginDTO loginDTO) throws HireLinkException {
		User user = userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(()->new HireLinkException("USER_NOT_FOUND"));
		user.setPassword(passwordEncoder.encode(loginDTO.getPassword()));
		userRepository.save(user);
		return new ResponseDTO("Password changed successfully");
	}

	@Scheduled(fixedRate = 60000)
	public void removeExpiredOTPs(){
		LocalDateTime expiry =  LocalDateTime.now().minusMinutes(5);
		List<OTP> expiredOTPs = otpRepository.findByCreationTimeBefore(expiry);
		if(!expiredOTPs.isEmpty()) {
			otpRepository.deleteAll(expiredOTPs);
			System.out.println("Removed "+expiredOTPs.size()+" expired OTPs.");
		}
	}

	
}
