package rahul.com.nutritionApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rahul.com.nutritionApp.dao.LunchRepository;
import rahul.com.nutritionApp.dao.PersonInfoRepository;
import rahul.com.nutritionApp.model.Lunch;
import rahul.com.nutritionApp.model.Personinfo;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
public class PersonInfoControllerRest {
    @Autowired
    private PersonInfoRepository personInfoRepository;

    @GetMapping("/user")
    Collection<Personinfo> user() {
        return personInfoRepository.findAll();
    }

    @GetMapping("/user/{username}")
    ResponseEntity<?> getFoods(@PathVariable String username){
        Optional<Personinfo> user = personInfoRepository.findByUsername(username);
        return user.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/users")
    ResponseEntity<Personinfo> createUser(@Valid @RequestBody Personinfo personInfo) throws URISyntaxException {
        Personinfo result = personInfoRepository.save(personInfo);
        return ResponseEntity.created(new URI("/user")).body(result);
    }

    @PutMapping("/users/{username}")
    ResponseEntity<Personinfo> updateEmployee(@Valid @RequestBody Personinfo personInfo)  {
        Personinfo result = personInfoRepository.save(personInfo);
        return ResponseEntity.ok().body(result);
    }

}
