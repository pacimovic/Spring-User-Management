package com.example.Backend.services;

import com.example.Backend.model.User;
import com.example.Backend.repositories.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IService<User, Long>, UserDetailsService {

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
        return userRepository.findAll();
    }

    @Override
    public void deleteById(Long var1) {

    }


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User myUser = this.userRepository.findByEmail(email);
        if(myUser == null) {
            throw new UsernameNotFoundException("Email: "+email+" not found");
        }

        return new org.springframework.security.core.userdetails.User(myUser.getEmail(), myUser.getPassword(), new ArrayList<>());
    }
}
