package com.example.rest_controllers.controllers;

import com.example.rest_controllers.dao.UserDao;
import com.example.rest_controllers.models.User;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
@AllArgsConstructor
public class UserController {

    private UserDao dao;

    @GetMapping
    public List<User> findAllUsers() {
        return dao.findAllUsers();
    }

    @GetMapping("/{id}")
    public User findUserById(@PathVariable int id) {
        return dao.findUserById(id);
    }

    @PostMapping
    public User insertUser(@RequestBody User u) {
        return dao.insertUser(u);
    }
}
