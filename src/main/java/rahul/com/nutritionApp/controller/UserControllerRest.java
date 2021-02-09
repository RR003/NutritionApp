package rahul.com.nutritionApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rahul.com.nutritionApp.dao.UserRepository;
import rahul.com.nutritionApp.model.User;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
public class UserControllerRest {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    Collection<User> employees() {
        return userRepository.findAll();
    }

    @GetMapping("/users/{email}")
    ResponseEntity<?> getUser(@PathVariable String email) {
        Optional<User> user = userRepository.findByEmail(email);
        return user.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/users")
    ResponseEntity<User> createUser(@Valid @RequestBody User user) throws URISyntaxException {
        User result = userRepository.save(user);
        return ResponseEntity.created(new URI("/employee" + result.getEmail())).body(result);
    }

    @PutMapping("/users/{email}")
    ResponseEntity<User> updateUser(@Valid @RequestBody User user)  {
        User result = userRepository.save(user);
        return ResponseEntity.ok().body(result);
    }
}

