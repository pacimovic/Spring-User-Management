package com.example.Backend.services;

import com.example.Backend.model.User;
import com.example.Backend.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UserService implements IService<User, Long>{

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public <S extends User> S save(S user) {
        return this.userRepository.save(user);
    }

    @Override
    public Optional<User> findById(Long var1) {
        return Optional.empty();
    }

    @Override
    public List<User> findAll() {
        return null;
    }

    @Override
    public void deleteById(Long var1) {

    }
}
