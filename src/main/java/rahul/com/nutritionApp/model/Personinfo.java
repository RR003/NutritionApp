package rahul.com.nutritionApp.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "personInfo")
public class Personinfo {
    @Id
    @Column(name = "username")
    private String username;

    @Column(name = "FirstName")
    private String FirstName;

    LastName varchar(255),

    email varchar(255),
    sex varchar(255),
    dob varchar(255),
    dateJoined varchar(255),
    height varchar(255),
    weight varchar(255),
    activityLevel varchar(255),
    daycalories int,
    daytotal_fat int,
    daycholesterol int,
    daysodium int,
    daycarbs int,
    daysugar int,
    dayfiber int,
    dayprotein int,
    dayvitaminD int,
    daycalcium int,
    dayiron int,
    daypotassium int,
    dayvitaminC int
}
