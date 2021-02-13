let baseURL = "http://172.24.49.229:8080/user/";
//var userName = sessionStorage.getItem("username");
let userName = "Rahul003";

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
    let ol = document.querySelector(".ol");
    ol.appendChild(displayItems("Calories", userBody.daycalories));
    ol.appendChild(displayItems("Total Fat", userBody.daytotal_fat + 'g'));
    ol.appendChild(displayItems("Cholesterol", userBody.daycholesterol +'mg'));
    ol.appendChild(displayItems("Sodium", userBody.daysodium + +'mg'));
    ol.appendChild(displayItems("Carbohydrates", userBody.daycarbs +'g'));
    ol.appendChild(displayItems("Sugar", userBody.daysugar +'g'));
    ol.appendChild(displayItems("Fiber", userBody.dayfiber +'g'));
    ol.appendChild(displayItems("Protein", userBody.dayprotein+'g'));
    ol.appendChild(displayItems("Vitamin D", userBody.dayvitaminD+'mg'));
    ol.appendChild(displayItems("Calcium", userBody.daycalcium+'mg'));
    ol.appendChild(displayItems("Iron", userBody.dayiron+'mg'));
    ol.appendChild(displayItems("Potassium", userBody.daypotassium+'mg'));
    ol.appendChild(displayItems("Vitamin C", userBody.dayvitaminC+'mg'));
}



sampleFunc(baseURL + userName);


function displayItems(text, text2) {
  var add = document.createElement('li');
  add.appendChild(document.createTextNode(text + ": " + text2));
  return add;
}

function changeUsername() {
    document.getElementById("username").innerHTML = userName;
}


