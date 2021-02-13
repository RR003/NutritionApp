let tabPanes = document
  .getElementsByClassName("tab-header")[0]
  .getElementsByTagName("div");

for (let i = 0; i < tabPanes.length; i++) {
  tabPanes[i].addEventListener("click", function () {
    document
      .getElementsByClassName("tab-header")[0]
      .getElementsByClassName("active")[0]
      .classList.remove("active");
    tabPanes[i].classList.add("active");

    document
      .getElementsByClassName("tab-content")[0]
      .getElementsByClassName("active")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("tab-content")[0]
      .getElementsByClassName("tab-body")
      [i].classList.add("active");
  });
}

function onCreate() {
  var email = document.getElementById("email").value;
  var dob = document.getElementById("dob").value;
  var gender = document.getElementById("gender").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log("email", email);
  createAccount(email, dob, gender, username, password);
}

async function createAccount(email, dob, gender, username, password) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  console.log(today);

  const url = "http://172.24.49.229:8080/users";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      username: username,
      email: email,
      sex: gender,
      dob: dob,
      password: password,
      dateJoined: today,
      daycalories: 0,
      daytotal_fat: 0,
      daycholesterol: 0,
      daysodium: 0,
      daycarbs: 0,
      daysugar: 0,
      dayfiber: 0,
      dayprotein: 0,
      dayvitaminD: 0,
      daycalcium: 0,
      dayiron: 0,
      daypotassium: 0,
      dayvitaminC: 0,
    })
  );
}

function goHomePage() {
  console.log("you are logged in!!!");
}

async function verifyIdentity(username, password) {
  console.log("username", username);
  const response = await fetch(`http://172.24.49.229:8080/user/${username}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  let body = await response.json();
  console.log(body);
  let result = false;
  if (body.password === password) goHomePage();
  else console.log("You are not logged in");
}

function onSubmit() {
  var username = document.getElementById("usernames").value;
  console.log("username " + username);
  var password = document.getElementById("passwords").value;
  console.log("password " + password);
  verifyIdentity(username, password);
}
