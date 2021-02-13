let baseURL = "http://172.24.49.229:8080/user/";
//var userName = sessionStorage.getItem("username");
let userName = "CookieMonster";

let userBody = "";
async function sampleFunc(url) {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    userBody = await response.json();
    changeUsername();
    let list = getRequirements(userBody.sex);
    var colors = [];
  if(userBody.daycalories > list[0] && userBody.daycalories < list[1]) {
    colors.push("highlightGreen");
  }
  else {
    colors.push("highlightRed");
  }
  if(userBody.daytotal_fat > list[2] && userBody.daytotal_fat < list[3]) {
    colors.push("highlightGreen");
  }
  else {
    colors.push("highlightRed");
  }
  if(userBody.daycholesterol > list[4] && userBody.daycholesterol < list[5]) {
    colors.push("highlightGreen");
  }
  else {
    colors.push("highlightRed");
  }
  if(userBody.daysodium > list[6] && userBody.daysodium < list[7]) {
    colors.push("highlightGreen");
  }
  else {
    colors.push("highlightRed");
  }
  if(userBody.daycarbs > list[8] && userBody.daycarbs < list[9]) {
    colors.push("highlightGreen");
  }
  else {
    colors.push("highlightRed");
  }
  if(userBody.daysugar > list[10] && userBody.daysugar < list[11]) {
    colors.push("highlightGreen");
  }
  else {
    colors.push("highlightRed");
  }
  if(userBody.dayfiber > list[12] && userBody.dayfiber < list[13]) {
    colors.push("highlightGreen");
  }
  else {
    colors.push("highlightRed");
  }
  if(userBody.dayprotein > list[14] && userBody.dayprotein < list[15]) {
    colors.push("highlightGreen");
  }
  else {
    colors.push("highlightRed");
  }
  if(userBody.dayvitaminD > list[16] && userBody.dayvitaminD< list[17]) {
    colors.push("highlightGreen");
  }
  else {
    colors.push("highlightRed");
  }
  if(userBody.daycalcium > list[18] && userBody.daycalcium< list[19]) {
    colors.push("highlightGreen");
  }
  else {
    colors.push("highlightRed");
  }
  if(userBody.dayiron > list[20] && userBody.dayiron< list[21]) {
    colors.push("highlightGreen");
  }
  else {
    colors.push("highlightRed");
  }
  if(userBody.daypotassium > list[22] && userBody.daypotassium< list[23]) {
    colors.push("highlightGreen");
  }
  else {
    colors.push("highlightRed");
  }
  if(userBody.dayvitaminC > list[24] && userBody.dayvitaminC< list[25]) {
    colors.push("highlightGreen");
  }
  else {
    colors.push("highlightRed");
  }
    let ol = document.querySelector(".ol");
    ol.appendChild(displayItems("Calories", userBody.daycalories, colors[0]));
    ol.appendChild(displayItems("Total Fat", userBody.daytotal_fat + 'g', colors[1]));
    ol.appendChild(displayItems("Cholesterol", userBody.daycholesterol +'mg', colors[2]));
    ol.appendChild(displayItems("Sodium", userBody.daysodium +'mg', colors[3]));
    ol.appendChild(displayItems("Carbohydrates", userBody.daycarbs +'g',colors[4]));
    ol.appendChild(displayItems("Sugar", userBody.daysugar +'g',colors[5]));
    ol.appendChild(displayItems("Fiber", userBody.dayfiber +'g',colors[6]));
    ol.appendChild(displayItems("Protein", userBody.dayprotein+'g',colors[7]));
    ol.appendChild(displayItems("Vitamin D", userBody.dayvitaminD+'mg',colors[8]));
    ol.appendChild(displayItems("Calcium", userBody.daycalcium+'mg',colors[9]));
    ol.appendChild(displayItems("Iron", userBody.dayiron+'mg', colors[10]));
    ol.appendChild(displayItems("Potassium", userBody.daypotassium+'mg',colors[11]));
    ol.appendChild(displayItems("Vitamin C", userBody.dayvitaminC+'mg',colors[12]));
}

function getRequirements(sex) {
  let requirements = [];
  if(sex == "male") {
    requirements.push(2400);
    requirements.push(2800);
    requirements.push(55);
    requirements.push(88);
    requirements.push(200);
    requirements.push(350);
    requirements.push(1500);
    requirements.push(2300);
    requirements.push(250);
    requirements.push(400);
    requirements.push(0);
    requirements.push(38);
    requirements.push(30);
    requirements.push(38);
    requirements.push(56);
    requirements.push(100);
    requirements.push(300);
    requirements.push(600);
    requirements.push(800);
    requirements.push(1200);
    requirements.push(8);
    requirements.push(12);
    requirements.push(3500);
    requirements.push(4700);
    requirements.push(65);
    requirements.push(95);
  }
  if(sex == "female") {
    requirements.push(1800);
    requirements.push(2200);
    requirements.push(44);
    requirements.push(77);
    requirements.push(200);
    requirements.push(350);
    requirements.push(1500);
    requirements.push(2300);
    requirements.push(200);
    requirements.push(350);
    requirements.push(0);
    requirements.push(25);
    requirements.push(21);
    requirements.push(25);
    requirements.push(46);
    requirements.push(100);
    requirements.push(300);
    requirements.push(600);
    requirements.push(800);
    requirements.push(1200);
    requirements.push(15);
    requirements.push(21);
    requirements.push(3500);
    requirements.push(4700);
    requirements.push(65);
    requirements.push(95);
  }
  return requirements;
}

sampleFunc(baseURL + userName);


function displayItems(text, text2, color) {
  var p = document.createElement('p');
  p.classList = color;
  p.appendChild(document.createTextNode(text + ": " + text2));
  return p;
}

function changeUsername() {
    document.getElementById("username").innerHTML = userName;
}


