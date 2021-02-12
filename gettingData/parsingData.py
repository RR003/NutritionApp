import re

import requests


listOfFood = [[], [], []]
file1 = open(r"food.txt")
sizes = [1,13,3,6,3,1,1,2,1,14]
foodType = [2,2,1,1,1,2,2,[1,2],1,0]


with open('food.txt') as f:
    def mainFunction():
        dict = {
            "item": "",
            "calories": 0,
            "totalFat": 0,
            "cholesterol": 0,
            "sodium": 0,
            "carbs": 0,
            "sugar": 0,
            "fiber": 0,
            "protein": 0,
            "vitaminD": 0,
            "calcium": 0,
            "iron": 0,
            "potassium": 0,
            "vitaminC": 0
        }
        i = 0
        while True:
            line = f.readline().strip()
            if (line == ""):
                break
            if i == 0:
                dict["item"] = line
            if i == 2:
                lines = line.split(" ")
                dict["calories"] = int(lines[1])
            if (line == 'Total Fat:'):
                newLine = f.readline().strip()
                lines = re.split('(\d+)', newLine)
                dict["totalFat"] = int(lines[1])
            if line == "Cholesterol:":
                newLine = f.readline().strip()
                lines = re.split('(\d+)', newLine)
                dict["cholesterol"] = int(lines[1])
            if line == "Sodium:":
                newLine = f.readline().strip()
                lines = re.split('(\d+)', newLine)
                dict["sodium"] = int(lines[1])
            if line == "Total Carbs:":
                newLine = f.readline().strip()
                lines = re.split('(\d+)', newLine)
                dict["carbs"] = int(lines[1])
            if line == "Dietary Fiber:":
                newLine = f.readline().strip()
                lines = re.split('(\d+)', newLine)
                dict["fiber"] = int(lines[1])
            if line == "Sugar:":
                newLine = f.readline().strip()
                lines = re.split('(\d+)', newLine)
                dict["sugar"] = int(lines[1])
            if line == "Protein:":
                newLine = f.readline().strip()
                lines = re.split('(\d+)', newLine)
                dict["protein"] = int(lines[1])
            if line == "Vitamin D:":
                newLine = f.readline().strip()
                lines = re.split('(\d+)', newLine)
                dict["vitaminD"] = int(lines[1])
            if line == "Calcium:":
                newLine = f.readline().strip()
                lines = re.split('(\d+)', newLine)
                dict["calcium"] = int(lines[1])
            if line == "Iron:":
                newLine = f.readline().strip()
                lines = re.split('(\d+)', newLine)
                dict["iron"] = int(lines[1])
            if line == "Potassium:":
                newLine = f.readline().strip()
                lines = re.split('(\d+)', newLine)
                dict["potassium"] = int(lines[1])
            if line == "Vitamin C:":
                newLine = f.readline().strip()
                lines = re.split('(\d+)', newLine)
                dict["vitaminC"] = int(lines[1])
            i = i + 1
        return dict

    for j in range(len(sizes)):
        for i in range(sizes[j]):
            dict = mainFunction()
            if (j == 7):
                listOfFood[1].append(dict)
                listOfFood[2].append(dict)
            else:
                listOfFood[foodType[j]].append(dict)

print(listOfFood[0])
print()
print(listOfFood[1])
print()
print(listOfFood[2])

deleteBreafastUrl = "http://localhost:8080/Dbreakfasts"
deleteDinnerUrl = "http://localhost:8080/Ddinners"
deleteLunchUrl = "http://localhost:8080/Dlunches"

requests.delete(deleteBreafastUrl)
requests.delete(deleteLunchUrl)
requests.delete(deleteDinnerUrl)

breakfastUrl = "http://localhost:8080/breakfasts"
for i in range(len(listOfFood[0])):
    dict = listOfFood[0][i]
    requests.post(breakfastUrl, json=dict)


lunchUrl = "http://localhost:8080/lunches"
for i in range(len(listOfFood[1])):
    dict = listOfFood[1][i]
    requests.post(lunchUrl, json=dict)

dinnerUrl = "http://localhost:8080/dinners"
for i in range(len(listOfFood[2])):
    dict = listOfFood[2][i]
    requests.post(dinnerUrl, json=dict)

print(len(listOfFood[0]))
print(len(listOfFood[1]))
print(len(listOfFood[2]))













