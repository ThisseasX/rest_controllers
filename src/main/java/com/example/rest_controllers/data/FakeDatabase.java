package com.example.rest_controllers.data;

import com.example.rest_controllers.models.User;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class FakeDatabase {

    private static FakeDatabase instance;

    private List<User> users = new ArrayList<>();

    private FakeDatabase() {
    }

    public static synchronized FakeDatabase getInstance() {
        if (instance == null) {
            instance = new FakeDatabase();

            List<User> userList = instance.getUsers();

            userList.add(new User(1, "Thiss", "Xan"));
            userList.add(new User(2, "George", "Poul"));
        }

        return instance;
    }
}
