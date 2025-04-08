package com.hirelink.exception;

public class HireLinkException extends Exception {
    private static final long serialVersionUID = 1L;

    // Constructor with a message
    public HireLinkException(String message) {
        super(message);
    }

    // Constructor with both message and cause (Exception)
    public HireLinkException(String message, Throwable cause) {
        super(message, cause);
    }
}
