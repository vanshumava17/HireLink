package com.hirelink.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hirelink.dto.ApplicantDTO;
import com.hirelink.dto.ApplicationDTO;
import com.hirelink.dto.JobDTO;
import com.hirelink.dto.NotificationDTO;
import com.hirelink.entity.Applicant;
import com.hirelink.entity.Job;
import com.hirelink.exception.HireLinkException;
import com.hirelink.repository.JobRepository;
import com.hirelink.service.interfaces.JobService;
import com.hirelink.service.interfaces.NotificationService;
import com.hirelink.utility.ApplicationStatus;
import com.hirelink.utility.JobStatus;
import com.hirelink.utility.Utilities;

@Service("jobService")
public class JobServiceImpl implements JobService {

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private NotificationService notificationService;

    @Override
    public JobDTO postJob(JobDTO jobDTO) throws HireLinkException {
        // if(jobDTO.getId() == 0) {
        // jobDTO.setId(Utilities.getNextSequence("jobs"));
        // jobDTO.setPostTime(LocalDateTime.now());
        // }

        if (jobDTO.getId() == null || jobDTO.getId() == 0) {
            jobDTO.setId(Utilities.getNextSequence("jobs"));
            jobDTO.setPostTime(LocalDateTime.now());

            NotificationDTO notificationDTO = new NotificationDTO();
            notificationDTO.setAction("Job Posted");
            notificationDTO
                    .setMessage("Job Posted Successfully for " + jobDTO.getJobTitle() + " at " + jobDTO.getCompany());
            notificationDTO.setUserId(jobDTO.getPostedBy());
            notificationDTO.setRoute("/company-posted-job/" + jobDTO.getId());

            notificationService.sendNotification(notificationDTO);
        }

        else {
            Job job = jobRepository.findById(jobDTO.getId()).orElseThrow(() -> new HireLinkException("JOB_NOT_FOUND"));
            if (job.getJobStatus().equals(JobStatus.DRAFT) || job.getJobStatus().equals(JobStatus.CLOSED))
                jobDTO.setPostTime(LocalDateTime.now());
        }

        return jobRepository.save(jobDTO.toEntity()).toDTO();
    }

    @Override
    public List<JobDTO> getAllJobs() throws HireLinkException {
        return jobRepository.findAll().stream().map((x) -> x.toDTO()).toList();
    }

    @Override
    public JobDTO getJob(Long id) throws HireLinkException {
        return jobRepository.findById(id).orElseThrow(() -> new HireLinkException("JOB_NOT_FOUND")).toDTO();
    }

    @Override
    public void applyJob(Long id, ApplicantDTO applicantDTO) throws HireLinkException {
        Job job = jobRepository.findById(id).orElseThrow(() -> new HireLinkException("JOB_NOT_FOUND"));
        List<Applicant> applicants = job.getApplicants();
        if (applicants == null)
            applicants = new ArrayList<>();
        if (applicants.stream().filter((x) -> x.getApplicantId() == applicantDTO.getApplicantId()).toList().size() > 0)
            throw new HireLinkException("JOB_APPLIED_ALREADY");
        applicantDTO.setApplicationStatus(ApplicationStatus.APPLIED);
        applicants.add(applicantDTO.toEntity());
        job.setApplicants(applicants);
        jobRepository.save(job);
    }

    @Override
    public List<JobDTO> getJobsPostedBy(Long postedBy) throws HireLinkException {
        return jobRepository.findByPostedBy(postedBy)
                .stream().map(k -> k.toDTO()).toList();
    }

    @Override
    // public void changeApplicationStatus(ApplicationDTO applicationDTO) throws
    // HireLinkException {
    // Job job = jobRepository.findById(applicationDTO.getId())
    // .orElseThrow(() -> new HireLinkException("JOB_NOT_FOUND"));
    // List<Applicant> applicants = job.getApplicants().stream().map((x) -> {
    // if (applicationDTO.getApplicantId() == x.getApplicantId()) {
    // x.setApplicationStatus(applicationDTO.getApplicationStatus());
    // if
    // (applicationDTO.getApplicationStatus().equals((ApplicationStatus.INTERVIEWING)))
    // {
    // x.setInterviewTime(applicationDTO.getInterviewTime());
    // NotificationDTO notificationDTO = new NotificationDTO();
    // notificationDTO.setAction("Interview Scheduled");
    // notificationDTO.setMessage("Interview Scheduled for job id: " +
    // application.getId());
    // notificationDTO.setUserId(application.getApplicantId());
    // notificationDTO.setRoute("/job-history");
    // notificationService.sendNotification(notificationDTO);
    // }

    // }

    // return x;
    // }).toList();

    // job.setApplicants(applicants);
    // jobRepository.save(job);
    // }

    public void changeApplicationStatus(ApplicationDTO applicationDTO) throws HireLinkException {
        Job job = jobRepository.findById(applicationDTO.getId())
                .orElseThrow(() -> new HireLinkException("JOB_NOT_FOUND"));

        List<Applicant> applicants = job.getApplicants().stream().map(applicant -> {
            if (applicationDTO.getApplicantId().equals(applicant.getApplicantId())) {
                applicant.setApplicationStatus(applicationDTO.getApplicationStatus());

                if (ApplicationStatus.INTERVIEWING.equals(applicationDTO.getApplicationStatus())) {
                    applicant.setInterviewTime(applicationDTO.getInterviewTime());

                    NotificationDTO notificationDTO = new NotificationDTO();
                    notificationDTO.setAction("Interview Scheduled");
                    notificationDTO.setMessage("Interview Scheduled for job id: " + applicationDTO.getId());
                    notificationDTO.setUserId(applicationDTO.getApplicantId());
                    notificationDTO.setRoute("/job-history");

                    notificationService.sendNotification(notificationDTO);
                }
            }
            return applicant;
        }).toList();

        job.setApplicants(applicants);
        jobRepository.save(job);
    }

}
