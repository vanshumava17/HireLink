package com.hirelink.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hirelink.dto.JobDTO;
import com.hirelink.exception.HireLinkException;
import com.hirelink.repository.JobRepository;
import com.hirelink.service.interfaces.JobService;
import com.hirelink.utility.Utilities;

@Service("jobService")
public class JobServiceImpl implements JobService{

    @Autowired
    private JobRepository jobRepository;

    @Override
    public JobDTO postJob(JobDTO jobDTO) throws HireLinkException {
        jobDTO.setId(Utilities.getNextSequence("jobs"));
        jobDTO.setPostTime(LocalDateTime.now());
        return jobRepository.save(jobDTO.toEntity()).toDTO();
    }

    @Override
    public List<JobDTO> getAllJobs() throws HireLinkException {
        return jobRepository.findAll().stream().map((x)->x.toDTO()).toList();
    }

    @Override
    public JobDTO getJob(Long id) throws HireLinkException {
        return jobRepository.findById(id).orElseThrow(()->new HireLinkException("JOB_NOT_FOUND")).toDTO();
    }
    
}
