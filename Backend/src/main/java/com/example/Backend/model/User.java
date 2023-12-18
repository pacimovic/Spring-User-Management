package com.example.Backend.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String name;

    private String surname;

    @Column(unique = true)
    private String email;

    private String password;
}
