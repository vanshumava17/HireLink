package com.hirelink.dto;

import java.time.LocalDateTime;

import com.hirelink.utility.ApplicationStatus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApplicantDTO {
    private Long applicantId;
    private LocalDateTime timestamp;
    private ApplicationStatus applicationStatus;
}
