package com.hirelink.service.interfaces;

import java.util.List;

import com.hirelink.dto.ApplicantDTO;
import com.hirelink.dto.JobDTO;
import com.hirelink.exception.HireLinkException;

public interface JobService {

    public JobDTO postJob(JobDTO jobDTO)throws HireLinkException;

    public List<JobDTO> getAllJobs() throws HireLinkException;

    public JobDTO getJob(Long id) throws HireLinkException;

    public void applyJob(Long id, ApplicantDTO applicantDTO) throws HireLinkException;
    
}
