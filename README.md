# PupHub
Find dogs available for adoption in The U.S. with an easy to use search tool.

[Check it out in action.](https://puphubapp.herokuapp.com/)

## Installation
**You’ll need to have Node >= 6 on your machine.**

From the location where you want to install the app:
```
git clone https://github.com/ianrosedev/PupHub.git
```
Then from the ```root``` directory:
```
npm run install-all
```
The app and all dependencies will now be installed.

**You will need two API keys - Google Maps & RescueGroups!**

**Google:**
The [Google Developers documentation](https://developers.google.com/maps/documentation/javascript/get-api-key) will guide you through the process for Google. You will need a 'Maps JavaScript API key'. After obtaining a key, go to the Google APIs console. You will need to hook up 3 APIs from the library:

* Google Places API Web Service
* Google Maps Geocoding API
* Google Maps JavaScript API

The API key located in ```Credentials``` will now go into the  script ```maps.googleapis.com``` query parameters in the ```client/public/index.html``` file.

**RescueGroups:**
The [RescueGroups documentation](https://rescuegroups.org/services/adoptable-pet-data-http-json-api/) will guide you through the process for RescueGroups. After receiving an API key, it will be the ```rescueGroupsKey``` in the ```keys.js``` file.

The app is now ready to go!

## Starting the App
From the ```root``` directory:
```
npm start
```
This will start both the frontend and API servers concurrently. If Chrome is available, the app will open automatically.

The app is now running at: ```http://localhost:3000```

If you need access to the API server, it is running at: ```http://localhost:3001```

## Testing
### Client:
From the ```client``` directory:

Test the whole app:
```
npm test  
```
Test an individual component:
```
npm test -- [ComponentToTest].test.js
```

### Server:
There are currently no tests for the server.
## Build
The ```client``` side is built with React using the Facebook ```create-react-app```. More documentation will be found at the [GitHub page](https://github.com/facebookincubator/create-react-app).

From the ```client``` directory:
```
npm run build
```
A production ready build folder will be produced.

## Usage
When you load the app you will be at the landing page. From there you can go to the Search page to look for dogs. Just enter a city and whatever search parameters you would like to find dogs near you. Be sure to check out the Resources page for additional places to find and help dogs in need.

Have fun!

## License
### Internet Systems Consortium license

Copyright (c) 2018, Ian Rose

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
THIS SOFTWARE.
