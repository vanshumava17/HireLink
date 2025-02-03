package com.hirelink.service.interfaces;

import java.util.List;

import com.hirelink.dto.JobDTO;
import com.hirelink.exception.HireLinkException;

public interface JobService {

    JobDTO postJob(JobDTO jobDTO)throws HireLinkException;

    List<JobDTO> getAllJobs() throws HireLinkException;

    JobDTO getJob(Long id) throws HireLinkException;
    
}
