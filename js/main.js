const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://github.com/amills25?tab=repositories')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


//create variables
var goButton = document.getElementById("goButton");

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
