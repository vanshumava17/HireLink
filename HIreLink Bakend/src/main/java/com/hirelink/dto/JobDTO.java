package com.hirelink.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.hirelink.entity.Job;
import com.hirelink.utility.JobStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobDTO {
    private Long id;
    private String jobTitle;
    private String company;
    private List<ApplicantDTO> applicants;
    private String about;
    private String experience;
    private String jobType;
    private String location;
    private Long packageOffered;
    private LocalDateTime postTime;
    private String description;
    private List<String> skillsRequired;
    private JobStatus JobStatus;

    public Job toEntity(){
        return new Job(
            this.id,
            this.jobTitle,
            this.company,
            this.applicants,
            this.about,
            this.experience,
            this.jobType,
            this.location,
            this.packageOffered,
            this.postTime,
            this.description,
            this.skillsRequired,
            this.JobStatus
        );
    }
}
