##FEND P5_1: Neighborhood Map Project
=====================================
###Instructions for Use and Interaction
---------------------------------------
###1.GitHub repository:
https://github.com/rtkirby/NeighborhoodMap
* Open the index.html file with a web browser to see and interact with API Google map.
* There are several ways to get information about the red map markers.
* Clicking a map marker will open an information window for the location, click the 'X' to close the window.
* Clicking one of the street names on the left of the screen will produce the same result.
* Typing a combination of the beging letters from a city name in the input box will result in a display of the matching information box.

##Additional Notes
------------------
* Five locations are identified
* Five markers are placed with DROP animation using the Geocoder API to set each location from its address.
* Each marker has a click handler to toggle the marker's bounce animation.
* Mousing over the city name in the list highlights the name and activates the marker's bounce animation.
* Clicking on the city name opens its marker's information window.
* Type any beging letter(s) of a name in search box to filter down to a targeted city name.
* Clicking on a marker will start it bouncing and display an info window
* IIFE used in addListeners() and wikiRequests() for looping through markers
* Google Map failure is detected by the value of the myMap variable

##References
------------
* Udacity Frontend Web Developer lessons
* Web: [Knockout](http://knockoutjs.com)
* Web: [JQuery & Ajax](http://api.jquery.com/jquery.ajax/)
* Web: [MediaWiki action API](https://www.mediawiki.org/wiki/API%3aMain_page)
* Web: [Bootstrap Tutorial](http://www.w3schools.com/bootstrap/)
* Book: [Javascript & JQuery Interactive front-end web development](Jon Duckett, Public Library)
* Online Tutorial: [Lynda, Javascript for web designers](Lynda.com)
