let breakfastItems = [];
let lunchItems = [];
let dinnerItems = [];
var foodForms = [];

let breakfastForm = [];
let lunchForm = [];
let dinnerForm = [];

let dayCal = 0;
let dayCalcium = 0;
let dayCarbs = 0;
let dayCholestrol = 0;
let dayFiber = 0;
let dayIron = 0;
let dayPotassium = 0;
let dayProtein = 0;
let daySodium = 0;
let daySugar = 0;
let dayTotalFat = 0;
let dayVitaminC = 0;
let dayVitaminD = 0;

let username = sessionStorage.getItem("username");
let userBody = [];
async function getBody(username) {
  console.log("username", username);
  const response = await fetch(`http://172.24.49.229:8080/user/${username}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  userBody = await response.json();
  dayCal = userBody.daycalories;
  dayCalcium = userBody.daycalcium;
  dayCarbs = userBody.daycarbs;
  dayCholestrol = userBody.daycholesterol;
  dayFiber = userBody.dayfiber;
  dayIron = userBody.dayiron;
  dayPotassium = userBody.daypotassium;
  dayProtein = userBody.dayprotein;
  daySodium = userBody.daysodium;
  daySugar = userBody.daysugar;
  dayTotalFat = userBody.daytotal_fat;
  dayVitaminC = userBody.dayvitaminC;
  dayVitaminD = userBody.dayvitaminD;
}
getBody(username);

function getDate() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  today = mm + "-" + dd + "-" + yyyy;
  return today;
}

let body = "";

async function getBreakfast(url, meal, classModifier) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  body = await response.json();
  breakfastItems = body;
  displayFood(body, meal, classModifier);
}

async function getLunch(url, meal, classModifier) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  body = await response.json();
  lunchItems = body;
  displayFood(body, meal, classModifier);
}

async function getDinner(url, meal, classModifier) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  body = await response.json();
  dinnerItems = body;
  displayFood(body, meal, classModifier);
}

function sleepFor(sleepDuration) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* do nothing */
  }
}

function main() {
  document.getElementById("today").innerHTML = getDate();
  getBreakfast("http://172.24.49.229:8080/breakfast", "Breakfast", 0);
  sleepFor(150);
  getLunch("http://172.24.49.229:8080/lunch", "Lunch", 1);
  sleepFor(150);
  getDinner("http://172.24.49.229:8080/dinner", "Dinner", 2);
}

function displayFood(dict, meal, classModifier) {
  var addText = document.querySelector(".putFood" + classModifier);
  let h4 = document.createElement("h4");
  let color = ["(235, 155, 76)", "(201, 71, 245)", "(79,134,247)"];
  h4.setAttribute(
    "style",
    "text-align: center; color: rgb" + color[classModifier]
  );
  h4.appendChild(document.createTextNode("<<" + meal + ">>"));
  addText.appendChild(h4);
  var foodContainer = document.createElement("div");
  foodContainer.classList = "itemBox";
  addText.appendChild(foodContainer);
  for (var key in dict) {
    item = dict[key];
    let displayBox = document.createElement("div");
    displayBox.classList = "displayBox";
    let ribbon = document.createElement("div");
    ribbon.classList = "topRibbon" + classModifier;
    let h6 = document.createElement("h6");
    h6.setAttribute("style", "text-align: center;");
    h6.setAttribute("onclick", "bringUp()");
    h6.appendChild(document.createTextNode(item.item));
    displayBox.setAttribute("id", item.item);
    displayBox.appendChild(ribbon);
    displayBox.appendChild(h6);
    // create padding space
    let padding = document.createElement("div");
    padding.classList = "containerPadding";
    padding.setAttribute("onclick", "bringUp()");
    displayBox.appendChild(padding);
    displayBox.appendChild(createButtonControl(item.item, classModifier));
    foodContainer.appendChild(displayBox);
    // add buttons: red
  }
}

function createButtonControl(food, meal) {
  //create div
  foodForms = [breakfastForm, lunchForm, dinnerForm];
  foodForms = foodForms[meal];
  let div = document.createElement("div");
  div.classList = "buttonControl";
  let inputForm = document.createElement("input");
  inputForm.setAttribute("type", "number");
  inputForm.setAttribute("min", "0");
  inputForm.setAttribute("value", "0");
  inputForm.setAttribute("name", food);
  foodForms.push(inputForm);
  div.appendChild(inputForm);
  return div;
}

function bringUp() {
  let text = this.textContent;
  let popUp = document.getElementById("popUp");
  popUp.classList = "popUp fadeIn";
  let restOfFile = document.querySelector(".body");
  restOfFile.classList = "body fadeOut";
  popUp.classList = "popUp fadeIn";
}

function closeMenu() {
  let popUp = document.getElementById("popUp");
  popUp.classList = "popUp fadeTotallyOut";
  let restOfFile = document.querySelector(".body");
  restOfFile.classList = "body fadeIn";
}

function submitBreakfast() {
  for (let i = 0; i < breakfastItems.length; i++) {
    multiple = breakfastForm[i].value;
    if (multiple > 0) {
      console.log("yeaaaaa");
      dict = breakfastItems[i];
      list = Object.values(dict);
      dayCal = list[1] + dayCal;
      dayTotalFat = list[2] * multiple + dayTotalFat;
      dayCalcium = list[9] * multiple + dayCalcium;
      dayCarbs = list[5] * multiple + dayCarbs;
      dayCholestrol = list[3] * multiple + dayCholestrol;
      dayFiber = list[7] * multiple + dayFiber;
      dayIron = list[10] * multiple + dayIron;
      dayPotassium = list[11] * multiple + dayPotassium;
      dayProtein = list[8] * multiple + dayProtein;
      daySodium = list[4] * multiple + daySodium;
      daySugar = list[6] * multiple + daySugar;
      dayVitaminC = list[12] * multiple + dayVitaminC;
      dayVitaminD = list[13] * multiple + dayVitaminD;
    }
  }

  const url = `http://172.24.49.229:8080/users/${username}`;

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      username: userBody.username,
      email: userBody.email,
      sex: userBody.gender,
      dob: userBody.dob,
      password: userBody.password,
      dateJoined: userBody.dateJoined,
      daycalories: dayCal,
      daytotal_fat: dayTotalFat,
      daycholesterol: dayCholestrol,
      daysodium: daySodium,
      daycarbs: dayCarbs,
      daysugar: daySugar,
      dayfiber: dayFiber,
      dayprotein: dayProtein,
      dayvitaminD: dayVitaminD,
      daycalcium: dayCalcium,
      dayiron: dayIron,
      daypotassium: dayPotassium,
      dayvitaminC: dayVitaminC,
    })
  );
}

