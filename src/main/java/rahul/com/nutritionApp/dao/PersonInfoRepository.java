package rahul.com.nutritionApp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import rahul.com.nutritionApp.model.Personinfo;

import java.util.Optional;

public interface PersonInfoRepository extends JpaRepository<Personinfo, String> {
    Optional<Personinfo> findByUsername(String username);
}
