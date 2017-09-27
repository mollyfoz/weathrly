# Weathrly

This project utilizes the Wunderground API to display weather information for a selected location. Current, seven hour, and ten day forecasts are displayed when the user selects a location. The search function employs a prefix trie to auto populate location suggestions based on user input, and utilizes local storage to keep the user's most recently selected location on page reload.

FYI when opening this app: it has sound.

## To Use

Clone down this repo

`npm install`

`npm start`

To view weather data, enter your city, state or zip code. Suggested cities will populate and can be selected to search.

The search will return current weather data for the selected location, the forecast for the next seven hours, and the forecast for the next ten days.

The user can change location at any time.

## Images
![Landing Page](https://github.com/mollyfoz/weathrly/blob/master/assets/screenshots/Screen%20Shot%202017-09-22%20at%206.50.23%20AM.png)

![Search auto-complete](https://github.com/mollyfoz/weathrly/blob/master/assets/screenshots/Screen%20Shot%202017-09-22%20at%206.50.53%20AM.png)

![Full Weather](https://github.com/mollyfoz/weathrly/blob/master/assets/screenshots/Screen%20Shot%202017-09-22%20at%206.51.32%20AM.png)

#### Authors
This application was created by Molly Foster and Jason Lucas
Turing School, July 2017
