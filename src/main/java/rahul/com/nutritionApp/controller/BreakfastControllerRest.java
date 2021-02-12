package rahul.com.nutritionApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rahul.com.nutritionApp.dao.BreakfastRepository;
import rahul.com.nutritionApp.model.Breakfast;


import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
public class BreakfastControllerRest {
    @Autowired
    private BreakfastRepository breakfastRepository;

    @GetMapping("/breakfast")
    Collection<Breakfast> employees() {
        return breakfastRepository.findAll();
    }

    @GetMapping("/breakfast/{item}")
    ResponseEntity<?> getFood(@PathVariable String item){
        Optional<Breakfast> foods = breakfastRepository.findByItem(item);
        return foods.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping("/breakfasts")
    ResponseEntity<Breakfast> createUser(@Valid @RequestBody Breakfast breakfast) throws URISyntaxException {
        Breakfast result = breakfastRepository.save(breakfast);
        return ResponseEntity.created(new URI("/breakfast"  )).body(result);
    }

    @DeleteMapping("/Dbreakfasts")
    ResponseEntity<Breakfast> deleteCategory() {
        breakfastRepository.deleteAll();
        return ResponseEntity.ok().build();
    }
}
