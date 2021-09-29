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

### START
* Validation -- make sure our data works
* Call API
* Parse API data -- putting it into letWeather then it updates the view
* onStateChange
* Update view
### END