function submitLunch() {
  for (let i = 0; i < lunchItems.length; i++) {
    multiple = lunchForm[i].value;
    if (multiple > 0) {
      dict = lunchItems[i];
      list = Object.values(dict);
      dayCal = list[1] + dayCal;
      dayTotalFat = list[2] * multiple + dayTotalFat;
      dayCalcium = list[9] * multiple + dayCalcium;
      dayCarbs = list[5] * multiple + dayCarbs;
      dayCholestrol = list[3] * multiple + dayCholestrol;
      dayFiber = list[7] * multiple + dayFiber;
      dayIron = list[10] * multiple + dayIron;
      dayPotassium = list[11] * multiple + dayPotassium;
      dayProtein = list[8] * multiple + dayProtein;
      daySodium = list[4] * multiple + daySodium;
      daySugar = list[6] * multiple + daySugar;
      dayVitaminC = list[12] * multiple + dayVitaminC;
      dayVitaminD = list[13] * multiple + dayVitaminD;
    }
  }

  const url = `http://172.24.49.229:8080/users/${username}`;

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      username: userBody.username,
      email: userBody.email,
      sex: userBody.gender,
      dob: userBody.dob,
      password: userBody.password,
      dateJoined: userBody.dateJoined,
      daycalories: dayCal,
      daytotal_fat: dayTotalFat,
      daycholesterol: dayCholestrol,
      daysodium: daySodium,
      daycarbs: dayCarbs,
      daysugar: daySugar,
      dayfiber: dayFiber,
      dayprotein: dayProtein,
      dayvitaminD: dayVitaminD,
      daycalcium: dayCalcium,
      dayiron: dayIron,
      daypotassium: dayPotassium,
      dayvitaminC: dayVitaminC,
    })
  );
}
function submitDinner() {
  for (let i = 0; i < dinnerItems.length; i++) {
    multiple = dinnerForm[i].value;
    if (multiple > 0) {
      dict = dinnerItems[i];
      list = Object.values(dict);
      dayCal = list[1] + dayCal;
      dayTotalFat = list[2] * multiple + dayTotalFat;
      dayCalcium = list[9] * multiple + dayCalcium;
      dayCarbs = list[5] * multiple + dayCarbs;
      dayCholestrol = list[3] * multiple + dayCholestrol;
      dayFiber = list[7] * multiple + dayFiber;
      dayIron = list[10] * multiple + dayIron;
      dayPotassium = list[11] * multiple + dayPotassium;
      dayProtein = list[8] * multiple + dayProtein;
      daySodium = list[4] * multiple + daySodium;
      daySugar = list[6] * multiple + daySugar;
      dayVitaminC = list[12] * multiple + dayVitaminC;
      dayVitaminD = list[13] * multiple + dayVitaminD;
    }
  }

  const url = `http://172.24.49.229:8080/users/${username}`;

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      username: userBody.username,
      email: userBody.email,
      sex: userBody.gender,
      dob: userBody.dob,
      password: userBody.password,
      dateJoined: userBody.dateJoined,
      daycalories: dayCal,
      daytotal_fat: dayTotalFat,
      daycholesterol: dayCholestrol,
      daysodium: daySodium,
      daycarbs: dayCarbs,
      daysugar: daySugar,
      dayfiber: dayFiber,
      dayprotein: dayProtein,
      dayvitaminD: dayVitaminD,
      daycalcium: dayCalcium,
      dayiron: dayIron,
      daypotassium: dayPotassium,
      dayvitaminC: dayVitaminC,
    })
  );
}

main();
