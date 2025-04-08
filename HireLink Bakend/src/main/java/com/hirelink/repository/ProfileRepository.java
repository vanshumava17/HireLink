package com.hirelink.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hirelink.entity.Profile;

public interface ProfileRepository extends MongoRepository<Profile , Long> {
    
}
