#### NOTES
* anything in the dashes shouldn't be there when you pull up the page
 * need a state change like on mindreader with an init
* bootstrap
 * 2 containers? or a header and a container with rows and columns below?

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
* city
* temp
* tempF
* tempC
* condition
* img
* json
* jsonInt
* stringData
* intData
* errorMsg

### START
* Call API
 * get()
* Validation -- make sure our data works
 * then()
 * onStateChange
 * catch() 
 * return errorMsg
* Parse API data -- putting it into letWeather then it updates the view
 * create vars for json data
 * parse() or parseInt() to pull data we want
* onStateChange()
 * take data and plug it into html
* Update view
 * show() or hide() the pieces we want
### END

#### Functions and such
* hide()
* show()
* init()
* onStateChange()