package com.hirelink.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hirelink.dto.ResponseDTO;
import com.hirelink.entity.Notification;
import com.hirelink.exception.HireLinkException;
import com.hirelink.service.interfaces.NotificationService;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/notification")
public class NotificationAPI {
    @Autowired
    private NotificationService notificationService;

    @GetMapping("/get/{userId}")
    public ResponseEntity<List<Notification>> getNotifications(@PathVariable Long userId) {
        return new ResponseEntity<>(notificationService.getUnreadNotifications(userId), HttpStatus.OK);
    }

    @PutMapping("/read/{id}")
    public ResponseEntity<ResponseDTO> readNotifications(@PathVariable Long id) throws HireLinkException {
        notificationService.readNotifications(id);
        return new ResponseEntity<>(new ResponseDTO("success"), HttpStatus.OK);
    }
}
