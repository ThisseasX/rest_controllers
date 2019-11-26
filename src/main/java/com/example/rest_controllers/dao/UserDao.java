package com.example.rest_controllers.dao;

import com.example.rest_controllers.data.FakeDatabase;
import com.example.rest_controllers.models.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class UserDao {

    private FakeDatabase db;

    public UserDao() {
        db = FakeDatabase.getInstance();
    }

    public List<User> findAllUsers() {
        return db.getUsers();
    }

    public User findUserById(int id) {
        return db.getUsers().stream()
                .filter(u -> u.getId() == id)
                .findAny()
                .orElse(new User());
    }

    public User insertUser(User u) {
        db.getUsers().add(u);
        return u;
    }
}
