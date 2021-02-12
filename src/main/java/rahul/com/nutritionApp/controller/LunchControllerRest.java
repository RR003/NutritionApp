package rahul.com.nutritionApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rahul.com.nutritionApp.dao.LunchRepository;
import rahul.com.nutritionApp.model.Lunch;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
public class LunchControllerRest {
    @Autowired
    private LunchRepository lunchRepository;
    @GetMapping("/lunch")
    Collection<Lunch> employees() {
        return lunchRepository.findAll();
    }

    @GetMapping("/lunch/{item}")
    ResponseEntity<?> getFoods(@PathVariable String item){
        Optional<Lunch> foods = lunchRepository.findByItem(item);
        return foods.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/lunches")
    ResponseEntity<Lunch> createUser(@Valid @RequestBody Lunch lunch) throws URISyntaxException {
        Lunch result = lunchRepository.save(lunch);
        return ResponseEntity.created(new URI("/lunch"  )).body(result);
    }

    @DeleteMapping("/Dlunches")
    ResponseEntity<Lunch> deleteCategory() {
        lunchRepository.deleteAll();
        return ResponseEntity.ok().build();
    }
}
