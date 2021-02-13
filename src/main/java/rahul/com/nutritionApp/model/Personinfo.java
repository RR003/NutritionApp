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

    @Column(name = "email")
    private String email;

    @Column(name = "sex")
    private String sex;

    @Column(name = "dob")
    private String dob;

    @Column(name = "password")
    private String password;

    @Column(name = "dateJoined")
    private String dateJoined;

    @Column(name = "daycalories")
    private int daycalories;

    @Column(name = "daytotal_fat")
    private int daytotal_fat;

    @Column(name = "daycholesterol")
    private int daycholesterol;

    @Column(name = "daysodium")
    private int daysodium;

    @Column(name = "daycarbs")
    private int daycarbs;

    @Column(name = "daysugar")
    private int daysugar;

    @Column(name = "dayfiber")
    private int dayfiber;

    @Column(name = "dayprotein")
    private int dayprotein;

    @Column(name = "dayvitaminD")
    private int dayvitaminD;

    @Column(name = "daycalcium")
    private int daycalcium;

    @Column(name = "dayiron")
    private int dayiron;

    @Column(name = "daypotassium")
    private int daypotassium;

    @Column(name = "dayvitaminC")
    private int dayvitaminC;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getDateJoined() {
        return dateJoined;
    }

    public void setDateJoined(String dateJoined) {
        this.dateJoined = dateJoined;
    }

    public int getDaycalories() {
        return daycalories;
    }

    public void setDaycalories(int daycalories) {
        this.daycalories = daycalories;
    }

    public int getDaytotal_fat() {
        return daytotal_fat;
    }

    public void setDaytotal_fat(int daytotal_fat) {
        this.daytotal_fat = daytotal_fat;
    }

    public int getDaycholesterol() {
        return daycholesterol;
    }

    public void setDaycholesterol(int daycholesterol) {
        this.daycholesterol = daycholesterol;
    }

    public int getDaysodium() {
        return daysodium;
    }

    public void setDaysodium(int daysodium) {
        this.daysodium = daysodium;
    }

    public int getDaycarbs() {
        return daycarbs;
    }

    public void setDaycarbs(int daycarbs) {
        this.daycarbs = daycarbs;
    }

    public int getDaysugar() {
        return daysugar;
    }

    public void setDaysugar(int daysugar) {
        this.daysugar = daysugar;
    }

    public int getDayfiber() {
        return dayfiber;
    }

    public void setDayfiber(int dayfiber) {
        this.dayfiber = dayfiber;
    }

    public int getDayprotein() {
        return dayprotein;
    }

    public void setDayprotein(int dayprotein) {
        this.dayprotein = dayprotein;
    }

    public int getDayvitaminD() {
        return dayvitaminD;
    }

    public void setDayvitaminD(int dayvitaminD) {
        this.dayvitaminD = dayvitaminD;
    }

    public int getDaycalcium() {
        return daycalcium;
    }

    public void setDaycalcium(int daycalcium) {
        this.daycalcium = daycalcium;
    }

    public int getDayiron() {
        return dayiron;
    }

    public void setDayiron(int dayiron) {
        this.dayiron = dayiron;
    }

    public int getDaypotassium() {
        return daypotassium;
    }

    public void setDaypotassium(int daypotassium) {
        this.daypotassium = daypotassium;
    }

    public int getDayvitaminC() {
        return dayvitaminC;
    }

    public void setDayvitaminC(int dayvitaminC) {
        this.dayvitaminC = dayvitaminC;
    }

}
