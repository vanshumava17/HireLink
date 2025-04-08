package com.hirelink.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hirelink.dto.NotificationStatus;
import com.hirelink.entity.Notification;

public interface NotificationRepository extends MongoRepository<Notification, Long> {
    public List<Notification> findByUserIdAndStatus(Long userId, NotificationStatus status);
}
