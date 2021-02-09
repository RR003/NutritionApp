package rahul.com.nutritionApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import rahul.com.nutritionApp.dao.BreakfastRepository;
import rahul.com.nutritionApp.model.Breakfast;
import rahul.com.nutritionApp.model.User;

import java.util.Collection;
import java.util.Optional;

@RestController
public class BreakfastControllerRest {
    @Autowired
    private BreakfastRepository breakfastRepository;

    @GetMapping("/food")
    Collection<Breakfast> employees() {
        return breakfastRepository.findAll();
    }

    @GetMapping("/food/{item}")
    ResponseEntity<?> getFood(@PathVariable String item){
        Optional<Breakfast> foods = breakfastRepository.findByItem(item);
        return foods.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
