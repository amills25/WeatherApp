console.log("test");

// Make a request for a user with a given ID
axios.get('https://api.openweathermap.org/data/2.5/weather?q=Lexington&appid=e11e373f1e129fdd6a2ebaec6434d8b1')
  .then(function (response) {
    // handle success
    cityValue = response.data.name;
    tempValue = response.data.main.temp;
    conditionValue = response.data.weather[0].main;
    console.log(data);
  })
  .catch(function (error) {
    // handle failure
    console.error(error);
  })

var cityValue;
var tempValue;
var tempFValue;
var tempCValue;
var conditionValue;
// //trying to get a piece of the parsed data into the html
// var json = {"name":"Lexington", "clouds":"{all:20}"};
// var jsonInt = {"temp":"301.13"}
// var stringData = JSON.parse(json);
// var intData = JSON.parse(jsonInt);
// var allData = stringData + intData;
// document.getElementById("temp").innerHTML = Math.round(allData.temp);
// document.getElementById("tempF").innerHTML = Math.round(((allData.temp-273.15)*(9/5)+32));
// document.getElementById("tempC").innerHTML = Math.round((allData.temp-273.15));

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

// //weather state object
// var dataBox = {
    
// }

//function that sends us to the next page and runs state change
function goButtonMethod() {
    getWeather();
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

//state management function
function onStateChange() {
    show(dataBox);
    hide(errorMsg);
}

//same thing as what is above but with different syntax
async function getWeather() {
    try{
        var response = await axios.get('https://api.openweathermap.org/data/2.5/weather?zip=40504&appid=e11e373f1e129fdd6a2ebaec6434d8b1');
        // handle success
        cityValue = response.data.name;
        tempValue = response.data.main.temp;
        conditionValue = response.data.weather[0].main;
        console.log(data);
    }
    catch(error) {
        console.error(error);
    }
    console.log(response);
}