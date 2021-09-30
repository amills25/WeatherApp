var cityValue;
var tempValue;
var tempFValue;
var tempCValue;
var conditionValue;
var zipValue;

// Make a request for a user with a given ID
function getWeather() {
    zipValue = document.getElementById('zip').value;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipValue},us&appid=e11e373f1e129fdd6a2ebaec6434d8b1`)
    .then(function (response) {
        // handle success
        //console.log(response);
        cityValue = response.data.name;
        tempValue = Math.round(response.data.main.temp);
        tempFValue = Math.round((tempValue-273.15)*(9/5)+32);
        tempCValue = Math.round((tempValue-273.15));
        conditionValue = response.data.weather[0].description;

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
        badZip(zipValue);
    })
}

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

//function that sends us to the next page and runs state change
function goButtonMethod() {
    getWeather();
    onStateChange();
}
//on click event listeners for each button sending to next page
goButton.addEventListener('click', goButtonMethod);

//state management function
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

//function to add images to other info section based on temperature in F
function addImage(temp) {
    if (temp > 70) {
        img.src="./img/hot.jpg";
    } else if (temp <= 70 && temp > 32){
        img.src="./img/mild.jpg";
    } else{
        img.src="./img/cold.jpg";
    }
}

//function to call when you're in error
function badZip(zip) {
    if (!Number.isInteger(zip) || zip.toString().length != 5) {
        errorMsg.innerHTML = "You have entered an invalid zip code.";
        show(errorMsg);
        hide(dataBox);
    }
}