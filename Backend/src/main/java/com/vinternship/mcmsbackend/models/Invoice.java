package com.vinternship.mcmsbackend.models;

import org.springframework.data.annotation.Id;

public class Invoice {
    @Id
    private String Id;
    private String Name;
    private String PhoneNumber;
    private String Address;

}
