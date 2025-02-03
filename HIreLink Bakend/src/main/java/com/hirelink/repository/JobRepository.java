package com.hirelink.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hirelink.entity.Job;

public interface JobRepository extends MongoRepository<Job,Long> {
    
}
