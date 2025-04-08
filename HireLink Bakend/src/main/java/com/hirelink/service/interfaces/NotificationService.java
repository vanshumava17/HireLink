package com.hirelink.service.interfaces;

import java.util.List;

import com.hirelink.dto.NotificationDTO;
import com.hirelink.entity.Notification;
import com.hirelink.exception.HireLinkException;

public interface NotificationService {
    public void sendNotification(NotificationDTO notificationDTO);

    public List<Notification> getUnreadNotifications(Long userId);

    public void readNotifications(Long id) throws HireLinkException;
}
