from selenium import webdriver
from selenium.webdriver.common.by import By
import time

def starting():
    sizes = [1,13,3,6,3,1,1,2,1]
    driver = webdriver.Chrome()

    driver.get("https://stonybrook.nutrislice.com/")
    time.sleep(0.5)
    initial_button = driver.find_element_by_xpath("/html/body/main/div/div[4]/button")
    initial_button.click()
    time.sleep(2)
    eastside_button = driver.find_element_by_xpath(
        "/html/body/main/div/div[1]/div[4]/ul/ns-location-card[1]/button/strong")
    eastside_button.click()
    time.sleep(0.5)
    chef_special_link = driver.find_element_by_xpath("/html/body/main/ns-location/div[3]/ul/li[1]/button/strong")
    chef_special_link.click()
    time.sleep(1)
    textFile = open("food.txt", "w+")


    xButtonLinks = ["/html/body/main/div/div[1]/div[3]/div/div[2]/div[2]/ul/li/a",
                    "/html/body/main/div/div[1]/div[3]/div/div[2]/div[4]/ul/li[1]/a",
                    "/html/body/main/div/div[1]/div[3]/div/div[2]/div[6]/ul/li[1]/a",
                    "/html/body/main/div/div[1]/div[3]/div/div[2]/div[8]/ul/li[1]/a",
                    "/html/body/main/div/div[1]/div[3]/div/div[2]/div[10]/ul/li[1]/a",
                    "/html/body/main/div/div[1]/div[3]/div/div[2]/div[12]/ul/li/a",
                    "/html/body/main/div/div[1]/div[3]/div/div[2]/div[14]/ul/li/a",
                    "/html/body/main/div/div[1]/div[3]/div/div[2]/div[16]/ul/li[1]/a",
                    "/html/body/main/div/div[1]/div[3]/div/div[2]/div[18]/ul/li/a"]


    xCloseButtonLinks = ["/html/body/main/div/div[1]/div[3]/div/div[2]/div[19]/div[1]/ul/li[1]/a",
                         "/html/body/main/div/div[1]/div[3]/div/div[2]/div[19]/div[1]/ul/li[13]/a",
                         "/html/body/main/div/div[1]/div[3]/div/div[2]/div[19]/div[1]/ul/li[3]/a",
                         "/html/body/main/div/div[1]/div[3]/div/div[2]/div[19]/div[1]/ul/li[6]/a",
                         "/html/body/main/div/div[1]/div[3]/div/div[2]/div[19]/div[1]/ul/li[3]/a",
                         "/html/body/main/div/div[1]/div[3]/div/div[2]/div[19]/div[1]/ul/li[1]/a",
                         "/html/body/main/div/div[1]/div[3]/div/div[2]/div[19]/div[1]/ul/li[1]/a",
                         "/html/body/main/div/div[1]/div[3]/div/div[2]/div[19]/div[1]/ul/li[2]/a",
                         "/html/body/main/div/div[1]/div[3]/div/div[2]/div[19]/div[1]/ul/li[1]/a"]

    def masterFunction():
        for i in range(len(sizes)):
            item1_button = driver.find_element_by_xpath(xButtonLinks[i])
            item1_button.click()
            time.sleep(0.5)
            size = sizes[i]

            for j in range(size):
                information = "/html/body/main/div/div[1]/div[3]/div/div[2]/div[19]/div[1]/ul/li[{}]/div/div/div[2]/div[1]/div/div".format(
                    j + 1)
                foodItemss = "/html/body/main/div/div[1]/div[3]/div/div[2]/div[19]/div[1]/ul/li[{}]/div/div/div[1]/div/h3".format(
                    j + 1)
                time.sleep(0.5)
                info = driver.find_element(By.XPATH, information).text
                foodItem = driver.find_element(By.XPATH, foodItemss).text
                textFile.write(foodItem)
                textFile.write("\n")
                textFile.write(info)
                textFile.write("\n")
                textFile.write("\n")


                if (j == size - 1):
                    xbutton = driver.find_element_by_xpath(xCloseButtonLinks[i])
                    xbutton.click()
                    break

                next_button = driver.find_element(By.XPATH,
                                                  "/html/body/main/div/div[1]/div[3]/div/div[2]/div[19]/div[1]/div[2]/ul/li[3]/a")

                next_button.click()
    masterFunction()

    def breakfastrow():
        breakfast_button = driver.find_element_by_xpath(
            "/html/body/main/div/div[1]/div[1]/div[1]/div/div/div/nav/ul/li[2]/a")
        breakfast_button.click()

        time.sleep(2)

        item10_button = driver.find_element_by_xpath("/html/body/main/div/div[1]/div[3]/div/div[2]/div[2]/ul/li[1]/a")
        item10_button.click()
        size = 14
        count = 0
        for i in range(size):
            information = "/html/body/main/div/div[1]/div[3]/div/div[2]/div[3]/div[1]/ul/li[{}]/div/div/div[2]/div[1]/div/div".format(count + 1)
            foodItemss = "/html/body/main/div/div[1]/div[3]/div/div[2]/div[3]/div[1]/ul/li[{}]/div/div/div[1]/div/h3".format(count + 1)
            time.sleep(0.5)
            info = driver.find_element(By.XPATH, information).text
            foodItem = driver.find_element(By.XPATH, foodItemss).text
            textFile.write(foodItem)
            textFile.write("\n")
            textFile.write(info)
            textFile.write("\n")
            textFile.write("\n")

            if (count == size - 1):
                xbutton = driver.find_element_by_xpath(
                    "/html/body/main/div/div[1]/div[3]/div[1]/div[2]/div[3]/div[1]/ul/li[14]/a")
                xbutton.click()
                break
            else:
                count = count + 1

            next_button = driver.find_element(By.XPATH,"/html/body/main/div/div[1]/div[3]/div[1]/div[2]/div[3]/div[1]/div[2]/ul/li[3]/a")

            next_button.click()

    breakfastrow()
starting()




