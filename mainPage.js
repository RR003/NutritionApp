var foodForms = [];
function getDate() {
    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth()+1; 
    let yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 

    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = mm+'-'+dd+'-'+yyyy;
    return today;
}


let body = "";

async function sampleFunc(url, meal, classModifier) {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    body = await response.json();
    displayFood(body, meal, classModifier)
}

function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}

function main() {
    document.getElementById("today").innerHTML = getDate();
    sampleFunc('http://172.24.49.229:8080/breakfast', "Breakfast", 0);
    sleepFor(150);
    sampleFunc('http://172.24.49.229:8080/lunch', "Lunch", 1);
    sleepFor(150);
    sampleFunc('http://172.24.49.229:8080/dinner', "Dinner", 2);
}

function displayFood(dict, meal, classModifier) {
    var addText = document.querySelector(".putFood" + classModifier);
    let h4 = document.createElement("h4");
    let color = ["(235, 155, 76)", "(201, 71, 245)", "(79,134,247)"];
    h4.setAttribute("style", "text-align: center; color: rgb" + color[classModifier]);
    h4.appendChild(document.createTextNode("<<" + meal + ">>"));
    addText.appendChild(h4);
    var foodContainer = document.createElement("div");
    foodContainer.classList = "itemBox";
    addText.appendChild(foodContainer);
    for(var key in dict) {
        item = dict[key];
        let displayBox = document.createElement("div");
        displayBox.classList = "displayBox"
        let ribbon = document.createElement("div");
        ribbon.classList = ("topRibbon" + classModifier);
        let h6 = document.createElement("h6");
        h6.setAttribute("style", "text-align: center;")
        h6.setAttribute("onclick", "bringUp()")
        h6.appendChild(document.createTextNode(item.item));
        displayBox.setAttribute("id", item.item);
        displayBox.appendChild(ribbon);
        displayBox.appendChild(h6);
        // create padding space
        let padding = document.createElement("div");
        padding.classList = "containerPadding";
        padding.setAttribute("onclick", "bringUp()");
        displayBox.appendChild(padding);
        displayBox.appendChild(createButtonControl(item.item));
        foodContainer.appendChild(displayBox);
        // add buttons: red
    }
}


function createButtonControl(food) {
    //create div
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

function submitForm() {
    var postValues = {};
    for(let i = 0; i < foodForms.length; i++) {
        if(foodForms[i].value > 0) {
            postValues[foodForms[i].name] = foodForms[i].value;
        }
    }
    console.log(postValues);
}
main();
