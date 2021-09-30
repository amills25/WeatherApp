#### NOTES
* anything in the dashes shouldn't be there when you pull up the page
 * need a state change like on mindreader with an init
* bootstrap
 * 2 containers? or a header and a container with rows and columns below?

 ##### Functionality
As the user, I want to be able to type in a zip code in the input box, and click the button, and the weather data populates on the page

#### Pseudocode with Justin
1. URL - /weather (html)
2. onLoad (init)
3. STATE
4. submit (calls API)

```
INIT()
1. set variables -- state?
2. binding of events (input box and button) onEnter or click function?
3. give the input element auto focus
```
```
letWeather = {} //weather state object
.currentZip = "" or null?
.previousZip = []
.isBusy = false 
.errorMsg = ""
```

##### Variables
* goButton
* city*
* temp*
* tempF*
* tempC*
* condition*
* zipValue*
* img
* errorMsg
* dataBox
 * *will need to make empty vars in addition for some of these values that we're getting from the API

### START
* Click Button to Get Weather
 * goButtonMethod()
* Call API
 * get()
* Validation -- make sure our data works
 * then() -- if zip is good
 * onStateChange runs
 * getWeather runs
 * catch() -- if zip is bad
 * badZip runs
* Parse API data
 * sets variables with data
* onStateChange()
 * show dataBox
 * hide errorMsg
### END

#### Functions and such
* getWeather()
 * axios will run inside of here
 * set values from api
 * plug them into html
 * run badZip in error
* goButtonMethod()
 * run getWeather() when clicked
 * run onStateChange() when clicked
* onStateChange()
 * show dataBox
 * hide hide errorMsg
* hide()
* show()
* addImage()
 * if temp is at a certain mark, insert a certain picture
* badZip()
 * if user input is not a number or is not 5 digits, 
 * show errorMsg
 * hide dataBox