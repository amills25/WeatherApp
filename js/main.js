//create variables for the data we're pulling from outside
var cityValue;
var tempValue;
var tempFValue;
var tempCValue;
var conditionValue;
var zipValue;

//function wrapping our axios call
function getWeather() {
    zipValue = document.getElementById('zip').value; //set var to the user input zip code
    // Make a request for a user with a given ID
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipValue},us&appid=e11e373f1e129fdd6a2ebaec6434d8b1`)
    .then(function (response) {
        // handle success
        //console.log(response);
        //set vars = to the API data
        cityValue = response.data.name;
        tempValue = Math.round(response.data.main.temp);
        tempFValue = Math.round((tempValue-273.15)*(9/5)+32);
        tempCValue = Math.round((tempValue-273.15));
        conditionValue = response.data.weather[0].description;

        //input the data from API into their spot in the HTML
        city.innerHTML=cityValue;
        temp.innerHTML=tempValue + "°K";
        tempF.innerHTML=tempFValue + "°F";
        tempC.innerHTML=tempCValue + "°C";
        condition.innerHTML=conditionValue;
        addImage(tempFValue);
    })
    .catch(function (error) {
        // handle failure
        //console.error(error);
        //run function for a bad input calling the user input
        badZip(zipValue);
    })
}

//create variables for the HTML
var goButton = document.getElementById("goButton");
var city = document.getElementById("city");
var temp = document.getElementById("temp");
var tempF = document.getElementById("tempF");
var tempC = document.getElementById("tempC");
var condition = document.getElementById("condition");
var img = document.getElementById("img");
var errorMsg = document.getElementById("error");
var dataBox = document.getElementById("dataBox");

//function that runs our axios and state change when the button is clicked
function goButtonMethod() {
    getWeather();
    onStateChange();
}
//on click event listeners for button to do something
goButton.addEventListener('click', goButtonMethod);
// Execute a function when the user releases a key on the keyboard
zip.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    goButton.click();
  }
});

//state management function
//shows the weather info and hides the error message
function onStateChange() {
    show(dataBox);
    hide(errorMsg);
}

//function to hide elements
function hide(element) {
    element.style.visibility = "hidden";
}

//function to show elements
function show(element) {
    element.style.visibility = "visible";
}

//function to add images to other info section in html based on temperature in F
function addImage(temp) {
    if (temp > 70) {
        img.src="./img/hot.jpg";
    } else if (temp <= 70 && temp > 32){
        img.src="./img/mild.jpg";
    } else{
        img.src="./img/cold.jpg";
    }
}

//function to call when the user input is bad
function badZip(zip) {
    if (!Number.isInteger(zip) || zip.toString().length != 5) {
        errorMsg.innerHTML = "You have entered an invalid zip code.";
        show(errorMsg);
        hide(dataBox);
    }
}