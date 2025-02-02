package com.hirelink.dto;

import java.util.Base64;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

import com.hirelink.entity.Profile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "profiles")
public class ProfileDTO {
    private Long id;
    private String email;
    private String jobTitle;
    private String company;
    private String location;
    private String about;
    private String picture;
    private List<String>skills;
    private List<ExperienceDTO>experiences;
    private List<CertificationDTO>certifications;

    public Profile toEntity(){
        return new Profile(this.id, this.email,this.jobTitle,this.company,this.location,this.about,this.picture!=null?Base64.getDecoder().decode(this.picture):null,this.skills,this.experiences,this.certifications);
    }
} 