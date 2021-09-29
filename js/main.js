const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://api.openweathermap.org/data/2.5/weather?q=Lexington&appid=e11e373f1e129fdd6a2ebaec6434d8b1')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

//trying to get a piece of the parsed data into the html
const json = {"name":"Lexington", "clouds":"{all:20}"};
const jsonInt = {"temp":"301.13"}
const stringData = JSON.parse(json);
const intData = JSON.parse(jsonInt);
document.getElementById("temp").innerHTML = intData.temp;
document.getElementById("tempF").innerHTML = ((intData.temp-273.15)*(9/5)+32);
document.getElementById("tempC").innerHTML = (intData.temp-273.15);

//create variables
var goButton = document.getElementById("goButton");
var city = document.getElementById("city");
var temp = document.getElementById("temp");
var tempF = document.getElementById("tempF");
var tempC = document.getElementById("tempC");
var condition = document.getElementById("condition");
var img = document.getElementById("img");

//function that sends us to the next page and runs state change
function goButtonMethod() {
    onStateChange();
}
//on click event listeners for each button sending to next page
goButton.addEventListener('click', goButtonMethod);

//function to hide elements
function hide(element) {
    element.style.visibility = "hidden";
}

//function to show elements
function show(element) {
    element.style.visibility = "visible";
}

//function that runs and pulls up when the page is loaded
function init(){
    onStateChange();
}

//state management function
function onStateChange() {
    
}
