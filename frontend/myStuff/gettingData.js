/*const url = `http://172.24.49.229:8080/title`;
console.log(url);
console.log("hellllooo");
axios.get(url).then((data) => console.log(data));*/

const Http = new XMLHttpRequest();
const url = "http://172.24.49.229:8080/breakfast";
// Http.open("GET", url);
// Http.send();

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
