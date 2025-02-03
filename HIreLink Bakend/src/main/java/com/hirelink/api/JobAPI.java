package com.hirelink.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hirelink.dto.JobDTO;
import com.hirelink.exception.HireLinkException;
import com.hirelink.service.interfaces.JobService;

import jakarta.validation.Valid;



@RestController
@CrossOrigin
@Validated
@RequestMapping("/jobs")
public class JobAPI {
    
    @Autowired
    private JobService jobService;

    @PostMapping("/post")
    public ResponseEntity<JobDTO> postJob(@RequestBody @Valid JobDTO jobDTO) throws HireLinkException {
        return new ResponseEntity<>(jobService.postJob(jobDTO),HttpStatus.OK);
    }
    
    @GetMapping("/getAll")
    public ResponseEntity<List<JobDTO>> getAllJobs() throws HireLinkException{
        return new ResponseEntity<>(jobService.getAllJobs(),HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<JobDTO> getJob(@PathVariable Long id) throws HireLinkException{
        return new ResponseEntity<>(jobService.getJob(id),HttpStatus.OK);
    }   
    
}
