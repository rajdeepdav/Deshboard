package com.exampleDeskboard.deskboarddesign.model;

import jakarta.persistence.*;
import java.util.*;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<com.exampleDeskboard.deskboarddesign.model.Order> orders = new ArrayList<>();

    // Getters and Setters
}