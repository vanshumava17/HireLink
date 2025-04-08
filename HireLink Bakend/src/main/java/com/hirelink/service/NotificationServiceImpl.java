package com.hirelink.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hirelink.dto.NotificationDTO;
import com.hirelink.dto.NotificationStatus;
import com.hirelink.entity.Notification;
import com.hirelink.exception.HireLinkException;
import com.hirelink.repository.NotificationRepository;
import com.hirelink.service.interfaces.NotificationService;
import com.hirelink.utility.Utilities;

@Service("notificationService")
public class NotificationServiceImpl implements NotificationService {
    @Autowired
    private NotificationRepository notificationRepository;

    @Override
    public void sendNotification(NotificationDTO notificationDTO) {
        try {
            notificationDTO.setId(Utilities.getNextSequence("notification"));
        } catch (HireLinkException e) {
            e.printStackTrace();
        }
        notificationDTO.setStatus(NotificationStatus.UNREAD);
        notificationDTO.setTimestamp(LocalDateTime.now());
        notificationRepository.save(notificationDTO.toEntity());
    }

    @Override
    public List<Notification> getUnreadNotifications(Long userId) {
        return notificationRepository.findByUserIdAndStatus(userId, NotificationStatus.UNREAD);
    }

    @Override
    public void readNotifications(Long id) throws HireLinkException {
        Notification noti = notificationRepository.findById(id)
                .orElseThrow(() -> new HireLinkException("No Notification Found"));

        noti.setStatus(NotificationStatus.READ);
        notificationRepository.save(noti);
    }

}
