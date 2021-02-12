package rahul.com.nutritionApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import rahul.com.nutritionApp.model.Dinner;
import rahul.com.nutritionApp.model.Lunch;

import java.util.Optional;

public interface DinnerRepository extends JpaRepository<Dinner, Integer> {
    Optional<Dinner> findByItem(String item);
}