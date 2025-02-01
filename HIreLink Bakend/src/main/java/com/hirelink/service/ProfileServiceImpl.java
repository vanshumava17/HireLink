package com.hirelink.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hirelink.dto.ProfileDTO;
import com.hirelink.entity.Profile;
import com.hirelink.exception.HireLinkException;
import com.hirelink.repository.ProfileRepository;
import com.hirelink.service.interfaces.ProfileService;
import com.hirelink.utility.Utilities;

@Service("ProfileService")
public class ProfileServiceImpl implements ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    @Override
    public Long createProfile(String email) throws HireLinkException {
        Profile profile = new Profile();
        profile.setId(Utilities.getNextSequence("profiles"));
        profile.setEmail(email);
        profile.setSkills(new ArrayList<>());
        profile.setExperiences(new ArrayList<>());
        profile.setCertifications(new ArrayList<>());
        profileRepository.save(profile);
        return profile.getId();

    }

    @Override
    public ProfileDTO getProfile(Long id) throws HireLinkException {
        return profileRepository.findById(id).orElseThrow(() -> new HireLinkException("PROFILE_NOT_FOUND")).toDTO();
    }

    @Override
    public ProfileDTO updateProfile(ProfileDTO profileDTO) throws HireLinkException {
        profileRepository.findById(profileDTO.getId()).orElseThrow(()-> new HireLinkException("PROFILE_NOT_FOUND"));
        profileRepository.save(profileDTO.toEntity());
        return profileDTO;
    }

}
