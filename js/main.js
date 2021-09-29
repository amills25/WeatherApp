const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://api.openweathermap.org/data/2.5/weather?q=Lexington&appid=e11e373f1e129fdd6a2ebaec6434d8b1')
  .then(function (response) {
    // handle success
    //async?
    //await?
    console.log(response);
  })
  .catch(function (error) {
    if (error != json || error != jsonInt) {
        errorMsg.innerHTML = "You have entered an invalid zip code. " 
    }
  })

//trying to get a piece of the parsed data into the html
var json = {"name":"Lexington", "clouds":"{all:20}"};
var jsonInt = {"temp":"301.13"}
var stringData = JSON.parse(json);
var intData = JSON.parse(jsonInt);
var allData = stringData + intData;
document.getElementById("temp").innerHTML = Math.round(allData.temp);
document.getElementById("tempF").innerHTML = Math.round(((allData.temp-273.15)*(9/5)+32));
document.getElementById("tempC").innerHTML = Math.round((allData.temp-273.15));

//create variables
var goButton = document.getElementById("goButton");
var city = document.getElementById("city");
var temp = document.getElementById("temp");
var tempF = document.getElementById("tempF");
var tempC = document.getElementById("tempC");
var condition = document.getElementById("condition");
var img = document.getElementById("img");
var errorMsg = document.getElementById("error");
var dataBox = document.getElementById("dataBox");
var zip = document.getElementById("zip");

//weather state object
var dataBox = {
    
}

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
    //if zip is valid
    if (zip) {
        show(dataBox);
        hide(errorMsg);
    }
    //if zip isn't valid
    else {
        show(errorMsg);
        hide(dataBox);
    }
}
