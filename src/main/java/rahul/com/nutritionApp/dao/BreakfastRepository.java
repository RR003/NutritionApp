package rahul.com.nutritionApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import rahul.com.nutritionApp.model.Breakfast;

import java.util.Optional;

public interface BreakfastRepository extends JpaRepository<Breakfast, String> {
    Optional<Breakfast> findByItem(String item);
}
