package rahul.com.nutritionApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import rahul.com.nutritionApp.model.Breakfast;
import rahul.com.nutritionApp.model.Lunch;

import java.util.Optional;

public interface LunchRepository extends JpaRepository<Lunch, Integer> {
    Optional<Lunch> findByItem(String item);
}
