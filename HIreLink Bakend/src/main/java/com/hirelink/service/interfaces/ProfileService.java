package com.hirelink.service.interfaces;

import java.util.List;

import com.hirelink.dto.ProfileDTO;
import com.hirelink.exception.HireLinkException;

public interface ProfileService {
    public Long createProfile(String email) throws HireLinkException;
    public ProfileDTO getProfile(Long id)throws HireLinkException;
    public ProfileDTO updateProfile(ProfileDTO profileDTO)throws HireLinkException;
    public List<ProfileDTO> getAllProfile() throws HireLinkException;
}
