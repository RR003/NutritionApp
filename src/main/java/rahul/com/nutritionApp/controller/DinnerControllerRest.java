package rahul.com.nutritionApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rahul.com.nutritionApp.dao.DinnerRepository;
import rahul.com.nutritionApp.dao.LunchRepository;
import rahul.com.nutritionApp.model.Breakfast;
import rahul.com.nutritionApp.model.Dinner;
import rahul.com.nutritionApp.model.Lunch;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
public class DinnerControllerRest {
    @Autowired
    private DinnerRepository dinnerRepository;
    @GetMapping("/dinner")
    Collection<Dinner> employees() {
        return dinnerRepository.findAll();
    }

    @GetMapping("/dinner/{item}")
    ResponseEntity<?> getFoods(@PathVariable String item){
        Optional<Dinner> foods = dinnerRepository.findByItem(item);
        return foods.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/dinners")
    ResponseEntity<Dinner> createUser(@Valid @RequestBody Dinner dinner) throws URISyntaxException {
        Dinner result = dinnerRepository.save(dinner);
        return ResponseEntity.created(new URI("/dinner"  )).body(result);
    }

    @DeleteMapping("/Ddinners")
    ResponseEntity<Dinner> deleteCategory() {
        dinnerRepository.deleteAll();
        return ResponseEntity.ok().build();
    }
}
