package com.hirelink.entity;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.hirelink.dto.JobDTO;
import com.hirelink.utility.JobStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "jobs")
public class Job {
    @Id
    private Long id;
    private String jobTitle;
    private String company;
    private List<Applicant> applicants;
    private String about;
    private String experience;
    private String jobType;
    private String location;
    private Long packageOffered;
    private LocalDateTime postTime;
    private String description;
    private List<String> skillsRequired;
    private JobStatus JobStatus;

    public JobDTO toDTO(){
        return new JobDTO(
            this.id,
            this.jobTitle,
            this.company,
            this.applicants!=null?this.applicants.stream().map((x)->x.toDTO()).toList():null,
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

    public Job(Long id2, String jobTitle2, String company2, Object object, String about2, String experience2,
            String jobType2, String location2, Long packageOffered2, LocalDateTime postTime2, String description2,
            List<String> skillsRequired2, JobStatus jobStatus2) {
        //TODO Auto-generated constructor stub
    }
}