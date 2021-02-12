package rahul.com.nutritionApp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "dinner")
public class Dinner {
    @Id
    @Column(name = "item")
    private String item;
    @Column(name = "calories")
    private int calories;
    @Column(name = "total_fat")
    private int totalFat;
    @Column(name = "cholesterol")
    private int cholesterol;
    @Column(name = "sodium")
    private int sodium;
    @Column(name = "carbs")
    private int carbs;
    @Column(name = "sugar")
    private int sugar;
    @Column(name = "fiber")
    private int fiber;
    @Column(name = "protein")
    private int protein;
    @Column(name = "calcium")
    private int calcium;
    @Column(name = "iron")
    private int iron;
    @Column(name = "potassium")
    private int potassium;
    @Column(name = "vitaminC")
    private int vitaminC;
    @Column(name = "vitaminD")
    private int vitaminD;

    public int getVitaminD() {
        return vitaminD;
    }

    public void setVitaminD(int vitaminD) {
        this.vitaminD = vitaminD;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public int getCalories() {
        return calories;
    }

    public void setCalories(int calories) {
        this.calories = calories;
    }

    public int getTotalFat() {
        return totalFat;
    }

    public void setTotalFat(int totalFat) {
        this.totalFat = totalFat;
    }

    public int getCholesterol() {
        return cholesterol;
    }

    public void setCholesterol(int cholesterol) {
        this.cholesterol = cholesterol;
    }

    public int getSodium() {
        return sodium;
    }

    public void setSodium(int sodium) {
        this.sodium = sodium;
    }

    public int getCarbs() {
        return carbs;
    }

    public void setCarbs(int carbs) {
        this.carbs = carbs;
    }

    public int getSugar() {
        return sugar;
    }

    public void setSugar(int sugar) {
        this.sugar = sugar;
    }

    public int getFiber() {
        return fiber;
    }

    public void setFiber(int fiber) {
        this.fiber = fiber;
    }

    public int getProtein() {
        return protein;
    }

    public void setProtein(int protein) {
        this.protein = protein;
    }

    public int getCalcium() {
        return calcium;
    }

    public void setCalcium(int calcium) {
        this.calcium = calcium;
    }

    public int getIron() {
        return iron;
    }

    public void setIron(int iron) {
        this.iron = iron;
    }

    public int getPotassium() {
        return potassium;
    }

    public void setPotassium(int potassium) {
        this.potassium = potassium;
    }

    public int getVitaminC() {
        return vitaminC;
    }

    public void setVitaminC(int vitaminC) {
        this.vitaminC = vitaminC;
    }
}
