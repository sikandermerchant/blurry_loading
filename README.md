# blurry_loading

This project uses text and background for and html page and loads it with a blur

- The blur is added using css filter property for blur
- css calc property is also used to make sure the opacity looks distributed at the start of the page load
- A function from stackoverflow is used to map on range of number to another from stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
- setInterval and clearInterval are used to create a blur increament after every 3ms
- using the function from stackoverflow, the blur increament is then created for both text and backgroung
