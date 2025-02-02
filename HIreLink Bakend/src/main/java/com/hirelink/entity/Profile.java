package com.hirelink.entity;

import java.util.Base64;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

import com.hirelink.dto.CertificationDTO;
import com.hirelink.dto.ExperienceDTO;
import com.hirelink.dto.ProfileDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "profiles")
public class Profile {
    private Long id;
    private String email;
    private String jobTitle;
    private String company;
    private String location;
    private String about;
    private byte[] picture;
    private List<String> skills;
    private List<ExperienceDTO> experiences;
    private List<CertificationDTO> certifications;

    public ProfileDTO toDTO() {
        return new ProfileDTO(this.id,
                this.email,
                this.jobTitle,
                this.company,
                this.location,
                this.about,
                this.picture != null ? Base64.getEncoder().encodeToString(this.picture) : null,
                this.skills,
                this.experiences,
                this.certifications);
    }
}