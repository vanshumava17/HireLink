package com.hirelink.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CertificationDTO {
    private String title;
    private String issuer;
    private LocalDateTime issueDate;
    private String certificateId;
}
